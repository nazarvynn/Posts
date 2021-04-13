import { PostsStub } from '../../stubs';

export async function fetchPostsByPage(page: number) {
    return { data: PostsStub, count: PostsStub.length };
}
