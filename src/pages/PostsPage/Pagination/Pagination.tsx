import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import PaginationListItem from './PaginationListItem/PaginationListItem';

export default function Pagination({ activePage, pagesCount }: { activePage: number; pagesCount: number }) {
    const isPreviousDisabled = activePage === 1;
    const isNextDisabled = activePage === pagesCount;
    return (
        <nav>
            <ul className="pagination pagination-sm justify-content-center mb-4">
                <li className={`page-item ${isPreviousDisabled ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`/posts/${activePage - 1}`}>
                        Previous
                    </Link>
                </li>
                {[...Array(pagesCount)].map((_, index) => (
                    <PaginationListItem key={index} page={index + 1} isActive={activePage === index + 1} />
                ))}
                <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`/posts/${activePage + 1}`}>
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
};
