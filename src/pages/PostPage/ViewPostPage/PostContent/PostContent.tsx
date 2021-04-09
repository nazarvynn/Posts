import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { Post, User } from '../../../../core/models';
import formatDate from '../../../../utils/formatDate';
import { useAuth } from '../../../../auth/hooks';
import { UserRole } from '../../../../core/enum';
import PostActions from '../PostActions/PostActions';

export default function PostContent({
    id,
    title,
    body,
    user,
    image = 'http://placehold.it/750x300',
    createdAt = +new Date(),
}: Post) {
    const { user: authUser } = useAuth();
    const { userRole } = authUser as User;
    const date = formatDate(createdAt);

    return (
        <>
            <h1 className="mt-4">{title}</h1>
            <div className="row">
                <div className="col-8">
                    <p className="lead">
                        by &nbsp;<Link to="/posts">{user}</Link>
                    </p>
                </div>
                <div className="col-4 text-right">{userRole === UserRole.Admin && <PostActions id={id} />}</div>
            </div>
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
};
