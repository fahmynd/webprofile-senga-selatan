import React from 'react'
import { Link } from 'react-router-dom'

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
                            <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita" alt="..." />
                            <div className="card-body">
                                <p className="berita-card__judul">
                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi Desa Kompong
                                </p>
                                <div className="berita-card__info">
                                    <p className="berita-card__penulis me-4">
                                        <i className="fas fa-user-edit"></i> Ahmad Rifaldi
                                    </p>
                                    <p className="berita-card__tanggal">
                                        <i className="fas fa-calendar-day"></i> 20 November 2022
                                    </p>
                                </div>
                                <div className="berita-card__isi">
                                    <p className="berita-card__shortdesc show-read-more">
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                        amet dui. Vivamus suscipit tortor eget felis porttitor
                                        volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem. Vestibulum ac diam sit amet quam vehicula
                                        elementum sed sit amet dui. Quisque velit nisi, pretium ut
                                        lacinia in, elementum id enim.
                                    </p>
                                </div>
                                <Link to="https://google.com" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="fw-bold">Berita Terbaru</h3>
                            </div>
                            <div className="col-md-6 text-end">
                                <Link className="link-selengkapnya" to="#">Selengkapnya</Link>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12 mb-2">
                                <div className="card berita-card berita-card__panjang">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 full-col">
                                                <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi Desa
                                                    Kompong
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Ahmad Rifaldi
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 November 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Vestibulum ac diam sit amet quam vehicula elementum
                                                        sed sit amet dui. Vivamus suscipit tortor eget felis
                                                        porttitor volutpat.
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
                                                <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi Desa
                                                    Kompong
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Ahmad Rifaldi
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 November 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Vestibulum ac diam sit amet quam vehicula elementum
                                                        sed sit amet dui. Vivamus suscipit tortor eget felis
                                                        porttitor volutpat.
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
                                                <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita-panjang" alt="..." />
                                            </div>
                                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                                <p className="berita-card__judul berita-card__judul_panjang">
                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi Desa
                                                    Kompong
                                                </p>
                                                <div className="berita-card__info">
                                                    <p className="berita-card__penulis me-4">
                                                        <i className="fas fa-user-edit"></i> Ahmad Rifaldi
                                                    </p>
                                                    <p className="berita-card__tanggal">
                                                        <i className="fas fa-calendar-day"></i> 20 November 2022
                                                    </p>
                                                </div>
                                                <div className="berita-card__isi">
                                                    <p className="berita-card__shortdesc show-read-more">
                                                        Vestibulum ac diam sit amet quam vehicula elementum
                                                        sed sit amet dui. Vivamus suscipit tortor eget felis
                                                        porttitor volutpat.
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