import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    navContainer: ".main-content .owl-pengumuman",
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

class VisiMisi extends React.Component {
    render() {
        return (
            <section id="visiMisi">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="fw-bold sub-judul">Visi Misi</h2>
                        </div>
                    </div>
                </div>
                <div className="container mt-10">
                    <div className="row">
                        <div className="col-lg-6 text-center mb-5">
                            <div className="wrap-visi">
                                <h3 className="fw-bold">Visi</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur magni similique nulla laboriosam, in reprehenderit.
                                    Illo a dolores, illum tempore vero iure sit maiores corporis
                                    beatae asperiores cumque nam delectus.
                                </p>
                            </div>
                            <div className="wrap-misi mt-4">
                                <h3 className="fw-bold">Misi</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur magni similique nulla laboriosam, in reprehenderit.
                                    Illo a dolores, illum tempore vero iure sit maiores corporis
                                    beatae asperiores cumque nam delectus.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="main-content">
                                <OwlCarousel id="caroPengumuman" className="owl-carousel owl-theme" {...options}>
                                    <div className="item">
                                        <img
                                            src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?fit=crop&fm=jpg&h=800&q=80&w=1200"
                                            alt=""
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?fit=crop&fm=jpg&h=800&q=80&w=1200"
                                            alt=""
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://images.unsplash.com/photo-1509149037-37dc57ccbd13?fit=crop&fm=jpg&h=800&q=80&w=1200"
                                            alt=""
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fit=crop&fm=jpg&h=800&q=80&w=1200"
                                            alt=""
                                        />
                                    </div>
                                </OwlCarousel>
                                <div className="owl-theme">
                                    <div className="owl-controls">
                                        <div className="custom-nav owl-nav owl-pengumuman"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img className="bg-dots" src="assets/img/bg/dots.png" alt="" />
            </section>
        )
    }
}

export default VisiMisi