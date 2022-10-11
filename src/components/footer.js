import React from 'react'

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-md-3 col-lg-3">
                                <img id="" src="assets/img/logo/logo-digides.svg" alt="" height="50" className="d-inline-block align-text-top" />
                            </div>
                            <div className="col-md-9 col-lg-9">
                                <p className="info-nav-footer">
                                    <span id="namaProvinsi">Provinsi Sulawesi Selatan</span>
                                    <br />
                                    <span id="namaKabupaten">Kabupaten Digikab</span> <br />
                                    <span id="namaDesa">Desa DIGIDES</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <p className="footer-text_judul clr-white">Alamat Kantor Desa</p>
                        <p className="footer-text__alamat">
                            Jl. MANA MANA HATIKU SENANG, <br /> Desa Digides, Kecamatan Digicam, Kota
                            Digikab <br /> Provinsi Digiprov, 12345
                        </p>
                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Nomor Telpon Penting</p>
                        <ul className="footer-text_telpenting clr-white">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Kontak Desa</p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-phone-alt mr-3"></i> 0812-0812-0812
                        </p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-business-time mr-3"></i> 08.00 - 16.00
                        </p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-envelope mr-3"></i> loremipsum@gmail.com
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <p className="footer-text_judul clr-white">Sosial Media</p>
                        <img className="me-1" src="assets/img/sosmed/facebook.svg" alt="" width="25" />
                        <img className="me-1" src="assets/img/sosmed/instagram.svg" alt="" width="25" />
                        <img className="me-1" src="assets/img/sosmed/twitter.svg" alt="" width="25" />
                        <img className="me-1" src="assets/img/sosmed/youtube.svg" alt="" width="25" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="footer-bottom__text">Desa DIGIDES 2022</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer