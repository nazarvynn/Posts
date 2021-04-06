import React from 'react';

export default function Pagination() {
    return (
        <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
                <button className="page-link">&larr; Older</button>
            </li>
            <li className="page-item disabled">
                <button className="page-link">Newer &rarr;</button>
            </li>
        </ul>
    );
}
