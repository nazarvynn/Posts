import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useFetchData, useMutationData } from '../../../relay/hooks';
import { PostFullQuery } from '../../../relay/queries';
import { DeletePostMutation } from '../../../relay/mutations';
import Loader from '../../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentsSection from './CommentsSection/CommentsSection';

export default function ViewPostPage() {
    const history = useHistory();
    const { id: postId } = (useParams() as unknown) as { id: string };
    const { data: post, loading }: { data: any; loading: boolean } = useFetchData(PostFullQuery, {
        queryVariables: { id: postId },
    });
    const { loading: deleting, mutate: deletePostMutation } = useMutationData(DeletePostMutation);

    const onEditPost = () => {
        history.push(`/edit-post/${postId}`);
    };
    const onDeletePost = () => {
        deletePostMutation({ id: postId }).then(({ deletePost }: any) => {
            if (deletePost) {
                history.push('/posts');
            }
        });
    };

    return (
        <>
            {(loading || deleting) && <Loader />}
            {!loading && post && (
                <>
                    <PostContent {...post} onEditPost={onEditPost} onDeletePost={onDeletePost} />
                    <hr />
                    <CommentsSection id={postId} />
                </>
            )}
        </>
    );
}
