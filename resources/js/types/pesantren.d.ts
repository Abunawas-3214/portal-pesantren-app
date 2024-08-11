import { Program } from "./program";
import { Tingkat } from "./tingkat";
import { User } from "./user";

export interface Pesantren {
    user_id: User
    id: string;
    name: string;
    slug: string;
    alamat: string | null;
    kecamatan: string | null;
    pendiri: string | null;
    pengasuh: string | null;
    tanggal_berdiri: Date | null;
    deskripsi: string | null;
    program_unggulan: string | null;
    logo: string | null | File;
    contact: number | null;
    gender: 'putra' | 'putri' | 'putra_putri' | null;
    video_profil: string | null;
    foto_sampul: string | null | File;
    user: User;
    programs: Program[];
    tingkats: Tingkat[];
}