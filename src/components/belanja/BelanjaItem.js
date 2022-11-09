import React, { Component } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BelanjaCard } from './BelanjaCard'
import ReactPaginate from "react-paginate";
import pakde from '../../assets/img/bg/bg-konten-jualan.webp'
import makananDonat from '../../assets/img/jualan/makanan-donat.webp'
import minumanCendol from '../../assets/img/jualan/minuman-cendol.jpg'
import axios from 'axios';

export default class BelanjaItem extends Component {
    state = {
        item: []
    }

    componentDidMount() {
        axios.get('https://profil.digitaldesa.id/sengaselatan-luwu/belanja/lists')
            .then((result) => {
                this.setState({
                    item: result.data.data
                })
            })
    }
    render() {
        return (
            <main id="kontenBelanja">
                <section id="headerBelanja">
                    <div className="row justify-content-center mb-3">
                        <div className="col-lg-5 center-v">
                            <p className="jumbo-kontenBelanja">Banyak Keperluan Tapi Malas ke Pasar? <span className="clr-green">Belanja Disini Saja!</span></p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img className="img-kontenBelanja" src={pakde} width="70%" alt='' />
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
                                            Semua
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="makanan-tab" data-bs-toggle="tab" data-bs-target="#makanan" type="button" role="tab" aria-controls="makanan" aria-selected="false">
                                            Makanan
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="minuman-tab" data-bs-toggle="tab" data-bs-target="#minuman" type="button" role="tab" aria-controls="minuman" aria-selected="false">
                                            Minuman
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row mt-3">
                                            {this.state.currentItems.map((belanja) => {
                                                return (
                                                    <BelanjaCard
                                                        key={belanja.id}
                                                        image={belanja.foto}
                                                        title={belanja.nama}
                                                        description={belanja.jenis}
                                                        price={belanja.harga}
                                                        phone={belanja.notelp}
                                                    />
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="makanan" role="tabpanel" aria-labelledby="makanan-tab">
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
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
                                                                    Kondisi: Baru, Berat: 100 Gram, Kategori: Makanan, Etalase: Semua Etalase.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-center wrap-button-penjual">
                                                            <a href="https://api.whatsapp.com/send?phone=6281248622527&text=Saya%20Tertarik%20dengan%20jualan%20Anda" target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="minuman" role="tabpanel" aria-labelledby="minuman-tab">
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                                <div className="card beli-card">
                                                    <img src={minumanCendol} className="card-img-top beli-card__img" alt="" />
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
                                                                    Kondisi: Baru, Berat: 100 Gram, Kategori: Minuman, Etalase: Semua Etalase.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-center wrap-button-penjual">
                                                            <a href="https://api.whatsapp.com/send?phone=6285298313171&text=Saya%20Tertarik%20dengan%20jualan%20Anda" target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ReactPaginate
                            className="pagination justify-content-center"
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< Previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />

                    </section>
                </div>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Deskripsi Produk</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                <button type="button" className="btn btn-primary">Hubungi Penjual</button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}
