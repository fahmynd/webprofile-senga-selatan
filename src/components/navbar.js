import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo/sengaselatan.webp'

const Navbar = () => {
    const [prov, setProv] = useState();
    const [kab, setKab] = useState();
    const [desa, setDesa] = useState();

    useEffect(() => {
        axios.get('db.json')
            .then((result) => {
                const data = result.data.navbar;
                setProv(data.namaProvinsi)
                setKab(data.namaKabupaten)
                setDesa(data.namaDesa)
            })
    })
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-semi-transparent">
            <div className="container-fluid">
                <div className="row" width="40%">
                    <div id="brandWrap" className="col-3">
                        <Link className="navbar-brand" to="/">
                            <img id="logoNavbar" style={{ width: "auto" }} src={logo} alt="" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <Link to="/" id="infoNavWrap" className="col-9 center-v text-decoration-none">
                        <p className="info-nav">
                            <span id="namaProvinsi">{prov}</span> <br />
                            <span id="namaKabupaten">{kab}</span> <br />
                            <span id="namaDesa">{desa}</span>
                        </p>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/" end><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Beranda</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profil-desa"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Profil Desa</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/infografis"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Infografis</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/geospasial"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Geospasial</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/idm"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">IDM</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/berita"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Berita</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/belanja"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Belanja</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ppid"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">PPID</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pengaduan"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Pengaduan</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar