import React from 'react';
import * as PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

export default function ConfirmModal({ children, onOk, onCancel }: { children: any; onOk: any; onCancel: any }) {
    return (
        <Modal onClose={onCancel} title="Confirmation">
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel}>
                    Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={onOk}>
                    Ok
                </button>
            </div>
        </Modal>
    );
}
ConfirmModal.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};
