import './idm.css'
import React, { useEffect, useState } from "react";

const KontenIdm = () => {
    const url = 'https://profil.digitaldesa.id/sengaselatan-luwu/idm/?ajax=1';
    const [baris, setBaris] = useState([]);

    const getDataBaris = async () => {
        const response = await fetch(url);
        const dataBaris = await response.json();
        setBaris(dataBaris.data.dataDesa.mapData.ROW);
        // console.log(baris);
    }

    useEffect(() => {
        getDataBaris();
    })

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
                                        <p className="card-idm__jumlah">0.8308</p>
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
                        <p className="fs-5">0.8156</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Penambahan</p>
                        <p className="fs-5">-0.0152</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKS</p>
                        <p className="fs-5">0.9257</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKE</p>
                        <p className="fs-5">0.7</p>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <p className="fw-bold">Skor IKL</p>
                        <p className="fs-5">0.8667</p>
                    </div>
                </div>
                <div id="tabMenu">
                    <div className="mt-5">
                        <div className="tab-content">
                            <div id="tab2" className="tab-pane active tab-box mt-3">
                                <table className="tg table-responsive" style={{ width: '100%' }}>
                                    <thead style={{ backgroundColor: '#317A75', color: 'white' }}>
                                        <tr>
                                            <th className="tg-amwm" rowSpan="2" style={{ borderRadius: '7px 0px 0px 0px' }}>No</th>
                                            <th className="tg-amwm" rowSpan="2">Indikator IDM</th>
                                            <th className="tg-amwm" rowSpan="2" >Skor</th>
                                            <th className="tg-amwm" rowSpan="2">Keterangan</th>
                                            <th className="tg-amwm" rowSpan="2">Kegiatan yang dapat dilakukan</th>
                                            <th className="tg-amwm" rowSpan="2">+Nilai</th>
                                            <th className="tg-amwm" colSpan="6" style={{ borderRadius: '0px 7px 0px 0px' }}>Yang dapat melaksanakan kegiatan</th>
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
                                        {baris.slice(0, 35).map((list) => {
                                            return (
                                                <Row
                                                    no={list.NO}
                                                    indikator={list.INDIKATOR}
                                                    skor={list.SKOR}
                                                    keterangan={list.KETERANGAN}
                                                    kegiatan={list.KEGIATAN}
                                                    nilai={list.NILAI}
                                                    pusat={list.PUSAT}
                                                    prov={list.PROV}
                                                    kab={list.KAB}
                                                    desa={list.DESA}
                                                    csr={list.CSR}
                                                    lainnya={list.LAINNYA}
                                                />
                                            )
                                        })
                                        }
                                        <tr>
                                            <td className="tg-zwfm text-center" colSpan="12">SKOR IKS 2022 : 0.9257</td>
                                        </tr>
                                        {baris.slice(36, 48).map((list) => {
                                            return (
                                                <Row
                                                    no={list.NO}
                                                    indikator={list.INDIKATOR}
                                                    skor={list.SKOR}
                                                    keterangan={list.KETERANGAN}
                                                    kegiatan={list.KEGIATAN}
                                                    nilai={list.NILAI}
                                                    pusat={list.PUSAT}
                                                    prov={list.PROV}
                                                    kab={list.KAB}
                                                    desa={list.DESA}
                                                    csr={list.CSR}
                                                    lainnya={list.LAINNYA}
                                                />
                                            )
                                        })
                                        }
                                        <tr>
                                            <td className="tg-zwfm text-center" colSpan="12">SKOR IKE 2022 : 0.7</td>
                                        </tr>
                                        {baris.slice(49, 52).map((list) => {
                                            return (
                                                <Row
                                                    no={list.NO}
                                                    indikator={list.INDIKATOR}
                                                    skor={list.SKOR}
                                                    keterangan={list.KETERANGAN}
                                                    kegiatan={list.KEGIATAN}
                                                    nilai={list.NILAI}
                                                    pusat={list.PUSAT}
                                                    prov={list.PROV}
                                                    kab={list.KAB}
                                                    desa={list.DESA}
                                                    csr={list.CSR}
                                                    lainnya={list.LAINNYA}
                                                />
                                            )
                                        })
                                        }
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


function Row(props) {
    return (
        <tr>
            <td className="tg-baqh">{props.no}</td>
            <td className="tg-baqh">{props.indikator}</td>
            <td className="tg-baqh">{props.skor}</td>
            <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>{props.keterangan}</span></td>
            <td className="tg-baqh">{props.kegiatan}</td>
            <td className="tg-baqh">{props.nilai}</td>
            <td className="tg-baqh">{props.pusat}</td>
            <td className="tg-baqh">{props.prov}</td>
            <td className="tg-baqh">{props.kab}</td>
            <td className="tg-baqh">{props.desa}</td>
            <td className="tg-baqh">{props.csr}</td>
            <td className="tg-baqh">{props.lainnya}</td>
        </tr>
    )
}

export default KontenIdm