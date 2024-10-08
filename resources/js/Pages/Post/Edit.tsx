import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PostForm from '@/Components/form/post-form';
import { Category } from '@/types/category';
import { Post } from '@/types/post';

export default function Create({ auth, post, categories }: PageProps & { post: Post, categories: Category[] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit a Post</h2>}
        >
            <Head title="Post" />

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Edit a Post
                    </h1>
                    <p className="space-y-1 text-sm text-gray-700">
                        Use this form to Edit a Post.
                    </p>
                </div>
            </div>

            <PostForm categories={categories} postData={post} />

        </AuthenticatedLayout>
    );
}
