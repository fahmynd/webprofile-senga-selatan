import React from 'react'

function JumlahSurat() {
    return (
        <section id="jumlahSurat">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <h2 className="fw-bold sub-judul text-center">Jumlah Surat</h2>
                        <div className="row mt-5">
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">4</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Hari ini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">6</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Bulan ini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">888</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Tahun ini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 offset-lg-1 col-lg-4">
                        <h2 className="fw-bold sub-judul text-center">Top 3 Request Surat</h2>
                        <div className="row mt-5">
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card__second">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">3</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Surat Keterangan Usaha</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card__second">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">2</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Surat Keterangan Domisili</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="card jum-surat-card__second">
                                    <div className="card-body text-center">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <p className="adm-umum-jumlah fw-bold">2</p>
                                            </div>
                                            <div className="col-md-7 center-v">
                                                <p className="adm-umum-judul">Formulir Permohonan KTP</p>
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

export default JumlahSurat