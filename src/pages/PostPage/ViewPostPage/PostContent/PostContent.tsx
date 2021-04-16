import React from 'react';
import * as PropTypes from 'prop-types';

import { useAuth } from '../../../../auth/hooks';
import { UserRole } from '../../../../core/enum';
import { Post, User } from '../../../../core/models';
import formatDate from '../../../../utils/formatDate';
import PostActions from '../PostActions/PostActions';

interface PostContentModel extends Post {
    onEditPost: any;
    onDeletePost: any;
}

export default function PostContent({ title, body, user, onEditPost, onDeletePost }: PostContentModel) {
    const { user: authUser } = useAuth();
    const { role } = authUser as User;
    const date = formatDate(+new Date());

    return (
        <>
            <h1 className="mt-4 page-tile">{title}</h1>
            <div className="row">
                <div className="col-8">
                    <p className="lead">by {user?.name}</p>
                </div>
                <div className="col-4 text-right">
                    {role === UserRole.Admin && <PostActions onEditPost={onEditPost} onDeletePost={onDeletePost} />}
                </div>
            </div>
            <hr />
            <p>Posted on {date}</p>
            <hr />
            <img className="img-fluid rounded" src="http://placehold.it/750x300" alt="placehold.it-900x300" />
            <hr />
            <article dangerouslySetInnerHTML={{ __html: body }} />
        </>
    );
}

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string,
    }),
    onEditPost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
};
