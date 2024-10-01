import { Category } from "./category";
import { User } from "./user";

export interface Post {
    id: number;
    user_id: number
    user: User;
    title: string;
    slug: string;
    featured_image: string;
    content: string;
    categories: Category[];
    status: 'published' | 'draft' | 'archived';
    created_at: string;
    updated_at: string;
}