import React from 'react';

import Loader from '../../components/Loader/Loader';
import PostsList from './PostsList/PostsList';
import Pagination from './Pagination/Pagination';
import { PostsStub } from '../../stubs';

export default function PostsPage() {
    const isLoading = false;

    return (
        <>
            <h1 className="my-4">Posts</h1>
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <PostsList posts={PostsStub} />
                    <Pagination />
                </>
            )}
        </>
    );
}
