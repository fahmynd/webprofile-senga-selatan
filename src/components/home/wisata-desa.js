import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Link } from 'react-router-dom';
import wisata1 from '../../assets/img/wisata/wisata1.webp'
import wisata2 from '../../assets/img/wisata/wisata2.webp'
import wisata3 from '../../assets/img/wisata/wisata3.webp'
import dots from '../../assets/img/bg/dots.webp'

const options = {
    // stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsiveClass: true,
    navContainer: ".main-content .owl-wisata",
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};

class WisataDesa extends React.Component {
    render() {
        return (
            <section id="wisataDesa">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">Wisata Desa</h2>
                            <p>
                                Layanan yang mempermudah promosi wisata desa sehingga dapat menarik pengunjung desa
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="main-content">
                                <OwlCarousel id="caroWisataDesa" className="owl-carousel owl-theme img-responsive" {...options}>
                                    <div className="item">
                                        <img src={wisata1} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Hammock Labulawang</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Wisata hammock ini berada di perkebunan pohon jati putih. Pohon-pohon itu menjulang tinggi dan berjejer rapi.
                                                Ketika berkunjung ke tempat ini, Hammock menjadi syarat wajib untuk bersantai sambil berayun menikmati pemandangan indah.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={wisata2} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Kampung Kuliner Pakde</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Kampung Kuliner Pakde merupakan salah satu unit usaha Bumdesa Masagenae Desa Senga Selatan yang bertujuan untuk meningkatkan kesejahteraan UMKM Lokal, dengan memfasilitasi tempat atau kawasan kuliner demi meningkatkan pendapatan masyarakat Desa Senga Selatan. Di Kampung Kuliner Pakde juga, para pengunjung akan di suguhkan aneka menu yang luar biasa enaknya.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={wisata3} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Jembatan Pelangi</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Jembatan ini menjadi salah satu tempat favorit pengunjung untuk berfoto.
                                            </p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="owl-theme">
                                    <div className="owl-controls">
                                        <div className="custom-nav owl-nav owl-wisata"></div>
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
                <img className="bg-dots-right" src={dots} alt="" />
            </section>
        )
    }
}
export default WisataDesa