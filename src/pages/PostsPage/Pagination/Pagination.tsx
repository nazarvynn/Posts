import React from 'react';
import { Link } from 'react-router-dom';

import { PaginationItem } from '../../../core/models';
import PaginationListItem from './PaginationListItem/PaginationListItem';

export default function Pagination() {
    const isPreviousDisabled = true;
    const isNextDisabled = false;
    const pagination: PaginationItem[] = [
        {
            page: 1,
            link: '/posts',
            isActive: true,
        },
        {
            page: 2,
            link: '/posts',
        },
        {
            page: 3,
            link: '/posts',
        },
    ];
    return (
        <nav>
            <ul className="pagination pagination-sm justify-content-center mb-4">
                <li className={`page-item ${isPreviousDisabled ? 'disabled' : ''}`}>
                    <Link className="page-link" to="/posts">
                        Previous
                    </Link>
                </li>
                {pagination.map((item, index) => (
                    <PaginationListItem key={index} {...item} />
                ))}
                <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`}>
                    <Link className="page-link" to="/posts">
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
