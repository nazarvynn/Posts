import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { Comment, CommentsState } from '../../core/models';
import { CommentsStub } from '../../stubs';

const initialState: CommentsState = {
    comments: [],
    loading: null,
    error: null,
};

export const getPageComments = createAsyncThunk('comments/loadAll', async (pageId: string) => {
    return CommentsStub;
});

export const addComment = createAsyncThunk('comments/addNew', async (comment: Comment) => {
    return await comment;
});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPageComments.pending, (state: CommentsState) => {
            state.loading = true;
        });
        builder.addCase(getPageComments.fulfilled, (state: CommentsState, action: PayloadAction<Comment[]>) => {
            state.loading = false;
            const comments = action.payload;
            state.comments = [...comments];
        });
        builder.addCase(getPageComments.rejected, (state: CommentsState, action: any) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(addComment.pending, (state: CommentsState) => {
            state.loading = true;
        });
        builder.addCase(addComment.fulfilled, (state: CommentsState, action: PayloadAction<Comment>) => {
            state.loading = false;
            const comment = action.payload;
            state.comments = [comment, ...state.comments];
        });
        builder.addCase(addComment.rejected, (state: CommentsState, action: any) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default commentsSlice.reducer;
