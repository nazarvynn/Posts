import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { Post } from '../../../core/models';
import formatDate from '../../../utils/formatDate';

export default function PostContent({
    title,
    body,
    user,
    image = 'http://placehold.it/750x300',
    createdAt = +new Date(),
}: Post) {
    const date = formatDate(createdAt);
    return (
        <>
            <h1 className="mt-4">{title}</h1>
            <p className="lead">
                by &nbsp;<Link to="/posts">{user}</Link>
            </p>
            <hr />
            <p>Posted on {date}</p>
            <hr />
            <img className="img-fluid rounded" src={image} alt="placehold.it-900x300" />
            <hr />
            <article dangerouslySetInnerHTML={{ __html: body }} />
        </>
    );
}

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
};
