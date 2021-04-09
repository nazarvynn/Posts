import React, { useEffect, useState } from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';
import { getPhotosByPage } from '../../services';
import { GalleryState } from '../../core/models';

export default function GalleryPage() {
    const [page, setPage] = useState(1);
    const [gallery, setGallery] = useState({ isLoading: false, photos: [] } as GalleryState);
    const setIsLoading = () => {
        setGallery(({ photos: oldPhotos }) => ({ isLoading: true, photos: [...oldPhotos] }));
    };
    const setGalleryPage = ({ photos: { data } }: any) => {
        setGallery(({ photos: oldPhotos }) => ({ isLoading: false, photos: [...oldPhotos.concat(data)] }));
    };

    useEffect(() => {
        setIsLoading();
        getPhotosByPage(page).subscribe({ next: setGalleryPage });
    }, [page]);

    return (
        <MainLayout>
            <h1 className="my-4">Gallery</h1>
            <div className="row">
                {gallery.isLoading && <Loader />}
                {gallery.photos.length > 0 && <GalleryList photos={gallery.photos} />}
                <button
                    className="btn btn-primary mx-auto mb-5"
                    onClick={() => {
                        setIsLoading();
                        setPage(page + 1);
                    }}
                >
                    Load more
                </button>
            </div>
        </MainLayout>
    );
}
