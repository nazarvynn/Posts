import React from 'react';
import * as PropTypes from 'prop-types';

import { PaginationItem } from '../../../../core/models';

export default function PaginationListItem({ page, onClick, isActive }: PaginationItem) {
    return (
        <li className={`page-item ${isActive ? 'active' : ''}`}>
            <span className="page-link" onClick={() => onClick(page)}>
                {page}
            </span>
        </li>
    );
}

PaginationListItem.propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
};
