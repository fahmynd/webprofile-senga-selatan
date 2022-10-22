import React from 'react'
import berita1 from '../../../assets/img/berita/berita1.webp'

export default function DetailBerita1() {
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan Salurkan BLT DD Triwulan ke III Kepada 121 Penerima</h1>
                        <p>15 Agustus 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={berita1} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-3 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Belopainfo — Pemerintah Desa Senga Selatan melakukan penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Triwulan III bulan Juli—Agustus Tahun Anggaran 2022. Penyaluran tersebut diberikan kepada 121 Keluarga Penerima Manfaat di Kantor Desa Senga Selatan. Kamis (04/08/22).
                        </p>

                        <p>
                            Adapun kegiatan ini dihadiri oleh Kapolsek Belopa, Sekcam Belopa, Pendamping Desa Kecamatan Belopa, Babinsa Desa Senga Selatan, Perangkat Desa Senga Selatan dan Keluarga Penerima Manfaat Bantuan Langsung Tunai Dana Desa (BLT-DD).
                        </p>
                        <p>
                            Sekretaris Camat Belopa, Agus Salim berharap BLT DD triwulan yang disalurkan dapat dimanfaatkan oleh penerima manfaat dengan baik, sebab bantuan BLT DD untuk memberikan kemudahan pada masyarakat selama masa pandemi Covid-19.
                        </p>
                        <p>
                            “Semoga BLT DD triwulan ke III ini dapat dimanfaatkan dengan baik, untuk memenuhi kebutuhan pokok atau bisa juga sebagai moda usaha kecil-kecilan agar dapat bermanfaat,” imbuhnya.
                        </p>
                        <p>
                            Sementara itu Penjabat Pelaksana Kepala Desa Senga Selatan Anwar Amir juga mengingatkan kepada masyarakat penerima manfaat bahwa penyaluran BLT DD akan berakhir di tahun 2022.
                        </p>
                        <p>
                            “Bantuan BLT itu hanya diperuntikkan di masa pandemi saja, jika 2023 sudah tidak ada lagi Covid-19, bantuan BLT juga sudah tidak disalurkan lagi, jadi bagi yang menerima manfaat hari ini gunakan bantuan sebagaimana mestinya,” ujarnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}