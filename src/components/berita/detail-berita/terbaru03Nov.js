import React, { useEffect } from 'react'
import terbaruBerita1 from '../../../assets/img/berita/terbaru03Nov.jpeg'

export default function Terbaru03Nov() {
    useEffect(function () {
        document.title = "Desa Senga Selatan, Luwu Wakili Sulsel Lomba KIP | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Desa Senga Selatan, Luwu Wakili Sulsel Lomba KIP</h1>
                        <p>03 November 2022</p>
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
                            Eksposindo.com | Setelah berhasil meraih predikat badan publik desa informatif dalam kegiatan monitoring, evaluasi dan pemeringkatan keterbukaan informasi publik pemerintah desa yang diselenggarakan Komisi Informasi Sulawesi Selatan pada tahun 2021 lalu, Desa Senga Selatan yang terletak di Kecamatan Belopa, Kabupaten Luwu, melaju ke ajang Evaluasi dan Apresiasi Keterbukaan Informasi Publik  Desa tingkat nasional tahun 2022.
                        </p>
                        <p>
                            Gubernur Sulsel, Andi Sudirman Sulaiman dalam video dukungan terhadap tiga desa di Sulsel yang akan mengikuti lomba KIP menyatakan dukungan penuh terhadap tiga desa yakni desa Senga Selatan, Desa Bana yang ada di Bone, Desa Ganra yang ada di Soppeng.
                        </p>
                        <p>
                            “Memberi dukungan penuh untuk tiga desa yang mewakili sulawesi selatan mengikuti lomba keterbukaan informasi publik, semoga desa kita mampu bersaing dditingkat nasional sebagai desa yang terbuka dan informatif,” ujarnya dalam video yang diterima awak media, Rabu 2 November 2022.
                        </p>
                        <p>
                            Sementara itu, Penjabat Kepala Desa Senga Selatan, Anwar Amir mengatakan, Pemerintah Desa Senga Selatan sangat mengapresiasi berbagai dukungan dari semua pihak.
                        </p>
                        <p>
                            Ia menjelaskan jika pencapaian Desa Senga selatan saat ini tidak lepas dari dukungan semua pihak, termasuk kepala desa sebelumnya dan dari Stakeholder terkait.
                        </p>
                        <p>
                            “Hal ini merupakan hasil dari kolaborasi bersama antara pemerintah daerah, provinsi dan kepala desa sebelumnya serta mendapat dukungan penuh dari masyarakat Desa Senga Selatan serta stakeholder terkait,” ujarnya. (*
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}