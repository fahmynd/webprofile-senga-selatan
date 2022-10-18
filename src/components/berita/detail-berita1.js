import React from 'react'
import berita1 from '../../assets/img/berita/berita1.jpg'

function DetailBerita1() {
  return (
    <div className="container">
        <div className="konten" itemscope itemtype="http://schema.org/Blog">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h1 style={{fontSize: '1.75rem'}} itemprop="name">Pemdes Senga Selatan Salurkan BLT DD Triwulan ke III Kepada 121 Penerima</h1>
                    <p>15 Agustus 2022</p>
                </div>
                <div className="col-md-12 mt-2 text-center">
                    <img className="img-content" src={berita1} alt="Foto Berita" />
                </div>
            </div>
            <div className="container mt-3">
                <div className="addthis_inline_share_toolbox"></div>
            </div>
            <div className="container mt-3">
                <div className="isi-konten" itemprop="description">Belopainfo — Pemerintah Desa Senga Selatan melakukan penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Triwulan III bulan Juli—Agustus Tahun Anggaran 2022. Penyaluran tersebut diberikan kepada 121 Keluarga Penerima Manfaat di Kantor Desa Senga Selatan. Kamis (04/08/22).</div>
            </div>
        </div>
    </div>
  )
}

export default DetailBerita1