import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as PropTypes from 'prop-types';

import './modal.scss';

export default function Modal({ children, onClose, title }: { children: any; onClose: any; title?: string }) {
    const element = document.createElement('div');
    useEffect(() => {
        document.body.appendChild(element);
        return () => {
            document.body.removeChild(element);
        };
    });
    return createPortal(
        <>
            <div className="modal fade show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {title && <h5 className="modal-title">{title}</h5>}
                            <button type="button" className="close" onClick={onClose} data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>,
        element
    );
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
};
