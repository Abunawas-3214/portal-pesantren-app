import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import TableRole from '@/Components/table/user/table-user';
import { columns } from '@/Components/table/role/columns';
import { Role } from '@/types/role';

export default function Index({ auth, roles }: PageProps & { roles: { data: Role[] } }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Role</h2>}
        >
            <Head title="Dashboard" />

            <div className="sm:flex sm:items-center">
                <div className="space-y-1 sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Role List
                    </h1>
                    <p className="text-sm text-gray-700">
                        A list of all Role.
                    </p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route("role.create")}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Role
                    </Link>
                </div>
            </div>
            <div>
                <TableRole columns={columns} data={roles.data} />
            </div>
        </AuthenticatedLayout>
    );
}
