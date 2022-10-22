import React, { useEffect } from 'react'
import kesehatanBerita3 from '../../../assets/img/berita/kesehatan-berita3.jpg'

export default function KesehatanBerita3() {
    useEffect(function () {
        document.title = "Basmin Tinjau Wisata Vaksin Desa Senga Selatan | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Basmin Tinjau Wisata Vaksin Desa Senga Selatan</h1>
                        <p>10 September 2021</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={kesehatanBerita3} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Satuan Tugas Penanganan Covid-19 Kabupaten Luwu terus melakukan percepatan vaksinasi. Salah satu langkah yang diambil melalui program vaksin proaktif desa prioritas yang kali ini dilaksanakan di Desa Senga Selatan, Kec. Belopa, Rabu (25/08/2021). Ketua Satgas Penanganan Covid-19 Kab. Luwu, Dr. H. Basmin Mattayang yang hadir memantau jalannya vaksinasi, mengapresiasi antusias warga yang hadir untuk divaksin.
                        </p>
                        <p>
                            “Vaksinasi ini menjadi ikhtiar kita dalam menghadapi pandemi Covid-19, semoga pandemi ini lekas berakhir,” ujar Basmin usai memantau jalannya vaksinasi.
                        </p>
                        <p>
                            Kepala Desa Senga Selatan, Andi Arfan Basmin mengatakan vaksinasi ini dikemas dalam kegiatan Wisata Vaksin Senga Selatan, dimana masyarakat yang akan divaksin merasa nyaman dalam menunggu antrian.
                        </p>
                        <p>
                            “Total hari ini sebanyak 269 warga divaksini yang terbagi 209 orang vaksin pertama dan 60 orang vaksin kedua,” ungkap Arfan.
                        </p>
                        <p>
                            Ia juga menambahkan bahwa sebanyak 47 orang ditolak saat proses skrining vaksinasi covid-19 dan diharus menetralkan kondisi terlebih dahulu.
                        </p>
                        <p>
                            Fokus vaksinasi yang dilakukan Tim Satgas Covid-19 Kabupaten Luwu menargetkan 80 % warga Desa Senga Selatan divaksin agar terbentuk Herd Immunity (Kekebalan Kelompok).
                        </p>
                        <p>
                            Sumber: http://mediacenter.luwukab.go.id/basmin-tinjau-wisata-vaksin-desa-senga-selatan/
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}