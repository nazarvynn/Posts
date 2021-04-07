import React, { Suspense, useEffect } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';

const PhotoQuery = graphql`
    query GalleryPagePhotoQuery($options: PageQueryOptions) {
        photos(options: $options) {
            data {
                id
                title
                url
                thumbnailUrl
            }
            meta {
                totalCount
            }
        }
    }
`;

export default function GalleryPage() {
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(PhotoQuery);
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

    return (
        <MainLayout>
            <h1 className="my-4">Gallery</h1>
            <Suspense fallback={<Loader />}>{queryReference && <Container queryReference={queryReference} />}</Suspense>
        </MainLayout>
    );
}

const Container = ({ queryReference }: { queryReference: any }) => {
    const { photos } = usePreloadedQuery(PhotoQuery, queryReference) as any;
    return <>{photos?.data?.length > 0 && <GalleryList photos={photos?.data} />}</>;
};
