import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchData, useMutationData } from '../../../relay/hooks';
import { PostQuery } from '../../../relay/queries';
import { PostMutation } from '../../../relay/mutations';
import { Post } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import FormPage from '../PostForm/FormPage';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: number };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostQuery, {
        queryVariables: { id: postId },
    });
    const [formData, setFormData] = useState(null);
    const { data: newPost, loading: updating } = useMutationData(PostMutation, formData, postId);
    console.log('on update', postId, newPost, post, updating);

    // const onUpdate = useCallback((data: Post) => {
    //     const { data: post, loading: updating } = useMutationData(PostMutation, data, postId);
    //     console.log('on update', postId, data, post, updating);
    // }, []);
    // const onUpdate = (data: Post) => {
    // };

    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            {loading && <Loader />}
            {!loading && post && (
                <FormPage
                    formData={post as Post}
                    onSubmit={({ title, body }) => {
                        setFormData({ title, body });
                    }}
                />
            )}
        </>
    );
}
