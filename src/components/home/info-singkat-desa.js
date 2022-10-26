import React from 'react'
// import logo from '../../assets/img/logo/sengaselatan.webp'
import bgDesa from '../../assets/img/bg/bg-tentang-desa.jpg'

function InfoSingkatDesa() {
    return (
        <section id="infoSingkatDesa">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="vertical-center">
                            {/* <img src={logo} width="70" alt="" /><br /> */}
                            <span className="info-singkat-desa__nama fw-bold center-v bg-opacity p-2 text-light rounded">Sejarah Desa <span id="#namaDesa">Senga Selatan</span></span>
                            <p className="mt-3 bg-opacity p-2 text-light rounded infoDesa" style={{ textAlign: 'justify' }}>
                                Desa Senga Selatan merupakan salah satu Desa yang berada di pesisir pantai Kabupaten Luwu dengan letak wilayah menempati bagian timur dari Kantor Pemerintahan Kabupaten Luwu dan bagian selatan dari Kabupaten Luwu, dengan letak astronomis pada posisi -3.431968 lintang Selatan dan 120.384025 bujur timur. Jarak dari Ibu Kota Provinsi yakni Makassar 319,5 Km.
                            </p>
                            <p className='p-2 bg-opacity text-light rounded infoDesa' style={{ textAlign: 'justify' }}>
                                Konon nama Desa Senga Selatan berasal dari kata “SENGE” yang artinya “Desa yang dikenang sepanjang masa”, sebab pada zaman dahulu di Desa tersebut terjadi perang antara Cilellang dengan Senge. Pada waktu itu, dipimpin oleh salah seorang bangsawan dari Tanah Bugis Saktimandraguna yang Bernama ARUNG PALENNA. Kemudian saat itu, pasukan kerajaan Cilellang dapat terkalahkan oleh kesaktian Arung Palenna dan muncullah kata SENGE (Masengareng) yang tak terlupakan/ terkenang sepanjang masa.
                            </p>
                            <p className='p-2 bg-opacity text-light rounded infoDesa' style={{ textAlign: 'justify' }}>
                                Lahirnya Desa Senga Selatan merupakan hasil pemekaran dari Desa Senga. Desa Senga Selatan terbentuk pada tahun 1999 dengan luas wilayah lebih kurang 11,20 Km². Secara administratif, wilayah Desa Senga Selatan terdiri dari 6 (enam) Dusun. Masing-masing adalah : Dusun Mangaliali. Dusun Kalobang, Dusun Tadette, Dusun Labulawang, Dusun Walenna Barat dan Dusun Walenna Timur.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="bg-tentang-desa" src={bgDesa} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSingkatDesa