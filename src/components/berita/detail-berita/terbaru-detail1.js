import React, { useEffect } from 'react'
import terbaruBerita1 from '../../../assets/img/berita/terbaru-berita1.jpeg'
import terbaruBerita1Foto1 from '../../../assets/img/berita/terbaru-berita1-foto1.jpeg'
import terbaruBerita1Foto2 from '../../../assets/img/berita/terbaru-berita1-foto2.jpeg'
import terbaruBerita1Foto3 from '../../../assets/img/berita/terbaru-berita1-foto3.jpeg'

export default function TerbaruBerita1() {
    useEffect(function () {
        document.title = "Kepala Desa Senga Selatan mengadakan Rakor terkait Peta Lokasi Kawasan Hutan Lindung | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Kepala Desa Senga Selatan mengadakan Rakor terkait Peta Lokasi Kawasan Hutan Lindung</h1>
                        <p>20 Oktober 2022</p>
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
                            Koordinasi dengan UPT-KPH Latimojong Dinas Kehutanan Pemprov Sulsel terkait Peta Lokasi Kawasan Hutan Lindung Mangrove di wilayah Desa Senga Selatan, Kecamatan Belopa, Kabupaten Luwu, Kamis, 20 Oktober 2022.
                        </p>

                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaruBerita1Foto1} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaruBerita1Foto2} width="90%" alt="Foto Berita" />
                            <img className="img-content" src={terbaruBerita1Foto3} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}