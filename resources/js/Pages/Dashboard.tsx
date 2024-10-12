import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="sm:flex sm:items-center">
                <h1><span className='font-bold'>Pesantren NU APP: </span>Version 1.2.0 - 12 October 2024</h1>
            </div>
        </AuthenticatedLayout>
    );
}
