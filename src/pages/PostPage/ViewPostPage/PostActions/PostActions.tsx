import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import ConfirmModal from '../../../../components/ConfirmModal/ConfirmModal';

export default function PostActions({ onEditPost, onDeletePost }: { onEditPost: any; onDeletePost: any }) {
    const [showModal, setShowModal] = useState(false);
    const onDelete = () => {
        setShowModal(false);
        onDeletePost();
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
                <ConfirmModal onOk={onDelete} onCancel={() => setShowModal(false)}>
                    Are you sure to delete the post?
                </ConfirmModal>
            )}
        </>
    );
}
PostActions.propTypes = {
    onEditPost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
};
