import React from 'react';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import PostsList from './PostsList/PostsList';
import Pagination from './Pagination/Pagination';
import { PostsStub } from '../../stubs/posts.stub';

export default function PostsPage() {
    const isLoading = false;

    return (
        <MainLayout>
            <h1 className="my-4">Posts list</h1>
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <PostsList posts={PostsStub} />
                    <Pagination />
                </>
            )}
        </MainLayout>
    );
}
