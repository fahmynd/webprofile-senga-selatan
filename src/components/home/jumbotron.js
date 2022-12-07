import React, { Fragment } from 'react'
import pakde from '../../assets/img/foto-pakde.webp'
import desa from '../../assets/img/wisata/wisata2.webp'
import gracilaria from '../../assets/img/potensi/gracilaria.jpeg'
import padi from '../../assets/img/potensi/padi.webp'
import './jumbotron.css'
import ReactShowMoreText from 'react-show-more-text'

const Jumbotron = () => {
    return (
        <Fragment>
            <div id="myCarousel" className="carousel slide bayangan" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active img-container">
                        <img src={desa} alt='' className='bannerImg' />

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Kampung Kuliner.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item img-container">
                        <img src={gracilaria} alt='' className='bannerImg' />

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item img-container">
                        <img src={padi} alt='' className='bannerImg' />
                        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000" /></svg> */}

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section id="selamatDatang">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5 text-center"><img className="img-fluid rounded-circle shadow-lg" src={pakde} alt="..." />
                                <h5 className="mt-4 mb-2"><strong>Anwar Amir, S.Sos</strong></h5>
                                <p className="text-muted fst-italic">Kepala Desa Senga Selatan</p>
                            </div>
                            {/* <span className='wrapper-info-pakde'>Pakde</span> */}
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-6">Website Resmi Desa Senga Selatan</h2>
                                <ReactShowMoreText anchorClass='link-selengkapnya' lines={7} more="Selengkapnya" less="Sembunyikan">
                                    <p>
                                        Selamat Datang di Website Desa Senga Selatan. Melalui website ini, kami berupaya menghadirkan informasi secara aktual dan efektif terkait program dan kegiatan pembangunan Pemerintah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Provinsi Sulawesi Selatan.
                                    </p>
                                    <p>
                                        Website ini kami hadirkan untuk menyahuti tuntutan kebutuhan pemanfaatan teknologi informasi yang kian pesat. Website ini hadir dari ide kreatif dan inovatif, serta merupakan wujud terobosan transformasi kinerja untuk lebih mendekatkan pelayanan kepada masyarakat. Kami akan terus berupaya agar informasi penyelenggaraan pemerintahan, pelaksanaan pembangunan dan pelayanan publik di Desa Senga Selatan menjadi lebih transparan, interaktif, partisipatif dan akuntabel.
                                    </p>
                                    <p>
                                        Apresiasi dan ucapan terima kasih yang tulus kami sampaikan kepada semua pihak yang telah turut memberi dukungan dan kontribusi dalam upaya memajukan kinerja Pemerintah Desa Senga Selatan. Baik berupa tenaga, pemikiran dan dorongan semangat. Semoga dengan hadirnya website ini, dapat memberikan nilai manfaat dan membawa kemaslahatan bagi segenap warga Desa Senga Selatan dan masyarakat luas.
                                    </p>
                                </ReactShowMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Jumbotron