import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';

export default function UsersPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">Users Page</h1>
            {isLoading && <Loader />}
            {!isLoading && <>Users Content</>}
        </MainLayout>
    );
}
