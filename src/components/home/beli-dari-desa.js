import React from 'react'
import { Link } from 'react-router-dom'
import makananDonat from '../../assets/img/jualan/makanan-donat.jpg'
import makananSate from '../../assets/img/jualan/makanan-sate.jpg'
import minumanCendol from '../../assets/img/jualan/minuman-cendol.jpg'
import minumanJuice from '../../assets/img/jualan/minuman-juice.jpg'

function BeliDariDesa() {
    return (
        <section id="beliDariDesa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Beli dari Desa</h2>
                        <p>
                        Layanan yang disediakan promosi produk UMKM Desa sehingga mampu meningkatkan perekonomian masyarakat desa
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="card beli-card">
                            <img src={minumanJuice} className="card-img-top beli-card__img" alt="" />
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
                            <img src={makananDonat} className="card-img-top beli-card__img" alt="" />
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
                            <img src={minumanCendol} className="card-img-top beli-card__img" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="beli-card__judul">Susu Cendol Cheese</p>
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
                            <img src={makananSate} className="card-img-top beli-card__img" alt="..." />
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