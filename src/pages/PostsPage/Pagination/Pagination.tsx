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
    const pages = generatePages(pagesCount, activePage);
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
                {pages.map((page, index) => (
                    <PaginationListItem
                        key={index}
                        page={page}
                        onClick={(page) => onPageChange(+page)}
                        isActive={`${activePage}` === `${page}`}
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

function generatePages(count: number, active: number): string[] {
    if (count <= 6) {
        return [...Array(count)].map((_, index) => `${index + 1}`);
    } else {
        const pages = ['1'];
        if (active > 3) {
            pages.push('...');
        }
        if (active === count) {
            pages.push(`${active - 2}`);
        }
        if (active > 2) {
            pages.push(`${active - 1}`);
        }
        if (active !== 1 && active !== count) {
            pages.push(`${active}`);
        }
        if (active < count - 1) {
            pages.push(`${active + 1}`);
        }
        if (active === 1) {
            pages.push(`${active + 2}`);
        }
        if (active < count - 2) {
            pages.push('...');
        }
        pages.push(`${count}`);
        return pages;
    }
}
