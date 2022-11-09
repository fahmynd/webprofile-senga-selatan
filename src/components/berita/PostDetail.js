import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import htmlToFormattedText from 'html-to-formatted-text'

const PostDetail = () => {
    const { slug } = useParams();
    const [judul, setJudul] = useState();
    const [foto, setFoto] = useState();
    const [date, setDate] = useState();
    const [isi, setIsi] = useState();

    useEffect(() => {
        if (slug) {
            axios.get(`https://profil.digitaldesa.id/sengaselatan-luwu/berita/detail?slug=${slug}`)
                .then((result) => {
                    // console.log(result.data.data);
                    const data = result.data.data;
                    setJudul(data.judul);
                    setFoto(data.foto);
                    setDate(data.iat);
                    setIsi(data.isi);
                })
        }

    }, [slug])

    useEffect(function () {
        document.title = judul + " | Website Resmi Desa Senga Selatan";
    });

    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">{judul}</h1>
                        <p>{date}</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={'https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/' + foto} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            {htmlToFormattedText(isi)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail