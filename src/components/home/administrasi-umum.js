import React from 'react'

function AdministrasiUmum() {
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
                                <p className="adm-umum-jumlah fw-bold">16</p>
                                <p className="adm-umum-judul">Peraturan Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">10</p>
                                <p className="adm-umum-judul">Keputusan Kepala Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">79</p>
                                <p className="adm-umum-judul">Inventaris Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">16</p>
                                <p className="adm-umum-judul">Lembaran & Berita</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">79</p>
                                <p className="adm-umum-judul">Buku Agenda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">24</p>
                                <p className="adm-umum-judul">Surat Ekspedisi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">13</p>
                                <p className="adm-umum-judul">Aparat Pemerintah Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">0m<sup>2</sup></p>
                                <p className="adm-umum-judul">Tanah Kas Desa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <div className="card adm-umum-card">
                            <div className="card-body text-center">
                                <p className="adm-umum-jumlah fw-bold">7.766.437m<sup>2</sup></p>
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