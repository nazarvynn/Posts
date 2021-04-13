import React from 'react';
import * as PropTypes from 'prop-types';

import { PaginationItem } from '../../../../core/models';

export default function PaginationListItem({ page, onClick, isActive }: PaginationItem) {
    return (
        <li className={`page-item ${isActive ? 'active' : page === '...' ? 'disabled' : ''}`}>
            <span className="page-link" onClick={() => onClick(page)}>
                {page}
            </span>
        </li>
    );
}

PaginationListItem.propTypes = {
    page: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
};
