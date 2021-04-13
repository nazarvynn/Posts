import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const { page } = (useParams() as unknown) as { page: number };
    const { posts, count, loading } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    const pagesCount = Math.ceil(count / PAGE_SIZE);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPostsByPage(page));
    }, [dispatch, page]);

    const onPageChange = (page: number) => {
        if (page >= 1 && page <= pagesCount) {
            history.push(`/posts/${page}`);
        }
    };

    return (
        <>
            <h1 className="my-4">Posts</h1>
            {loading && <Loader />}
            {!loading && posts?.length && (
                <>
                    <PostsList posts={getPostInPage(posts, +page)} />
                    <Pagination activePage={+page} pagesCount={pagesCount} onPageChange={onPageChange} />
                </>
            )}
        </>
    );
}

function getPostInPage(posts: Post[], page: number): Post[] {
    return [...chunks(posts, PAGE_SIZE)[page - 1]];
}
