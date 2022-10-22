import React, { useEffect } from 'react'
import politikBerita4 from '../../../assets/img/berita/politik-berita4.jpg'

export default function PolitikBerita4() {
    useEffect(function () {
        document.title = "Anwar Amir Jabat Pj. Kepala Desa Senga Selatan | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Anwar Amir Jabat Pj. Kepala Desa Senga Selatan</h1>
                        <p>02 Februari 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={politikBerita4} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Kepala Bidang Pengelolaan Informasi dan Komunikasi Publik, Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Luwu, Anwar Amir resmi menjabat sebagai Penjabat Kepala Desa Senga Selatan. Hal tersebut tertuang dalam Keputusan Bupati Luwu Nomor 3/I/2022 tentang Pemberhentian Kepala Desa dan Pengangkatan Penjabat Kepala Desa Senga Selatan Kecamatan Belopa Kabupaten Luwu, tertanggal 3 Januari 2022. </p>

                        <p>
                            Anwar Amir menjabat sebagai Penjabat Kepala Desa Senga Selatan setelah Andi Muhammad Arfan Basmin mengundurkan diri dan menjadi Pengganti Antar Waktu Anggota DPRD Kabupaten Luwu sisa masa jabatan 2019-2024, yang dilantik resmi pada 22 Januari 2022. </p>

                        <p>
                            Selama menjabat sebagai Pj. Kepala Desa Senga Selatan, Anwar Amir menjalankan tugas, fungsi dan kewenangan dalam penyelenggaraan pemerintahan, pelaksanaan pembangunan dan pelayanan masyarakat sampai terpilih dan telah dilantik kepala desa pengganti antar waktu hasil pemilihan.
                        </p>

                        <p>
                            Selain itu, juga bersama Badan Permusyawaratan Desa (BPD) Senga Selatan mempersiapkan proses pelaksanaan pemilihan kepala desa PAW sesuai peraturan perundang-undangan.
                        </p>

                        <p>
                            "Mohon do'a dan dukungan dari semua pihak, agar kami dapat menunaikan amanah pengabdian ini dengan sebaik-baiknya," ujar Anwar Amir saat ditemui di ruang kerjanya.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}