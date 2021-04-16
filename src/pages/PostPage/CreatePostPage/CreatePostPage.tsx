import React from 'react';

import { useMutationData } from '../../../relay/hooks';
import { CreatePostMutation } from '../../../relay/mutations';
import { Post } from '../../../core/models';
import FormPage from '../PostForm/FormPage';
import Loader from '../../../components/Loader/Loader';

export default function CreatePostPage() {
    const { loading: creating, mutate } = useMutationData(CreatePostMutation);
    const onCreate = ({ title, body }: Post) => {
        mutate({ input: { title, body } }).then((newPost) => {
            console.log('newPost', newPost);
        });
    };
    return (
        <>
            <h1 className="my-4 page-tile">Create Post</h1>
            {creating && <Loader />}
            <FormPage onSubmit={onCreate} loading={creating} />
        </>
    );
}
