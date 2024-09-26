import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { PageProps, PermissionsHandler } from '@/types';
import { Category } from '@/types/category';
import TableCategory from '@/Components/table/category/table-category';
import { columns } from '@/Components/table/category/columns';


export default function Index({ auth, categories }: PageProps & { categories: Category[] }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Category</h2>}
        >
            <Head title="Post Category" />

            <div className="sm:flex sm:items-center">
                <div className="space-y-1 sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Post Category List
                    </h1>
                    <p className="text-sm text-gray-700">
                        A list of all Post Category.
                    </p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route("category.create")}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Category
                    </Link>
                </div>
            </div>

            <TableCategory columns={columns} data={categories} />
        </AuthenticatedLayout>
    );
}
