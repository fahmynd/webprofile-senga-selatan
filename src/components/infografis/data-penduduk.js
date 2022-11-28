import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ChartPendudukDusun from './chart-penduduk-dusun'
import prIcon from '../../assets/img/icon/icon-perempuan.svg'
import lkIcon from '../../assets/img/icon/icon-laki.svg'
import tpIcon from '../../assets/img/icon/icon-total-penduduk.svg'
import bkIcon from '../../assets/img/icon/icon-belum-kawin.svg'
import kIcon from '../../assets/img/icon/icon-kawin.svg'
import cmIcon from '../../assets/img/icon/icon-cerai-mati.svg'
import cIcon from '../../assets/img/icon/icon-cerai.svg'
import islamIcon from '../../assets/img/icon/icon-islam.svg'
import kristenIcon from '../../assets/img/icon/icon-kristen.svg'
import katolikIcon from '../../assets/img/icon/icon-katolik.svg'
import hinduIcon from '../../assets/img/icon/icon-hindu.svg'
import budhaIcon from '../../assets/img/icon/icon-budha.svg'
import konghucuIcon from '../../assets/img/icon/icon-konghucu.svg'

const DataPenduduk = () => {
    const [pria, setPria] = useState();
    const [wanita, setWanita] = useState();

    useEffect(() => {
        axios.get('https://profil.digitaldesa.id/sengaselatan-luwu/infografis/?ajax=1')
            .then((result) => {
                // console.log(result.data.data.data);
                const data = result.data.data.data;
                setPria(data.penduduk.pria)
                setWanita(data.penduduk.wanita)
            })
    })
    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-6">
                    <h3 className="fw-bold mt-4">Data Penduduk Desa</h3>
                </div>
                <div className="offset-lg-3 col-lg-3">
                    {/* <div className="row">
                                            <label htmlFor="pilihTahun" className="col-lg-3 col-form-label">Tahun</label>
                                            <div className="col-lg-9">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option defaultValue="">Pilih Tahun</option>
                                                    <option value="tahun1">2019</option>
                                                    <option value="tahun2">2020</option>
                                                    <option value="tahun3">2021</option>
                                                </select>
                                            </div>
                                        </div> */}
                </div>
            </div>
            <section className="mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Demografi Penduduk</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Perempuan</p>
                                <img src={prIcon} alt="icon jumlah perempuan" height="230" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">{wanita}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Laki-Laki</p>
                                <img src={lkIcon} alt="icon jumlah perempuan" height="230" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">{pria}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Total Penduduk</p>
                                <img src={tpIcon} alt="icon jumlah perempuan" height="230" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">{pria + wanita}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row mt-10">
                <div className="col-md-12 text-center">
                    <h4 className="fw-bold">Berdasarkan Dusun</h4>
                </div>
                <div className="col-md-12">
                    <ChartPendudukDusun />
                </div>
            </section>
            <section className=" mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Pendidikan</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mb-5">
                        <div className="tg-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th-1">Jenis Pendidikan</th>
                                        <th className="th-1">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SLTA/Sederajat</td>
                                        <td className="td-center">1.015</td>
                                    </tr>
                                    <tr>
                                        <td>Tamat SD/Sederajat</td>
                                        <td className="td-center">673</td>
                                    </tr>
                                    <tr>
                                        <td>Tidak/Belum Sekolah</td>
                                        <td className="td-center">557</td>
                                    </tr>
                                    <tr>
                                        <td>SLTP/Sederajat</td>
                                        <td className="td-center">549</td>
                                    </tr>
                                    <tr>
                                        <td>Belum Tamat SD/Sederajat</td>
                                        <td className="td-center">375</td>
                                    </tr>
                                    <tr>
                                        <td>Diploma IV/Strata I</td>
                                        <td className="td-center">244</td>
                                    </tr>
                                    <tr>
                                        <td>Diploma III/Sarjana Muda</td>
                                        <td className="td-center">61</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">1.015</p>
                                        <p className="penduduk-card__info">SLTA/Sederajat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">673</p>
                                        <p className="penduduk-card__info">Tamat SD/Sederajat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">557</p>
                                        <p className="penduduk-card__info">Tidak/Belum Sekolah</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">549</p>
                                        <p className="penduduk-card__info">SLTP/Sederajat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">375</p>
                                        <p className="penduduk-card__info">Belum Tamat SD/Sederajat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">244</p>
                                        <p className="penduduk-card__info">Diploma IV/Strata I</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Pekerjaan</h4>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 mb-5">
                        <div className="tg-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th-1">Jenis Pekerjaan</th>
                                        <th className="th-1">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pelajar/Mahasiswa</td>
                                        <td className="td-center">988</td>
                                    </tr>
                                    <tr>
                                        <td>Belum/Tidak Bekerja</td>
                                        <td className="td-center">766</td>
                                    </tr>
                                    <tr>
                                        <td>Mengurus Rumah Tangga</td>
                                        <td className="td-center">710</td>
                                    </tr>
                                    <tr>
                                        <td>Wiraswasta</td>
                                        <td className="td-center">302</td>
                                    </tr>
                                    <tr>
                                        <td>Petani/Pekebun</td>
                                        <td className="td-center">296</td>
                                    </tr>
                                    <tr>
                                        <td>Pegawai Negeri Sipil (PNS)</td>
                                        <td className="td-center">156</td>
                                    </tr>
                                    <tr>
                                        <td>Karyawan Honorer</td>
                                        <td className="td-center">88</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">988</p>
                                        <p className="penduduk-card__info">Pelajar/Mahasiswa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">766</p>
                                        <p className="penduduk-card__info">Belum/Tidak Bekerja</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">710</p>
                                        <p className="penduduk-card__info">Mengurus Rumah Tangga</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">302</p>
                                        <p className="penduduk-card__info">Wiraswasta</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">296</p>
                                        <p className="penduduk-card__info">Petani/Pekebun</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">156</p>
                                        <p className="penduduk-card__info">Pegawai Negeri Sipil (PNS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Kelompok Umur</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mb-5">
                        <div className="tg-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th-1">Jenis Kelompok Umur</th>
                                        <th className="th-1">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15 - 19</td>
                                        <td className="td-center">369</td>
                                    </tr>
                                    <tr>
                                        <td>10 - 14</td>
                                        <td className="td-center">354</td>
                                    </tr>
                                    <tr>
                                        <td>20 - 24</td>
                                        <td className="td-center">348</td>
                                    </tr>
                                    <tr>
                                        <td>25 - 29</td>
                                        <td className="td-center">302</td>
                                    </tr>
                                    <tr>
                                        <td>40 - 44</td>
                                        <td className="td-center">265</td>
                                    </tr>
                                    <tr>
                                        <td>5 - 9</td>
                                        <td className="td-center">263</td>
                                    </tr>
                                    <tr>
                                        <td>35 - 39</td>
                                        <td className="td-center">241</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">1.046</p>
                                        <p className="penduduk-card__info">Dewasa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">991</p>
                                        <p className="penduduk-card__info">Remaja</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">914</p>
                                        <p className="penduduk-card__info">Orang Tua</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">399</p>
                                        <p className="penduduk-card__info">Anak-anak</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4 mb-3">
                                <div className="card penduduk-card">
                                    <div className="card-body">
                                        <p className="penduduk-card__jumlah">236</p>
                                        <p className="penduduk-card__info">Balita</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Perkawinan</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 col-lg-3 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Belum Kawin</p>
                                <img src={bkIcon} alt="icon belum kawin" height="180" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.828</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Kawin</p>
                                <img src={kIcon} alt="icon kawin" height="180" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.468</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Cerai Mati</p>
                                <img src={cmIcon} alt="icon cerai mati" height="180" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">109</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Cerai Hidup</p>
                                <img src={cIcon} alt="icon hidup" height="180" />
                                <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">69</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Agama</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Islam</p>
                                <img src={islamIcon} alt="icon agama islam" height="180" />
                                <p id="jumlahAgamaIslam" className="card-demografi-penduduk__jumlah mb-0 mt-4">3.514</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Kristen</p>
                                <img src={kristenIcon} alt="icon agama kristen" height="180" />
                                <p id="jumlahAgamaKristen" className="card-demografi-penduduk__jumlah mb-0 mt-4">6</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Katolik</p>
                                <img src={katolikIcon} alt="icon agama katolik" height="180" />
                                <p id="jumlahAgamaKatolik" className="card-demografi-penduduk__jumlah mb-0 mt-4">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Hindu</p>
                                <img src={hinduIcon} alt="icon agama hindu" height="180" />
                                <p id="jumlahAgamaHindu" className="card-demografi-penduduk__jumlah mb-0 mt-4">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Budha</p>
                                <img src={budhaIcon} alt="icon agama budha" height="180" />
                                <p id="jumlahAgamaBudha" className="card-demografi-penduduk__jumlah mb-0 mt-4">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 mb-3 text-center">
                        <div className="card card-demografi-penduduk">
                            <div className="card-body">
                                <p className="card-demografi-penduduk__info mb-4">Konghucu</p>
                                <img src={konghucuIcon} alt="icon agama konghucu" height="180" />
                                <p id="jumlahAgamaKonghucu" className="card-demografi-penduduk__jumlah mb-0 mt-4">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DataPenduduk