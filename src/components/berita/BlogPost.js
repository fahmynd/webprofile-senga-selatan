import axios from 'axios';
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Post } from './Post';
import { Link } from 'react-router-dom'
import terbaru04Nov from '../../assets/img/berita/terbaru04Nov.jpeg'


export default class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        axios.get('https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists')
            .then((result) => {
                // console.log(result);
                this.setState({
                    post: result.data.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <section id="kontenBerita">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h2 className="fw-bold mt-4">Berita</h2>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                                        <button className="nav-link" id="teknologi-tab" data-bs-toggle="tab" data-bs-target="#teknologi" type="button" role="tab" aria-controls="teknologi" aria-selected="false">
                                            Teknologi
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="dll-tab" data-bs-toggle="tab" data-bs-target="#dll" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                            dll
                                        </button>
                                    </li>
                                </ul> */}
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                                    <Link to="pemdes-senga-selatan-mengikut-rapat-koordinasi-pelaksanaan-lomba-inovasi-daerah-tahun-2023" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-7">
                                                <div className="row mt-2">
                                                    {this.state.post.map((post) => {
                                                        return (
                                                            <Post key={post.id} data={post} />
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
