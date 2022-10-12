import React from 'react'
import { Link } from 'react-router-dom'

function BeliDariDesa() {
    return (
        <section id="beliDariDesa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Beli dari Desa</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique saepe hic aut provident aperiam, nostrum repellat ex
                            iste adipisci ut blanditiis dolor
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card beli-card">
                            <img src="assets/img/jualan/jualan1.jpg" className="card-img-top beli-card__img" alt="" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="beli-card__judul">Healty Juice</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="beli-card__harga">Rp12.000,-</p>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <p className="beli-card__detail">
                                            Kondisi: Baru, Berat: 100 Gram, Kategori: Minuman,
                                            Etalase: Semua Etalase.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center wrap-button-penjual">
                                    <p className="btn-penjual__text">Hubungi Penjual</p>
                                    <Link to="#" className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card beli-card">
                            <img src="assets/img/jualan/jualan2.jpg" className="card-img-top beli-card__img" alt="" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="beli-card__judul">Donat Bomboloni</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="beli-card__harga">Rp4.000,-</p>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <p className="beli-card__detail">
                                            Kondisi: Baru, Berat: 100 Gram, Kategori: Makanan,
                                            Etalase: Semua Etalase.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center wrap-button-penjual">
                                    <p className="btn-penjual__text">Hubungi Penjual</p>
                                    <Link to="#" className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card beli-card">
                            <img src="assets/img/jualan/jualan3.jpg" className="card-img-top beli-card__img" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="beli-card__judul">Susu Cendol Cheese by Happy99</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="beli-card__harga">Rp10.000,-</p>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <p className="beli-card__detail">
                                            Kondisi: Baru, Berat: 100 Gram, Kategori: Minuman,
                                            Etalase: Semua Etalase.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center wrap-button-penjual">
                                    <p className="btn-penjual__text">Hubungi Penjual</p>
                                    <Link to="#" className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card beli-card">
                            <img src="assets/img/jualan/jualan4.jpg" className="card-img-top beli-card__img" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="beli-card__judul">Sate Mama Citra</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="beli-card__harga">Rp15.000,-</p>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <p className="beli-card__detail">
                                            Kondisi: Baru, Berat: 100 Gram, Kategori: Makanan,
                                            Etalase: Semua Etalase.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center wrap-button-penjual">
                                    <p className="btn-penjual__text">Hubungi Penjual</p>
                                    <Link to="#" className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <Link to="/belanja" className="btn btn-outline-secondary">Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeliDariDesa