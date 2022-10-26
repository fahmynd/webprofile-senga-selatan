import React from 'react'
import { Link } from 'react-router-dom'
import terbaruBerita1 from '../../assets/img/berita/terbaru-berita1.jpeg'
import terbaruBerita2 from '../../assets/img/berita/terbaru-berita2.jpeg'
import terbaruBerita3 from '../../assets/img/berita/terbaru-berita3.jpeg'
import terbaruBerita4 from '../../assets/img/berita/terbaru-berita4.jpg'
import politikBerita2 from '../../assets/img/berita/politik-berita2.jpg'
import politikBerita3 from '../../assets/img/berita/politik-berita3.jpeg'
import politikBerita4 from '../../assets/img/berita/politik-berita4.jpg'
import kesehatanBerita2 from '../../assets/img/berita/kesehatan-berita2.jpeg'
import kesehatanBerita3 from '../../assets/img/berita/kesehatan-berita3.jpg'
import kesehatanBerita4 from '../../assets/img/berita/kesehatan-berita4.png'
import seniBerita1 from '../../assets/img/berita/seni-berita1.jpeg'
import seniBerita2 from '../../assets/img/berita/seni-berita2.jpg'
import seniBerita3 from '../../assets/img/berita/seni-berita3.jpeg'
import seniBerita4 from '../../assets/img/berita/seni-berita4.jpg'
import teknologiBerita1 from '../../assets/img/berita/teknologi-berita1.png'
import teknologiBerita2 from '../../assets/img/berita/teknologi-berita2.jpeg'
import dllBerita1 from '../../assets/img/berita/dll-berita1.jpeg'
import dllBerita2 from '../../assets/img/berita/dll-berita2.jpg'
import dllBerita3 from '../../assets/img/berita/dll-berita3.jpeg'
import dllBerita4 from '../../assets/img/berita/dll-berita4.jpeg'
import terbaru from '../../assets/img/berita/terbaru.jpeg'

