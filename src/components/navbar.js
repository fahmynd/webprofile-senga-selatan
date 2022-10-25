import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo/sengaselatan.webp'

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-semi-transparent">
            <div className="container-fluid">
                <div className="row" width="40%">
                    <div id="brandWrap" className="col-3">
                        <Link className="navbar-brand" to="/">
                            <img id="logoNavbar" style={{width: "auto"}} src={logo} alt="" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <Link to="/" id="infoNavWrap" className="col-9 center-v text-decoration-none">
                        <p className="info-nav">
                            <span id="namaProvinsi">Provinsi Sulawesi Selatan</span> <br />
                            <span id="namaKabupaten">Kabupaten Luwu</span> <br />
                            <span id="namaDesa">Desa Senga Selatan</span>
                        </p>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profil-desa">Profil Desa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/infografis">Infografis</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/geospasial">Geospasial</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="https://sengaselatan.digitaldesa.id/webgis" target={'_blank'} rel="noreferrer">
                                Geospasial
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/idm">IDM</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/berita">Berita</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/belanja">Belanja</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ppid">PPID</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pengaduan">Pengaduan</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar