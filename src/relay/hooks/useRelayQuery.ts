import { useEffect } from 'react';
import { useQueryLoader } from 'react-relay/hooks';

export default function useRelayQuery(query: any, options: any) {
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);
    useEffect(() => {
        loadQuery({ options });
        return () => {
            disposeQuery();
        };
    }, [loadQuery, disposeQuery, options]);

    return queryReference;
}

/*
// Usage example
const options = useMemo(() => ({ paginate: { page, limit: 24 } }), [page]);
const queryReference = useRelayQuery(GalleryPageQuery, options);
*/
