import React from 'react'
import { Link } from 'react-router-dom'
import terbaru31Nov from '../../assets/img/berita/terbaru31Nov.jpeg'
import terbaru03Nov from '../../assets/img/berita/terbaru03Nov.jpeg'
import terbaru from '../../assets/img/berita/terbaru.jpeg'
import terbaru04Nov from '../../assets/img/berita/terbaru04Nov.jpeg'

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
                            <img src={terbaru04Nov} className="card-img-top img-berita" alt="" />
                            <div className="card-body">
                                <p className="berita-card__judul">
                                    Pemdes Senga Selatan mengikut Rapat Koordinasi Pelaksanaan Lomba Inovasi Daerah Tahun 2023
                                </p>
                                <div className="berita-card__info">
                                    <p className="berita-card__penulis me-4">
                                        <i className="fas fa-user-edit"></i> Admin
                                    </p>
                                    <p className="berita-card__tanggal">
                                        <i className="fas fa-calendar-day"></i> 04 November 2022
                                    </p>
                                </div>
                                <div className="berita-card__isi">
                                    <p className="berita-card__shortdesc show-read-more">
                                        Rapat Koordinasi dalam rangka pelaksanaan Kompetisi Inovasi Pelayanan Publik di Lingkungan Kementerian/ Lembaga, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah Tahun 2023 di ...
                                    </p>
                                </div>
                            </div>
                            <Link to="berita/pemdes-senga-selatan-mengikut-rapat-koordinasi-pelaksanaan-lomba-inovasi-daerah-tahun-2023" className="stretched-link"></Link>
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
                                                <img src={terbaru03Nov} className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Desa Senga Selatan, Luwu Wakili Sulsel Lomba KIP
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 03 November 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Eksposindo.com | Setelah berhasil meraih predikat badan publik desa informatif dalam kegiatan monitoring, evaluasi dan pemeringkatan keterbukaan informasi publik pemerintah desa yang diselenggaraka ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="berita/desa-senga-selatan-luwu-wakili-sulsel-lomba-kip" className="stretched-link"></Link>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="card berita-card berita-card__panjang">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 full-col">
                                                <img src={terbaru31Nov} className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Senga Selatan Wakili Sulsel di Ajang Apresiasi KIP Desa Tingkat Nasional
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Admin
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 31 Oktober 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Belopainfo — Setelah berhasil meraih predikat badan publik desa informatif dalam kegiatan monitoring, evaluasi dan pemeringkatan keterbukaan informasi publik pemerintah desa yang diselenggarakan Komisi Informasi ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="berita/senga-selatan-wakili-sulsel-di-ajang-apresiasi-kip-desa-tingkat-nasional" className="stretched-link"></Link>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="card berita-card berita-card__panjang">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 full-col">
                                                <img src={terbaru} className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
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
                                        </div>
                                    </div>
                                    <Link to="berita/pemdes-senga-selatan-mengikuti-rakor-persiapan-kegiatan-evaluasi-dan-apresiasi-kip-nasional-2022" className="stretched-link"></Link>
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