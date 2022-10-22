import React, { useEffect } from 'react'
import seniBerita3 from '../../../assets/img/berita/seni-berita3.jpeg'

export default function SeniBerita3() {
    useEffect(function () {
        document.title = "Pembukan Lomba Adzan dan Tilawatil Qur’an II Tingkat Desa Senga Selatan | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pembukan Lomba Adzan dan Tilawatil Qur’an II Tingkat Desa Senga Selatan
                        </h1>
                        <p>26 April 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={seniBerita3} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Belopainfo —— Bulan Suci Ramadan bulan penuh keberkahan, memperbanyak ibadah, amalan dan hal-hal yang berkaitan dengan keagamaan sebagai bentuk penyempurnaan puasa bagi setiap umat Islam.
                        </p>
                        <p>
                            Pemerintah Desa Senga Selatan Bersama dengan Karang Taruna bekerjasama dalam melaksanakan kegiatan lomba Adzan dan Tilawatil Quran tingkat Desa Senga Selatan. Kegiatan ini merupakan yang ke dua kalinya yang sebelumnya juga di laksanakan di area Kampung Kuliner Kampung Pakde.
                        </p>
                        <p>
                            Ketua Karang Taruna Desa Senga Selatan Muhammad Suaib Sukri menyampaikan bahwa kegiatan ini adalah untuk mengaktualisasikan potensi generasi milenial yang ada di Desa Senga Selatan. Pada kegiatan ini diangkat sebuah tema yaitu, “Melahirkan generasi-generasi emas dalam menciptakan Desa Senga Selatan sebagai Desa Religius”.“Kita berharap kegiatan ini dapat menciptakan generasi yang berprestasi khususnya dalam bidang keagamaan,” kata Muhammad Suaib Sukri dalam sambutannya. Senin (25/04/22).</p>
                        <p>
                            Sekretaris Komisi I DPRD Kabupaten Luwu Andi Muhammad Arfan Basmin dalam sambutannya mengatakan bahwa untuk melahirkan generasi emas di desa harus diawali dengan kegiatan kecil seperti ini.
                        </p>
                        <p>
                            Ia yang merupakan mantan Kepala Desa Senga selatan memberikan wejangan bahwa kegiatan Lomba Adzan dan Tilawatil Qur’an sudah dua kali diadakan, ini merupakan agenda kegiatan yang harus dilakukan karena memiliki nilai positif bagi keberlangsungan para generasi.
                        </p>
                        <p>
                            Arfan menyampaikan kepada para pengurus untuk mengadakan program rutin yaitu menyelenggarakan lomba Adzan dan Tilawatil Qur’an yang dirangkaikan dengan pawai obor yang dilaksanakan pada tiap diakhir ramadan dan dilakukan pawai obor saat malam takbiran.
                        </p>
                        <p>
                            “Ini sudah menjadi program rutin yang selalu dilaksanakan di akhir ramadan, kegiatan ini juga untuk mempererat hubungan silaturahmi
                            dan menjaga keluarga Senga Selatan agar tetap harmonis,” imbuh Arfan.
                        </p>
                        <p>
                            Angga sapaan akrabnya juga menekankan kepada masyarakat agar peserta yang menjadi juara agar tetap dilibatkan dalam kegiatan-kegiatan keagamaan yang dilakukan di Desa sehingga kegiatan ini dapat berkesinambungan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}