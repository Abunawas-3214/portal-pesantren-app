import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { PageProps, PermissionsHandler } from '@/types';


export default function Index({ auth }: PageProps) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Usaha</h2>}
        >
            <Head title="Usaha Pesantren" />

            <div className="sm:flex sm:items-center">
                <div className="space-y-1 sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Usaha Pesantren List
                    </h1>
                    <p className="text-sm text-gray-700">
                        A list of all Usaha Pesantren.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-96">
                <h1 className='text-3xl font-semibold'>Fitur akan tersedia dalam waktu dekat</h1>
            </div>
        </AuthenticatedLayout>
    );
}
