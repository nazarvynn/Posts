import React, { useState } from 'react';

import { PhotosQuery } from '../../relay/queries';
import useInfiniteLoader from '../../relay/hooks/useInfiniteLoader';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';

export default function GalleryPage() {
    const PAGE_SIZE = 24;
    const [page, setPage] = useState(1);
    const { isLoading, data: photos } = useInfiniteLoader(PhotosQuery, page, PAGE_SIZE);
    return (
        <>
            <h1 className="my-4 page-tile">Gallery</h1>
            <div className="row">{photos.length > 0 && <GalleryList photos={photos} />}</div>
            {isLoading && <Loader />}
            <div className="row">
                <button
                    className="btn btn-primary mx-auto mt-2 mb-4"
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    Load more
                </button>
            </div>
        </>
    );
}
