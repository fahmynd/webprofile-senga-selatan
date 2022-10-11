import React from 'react'

function Jumbotron() {
    return (
        <section id="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 clr-white">
                        <div className="vertical-center">
                            <h2>Desa Senga Selatan</h2>
                            <p className="fs-6">
                                Assalamu'alaikum warahmatullahi wabarakatuh.
                                <p>Selamat Datang di “Website Desa Senga Selatan“, melalui website ini kami berupaya menghadirkan informasi seputar kegiatan dan program Desa Senga Selatan“, Kecamatan Belopa, Kabupaten Luwu, Prov. Sulawesi Selatan.</p>
                                <p>Website ini kami hadirkan untuk mengikuti perkembangan dunia Teknologi Informasi (IT) yang kian pesat. Lahir dari sebuah ide kreatif dan inovatif, serta merupakan sebuah terobosan kami untuk lebih mendekatkan diri kepada masyarakat luas. Kami berupaya agar informasi tentang Desa Senga Selatan menjadi lebih terbuka dan interaktif.</p>
                                Kami sampaikan terima kasih kepada semua pihak yang telah banyak memberikan bantuan, dukungan dan kontribusi, baik berupa tenaga, pemikiran dan dorongan semangat, hingga Website ini dapat terealisasi. Semoga dengan adanya Website ini dapat bermanfaat dan menjadi salah satu upaya peningkatan pelayanan Desa Senga Selatan.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7 text-center d-none d-lg-block">
                        <div className="wrapper-foto-pakde">
                            <img src="assets/img/foto-pakde.png" alt="" width="55%" />
                        </div>
                        <div className="masking"></div>
                        <div className="wrapper-info-pakde">
                            <span className="info-pakde__nama">Anwar Amir, S.Sos</span> <br />
                            <span className="info-pakde__jabatan">Kepala Desa Senga Selatan</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron