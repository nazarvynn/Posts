import React from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '../../../layouts/MainLayout/MainLayout';

export default function UpdatePostPage() {
    const { id: postId } = (useParams() as unknown) as { id: number };
    console.log('postId', postId);
    return (
        <MainLayout>
            <h1 className="my-4">Update Post</h1>
            Form
        </MainLayout>
    );
}
