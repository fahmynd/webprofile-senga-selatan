import React from 'react'
import { Link } from 'react-router-dom'

function KontenBelanja() {
    return (
        <main id="kontenBelanja">
            <section id="headerBelanja">
                <div className="row justify-content-center mb-3">
                    <div className="col-lg-5 center-v">
                        <p className="jumbo-kontenBelanja">Banyak Keperluan Tapi Malas ke Pasar? <span className="clr-green">Belanja Disini Saja!</span></p>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img className="img-kontenBelanja" src="./assets/img/bg/bg-konten-jualan.webp" width="70%" alt='' />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="input-group input-group-lg mb-3" id="wrapSearchBelanja">
                                <span className="input-group-text" id="searchBelanja">
                                    <i className="fa fa-search"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="cari produk" aria-label="pencarian" aria-describedby="searchBelanja" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <section id="kontenBelanja">
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                        Makanan
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="minuman-tab" data-bs-toggle="tab" data-bs-target="#minuman" type="button" role="tab" aria-controls="minuman" aria-selected="false">
                                        Minuman
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pakaian-tab" data-bs-toggle="tab" data-bs-target="#pakaian" type="button" role="tab" aria-controls="pakaian" aria-selected="false">
                                        Pakaian
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="sayuran-tab" data-bs-toggle="tab" data-bs-target="#sayuran" type="button" role="tab" aria-controls="sayuran" aria-selected="false">
                                        Sayuran
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="buah-tab" data-bs-toggle="tab" data-bs-target="#buah" type="button" role="tab" aria-controls="buah" aria-selected="false">
                                        Buah
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-3">
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                </div>
                                <div className="tab-pane fade" id="minuman" role="tabpanel" aria-labelledby="minuman-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                    <div className="row mt-3">
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                </div>
                                <div className="tab-pane fade" id="pakaian" role="tabpanel" aria-labelledby="pakaian-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                </div>
                                <div className="tab-pane fade" id="sayuran" role="tabpanel" aria-labelledby="sayuran-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                </div>
                                <div className="tab-pane fade" id="buah" role="tabpanel" aria-labelledby="buah-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card beli-card">
                                                <img src="assets/img/jualan/pete.jpg" className="card-img-top beli-card__img" alt="" />
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="beli-card__judul">Petai</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <p className="beli-card__harga">Rp15.000/ikat</p>
                                                        </div>
                                                        <div className="col-md-12 mb-4">
                                                            <p className="beli-card__detail">
                                                                Kondisi: Baru, Berat: 100 Gram, Kategori: Paket
                                                                Sayur, Etalase: Semua Etalase.
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                            </li>
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to="#">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </main>
    )
}

export default KontenBelanja