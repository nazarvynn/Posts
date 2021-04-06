export interface Comment {
    name: string;
    body: string;
    id?: number;
    email?: string;
    post?: {
        id: number;
    };
}
