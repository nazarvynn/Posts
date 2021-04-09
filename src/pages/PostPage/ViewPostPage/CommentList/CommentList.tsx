import React from 'react';
import * as PropTypes from 'prop-types';

import { Comment } from '../../../../core/models';
import CommentItem from '../CommentItem/CommentItem';

export default function CommentList({ comments }: { comments: Comment[] }) {
    return (
        <>
            {comments?.length ? (
                comments.map((comment) => <CommentItem key={comment.id} {...comment} />)
            ) : (
                <div>No comments</div>
            )}
        </>
    );
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
};
