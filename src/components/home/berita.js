import React from 'react'
import { Link } from 'react-router-dom'
import terbaruBerita1 from '../../assets/img/berita/terbaru-berita1.jpeg'
import terbaruBerita2 from '../../assets/img/berita/terbaru-berita2.jpeg'
import terbaruBerita3 from '../../assets/img/berita/terbaru-berita3.jpeg'
import terbaruBerita4 from '../../assets/img/berita/terbaru-berita4.jpg'

function Berita() {
    return (
        <section id="berita">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold sub-judul">Berita Utama</h2>
                    </div>
                </div>
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
                            <Link to="/berita/kepala-desa-senga-selatan-mengadakan-rakor-terkait-peta-lokasi-kawasan-hutan-lindung" className="stretched-link"></Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="fw-bold">Berita Terbaru</h3>
                            </div>
                            <div className="col-md-6 text-end">
                                <Link className="link-selengkapnya" to="/berita">Selengkapnya</Link>
                            </div>
                        </div>
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
                                    <Link to="/berita/pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" className="stretched-link"></Link>
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
                                    <Link to="/berita/pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" className="stretched-link"></Link>
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
                                    <Link to="/berita/pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Berita