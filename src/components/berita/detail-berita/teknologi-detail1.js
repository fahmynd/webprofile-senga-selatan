import React, { useEffect } from 'react'
import teknologiBerita1 from '../../../assets/img/berita/teknologi-berita1.png'

export default function TeknologiBerita1() {
    useEffect(function () {
        document.title = "Pemkab. Luwu Upayakan Hadirnya Duta Digital | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Pemkab. Luwu Upayakan Hadirnya Duta Digital
                        </h1>
                        <p>18 Februari 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={teknologiBerita1} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Pemerintah Kabupaten Luwu mengupayakan hadirnya duta digital dari Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi sebagai pelopor desa cerdas melalui penerimaan duta digital 2022.
                        </p>
                        <p>
                            Duta Digital adalah Personil yang berkedudukan di kabupaten dan bertugas mendampingi pelaksanaan program Desa Cerdas di 4 – 6 desa lokasi program Desa Cerdas, Duta Digital bertugas melakukan koordinasi, sosialisasi dan advokasi serta melakukan pendampingan penyusunan rencana kerja dan implementasi pelaksanaan Pembangunan Desa Cerdas bersama Kader Digital di lokasi Program Desa Cerdas.
                        </p>
                        <p>
                            Duta Digital juga melakukan pendampingan dalam prioritas kegiatan peningkatan literasi digital dan program pemberdayaan digital melalui ruang komunitas digital desa termasuk diantaranya menjalin kemitraan dan inovasi desa sesuai dengan kebutuhan lokal desa.
                        </p>
                        <p>
                            Ditahun ini, Kabupaten Luwu memperoleh kuota sebanyak 4 orang, sehingga diharapkan putra-putri daerah dapat mengikuti seleksi ini dengan memenuhi persyaratan mengenai seleksi penerimaan duta digital 2022 dapat dilihat pada website https://rekrutmendutadigital.kemendesa.go.id/.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}