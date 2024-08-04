export interface User {
    id: number;
    name: string;
    email: string;
    stause: string;
    role: {
        id: number,
        name: string
    }[]
}