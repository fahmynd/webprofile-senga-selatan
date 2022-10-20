import React from 'react'
import ChartBelanjaDesa from './chart-belanja-desa'
import ChartPendapatanDesa from './chart-pendapatan-desa'
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
import balitaIcon from '../../assets/img/icon/icon-baby.svg'
import pasanganIcon from '../../assets/img/icon/icon-couple.svg'
import wanitaSuburIcon from '../../assets/img/icon/icon-women.svg'
import hamilIcon from '../../assets/img/icon/icon-pregnancy.svg'

function KontenInfografis() {
    return (
        <section id="kontenBerita">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold mt-4">Infografis</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="transparansiApbd-tab" data-bs-toggle="tab" data-bs-target="#transparansiApbd" type="button" role="tab" aria-controls="transparansiApbd" aria-selected="true">
                                    Transparansi APBD
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="dataPenduduk-tab" data-bs-toggle="tab" data-bs-target="#dataPenduduk" type="button" role="tab" aria-controls="dataPenduduk" aria-selected="false">
                                    Data Penduduk
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="dataStunting-tab" data-bs-toggle="tab" data-bs-target="#dataStunting" type="button" role="tab" aria-controls="dataStunting" aria-selected="false">
                                    Data Stunting
                                </button>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="petaPotensi-tab" data-bs-toggle="tab" data-bs-target="#petaPotensi" type="button" role="tab" aria-controls="petaPotensi" aria-selected="false">
                                    Peta Potensi Desa
                                </button>
                            </li> */}
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="transparansiApbd" role="tabpanel" aria-labelledby="transparansiApbd-tab">
                                <div className="row mt-3">
                                    <div className="col-md-6 center-v">
                                        <h3 className="fw-bold mt-4">
                                            APBD Tahun <span id="tahunInfografis">2022</span>
                                        </h3>
                                        <p className="mb-0">
                                            Desa <span>Senga Selatan</span> Kabupaten <span>Luwu</span>
                                        </p>
                                        <p>Provinsi <span>Sulawesi Selatan</span></p>
                                    </div>
                                    <div className="col-md-6 center-v">
                                        <div className="row">
                                            <div className="offset-md-3 col-md-6 mb-3">
                                                {/* <div className="row">
                                                    <label htmlFor="pilihTahun" className="col-sm-3 col-form-label">Tahun</label>
                                                    <div className="col-sm-9">
                                                        <select id='apbd-tahun' className="form-select" aria-label="Default select example">
                                                            <option defaultValue="" disabled>Pilih Tahun</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                            </div>
                                            {/* <div className="col-md-3 center-v mb-5">
                                                <div className="dropdown">
                                                    <div className="d-grid gap-2">
                                                        <Link className="btn btn-success dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fas fa-file-export me-1"></i> Export
                                                        </Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <li>
                                                                <Link className="dropdown-item" to="#">Export to PDF</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="#">Export to Email</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" to="#">Share</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="card card-idm card-idm__skor">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="card-idm__text">
                                                            Pendapatan Desa <br />
                                                            Tahun <span>2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 text-center center-v">
                                                        <p className="card-idm__jumlah fs-4">Rp1.437.909.473,-</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card card-idm card-idm__status">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="card-idm__text">
                                                            Belanja Desa <br />
                                                            Tahun <span>2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 text-center center-v">
                                                        <p className="card-idm__infoStatus fs-4">
                                                            Rp1.437.909.473,-
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="row mt-10">
                                    <div className="col-md-12 text-center">
                                        <h4 className="fw-bold">Pendapatan Desa</h4>
                                    </div>
                                    <div className="col-md-12">
                                        <ChartPendapatanDesa />
                                    </div>
                                </section>
                                <section className="row mt-10">
                                    <div className="col-md-12 text-center">
                                        <h4 className="fw-bold">Belanja Desa</h4>
                                    </div>
                                    <div className="col-md-12">
                                        <ChartBelanjaDesa />
                                    </div>
                                </section>
                                <section className="row mt-10">
                                    <div className="col-md-12 text-center mb-4">
                                        <h4 className="fw-bold">Rincian Pendapatan Desa</h4>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="accordion" id="rincianPendapatan">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pendapatan1" aria-expanded="false" aria-controls="pendapatan1">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Pendapatan Asli Desa</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="pendapatan1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6>Hasil Usaha</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Hasil Bumdes</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Tanah Kas Desa</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion">Hasil Aset</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Tambatan Perahu</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Pasar Desa</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Tempat Pemandian Umum</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Jaringan Irigasi</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Swadaya, Partisipasi dan Gotong Royong</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion">Lain-lain</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Hasil Pungutan Desa</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pendapatan2" aria-expanded="false" aria-controls="pendapatan2">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Kelompok Transfer</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="pendapatan2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Dana Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion">Hasil Pajak Daerah</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Alokasi Dana Desa</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Bantuan Keuangan dari APBD Provinsi</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p className="info-accordion">Bantuan Keuangan dari APBD Kab/Kota</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pendapatan3" aria-expanded="false" aria-controls="pendapatan3">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">
                                                                Kelompok Pendapatan Lain Lain
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="pendapatan3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Hibah</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Pendapatan Sah lain-lain</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="row mt-10">
                                    <div className="col-md-12 text-center mb-4">
                                        <h4 className="fw-bold">Rincian Belanja Desa</h4>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="accordion" id="rincianBelanja">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaOne">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja1" aria-expanded="false" aria-controls="belanja1">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Belanja Pegawai</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja1" className="accordion-collapse collapse" aria-labelledby="belanjaOne" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Belanja Pegawai</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaTwo">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja2" aria-expanded="false" aria-controls="belanja2">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">
                                                                Belanja Barang dan Jasa
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja2" className="accordion-collapse collapse" aria-labelledby="belanjaTwo" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Barang dan Jasah</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaThree">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja3" aria-expanded="false" aria-controls="belanja3">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Belanja Modal</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja3" className="accordion-collapse collapse" aria-labelledby="belanjaThree" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Belanja Modal</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaFour">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja4" aria-expanded="false" aria-controls="belanja4">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Belanja Tak Terduga</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                                                50%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.419.519.720.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja4" className="accordion-collapse collapse" aria-labelledby="belanjaFour" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block">
                                                                <p >Uraian</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block">
                                                                <p>Anggaran</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block">
                                                                <p>Realisasi</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion">Belanja Tak Terduga</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p>  <span className="d-block d-lg-none">Anggaran :</span> Rp2.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Realisasi :</span> Rp2.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="tab-pane fade" id="dataPenduduk" role="tabpanel" aria-labelledby="dataPenduduk-tab">
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
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.731</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-4 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Laki-Laki</p>
                                                    <img src={lkIcon} alt="icon jumlah perempuan" height="230" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.781</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Total Penduduk</p>
                                                    <img src={tpIcon} alt="icon jumlah perempuan" height="230" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">3.512</p>
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
                                                            <td className="td-center">672</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tidak/Belum Sekolah</td>
                                                            <td className="td-center">558</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SLTP/Sederajat</td>
                                                            <td className="td-center">546</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Belum Tamat SD/Sederajat</td>
                                                            <td className="td-center">365</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Diploma IV/Strata I</td>
                                                            <td className="td-center">243</td>
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
                                                            <p className="penduduk-card__jumlah">672</p>
                                                            <p className="penduduk-card__info">Tamat SD/Sederajat</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">558</p>
                                                            <p className="penduduk-card__info">Tidak/Belum Sekolah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">546</p>
                                                            <p className="penduduk-card__info">SLTP/Sederajat</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">365</p>
                                                            <p className="penduduk-card__info">Belum Tamat SD/Sederajat</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">243</p>
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
                                                            <td className="td-center">984</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Belum/Tidak Bekerja</td>
                                                            <td className="td-center">760</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mengurus Rumah Tangga</td>
                                                            <td className="td-center">708</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wiraswasta</td>
                                                            <td className="td-center">301</td>
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
                                                            <p className="penduduk-card__jumlah">984</p>
                                                            <p className="penduduk-card__info">Pelajar/Mahasiswa</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">760</p>
                                                            <p className="penduduk-card__info">Belum/Tidak Bekerja</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">708</p>
                                                            <p className="penduduk-card__info">Mengurus Rumah Tangga</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">301</p>
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
                                                            <td className="td-center">374</td>
                                                        </tr>
                                                        <tr>
                                                            <td>10 - 14</td>
                                                            <td className="td-center">352</td>
                                                        </tr>
                                                        <tr>
                                                            <td>20 - 24</td>
                                                            <td className="td-center">346</td>
                                                        </tr>
                                                        <tr>
                                                            <td>25 - 29</td>
                                                            <td className="td-center">297</td>
                                                        </tr>
                                                        <tr>
                                                            <td>40 - 44</td>
                                                            <td className="td-center">267</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5 - 9</td>
                                                            <td className="td-center">262</td>
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
                                                            <p className="penduduk-card__jumlah">1.039</p>
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
                                                            <p className="penduduk-card__jumlah">912</p>
                                                            <p className="penduduk-card__info">Orang Tua</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">398</p>
                                                            <p className="penduduk-card__info">Anak-anak</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-4 mb-3">
                                                    <div className="card penduduk-card">
                                                        <div className="card-body">
                                                            <p className="penduduk-card__jumlah">228</p>
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
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.821</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Kawin</p>
                                                    <img src={kIcon} alt="icon kawin" height="180" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.471</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Cerai Mati</p>
                                                    <img src={cmIcon} alt="icon cerai mati" height="180" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">105</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Cerai Hidup</p>
                                                    <img src={cIcon} alt="icon hidup" height="180" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">68</p>
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
                                                    <p id="jumlahAgamaIslam" className="card-demografi-penduduk__jumlah mb-0 mt-4">3.500</p>
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
                            </div>
                            <div className="tab-pane fade" id="petaPotensi" role="tabpanel" aria-labelledby="petaPotensi-tab">
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        {/* <img src="http://assets.kompasiana.com/items/album/2020/07/12/whatsapp-image-2020-07-12-at-20-11-11-5f0b0df4d541df743f7e83a2.jpeg" alt="potensi Desa" width="100%" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="dataStunting" role="tabpanel" aria-labelledby="dataStunting-tab">
                                <section className=" mt-5">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h4 className="fw-bold">Data Stunting 2022</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="row text-center">
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Pasangan Usia Subur</p>
                                                            <img src={pasanganIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">480</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Wanita Usia Subur</p>
                                                            <img src={wanitaSuburIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">304</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Ibu Hamil</p>
                                                            <img src={hamilIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">71</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Balita</p>
                                                            <img src={balitaIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">254</p>
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
                                            <h4 className="fw-bold">Data Stunting 2021</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="row text-center">
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Pasangan Usia Subur</p>
                                                            <img src={pasanganIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">498</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Wanita Usia Subur</p>
                                                            <img src={wanitaSuburIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">326</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Ibu Hamil</p>
                                                            <img src={hamilIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">57</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <p className="card-demografi-penduduk__info mb-4">Balita</p>
                                                            <img src={balitaIcon} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">294</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KontenInfografis