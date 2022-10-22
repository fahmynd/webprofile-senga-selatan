import React, { useEffect } from 'react'
import seniBerita2 from '../../../assets/img/berita/seni-berita2.jpg'
import seniBerita2Foto1 from '../../../assets/img/berita/seni-berita2-foto1.jpg'

export default function SeniBerita2() {
    useEffect(function () {
        document.title = "Pemdes Senga Selatan Juara 2 Lomba Festival Layang-layang Hias Polres Luwu | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan Juara 2 Lomba Festival Layang-layang Hias Polres Luwu
                        </h1>
                        <p>27 Juni 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={seniBerita2} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Belopainfo — Pemerintah Desa Senga Selatan juara 2 pada Festival layang-layang hias yang diadakan oleh Polres Luwu dalam rangka memperingati Hari Bhayangkara Ke – 76 di Mapolres Luwu, Minggu (19/6/22)
                        </p>
                        <p>
                            Polres Luwu dalam memperingati hari Bayangkara ke-76 menggelar beberapa event salah satunya adalah Festival layang-layang hias yang dilaksanakan di Desa Senga Selatan, Kecamatan Belopa.
                        </p>
                        <p>
                            Ada beberapa hal yang menjadi kriteria penilaian, diantaranya adalah bentuk dan tingkat kerumitan, kerapian dan kesesuaian tema, ukuran, kreativitas, durasi terbang, kemampuan menaikkan dan menurunkan layang-layang serta kekompakan tim.
                        </p>
                        <p>
                            Penjabat Sementara Kepala Desa Senga Selatan, Anwar Amir mengatakan, dari kriteria penilaian yang sudah ditentukan oleh penyelenggara, Pemdes Senga Selatan meraih juara dua dengan beberapa poin penilaian yang menjadi parameter penilaian tim juri.
                        </p>
                        <p>
                            “Alhamdulillah dapat juara 2, ini semua atas kerjasama tim yang baik, semangat dan kebersamaan untuk mengikuti festival layang-layang yang digelar Polres Luwu,” ujar Anwar Amir.
                        </p>
                        <div className="col-md-12 my-3 text-center">
                            <img className="img-content" src={seniBerita2Foto1} width="90%" alt="Foto Berita" />
                        </div>
                        <p>
                            Pemerintah Desa Senga Selatan berharap kegiatan ini juga dapat menjadi event kegiatan tahunan yang dapat diselenggarakan di Pelabuhan Taddette, Desa Senga Selatan.
                        </p>
                        <p>
                            “Kegiatan ini sangat direspon positif bagi masyarakat khususnya di Desa Senga Selatan, kehadiran kegiatan ini mengingatkan masa kanak-kanak yang saat ini sangat jarang lagi terlihat dimainkan,” ujar Sekretaris Desa Senga Selatan Herni Bte Suardi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}