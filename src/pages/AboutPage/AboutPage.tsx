import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';

export default function AboutPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">About</h1>
            {isLoading && <Loader />}
            {!isLoading && <>About Content</>}
        </MainLayout>
    );
}
