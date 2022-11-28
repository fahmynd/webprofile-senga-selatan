import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import blobs from '../../assets/img/bg/blobs3.webp'

const AdministrasiKeuangan = () => {
    const [apbd, setApbd] = useState();
    const [rabd, setRabd] = useState();
    const [kegiatan, setKegiatan] = useState();
    const [umum, setUmum] = useState();
    const [pembantu, setPembantu] = useState();
    const [bank, setBank] = useState();

    useEffect(() => {
        axios.get('db.json')
            .then((result) => {
                // console.log(result.data.admKeuangan);
                const data = result.data.admKeuangan;
                setApbd(data.apbd)
                setRabd(data.rabd)
                setKegiatan(data.kasKegiatan)
                setUmum(data.kasUmum)
                setPembantu(data.kasPembantu)
                setBank(data.bankBukuDesa)
            })
    })
    return (
        <section id="administrasiKeuangan">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Administrasi Keuangan</h2>
                        <p>
                            Sistem digital yang berfungsi mempermudah aktivitas pengelolaan data dan informasi terkait dengan keuangan pemerintahan desa yang dituangkan dalam Buku Administrasi Keuangan
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row mt-5">
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{apbd}</p>
                                        <p className="adm-umum-judul">APB Desa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{rabd}</p>
                                        <p className="adm-umum-judul">RAB Desa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{kegiatan}</p>
                                        <p className="adm-umum-judul">Kas Kegiatan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{umum}</p>
                                        <p className="adm-umum-judul">Kas Umum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{pembantu}</p>
                                        <p className="adm-umum-judul">Kas Pembantu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">{bank}</p>
                                        <p className="adm-umum-judul">Bank Buku Desa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img id="blobs-3" src={blobs} alt="" />
        </section>
    )
}

export default AdministrasiKeuangan