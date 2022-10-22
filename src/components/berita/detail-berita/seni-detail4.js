import React, { useEffect } from 'react'
import seniBerita4 from '../../../assets/img/berita/seni-berita4.jpg'

export default function SeniBerita4() {
    useEffect(function () {
        document.title = "Pemdes Senga Selatan Raih Predikat Badan Publik Desa Informatif | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan Raih Predikat Badan Publik Desa Informatif
                        </h1>
                        <p>02 Februari 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={seniBerita4} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Penerapan keterbukaan informasi publik pada Pemerintah Desa Senga Selatan  mendapat apresiasi dari Komisi Informasi Provinsi Sulawesi Selatan. Kali ini, Pemerintah Desa Senga Selatan meraih predikat tertinggi sebagai Badan Publik Desa Informatif.
                        </p>
                        <p>
                            Penghargaan tersebut diserahkan Sekretaris Daerah Provinsi Sulawesi Selatan, Dr. Abdul Hayat Gani pada Penganugerahan Keterbukaan Informasi Publik Tahun 2021 yang diselenggarakan Komisi Informasi Provinsi Sulawesi Selatan sebagai puncak pelaksanaan Monitoring dan Evaluasi Keterbukaan Informasi Publik di The Rinra Hotel Makassar (Macora 2) Jl. Metro Tanjung Bunga, Rabu (15/12/2021).
                        </p>
                        <p>
                            Untuk diketahui, sebelum penganugerahan ini setiap badan publik yang menjadi peserta telah melalui tahapan pengisian Self Assesment Questionnaire (SAQ), kemudian melakukan presentasi dihadapan Komisioner KI Prov. Sulawesi Selatan dan juga visitasi Badan Publik.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}