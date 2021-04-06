export interface Post {
    id: number;
    title: string;
    body: string;
    user: string;
    image?: string;
    createdAt?: number;
}
