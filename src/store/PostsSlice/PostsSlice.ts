import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { PostsState } from '../../core/models';
import { fetchPostsByPage } from '../../relay/services';

const initialState: PostsState = {
    posts: [],
    count: 0,
    loading: null,
    error: null,
};

export const getPostsByPage = createAsyncThunk('users/fetchByIdStatus', async (page: number) => {
    return await fetchPostsByPage(page).toPromise();
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostsByPage.pending, (state: PostsState) => {
            state.loading = true;
        });
        builder.addCase(getPostsByPage.fulfilled, (state: PostsState, action: any) => {
            state.loading = false;
            const { posts } = action.payload;
            state.posts = [...state.posts, ...posts.data];
            state.count = Math.max(...[state.count, posts.meta.totalCount]);
        });
        builder.addCase(getPostsByPage.rejected, (state: PostsState, action: any) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default postsSlice.reducer;
