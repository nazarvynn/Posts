import React from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import Loader from '../../components/Loader/Loader';
import PostContent from './PostContent/PostContent';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import { PostStub, CommentsStub } from '../../stubs';

export default function PostPage() {
    const isPostLoading = false;
    const isCommentsLoading = false;
    const { id } = useParams() as any;
    console.log('id', id);

    return (
        <MainLayout>
            {isPostLoading && <Loader />}
            {!isPostLoading && (
                <>
                    <PostContent {...PostStub} />
                    <hr />
                    <CommentForm />
                    {isCommentsLoading && <Loader />}
                    {!isCommentsLoading && <CommentList comments={CommentsStub} />}
                </>
            )}
        </MainLayout>
    );
}
