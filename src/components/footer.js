import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo/sengaselatan.webp'
import facebook from '../assets/img/sosmed/facebook.svg'
import instagram from '../assets/img/sosmed/instagram.svg'
import twitter from '../assets/img/sosmed/twitter.svg'
import youtube from '../assets/img/sosmed/youtube.svg'

function Footer() {
    return (
        <footer>
            <div className="container mobile-center">
                {/* <div className="row">
                    <Link to="/" className="col-md-6 col-lg-3 text-decoration-none">
                        <div className="row">
                            <div className="col-md-3 col-lg-3">
                                <img id="" src={logo} alt="" height="50" className="d-inline-block align-text-top" />
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
                    </Link>
                </div> */}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="row mb-4">
                            <Link to="/" className="col-md-12 col-lg-12 text-decoration-none">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <img id="" src={logo} alt="" height="50" className="d-inline-block align-text-top" />
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <p className="info-nav-footer">
                                            <span id="namaProvinsi">Provinsi Sulawesi Selatan</span>
                                            <br />
                                            <span id="namaKabupaten">Kabupaten Luwu</span> <br />
                                            <span id="namaDesa">Desa Senga Selatan</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <p className="footer-text_judul clr-white">Alamat Kantor Desa</p>
                        <p className="footer-text__alamat">
                            Jl. Andi Benni No.27 Dusun Kalobang, <br /> Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu <br /> Provinsi Sulawesi Selatan, 91983
                        </p>

                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Nomor Telpon Penting</p>
                        <ul className="footer-text_telpenting clr-white no-bullets">
                            <li>Kapolsek Belopa: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085242160258">085242160258</a></li>
                            <li>Babinsa Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085398645944">085398645944</a></li>
                            <li>Bhabinkamtibmas Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:085330660550">085330660550</a></li>
                            <li>Bidan Desa Senga Selatan: <a className='text-decoration-none' style={{ color: "#E8EF4D" }} href="tel:082187563443">082187563443</a></li>
                        </ul>
                    </div>
                    <div className="offset-md-1 col-md-3">
                        <p className="footer-text_judul clr-white">Kontak Desa</p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-phone-alt mr-3"></i> <a className='text-decoration-none' style={{ color: "#fff" }} href="tel:08124429200">08124429200</a>
                        </p>
                        <p className="footer-text__kontak">
                            <i className="fas fa-business-time mr-3"></i> Senin-Jumat 08.00-16.00 WITA
                        </p>
                        <p id="footer-text__email">
                            <i className="fas fa-envelope mr-3 fs-6"></i> <a className='text-decoration-none' style={{ color: "#fff" }} href="mailto:pemdessengaselatan@gmail.com">pemdessengaselatan@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-3 mt-3">
                        <p className="footer-text_judul clr-white">Sosial Media</p>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pemdes.selatan.3/">
                            <img className="me-1" src={facebook} alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pemdessengaselatan/">
                            <img className="me-1" src={instagram} alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/pemdessengasel/">
                            <img className="me-1" src={twitter} alt="" width="25" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC24pHBJoaZ6H3aaKmUwSezw">
                            <img className="me-1" src={youtube} alt="" width="25" />
                        </a>
                    </div>
                    <div className="boxCounter d-none d-sm-none d-md-block mb-5">
                        <div className="row border rounded bg-light">
                            <div className="col-12 border text-center fw-bold bg-success bg-gradient p-2 text-white">Jumlah Pengunjung</div>
                            <div className="col-7 border-start border-top border-bottom">Hari ini</div>
                            <div className="col-5 border-end border-top border-bottom">112</div>
                            <div className="col-7 border-start border-top border-bottom">Kemarin</div>
                            <div className="col-5 border-end border-top border-bottom">213</div>
                            <div className="col-7 border-start border-top border-bottom">Semua</div>
                            <div id='result' className="col-5 border-end border-top border-bottom website-counter">16723</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="text-center">
                    <div className="col-md-12">
                        <p className="footer-bottom__text">Desa Senga Selatan 2022</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer