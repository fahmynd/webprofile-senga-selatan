import React, { useEffect } from 'react'
import kesehatanBerita4 from '../../../assets/img/berita/kesehatan-berita4.png'
import kesehatanBerita4Foto1 from '../../../assets/img/berita/kesehatan-berita4-foto1.jpg'

export default function KesehatanBerita4() {
    useEffect(function () {
        document.title = "Desa Senga Selatan Juara Lomba Desa Tangguh dan Desa Sehat Tingkat Kabupaten | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Desa Senga Selatan Juara Lomba Desa Tangguh dan Desa Sehat Tingkat Kabupaten
                        </h1>
                        <p>23 September 2020</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={kesehatanBerita4} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Source: Belopa Info – Luwu. Senin(29/06/2020).
                        </p>
                        <p>
                            Adanya kerjasama untuk membangun desa dan mengharumkan nama baik kampung halaman, serta kolaborasi antara Pemerintah Desa dan Masyarakat, Desa Senga Selatan kembali menjuarai lomba Desa Tangguh dan Desa Sehat tingkat kabupaten.
                        </p>
                        <p>
                            Kepala Desa Senga Selatan Andi Muhammad Arfan Basmin sangat berterimakasih kepada semua elemen masyarakat yang sudah berkolaborasi dengan pemerintah desa dalam upaya mengharumkan nama baik desanya.
                        </p>
                        <p>
                            “Saya ucapkan terima kasih kepada ibu-ibu PKK Desa Senga Selatan, para tokoh masyarakat, para pemuda, staf dan aparat desa serta kepada rekan-rekan BPD Desa Senga Selatan yang tak henti-hentinyanya memberikan semangat dan berpartisipasi dalam kegiatan Desa Senga Selatan,” ucap Arfan.
                        </p>
                        <div className="col-md-12 my-3 text-center">
                            <img className="img-content" src={kesehatanBerita4Foto1} width="90%" alt="Foto Berita" />
                        </div>
                        <p>
                            Di sisi lain, Arfan juga menuturkan bahwa pencapaian yang mereka raih adalah berkat partisipasti semua pihak dalam mengikuti semua tahapan hingga menentukan Desa Senga Selatan terpilih sebagai juara Desa Sehat se-Kabupaten Luwu dan juara Desa Tangguh tingkat Kabupaten.
                        </p>
                        <p>
                            “Alhamdulilah saya sangat terharu melihat hasil kolaborasi di Desa Senga Selatan dengan hasil yang sangat memuaskan. Mereka bekerja siang malam tanpa menghiraukan lelah. Mereka hanya ingin membawa harum kampung halaman dan alhamdulilah semuanya terbayarkan dengan dua kemenangan yang kami raih,” tutup Arfan.
                        </p>
                        <p>
                            Reporter : YSF <br />Editor. : AS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}