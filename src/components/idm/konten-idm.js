import React from 'react'

function KontenIdm() {
    return (
        <main id="kontenIDM">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold mt-4">Skor Indeks Desa Membangun</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                        <div className="card card-idm card-idm__skor">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-idm__text">
                                            Skor IDM <br />
                                            Tahun <span>2022</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6 text-center center-v">
                                        <p className="card-idm__jumlah">0.8268</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card card-idm card-idm__status">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-idm__text">
                                            Status IDM <br />
                                            Tahun <span>2022</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6 text-center center-v">
                                        <p className="card-idm__infoStatus">Mandiri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Target Status</p>
                        <p className="fs-5">Mandiri</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor Minimal</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Penambahan</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKS</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKE</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKL</p>
                        <p className="fs-5">0.00</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3 className="mt-4">Rumusan Pokok</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default KontenIdm