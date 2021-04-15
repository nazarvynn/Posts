import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ConfirmModal from '../../../../components/ConfirmModal/ConfirmModal';

export default function PostActions({ id }: { id: string }) {
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const onDeletePost = () => {
        setShowModal(false);
        console.log('delete confirmed', id);
    };
    const onEditPost = () => {
        history.push(`/edit-post/${id}`);
    };
    return (
        <>
            <button type="button" className="btn btn-danger btn-sm mr-2" onClick={() => setShowModal(true)}>
                Delete
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={onEditPost}>
                Edit
            </button>
            {showModal && (
                <ConfirmModal onOk={onDeletePost} onCancel={() => setShowModal(false)}>
                    Are you sure to delete the post ID {id}?
                </ConfirmModal>
            )}
        </>
    );
}
PostActions.propTypes = {
    id: PropTypes.string.isRequired,
};
