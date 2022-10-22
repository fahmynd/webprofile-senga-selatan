import React, { useEffect } from 'react'
import terbaruBerita2 from '../../../assets/img/berita/terbaru-berita2.jpeg'

export default function TerbaruBerita2() {
    useEffect(function () {
        document.title = "Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan melaksanakan Musyawarah Desa dengan beberapa agenda</h1>
                        <p>20 Oktober 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={terbaruBerita2} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Pemerintah Desa Senga Selatan melaksanakan beberapa agenda dalam Musyawarah Desa (Musdes), pada Jumat (30/9/2022).
                            Adapun agenda yang dilaksanakan adalah :
                        </p>
                        <ol>
                            <li>Musdes III Pembahasan dan Penetapan RKP Desa Berbasis IDM dan SDGs Desa Senga Selatan Tahun 2023.</li>
                            <li>Rembug Stunting</li>
                            <li>Sosialisasi Keterbukaan Informasi Publik dan Desa Cerdas</li>
                            <li>Penyaluran Bantuan Langsung Tunai Dana Desa Triwulan III bulan September Tahun Anggaran 2022.</li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    )
}