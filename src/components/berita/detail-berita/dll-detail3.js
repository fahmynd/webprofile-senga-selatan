import React, { useEffect } from 'react'
import dllBerita3 from '../../../assets/img/berita/dll-berita3.jpeg'

export default function DllBerita3() {
    useEffect(function () {
        document.title = "Lindungi Pantai Taddette, Pemerintah Desa Senga Selatan Bersama PT.MDA Menggelar Bakti Sosial Gerakan Tanam Sejuta Pohon Mangrove | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Lindungi Pantai Taddette, Pemerintah Desa Senga Selatan Bersama PT.MDA Menggelar Bakti Sosial Gerakan Tanam Sejuta Pohon Mangrove
                        </h1>
                        <p>07 Juni 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={dllBerita3} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            BELOPA, Pilarnewsonline.com – PT.Masmindo Dwi Area (MDA) bersama Pemerintah Desa Senga Selatan menggelar bakti sosial Gerakan tanam sejuta pohon Mangrove di pesisir Pantai Taddette Desa Senga Selatan Kecamatan Belopa Kabupaten Luwu, pada Senin (6/6/2022)
                        </p>
                        <p>
                            Penanaman tersebut diprakarsai oleh PT.Masmindo Dwi Area dan dihadiri oleh Kapolres Luwu, Camat Belopa, Kapolsek Belopa ,Danramil Belopa, Pemerintah dan aparat Desa Senga Selatan serta Para Penggiat aktivis Lingkungan hidup Kabupaten Luwu.
                        </p>
                        <p>
                            Melalui Tribrata News. Kapolres Luwu AKBP Fajar Dani Susanto,SIK,MH mengatakan bahwa untuk bakti sosial penanaman sejuta pohon mangrove di pesisir pantai Tadette Desa senga selatan Belopa, dilaksanakan dalam rangka menyambut hari ulang tahun Polri yang ke-76 tahun, tepat pada tanggal 1 Juli 2022 yang akan datang.
                        </p>
                        <p>
                            “selain melindungi Pantai dan empang para warga Taddatte, Pohon mangrove memiliki fungsi mengendapkan lumpur di akar-akar pohon bakau, sehingga dapat mencegah terjadinya Intrusi Air laut ke daratan, serta mencegah Erosi dan Abrasi Pantai.” Ujar Fajar
                        </p>
                        <p>
                            Salah satu Tokoh masyarakat Desa Senga Selatan, Abdul Samad sangat mendukung kegiatan PT.MDA bersama Pemdes dan Polres Luwu dalam kegiatan tersebut. “Erosi merupakan pengikisan permukaan tanah oleh aliran air sedangkan abrasi merupakan pengikisan permukaan tanah akibat hempasan ombak laut,” tutur Abdul Samad
                        </p>
                        <p>
                            “Sudah cocok dan sangat bagus PT.MDA dan pemerintah setempat melaksanakan kegiatan bakti sosial berupa penanaman sejuta pohon mangrove, karena itu sangat membantu warga Desa, khususnya warga dusun Taddette yang memiliki empang akan terlindungi oleh Mangrove dalam waktu panjang.” Ucap Tokoh Masyarakat desa setempat (pn/al)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}