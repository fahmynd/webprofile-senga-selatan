import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo/logo-digides.png'

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-semi-transparent">
            <div className="container-fluid">
                <div className="row" width="40%">
                    <div id="brandWrap" className="col-3">
                        <Link className="navbar-brand" to="/">
                            <img id="logoNavbar" src={logo} alt="" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <div id="infoNavWrap" className="col-9 center-v">
                        <p className="info-nav">
                            <span id="namaProvinsi">Provinsi Sulawesi Selatan</span> <br />
                            <span id="namaKabupaten">Kabupaten Luwu</span> <br />
                            <span id="namaDesa">Desa Senga Selatan</span>
                        </p>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pemerintahan">Pemerintahan</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/infografis">Infografis</NavLink>
                        </li>
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
                            <NavLink className="nav-link" to="./galeri-desa">Galeri Desa</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar