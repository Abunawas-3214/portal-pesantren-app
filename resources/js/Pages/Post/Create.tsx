import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PostForm from '@/Components/form/post-form';
import { Category } from '@/types/category';

export default function Create({ auth, categories }: PageProps & { categories: Category[] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create a Post</h2>}
        >
            <Head title="Post" />

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Create a Post
                    </h1>
                    <p className="space-y-1 text-sm text-gray-700">
                        Use this form to create a new Post.
                    </p>
                </div>
            </div>

            <PostForm categories={categories} />

        </AuthenticatedLayout>
    );
}
