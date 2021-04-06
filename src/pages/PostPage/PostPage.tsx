import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';

export default function PostPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">Post Page</h1>
            {isLoading && <Loader />}
            {!isLoading && <>Post Content</>}
        </MainLayout>
    );
}
