import React from 'react'
import blobs from '../../assets/img/bg/blobs3.png'

function AdministrasiKeuangan() {
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
                                        <p className="adm-umum-jumlah fw-bold">6</p>
                                        <p className="adm-umum-judul">APB Desa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1</p>
                                        <p className="adm-umum-judul">RAB Desa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1</p>
                                        <p className="adm-umum-judul">Kas Kegiatan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1</p>
                                        <p className="adm-umum-judul">Kas Umum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">0</p>
                                        <p className="adm-umum-judul">Kas Pembantu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1</p>
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