import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import GalleryList from './GalleryList/GalleryList';
import { PhotosStub } from '../../stubs';

export default function GalleryPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">Gallery</h1>
            {isLoading && <Loader />}
            {!isLoading && <GalleryList photos={PhotosStub} />}
        </MainLayout>
    );
}
