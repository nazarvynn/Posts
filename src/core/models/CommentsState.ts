import { Comment } from './Comment';

export interface CommentsState {
    comments: Comment[];
    loading: boolean;
    error: any;
}
