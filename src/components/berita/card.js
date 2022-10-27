import React from "react";

function Card({
    foto,
    judul,
    penulis,
    isi,
    iat,
    slug,
}) {
    return (
        <div className="col-md-12 mb-2">
            <div className="card berita-card berita-card__panjang">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 full-col">
                            <img src={foto} className="card-img-top img-berita-panjang" alt="..." />
                        </div>
                        <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                            <p className="berita-card__judul berita-card__judul_panjang">
                                {judul}
                            </p>
                            <div className="berita-card__info">
                                <p className="berita-card__penulis me-4">
                                    <i className="fas fa-user-edit"></i> {penulis}
                                </p>
                                <p className="berita-card__tanggal">
                                    <i className="fas fa-calendar-day"></i> {iat}
                                </p>
                            </div>
                            <div className="berita-card__isi">
                                <p className="berita-card__shortdesc show-read-more">
                                    {isi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={slug} className="stretched-link"></Link>
            </div>
        </div>
    );
}

export default Card;