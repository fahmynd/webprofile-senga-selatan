import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Similique saepe hic aut provident aperiam, nostrum repellat ex
                                iste adipisci ut blanditiis dolor
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="main-content">
                                <OwlCarousel id="caroWisataDesa" className="owl-carousel owl-theme" {...options}>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1510797215324-95aa89f43c33?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1509149037-37dc57ccbd13?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1509149037-37dc57ccbd13?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fit=crop&fm=jpg&h=800&q=80&w=1200"} alt="" />
                                        <div className="item-info">
                                            <p className="wisata-desa__judul clr-white">Nama Wisata</p>
                                            <p className="wisata-desa_desc clr-white">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Similique saepe hic aut provident aperiam, nostrum
                                                repellat ex iste adipisci ut blanditiis dolor
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
                            <Link to="#" className="btn btn-outline-secondary">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <img className="bg-dots-right" src="assets/img/bg/dots.png" alt="" />
            </section>
        )
    }
}
export default WisataDesa