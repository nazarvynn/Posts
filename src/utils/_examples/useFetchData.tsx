/*
import { useState, useEffect, useCallback } from 'react';
import { mergeDeepLeft } from 'ramda';
import { useQuery } from '@apollo/react-hooks';
import { handleError } from '../utils';

const useFetchData = (query: any, _variables = {}, onErrorUrl = '/home') => {
    const ITEMS_PER_PAGE = 25;
    const [variables, setVariables] = useState({
        ..._variables,
        start_index: 0,
        count: ITEMS_PER_PAGE,
    }) as any;
    const [page, setPage] = useState(0);
    const [filters, _setFilters] = useState({});
    const [isInitiallyEmpty, setIsInitiallyEmpty] = useState(false);
    const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);
    const { data: fetchedData, loading, refetch: originalRefetch } = useQuery(query, {
        variables: variables,
        onError: (error: any) => handleError(refetch, error, onErrorUrl),
        fetchPolicy: 'no-cache',
    });
    const dataKeys = Object.keys(fetchedData || {});
    if (dataKeys.length > 1) {
        throw new Error(
            'Looks like query returns more than one data set. "useFetchData" should return only single collection'
        );
    }
    const dataKey = dataKeys[0];
    const data = fetchedData ? fetchedData[dataKey].data : [];
    const count = data.length;
    // eslint-disable react-hooks/exhaustive-deps
    const refetch = useCallback(
        (newVariables, page = 0, filters?) => {
            setVariables(
                mergeDeepLeft(
                    {
                        ...variables,
                        filters: filters || variables?.filters || {},
                        start_index: ITEMS_PER_PAGE * page,
                    },
                    newVariables
                )
            );
        },
        [originalRefetch]
    );
    // eslint-enable react-hooks/exhaustive-deps
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);
    const setFilters = (_filters: any) => {
        const filters = { ..._filters };
        for (const filterKey in filters) {
            filters[filterKey] = filters[filterKey].value;
        }
        console.log(filters, ' filters');
        _setFilters(filters);
        setPage(0);
    };
    // eslint-disable react-hooks/exhaustive-deps
    useEffect(() => {
        refetch(
            {
                filters,
            },
            page
        );
    }, [filters, page]);
    useEffect(() => {
        if (fetchedData) {
            if (!isInitiallyLoaded) {
                setIsInitiallyLoaded(true);
                if (fetchedData[dataKey].data.length === 0) {
                    setIsInitiallyEmpty(true);
                }
            }
        }
    }, [fetchedData, isInitiallyLoaded]);
    // eslint-enable react-hooks/exhaustive-deps
    return {
        data,
        isLess: page > 0,
        isMore: isInitiallyLoaded && !loading && fetchedData[dataKey].is_more,
        count,
        loading,
        isEmpty: !loading && data > 0,
        isInitiallyEmpty,
        isInitiallyLoaded,
        filters,
        refetch,
        nextPage,
        prevPage,
        setFilters,
    };
};
export default useFetchData;
*/

export default function useFetchDataExample() {}
