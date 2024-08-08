import { Link, useForm } from "@inertiajs/react";
import InputError from "../InputError";
import { useEffect } from "react";
import slugify from "slugify";

export default function PesantrenForm() {
    const { data, setData, post, put, errors, reset } = useForm({
        name: '',
        slug: '',
        pendiri: '',
        pengasuh: '',
        tangal_berdiri: '',
        deskripsi: '',
        gender: '',
        program: '',
        tingkat: '',
        program_unggulan: '',
        contact: '',
        logo: '',
        video_profil: '',
        foto_sampul: ''
    })

    useEffect(() => {
        const generateSlug = slugify(data.name, {
            lower: true,
            strict: true
        })
        setData('slug', generateSlug)
    }, [data.name])

    return (
        <form className="space-y-6">
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
                        htmlFor="slug"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Slug
                    </label>
                    <input
                        value={data.slug}
                        onChange={(e) => setData('slug', e.target.value)}
                        type="text"
                        id="slug"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.name} />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="pendiri"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pendiri
                    </label>
                    <textarea
                        value={data.pendiri}
                        onChange={(e) => setData('pendiri', e.target.value)}
                        id="pendiri"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pendiri} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="pengasuh"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pengasuh
                    </label>
                    <textarea
                        value={data.pengasuh}
                        onChange={(e) => setData('pengasuh', e.target.value)}
                        id="pengasuh"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pengasuh} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                    <label
                        htmlFor="deskripsi"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        id="deskripsi"
                        className={`block w-full h-48 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pengasuh} />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2">
                    <label
                        htmlFor="gemder"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Gender
                    </label>
                    <select
                        id="gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.gender ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        <option value="">Select Gender</option>
                        <option value="putra">Putra</option>
                        <option value="putri">Putri</option>
                        <option value="putra_putri">Putra & Putri</option>
                    </select>
                    <InputError message={errors.gender} />
                </div>

                <div className="col-span-2">
                    <label
                        htmlFor="program"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Program
                    </label>
                    <select
                        id="program"
                        value={data.gender}
                        multiple
                        onChange={(e) => setData('gender', e.target.value)}
                        className={`block w-full h-16 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.program ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        <option value="kitab">Kitab</option>
                        <option value="tahfidz">Tahfidz</option>
                    </select>
                    <InputError message={errors.program} />
                </div>

                <div className="col-span-2">
                    <label
                        htmlFor="tingkat"
                        className="block text-sm font-medium text-gray-700"
                    >
                        tingkat
                    </label>
                    <select
                        id="tingkat"
                        value={data.gender}
                        multiple
                        onChange={(e) => setData('gender', e.target.value)}
                        className={`block w-full h-24 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.tingkat ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        <option value="umum">Umum</option>
                        <option value="mahasiswa">Mahasiswa</option>
                        <option value="sltp">SLTP</option>
                        <option value="slta">SLTA</option>
                    </select>
                    <InputError message={errors.gender} />
                </div>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
                <Link
                    href={route('role.index')}
                    className="inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create
                </button>
            </div>
        </form>
    )
}
