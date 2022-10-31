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
// import kadusMangaliali from '../../assets/img/kadus-mangaliali.png'
// import kadusKalobang from '../../assets/img/kadus-kalobang.png'
// import kadusTaddette from '../../assets/img/kadus-taddette.png'
// import kadusLabulawang from '../../assets/img/kadus-labulawang.png'
// import kadusWalennaBarat from '../../assets/img/kadus-walenna-barat.png'
// import kadusWalennaTimur from '../../assets/img/kadus-walenna-timur.png'

const options = {
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    margin: 35,
    nav: false,
    center: true,
    // navText: [
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    // ],
    navText: [
        '<span class="fas fa-chevron-left fa-2x"></span>',
        '<span class="fas fa-chevron-right fa-2x"></span>'
    ],
    responsiveClass: true,
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={pakde} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Anwar Amir, S.Sos</p>
                                                    <p className="testimoni-jabatan"><i>Kepala Desa Senga Selatan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: ANWAR AMIR,S.Sos</li>
                                                        <li>Tempat/Tanggal Lahir: Malili, 25 Desember 1975</li>
                                                        <li>Jenis Kelamin: Laki-Laki</li>
                                                        <li>Status: Laki-laki</li>
                                                        <li>Alamat: BTN Griya Belopa Indah Blok.C No.7 Desa Belopa</li>
                                                        <li>Nama Istri: MARYANA</li>
                                                        <li>Jumlah Anak: 3 (Tiga) Orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri 274 Mattirowalie, Palopa, Indonesia (1982-1988)</li>
                                                        <li>SMP: Madrasah Tsanawiyah Negeri Palopo, Indonesia (1988-1991)</li>
                                                        <li>SMA: PGRI Palopo (1991-1994)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Pj. Kepala Desa</li>
                                                        <li>Nomor SK: 3/I/2022</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Pengurus Karang Taruna Kabupaten Luwu</li>
                                                        <li>Dewan Mesjid Kabupten Luwu</li>
                                                        <li>Pengurus BKPRMI Kabupaten Luwu</li>
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={sekdes} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kasiPemerintahan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Ayyub Basri</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Pemerintahan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: AYYUB BASRI</li>
                                                        <li>Tempat/Tanggal Lahir: Belopa, 05 Juli 1983</li>
                                                        <li>Jenis Kelamin: Laki-Laki</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Labulawang Desa Senga Selatan Kecamtan Belopa</li>
                                                        <li>Nama Istri: MARTINA</li>
                                                        <li>Jumlah Anak: 2 (dua) orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri 21 Taddette,Belopa, Indonesia  ( 1990-1996 )</li>
                                                        <li>SMP: Sekolah Menengah Pertama Pesantren Moderen Dato Sulaiman, Palopo, Indonesia  ( 1996-1999 )</li>
                                                        <li>SMA: Sekolah Menengah Atas Negeri 1 Belopa, Indonesia  ( 1999-2002 )</li>
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
                                                        <li>Honorer Dinas Peternakan Kabupaten Luwu</li>
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={staffPemerintahan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Lilis</p>
                                                    <p className="testimoni-jabatan"><i>Staff Pemerintahan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: LILIS</li>
                                                        <li>Tempat/Tanggal Lahir: Kalobang, 18 Juli 1999</li>
                                                        <li>Jenis Kelamin: Perempuan</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Kalobang Desa Senga Selatan Kecamatan Belopa Kecamtan Belopa</li>
                                                        <li>Nama Suami: MUH. IDUL</li>
                                                        <li>Jumlah Anak: 1 (satu) orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri 431 Walenna, Belopa, Indonesia (2005-2011)</li>
                                                        <li>SMP: Sekolah Menengah Pertama Negeri 3 Belopa, Indonesia (2011-2014)</li>
                                                        <li>SMA: Sekolah Menengah Kejuruan Negeri 1 Belopa, Indonesia (2014-2017)</li>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kasiKesejahteraan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Karina</p>
                                                    <p className="testimoni-jabatan"><i>Kasi Kesejahteraan & Pelayanan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: KARINA</li>
                                                        <li>Tempat/Tanggal Lahir: Balo-Balo, 10 April 1991</li>
                                                        <li>Jenis Kelamin: Perempuan</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Kalobang Desa Senga Selatan Kecamatan Belopa Kecamtan Belopa</li>
                                                        <li>Nama Suami: KHALIK</li>
                                                        <li>Jumlah Anak: 2 (dua) orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri 26 Balo-Balo, Belopa, Indonesia (1996-2002)</li>
                                                        <li>SMP: Sekolah Menengah Pertama Negeri 1 Belopa, Indonesia (2002-2005)</li>
                                                        <li>SMA: Sekolah Menengah Atas Negeri 1 Belopa, Indonesia (2005-2008)</li>
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
                                                        <li>Anggota Badan Permusyawaratan Desa</li>
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kaurUmum} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Prasetyo Sallo</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Umum & Perencanaan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: PRASETYO SALLO</li>
                                                        <li>Tempat/Tanggal Lahir: Manado, 07 Februari 1992</li>
                                                        <li>Jenis Kelamin: Laki-Laki</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Mangali-Mangali Desa Senga Selatan Kecamatan Belopa</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri Tugu Utara 15 Pagi Jakarta Utara, Indonesia (1998-2004)</li>
                                                        <li>SMP: Sekolah Menengah Pertama Negeri 1 Belopa, Indonesia (2004-2007)</li>
                                                        <li>SMA: Sekolah Menengah Atas Negeri 1 Belopa, Indonesia (2007-2010)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Jabatan dalam Pemerintahan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Kaur Umum & Perencanaan</li>
                                                        {/* <li>Nomor SK:</li> */}
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pengalaman Organisasi:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Koordinator Bidang Organisasi Persatuan Basket Seluruh Indonesia (Perbasi) Kab. Luwu (2021-sekarang)</li>
                                                        <li>Wakil Ketua Umum Unit Kegiatan Mahasiswa Basket Universitas Hasanuddin</li>
                                                        <li>Kepala Bidang Organisasi Fakultas Pertanian Universitas Hasanuddin</li>
                                                        <li>Ketua Bidang Kewirausahaan HMJ Misekta Jurusan Agribisnis</li>
                                                        <li>Anggota Badan Pengurus Dan Pemeriksa HMJ Misekta Jurusan Agribisnis Fakultas Pertanian UNHAS</li>
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kaurKeuangan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Sulaeha Anshar</p>
                                                    <p className="testimoni-jabatan"><i>Kaur Keuangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: SULAEHA ANSHAR</li>
                                                        <li>Tempat/Tanggal Lahir: Ujung Pandang, 12 Juni 1996</li>
                                                        <li>Jenis Kelamin: Perempuan</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Walenna Timur Desa Senga Selatan Kecamatan Belopa</li>
                                                        <li>Nama Suami: M.THAJERIMIN, S.KEP.NS</li>
                                                        <li>Jumlah Anak: 1 (satu) Orang</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Rama Sejahtera, Makassar, Indonesia (2003-2009)</li>
                                                        <li>SMP: Sekolah Menengah Pertama Rama Sejahtera, Makassar, Indonesia (2009-2012)</li>
                                                        <li>SMA: Sekolah Menengah Atas Rama Sejahtera, Makassar, Indonesia (2012-2015)</li>
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
                                                        <li>Bendahara Di Futsal Elektrik PT. PLN Persero</li>
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={staffKeuangan} />
                                                    </div>
                                                    <p className="testimoni-nama mt-3">Riska</p>
                                                    <p className="testimoni-jabatan"><i>Staff Keuangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Profil:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>Nama: RISKA</li>
                                                        <li>Tempat/Tanggal Lahir: Labulawang, 25 Mei 2001</li>
                                                        <li>Jenis Kelamin: Perempuan</li>
                                                        <li>Status: Kawin</li>
                                                        <li>Alamat: Dusun Labulawang Desa Senga Selatan Kecamatan Belopa</li>
                                                        <li>Nama Suami: -</li>
                                                        <li>Jumlah Anak: -</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <h3 id="testimoni" name="testimoni" className="testimoni-text text-decoration-underline">
                                                        Pendidikan:
                                                    </h3>
                                                    <ul className='testimoni-text'>
                                                        <li>SD: Sekolah Dasar Negeri 20 Cimpu, Suli, Indonesia (2007-2013)</li>
                                                        <li>SMP: Sekolah Menengah Pertama Negeri 3 Belopa, Indonesia (2013-2016)</li>
                                                        <li>SMA: Sekolah Menengah Kejuruan Negeri 1 Belopa, Indonesia (2016-2019)</li>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card">
                                        <div className="card-body card-testimoni">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusMangaliali} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusKalobang} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusTaddette} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusLabulawang} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusWalennaBarat} />
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
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kadusWalennaTimur} />
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
                                    </div> */}
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