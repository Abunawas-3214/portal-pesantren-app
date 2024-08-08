import { Link, useForm } from "@inertiajs/react";
import InputError from "../InputError";
import { useEffect } from "react";
import slugify from "slugify";
import { User } from "@/types/user";
import { Kecamatan } from "@/Helper/kecamtan";

export default function PesantrenForm({ users }: { users: User[] }) {
    const { data, setData, post, put, errors, reset } = useForm({
        user_id: '',
        name: '',
        slug: '',
        alamat: '',
        kecamatan: '',
        pendiri: '',
        pengasuh: '',
        tanggal_berdiri: '',
        deskripsi: '',
        gender: '',
        program: '',
        tingkat: '',
        program_unggulan: '',
        contact: '',
        logo: null,
        video_profil: '',
        foto_sampul: null
    })

    // console.log(data.tanggal_berdiri)

    useEffect(() => {
        const generateSlug = slugify(data.name, {
            lower: true,
            strict: true
        })
        setData('slug', generateSlug)
    }, [data.name])

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const formattedValue = value.startsWith('0') ? `62${value.substring(1)}` : value;
        setData('contact', formattedValue);
    };

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="user_id"
                        className="block text-sm font-medium text-gray-700"
                    >
                        User
                    </label>
                    <select
                        id="user_id"
                        value={data.user_id}
                        onChange={(e) => setData('user_id', e.target.value)}
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.user_id ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        <option value="">Pilih user</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}

                    </select>
                    <InputError message={errors.user_id} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nama Pesantren
                    </label>
                    <input
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        type="text"
                        id="name"
                        placeholder="Pesantren RMI NU Kota Malang"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="slug"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Slug <span className='text-xs text-gray-400'>(tergenerate secara otomatis)</span>
                    </label>
                    <input
                        value={data.slug}
                        onChange={(e) => setData('slug', e.target.value)}
                        type="text"
                        id="slug"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.slug ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.name} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="alamat"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Alamat Lengkap
                    </label>
                    <input
                        value={data.alamat}
                        onChange={(e) => setData('alamat', e.target.value)}
                        type="text"
                        id="alamat"
                        placeholder="Jl. K.H. Hasyim Ashari No.21, Kauman, Kec. Klojen, Kota Malang, Jawa Timur, 65119"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.alamat ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="kecamatan"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Kecamatan
                    </label>
                    <select
                        id="kecamatan"
                        value={data.kecamatan}
                        onChange={(e) => setData('kecamatan', e.target.value)}
                        className={`block w-full px-3 capitalize py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.kecamatan ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    >
                        <option value="">Pilih Kecamatan</option>
                        {
                            Kecamatan.map((kecamatan) => (
                                <option key={kecamatan} value={kecamatan}>
                                    {kecamatan}
                                </option>
                            ))
                        }
                    </select>
                    <InputError message={errors.kecamatan} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="pendiri"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pendiri <span className='text-xs text-gray-400'>(pisahkan dengan koma jika lebih dari satu)</span>
                    </label>
                    <textarea
                        value={data.pendiri}
                        onChange={(e) => setData('pendiri', e.target.value)}
                        id="pendiri"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.pendiri ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pendiri} />
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="pengasuh"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Pengasuh <span className='text-xs text-gray-400'>(pisahkan dengan koma jika lebih dari satu)</span>
                    </label>
                    <textarea
                        value={data.pengasuh}
                        onChange={(e) => setData('pengasuh', e.target.value)}
                        id="pengasuh"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.pengasuh ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pengasuh} />
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <label
                        htmlFor="tanggal_berdiri"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Tanggal Berdiri
                    </label>
                    <input
                        type="date"
                        value={data.tanggal_berdiri}
                        onChange={(e) => setData('tanggal_berdiri', e.target.value)}
                        id="tanggal_berdiri"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.tanggal_berdiri ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.tanggal_berdiri} />

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
                        className={`block w-full h-48 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.deskripsi ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.pengasuh} />
                </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="program_unggulan"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Program Unggulan
                    </label>
                    <input
                        value={data.program_unggulan}
                        onChange={(e) => setData('program_unggulan', e.target.value)}
                        id="program_unggulan"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.program_unggulan ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.program_unggulan} />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="contact"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Kontak yang dapat dihubungi
                    </label>
                    <input
                        type="number"
                        value={data.contact}
                        onChange={handleContactChange}
                        id="contact"
                        placeholder="6281234567890"
                        className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.contact ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.contact} />
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
                        <option value="">Pilih Gender</option>
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
                        Program <span className='text-xs text-gray-400'>(Tahan tombol ctrl/cmd utnuk memilih lebih dari 1)</span>
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
                        Tingkat <span className='text-xs text-gray-400'>(Tahan tombol ctrl/cmd utnuk memilih lebih dari 1)</span>
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

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-3">
                    <label
                        htmlFor="logo"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Logo <span className='text-xs text-gray-400'>(berlatar belakang transparan ddan berformat .png)</span>
                    </label>
                    <input
                        type="file"
                        id="logo"
                        accept=".png"
                        // onChange={(e) => setData('logo', e.target.files[0])}
                        className={`block w-full px-3 py-2 mt-1 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.logo ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.logo} />

                </div>
                <div className="col-span-3">
                    <label
                        htmlFor="foto_sampul"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Foto Sampul <span className='text-xs text-gray-400'>(Usahakan dalam orientasi Protrait / vertical)</span>
                    </label>
                    <input
                        type="file"
                        id="foto_sampul"
                        accept="image/*"
                        // onChange={(e) => setData('logo', e.target.files[0])}
                        className={`block w-full px-3 py-2 mt-1 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.foto_sampul ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                    />
                    <InputError message={errors.foto_sampul} />
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