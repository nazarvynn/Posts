import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { getPostsByPage } from '../../store/PostsSlice/PostsSlice';
import Loader from '../../components/Loader/Loader';
import PostsList from './PostsList/PostsList';
import Pagination from './Pagination/Pagination';
import { Post } from '../../core/models';
import chunks from '../../utils/chunks';

const PAGE_SIZE = 3;
export default function PostsPage() {
    const pagesCount = 3;
    const { page } = (useParams() as unknown) as { page: number };
    const { posts, loading } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPostsByPage(page));
    }, [dispatch, page]);

    return (
        <>
            <h1 className="my-4">Posts</h1>
            {loading && <Loader />}
            {!loading && posts?.length && (
                <>
                    <PostsList posts={getPostInPage(posts, +page)} />
                    <Pagination activePage={+page} pagesCount={pagesCount} />
                </>
            )}
        </>
    );
}

function getPostInPage(posts: Post[], page: number): Post[] {
    return [...chunks(posts, PAGE_SIZE)[page - 1]];
}
