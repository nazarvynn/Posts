export interface Comment {
    name: string;
    body: string;
    id?: string;
    email?: string;
    post?: {
        id: string;
    };
}
