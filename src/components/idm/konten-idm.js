import React from 'react'
import './idm.css'

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
              <div className="tab-pane active tab-box mt-3">
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
                    <tr>
                      <td className="tg-baqh">1</td>
                      <td className="tg-baqh">Skor Akses Sarkes</td>
                      <td className="tg-baqh">5</td>
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Waktu tempuh dari ≤ 30  Menit</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah dokter ≥ 1 orang</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah bidan ≥ 1 orang</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah tenaga kesehatan lainnya ≥ 5 orang</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah peserta BPJS/jumlah penduduk antara 0,26 s.d 0,5</span></td>
                      <td className="tg-baqh">Fasilitasi kepesertaan BPJS warga Desa hingga {'>'} 75%</td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jarak tempuh menuju Poskesdes = 500 Meter</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Posyandu aktif 1 bulan sekali/ Jumlah Posyandu {'>'} 0,75</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jarak tempuh menuju SD atau MI = 3000 Meter</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jarak tempuh menuju SMP atau MTs ≤ 6000 Meter</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jarak tempuh menuju SMU atau SMK ≤ 6000 Meter</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah PAUD ≥ 1 </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah PKBM atau Paket ABC Tidak ada</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Pusat Keterampilan atau Kursus Tidak ada</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Taman Bacaan Masyarakat atau perpustakaan Desa tersedia </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Terdapat Kebiasaan Gotong Royong</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Frekuensi Gotong Royong {'>'} 2</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Ruang Publik terdapat didesa</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah kelompok kegiatan olahraga antara 4 s.d 5</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah kegiatan olahraga {'>'} 7</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Jenis Agama di Desa {'>'} 1</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Bahasa yang digunakan sehari-hari {'>'} 1</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Warga Desa terdiri dari Suku {'>'} 1</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Terdapat Pos Keamanan di Desa</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Terdapat Sistem Keamanan Lingkungan warga di Desa</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Tidak terdapat atau tidak ada Konflik di Desa</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah PMKS  tidak ada atau 0 </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Skor SLB = 0 </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>(Jumlah Keluarga Memakai listrik + non Listrik/Jumlah keluarga memakai listrik) ≥ 0,9 )</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Sinyal telepon seluler di Desa Kuat</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Terdapat fasilitas internet di kantor Desa </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Terdapat Akses internet warga di Desa</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Warga Desa BAB di Jamban Sendiri</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Warga desa membuang sampah di Lubang atau di Bakar</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Sumber air minum berasal dari PAM, Air Ledeng tanpa Meteran</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Sumber air mandi dan cuci berasal dari PAM, Air Ledeng tanpa Meteran</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Industri Mikro/Jumlah KK {'<'} 0,001</span></td>
                      <td className="tg-baqh">Peningkatan Jumlah Industri Mikro/UKM hingga {'>='} 0,4% jumlah KK di Desa</td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jarak ke kelompok pertokoan terdekat ≤ 7 KM</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>(Total KK/jumlah pasar(permanen)) ≥ 250</span></td>
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
                      <td className="tg-baqh">Skor Toko/Warung Kelontong</td>
                      <td className="tg-baqh">5</td>
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Toko dan warung kelontong {'>'} 3</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah Kedai dan Penginapan {'>'} 1</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah pos dan jasa logistik = 0</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah bank dan BPR = 0</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah fasilitas kredit = 2</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jumlah koperasi aktif dan BUMDESA {'>'} 1</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Transportasi Umum ada tanpa trayek tetap</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jalan di Desa dilalui oleh kendaraan bermotor roda empat atau lebih Sepanjang Tahun </span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jenis permukaan jalan desa Aspal atau beton</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Pencemaran (air, udara, tanah, limbah disungai) di desa [jumlah pencemaran/4] = 0</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Jenis bencana (longsor, banjir, kebakaran hutan) jenis bencana di desa = 0</span></td>
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
                      <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>Fasilitas mitigasi/tanggap bencana (peringatan dini bencana alam, peringatan dini tsunami, perlengkapan keselamatan, jalur evakuasi) jumlah fasilitas mitigasi / tanggap bencana = 1</span></td>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default KontenIdm