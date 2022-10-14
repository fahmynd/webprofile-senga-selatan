import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

class NavbarTes extends Component {
    jQuerycode = () => {
        $(document).ready(function () {
            if ($(window).width() <= 1000) {
                $(".navbar").addClass("bg-nav");
                $(".navbar").removeClass("bg-semi-transparent");
            }
        });
        $(window).scroll(function () {
            if ($(window).width() >= 1000) {
                var scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    $(".navbar").addClass("bg-nav");
                    $(".navbar").removeClass("bg-semi-transparent");
                    $("#namaProvinsi").addClass("d-none");
                    $("#namaKabupaten").addClass("d-none");
                    $("#namaDesa").addClass("nama-desa-lite");
                    $(".info-nav br").addClass("d-none");
                    $("#logoNavbar").attr("height", "40");
                    $("#brandWrap").removeClass("col-3");
                    $("#brandWrap").addClass("col-2");
                    $("#infoNavWrap").removeClass("col-9");
                    $("#infoNavWrap").addClass("col-10");
                } else {
                    $(".navbar").addClass("bg-semi-transparent");
                    $(".navbar").removeClass("bg-nav");
                    $("#namaProvinsi").removeClass("d-none");
                    $("#namaKabupaten").removeClass("d-none");
                    $("#namaDesa").removeClass("nama-desa-lite");
                    $(".info-nav br").removeClass("d-none");
                    $("#logoNavbar").attr("height", "50");
                    $("#brandWrap").removeClass("col-2");
                    $("#brandWrap").addClass("col-3");
                    $("#infoNavWrap").removeClass("col-10");
                    $("#infoNavWrap").addClass("col-9");
                }
            } else {
                $(".navbar").addClass("bg-nav");
                $(".navbar").removeClass("bg-semi-transparent");
                $("#namaProvinsi").addClass("d-none");
                $("#namaKabupaten").addClass("d-none");
                $("#namaDesa").addClass("nama-desa-lite");
                $(".info-nav br").addClass("d-none");
                $("#logoNavbar").attr("height", "40");
                $("#brandWrap").removeClass("col-3");
                $("#brandWrap").addClass("col-2");
                $("#infoNavWrap").removeClass("col-9");
                $("#infoNavWrap").addClass("col-10");
            }
        });
    }
    componentDidMount() {
        this.jQuerycode()
    }
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-semi-transparent">
                <div className="container-fluid">
                    <div className="row" width="40%">
                        <div id="brandWrap" className="col-3">
                            <Link className="navbar-brand" to="/home">
                                <img id="logoNavbar" src="assets/img/logo/logo-digides.svg" alt="" className="d-inline-block align-text-top" />
                            </Link>
                        </div>
                        <div id="infoNavWrap" className="col-9 center-v">
                            <p className="info-nav">
                                <span id="namaProvinsi">Provinsi Sulawesi Selatan</span> <br />
                                <span id="namaKabupaten">Kabupaten Digikab</span> <br />
                                <span id="namaDesa">Desa Lorem Ipsum Dolor Sit Amet</span>
                            </p>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
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
                                <NavLink className="nav-link" to="/galeri-desa">Galeri Desa</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


export default NavbarTes