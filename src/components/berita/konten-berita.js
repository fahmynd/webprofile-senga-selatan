import React from 'react'
import { Link } from 'react-router-dom'

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
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="budaya-tab" data-bs-toggle="tab" data-bs-target="#budaya" type="button" role="tab" aria-controls="budaya" aria-selected="false">
                                    Budaya
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="makanan-tab" data-bs-toggle="tab" data-bs-target="#makanan" type="button" role="tab" aria-controls="makanan" aria-selected="false">
                                    Makanan
                                </button>
                            </li>
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
                                <div className="row mt-3">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita" alt="..." />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
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
                                                        porttitor volutpat. Curabitur arcu erat, accumsan id
                                                        imperdiet et, porttitor at sem. Vestibulum ac diam
                                                        sit amet quam vehicula elementum sed sit amet dui.
                                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                                        id enim.
                                                    </p>
                                                </div>
                                                <Link to="https://google.com" className="stretched-link" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="politik" role="tabpanel" aria-labelledby="politik-tab">
                                <div className="row mt-3">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita" alt="..." />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
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
                                                        porttitor volutpat. Curabitur arcu erat, accumsan id
                                                        imperdiet et, porttitor at sem. Vestibulum ac diam
                                                        sit amet quam vehicula elementum sed sit amet dui.
                                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                                        id enim.
                                                    </p>
                                                </div>
                                                <Link to="https://google.com" className="stretched-link" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="kesehatan" role="tabpanel" aria-labelledby="kesehatan-tab">
                                <div className="row mt-3">
                                    <div className="col-md-12 col-lg-5 mb-5">
                                        <div className="card berita-card">
                                            <img src="assets/img/bg/bg-jumbotron.png" className="card-img-top img-berita" alt="..." />
                                            <div className="card-body">
                                                <p className="berita-card__judul">
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
                                                        porttitor volutpat. Curabitur arcu erat, accumsan id
                                                        imperdiet et, porttitor at sem. Vestibulum ac diam
                                                        sit amet quam vehicula elementum sed sit amet dui.
                                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                                        id enim.
                                                    </p>
                                                </div>
                                                <Link to="https://google.com" className="stretched-link" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-7">
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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
                                                                    Kelompok Tani Wanita Mawar, Penunjang Ekonomi
                                                                    Desa Kompong
                                                                </p>
                                                                <div className="berita-card__info">
                                                                    <p className="berita-card__penulis me-4">
                                                                        <i className="fas fa-user-edit"></i> Ahmad
                                                                        Rifaldi
                                                                    </p>
                                                                    <p className="berita-card__tanggal">
                                                                        <i className="fas fa-calendar-day"></i> 20
                                                                        November 2022
                                                                    </p>
                                                                </div>
                                                                <div className="berita-card__isi">
                                                                    <p className="berita-card__shortdesc show-read-more">
                                                                        Vestibulum ac diam sit amet quam vehicula
                                                                        elementum sed sit amet dui. Vivamus suscipit
                                                                        tortor eget felis porttitor volutpat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="https://google.com" className="stretched-link" />
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