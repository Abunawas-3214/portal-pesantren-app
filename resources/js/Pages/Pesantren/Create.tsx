import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PesantrenForm from '@/Components/form/pesantren-form';

export default function Create({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Pesantren</h2>}
    >
      <Head title="Dashboard" />

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Create a Pesantren
          </h1>
          <p className="space-y-1 text-sm text-gray-700">
            Use this form to create a new Pesantren.
          </p>
        </div>
      </div>

      <PesantrenForm />

    </AuthenticatedLayout>
  );
}
