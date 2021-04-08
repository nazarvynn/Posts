import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';
import { GalleryPageQuery } from '../../relay/queries';
// import { useRelayQuery } from '../../relay/hooks';

export default function GalleryPage() {
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(GalleryPageQuery);
    useEffect(() => {
        loadQuery({
            options: {
                paginate: {
                    page: 1,
                    limit: 24,
                },
            },
        });
        return () => {
            disposeQuery();
        };
    }, [loadQuery, disposeQuery]);

    // const queryReference = useRelayQuery(GalleryPageQuery, { paginate: { page: 1, limit: 24 } });

    return (
        <MainLayout>
            <h1 className="my-4">Gallery</h1>
            <Suspense fallback={<Loader />}>{queryReference && <Container queryReference={queryReference} />}</Suspense>
        </MainLayout>
    );
}

const Container = ({ queryReference }: { queryReference: any }) => {
    const { photos } = usePreloadedQuery(GalleryPageQuery, queryReference) as any;
    return <>{photos?.data?.length > 0 && <GalleryList photos={photos?.data} />}</>;
};
