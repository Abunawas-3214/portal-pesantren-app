export interface pesantrenApi {
    name: string
    slug: string
    alamat: string
    kecamatan: string
    pendiri: string
    pengasuh: string
    tanggal_berdiri: string
    jumlah_santri: number
    deskripsi: string
    gender: string
    program_unggulan: string
    program: string[]
    tingkat: string[]
    contact: string
    logo: string
    video_profil: string
    media: {
        facebook: string
        instagram: string
        youtube: string
        tiktok: string
        twitter: string
        website: string
    }
    validasi: {
        kategori_validasi: string,
        file: string
    }
    photos: {
        file: string
    }[]

}