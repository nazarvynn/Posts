import React from 'react';
import * as PropTypes from 'prop-types';

export default function TableHead({ columns }: { columns: string[] }) {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th scope="col" key={index}>
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

TableHead.propPypes = {
    columns: PropTypes.array.isRequired,
};
