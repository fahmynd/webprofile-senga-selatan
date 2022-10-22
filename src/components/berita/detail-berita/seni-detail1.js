import React, { useEffect } from 'react'
import seniBerita1 from '../../../assets/img/berita/seni-berita1.jpeg'
import seniBerita1Foto1 from '../../../assets/img/berita/seni-berita1-foto1.jpeg'
import seniBerita1Foto2 from '../../../assets/img/berita/seni-berita1-foto2.jpeg'

export default function SeniBerita1() {
    useEffect(function () {
        document.title = "Desa Senga Selatan Juara I pada Lomba Inovasi Daerah Tingkat Desa /Kelurahan Se-Kabupaten Luwu | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Desa Senga Selatan Juara I pada Lomba Inovasi Daerah Tingkat Desa /Kelurahan Se-Kabupaten Luwu
                        </h1>
                        <p>18 Agustus 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={seniBerita1} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            <div className="col-md-12 mt-10 mb-3 text-center">
                                <img className="img-content" src={seniBerita1Foto1} width="90%" alt="Foto Berita" />
                            </div>
                        </p>
                        <p>
                            Belopainfo — Desa Senga Selatan mendapat hadiah penghargaan dan sertifikat dari Bupati Luwu, Dr. H. Basmin Mattayang atas pencapaian pada lomba Inovasi Daerah Tingkat Desa atau Kelurahan se-Kabupaten Luwu.
                        </p>
                        <p>
                            Penghargaan tersebut diserahkan langsung oleh Bupati Luwu di Rumah Jabatan, Kecamatan Belopa Utara, Rabu, 17 Agustus 2022 kemarin. Desa Senga Selatan terpilih menjadi juara I dengan Inovasi DILAN SMART (Digitalisasi Layanan Smart), Desa Tampa juara 2 inovasi Pengembangan Budidaya Cani Kammu, dan Desa Sampano terpilih sebagai juara 3 dengan inovasi Sistem Informasi dan Layanan Digital (Siladi Desa).
                        </p>
                        <p>
                            Dihadiri Sekretaris Desa Senga Selatan, Herni Bte Suardi dan Kepala Urusan Umum dan Perencanaan, Prasetyo Sallo, terpilihnya Desa Senga Selatan sebagai juara lomba inovasi daerah tingkat desa atau kelurahan bukan untuk mendapatkan hadiah atau nama, melainkan betul-betul bekerja dari bawah, bekerja sama dengan berbagai pihak terkhususnya masyarakat Desa Senga Selatan untuk mengembangkan desa.
                        </p>
                        <p>
                            "Tujuan utama kami mengikuti lomba bukan karena hadiahnya apalagi untuk mencari nama, tapi kami mengikuti lomba untuk dijadikan evaluasi, sejauh mana tingkat keberhasilan inovasi kami di desa dan seperti apa manfaatnya untuk pemerintah Desa dan masyarakat Desa Senga Selatan," ujar
                        </p>
                        <p>
                            Dari lomba ini, Pemerintah Desa  bisa terus berbenah dari beberapa kritikan-kritikan para juri dalam lomba inovasi daerah tingkat desa atau kelurahan ini dapat memberikan sebuah gagasan baru untuk menjadikan Desa Senga Selatan menjadi lebih baik lagi kedepannya.
                        </p>
                        <p>
                            Selain itu, Herni juga mengucapkan terima kasih kepada Pemerintah Daerah dalam hal ini Bupati Luwu dan Ketua TP-PKK Kabupaten Luwu atas arahannya untuk mendorong pengembangkan inovasi-inovasi yang ada di 207 desa di Kabupaten Luwu.
                        </p>
                        <p>
                            "Terima kasih kepada pemerintah daerah yang selalu mendukung kegiatan kami di Desa Senga Selatan, seluruh aparat desa dan masyarakat desa yang selalu mendukung program pemerintah desa dalam inovasi dan tetap menjaga kegotong royongan," ucapnya
                        </p>
                        <p>
                            Sementara itu, dari beberapa pencapaian Desa Senga Selatan, tak lepas dari konsep atau gagasan yang telah dibangun oleh Andi Muhammad Arfan Basmin, Kepala Desa Senga Selatan sebelum ia mejabat sebagai Anggota DPRD Kabupaten Luwu.
                        </p>
                        <p>
                            "Terkhusus pada kepala desa kami sebelumnya, Andi Muhammad Arfan Basmin yang telah meletakkan dasar-dasar inovasi di Desa Senga Selatan Terima Kasih, pencapaian ini kami dedikasikan kepadanya dan masyarakat Desa Senga Selatan," tutupnya.
                        </p>
                        <div className="col-md-12 my-3 text-center">
                            <img className="img-content" src={seniBerita1Foto2} width="90%" alt="Foto Berita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}