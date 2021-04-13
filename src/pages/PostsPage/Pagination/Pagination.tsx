import React from 'react';
import * as PropTypes from 'prop-types';

import PaginationListItem from './PaginationListItem/PaginationListItem';
import './pagination.scss';

export default function Pagination({
    activePage,
    pagesCount,
    onPageChange,
}: {
    activePage: number;
    pagesCount: number;
    onPageChange: any;
}) {
    const isPreviousDisabled = activePage === 1;
    const isNextDisabled = activePage === pagesCount;
    return (
        <nav>
            <ul className="pagination pagination-sm justify-content-center mb-4">
                <li className={`page-item ${isPreviousDisabled ? 'disabled' : ''}`}>
                    <span
                        className="page-link"
                        onClick={() => {
                            onPageChange(activePage - 1);
                        }}
                    >
                        Previous
                    </span>
                </li>
                {[...Array(pagesCount)].map((_, index) => (
                    <PaginationListItem
                        key={index}
                        page={index + 1}
                        onClick={(page) => onPageChange(page)}
                        isActive={activePage === index + 1}
                    />
                ))}
                <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`}>
                    <span
                        className="page-link"
                        onClick={() => {
                            onPageChange(activePage + 1);
                        }}
                    >
                        Next
                    </span>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
