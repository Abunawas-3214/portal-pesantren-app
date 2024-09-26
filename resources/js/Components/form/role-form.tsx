import { Link, useForm } from '@inertiajs/react'
import InputError from '../InputError'
import { Permission, Role } from '@/types'
import { Loader } from 'lucide-react';

export default function RoleForm({ permissions, role }: { permissions: Permission[], role?: Role }) {
    const selectedPermissions = role?.permissions.map((permission) => {
        return permission.id
    });

    const { data, setData, post, put, errors, reset, processing } = useForm({
        name: role?.name || '',
        permissions: selectedPermissions || [] as String[],
    })

    const handleSelectPermissions = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPermissions = Array.from(e.target.selectedOptions).map(option => option.value)
        setData('permissions', selectedPermissions)
    }

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (role) {
            put(route('role.update', role.id))
        } else {
            post(route('role.store'))
        }
    }
    return (
        <form className='space-y-6' onSubmit={submit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        type="text"
                        id="name"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.name} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Permissions <span className='text-xs text-gray-400'>(Tahan tombol ctrl/cmd utnuk memilih lebih dari 1)</span>
                    </label>
                    <select
                        defaultValue={selectedPermissions?.map((permission) => permission.toString())}
                        onChange={handleSelectPermissions}
                        id="permissions"
                        name="permissions"
                        multiple
                        className={`block w-full h-40 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.permissions ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        {permissions.map((permission) => (
                            <option key={permission.id} value={permission.id}>
                                {permission.name} - {permission.description}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.permissions} />
                </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
                <button>
                    <Link
                        disabled={processing}
                        href={route('post.index')}
                        className={`inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? "opacity-25 cursor-not-allowed" : ""}`}
                    >
                        Cancel
                    </Link>
                </button>
                <button
                    disabled={processing}
                    type="submit"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center ${processing ? "opacity-25 cursor-not-allowed" : ""}`}
                >
                    {processing
                        ? <>
                            <Loader className='w-3 h-3 mr-2 animate-spin' /> Loading...
                        </>
                        : 'Next'}
                </button>
            </div>
        </form>
    )
}
