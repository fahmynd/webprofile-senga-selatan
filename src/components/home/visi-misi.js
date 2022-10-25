import React from 'react'
import logo from '../../assets/img/logo/sengaselatan.webp'
// import dots from '../../assets/img/bg/dots.webp'
import ShowMoreText from "react-show-more-text";

function VisiMisi() {
    return (
        <section id="visiMisi">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        {/* <h2 className="fw-bold sub-judul">Visi Misi</h2> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-10">
                    <div className="col-md-6 text-center center-v">
                        <img className="center-v" src={logo} alt="" width="70%" />
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="wrap-visi">
                            <h3 className="fw-bold">Visi</h3>
                            <p>
                                "TERWUJUDNYA DESA SENGA SELATAN YANG MANDIRI, KREATIF, BERBUDAYA DAN RELIGIUS"
                            </p>
                        </div>
                        <div className="wrap-misi mt-4" style={{ textAlign: 'justify' }}>
                            <h3 className="fw-bold text-center">Misi</h3>
                            <ShowMoreText lines={5} more="Selengkapnya" less="Sembunyikan">
                                <ol>
                                    <li>Meningkatkan kualitas pendidikan dan keahlian tenaga produktif di Desa Senga Selatan dengan mengadakan pelatihan-pelatihan keterampilan</li>
                                    <li>Meningkatkan kualitas pembangunan infrastruktur Desa yang merata dan berkeadilan</li>
                                    <li>Membangun tradisi pelayanan publik yang prima, terukur dan amanah</li>
                                    <li>Mendorong ditegakkannya hukum, HAM dan kehidupan demokrasi yang sehat berdasarkan rasa keadilan masyarakat</li>
                                    <li>Melestarikan tradisi dan kearifan lokal Tana Luwu dalam satu strategi kebudayaan yang elegan dan visioner</li>
                                    <li>Merajut silaturahmi dan kekompakan diantara sesama warga Desa Senga Selatan melalui wadah kegiatan yang rutin diadakan secara periodik : mingguan ataupun bulanan</li>
                                    <li>Membudayakan dan mengembangkan pengelolaan pelestarian lingkungan alam yang berbasis pada sumber daya alam lokal dan sumber daya manusia</li>
                                    <li>Menjadikan agama dan spiritualitas serta kearifan budaya lokal sebagai sumber inspirasi dan basis nilai utama dalam membangun Desa Senga Selatan secara terencana, holistik, dan berkelanjutan</li>
                                    <li>Menjadikan Desa Senga Selatan sebagai Desa yang asri dan bersih</li>
                                </ol>
                            </ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="bg-dots" src={dots} alt="" /> */}
        </section>
    )
}

export default VisiMisi