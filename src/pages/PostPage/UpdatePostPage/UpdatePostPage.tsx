import React from 'react';
import { useParams } from 'react-router-dom';

import FormPage from '../PostForm/FormPage';
import { Post } from '../../../core/models';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: number };
    const onUpdate = (data: Post) => {
        console.log('on update', postId, data);
    };
    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            <FormPage onSubmit={onUpdate} />
        </>
    );
}
