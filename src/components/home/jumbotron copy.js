import React from 'react'
import pakde from '../../assets/img/foto-pakde.webp'
import ShowMoreText from "react-show-more-text";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import blobs1 from '../../assets/img/bg/blobs1.webp'
// import blobs2 from '../../assets/img/bg/blobs2.webp'
// import blobs3 from '../../assets/img/bg/blobs3.webp'

const Jumbotron = () => {
    const [welcome, setWelcome] = useState();
    const [nama, setNama] = useState();
    const [jabatan, setJabatan] = useState();
    const [desa, setDesa] = useState();

    useEffect(() => {
        axios.get('db.json')
            .then((result) => {
                const data = result.data.jumbotron;
                setWelcome(data.welcome)
                setNama(data.nama)
                setJabatan(data.jabatan)
                setDesa(data.namaDesa)
            })
    })
    return (
        <>
            <div className="d-lg-none d-xl-none">
                <div className="row">
                    <div className="col-12 text-center fw-bold bg-dark text-light welcome">
                        <p className='font-welcome'>Selamat Datang</p>
                        <p className='font-welcome'>{welcome}</p>
                    </div>
                </div>
                {/* <img id="blobs-1" src={blobs1} alt="" />
                <img id="blobs-2" src={blobs2} alt="" />
                <img id="blobs-3" src={blobs3} alt="" /> */}
            </div>
            <section className='container d-lg-none d-xl-none text-center mt-5'>
                <div className='container'>
                    <img src={pakde} alt="" width="100%" />
                </div>
                <div>
                    <h2>{nama}</h2>
                    <p>{jabatan}</p>
                </div>
                <div style={{ textAlign: 'justify' }}>
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
                </div>
            </section>
            <section id="jumbotron" className='d-none d-lg-block d-xl-block'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 clr-white fs-6">
                            <div className="vertical-center" style={{ textAlign: 'justify' }}>
                                <h2>{desa}</h2>
                                <ShowMoreText anchorClass='link-selengkapnya' lines={5} more="Selengkapnya" less="Sembunyikan">
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
                                <span className="info-pakde__nama">{nama}</span> <br />
                                <span className="info-pakde__jabatan">{jabatan}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jumbotron