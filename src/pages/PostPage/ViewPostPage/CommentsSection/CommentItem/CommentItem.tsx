import React from 'react';
import * as PropTypes from 'prop-types';

import { Comment } from '../../../../../core/models';

export default function CommentItem({ email, body }: Comment) {
    return (
        <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="placehold.it-50x50" />
            <div className="media-body">
                <h5 className="mt-0">{email}</h5>
                {body}
            </div>
        </div>
    );
}

CommentItem.propTypes = {
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
