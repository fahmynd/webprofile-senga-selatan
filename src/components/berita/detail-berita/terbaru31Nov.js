import React, { useEffect } from 'react'
import terbaruBerita1 from '../../../assets/img/berita/terbaru31Nov.jpeg'
import terbaru1 from '../../../assets/img/berita/terbaru31NovFoto1.jpeg'

export default function Terbaru31Nov() {
    useEffect(function () {
        document.title = "Senga Selatan Wakili Sulsel di Ajang Apresiasi KIP Desa Tingkat Nasional | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Senga Selatan Wakili Sulsel di Ajang Apresiasi KIP Desa Tingkat Nasional</h1>
                        <p>31 Oktober 2022</p>
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
                            Belopainfo — Setelah berhasil meraih predikat badan publik desa informatif dalam kegiatan monitoring, evaluasi dan pemeringkatan keterbukaan informasi publik pemerintah desa yang diselenggarakan Komisi Informasi Sulawesi Selatan pada tahun 2021 lalu, Desa Senga Selatan yang terletak di Kecamatan Belopa, Kabupaten Luwu, melaju ke ajang Evaluasi dan Apresiasi Keterbukaan Informasi Publik  Desa tingkat nasional tahun 2022.
                        </p>
                        <p>
                            Evaluasi dan Apresiasi KIP Desa dimaksud, dihelat oleh Komisi Informasi Pusat bekerja sama dengan Kementerian Desa, yang puncak penganugerahannya digelar pada 8 Desember 2022.
                        </p>
                        <p>
                            Sekaitan dengan hal tersebut, Komisioner Komisi Informasi Provinsi Sulawesi Selatan, Benny Mansjur bersama staf Sekretariat KI Sulsel, Weni Sawitri dan  Fadly Afrianto, melakukan monitoring kinerja layanan keterbukaan informasi publik di Desa Senga Selatan, Senin (31/10/2022).
                        </p>
                        <p>
                            Kepada media ini, Benny Mansjur mengatakan, dalam dua tahun terakhir, Komisi Informasi Sulsel telah melakukan monitoring dan evaluasi implementasi keterbukaan informasi publik berdasarkan ketentuan perundang-undangan di tingkatan pemerintah desa se-Sulawesi Selatan.
                        </p>
                        <p>
                            “Hasil  monev dan pemeringkatan KIP Desa yang kami laksanakan di tahun 2021 lalu, Desa Senga Selatan bersama dua desa lainnya, telah meraih predikat Badan Publik Desa Informatif. Dan sebagai tindaklanjutnya, ketiga desa tersebut, termasuk Desa Senga Selatan, kami rekomendasikan mewakili Provinsi Sulawesi Selatan ke ajang Evaluasi dan Apresiasi KIP Desa tingkat nasional tahun 2022,” jelas Benny Mansjur.
                        </p>
                        <p>
                            Untuk memastikan kesiapan ketiga desa terpilih dalam ajang tersebut, lanjutnya, Komisi Informasi Sulsel melakukan monitoring dan pendampingan.
                        </p>
                        <p>
                            “Kunjungan kami ini bertujuan memastikan kondisi faktual layanan informasi publik sekaligus memastikan dan memotivasi kesiapan Pemerintah Desa Senga Selatan. Tentunya, dengan harapan dapat menjadi terbaik dalam ajang Evaluasi dan Apresiasi KIP Desa tingkat nasional di tahun 2022 ini,” jelasnya lagi.
                        </p>
                        <p>
                            Sementara itu, Penjabat Kepala Desa Senga Selatan, Anwar Amir mengatakan, Pemerintah Desa Senga Selatan sangat mengapresiasi kunjungan monitoring dan pendampingan Komisioner Komisi Informasi Sulsel beserta Stafnya.
                        </p>
                        <p>
                            “Kunjungan ini merupakan wujud komitmen Komisi Informasi Sulsel dalam mendorong implementasi keterbukaan informasi publik di lingkup pemerintah desa secara optimal dan regulatif. Dan semoga di ajang evaluasi dan apresiasi KIP Desa tingkat nasional tahun 2022 ini, Pemerintah Desa Senga Selatan masuk nominasi sepuluh besar Desa Informatif di Indonesia,” harap Anwar Amir.
                        </p>

                        <div className="col-md-12 mt-2 text-center">
                            <img className="img-content" src={terbaru1} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}