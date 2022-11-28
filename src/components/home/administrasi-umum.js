import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AdministrasiUmum = () => {
    const [peraturan, setPeraturan] = useState();
    const [keputusan, setKeputusan] = useState();
    const [inventaris, setInventaris] = useState();
    const [lembaran, setLembaran] = useState();
    const [agenda, setAgenda] = useState();
    const [ekspedisi, setEkspedisi] = useState();
    const [aparat, setAparat] = useState();
    const [tanah, setTanah] = useState();
    const [luas, setLuas] = useState();

    useEffect(() => {
        axios.get('db.json')
            .then((result) => {
                const data = result.data.admUmum;
                setPeraturan(data.peraturanDesa)
                setKeputusan(data.keputusanKepalaDesa)
                setInventaris(data.inventarisDesa)
                setLembaran(data.berita)
                setAgenda(data.bukuAgenda)
                setEkspedisi(data.suratEkspedisi)
                setAparat(data.aparatPemerintahDesa)
                setTanah(data.tanahKasDesa)
                setLuas(data.luasTanahDesa)
            })
    })
    return (
        <section id="administrasiUmum">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Administrasi Umum</h2>
                        <p>
                            Sistem digital yang berisi segala bentuk pengeloaan data dan informasi Pemerintahan yang dituangkan pada Buku Administrasi Umum
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{peraturan}</p>
                                <p className="adm-umum-judul">Peraturan Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{keputusan}</p>
                                <p className="adm-umum-judul">Keputusan Kepala Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{inventaris}</p>
                                <p className="adm-umum-judul">Inventaris Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{lembaran}</p>
                                <p className="adm-umum-judul">Lembaran & Berita</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{agenda}</p>
                                <p className="adm-umum-judul">Buku Agenda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{ekspedisi}</p>
                                <p className="adm-umum-judul">Surat Ekspedisi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{aparat}</p>
                                <p className="adm-umum-judul">Aparat Pemerintah Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{tanah}m<sup>2</sup></p>
                                <p className="adm-umum-judul">Tanah Kas Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">{luas}m<sup>2</sup></p>
                                <p className="adm-umum-judul">Luas Tanah Desa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdministrasiUmum