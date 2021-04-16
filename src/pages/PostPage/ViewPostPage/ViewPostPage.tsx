import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useFetchData, useMutationData } from '../../../relay/hooks';
import { PostFullQuery } from '../../../relay/queries';
import { DeletePostMutation, CreateCommentMutation } from '../../../relay/mutations';
import { Comment } from '../../../core/models';
import Loader from '../../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';

export default function ViewPostPage() {
    const history = useHistory();
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { data: post, loading, refetch }: { data: any; loading: boolean; refetch: any } = useFetchData(
        PostFullQuery,
        {
            queryVariables: { id: postId },
        }
    );
    const { loading: deleting, mutate: deletePostMutation } = useMutationData(DeletePostMutation);
    const { loading: commenting, mutate: createCommentMutation } = useMutationData(CreateCommentMutation);
    const onEditPost = () => {
        history.push(`/edit-post/${postId}`);
    };
    const onDeletePost = () => {
        deletePostMutation({ id: postId }).then(({ deletePost }: any) => {
            if (deletePost) {
                history.push('/posts');
            }
        });
    };
    const onCommentFormSubmit = (comment: Comment, { resetForm }: any) => {
        createCommentMutation({ input: { ...comment } }).then(({ createComment }: any) => {
            if (createComment) {
                resetForm();
                refetch({ id: postId });
            }
        });
    };

    return (
        <>
            {(loading || deleting) && <Loader />}
            {!loading && post && (
                <>
                    <PostContent {...post} onEditPost={onEditPost} onDeletePost={onDeletePost} />
                    <hr />
                    <CommentForm onSubmit={onCommentFormSubmit} />
                    {commenting && <Loader />}
                    <CommentList comments={post?.comments?.data} />
                </>
            )}
        </>
    );
}
