import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';

export default function GalleryPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">Gallery Page</h1>
            {isLoading && <Loader />}
            {!isLoading && <>Gallery Content</>}
        </MainLayout>
    );
}
