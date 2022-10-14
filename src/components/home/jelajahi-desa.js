import React from 'react'
import { Link } from 'react-router-dom'
import saranaIcon from '../../assets/img/icon/sarana-desa.svg'
import layananIcon from '../../assets/img/icon/layanan-ppid.svg'
import pasarIcon from '../../assets/img/icon/pasar-desa.svg'
import beritaIcon from '../../assets/img/icon/berita-desa.svg'
import potensiIcon from '../../assets/img/icon/potensi-desa.svg'
import blobs1 from '../../assets/img/bg/blobs1.png'
import blobs2 from '../../assets/img/bg/blobs2.png'

function JelajahiDesa() {
    return (
        <section id="jelajahiDesa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Jelajahi Desa</h2>
                        <p>
                        Melalui website ini Anda dapat menjelajahi segala hal yang terkait dengan desa. Aspek pemerintahan, penduduk, demografi, potensi desa, dan juga berita tentang desa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-10">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-2 mb-3">
                        <div className="card jelajahi-desa-card">
                            <div className="card-body text-center">
                                <img src={saranaIcon} alt="" width="40%" />
                                <p className="card-body__judul fw-bold">Sarana Desa</p>
                                <p className="card-body__des">
                                    Desa menyediakan sarana prasarana kepada seluruh warga
                                </p>
                                <Link to="#" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-3">
                        <div className="card jelajahi-desa-card">
                            <div className="card-body text-center">
                                <img src={layananIcon} alt="" width="40%" />
                                <p className="card-body__judul fw-bold">Layanan PPID</p>
                                <p className="card-body__des">
                                    Memudahkan kinerja aparat maupun warga desa
                                </p>
                                <Link to="#" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-3">
                        <div className="card jelajahi-desa-card">
                            <div className="card-body text-center">
                                <img src={pasarIcon} alt="" width="40%" />
                                <p className="card-body__judul fw-bold">Pasar Desa</p>
                                <p className="card-body__des">
                                    Jual beli online berbasis website dan mobile App
                                </p>
                                <Link to="#" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-3">
                        <div className="card jelajahi-desa-card">
                            <div className="card-body text-center">
                                <img src={beritaIcon} alt="" width="40%" />
                                <p className="card-body__judul fw-bold">Berita Desa</p>
                                <p className="card-body__des">
                                    Informasi terbaru yang up to date tentang desa
                                </p>
                                <Link to="#" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-3">
                        <div className="card jelajahi-desa-card">
                            <div className="card-body text-center">
                                <img src={potensiIcon} alt="" width="40%" />
                                <p className="card-body__judul fw-bold">Potensi Desa</p>
                                <p className="card-body__des">
                                    Banyak hal menarik yang perlu dikembangkan dari desa
                                </p>
                                <Link to="#" className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img id="blobs-1" src={blobs1} alt="" />
            <img id="blobs-2" src={blobs2} alt="" />
        </section>
    )
}

export default JelajahiDesa