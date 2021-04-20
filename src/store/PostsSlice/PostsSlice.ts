import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuery } from 'react-relay/hooks';

import relayEnvironment from '../../relayEnvironment';
import { PostsQuery, PostQuery } from '../../relay/queries';
import { Post, PostsState } from '../../core/models';
import { RootState } from '../store';

const initialState: PostsState = {
    posts: [],
    loading: null,
    error: null,
};
let idIterator = 4;

export const fetchPostsByPage = createAsyncThunk(
    'posts/fetchPostsByPage',
    async ({ page, pageSize }: { page: number; pageSize?: number }) => {
        return fetchQuery(
            relayEnvironment,
            PostsQuery,
            { options: { paginate: { page, limit: pageSize } } },
            { fetchPolicy: 'network-only' }
        ).toPromise();
    }
);

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId: string) => {
    return fetchQuery(relayEnvironment, PostQuery, { id: postId }, { fetchPolicy: 'network-only' }).toPromise();
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state: PostsState, action: PayloadAction<{ post: Post }>) => {
            const { post } = action.payload;
            const newPost = { id: `${idIterator++}`, ...post };
            state.posts = [newPost, ...state.posts];
        },
        updatePost: (state: PostsState, action: PayloadAction<{ post: Post }>) => {
            const { post } = action.payload;
            const posts = [...state.posts];
            const index = posts.findIndex(({ id }) => id === post.id);
            posts[index] = { ...post };
            state.posts = [...posts];
        },
        removePost: (state: PostsState, action: PayloadAction<{ id: string }>) => {
            const { id: postId } = action.payload;
            const posts = [...state.posts];
            const index = posts.findIndex(({ id }) => id === postId);
            posts.splice(index, 1);
            state.posts = [...posts];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByPage.pending, (state: PostsState) => {
            state.loading = true;
        });
        builder.addCase(fetchPostsByPage.fulfilled, (state: PostsState, action: any) => {
            state.loading = false;
            const { posts } = action.payload;
            state.posts = state.posts.length ? [...state.posts] : [...posts.data];
        });
        builder.addCase(fetchPostsByPage.rejected, (state: PostsState, action: any) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(fetchPostById.pending, (state: PostsState) => {
            state.loading = true;
        });
        builder.addCase(fetchPostById.fulfilled, (state: PostsState, action: any) => {
            state.loading = false;
            const { post } = action.payload;
            state.posts = state.posts.length ? [...state.posts] : [post];
        });
        builder.addCase(fetchPostById.rejected, (state: PostsState, action: any) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

// const selectPosts = (state: PostsState) => state.posts;
export const selectPostById = ({ posts }: RootState, postId: string): { post: Post; loading: boolean } => {
    const { posts: postsList, loading } = posts;
    const post = postsList.find(({ id }: Post) => id === postId);
    return { post, loading };
};

export const { createPost, updatePost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
