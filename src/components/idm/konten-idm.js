import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import './idm.css'

const KontenIdm = () => {
  const [baris, setBaris] = useState([]);
  const [tahun, setTahun] = useState();
  const [skor_idm, setSkor_idm] = useState();
  const [status, setStatus] = useState();
  const [target, setTarget] = useState();
  const [minimal, setMinimal] = useState();
  const [penambahan, setPenambahan] = useState();
  const [iks, setIks] = useState();
  const [ike, setIke] = useState();
  const [ikl, setIkl] = useState();
  const [indikator36, setIndikator36] = useState();
  const [indikator49, setIndikator49] = useState();
  const [indikator53, setIndikator53] = useState();

  useEffect(() => {
    axios.get('https://profil.digitaldesa.id/sengaselatan-luwu/idm/?ajax=1')
      .then((result) => {
        // console.log(result.data.data.dataDesa.mapData);
        const data = result.data.data.dataDesa.mapData;
        const skor = result.data.data;
        setBaris(data.ROW)
        setTahun(data.SUMMARIES.TAHUN)
        setSkor_idm(data.SUMMARIES.SKOR_SAAT_INI)
        setStatus(data.SUMMARIES.STATUS)
        setTarget(data.SUMMARIES.TARGET_STATUS)
        setMinimal(data.SUMMARIES.SKOR_MINIMAL)
        setPenambahan(data.SUMMARIES.PENAMBAHAN)
        setIks(skor.rowDesa36.SKOR)
        setIke(skor.rowDesa49.SKOR)
        setIkl(skor.rowDesa53.SKOR)
        setIndikator36(skor.rowDesa36.INDIKATOR)
        setIndikator49(skor.rowDesa49.INDIKATOR)
        setIndikator53(skor.rowDesa53.INDIKATOR)
      })
      .catch(err => {
        // Handle Error Here
        console.error(err);
      });
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
                      Tahun <span>{tahun}</span>
                    </p>
                  </div>
                  <div className="col-md-6 text-center center-v">
                    <p className="card-idm__jumlah">{Number(skor_idm).toFixed(4)}</p>
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
                      Tahun <span>{tahun}</span>
                    </p>
                  </div>
                  <div className="col-md-6 text-center center-v">
                    <p className="card-idm__infoStatus">{status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Target Status</p>
            <p className="fs-5">{target}</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Skor Minimal</p>
            <p className="fs-5">{minimal}</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Penambahan</p>
            <p className="fs-5">{Number(penambahan).toFixed(4)}</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Skor IKS</p>
            <p className="fs-5">{Number(iks).toFixed(4)}</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Skor IKE</p>
            <p className="fs-5">{Number(ike).toFixed(4)}</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <p className="fw-bold">Skor IKL</p>
            <p className="fs-5">{Number(ikl).toFixed(4)}</p>
          </div>
        </div>
        <div id="tabMenu">
          <div className="mt-5">
            {/* <ul class="nav nav-tabs">
              <li class="nav-item">
                <a href="#tab2" className="nav-link navbar-default active" data-toggle="tab">Rumusan Pokok</a>
              </li>
            </ul> */}
            <div className="tab-content">
              <div id="tab2" className="tab-pane active tab-box mt-3 table-responsive">
                <table className="tg" style={{ width: '100%' }}>
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
                          key={list.ROW_CELL}
                          no={list.NO}
                          indikator={list.INDIKATOR}
                          skor={list.SKOR}
                          keterangan={list.KETERANGAN}
                          kegiatan={list.KEGIATAN}
                          nilai={Number(list.NILAI).toFixed(4)}
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
                      <td className="tg-zwfm text-center" colSpan="12">SKOR {indikator36} : {Number(iks).toFixed(4)}</td>
                    </tr>
                    {baris.slice(36, 48).map((list) => {
                      return (
                        <Row
                          key={list.ROW_CELL}
                          no={list.NO}
                          indikator={list.INDIKATOR}
                          skor={list.SKOR}
                          keterangan={list.KETERANGAN}
                          kegiatan={list.KEGIATAN}
                          nilai={Number(list.NILAI).toFixed(4)}
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
                      <td className="tg-zwfm text-center" colSpan="12">SKOR {indikator49} : {Number(ike).toFixed(4)}</td>
                    </tr>
                    {baris.slice(49, 52).map((list) => {
                      return (
                        <Row
                          key={list.ROW_CELL}
                          no={list.NO}
                          indikator={list.INDIKATOR}
                          skor={list.SKOR}
                          keterangan={list.KETERANGAN}
                          kegiatan={list.KEGIATAN}
                          nilai={Number(list.NILAI).toFixed(4)}
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
                      <td className="tg-zwfm text-center" colSpan="12">SKOR {indikator53} : {Number(ikl).toFixed(4)}</td>
                    </tr>
                    <tr>
                      <td className="tg-zwfm text-center" colSpan="12">IDM <span id="tahunIDM" name="tahunIDM">{tahun}</span> : {Number(skor_idm).toFixed(4)}</td>
                    </tr>
                    <tr>
                      <td className="tg-zwfm text-center" colSpan="12">STATUS IDM <span id="tahunIDM" name="tahunIDM">{tahun}</span> : {status}</td>
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