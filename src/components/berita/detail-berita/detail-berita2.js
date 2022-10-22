import React from 'react'
import berita1 from '../../../assets/img/berita/berita1.webp'

export default function DetailBerita2() {
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemdes Senga Selatan Gelar Musdes II, Pembahasan RKPDesa Berbasis SGDs Desa Tahun 2023</h1>
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
                            Belopainfo — Pemerintah Desa Senga Selatan menggelar Musyawarah Desa (Musdes II) Pembahasan Rancangan Rencana Kerja Pemerintah Desa (RKPDesa) Berbasis SDGs Desa Senga Selatan Tahun 2023. Jumat (12/08/22).
                        </p>
                        <p>
                            Musdes digelar dikantor Desa Senga Selatan, Kecamatan Belopa. Membahas beberapa poin di antaranya, Pencermatan Pagu Indikatif dan Penyelarasan Program, Pencermatan Ulang Dokumen RPJMDesa, Penyusunan Rencana Kegiatan dan RAB.
                        </p>
                        <p>
                            Dalam Musdes tersebut turut hadir Sekretaris Camat Belopa, Agus Salim,  dalam sambutannya ia mengatakan bahwa dalam Musdes II, semua elemen kelembagaan desa harus memberikan data yang akurat mengenai usulan pembangunan yang akan dilakukan di tahun 2023 nantinya.
                        </p>
                        <p>
                            "Jadilah pelopor pembangunan desa yang profesional tidak hanya sekadar mengusulkan program berdasarkan kemauan, tatapi mengusulkan program berbasis data yang sesuai dengan kebutuhan desa yang harus menjadi prioritas,"imbuhnya.
                        </p>
                        <p>
                            Sementara itu, Pejabat Pelaksana Anwar Amir mengatakan dalam Musdes II ini, pengusulan program yang benar-benar prioritas untuk dilaksanakan di tahun 2023, begitupun dengan program yang sebelumnya tertunda agar di program ulang.
                        </p>
                        <p>
                            "Semoga hasil dari Musdes II nantinya dapat bermanfaat untuk kita semua, semoga pembangunan di Desa Kadong-Kadong dapat lebih baik kedepannya,"tutupnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}