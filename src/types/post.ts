export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostFormData {
    title: string;
    body: string;
}