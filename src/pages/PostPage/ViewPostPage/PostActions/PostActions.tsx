import React from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function PostActions({ id }: { id: number }) {
    const history = useHistory();
    const deletePost = () => {
        console.log(`delete post ${id}`);
    };
    const editPost = () => {
        history.push(`/update-post/${id}`);
    };
    return (
        <>
            <button type="button" className="btn btn-danger btn-sm mr-2" onClick={deletePost}>
                Delete
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={editPost}>
                Edit
            </button>
        </>
    );
}
PostActions.propTypes = {
    id: PropTypes.number.isRequired,
};
