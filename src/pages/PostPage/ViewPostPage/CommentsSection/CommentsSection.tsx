import React from 'react';
import * as PropTypes from 'prop-types';

import { useFetchData, useMutationData } from '../../../../relay/hooks';
import { PostCommentsQuery } from '../../../../relay/queries';
import { CreateCommentMutation } from '../../../../relay/mutations';
import { Comment } from '../../../../core/models';
import Loader from '../../../../components/Loader/Loader';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';

export default function CommentsSection({ id }: { id: string }) {
    const { data: post, loading, refetch }: { data: any; loading: boolean; refetch: any } = useFetchData(
        PostCommentsQuery,
        {
            queryVariables: { id },
        }
    );
    const { loading: commenting, mutate: createCommentMutation } = useMutationData(CreateCommentMutation);

    const onCommentFormSubmit = (comment: Comment, { resetForm }: any) => {
        createCommentMutation({ input: { ...comment } }).then(({ createComment }: any) => {
            if (createComment) {
                resetForm();
                refetch({ id });
            }
        });
    };

    return (
        <>
            <CommentForm onSubmit={onCommentFormSubmit} />
            {(loading || commenting) && <Loader />}
            {post?.comments && <CommentList comments={post?.comments?.data} />}
        </>
    );
}
CommentsSection.propTypes = {
    id: PropTypes.string.isRequired,
};
