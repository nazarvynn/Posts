import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { fetchPostById, removePost, selectPostById } from '../../../store';
import Loader from '../../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentsSection from './CommentsSection/CommentsSection';

export default function ViewPostPage() {
    const history = useHistory();
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { post, loading } = useSelector((state: RootState) => selectPostById(state, postId));
    const dispatch = useDispatch();

    // TODO: question
    useEffect(() => {
        if (!post) {
            dispatch(fetchPostById(postId));
        }
    }, [dispatch, post, postId]);

    const onEditPost = () => {
        history.push(`/edit-post/${postId}`);
    };
    const onDeletePost = () => {
        dispatch(removePost({ id: postId }));
        history.push('/posts');
        // TODO: question
        // deletePostMutation({ id: postId }).then(({ deletePost }: any) => {
        //     if (deletePost) {
        //         history.push('/posts');
        //     }
        // });
    };

    return (
        <>
            {loading && <Loader />}
            {post && (
                <>
                    <PostContent {...post} onEditPost={onEditPost} onDeletePost={onDeletePost} />
                    <hr />
                    <CommentsSection id={postId} />
                </>
            )}
        </>
    );
}
