import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './profil-ppid.css'
import pakde from '../../assets/img/foto-pakde.webp'
import sekdes from '../../assets/img/sekretaris-desa.png'
import kasiPemerintahan from '../../assets/img/kasi-pemerintahan.png'
import kaurUmum from '../../assets/img/kaur-umum.png'
import kaurKeuangan from '../../assets/img/kaur-keuangan.png'
import staffKeuangan from '../../assets/img/staff-keuangan.png'
import staffPemerintahan from '../../assets/img/staff-pemerintahan.png'
import man from '../../assets/img/icon/icon-man.svg'
// import women from '../../assets/img/icon/icon-women.svg'

const options = {
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    margin: 35,
    nav: true,
    center: true,
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
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
};

class ProfilPpid extends React.Component {
    render() {
        return (
            <section id="profilPpid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="fw-bold sub-judul">PPID Pelaksana</h2>
                            <p>
                                Website ini merupakan ruang layanan online bagi pemohon informasi publik yang setiap saat dapat diakses oleh masyarakat. Dan ini merupakan salah satu wujud implementasi keterbukaan informasi publik yang diterapkan Pemerintah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Provinsi Sulawesi Selatan.
                            </p>
                            <p>
                                Selaras dengan amanat UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, Pemerintah Desa Senga Selatan sebagai badan publik berupaya secara maksimal memenuhi hak masyarakat atas informasi publik dengan konsep layanan yang cepat, mudah, efektif dan akuntabel.
                            </p>
                            <p className='fw-bold'>
                                Alamat: Jl. Andi Benni No. 27, Dusun Kalobang, Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-10">
                            <div className="main-content">
                                <OwlCarousel id="caroProfilPemda" className="owl-carousel owl-theme" {...options}>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={pakde} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Anwar Amir, S.Sos</p>
                                                    <p className="ppid-jabatan"><i>Atasan PPID</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6281342235108'>081 342 235 108</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:example@mail.com'>example@mail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={sekdes} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Herni BTE Suardi</p>
                                                    <p className="ppid-jabatan"><i>PPID Pelaksana</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+628124429200'>081 244 292 00</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:hernisuardi@gmail.com'>hernisuardi@gmail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kasiPemerintahan} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Ayyub Basri</p>
                                                    <p className="ppid-jabatan"><i>Tim Pertimbangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6282269448787'>082 269 448 787</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:ayyubbasri300@gmail.com'>ayyubbasri300@gmail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kaurUmum} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Prasetyo Sallo</p>
                                                    <p className="ppid-jabatan"><i>Tim Pertimbangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6285298313171'>085 298 313 171</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:example@mail.com'>example@mail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={kaurKeuangan} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Sulaeha Anshar</p>
                                                    <p className="ppid-jabatan"><i>Tim Pertimbangan</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6285394626374'>085 394 626 374</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:khayrithaha25@gmail.com'>khayrithaha25@gmail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={man} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Muh. Khaer Fatwa</p>
                                                    <p className="ppid-jabatan"><i>Petugas Layanan Informasi</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+62'>-</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:example@mail.com'>example@mail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={staffPemerintahan} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Lilis</p>
                                                    <p className="ppid-jabatan"><i>Petugas Layanan Informasi</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6285298026855'>085 298 026 855</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:lhilisidhul@gmail.com'>lhilisidhul@gmail.com</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body card-ppid">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="img-round center-img">
                                                        <img alt='' className="img-round" style={{ borderRadius: '50%' }} src={staffKeuangan} />
                                                    </div>
                                                    <p className="ppid-nama mt-3">Riska</p>
                                                    <p className="ppid-jabatan"><i>Petugas Layanan Informasi</i></p>
                                                </div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Phone : <br /><a className='text-decoration-none ppid-text' href='tel:+6282351552726'>082 351 552 726</a>
                                                    </h3>
                                                    <h3 id="ppid" name="ppid" className="ppid-text">
                                                        Email : <br /><a className='text-decoration-none ppid-text' href='mailto:riskariska2022@gmail.com'>riskariska2022@gmail.com</a>
                                                    </h3>
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
export default ProfilPpid