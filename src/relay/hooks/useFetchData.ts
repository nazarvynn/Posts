import { useCallback, useEffect, useState } from 'react';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../../relayEnvironment';

export default function useFetchData(query: any, pageSize: number = 10, _variables = {}, onErrorUrl = '/posts') {
    // const [variables, setVariables] = useState({ ..._variables }) as any;
    const [page, setPage] = useState(1);
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);
    const [isInitiallyEmpty, setIsInitiallyEmpty] = useState(false);
    const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);

    const [data, setData] = useState({ isLoading: false, data: [], totalCount: 0 });
    const setIsLoading = () => {
        setData(({ data: oldData, totalCount }) => ({ isLoading: true, data: [...oldData], totalCount }));
    };
    const updateData = (response: any) => {
        const dataKeys = Object.keys(response || {});
        if (dataKeys?.length > 1) {
            throw new Error(
                'Looks like query returns more than one data set. "useFetchData" should return only single collection'
            );
        }
        const [dataKey] = dataKeys;
        const data = response ? response[dataKey].data : [];
        const { totalCount } = response ? response[dataKey].meta : { totalCount: 0 };
        setData(() => ({ isLoading: false, data, totalCount }));
    };
    const loadByPage = useCallback((page: number = 1) => {
        setPage(page);
    }, []);

    useEffect(() => {
        setIsLoading();
        const subscription$ = fetchQuery(relayEnvironment, query, {
            options: { paginate: { page, limit: pageSize } },
        }).subscribe({ next: updateData });
        return () => {
            subscription$.unsubscribe();
        };
    }, [query, page, pageSize]);

    useEffect(() => {
        if (data) {
            if (!isInitiallyLoaded) {
                setIsInitiallyLoaded(true);
                if (!data.data.length) {
                    setIsInitiallyEmpty(true);
                }
            }
        }
    }, [data, isInitiallyLoaded]);

    return {
        data: data.data,
        totalCount: data.totalCount,
        loading: data.isLoading,
        activePage: page,
        isLess: page > 0,
        isMore: isInitiallyLoaded && !data.isLoading && page < Math.ceil(data.totalCount / pageSize),
        isEmpty: !!data.isLoading && data.data.length,
        isInitiallyEmpty,
        isInitiallyLoaded,
        nextPage,
        prevPage,
        loadByPage,
    };
}
