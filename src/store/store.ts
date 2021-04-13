import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './PostsSlice/PostsSlice';
import commentsReducer from './CommentsSlice/CommentsSlice';

export type RootState = {
    posts: any;
    comments: any;
};

const reducer: RootState = {
    posts: postsReducer,
    comments: commentsReducer,
};

export default configureStore({
    reducer,
});
