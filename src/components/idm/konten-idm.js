import React from 'react'
import '../../assets/css/idm.css'

function KontenIdm() {
    return (
        <main id="kontenIDM">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold mt-4">Skor Indeks Desa Membangun</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                        <div className="card card-idm card-idm__skor">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-idm__text">
                                            Skor IDM <br />
                                            Tahun <span>2022</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6 text-center center-v">
                                        <p className="card-idm__jumlah">0.8268</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card card-idm card-idm__status">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="card-idm__text">
                                            Status IDM <br />
                                            Tahun <span>2022</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6 text-center center-v">
                                        <p className="card-idm__infoStatus">Mandiri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Target Status</p>
                        <p className="fs-5">Mandiri</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor Minimal</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Penambahan</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKS</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKE</p>
                        <p className="fs-5">0.00</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKL</p>
                        <p className="fs-5">0.00</p>
                    </div>
                </div>
                <div id="tabMenu">
            <div className="mt-5">
                <ul className="nav nav-tabs">
                    <li className="nav-item d-none">
                        <a href="#tab1" className="nav-link navbar-default " data-toggle="tab">Olah Data Peritem</a>
                    </li>
                    <li className="nav-item">
                        <a href="#tab2" className="nav-link navbar-default active" data-toggle="tab">Rumusan Pokok</a>
                    </li>
                    <li className="nav-item d-none">
                        <a href="#tab3" className="nav-link navbar-default" data-toggle="tab">Laporan Stunting</a>
                    </li>
                    <li className="nav-item d-none">
                        <a href="#tab4" className="nav-link navbar-default" data-toggle="tab">Sumber Pendapatan Desa</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="tab1" className="tab-pane tab-box mt-3">
                        <table className="tg">
                            <thead>
                                <tr>
                                    <th className="tg-7btt" rowSpan="2">Indeks Komposit</th>
                                    <th className="tg-7btt" rowSpan="2">Dimensi</th>
                                    <th className="tg-7btt" rowSpan="2">Perangkat Indikator</th>
                                    <th className="tg-7btt" rowSpan="2">Indikator Peritem</th>
                                    <th className="tg-7btt" colSpan="2" rowSpan="2">Exiting dari Indikatro Umum</th>
                                    <th className="tg-7btt" colSpan="2">Rekomendasi</th>
                                </tr>
                                <tr>
                                    <td className="tg-7btt">super prioritas</td>
                                    <td className="tg-7btt">prioritas</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="tg-0pky" rowSpan="32">SOSIAL</td>
                                    <td className="tg-0pky" rowSpan="5">Kesehatan</td>
                                    <td className="tg-0pky" rowSpan="2">Pelayanan Kesehatan</td>
                                    <td className="tg-0pky">Jarak ke sarana kesehatan terdekat</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Ketersediaan Tenaga Kesehatan (bidan, Dokter dan Nakes lain)</td>
                                    <td className="tg-0pky" style={{width: '70px'}}>
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '67%'}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">0.67</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Keberdayaan Masyarakat untuk Kesehatan</td>
                                    <td className="tg-0pky">Askes ke poskesdes, polindes atau posyandu</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">0.40</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Tingkat Aktivitas Posyandu</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">0.20</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Jaminan Kesehatan</td>
                                    <td className="tg-0pky">Tingkat Kepesertaan BPJS</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="7">Pendidikan</td>
                                    <td className="tg-0pky" rowSpan="3">Akses Pendidikan Dasar Menengah</td>
                                    <td className="tg-0pky">Akses Pendidikan Dasar SD/MI &lt; 3 KM</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Pendidikan SMP/MTs &lt; 6 KM</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Pendidikan SMA/SMK/MA &lt; 6KM</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Akses Pendidikan Non Formal</td>
                                    <td className="tg-0pky">Kegiatan PAUD</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Kegiatan PKMB/Paket A-B-C</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Kegiatan Kursus</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Pengetahuan Masyarakat</td>
                                    <td className="tg-0pky">Taman Bacaan Masyarakat atau Perpustakan Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-c3ow">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="12">Modal Sosial</td>
                                    <td className="tg-0pky" rowSpan="4">Solidaritas Sosial </td>
                                    <td className="tg-0pky">Kebiasaan Gotong Royong</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="tg-0pky">Keterbukaan Ruang Publik</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Kelompok Olahraga</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Kegiatan Olahraga</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Toleransi</td>
                                    <td className="tg-0pky">Keragaman Suku/Etnis di Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Bahasa Sehari-hari Warga Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Agama Mayoritas Warga Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Rasa Aman Warga Desa</td>
                                    <td className="tg-0pky">Tersedianya Sarana Pos Kamling di Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Partisipasi Warga Siskamling</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Kejadian Perkelahian Massal di Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Kesejahteraan Sosial</td>
                                    <td className="tg-0pky">Terdapat Akses ke Sekolah Luar Biasa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Penyandang Kesejahteraan Sosial (Anjal dan Pengemis)</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="8">Permukiman</td>
                                    <td className="tg-0pky" rowSpan="2">Akses Air Bersih dan Layak Minum</td>
                                    <td className="tg-0pky">Mayoritas Warga Memiliki Sumber Air Layak Minum</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Warga Memilliki Air Mandi dan Mencuci</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Akses ke Fasilitas Sanitasi</td>
                                    <td className="tg-0pky">Mayoritas Warga Memiliki Jamban</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Tempat Pembuangan Sampah</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses ke Fasilitas Listrik</td>
                                    <td className="tg-0pky">Jumlah Keluarga yang telah memiliki aliran listrik</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Akses Fasilitas Informasi dan Komunikasi</td>
                                    <td className="tg-0pky">Warga Memiliki Telpon seluler dan Sinyal Kuat</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Internet di Kantor Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Akses Internet untuk warga</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="12">EKONOMI</td>
                                    <td className="tg-0pky">Keragaman Produksi</td>
                                    <td className="tg-0pky">Keragaman Produksi Masyarakat Desa</td>
                                    <td className="tg-0pky">Terdapat Lebih dari Satu Jenis Kegiatan Ekonomi Penduduk</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Perdagangan</td>
                                    <td className="tg-0pky" rowSpan="3">Tersedianya Pusat Perdagangan</td>
                                    <td className="tg-0pky">Akses Penduduk ke Pusat Perdagangan(Pertokoan, Pasar Permanen)</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Pasar Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat Sektor Perdagangan (warung minimarket)</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Distribusi</td>
                                    <td className="tg-0pky">Akses Distribusi Logistik</td>
                                    <td className="tg-0pky">Terdapat Kantor Pos dan Jasa Logistik</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Akses Kredit</td>
                                    <td className="tg-0pky" rowSpan="2">Akses Terhadap lembaga Keuangan dan Perkreditan</td>
                                    <td className="tg-0pky">Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Akses Penduduk ke Kredit</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Lembaga Ekonomi</td>
                                    <td className="tg-0pky" rowSpan="2">Lembaga Ekonomi</td>
                                    <td className="tg-0pky">Tersedianya Lembaga Ekonomi Rakyat (Koperasi)/Bumdes</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Terdapat USaha Kedai makanan, Restoran, Hotel dan Penginapan</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="3">Keterbukaan Wilayah</td>
                                    <td className="tg-0pky" rowSpan="3">Keterbukaan Wilayah</td>
                                    <td className="tg-0pky">Terdapat Moda (Angkutan Umum, Trayek Reguler dan Jam Operasi)</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Jalan yang Dapat Dilalui oleh Kendaraan Bermotor Roda Empat atau Lebih</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Kualitas Jalan Desa</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-c3ow" rowSpan="3">LINGKUNGAN</td>
                                    <td className="tg-0pky">Kualitas Lingkungan</td>
                                    <td className="tg-0pky">Kualitas Lingkungan</td>
                                    <td className="tg-0pky">Pencemaran Air, Tanah, dan Udara</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky" rowSpan="2">Potensi dan Tanggap Bencana</td>
                                    <td className="tg-0pky">Potensi Rawan Bencana</td>
                                    <td className="tg-0pky">Kejadian Bencana Alam (Banjir, Tanah, Longsor, Kebakaran Hutan)</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-0pky">Tanggap Bencana</td>
                                    <td className="tg-0pky">Upaya/Tindakan terhapad Potensi Bencana Alam</td>
                                    <td className="tg-0pky">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td className="tg-0pky">1.00</td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check d-none"></i>
                                        <span className="">-</span>
                                    </td>
                                    <td className="tg-c3ow">
                                        <i className="fa fa-check"></i>
                                        <span className="d-none">-</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="tab2" className="tab-pane active tab-box mt-3">
            <table className="tg table-responsive" style={{width: '100%'}}>
                <thead style={{backgroundColor: '#317A75', color: 'white'}}>
                  <tr>
                    <th className="tg-amwm" rowSpan="2" style={{borderRadius: '7px 0px 0px 0px'}}>No</th>
                    <th className="tg-amwm" rowSpan="2">Indikator IDM</th>
                    <th className="tg-amwm" rowSpan="2" >Skor</th>
                    <th className="tg-amwm" rowSpan="2">Keterangan</th>
                    <th className="tg-amwm" rowSpan="2">Kegiatan yang dapat dilakukan</th>
                    <th className="tg-amwm" rowSpan="2">+Nilai</th>
                    <th className="tg-amwm" colSpan="6" style={{borderRadius: '0px 7px 0px 0px'}}>Yang dapat melaksanakan kegiatan</th>
                  </tr>
                  <tr>
                    <th className="tg-amwm">Pusat</th>
                    <th className="tg-amwm">Provinsi</th>
                    <th className="tg-amwm">Kabupaten</th>
                    <th className="tg-amwm">Desa</th>
                    <th className="tg-amwm">CSR</th>
                    <th className="tg-amwm">Lainnya</th>
                  </tr>
                </thead>
                <tbody>
                                        <tr>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh">Skor Akses Sarkes</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Waktu tempuh dari ≤ 30  Menit</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Dinkes, PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">2</td>
                    <td className="tg-baqh">Skor Dokter</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah dokter ≥ 1 orang</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh">Skor Bidan </td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah bidan ≥ 1 orang</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">4</td>
                    <td className="tg-baqh">Skor Nakes Lain</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah tenaga kesehatan lainnya ≥ 5 orang</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh">Skor Tingkat Kepesertaan BPJS</td>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah peserta BPJS/jumlah penduduk antara 0,26 s.d 0,5</span></td>
                    <td className="tg-baqh">Fasilitasi kepesertaan BPJS warga Desa hingga 75%</td>
                    <td className="tg-baqh">0.0038</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">BPJS</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">6</td>
                    <td className="tg-baqh">Skor Akses Poskesdes</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jarak tempuh menuju Poskesdes = 500 Meter</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">7</td>
                    <td className="tg-baqh">Skor Aktivitas Posyandu</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Posyandu aktif 1 bulan sekali/ Jumlah Posyandu 0,75</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DPMD</td>
                    <td className="tg-baqh">DPMD, DINKES</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">8</td>
                    <td className="tg-baqh">Skor Akses SD/MI</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jarak tempuh menuju SD atau MI = 3000 Meter</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISDIK, PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">9</td>
                    <td className="tg-baqh">Skor Akses SMP/MTS</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jarak tempuh menuju SMP atau MTs ≤ 6000 Meter</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISDIK, PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">10</td>
                    <td className="tg-baqh">Skor Akses SMA/SMK</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jarak tempuh menuju SMU atau SMK ≤ 6000 Meter</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISDIK</td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">11</td>
                    <td className="tg-baqh">Skor Ketersediaan PAUD</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah PAUD ≥ 1 </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISDIK</td>
                    <td className="tg-baqh">DISDIK</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">12</td>
                    <td className="tg-baqh">Skor Ketersediaan PKBM/ Paket ABC</td>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah PKBM atau Paket ABC Tidak ada</span></td>
                    <td className="tg-baqh">Pelaksanaan Kegiatan PKBM/Kejar Paket A B C</td>
                    <td className="tg-baqh">0.0076</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISDIK</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">13</td>
                    <td className="tg-baqh">Skor Ketersediaan Kursus</td>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Pusat Keterampilan atau Kursus Tidak ada</span></td>
                    <td className="tg-baqh">Pengadaan Tempat Kursus/Pelatihan</td>
                    <td className="tg-baqh">0.0076</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">Swasta, Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">14</td>
                    <td className="tg-baqh">Skor Ketersediaan Taman Baca/ Perpus Desa</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Taman Bacaan Masyarakat atau perpustakaan Desa tersedia </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kemenperpus Arsip</td>
                    <td className="tg-baqh">Dinas Perpus</td>
                    <td className="tg-baqh">Dinas Perpus</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">15</td>
                    <td className="tg-baqh">Skor Kebiasaan Goryong</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Terdapat Kebiasaan Gotong Royong</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">16</td>
                    <td className="tg-baqh">Skor Frekuensi Goryong</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Frekuensi Gotong Royong 2</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">17</td>
                    <td className="tg-baqh">Skor Ketersediaan Ruang Publik</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Ruang Publik terdapat didesa</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">18</td>
                    <td className="tg-baqh">Skor Kelompok OR</td>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah kelompok kegiatan olahraga antara 4 s.d 5</span></td>
                    <td className="tg-baqh">Penambahan Min 4 Kelp Olahraga</td>
                    <td className="tg-baqh">0.0038</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISPORA</td>
                    <td className="tg-baqh">DISPORA</td>
                    <td className="tg-baqh">Karang Taruna</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">19</td>
                    <td className="tg-baqh">Skor Kegiatan OR</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah kegiatan olahraga 7</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kemepora/ Kemendes</td>
                    <td className="tg-baqh">DISPORA</td>
                    <td className="tg-baqh">DISPORA</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">20</td>
                    <td className="tg-baqh">Skor Keragaman Agama</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Jenis Agama di Desa 1</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">21</td>
                    <td className="tg-baqh">Skor Keragaman Bahasa</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Bahasa yang digunakan sehari-hari 1</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">22</td>
                    <td className="tg-baqh">Skor Keragaman Komunikasi</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Warga Desa terdiri dari Suku 1</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">23</td>
                    <td className="tg-baqh">Skor Poskamling</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Terdapat Pos Keamanan  di Desa</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">24</td>
                    <td className="tg-baqh">Skor Siskamling</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Terdapat Sistem Keamanan Lingkungan warga di Desa</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">25</td>
                    <td className="tg-baqh">Skor Konflik</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Tidak terdapat atau tidak ada Konflik di Desa</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Kesbangpol</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">26</td>
                    <td className="tg-baqh">Skor PMKS</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah PMKS  tidak ada atau 0 </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Dinsos</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">27</td>
                    <td className="tg-baqh">Skor SLB</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Skor SLB = 0 </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DIKNAS</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">28</td>
                    <td className="tg-baqh">Skor Akses Listrik</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>(Jumlah Keluarga Memakai listrik + non Listrik/Jumlah keluarga memakai listrik) ≥ 0,9 )</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">ESDM</td>
                    <td className="tg-baqh">ESDM</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">29</td>
                    <td className="tg-baqh">Skor Sinyal Tlp</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Sinyal telepon seluler di Desa Kuat</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kominfo</td>
                    <td className="tg-baqh">Diskominfo</td>
                    <td className="tg-baqh">Diskominfo</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Operator Selular</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">30</td>
                    <td className="tg-baqh">Skor Internet Kantor Desa</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Terdapat fasilitas internet di kantor Desa </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kominfo/ Kemendes</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">31</td>
                    <td className="tg-baqh">Skor Akses Internet Warga</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Terdapat Akses internet warga di Desa</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kominfo</td>
                    <td className="tg-baqh">Diskominfo</td>
                    <td className="tg-baqh">Diskominfo</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Operator Selular</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">32</td>
                    <td className="tg-baqh">Skor Akses Jamban</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Warga Desa BAB di Jamban Sendiri</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DINSOS,DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">33</td>
                    <td className="tg-baqh">Skor Sampah</td>
                    <td className="tg-baqh">4</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Warga desa membuang sampah di Lubang atau di Bakar</span></td>
                    <td className="tg-baqh">Pembangunan TPS danTPA Sampah </td>
                    <td className="tg-baqh">0.0019</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DLH</td>
                    <td className="tg-baqh">DLH, DKPP</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">34</td>
                    <td className="tg-baqh">Skor Air Minum</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Sumber air minum berasal dari PAM, Air Ledeng tanpa Meteran</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">PAMSIMAS, PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">PDAM</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">35</td>
                    <td className="tg-baqh">Skor Air Mandi & Cuci</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Sumber air mandi dan cuci berasal dari PAM, Air Ledeng tanpa Meteran</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">PAMSIMAS, PU</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">PDAM</td>
                  </tr>
                                        <tr>
                    <td className="tg-zwfm text-center" colSpan="12">SKOR IKS 2022 : 0.9257</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh">Skor Keragaman Produksi</td>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Industri Mikro/ Jumlah KK 0,001</span></td>
                    <td className="tg-baqh">Peningkatan Jumlah Industri Mikro/UKM hingga 0,4% jumlah KK di Desa</td>
                    <td className="tg-baqh">0.0222</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh">Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">2</td>
                    <td className="tg-baqh">Skor Pertokoan</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jarak ke kelompok pertokoan terdekat ≤ 7 KM</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Perorangan, Swasta</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh">Skor Pasar</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>(Total KK/jumlah pasar(permanen)) ≥ 250</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh">Kemenperind, Kemendes</td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">4</td>
                    <td className="tg-baqh">Skor Toko/ Warung Kelontong</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Toko dan warung kelontong 3</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Perorangan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh">Skor Kedai & Penginapan</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah Kedai dan Penginapan 1</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Dinas Pariwisata</td>
                    <td className="tg-baqh">Dinas Pariwisata</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Perorangan, Swasta</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">6</td>
                    <td className="tg-baqh">Skor POS & Logistik</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah pos dan jasa logistik = 0</span></td>
                    <td className="tg-baqh">Pembangunan Jasa Logistik dan Kantor Pos</td>
                    <td className="tg-baqh">0.0278</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">BUMDES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Kantor Pos, Swasta</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">7</td>
                    <td className="tg-baqh">Skor Bank & BPR</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah bank dan BPR = 0</span></td>
                    <td className="tg-baqh">Fasilitasi Pembangunan Bank Pemerintah, Swasta &/ BPR</td>
                    <td className="tg-baqh">0.0278</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Perbankan</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">8</td>
                    <td className="tg-baqh">Skor Kredit</td>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah fasilitas kredit = 2</span></td>
                    <td className="tg-baqh">Penambahan 2 jenis Fasilitas Kredit (KUR/KKPE/KUK/Kredit lainnya)(Identifikasi kekurangan akses kredit)</td>
                    <td className="tg-baqh">0.0111</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh">BUMDES/ Koperasi</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">Bank, Swasta</td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">9</td>
                    <td className="tg-baqh">Skor Lembaga Ekonomi</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jumlah koperasi aktif dan BUMDESA 1</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISPERINDAKOP UKM</td>
                    <td className="tg-baqh">Desa</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">10</td>
                    <td className="tg-baqh">Skor Moda Transportasi Umum</td>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Transportasi Umum ada tanpa trayek tetap</span></td>
                    <td className="tg-baqh">Fasilitasi Transportasi Umum dengan Trayek Tetap</td>
                    <td className="tg-baqh">0.0111</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISHUB</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">11</td>
                    <td className="tg-baqh">Skor Keterbukaan Wilayah</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jalan di Desa dilalui oleh kendaraan bermotor roda empat atau lebih Sepanjang Tahun </span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">12</td>
                    <td className="tg-baqh">Skor Kualitas Jalan</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jenis permukaan jalan desa Aspal atau beton</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">PU</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                  
                  <tr>
                    <td className="tg-zwfm text-center" colSpan="12">SKOR IKE 2022 : 0.7</td>
                  </tr>

                                        <tr>
                    <td className="tg-baqh">1</td>
                    <td className="tg-baqh">Skor Kualitas Lingkungan</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Pencemaran (air, udara, tanah, limbah disungai) di desa [jumlah pencemaran/4] = 0</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DLH</td>
                    <td className="tg-baqh">DLH, DINKES</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">2</td>
                    <td className="tg-baqh">Skor Rawan Bencana</td>
                    <td className="tg-baqh">5</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Jenis bencana (longsor, banjir, kebakaran hutan) jenis bencana di desa = 0</span></td>
                    <td className="tg-baqh">-</td>
                    <td className="tg-baqh">0</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh">DISHUT/KPH, BPDB</td>
                    <td className="tg-baqh">BPBD</td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                    <td className="tg-baqh"></td>
                  </tr>
                                        <tr>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh">Skor Tanggap Bencana</td>
                    <td className="tg-baqh">3</td>
                    <td className="tg-baqh"><span style={{fontWeight: '400', fontStyle: 'normal'}}>Fasilitas mitigasi/tanggap bencana (peringatan dini bencana alam, peringatan dini tsunami, perlengkapan keselamatan, jalur evakuasi) jumlah fasilitas mitigasi / tanggap bencana = 1</span></td>
                    <td className="tg-baqh">Pembangunan/Pengadaan 2 Fasilitas Mitigasi Bencana Sesuai karakteristik wilayah (Kebutuhan sesuai hasil identifikasi kerawanan/potensi bencana)</td>
                    <td className="tg-baqh">0.0444</td>
                    <td className="tg-baqh">BNPB, Kemendes</td>
                    <td className="tg-baqh">DISHUT/KPH, BPDB, DINSOS</td>
                    <td className="tg-baqh">DPBD, DINSOS</td>
                    <td className="tg-baqh">DD</td>
                    <td className="tg-baqh">CSR</td>
                    <td className="tg-baqh"></td>
                  </tr>
                  
                  <tr>
                    <td className="tg-zwfm text-center" colSpan="12">SKOR IKL 2022 : 0.8667</td>
                  </tr>
                  <tr>
                    <td className="tg-zwfm text-center" colSpan="12">IDM <span id="tahunIDM" name="tahunIDM">2022</span> : 0.8308</td>
                  </tr>
                  <tr>
                    <td className="tg-zwfm text-center" colSpan="12">STATUS IDM <span id="tahunIDM" name="tahunIDM">2022</span> : MANDIRI</td>
                  </tr>
                </tbody>
            </table>
        </div>
                    <div id="tab3" className="tab-pane tab-box mt-3">
                        <table className="tg" style={{width: '100%'}}>
                            <tbody>
                                <tr>
                                    <td className="tg-cuakz" colSpan="6">TABEL 1. JUMLAH SASARAN 1.000 HPK (IBU HAMIL DAN ANAK 0-23 TAHUN)</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" rowSpan="2">SASARAN</td>
                                    <td className="tg-baqh2" rowSpan="2">JUMLAH TOTAL RUMAH TANGGA 1.000 HPK</td>
                                    <td className="tg-baqh2" colSpan="2">IBU HAMIL</td>
                                    <td className="tg-baqh2" colSpan="2">ANAK 0 - 23 BULAN</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">TOTAL</td>
                                    <td className="tg-baqh2">KEK/RESTI</td>
                                    <td className="tg-baqh2">TOTAL</td>
                                    <td className="tg-baqh2">GIZI KURANG / GIZI BURUK / STUNTING</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">JUMLAH</td>
                                    <td className="tg-baqh">463</td>
                                    <td className="tg-baqh">101</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">326</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="tg" style={{width: '100%', marginTop: '3rem'}}>
                            <tbody>
                                <tr>
                                    <td className="tg-cuakz" colSpan="5">TABEL 2. HASIL PENGUKURAN TIKAR PERTUMBUHAN (DETEKSI DINI STUNTING)</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">SASARAN</td>
                                    <td className="tg-baqh2">JUMLAH TOTAL ANAK USIA 0-23 BULAN</td>
                                    <td className="tg-baqh2 bg-hijau">NORMAL</td>
                                    <td className="tg-baqh2 bg-kuning">RESIKO STUNTING</td>
                                    <td className="tg-baqh2 bg-merah">TERINDIKASI STUNTING</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">JUMLAH</td>
                                    <td className="tg-baqh">326</td>
                                    <td className="tg-baqh">32</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="tg" style={{width: '100%', marginTop: '3rem'}}>
                            <tbody>
                                <tr>
                                    <td className="tg-cuakz" colSpan="6">TABEL 2. HASIL PENGUKURAN TIKAR PERTUMBUHAN (DETEKSI DINI STUNTING)</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" >SASARAN</td>
                                    <td className="tg-baqh2" colSpan="2">INDIKATOR</td>
                                    <td className="tg-baqh2" colSpan="2">JUMLAH</td>
                                    <td className="tg-baqh2">%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" rowSpan="8">IBU HAMIL</td>
                                    <td className="tg-baqh">1</td>
                                    <td className="tg-baqh">PERIKSA 4 KALI SELAMA KEHAMILAN</td>
                                    <td colSpan="2" className="tg-baqh">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">2</td>
                                    <td className="tg-baqh">MENDAPAT DAN MEMINUM PIL SE SELAMA 90 HARI</td>
                                    <td colSpan="2" className="tg-baqh">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">3</td>
                                    <td className="tg-baqh">IBU BERSALIN MENDAPAT LAYANAN PEMERIKSAAN NIFAS 3 KALI</td>
                                    <td colSpan="2" className="tg-baqh">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">4</td>
                                    <td className="tg-baqh">MENGIKUTI KONSELING GIZI/ KELAS IBU MINIMAL 4 KALI</td>
                                    <td className="tg-baqh" colSpan="2">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">5</td>
                                    <td className="tg-baqh">IBU HAMIL (KEK/ RESTI) MENDAPAT KUNJUNGAN RUMAH BULANAN</td>
                                    <td className="tg-baqh" colSpan="2">101</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">6</td>
                                    <td className="tg-baqh">RUMAH TANGGA IBU HAMIL MEMILIKI AKSES AIR MINUM AMAN</td>
                                    <td className="tg-baqh" colSpan="2">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">7</td>
                                    <td className="tg-baqh">RUMAH TANGGA IBU HAMIL MEMILIKI JAMBAN LAYAK</td>
                                    <td className="tg-baqh" colSpan="2">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">8</td>
                                    <td className="tg-baqh">MEMILIKI JAMINAN KESEHATAN</td>
                                    <td className="tg-baqh" colSpan="2">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" rowSpan="11">ANAK USIA 0-23 BULAN (0-2 TAHUN)</td>
                                    <td className="tg-baqh">1</td>
                                    <td className="tg-baqh">ANAK USIA &lt; 12 BULAN MENDAPAT IMUNISASI DASAR LENGKAP</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">2</td>
                                    <td className="tg-baqh">DITIMBANG BERAT BADAN RUTIN SETIAP BULAN</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">3</td>
                                    <td className="tg-baqh">DIUKUR PANJANG/ TINGGI BADAN 2 KALI DALAM SETAHUN</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh" rowSpan="2">4</td>
                                    <td className="tg-baqh" rowSpan="2">ORANG TUA/ PENGASUH MENGIKUTI KONSELING GIZI BULANAN</td>
                                    <td className="tg-baqh">Laki-laki</td>
                                    <td className="tg-baqh">Perempuan</td>
                                    <td className="tg-baqh" rowSpan="2"></td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">5</td>
                                    <td className="tg-baqh">KUNJUNGAN RUMAH BAGI ANAK GIZI BURUK/ KURANG/ STUNTING</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">6</td>
                                    <td className="tg-baqh">RUMAH TANGGA ANAK 0-2 TH MEMILIKI AKSES AIR MINUM AMAN</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">7</td>
                                    <td className="tg-baqh">RUMAH TANGGA ANAK 0-2 TH MEMILIKI JAMBAN LAYAK</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">8</td>
                                    <td className="tg-baqh">ANAK 0-2 TH JAMINAN KESEHATAN</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">9</td>
                                    <td className="tg-baqh">ANAK 0-2 TH BULAN AKTA LAHIR</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">10</td>
                                    <td className="tg-baqh">ORANG TUA/ PENGASUH MENGIKUTI PARENTING BULANAN (PAUD)</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" >ANAK &gt; 2-6 TAHUN</td>
                                    <td className="tg-baqh">1</td>
                                    <td className="tg-baqh">ANAK &gt;2-6 TAHUN AKTIF DALAM KEGIATAN PAUD MINIMAL 80%</td>
                                    <td className="tg-baqh" colSpan="2">0</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="tg" style={{width: '100%', marginTop: '3rem'}}>
                            <tbody>
                                <tr>
                                    <td className="tg-cuakz" colSpan="5">TABEL 4. TINGKAT KONVERGENSI DESA</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2" rowSpan="2">NO</td>
                                    <td className="tg-baqh2" rowSpan="2">SASARAN</td>
                                    <td className="tg-baqh2" colSpan="2">JUMLAH INDIKATOR</td>
                                    <td className="tg-baqh2" rowSpan="2">TINGKAT KONVERGENSI</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">YANG DITERIMA</td>
                                    <td className="tg-baqh2">SEHARUSNYA DITERIMA</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">1</td>
                                    <td className="tg-baqh">IBU HAMIL</td>
                                    <td className="tg-baqh">101</td>
                                    <td className="tg-baqh">101</td>
                                    <td className="tg-baqh">100.00%</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh">2</td>
                                    <td className="tg-baqh">ANAK 0-23 BULAN</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">326</td>
                                    <td className="tg-baqh">0.00%</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div id="tab4" className="tab-pane tab-box mt-3">
                        <table className="tg" style={{width: '100%'}}>
                            <tbody>
                                <tr>
                                    <td className="tg-baqh2 bg-hijau-solid">SUMBER PENDAPATAN</td>
                                    <td className="tg-baqh2 bg-hijau-solid">TAHUN 2019</td>
                                    <td className="tg-baqh2 bg-hijau-solid">TAHUN 2020</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">PENDAPATAN ASLI DESA</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">DANA DESA (DD)</td>
                                    <td className="tg-baqh">1,083,991,000</td>
                                    <td className="tg-baqh">1,269,593,000</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">BAGI HASIL PAJAK DAN RETRIBUSI DAERAH</td>
                                    <td className="tg-baqh">24,341,001</td>
                                    <td className="tg-baqh">25,459,842</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">ALOKASI DANA DESA</td>
                                    <td className="tg-baqh">1,236,785,900</td>
                                    <td className="tg-baqh">1,121,328,300</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">BANTUAN PROVINSI</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">BANTUAN KABUPATEN/KOTA</td>
                                    <td className="tg-baqh">0</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2">LAIN-LAIN</td>
                                    <td className="tg-baqh">10,637,000</td>
                                    <td className="tg-baqh">0</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh2 bg-hijau">JUMLAH APBdes</td>
                                    <td className="tg-baqh bg-hijau">2,355,754,901</td>
                                    <td className="tg-baqh bg-hijau">2,416,381,142</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </main>
    )
}

export default KontenIdm