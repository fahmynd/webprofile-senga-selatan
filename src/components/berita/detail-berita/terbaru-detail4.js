import React, { useEffect } from 'react'
import terbaruBerita4 from '../../../assets/img/berita/terbaru-berita4.jpg'
import terbaruBerita4Foto1 from '../../../assets/img/berita/terbaru-berita4-foto1.jpg'

export default function TerbaruBerita4() {
    useEffect(function () {
        document.title = "PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">PENDAFTARAN TANAH SISTEMATIS LENGKAP (PTSL) TAHUN 2022 DESA SENGA SELATAN</h1>
                        <p>20 Oktober 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={terbaruBerita4} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Anda warga Desa Senga Selatan atau mempunyai sebidang tanah di Desa Senga Selatan?? Belum bersertifikat? Ayo segera daftar. Batas waktu untuk memasukkan kelengkapan berkas hanya sampai tanggal 5 November 2022.
                        </p>
                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaruBerita4Foto1} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}