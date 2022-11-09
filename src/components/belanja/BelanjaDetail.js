import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
// import { formatRupiah } from "./format-rupiah";

const BelanjaDetail = () => {
    const { id } = useParams();
    const [nama, setNama] = useState();
    const [foto, setFoto] = useState();
    const [isi, setIsi] = useState();
    const [harga, setHarga] = useState();
    const [jenis, setJenis] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`https://profil.digitaldesa.id/sengaselatan-luwu/belanja/detail?id=${id}`)
                .then((result) => {
                    console.log(result.data);
                    const data = result.data.data;
                    setNama(data.nama);
                    setFoto(data.foto);
                    setIsi(data.deskripsi);
                    setHarga(data.harga);
                    setJenis(data.jenis);
                })
        }

    }, [id])

    useEffect(function () {
        document.title = nama + " | Website Resmi Desa Senga Selatan";
    });

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={'https://api.digitaldesa.id/uploads/belanja/thumbs/' + foto} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">Kategori: {jenis}</div>
                        <h1 className="display-5 fw-bolder">{nama}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">Rp {harga},-</span> */}
                            <span>Rp {harga},-</span>
                        </div>
                        <p className="lead">{isi}</p>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary">Batal</button>
                            <button type="button" class="btn btn-primary">Hubungi Penjual</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BelanjaDetail