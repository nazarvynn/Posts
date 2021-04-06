import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';

export default function AboutPage() {
    const isLoading = false;
    return (
        <MainLayout>
            <h1 className="my-4">About</h1>
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <p>This is an example of application with the next parts</p>
                    <ul>
                        <li>Posts</li>
                        <li>Post</li>
                        <li>Comments</li>
                        <li>Gallery</li>
                        <li>Users</li>
                    </ul>
                </>
            )}
        </MainLayout>
    );
}
