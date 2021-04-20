import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { fetchPostById, updatePost, selectPostById } from '../../../store';
import { Post } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import FormPage from '../PostForm/FormPage';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { post, loading } = useSelector((state: RootState) => selectPostById(state, postId));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!post) {
            dispatch(fetchPostById(postId));
        }
    }, [dispatch, post, postId]);

    const onUpdate = ({
        title,
        body,
        userName,
        userEmail,
    }: {
        title: string;
        body: string;
        userName: string;
        userEmail: string;
    }) => {
        dispatch(updatePost({ post: { id: postId, title, body, user: { name: userName, email: userEmail } } }));
    };

    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            {loading && <Loader />}
            {!loading && post && <FormPage formData={post as Post} onSubmit={onUpdate} />}
        </>
    );
}
