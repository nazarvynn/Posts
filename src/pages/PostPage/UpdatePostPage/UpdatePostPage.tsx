import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchData, useMutationData } from '../../../relay/hooks';
import { PostQuery } from '../../../relay/queries';
import { UpdatePostMutation } from '../../../relay/mutations';
import { Post } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import FormPage from '../PostForm/FormPage';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostQuery, {
        queryVariables: { id: postId },
    });
    const { loading: updating, mutate } = useMutationData(UpdatePostMutation);
    console.log('update 1', updating);
    const onUpdate = ({ title, body }: Post) => {
        mutate({ id: postId, input: { title, body } }).then((newPost) => {
            console.log('update 2', newPost);
        });
    };

    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            {(loading || updating) && <Loader />}
            {!loading && post && <FormPage formData={post as Post} onSubmit={onUpdate} loading={updating} />}
        </>
    );
}
