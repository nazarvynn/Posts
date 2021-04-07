import React from 'react';
import * as PropTypes from 'prop-types';

export default function TableBody({ columnsCount, data }: { columnsCount: number; data: any }) {
    const recordsCount = data.length;
    return (
        <tbody>
            {!recordsCount && (
                <tr>
                    <td colSpan={columnsCount} style={{ textAlign: 'center' }}>
                        No data
                    </td>
                </tr>
            )}
            {recordsCount > 0 &&
                data.map((row: any, rowIndex: number) => (
                    <tr key={rowIndex}>
                        {row.map((cellValue: any, cellIndex: number) => (
                            <td key={cellIndex}>{cellValue}</td>
                        ))}
                    </tr>
                ))}
        </tbody>
    );
}

TableBody.propTypes = {
    columnsCount: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
};
