import React from 'react';
import * as PropTypes from 'prop-types';

import { Post } from '../../../core/models';
import PostItem from '../PostItem/PostItem';

export default function PostsList({ posts }: { posts: Post[] }) {
    return <>{posts?.length ? posts.map((post) => <PostItem key={post.id} {...post} />) : <div>No Posts</div>}</>;
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
};
