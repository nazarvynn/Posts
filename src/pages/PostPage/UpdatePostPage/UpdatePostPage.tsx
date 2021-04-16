import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchData, useMutationData } from '../../../relay/hooks';
import { PostQuery } from '../../../relay/queries';
import { PostMutation } from '../../../relay/mutations';
import { Post } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import FormPage from '../PostForm/FormPage';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostQuery, {
        queryVariables: { id: postId },
    });
    const { data: newPost, loading: updating, mutate } = useMutationData(PostMutation);
    console.log('update', updating, newPost);
    const onUpdate = ({ title, body }: Post) => {
        mutate({ title, body }, postId);
    };

    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            {(loading || updating) && <Loader />}
            {!loading && post && <FormPage formData={post as Post} onSubmit={onUpdate} />}
        </>
    );
}
