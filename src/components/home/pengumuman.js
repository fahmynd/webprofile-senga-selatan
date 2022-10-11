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

class Pengumuman extends React.Component {
    render() {
        return (
            <section id="pengumuman">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">Pengumuman</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Similique saepe hic aut provident aperiam, nostrum repellat ex
                                iste adipisci ut blanditiis dolor
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-content">
                                <OwlCarousel id="caroPengumuman" className="owl-carousel owl-theme" {...options}>
                                    <div className="item">
                                        <img src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?fit=crop&fm=jpg&h=800&q=80&w=1200" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?fit=crop&fm=jpg&h=800&q=80&w=1200" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="https://images.unsplash.com/photo-1509149037-37dc57ccbd13?fit=crop&fm=jpg&h=800&q=80&w=1200" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fit=crop&fm=jpg&h=800&q=80&w=1200" alt="" />
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
            </section>
        )
    }
}
export default Pengumuman