import React, { useEffect } from 'react'
import dllBerita4 from '../../../assets/img/berita/dll-berita4.jpeg'
import dllBerita4Foto1 from '../../../assets/img/berita/dll-berita4-foto1.jpg'

export default function DllBerita4() {
    useEffect(function () {
        document.title = "Menunggu Hasil, Pemdes Senga Selatan Ikuti Penilaian Akhir Lomba Inovasi Desa | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Menunggu Hasil, Pemdes Senga Selatan Ikuti Penilaian Akhir Lomba Inovasi Desa
                        </h1>
                        <p>07 Juni 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={dllBerita4} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            ANWAR AMIR,S.Sos : “Warga Senga Selatan Supaya Bersatu Dukung Program Pemerintah Desa”
                        </p>
                        <p>
                            MAKASSAR, Pilarnewsonline.com – Pemerintah Desa Senga Selatan mengikuti Penilaian Akhir Lomba Inovasi Daerah Tingkat Desa dan Kelurahan Se Kabupaten Luwu Tahun 2022 di Ruangan “Indonesia-Prancis” kantor Lembaga Administrasi Negara (LAN) Makassar, Selasa (31/5/2022)
                        </p>
                        <div className="col-md-12 my-4 text-center">
                            <img className="img-content" src={dllBerita4Foto1} width="90%" alt="Foto Berita" />
                        </div>
                        <p>
                            Kegiatan yang dilaksanakan oleh Bappelitbangda Kabupaten Luwu dimaksud dengan Tema “Inovasi Digitalisasi Pelayanan Publik” DILAN SMART yang dinilai langsung oleh Tim Penilai dari Lektor Politeknik STIA-LAN Makassar, Wakil Dekan III Politeknik TIA LAN Makassar dan Tim Inovasi Daerah Provinsi Sulawesi Selatan dalam kompetisi Inovasi Pelayanan Publik.
                        </p>
                        <p>
                            Kegiatan yang berlangsung selama tiga hari itu, terlihat Kepala Desa Senga Selatan, Anwar Amir yang di dampingi oleh Sekretaris Desa beserta aparat desa. Anwar berharap Desa Senga Selatan meraih nilai tertinggi pada lomba tersebut. “Kami Pemdes Senga Selatan berharap meraih nilai tertinggi dalam lomba ini,”
                        </p>
                        <p>
                            “Karena Desa Senga Selatan adalah Patron dan contoh bagi desa-desa yang ada di kabupaten luwu. Jadi kita menunggu saja hasil penilaian akhir nantinya.” tutur Anwar Amir
                        </p>
                        <p>
                            Anwar Amir juga menyampaikan Dia bersama aparat desa senga selatan akan berupaya jadikan Desa Senga Selatan sebagai ikon Desa administrasi digital terbarukan dan contoh baik dalam pelayanan warganya di kabupaten luwu untuk desa-desa yang lain.
                        </p>
                        <p>
                            “Untuk itu kami Pemerintah Desa sangat berharap kepada warga desa senga selatan supaya bersatu mendukung program-program kami pemerintah desa, supaya ada hasil penilaian individu maupun kelompok terhadap desa kita di berbagai bidang, ada kemajuan.” Harap Kades Senga Selatan (pn/hyn)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}