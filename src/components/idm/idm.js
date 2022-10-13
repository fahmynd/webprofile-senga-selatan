import React from 'react'
import '../../assets/css/idm.css'

function IdmTes() {
    return (
        <section id="tabMenu">
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
                    <div id="tab1" className="tab-pane  tab-box mt-3">
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                    <td className="tg-0pky" style="width: 70px">
                                        <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 67%;" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                                            <div className="progress-bar bg-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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
                        <table className="tg table-responsive" style="width: 100%">
                            <thead style="background-color: #317A75;color: white">
                                <tr>
                                    <th className="tg-amwm" rowSpan="2" style="border-radius: 7px 0px 0px 0px">No</th>
                                    <th className="tg-amwm" rowSpan="2">Indikator IDM</th>
                                    <th className="tg-amwm" rowSpan="2" >Skor</th>
                                    <th className="tg-amwm" rowSpan="2">Keterangan</th>
                                    <th className="tg-amwm" rowSpan="2">Kegiatan yang dapat dilakukan</th>
                                    <th className="tg-amwm" rowSpan="2">+Nilai</th>
                                    <th className="tg-amwm" colSpan="6" style="border-radius: 0px 7px 0px 0px">Yang dapat melaksanakan kegiatan</th>
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
                                    <td className="tg-baqh rowDesa">NO</td>
                                    <td className="tg-baqh rowDesa">INDIKATOR</td>
                                    <td className="tg-baqh rowDesa">SKOR</td>
                                    <td className="tg-baqh rowDesa"><span style={{ fontWeight: "400", fontStyle: "normal" }}>KETERANGAN</span></td>
                                    <td className="tg-baqh rowDesa">KEGIATAN</td>
                                    <td className="tg-baqh rowDesa">NILAI</td>
                                    <td className="tg-baqh rowDesa">PUSAT</td>
                                    <td className="tg-baqh rowDesa">PROV</td>
                                    <td className="tg-baqh rowDesa">KAB</td>
                                    <td className="tg-baqh rowDesa">DESA</td>
                                    <td className="tg-baqh rowDesa">CSR</td>
                                    <td className="tg-baqh rowDesa">LAINNYA</td>
                                </tr>
                                <tr>
                                    <td className="tg-zwfm text-center" colSpan="12">SKOR INDIKATOR</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh rowDesa">NO</td>
                                    <td className="tg-baqh rowDesa">INDIKATOR</td>
                                    <td className="tg-baqh rowDesa">SKOR</td>
                                    <td className="tg-baqh rowDesa"><span style={{ fontWeight: "400", fontStyle: "normal" }}>KETERANGAN</span></td>
                                    <td className="tg-baqh rowDesa">KEGIATAN</td>
                                    <td className="tg-baqh rowDesa">NILAI</td>
                                    <td className="tg-baqh rowDesa">PUSAT</td>
                                    <td className="tg-baqh rowDesa">PROV</td>
                                    <td className="tg-baqh rowDesa">KAB</td>
                                    <td className="tg-baqh rowDesa">DESA</td>
                                    <td className="tg-baqh rowDesa">CSR</td>
                                    <td className="tg-baqh rowDesa">LAINNYA</td>
                                </tr>
                                <tr>
                                    <td className="tg-zwfm text-center" colSpan="12">SKOR INDIKATOR</td>
                                </tr>
                                <tr>
                                    <td className="tg-baqh rowDesa">NO</td>
                                    <td className="tg-baqh rowDesa">INDIKATOR</td>
                                    <td className="tg-baqh rowDesa">SKOR</td>
                                    <td className="tg-baqh rowDesa"><span style={{ fontWeight: "400", fontStyle: "normal" }}>KETERANGAN</span></td>
                                    <td className="tg-baqh rowDesa">KEGIATAN</td>
                                    <td className="tg-baqh rowDesa">NILAI</td>
                                    <td className="tg-baqh rowDesa">PUSAT</td>
                                    <td className="tg-baqh rowDesa">PROV</td>
                                    <td className="tg-baqh rowDesa">KAB</td>
                                    <td className="tg-baqh rowDesa">DESA</td>
                                    <td className="tg-baqh rowDesa">CSR</td>
                                    <td className="tg-baqh rowDesa">LAINNYA</td>
                                </tr>
                                <tr>
                                    <td className="tg-zwfm text-center" colSpan="12">SKOR INDIKATOR</td>
                                </tr>

                                <tr>
                                    <td className="tg-zwfm text-center" colSpan="12">IDM <span id="tahunIDM" name="tahunIDM">TAHUN</span> : SKOR SAAT INI</td>
                                </tr>
                                <tr>
                                    <td className="tg-zwfm text-center" colSpan="12">STATUS IDM <span id="tahunIDM" name="tahunIDM">TAHUN</span> : STATUS</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="tab3" className="tab-pane tab-box mt-3">
                        <table className="tg" style="width: 100%">
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
                        <table className="tg" style="width: 100%;margin-top: 3rem">
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
                        <table className="tg" style="width: 100%;margin-top: 3rem">
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
                        <table className="tg" style="width: 100%;margin-top: 3rem">
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
                        <table className="tg" style="width: 100%;">
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
        </section>
    )
}

export default IdmTes