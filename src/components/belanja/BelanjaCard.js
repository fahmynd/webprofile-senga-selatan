import React from 'react'
import { formatRupiah } from "./format-rupiah";

export const BelanjaCard = (props) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card beli-card">
                <img src={'https://api.digitaldesa.id/uploads/belanja/thumbs/' + props.image} className="card-img-top beli-card__img" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                <div className="card-body">
                    <div className="row" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div className="col-md-12">
                            <p className="beli-card__judul">{props.title}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="beli-card__harga">Rp {formatRupiah(props.price)},-</p>
                        </div>
                        <div className="col-md-12 mb-4">
                            <p className="beli-card__detail">
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className="text-center wrap-button-penjual">
                        <a href={"https://api.whatsapp.com/send?phone=62" + props.phone + '&text=Saya%20Tertarik%20dengan%20jualan%20Anda'} target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
