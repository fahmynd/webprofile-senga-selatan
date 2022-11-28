import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import './BelanjaDetail.css'
import { rupiah } from '../helper.min';
// import { formatRupiah } from "./format-rupiah";

const BelanjaDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nama, setNama] = useState();
    const [foto, setFoto] = useState();
    const [isi, setIsi] = useState();
    const [harga, setHarga] = useState();
    const [jenis, setJenis] = useState();
    const [telp, setTelp] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`https://profil.digitaldesa.id/sengaselatan-luwu/belanja/detail?id=${id}`)
                .then((result) => {
                    // console.log(result.data);
                    const data = result.data.data;
                    setNama(data.nama);
                    setFoto(data.foto);
                    setIsi(data.deskripsi);
                    setHarga(data.harga);
                    setJenis(data.jenis);
                    setTelp(data.notelp);
                })
        }

    }, [id])

    useEffect(function () {
        document.title = nama + " | Website Resmi Desa Senga Selatan";
    });

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center beli-card-detail">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={'https://api.digitaldesa.id/uploads/belanja/thumbs/' + foto} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">Kategori: <strong>{jenis}</strong></div>
                            <h1 className="display-6 fw-bolder">{nama}</h1>
                            <div className="fs-5 mb-5">
                                {/* <span className="text-decoration-line-through">Rp {harga},-</span> */}
                                <span>{rupiah(harga)}</span>
                            </div>
                            <p className="lead">{isi}</p>
                            <div className="justify-content-start mt-4 mb-4">
                                <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Batal</button>
                                <button type="button" className="btn btn-default"><a href={"https://api.whatsapp.com/send?phone=62" + telp + '&text=Saya%20Tertarik%20dengan%20jualan%20Anda'} target="_blank" rel="noreferrer" className='btn-penjual__text'>Hubungi Penjual</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BelanjaDetail