import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import padi from '../../assets/img/potensi/padi.webp'
import perikanan from '../../assets/img/potensi/perikanan.jpeg'
import pertambakan from '../../assets/img/potensi/pertambakan.jpg'
import gracilaria from '../../assets/img/potensi/gracilaria.jpg'

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
                                Layanan yang mempermudah promosi potensi desa sehingga dapat menunjang pembangunan desa
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            <div className="main-content">
                                <OwlCarousel id="caroPotensiDesa" className="owl-carousel owl-theme" {...options}>
                                    <div className="item">
                                        <img src={padi} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Padi</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={perikanan} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Perikanan</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={pertambakan} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Pertambakan</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={gracilaria} alt="" />
                                        <div className="item-info">
                                            <p className="potensi-desa__judul clr-white">Rumput Laut Gracilaria</p>
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