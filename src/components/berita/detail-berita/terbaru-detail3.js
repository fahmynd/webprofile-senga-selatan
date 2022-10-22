import React, { useEffect } from 'react'
import terbaruBerita3 from '../../../assets/img/berita/terbaru-berita3.jpeg'
import terbaruBerita3Foto1 from '../../../assets/img/berita/terbaru-berita3-foto1.jpeg'
import terbaruBerita3Foto2 from '../../../assets/img/berita/terbaru-berita3-foto2.jpeg'
import terbaruBerita3Foto3 from '../../../assets/img/berita/terbaru-berita3-foto3.jpeg'

export default function TerbaruBerita3() {
    useEffect(function () {
        document.title = "Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemerintah Desa Senga Selatan salurkan Insentif Pegawai Syara, Kader Posyandu, Kader PKB dll</h1>
                        <p>20 Oktober 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={terbaruBerita3} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Pemerintah Desa Senga Selatan kembali menyalurkan Insentif bulan Juli s.d Oktober kepada Imam Desa, Khatib, Bilal, Imam Mesjid, Kader Posyandu, Kader PKB, Kader Sub PKB, Guru Ngaji, Perawat Desa, Bidan Desa Non PNS, Kader Pemberdayaan Masyarakat, Kader Pembangunan Manusia yang penganggarannya dianggarkan melalui Dana Desa Tahun Anggaran 2022 pada Kamis (20/10/2022).  Adapun penyaluran insentif disalurkan langsung oleh Bendahara Desa didampingi oleh Penjabat Kepala Desa Senga Selatan.
                        </p>
                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaruBerita3Foto1} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaruBerita3Foto2} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaruBerita3Foto3} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}