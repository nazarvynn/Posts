import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchData } from '../../../relay/hooks';
import { PostQuery } from '../../../relay/queries';
import Loader from '../../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import { Comment } from '../../../core/models';

export default function ViewPostPage() {
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostQuery, {
        queryVariables: { id: postId },
    });
    const onCommentFormSubmit = ({ name, body }: { name: string; body: string }) => {
        const comment: Comment = {
            name,
            body,
        };
        console.log('comment', postId, comment);
    };

    return (
        <>
            {loading && <Loader />}
            {!loading && post && (
                <>
                    <PostContent {...post} id={postId} />
                    <hr />
                    <CommentForm onSubmit={onCommentFormSubmit} />
                    <CommentList comments={post?.comments?.data} />
                </>
            )}
        </>
    );
}
