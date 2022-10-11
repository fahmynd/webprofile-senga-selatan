import React from 'react'
import ApbdChart from './apbd-chart'

function Apbd() {
    return (
        <section id="apbd">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">APBD</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique saepe hic aut provident aperiam, nostrum repellat ex
                            iste adipisci ut blanditiis dolor
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-5 center-v mb-5">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="card apbd-card">
                                    <div className="card-body">
                                        <p className="fw-bold clr-white">Pendapatan Desa:</p>
                                        <p id="pendapatanDesa" className="text-end">Rp2.000.000.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card apbd-card apbd-card__2">
                                    <div className="card-body">
                                        <p className="fw-bold clr-white">Belanja Desa:</p>
                                        <p id="pendapatanDesa" className="text-end">Rp2.000.000.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div>
                            <ApbdChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apbd