import React from 'react';
import * as PropTypes from 'prop-types';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

export default function Table({ colums, data }: { colums: string[]; data: any }) {
    return (
        <table className="table table-hover">
            <TableHead columns={colums} />
            <TableBody columnsCount={colums.length} data={data} />
        </table>
    );
}

Table.propPypes = {
    colums: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};
