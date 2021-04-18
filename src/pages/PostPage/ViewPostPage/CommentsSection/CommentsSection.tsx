import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';

import { RootState } from '../../../../store/store';
import { getPageComments, addComment } from '../../../../store';
import { Comment, CommentsState } from '../../../../core/models';
import Loader from '../../../../components/Loader/Loader';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';

export default function CommentsSection({ id }: { id: string }) {
    const { comments, loading }: CommentsState = useSelector((state: RootState) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPageComments(id));
    }, [dispatch, id]);

    const onCommentFormSubmit = async (comment: Comment, { resetForm }: any) => {
        await dispatch(addComment(comment));
        resetForm();
    };

    return (
        <>
            <CommentForm onSubmit={onCommentFormSubmit} />
            {loading && <Loader />}
            {comments?.length && <CommentList comments={comments} />}
        </>
    );
}
CommentsSection.propTypes = {
    id: PropTypes.string.isRequired,
};
