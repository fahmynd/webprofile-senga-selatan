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
                            <p className="mt-3 bg-opacity p-2 text-light rounded" style={{ textAlign: 'justify' }}>
                                Desa Senga Selatan yang dulunya masih disebut Senga berasal dari kata “senge” yang artinya desa yang dikenang sepanjang masa sebab pada zaman dahulu di desa tersebut terjadi perang antara Cilellang dengan Senge.
                            </p>
                            <p className='p-2 bg-opacity text-light rounded' style={{ textAlign: 'justify' }}>
                                Batas wilayah Desa Senga Selatan adalah, sebelah Utara berbatasan dengan Kelurahan Senga, sebelah Timur berbatasan dengan Teluk Bone, sebelah Selatan berbatasan dengan Desa Kasiwiang, sebelah Barat berbatasan dengan Desa Pasamai.
                            </p>
                            <p className='p-2 bg-opacity text-light rounded' style={{ textAlign: 'justify' }}>
                                Luas wilayah Desa Senga Selatan kurang lebih 11,20 Km². Kondisi geologis wilayah Desa Senga Selatan bervariasi atas relief kasar dan dataran rendah. Lapisan tanah terdiri atas batuan sedimen yang terbentuk atas batu pasir tufaan, batu pasir bersusun andesit, batu lempung, batu lanal, konglomerat dan breksi.
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