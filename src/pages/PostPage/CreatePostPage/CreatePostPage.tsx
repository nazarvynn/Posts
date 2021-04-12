import React from 'react';

import { Post } from '../../../core/models';
import FormPage from '../PostForm/FormPage';

export default function CreatePostPage() {
    const onCreate = (data: Post) => {
        console.log('on create', data);
    };
    return (
        <>
            <h1 className="my-4">Create Post</h1>
            <FormPage onSubmit={onCreate} />
        </>
    );
}
