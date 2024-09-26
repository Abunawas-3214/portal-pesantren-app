import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Role } from '@/types';
import CategoryForm from '@/Components/form/category-form';
import { Category } from '@/types/category';

export default function Edit({ auth, category }: PageProps & { category: Category }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Update a Category</h2>}
        >
            <Head title="Post Category" />

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Edit a Category
                    </h1>
                    <p className="space-y-1 text-sm text-gray-700">
                        Use this form to Edit the Category.
                    </p>
                </div>
            </div>

            <CategoryForm category={category} />

        </AuthenticatedLayout>
    );
}
