import React from 'react'
import pakde from '../../assets/img/foto-pakde.webp'
import ShowMoreText from "react-show-more-text";

function Jumbotron() {
    return (
        <section id="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 clr-white fs-6">
                        <div className="vertical-center" style={{ textAlign: 'justify' }}>
                            <h2>Desa Senga Selatan</h2>
                            <ShowMoreText lines={5} more="Selengkapnya" less="Sembunyikan">
                                <p>
                                    Assalamu'alaikum warahmatullahi wabarakatuh.<br />
                                    Selamat Datang di Website Desa Senga Selatan. Melalui website ini, kami berupaya menghadirkan informasi secara aktual dan efektif terkait program dan kegiatan pembangunan Pemerintah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Provinsi Sulawesi Selatan.
                                </p>
                                <p>
                                    Website ini kami hadirkan untuk menyahuti tuntutan kebutuhan pemanfaatan teknologi informasi yang kian pesat. Website ini hadir dari ide kreatif dan inovatif, serta merupakan wujud terobosan transformasi kinerja untuk lebih mendekatkan pelayanan kepada masyarakat. Kami akan terus berupaya agar informasi penyelenggaraan pemerintahan, pelaksanaan pembangunan dan pelayanan publik di Desa Senga Selatan menjadi lebih transparan, interaktif, partisipatif dan akuntabel.
                                </p>
                                <p>
                                    Apresiasi dan ucapan terima kasih yang tulus kami sampaikan kepada semua pihak yang telah turut memberi dukungan dan kontribusi dalam upaya memajukan kinerja Pemerintah Desa Senga Selatan. Baik berupa tenaga, pemikiran dan dorongan semangat. Semoga dengan hadirnya website ini, dapat memberikan nilai manfaat dan membawa kemaslahatan bagi segenap warga Desa Senga Selatan dan masyarakat luas.
                                </p>
                            </ShowMoreText>
                        </div>
                    </div>
                    <div className="col-md-7 text-center d-none d-lg-block">
                        <div className="wrapper-foto-pakde">
                            <img src={pakde} alt="" />
                        </div>
                        <div className="masking"></div>
                        <div className="wrapper-info-pakde">
                            <span className="info-pakde__nama">Anwar Amir, S.Sos</span> <br />
                            <span className="info-pakde__jabatan">Kepala Desa Senga Selatan</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron