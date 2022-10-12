import React from 'react'

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-md-3 col-lg-3">
                                <img id="" src="assets/img/logo/logo-digides.png" alt="" height="50" className="d-inline-block align-text-top" />
                            </div>
                            <div className="col-md-9 col-lg-9">
                                <p className="info-nav-footer">
                                    <span id="namaProvinsi">Provinsi Sulawesi Selatan</span>
                                    <br />
                                    <span id="namaKabupaten">Kabupaten Luwu</span> <br />
                                    <span id="namaDesa">Desa Senga Selatan</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <p className="footer-text_judul clr-white">Alamat Kantor Desa</p>
                        <p className="footer-text__alamat">
                            Jl. Andi Benni No.27 Dusun Kalobang, <br /> Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu <br /> Provinsi Sulawesi Selatan, 91983
                        </p>
                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Nomor Telpon Penting</p>
                        <ul className="footer-text_telpenting clr-white">
                            <li>Kapolsek Belopa: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085242160258">085242160258</a></li>
                            <li>Babinsa Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085398645944">085398645944</a></li>
                            <li>Bhabinkamtibmas Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085330660550">085330660550</a></li>
                            <li>Bidan Desa Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:082187563443">082187563443</a></li>
                        </ul>
                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Kontak Desa</p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-phone-alt mr-3"></i> 08124429200
                        </p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-business-time mr-3"></i> Senin-Jumat 08.00-16.00 WITA
                        </p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-envelope mr-3"></i> pemdessengaselatan@gmail.com
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <p className="footer-text_judul clr-white">Sosial Media</p>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pemdes.selatan.3/">
                            <img className="me-1" src="assets/img/sosmed/facebook.svg" alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pemdessengaselatan/">
                            <img className="me-1" src="assets/img/sosmed/instagram.svg" alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/pemdessengasel/">
                            <img className="me-1" src="assets/img/sosmed/twitter.svg" alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC24pHBJoaZ6H3aaKmUwSezw">
                            <img className="me-1" src="assets/img/sosmed/youtube.svg" alt="" width="25" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="footer-bottom__text">Desa Senga Selatan 2022</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer