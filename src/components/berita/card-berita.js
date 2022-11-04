import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const News = () => {
    const url = 'https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists';
    const [news, setNews] = useState([]);

    const getDataNews = async () => {
        const response = await fetch(url);
        const dataBerita = await response.json();
        setNews(dataBerita.data);
        // console.log(news);
    }

    useEffect(() => {
        getDataNews();
    })

    return (
        <>
            <div className="col-md-12 mb-2">
                <div className="card berita-card berita-card__panjang">
                    <div className="card-body">
                        <div className="row">
                            {news.map((berita) => {
                                return (
                                    <CardNews
                                        key={berita.id}
                                        title={berita.judul}
                                        author={berita.penulis}
                                        description={berita.isi}
                                        image={berita.foto}
                                        date={berita.iat}
                                        slug={berita.slug} />
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CardNews(props) {
    return (
        <>
            <div className="col-md-3 full-col">
                <img src={'https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/' + props.image} className="card-img-top img-berita-panjang" alt="..." />
            </div>
            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                <p className="berita-card__judul berita-card__judul_panjang">
                    {props.title}
                </p>
                <div className="berita-card__info">
                    <p className="berita-card__penulis me-4">
                        <i className="fas fa-user-edit"></i> {props.author}
                    </p>
                    <p className="berita-card__tanggal">
                        <i className="fas fa-calendar-day"></i> {props.date}
                    </p>
                </div>
                <div className="berita-card__isi">
                    <p className="berita-card__shortdesc show-read-more">
                        {props.description}
                    </p>
                </div>
            </div>
        </>

    );
}

export default News