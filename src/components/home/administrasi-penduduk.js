import React from 'react'

function AdministrasiPenduduk() {
    return (
        <section id="administrasiPenduduk">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Administrasi Penduduk</h2>
                        <p>
                            Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait dengan kependudukan dan pendayagunaannya untuk pelayanan publik yang efektif dan efisien
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row mt-5">
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">3.536</p>
                                        <p className="adm-umum-judul">Jumlah Total Penduduk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1.791</p>
                                        <p className="adm-umum-judul">Laki-Laki</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">1.735</p>
                                        <p className="adm-umum-judul">Perempuan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">975</p>
                                        <p className="adm-umum-judul">Kepala Keluarga</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">0</p>
                                        <p className="adm-umum-judul">Penduduk Sementara</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card adm-umum-card">
                                    <div className="card-body text-center">
                                        <p className="adm-umum-jumlah fw-bold">124</p>
                                        <p className="adm-umum-judul">Mutasi Penduduk</p>
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

export default AdministrasiPenduduk