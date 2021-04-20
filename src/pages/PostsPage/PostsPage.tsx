import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { fetchPostsByPage } from '../../store';
import Loader from '../../components/Loader/Loader';
import PostsList from './PostsList/PostsList';

export default function PostsPage() {
    const PAGE_SIZE = 3;
    const { posts, loading } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsByPage({ page: 1, pageSize: PAGE_SIZE }));
    }, [dispatch]);

    return (
        <>
            <h1 className="my-4 page-tile">Posts</h1>
            {loading && <Loader />}
            {!loading && posts?.length && (
                <>
                    <PostsList posts={posts} />
                </>
            )}
        </>
    );
}
