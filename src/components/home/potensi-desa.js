import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bayam from '../../assets/img/potensi/bayam.jpg'
import cabai from '../../assets/img/potensi/cabai.jpg'
import jagung from '../../assets/img/potensi/jagung.jpg'
import jeruk from '../../assets/img/potensi/jeruk.jpg'
import kangkung from '../../assets/img/potensi/kangkung.jpg'
import minapadi from '../../assets/img/potensi/minapadi.jpg'
import padi from '../../assets/img/potensi/padi.jpg'
import sawi from '../../assets/img/potensi/sawi.jpg'
import tebu from '../../assets/img/potensi/tebu.jpg'
import tomat from '../../assets/img/potensi/tomat.jpg'

const options = {
    loop: true,
    margin: 20,
    nav: true,
    center: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    navContainer: ".main-content .owl-potensi",
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

class PotensiDesa extends React.Component {
    render() {
        return (
            <section id="potensiDesa">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">Potensi Desa</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Similique saepe hic aut provident aperiam, nostrum repellat ex
                                iste adipisci ut blanditiis dolor
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            <div className="main-content">
                                <OwlCarousel id="caroPotensiDesa" className="owl-carousel owl-theme" {...options}>
                                    <div className="item">
                                        <img src={bayam} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Bayam</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={cabai} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Cabai</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={jagung} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Jagung</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={jeruk} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Jeruk</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={kangkung} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Kangkung</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={minapadi} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Minapadi</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={padi} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Padi</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={sawi} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Sawi</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={tebu} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Tebu</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={tomat} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Tomat</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="owl-theme">
                                    <div className="owl-controls">
                                        <div className="custom-nav owl-nav owl-potensi"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            <Link to="#" className="btn btn-outline-secondary">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PotensiDesa