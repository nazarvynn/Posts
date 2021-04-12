import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import { PostStub, CommentsStub } from '../../../stubs';
import { Comment } from '../../../core/models';

export default function ViewPostPage() {
    const isPostLoading = false;
    const isCommentsLoading = false;
    const { id: postId } = (useParams() as unknown) as { id: number };
    console.log('postId', postId);

    const onCommentFormSubmit = ({ name, body }: { name: string; body: string }) => {
        const comment: Comment = {
            name,
            body,
            post: {
                id: postId,
            },
        };
        console.log('comment', comment);
    };

    return (
        <>
            {isPostLoading && <Loader />}
            {!isPostLoading && (
                <>
                    <PostContent {...PostStub} id={+postId} />
                    <hr />
                    <CommentForm onSubmit={onCommentFormSubmit} />
                    {isCommentsLoading && <Loader />}
                    {!isCommentsLoading && <CommentList comments={CommentsStub} />}
                </>
            )}
        </>
    );
}
