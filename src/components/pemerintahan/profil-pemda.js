import React from 'react'
// import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './profil-pemda.css'
import pakde from '../../assets/img/foto-pakde.webp'
import man from '../../assets/img/icon/icon-man.svg'
import women from '../../assets/img/icon/icon-women.svg'

const options = {
    loop: true,
    margin: 35,
    nav: true,
    center: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    navContainer: ".main-content .owl-profil",
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
};

class ProfilPemda extends React.Component {
    render() {
        return (
            <section id="profilPemda">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">Profil Pemerintah Desa</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            <div className="main-content">
                                <OwlCarousel id="caroProfilPemda" className="owl-carousel owl-theme" {...options}>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={pakde} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Anwar Amir, S.Sos</p>
                                                    <p className="testimoni-jabatan"><i>Kepala Desa Senga Selatan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={women} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Herni BTE Suardi</p>
                                                    <p className="testimoni-jabatan"><i>Sekretaris Desa</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={man} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Ayyub Basri</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Pemerintahan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={women} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Karina</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Kesejahteraan & Pelayanan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={man} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Prasetyo Sallo</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Umum & Perencanaan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={women} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Sulaeha Anshar</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Keuangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text">
                                                        Pendidikan
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="owl-theme">
                                    <div className="owl-controls">
                                        <div className="custom-nav owl-nav owl-profil"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            {/* <Link to="#" className="btn btn-outline-secondary">Selengkapnya</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ProfilPemda