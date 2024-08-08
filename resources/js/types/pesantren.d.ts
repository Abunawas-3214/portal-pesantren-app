import { User } from "./user";
import { Kecamatan } from "@/Helper/kecamtan";

export interface Pesantren {
    user_id: User
    id: number;
    name: string;
    slug: string;
    alamat: string | null;
    kecamatan: string | null;
    pendiri: string | null;
    pengasuh: string | null;
    tanggal_berdiri: Date | null;
    deskripsi: string | null;
    program_unggulan: string | null;
    logo: string | null;
    contact: number | null;
    gender: 'putra' | 'putri' | 'putra_putri' | null;
    video_profil: string | null;
    foto_sampul: string | null;
}