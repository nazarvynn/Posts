/*
import { useEffect, useState } from 'react';
import { useQueryLoader } from 'react-relay/hooks';
import { GalleryPageQuery } from '../../relay/queries';

const useInfiniteLoader = (query: any, page: any) => {
    const [data, setData] = useState([]);
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);
    useEffect(() => {
        return () => {
            disposeQuery();
        };
    }, []);

    useEffect(() => {
        loadQuery({
            variables: {
                page,
            },
        }).then((newData) => {
            setData([...data, newData]);
        });
    }, [page]);
    return {
        data,
    };
};
const MyComponent = () => {
    const [page, setPage] = useState(0);
    const { data } = useInfiniteLoader(query, page);
    return (
        <>
            {data.map([])}
            <button onClick={() => setPage(page + 1)}>123</button>
        </>
    );
};
*/

export default function useInfiniteLoaderExample() {}
