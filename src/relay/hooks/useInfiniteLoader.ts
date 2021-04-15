import { useEffect, useState } from 'react';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../../relayEnvironment';

export default function useInfiniteLoader(
    query: any,
    page: number,
    pageSize: number
): { isLoading: boolean; data: any[] } {
    const [data, setData] = useState({ isLoading: false, data: [] });
    const setIsLoading = () => {
        setData(({ data: oldData }) => ({ isLoading: true, data: [...oldData] }));
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
        setData(({ data: oldData }) => ({ isLoading: false, data: [...oldData.concat(data)] }));
    };

    useEffect(() => {
        setIsLoading();
        const subscription$ = fetchQuery(relayEnvironment, query, {
            options: { paginate: { page, limit: pageSize } },
        }).subscribe({ next: updateData });
        return () => {
            subscription$.unsubscribe();
        };
    }, [query, page, pageSize]);

    return data;
}