function KontenBerita() {
    return (
        <section id="kontenBerita">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold mt-4">Berita</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    Terbaru
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="politik-tab" data-bs-toggle="tab" data-bs-target="#politik" type="button" role="tab" aria-controls="politik" aria-selected="false">
                                    Politik
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="kesehatan-tab" data-bs-toggle="tab" data-bs-target="#kesehatan" type="button" role="tab" aria-controls="kesehatan" aria-selected="false">
                                    Kesehatan
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seni-tab" data-bs-toggle="tab" data-bs-target="#seni" type="button" role="tab" aria-controls="seni" aria-selected="false">
                                    Seni
                                </button>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="budaya-tab" data-bs-toggle="tab" data-bs-target="#budaya" type="button" role="tab" aria-controls="budaya" aria-selected="false">
                                    Budaya
                                </button>
                            </li> */}
                            {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="makanan-tab" data-bs-toggle="tab" data-bs-target="#makanan" type="button" role="tab" aria-controls="makanan" aria-selected="false">
                                    Makanan
                                </button>
                            </li> */}
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="teknologi-tab" data-bs-toggle="tab" data-bs-target="#teknologi" type="button" role="tab" aria-controls="teknologi" aria-selected="false">
                                    Teknologi
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="dll-tab" data-bs-toggle="tab" data-bs-target="#dll" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    dll
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={terbaru} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Pemdes Senga Selatan mengikuti Rakor Persiapan Kegiatan Evaluasi dan Apresiasi KIP Nasional 2022
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 26 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Pemerintah Desa Senga Selatan menghadiri Rapat Koordinasi Pelaksanaan Tahapan Evaluasi dan Apresiasi Keterbukaan Informasi Publik Desa Tingkat Nasional Tahun 2022, bertempat di Dinas PMD Provinsi Sula ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="pemdes-senga-selatan-mengikuti-rakor-persiapan-kegiatan-evaluasi-dan-apresiasi-kip-nasional-2022" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan melaksanakan beberapa agenda dalam Musyawarah Desa (Musdes), pada Jumat (30/9/2022).Adapun agenda yang dilaksanakan adalah :1. Musdes III Pembahasan dan Penetapan RKP Des ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan kembali menyalurkan Insentif bulan Juli s.d Oktober kepada Imam Desa, Khatib, Bilal, Imam Mesjid, Kader Posyandu, Kader PKB, Kader Sub PKB, Guru Ngaji, Perawat Desa, Bida ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 17 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Anda warga Desa Senga Selatan atau mempunyai sebidang tanah di Desa Senga Selatan?? Belum bersertifikat? Ayo segera daftar. Batas waktu untuk memasukkan kelengkapan berkas hanya sampai tanggal 5 Novem ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="politik" role="tabpanel" aria-labelledby="politik-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={terbaruBerita2} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Pemerintah Desa Senga Selatan melaksanakan beberapa agenda dalam Musyawarah Desa (Musdes), pada Jumat (30/9/2022).Adapun agenda yang dilaksanakan adalah :1. Musdes III Pembahasan dan Penetapan RKP Des ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={politikBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan Gelar Musdes II, Pembahasan RKPDesa Berbasis SGDs Desa Tahun 2023
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 15 Agustus 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Belopainfo — Pemerintah Desa Senga Selatan menggelar Musyawarah Desa (Musdes II) Pembahasan Rancangan Rencana Kerja Pemerintah Desa (RKPDesa) Berbasis SDGs Desa Senga Selatan Tahun 2023. Jumat (12/08/ ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-gelar-musdes-ii-pembahasan-rkpdesa-berbasis-sgds-desa-tahun-2023" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={politikBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Rumah Adhyaksa Kejari Luwu Dideklarasikan di Desa Senga Selatan
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 10 Juni 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Belopainfo —— Kejaksaan Negeri Kabupaten Luwu bersama Pemerintah Kabupaten Luwu melakukan Deklarasi Pencanangan Rumah Adhyaksa Kejaksaan Negeri Luwu di Desa Senga Selatan, Kecamatan Belopa, Kamis (09/ ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="rumah-adhyaksa-kejari-luwu-dideklarasikan-di-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={politikBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Anwar Amir Jabat Pj. Kepala Desa Senga Selatan
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 02 Februari 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Kepala Bidang Pengelolaan Informasi dan Komunikasi Publik, Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Luwu, Anwar Amir resmi menjabat sebagai Penjabat Kepala Desa Senga Selatan. ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="anwar-amir-jabat-pj-kepala-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="kesehatan" role="tabpanel" aria-labelledby="kesehatan-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={terbaruBerita3} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Pemerintah Desa Senga Selatan kembali menyalurkan Insentif bulan Juli s.d Oktober kepada Imam Desa, Khatib, Bilal, Imam Mesjid, Kader Posyandu, Kader PKB, Kader Sub PKB, Guru Ngaji, Perawat Desa, Bida ....
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={kesehatanBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Masuk Kantor Desa Senga Selatan Harus Scan QR Code PeduliLindungi, Apa Manfaatnya?
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 03 Februari 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Sebagai langkah penerapan disiplin protokol kesehatan (prokes), Pemerintah Desa Senga Selatan telah menerapkan ketentuan scan Quick Response (QR) Code menggunakan aplikasi PeduliLindungi dan dipasang ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="masuk-kantor-desa-senga-selatan-harus-scan-qr-code-pedulilindungi-apa-manfaatnya" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={kesehatanBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Basmin Tinjau Wisata Vaksin Desa Senga Selatan
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 10 September 2021
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Satuan Tugas Penanganan Covid-19 Kabupaten Luwu terus melakukan percepatan vaksinasi. Salah satu langkah yang diambil melalui program vaksin proaktif desa prioritas yang kali ini dilaksanakan di Desa ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="basmin-tinjau-wisata-vaksin-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={kesehatanBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Desa Senga Selatan Juara Lomba Desa Tangguh dan Desa Sehat Tingkat Kabupaten
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 23 September 2020
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Source: Belopa Info – Luwu. Senin(29/06/2020). Adanya kerjasama untuk membangun desa dan mengharumkan nama baik kampung halaman, serta kolaborasi antara Pemerintah Desa dan Masyarakat, Desa Senga Sela ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="desa-senga-selatan-juara-lomba-desa-tangguh-dan-desa-sehat-tingkat-kabupaten" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="seni" role="tabpanel" aria-labelledby="seni-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={seniBerita1} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Desa Senga Selatan Juara I pada Lomba Inovasi Daerah Tingkat Desa /Kelurahan Se-Kabupaten Luwu
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 18 Agustus 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Belopainfo — Desa Senga Selatan mendapat hadiah penghargaan dan sertifikat dari Bupati Luwu, Dr. H. Basmin Mattayang atas pencapaian pada lomba Inovasi Daerah Tingkat Desa atau Kelurahan se-Kabupaten ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="desa-senga-selatan-juara-i-pada-lomba-inovasi-daerah-tingkat-desa-kelurahan-se-kabupaten-luwu" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={seniBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan Juara 2 Lomba Festival Layang-layang Hias Polres Luwu
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 27 Juni 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Belopainfo — Pemerintah Desa Senga Selatan juara 2 pada Festival layang-layang hias yang diadakan oleh Polres Luwu dalam rangka memperingati Hari Bhayangkara Ke – 76 di Mapolres Luwu, Minggu (19/6/22) ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-juara-2-lomba-festival-layang-layang-hias-polres-luwu" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={seniBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pembukan Lomba Adzan dan Tilawatil Qur’an II Tingkat Desa Senga Selatan
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 26 April 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Belopainfo —— Bulan Suci Ramadan bulan penuh keberkahan, memperbanyak ibadah, amalan dan hal-hal yang berkaitan dengan keagamaan sebagai bentuk penyempurnaan puasa bagi setiap umat Islam.Pemerintah De ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pembukan-lomba-adzan-dan-tilawatil-quran-ii-tingkat-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={seniBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan Raih Predikat Badan Publik Desa Informatif
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 02 Februari 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Penerapan keterbukaan informasi publik pada Pemerintah Desa Senga Selatan  mendapat apresiasi dari Komisi Informasi Provinsi Sulawesi Selatan. Kali ini, Pemerintah Desa Senga Selatan meraih predikat t ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-raih-predikat-badan-publik-desa-informatif" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="tab-pane fade" id="budaya" role="tabpanel" aria-labelledby="budaya-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={terbaruBerita1} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Kepala Desa Senga Selatan mengadakan Rakor terkait Peta Lokasi Kawasan Hutan Lindung
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Koordinasi dengan UPT-KPH Latimojong Dinas Kehutanan Pemprov Sulsel terkait Peta Lokasi Kawasan Hutan Lindung Mangrove di wilayah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Kamis, 20 Oktobe ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="kepala-desa-senga-selatan-mengadakan-rakor-terkait-peta-lokasi-kawasan-hutan-lindung" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan melaksanakan beberapa agenda dalam Musyawarah Desa (Musdes), pada Jumat (30/9/2022).Adapun agenda yang dilaksanakan adalah :1. Musdes III Pembahasan dan Penetapan RKP Des ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan kembali menyalurkan Insentif bulan Juli s.d Oktober kepada Imam Desa, Khatib, Bilal, Imam Mesjid, Kader Posyandu, Kader PKB, Kader Sub PKB, Guru Ngaji, Perawat Desa, Bida ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 17 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Anda warga Desa Senga Selatan atau mempunyai sebidang tanah di Desa Senga Selatan?? Belum bersertifikat? Ayo segera daftar. Batas waktu untuk memasukkan kelengkapan berkas hanya sampai tanggal 5 Novem ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="tab-pane fade" id="makanan" role="tabpanel" aria-labelledby="makanan-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={terbaruBerita1} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Kepala Desa Senga Selatan mengadakan Rakor terkait Peta Lokasi Kawasan Hutan Lindung
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Koordinasi dengan UPT-KPH Latimojong Dinas Kehutanan Pemprov Sulsel terkait Peta Lokasi Kawasan Hutan Lindung Mangrove di wilayah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Kamis, 20 Oktobe ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="kepala-desa-senga-selatan-mengadakan-rakor-terkait-peta-lokasi-kawasan-hutan-lindung" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan melaksanakan beberapa agenda dalam Musyawarah Desa (Musdes), pada Jumat (30/9/2022).Adapun agenda yang dilaksanakan adalah :1. Musdes III Pembahasan dan Penetapan RKP Des ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan kembali menyalurkan Insentif bulan Juli s.d Oktober kepada Imam Desa, Khatib, Bilal, Imam Mesjid, Kader Posyandu, Kader PKB, Kader Sub PKB, Guru Ngaji, Perawat Desa, Bida ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 17 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Anda warga Desa Senga Selatan atau mempunyai sebidang tanah di Desa Senga Selatan?? Belum bersertifikat? Ayo segera daftar. Batas waktu untuk memasukkan kelengkapan berkas hanya sampai tanggal 5 Novem ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="tab-pane fade" id="teknologi" role="tabpanel" aria-labelledby="teknologi-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={teknologiBerita1} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Pemkab. Luwu Upayakan Hadirnya Duta Digital
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 18 Februari 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Pemerintah Kabupaten Luwu mengupayakan hadirnya duta digital dari Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi sebagai pelopor desa cerdas melalui penerimaan duta digital 2022.Dut ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="pemkab-luwu-upayakan-hadirnya-duta-digital" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={teknologiBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Launching Buku Tamu & Anjungan Digital Desa Senga Selatan, Basmin: Tak Ada Kata Terlambat Untuk Transformasi
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 10 Februari 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Pemerintah Desa Senga Selatan melakukan launching buku tamu digital dan anjungan digital desa di aula rumah jabatan Bupati Luwu, Desa Pammanu, Kecamatan Belopa Utara, Rabu (09/02/2022).Penjabat Kepala ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="launching-buku-tamu--anjungan-digital-desa-senga-selatan-basmin-tak-ada-kata-terlambat-untuk-transformasi" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={kesehatanBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Masuk Kantor Desa Senga Selatan Harus Scan QR Code PeduliLindungi, Apa Manfaatnya?
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 03 Februari 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Sebagai langkah penerapan disiplin protokol kesehatan (prokes), Pemerintah Desa Senga Selatan telah menerapkan ketentuan scan Quick Response (QR) Code menggunakan aplikasi PeduliLindungi dan dipasang ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="masuk-kantor-desa-senga-selatan-harus-scan-qr-code-pedulilindungi-apa-manfaatnya" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={terbaruBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 17 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Anda warga Desa Senga Selatan atau mempunyai sebidang tanah di Desa Senga Selatan?? Belum bersertifikat? Ayo segera daftar. Batas waktu untuk memasukkan kelengkapan berkas hanya sampai tanggal 5 Novem ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="dll" role="tabpanel" aria-labelledby="dll-tab">
                                <div className="row mt-4">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src={dllBerita1} className="card-img-top img-berita" alt="" />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
                                                    Senga Selatan yang Dikenang
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 23 September 2020
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Source berita dari BelopaInfo – Luwu. Selasa (11/08/2020). Desa Senga Selatan yang dulunya masih disebut Senga berasal dari kata “senge” yang artinya desa yang dikenang sepanjang masa sebab pada zaman ...
                                                    </p>
                                                </div>
                                            </div>
                                            <Link to="senga-selatan-yang-dikenang" className="stretched-link"></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">

                                        <div className="row mt-2">
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={dllBerita2} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    RAPAT KOORDINASI TAHAPAN EVALUASI DAN APRESIASI KIP DESA TINGKAT NASIONAL 2022
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 17 Oktober 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Rapat Koordinasi Tahapan Evaluasi dan Apresiasi Keterbukaan Informasi Publik Desa Tingkat Nasional Tahun 2022 yang dihadiri oleh Penjabat Kepala Desa Senga Selatan, Pejabat Pengelola Informasi dan Dok ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="rapat-koordinasi-tahapan-evaluasi-dan-apresiasi-kip-desa-tingkat-nasional-2022" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={dllBerita3} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Lindungi Pantai Taddette, Pemerintah Desa Senga Selatan Bersama PT.MDA Menggelar Bakti Sosial Gerakan Tanam Sejuta Pohon Mangrove
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 07 Juni 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        BELOPA, Pilarnewsonline.com – PT.Masmindo Dwi Area (MDA) bersama Pemerintah Desa Senga Selatan menggelar bakti sosial Gerakan tanam sejuta pohon Mangrove di pesisir Pantai Taddette Desa Senga Selatan ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="lindungi-pantai-taddette-pemerintah-desa-senga-selatan-bersama-ptmda-menggelar-bakti-sosial-gerakan-tanam-sejuta-pohon-mangrove" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2">
                                                <div className="card berita-card berita-card__panjang">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3 full-col">
                                                                <img src={dllBerita4} className="card-img-top img-berita-panjang" alt="..." />
                                                            </div>
                                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                                    Menunggu Hasil, Pemdes Senga Selatan Ikuti Penilaian Akhir Lomba Inovasi Desa
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Admin
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 07 Juni 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        ANWAR AMIR,S.Sos : “Warga Senga Selatan Supaya Bersatu Dukung Program Pemerintah Desa”MAKASSAR, Pilarnewsonline.com – Pemerintah Desa Senga Selatan mengikuti Penilaian Akhir Lomba Inovasi Daerah Tingk ...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="menunggu-hasil-pemdes-senga-selatan-ikuti-penilaian-akhir-lomba-inovasi-desa" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KontenBerita

// function openInNewTab(href) {
//     Object.assign(document.createElement('a'), {
//       target: '_blank',
//       rel: 'noopener noreferrer',
//       href: href,
//     }).click();
//   }