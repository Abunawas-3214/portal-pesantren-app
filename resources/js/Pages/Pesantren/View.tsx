import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps, Pesantren } from '@/types';
import PesantrenForm from '@/Components/form/pesantren-form';
import { User } from '@/types/user';
import { Program, Tingkat } from '@/types';
import StepsEdit from '@/Components/partial/steps-edit';
import { renderToPipeableStream } from 'react-dom/server';
import { pesantrenApi } from '@/types/pesantren-api';
import PesantrenPhotosGalery from '@/Components/galery/pesantren-photos-galery';
import PesanternVideoProfil from '@/Components/galery/pesantren-video-profil';

export default function View({ auth, users, pesantrenData }: PageProps & { users: User[], pesantrenData: { data: pesantrenApi } }) {
    const pesantren = pesantrenData.data;
    const markup = {
        __html: pesantren.deskripsi ?? ''
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">View Pesantren</h2>}
        >
            <Head title="Pesantren" />

            <div className="sm:flex sm:items-center">
                <div className="space-y-20 sm:flex-auto">
                    <div className="flex flex-col items-center justify-center w-full gap-4 text-center">
                        {pesantren.logo && (
                            <img
                                src={pesantren.logo as string}
                                alt={typeof pesantren.logo === 'string' ? pesantren.logo : 'Pesantren Logo'}
                                className='w-28 h-28'
                            />
                        )}
                        <h1 className="text-5xl font-bold">{pesantren.name}</h1>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Informasi Umum</h1>
                        <table className="w-full mt-8 border-collapse">
                            <tbody>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Alamat Lengkap</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.alamat}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Kecamatan</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.kecamatan}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Pendiri</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.pendiri}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Pengasuh</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.pengasuh}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Tanggal Berdiri</td>

                                    <td className="w-3/4 p-2 capitalize border">{pesantren.tanggal_berdiri ? new Date(pesantren.tanggal_berdiri).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Program Unggulan</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.program_unggulan}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Jumlah Santri</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.jumlah_santri}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Kontak</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.contact}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Gender</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.gender === 'putra_putri' ? 'Putra & Putri' : pesantren.gender}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Program</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.program && pesantren.program.join(", ")}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 p-2 font-semibold border">Tingkat</td>
                                    <td className="w-3/4 p-2 capitalize border">{pesantren.tingkat && pesantren.tingkat.join(", ")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Deskripsi Pesantren</h1>
                        {
                            (pesantren.deskripsi)
                                ?
                                <div className="px-4 py-2 rounded-md bg-slate-50">
                                    <article className='font-light prose text-md prose-slate prose-strong:font-black prose-h3:text-2xl prose-h3:font-light prose-a:text-blue-600'>
                                        <div dangerouslySetInnerHTML={markup} />
                                    </article>
                                </div>
                                : <p className='text-center'>Belum ada deskripsi pesantren untuk saat ini</p>
                        }
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Sosial Media Pesantren</h1>
                        {
                            (pesantren.media)
                                ?
                                <table className="w-full mt-8 border-collapse">
                                    <tbody>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Facebook</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.facebook}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Instagram</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.instagram}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Youtube</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.youtube}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Tiktok</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.tiktok} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.tiktok}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Twitter</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.twitter}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/4 p-2 font-semibold border">Website</td>
                                            <td className="w-3/4 p-2 border"><a href={pesantren.media.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{pesantren.media.website}</a></td>
                                        </tr>                                  </tbody>
                                </table>
                                : <p className='text-center'>Belum ada sosial media pesantren untuk saat ini</p>
                        }
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Data Validitas Pesantren</h1>
                        <table className="w-full mt-8 border-collapse">
                            <tbody>
                                {['kemenag', 'rmi'].map(category => (
                                    <tr key={category}>
                                        <td className="w-1/4 p-2 font-semibold border">
                                            {category === 'kemenag' ? 'Kementerian Agama' : 'RMI NU'}
                                        </td>
                                        <td className="w-3/4 p-2 capitalize border">
                                            {Array.isArray(pesantren.validasi) && pesantren.validasi.find(v => v.kategori_validasi === category && v.file) && (
                                                <a href={pesantren.validasi.find(v => v.kategori_validasi === category)?.file} target='_blank' rel="noopener noreferrer">
                                                    <button className="px-4 py-2 font-normal text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                                        Buka File
                                                    </button>
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Galeri Pesantren</h1>
                        {(pesantren.photos.length > 0) &&
                            <PesantrenPhotosGalery photos={pesantren.photos} />
                        }
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">Video Profil Pesantren</h1>
                        {(pesantren.video_profil) &&
                            <PesanternVideoProfil video_profil={pesantren.video_profil} />
                        }
                    </div>
                    <div className="px-4 py-3 text-right sm:px-6">
                        <button>
                            <Link
                                href={route('pesantren.index')}
                                className={'inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center'}
                            >
                                Back
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}