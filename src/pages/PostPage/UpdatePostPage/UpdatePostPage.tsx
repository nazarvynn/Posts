import React from 'react';
import { useParams } from 'react-router-dom';

import { PostQuery } from '../../../relay/queries';
import { useFetchData } from '../../../relay/hooks';
import { Post } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import FormPage from '../PostForm/FormPage';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: number };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostQuery, {
        queryVariables: { id: postId },
    });
    const onUpdate = (data: Post) => {
        console.log('on update', postId, data);
    };
    return (
        <>
            <h1 className="my-4 page-tile">Update Post</h1>
            {loading && <Loader />}
            {!loading && post && <FormPage formData={post as Post} onSubmit={onUpdate} />}
        </>
    );
}
