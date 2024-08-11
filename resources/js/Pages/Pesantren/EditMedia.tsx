import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps, Pesantren } from '@/types';
import { User } from '@/types/user';
import { Program, Tingkat } from '@/types';
import MediaForm from '@/Components/form/media-form';

export default function Edit({ auth, users, program, tingkat, pesantren }: PageProps & { users: User[], program: Program[], tingkat: Tingkat[], pesantren: Pesantren }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Pesantren</h2>}
        >
            <Head title="Pesantren" />

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Edit a Pesantren
                    </h1>
                    <p className="space-y-1 text-sm text-gray-700">
                        Use this form to edit a Pesantren.
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center w-full gap-4'>
                <Link
                    href={route('pesantren.edit', pesantren.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Informasi Umum
                </Link>
                <button
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sosial Media
                </button>
                <Link
                    href={route('pesantren.validasi.edit', pesantren.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Validitas
                </Link>
                <button
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Penunjang
                </button>
            </div>

            <MediaForm pesantren={pesantren} />
        </AuthenticatedLayout>
    );
}
