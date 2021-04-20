import { Post } from './Post';

export interface PostsState {
    posts: Post[];
    loading: boolean;
    error: any;
}
