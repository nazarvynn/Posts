import React from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from '../../../store';
import FormPage from '../PostForm/FormPage';

export default function CreatePostPage() {
    const dispatch = useDispatch();
    const onCreate = (
        {
            title,
            body,
            userName,
            userEmail,
        }: {
            title: string;
            body: string;
            userName: string;
            userEmail: string;
        },
        { resetForm }: any
    ) => {
        dispatch(createPost({ post: { title, body, user: { name: userName, email: userEmail } } }));
        resetForm();
    };
    return (
        <>
            <h1 className="my-4 page-tile">Create Post</h1>
            <FormPage onSubmit={onCreate} />
        </>
    );
}
