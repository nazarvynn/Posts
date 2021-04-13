import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { PaginationItem } from '../../../../core/models';

export default function PaginationListItem({ page, isActive }: PaginationItem) {
    return (
        <li className={`page-item ${isActive ? 'active' : ''}`}>
            <Link className="page-link" to={`/posts/${page}`}>
                {page}
            </Link>
        </li>
    );
}

PaginationListItem.propTypes = {
    page: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
};
