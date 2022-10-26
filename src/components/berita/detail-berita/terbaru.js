import React, { useEffect } from 'react'
import terbaruBerita1 from '../../../assets/img/berita/terbaru.jpeg'
import terbaru1 from '../../../assets/img/berita/terbaru-1.jpeg'
import terbaru2 from '../../../assets/img/berita/terbaru-2.jpeg'
import terbaru3 from '../../../assets/img/berita/terbaru-3.jpeg'

export default function Terbaru() {
    useEffect(function () {
        document.title = "Pemdes Senga Selatan mengikuti Rakor Persiapan Kegiatan Evaluasi dan Apresiasi KIP Nasional 2022 | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan mengikuti Rakor Persiapan Kegiatan Evaluasi dan Apresiasi KIP Nasional 2022</h1>
                        <p>26 Oktober 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={terbaruBerita1} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Pemerintah Desa Senga Selatan menghadiri Rapat Koordinasi Pelaksanaan Tahapan Evaluasi dan Apresiasi Keterbukaan Informasi Publik Desa Tingkat Nasional Tahun 2022, bertempat di Dinas PMD Provinsi Sulawesi Selatan, yang dilanjutkan dengan Verifikasi SAQ KIP Desa di Komisi Informasi Provinsi Sulawesi Selatan, pada Senin (24/10/2022)
                        </p>

                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaru1} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaru2} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaru3} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}