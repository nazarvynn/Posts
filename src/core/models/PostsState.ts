import { Post } from './Post';

export interface PostsState {
    posts: Post[];
    count: number;
    loading: boolean;
    error: any;
}
