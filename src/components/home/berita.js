import React from 'react'
import { Link } from 'react-router-dom'
import berita1 from '../../assets/img/berita/berita1.jpg'
import berita2 from '../../assets/img/berita/berita2.jpg'
import berita3 from '../../assets/img/berita/berita3.jpeg'
import berita4 from '../../assets/img/berita/berita4.jpg'

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
                            <img src={berita1} className="card-img-top img-berita" alt="" />
                            <div className="card-body">
                                <p className="berita-card__judul">
                                    Pemdes Senga Selatan Salurkan BLT DD Triwulan ke III Kepada 121 Penerima
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
                                        Belopainfo — Pemerintah Desa Senga Selatan melakukan penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Triwulan III bulan Juli—Agustus Tahun Anggaran 2022. Penyaluran tersebut diberikan kepada 121 ...
                                    </p>
                                </div>
                                <Link to="/berita" className="stretched-link"></Link>
                            </div>
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
                                                <img src={berita2} className="card-img-top img-berita-panjang" alt="..." />
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
                                    <Link to="https://google.com" className="stretched-link"></Link>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="card berita-card berita-card__panjang">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 full-col">
                                                <img src={berita3} className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Dinas Ketahanan Pangan dan Pemdes Senga Selatan Lakukan Pelatihan Tematik P2L
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 21 Juli 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Belopainfo — Dalam upaya pemanfaatan pekarangan rumah, Dinas Ketahanan Pangan Kabupaten Luwu bekerjasama dengan Pemerintah Desa Senga Selatan memberikan Pelatihan Tematik Tahap I kepada kelompok tani ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="https://google.com" className="stretched-link"></Link>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="card berita-card berita-card__panjang">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 full-col">
                                                <img src={berita4} className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Penyusunan RKPDesa, Desa Senga Selatan Usulkan 4 Program Prioritas 2023
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 21 Juli 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Belopainfo — Pemerintah Desa Senga Selatan melaksanakan Musyawarah Desa (Musdes) Penyusunan Rencana Kerja Pemerintah Desa (RKPDesa) Berbasis SDGs Desa Perencanaan Pembangunan Desa Tahun 2023 pada, Kam ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="https://google.com" className="stretched-link"></Link>
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