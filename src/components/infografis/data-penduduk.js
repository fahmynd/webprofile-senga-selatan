import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ChartPendudukDusun from './chart-penduduk-dusun'
import prIcon from '../../assets/img/icon/icon-perempuan.svg'
import lkIcon from '../../assets/img/icon/icon-laki.svg'
import tpIcon from '../../assets/img/icon/icon-total-penduduk.svg'

const DataPenduduk = () => {
    const [pendidikan, setPendidikan] = useState([]);
    const [pekerjaan, setPekerjaan] = useState([]);
    const [umur, setUmur] = useState([]);
    // const [kategori, setKategori] = useState();
    const [perkawinan, setPerkawinan] = useState([]);
    const [agama, setAgama] = useState([]);
    const [pria, setPria] = useState();
    const [wanita, setWanita] = useState();

    useEffect(() => {
        axios.get('https://profil.digitaldesa.id/sengaselatan-luwu/infografis/?ajax=1')
            .then((result) => {
                // console.log(result.data.data.data);
                const data = result.data.data.data;
                setPria(data.penduduk.pria)
                setWanita(data.penduduk.wanita)
                setPendidikan(data.pendidikan)
                setPekerjaan(data.pekerjaan)
                setUmur(data.umur.ages)
                // setKategori(data.umur)
                setPerkawinan(data.perkawinan)
                setAgama(data.agama)
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
                                    {pendidikan.map((list) => {
                                        return (
                                            <ListPendidikan
                                                key={list.id_pendidikan_terakhir}
                                                nama={list.nama}
                                                total={list.total}
                                            />
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">

                            {pendidikan.slice(0, 6).map((list) => {
                                return (
                                    <CardPendidikan
                                        key={list.id_pendidikan_terakhir}
                                        nama={list.nama}
                                        total={list.total}
                                    />
                                )
                            })
                            }
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
                                    {pekerjaan.map((list) => {
                                        return (
                                            <ListPekerjaan
                                                key={list.id_pekerjaan}
                                                nama={list.nama}
                                                total={list.total}
                                            />
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">
                            {pekerjaan.slice(0, 6).map((list) => {
                                return (
                                    <CardPekerjaan
                                        key={list.id_pekerjaan}
                                        nama={list.nama}
                                        total={list.total}
                                    />
                                )
                            })
                            }
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
                                    {umur.map((list) => {
                                        return (
                                            <ListUmur
                                                key={list.age}
                                                nama={list.age}
                                                total={list.total}
                                            />
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row text-center">
                            {/* {kategori?.map((list) => {
                                return (
                                    <CardUmur
                                        key={list.categories}
                                        nama={list.categories}
                                        total={list.categories.dewasa.total}
                                    />
                                )
                            })
                            } */}
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
                    {perkawinan.slice(0, 4).map((list) => {
                        return (
                            <CardPerkawinan
                                key={list.id_status_perkawinan}
                                id={list.id_status_perkawinan}
                                nama={list.nama}
                                total={list.total}
                            />
                        )
                    })
                    }
                </div>
            </section>
            <section className=" mt-10">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h4 className="fw-bold">Berdasarkan Agama</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    {agama.slice(0, 6).map((list) => {
                        return (
                            <CardAgama
                                key={list.id_agama}
                                id={list.id_agama}
                                nama={list.nama}
                                total={list.total}
                            />
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

function ListPendidikan(props) {
    return (
        <tr>
            <td>{props.nama}</td>
            <td className="td-center">{props.total}</td>
        </tr>
    )
}

function CardPendidikan(props) {
    return (
        <div className="col-6 col-lg-4 mb-3">
            <div className="card penduduk-card">
                <div className="card-body">
                    <p className="penduduk-card__jumlah">{props.total}</p>
                    <p className="penduduk-card__info">{props.nama}</p>
                </div>
            </div>
        </div>
    )
}

function ListPekerjaan(props) {
    return (
        <tr>
            <td>{props.nama}</td>
            <td className="td-center">{props.total}</td>
        </tr>
    )
}

function CardPekerjaan(props) {
    return (
        <div className="col-6 col-lg-4 mb-3">
            <div className="card penduduk-card">
                <div className="card-body">
                    <p className="penduduk-card__jumlah">{props.total}</p>
                    <p className="penduduk-card__info">{props.nama}</p>
                </div>
            </div>
        </div>
    )
}

function ListUmur(props) {
    return (
        <tr>
            <td>{props.nama}</td>
            <td className="td-center">{props.total}</td>
        </tr>
    )
}

// function CardUmur(props) {
//     return (
//         <div className="col-6 col-lg-4 mb-3">
//             <div className="card penduduk-card">
//                 <div className="card-body">
//                     <p className="penduduk-card__jumlah">{props.total}</p>
//                     <p className="penduduk-card__info">{props.nama}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

function CardPerkawinan(props) {
    return (
        <div className="col-6 col-lg-3 mb-3 text-center">
            <div className="card card-demografi-penduduk">
                <div className="card-body">
                    <p className="card-demografi-penduduk__info mb-4">{props.nama}</p>
                    <img src={'/assets/media/perkawinan/' + (props.id) + '.svg'} alt={props.nama} height="180" />
                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">{props.total}</p>
                </div>
            </div>
        </div>
    )
}

function CardAgama(props) {
    return (
        <div className="col-6 col-lg-4 mb-3 text-center">
            <div className="card card-demografi-penduduk">
                <div className="card-body">
                    <p className="card-demografi-penduduk__info mb-4">{props.nama}</p>
                    <img src={'/assets/media/perkawinan/' + (props.id) + '.svg'} alt={props.nama} height="180" />
                    <p id="jumlahAgamaKristen" className="card-demografi-penduduk__jumlah mb-0 mt-4">{props.total}</p>
                </div>
            </div>
        </div>
    )
}

export default DataPenduduk