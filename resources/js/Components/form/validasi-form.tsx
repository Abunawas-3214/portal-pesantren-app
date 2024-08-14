import { Pesantren } from '@/types'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import InputError from '../InputError'


export default function ValidasiForm({ pesantren }: { pesantren: Pesantren }) {
    const { data, setData, post, put, errors, reset } = useForm({
        pesantren_id: pesantren.id,
        kemenag: null as File | null,
        rmi: null as File | null,
        _method: 'PUT',
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(route('pesantren.validasi.update', pesantren.id))
    }

    return (
        <form className='space-y-6' onSubmit={submit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="kemenag"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Kementerian Agama
                    </label>
                    <input
                        onChange={(e) => setData('kemenag', e.target.files ? e.target.files[0] : null)}
                        type="file"
                        id="kemenag"
                        accept='application/pdf'
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.kemenag ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.kemenag} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="rmi"
                        className="block text-sm font-medium text-gray-700"
                    >
                        RMI NU
                    </label>
                    <input
                        onChange={(e) => setData('rmi', e.target.files ? e.target.files[0] : null)}
                        type="file"
                        id="rmi"
                        accept='application/pdf'
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.rmi ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.rmi} />
                </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
                <Link
                    href={route('pesantren.index')}
                    className="inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Next
                </button>
            </div>
        </form>
    )
}
