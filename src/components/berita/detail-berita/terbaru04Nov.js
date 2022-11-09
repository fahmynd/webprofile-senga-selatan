import React, { useEffect } from 'react'
import terbaruBerita1 from '../../../assets/img/berita/terbaru04Nov.jpeg'
import terbaruBerita1Foto1 from '../../../assets/img/berita/terbaru04NovFoto1.jpeg'

export default function Terbaru04Nov() {
    useEffect(function () {
        document.title = "Pemdes Senga Selatan mengikut Rapat Koordinasi Pelaksanaan Lomba Inovasi Daerah Tahun 2023 | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan mengikut Rapat Koordinasi Pelaksanaan Lomba Inovasi Daerah Tahun 2023</h1>
                        <p>04 November 2022</p>
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
                            Rapat Koordinasi dalam rangka pelaksanaan Kompetisi Inovasi Pelayanan Publik di Lingkungan Kementerian/ Lembaga, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah Tahun 2023 dimana Pemerintah Desa Senga Selatan direkomendasikan untuk diikutsertakan dengan inovasi DILAN SMART (DIgitalisasi peLayanAN Smart) yang dilaksanakan di Ruang Rapat Sekretaris Daerah Kabupaten Luwu pada, Jumat (4/11/2022)
                        </p>
                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaruBerita1Foto1} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}