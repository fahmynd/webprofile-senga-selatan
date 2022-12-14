import React from 'react'
import logo from '../../assets/img/logo/sengaselatan.webp'

function ProfilPemerintahan() {
    return (
        <section id="profilPemerintahan">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 center-v">
                        <h2 className="fw-bold">Desa Senga Selatan</h2>
                        <p className="fs-6">
                            Senga Selatan adalah desa yang berada di kecamatan Belopa, Kabupaten Luwu, Sulawesi Selatan, Indonesia.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={logo} alt="" width="80%" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilPemerintahan