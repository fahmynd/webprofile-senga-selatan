import React, { useEffect } from 'react'
import dllBerita2 from '../../../assets/img/berita/dll-berita2.jpg'

export default function DllBerita2() {
    useEffect(function () {
        document.title = "RAPAT KOORDINASI TAHAPAN EVALUASI DAN APRESIASI KIP DESA TINGKAT NASIONAL 2022 | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">RAPAT KOORDINASI TAHAPAN EVALUASI DAN APRESIASI KIP DESA TINGKAT NASIONAL 2022
                        </h1>
                        <p>17 Oktober 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={dllBerita2} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Rapat Koordinasi Tahapan Evaluasi dan Apresiasi Keterbukaan Informasi Publik Desa Tingkat Nasional Tahun 2022 yang dihadiri oleh Penjabat Kepala Desa Senga Selatan, Pejabat Pengelola Informasi dan Dokumentasi (PPID) Desa, Pendamping Desa Kecamatan Belopa, Pendamping Lokal Desa, Duta Digital Kabupaten Luwu dan Kader Digital Desa Senga Selatan pada Selasa, (11/10/2022).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}