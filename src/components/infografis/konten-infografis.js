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
// import balitaIcon from '../../assets/img/icon/icon-baby.svg'
// import pasanganIcon from '../../assets/img/icon/icon-couple.svg'
// import wanitaSuburIcon from '../../assets/img/icon/icon-women.svg'
// import hamilIcon from '../../assets/img/icon/icon-pregnancy.svg'
import DataStunting from './chart-data-stunting'
import desaTanpaKemiskinan from '../../assets/img/sdgs/desaTanpaKemiskinan.webp'
import desaTanpaKelaparan from '../../assets/img/sdgs/desaTanpaKelaparan.webp'
import desaSehatDanSejahtera from '../../assets/img/sdgs/desaSehatDanSejahtera.webp'
import pendidikanDesaBerkualitas from '../../assets/img/sdgs/pendidikanDesaBerkualitas.webp'
import keterlibatanPerempuanDesa from '../../assets/img/sdgs/keterlibatanPerempuanDesa.webp'
import desaAirBersihSanitasi from '../../assets/img/sdgs/desaAirBersihSanitasi.webp'
import desaBerenergiBersihDanTerbarukan from '../../assets/img/sdgs/desaBerenergiBersihDanTerbarukan.webp'
import pertumbuhanEkonomiDesaMerata from '../../assets/img/sdgs/pertumbuhanEkonomiDesaMerata.webp'
import infrastrukturDanInovasiDesaSesuaiKebutuhan from '../../assets/img/sdgs/infrastrukturDanInovasiDesaSesuaiKebutuhan.webp'
import desaTanpaKesenjangan from '../../assets/img/sdgs/desaTanpaKesenjangan.webp'
import kawasanPermukimanDesaAmanDanNyaman from '../../assets/img/sdgs/kawasanPermukimanDesaAmanDanNyaman.webp'
import konsumsiDanProduksiDesaSadarLingkungan from '../../assets/img/sdgs/konsumsiDanProduksiDesaSadarLingkungan.webp'
import desaTanggapPerubahanIklim from '../../assets/img/sdgs/desaTanggapPerubahanIklim.webp'
import desaPeduliLingkunganLaut from '../../assets/img/sdgs/desaPeduliLingkunganLaut.webp'
import desaPeduliLingkunganDarat from '../../assets/img/sdgs/desaPeduliLingkunganDarat.webp'
import desaDamaiBerkeadilan from '../../assets/img/sdgs/desaDamaiBerkeadilan.webp'
import kemitraanUntukPembangunanDesa from '../../assets/img/sdgs/kemitraanUntukPembangunanDesa.webp'
import kelembagaanDesaDinamisDanBudayaDesaAdaptif from '../../assets/img/sdgs/kelembagaanDesaDinamisDanBudayaDesaAdaptif.webp'

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
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="sdgs-tab" data-bs-toggle="tab" data-bs-target="#sdgs" type="button" role="tab" aria-controls="sdgs" aria-selected="false">
                                    SDGs Desa
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
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>
                                                                                0%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp0,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                {/* <div id="pendapatan1" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                                                </div> */}
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
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp1.437.909.473,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="pendapatan2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p>URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion fst-italic fw-bold">Dana Desa</h6>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion ms-3">Dana Desa</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-4">01. &nbsp;Dana Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp1.081.971.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion fst-italic fw-bold">Bagi Hasil Pajak dan Restribusi</h6>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion ms-3">Bagi Hasil Pajak dan Restribusi Daerah Kabupaten/Kota</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-4">01. &nbsp;Bagi Hasil Pajak dan Restribusi Daerah</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp16.410.473,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> PBH</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion fst-italic fw-bold">Alokasi Dana Desa</h6>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <h6 className="info-accordion ms-3">Alokasi Dana Desa</h6>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-4">01. &nbsp;Alokasi Dana Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp339.528.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
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
                                                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>
                                                                                0%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp0.,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                {/* <div id="pendapatan3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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
                                                </div> */}
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
                                                            <div className="col-md-6">Penyelenggaraan Pemerintahan Desa</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp417.099.120,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja1" className="accordion-collapse collapse" aria-labelledby="belanjaOne" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p>URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Penyelenggaraan Belanja Siltap, Tunjangan dan Operasional Pemerintahan Desa (Maksimal 30% untuk Kegiatan)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp301.728.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyediaan Penghasilan Tetap dan Tunjangan Perangkat Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp205.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Pegawai</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp205.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyediaan Jaminan Sosial bagi Kepala Desa dan Perangkat Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp1.876.500,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Pegawai</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp1.876.500,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pegawai Penyediaan Operasional Pemerintah Desa (ATK, Honor PKPKD dan PPKD, Perlengkapan Perkantoran, pakaian)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp21.204.140,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp21.204.140,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyediaan Tunjangan BPD</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp46.500.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Pegawai</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp46.500.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyediaan Operasional BPD (rapat, ATK Makan Minum, Perlengkapan Perkantoran, Pakaian Seragam, perj)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp3.147.360,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp3.147.360,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyediaan Pembayaran Upah Bulanan Staf Pemerintah Desa dan BPD</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp24.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp24.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Tata Praja Pemerintahan, Perencanaan, Keuangan dan Pelaporan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp115.371.120,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyusunan Dokumen Keuangan Desa (APBDes, APBDes Perubaban, LPJ dll)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp19.771.120,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS, PBH</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp19.771.120,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pengembangan Sistem Informasi Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp65.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp24.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Modal</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp41.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pengisian, Penetapan, Mutasi dan Pemberhentian Perangkat Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp1.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp1.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Pemilihan Kepala Desa Antar Waktu</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp23.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp23.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Pemilihan Anggota BPD Antar Waktu</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp5.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp5.000.000,-</p>
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
                                                                Pelaksanaan Pembangunan Desa
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp342.206.200,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja2" className="accordion-collapse collapse" aria-labelledby="belanjaTwo" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p >URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Pendidikan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp10.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pengorganisasian Pembangunan Desa (insentif KPMD)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp10.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp10.800.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Kesehatan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp134.829.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Pos Kesehatan Desa/Polindes Milik Desa (obat, insentif, KB, dsb)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp23.965.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp23.965.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Posyandu (Mkn Tambahan, Kls Bumil, Lamsia, Insentif)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp55.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp55.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Desa Siaga Kesehatan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp48.364.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp48.364.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan PPKBD dan SUB PPKBD</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp7.500.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp7.500.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Pekerjaan Umum dan Penataan Ruang</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp146.393.200,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pambangunan/Rehabilitas/Peningkatan Embung Desa (Dipilih)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp146.393.200,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Modal</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp146.393.200,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Perhubungan, Komunikasi dan Informatika</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp50.184.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penyelenggaraan Informasi Publik Desa (Poster, Baliho, dll)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp12.840.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp12.840.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pembuatan dan Pengelolaan Jaringan/Instalasi Komunikasi dan Informasi Lokal Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp37.344.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp7.344.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Modal</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp30.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaThree">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja3" aria-expanded="false" aria-controls="belanja3">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Pembinaan Kemasyarakatan Desa</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp158.004.153,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja3" className="accordion-collapse collapse" aria-labelledby="belanjaThree" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p>URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Ketenteraman, Ketertiban Umum dan Perlindungan Masyarakat</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp63.193.680,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pengadaan Pos Keamanan Desa (Pembangunan Pos)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp63.193.680,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Modal</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp63.193.680,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Kebudayaan dan Keagamaan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp80.400.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pembinaan Kerukunan Umat Beragama</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp80.400.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp80.400.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Kepemudaan dan Olahraga</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp8.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pembinaan Karangtaruna/Klub Kepemudaan/Olahraga Tingkat Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp8.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> ADD</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp8.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Kelembagaan Masyarakat</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp6.410.473,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Pembinaan PKK</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp6.410.473,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> PBH</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp6.410.473,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaFour">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja4" aria-expanded="false" aria-controls="belanja4">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Pemberdayaan Masyarakat Desa</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp85.000.000,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja4" className="accordion-collapse collapse" aria-labelledby="belanjaFour" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p>URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Pertanian dan Peternakan</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp65.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Bantuan Pertanian dan Peternakan (Bibit, Pakan, dst)</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp65.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp65.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Peningkatan Kapasitas Aparatur Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp20.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Peningkatan Kapasitas Kepala Desa</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp20.000.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Barang dan Jasa</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp20.000.000,-</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="belanjaFive">
                                                    <button className="accordion-button accordion-button-belanja collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#belanja5" aria-expanded="false" aria-controls="belanja5">
                                                        <div className="row" style={{ width: '100%' }}>
                                                            <div className="col-md-6">Penanggulangan Bencana, Keadaan Darurat, dan Keadaan Mendesak Desa</div>
                                                            <div className="col-md-6">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="progress">
                                                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                                                                100%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 wrap-jumlah-accordion text-end px-5">
                                                                        Rp435.600.000,-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="belanja5" className="accordion-collapse collapse" aria-labelledby="belanjaFive" data-bs-parent="#rincianBelanja">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-6 d-none d-lg-block fw-bold">
                                                                <p>URAIAN</p>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 d-none d-lg-block fw-bold">
                                                                <p>ANGGARAN</p>
                                                            </div>
                                                            <div className="col-md-2 d-none d-lg-block fw-bold">
                                                                <p>SUMBER DANA</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic fw-bold">Sub Bidang Keadaan Mendesak</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2 fw-bold">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp435.600.000,-</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion ms-3">Penanganan Keadaan Mendesak</h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp435.600.000,-</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <p> <span className="d-block d-lg-none">Sumber Dana :</span> DDS</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h6 className="info-accordion fst-italic ms-4"><span className='text-decoration-underline'>Belanja Tidak Terduga</span></h6>
                                                            </div>
                                                            <div className="offset-md-2 col-md-2">
                                                                <p> <span className="d-block d-lg-none">Anggaran :</span> Rp435.600.000,-</p>
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
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.735</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-4 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Laki-Laki</p>
                                                    <img src={lkIcon} alt="icon jumlah perempuan" height="230" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">1.791</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 mb-3 text-center">
                                            <div className="card card-demografi-penduduk">
                                                <div className="card-body">
                                                    <p className="card-demografi-penduduk__info mb-4">Total Penduduk</p>
                                                    <img src={tpIcon} alt="icon jumlah perempuan" height="230" />
                                                    <p id="jumlahPerempuan" className="card-demografi-penduduk__jumlah mb-0 mt-4">3.536</p>
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
                            </div>
                            <div className="tab-pane fade" id="petaPotensi" role="tabpanel" aria-labelledby="petaPotensi-tab">
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        {/* <img src="http://assets.kompasiana.com/items/album/2020/07/12/whatsapp-image-2020-07-12-at-20-11-11-5f0b0df4d541df743f7e83a2.jpeg" alt="potensi Desa" width="100%" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="dataStunting" role="tabpanel" aria-labelledby="dataStunting-tab">
                                <div className="row mt-3">
                                    <h4 className="fw-bold my-4 text-center">Data Stunting</h4>
                                    <div className="col-md-12">
                                        <DataStunting />
                                    </div>
                                </div>
                                {/* <section className=" mt-5">
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
                                </section> */}
                            </div>
                            <div className="tab-pane fade" id="sdgs" role="tabpanel" aria-labelledby="sdgs-tab">
                                <section className=" mt-5">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h4 className="fw-bold">52.52</h4>
                                            <p>Skor SDGs Desa</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="row text-center">
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaTanpaKemiskinan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaTanpaKelaparan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">50</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaSehatDanSejahtera} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">82.26</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={pendidikanDesaBerkualitas} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">14.85</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={keterlibatanPerempuanDesa} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">0.99</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaAirBersihSanitasi} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">88.2</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaBerenergiBersihDanTerbarukan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">99.82</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={pertumbuhanEkonomiDesaMerata} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">35.82</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={infrastrukturDanInovasiDesaSesuaiKebutuhan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaTanpaKesenjangan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">50.84</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={kawasanPermukimanDesaAmanDanNyaman} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">56.58</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={konsumsiDanProduksiDesaSadarLingkungan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaTanggapPerubahanIklim} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaPeduliLingkunganLaut} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaPeduliLingkunganDarat} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={desaDamaiBerkeadilan} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">80.86</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={kemitraanUntukPembangunanDesa} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">N/A</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-lg-3 mb-3">
                                                    <div className="card card-demografi-penduduk">
                                                        <div className="card-body">
                                                            <img src={kelembagaanDesaDinamisDanBudayaDesaAdaptif} alt="icon jumlah perempuan" height="100" />
                                                            <p className="card-demografi-penduduk__jumlah mb-0 mt-4">17.55</p>
                                                            <p className="card-demografi-penduduk__info mb-4">Nilai</p>
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