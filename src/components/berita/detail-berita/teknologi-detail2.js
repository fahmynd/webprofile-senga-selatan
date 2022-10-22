import React, { useEffect } from 'react'
import teknologiBerita2 from '../../../assets/img/berita/teknologi-berita2.jpeg'

export default function TeknologiBerita2() {
    useEffect(function () {
        document.title = "Launching Buku Tamu & Anjungan Digital Desa Senga Selatan, Basmin: Tak Ada Kata Terlambat Untuk Transformasi | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Launching Buku Tamu & Anjungan Digital Desa Senga Selatan, Basmin: Tak Ada Kata Terlambat Untuk Transformasi
                        </h1>
                        <p>10 Februari 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={teknologiBerita2} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Pemerintah Desa Senga Selatan melakukan launching buku tamu digital dan anjungan digital desa di aula rumah jabatan Bupati Luwu, Desa Pammanu, Kecamatan Belopa Utara, Rabu (09/02/2022).
                        </p>
                        <p>
                            Penjabat Kepala Desa Senga Selatan, Anwar Amir dalam laporannya menyampaikan bahwa program digital desa ini digagas oleh Kepala Desa Senga Selatan Periode 2019-2021, Andi Muhammad Arfan Basmin.
                        </p>
                        <p>
                            "Desa Senga Selatan sendiri sudah menerapkan digitalisasi desa sejak Tahun 2020, diantaranya layanan aplikasi warga desa untuk pengurusan administrasi yang mana sangat membantu memudahkan masyarakat dalam memperoleh pelayanan," ungkap Anwar.
                        </p>
                        <p>
                            Founder PT. Digides, Kasman Suherman dalam sambutannya menyampaikan sudah 500 desa di seluruh Indonesia yang menerapkan digital desa melalui Digides dan sekitar 5000 desa sudah bermohon untuk difasilitasi.
                        </p>
                        <p>
                            "Desa Senga Selatan merupakan desa yang pertama di Sulawesi Selatan yang melaunching Anjungan Digital Desa dan bersiap untuk inovasi-inovasi selanjutnya menuju smart village atau desa cerdas," tutup Kasman.
                        </p>
                        <p>
                            Sementara itu, Bupati Luwu, Dr. H. Basmin Mattayang dalam sambutannya mengapresiasi langkah Pemerintah Desa Senga Selatan yang menerapkan digitalisasi desa dan berharap dapat disusul oleh desa-desa lain.
                        </p>
                        <p>
                            "Era globalisasi menuntut kita lebih jeli, lebih cerdas dan lebih inovatif dalam menghadapi fenomena-fenomena yang terjadi. Saya salut kepada Pemerintah Desa Senga Selatan yang mampu menjawab tantangan itu," tutup Basmin.
                        </p>
                        <p>
                            Lebih lanjut Basmin mengatakan bahwa Pemerintah Kabupaten Luwu telah mencanangkan internet desa yang akan direalisasikan pada tahun ini. Hal ini diharapkan dapat memacu desa untuk dapat terus berinovasi.
                        </p>
                        <p>
                            Usai melaunching, Basmin Mattayang bersama sejumlah kepala OPD mencoba penggunaan buku tamu digital yang telah terintegrasi dengan KTP, serta melakukan permintaan pelayanan administrasi melalui anjungan digital yang hasilnya dapat langsung tercetak.
                        </p>
                        <p>
                            Untuk diketahui saat ini Digides memiliki 6 fitur utama yaitu administrasi desa, pelayanan desa, perpajakan (PBB-P2), bantuan sosial, website profil desa, aplikasi android, Andi Smart, absensi dan buku tamu yang saling terintegrasi.
                        </p>
                        <p>
                            Turut hadir dalam kegiatan ini, Ketua Forum Kabupaten Sehat Kab.Luwu, Dr. Hj. Hayarna Basmin, Inspektur Daerah Kab. Luwu Andi Palanggi, Kepala DPMD H. Bustan, Kepala BPKD Moh. Arsal Arsyad serta sejumlah Kepala Desa dan tokoh masyarakat Desa Senga Selatan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}