import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './PostsSlice/PostsSlice';
import commentsReducer from './CommentsSlice/CommentsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
    },
});
