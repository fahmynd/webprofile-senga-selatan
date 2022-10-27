import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './profil-pemda.css'
import pakde from '../../assets/img/foto-pakde.webp'
import sekdes from '../../assets/img/sekretaris-desa.png'
import kasiPemerintahan from '../../assets/img/kasi-pemerintahan.png'
import staffPemerintahan from '../../assets/img/staff-pemerintahan.png'
import kasiKesejahteraan from '../../assets/img/kasi-kesejahteraan.png'
import kaurUmum from '../../assets/img/kaur-umum.png'
import kaurKeuangan from '../../assets/img/kaur-keuangan.png'
import staffKeuangan from '../../assets/img/staff-keuangan.png'
import kadusMangaliali from '../../assets/img/kadus-mangaliali.png'
import kadusKalobang from '../../assets/img/kadus-kalobang.png'
import kadusTaddette from '../../assets/img/kadus-taddette.png'
import kadusLabulawang from '../../assets/img/kadus-labulawang.png'
import kadusWalennaBarat from '../../assets/img/kadus-walenna-barat.png'
import kadusWalennaTimur from '../../assets/img/kadus-walenna-timur.png'

const options = {
    loop: true,
    margin: 35,
    nav: true,
    center: true,
    // navText: [
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    // ],
    navText: [
        '<span class="fas fa-chevron-left fa-2x"></span>',
        '<span class="fas fa-chevron-right fa-2x"></span>'
    ],
    navContainer: ".main-content .owl-profil",
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};

class ProfilPemda extends React.Component {
    render() {
        return (
            <section id="profilPemda">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">Profil Pemerintah Desa</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            <div className="main-content">
                                <OwlCarousel id="caroProfilPemda" className="owl-carousel owl-theme" {...options}>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={pakde} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Anwar Amir, S.Sos</p>
                                                    <p className="testimoni-jabatan"><i>Kepala Desa Senga Selatan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kepala Desa</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={sekdes} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Herni BTE Suardi</p>
                                                    <p className="testimoni-jabatan"><i>Sekretaris Desa</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: HERNI BTE SUARDI</li>
                                                        <li>Tempat/Tanggal Lahir: Kota Kinabalu, 5 April 1988</li>
                                                        <li>Jenis Kelamin: Perempuan</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat:	Perum. PNS Blok G/7 Desa Senga Selatan Kecamatan Belopa</li>
                                                        <li>Nama Suami:	MUHAMMAD AMRULLAH, S.KM</li>
                                                        <li>Jumlah Anak: 1 (satu) Orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>TK: Tadika Rasa Sayang Keningau, Sabah, Malaysia (1992-1994)</li>
                                                        <li>SD: Sekolah Kebangsaan Pekan Keningau, Sabah, Malaysia (1994-1999)</li>
                                                        <li>SMP: Sekolah Menengah Kebangsaan Gunsanad Keningau, Sabah, Malaysia (2000-2003)</li>
                                                        <li>SMA: Sekolah Menengah Kebangsaan Gunsanad Keningau, Sabah, Malaysia (2003-2005)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Sekretaris Desa</li>
                                                        <li>Nomor SK: 1 Tahun 2016</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Bendahara Umum DPD AMPI Kabupaten Luwu</li>
                                                        <li>Pengurus MPC Pemuda Pancasila Kabupaten Luwu</li>
                                                        <li>Ketua Srikandi Pemuda Pancasila Kabupaten Luwu</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kasiPemerintahan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Ayyub Basri</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Pemerintahan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kasi Pemerintahan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={staffPemerintahan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Lilis</p>
                                                    <p className="testimoni-jabatan"><i>Staff Pemerintahan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Staff Pemerintahan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kasiKesejahteraan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Karina</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Kesejahteraan & Pelayanan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kasi Kesejahteraan & Pelayanan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kaurUmum} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Prasetyo Sallo</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Umum & Perencanaan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kaur Umum & Perencanaan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kaurKeuangan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Sulaeha Anshar</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Keuangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kaur Keuangan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={staffKeuangan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Riska</p>
                                                    <p className="testimoni-jabatan"><i>Staff Keuangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Staff Keuangan</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusMangaliali} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Ansar B</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Mangaliali</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Mangaliali</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusKalobang} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Marsuki</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Kalobang</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Kalobang</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusTaddette} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Musmuliadi</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Taddette</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Taddette</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusLabulawang} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Bahar M</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Labulawang</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Labulawang</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusWalennaBarat} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Nuwardi</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Walenna Barat</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Walenna Barat</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img className="img-round" style={{ borderRadius: '50%' }} src={kadusWalennaTimur} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Burhan</p>
                                                    <p className="testimoni-jabatan"><i>Kadus Walenna Timur</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                        <li>Tempat/Tanggal Lahir:</li>
                                                        <li>Jenis Kelamin:</li>
                                                        <li>Status:</li>
                                                        <li>Alamat:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD:</li>
                                                        <li>SMP:</li>
                                                        <li>SMA:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kadus Walenna Timur</li>
                                                        <li>Nomor SK:</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama:</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="owl-theme">
                                    <div className="owl-controls">
                                        <div className="custom-nav owl-nav owl-profil"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            {/* <Link to="#" className="btn btn-outline-secondary">Selengkapnya</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ProfilPemda