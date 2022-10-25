import React from 'react'
import { Link } from 'react-router-dom'

function PetaLokasiDesa() {
    return (
        <section id="petaLokasiDesa" className='mt-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Peta Lokasi Desa</h2>
                        <p>
                            Senga Selatan adalah desa yang berada di kecamatan Belopa, Kabupaten Luwu, Sulawesi Selatan, Indonesia.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 mb-5">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title="petaLokasiDesa"
                                    width="100%"
                                    height="100%"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=senga%20selatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                >
                                </iframe>
                                <Link to="https://putlocker-is.org"></Link><br />
                                <Link to="https://www.embedgooglemap.net">
                                    show google map on website
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="card peta-lokasi-desa__card">
                            <div className="card-body">
                                <h4>Desa Senga Selatan</h4>
                                <h5 className="mt-4">Batas Desa</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="peta-lokasi-desa__lokasi fw-bold">Utara</p>
                                                <span>Kelurahan Senga</span>
                                            </div>
                                            <div className="col-md-12">
                                                <p className="peta-lokasi-desa__lokasi fw-bold">Barat</p>
                                                <span>Desa Pasamai</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="peta-lokasi-desa__lokasi fw-bold">Selatan</p>
                                                <span>Desa Kasiwiang</span>
                                            </div>
                                            <div className="col-md-12">
                                                <p className="peta-lokasi-desa__lokasi fw-bold">Timur</p>
                                                <span>Teluk Bone</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="peta-lokasi-desa__lokasi fw-bold">Luas Desa:</p>
                                        <span>7766437m<sup>2</sup></span>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="peta-lokasi-desa__lokasi fw-bold">
                                            Jumlah Penduduk:
                                        </p>
                                        <span>3513 Jiwa</span>
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

export default PetaLokasiDesa