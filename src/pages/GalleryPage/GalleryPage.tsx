import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';
import { GalleryPageQuery } from '../../relay/queries';
import { useRelayQuery } from '../../relay/hooks';

export default function GalleryPage() {
    const [page, setPage] = useState(1);
    // TODO: Move "useMemo" to "useRelayQuery"
    const options = useMemo(() => ({ paginate: { page, limit: 24 } }), [page]);
    const queryReference = useRelayQuery(GalleryPageQuery, options);

    return (
        <MainLayout>
            <h1 className="my-4">Gallery</h1>
            <Suspense fallback={<Loader />}>{queryReference && <Container queryReference={queryReference} />}</Suspense>
            <div className="row">
                <button className="btn btn-primary mx-auto mb-5" onClick={() => setPage(page + 1)}>
                    Load more
                </button>
            </div>
        </MainLayout>
    );
}

const Container = ({ queryReference }: { queryReference: any }) => {
    const [photos, setPhotos] = useState([]);
    const {
        photos: { data },
    } = usePreloadedQuery(GalleryPageQuery, queryReference) as any;

    useEffect(() => {
        if (data?.length) {
            setPhotos((oldPhotos) => [...oldPhotos.concat(data)]);
        }
    }, [data]);

    return <>{photos.length > 0 && <GalleryList photos={photos} />}</>;
};
