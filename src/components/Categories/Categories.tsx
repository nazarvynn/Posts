import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { Category } from '../../core/models';
import { CATEGORIES } from '../../core/const';
import chunks from '../../utils/chunks';

export default function Categories({ chunkSize = 3 }: { chunkSize: number }) {
    return (
        <div className="row">
            {chunks(CATEGORIES, chunkSize).map((chunk: any, chunkIndex) => (
                <div className="col-lg-6" key={chunkIndex}>
                    <ul className="list-unstyled mb-0">
                        {chunk.map(({ label, link }: Category, categoryIndex: number) => (
                            <li key={categoryIndex}>
                                <Link to={link}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

Categories.propTypes = {
    chunkSize: PropTypes.number,
};
