import React, { Fragment } from 'react'
import htmlToFormattedText from 'html-to-formatted-text'
import ReactShowMoreText from 'react-show-more-text'
import { Link } from 'react-router-dom'

export const Post = (props) => {
    return (
        <Fragment>
            <div className="col-md-12 mb-2">
                <div className="card berita-card berita-card__panjang">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 full-col">
                                <img src={'https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/' + props.data.foto} className="card-img-top img-berita-panjang" alt="..." />
                            </div>
                            <div className="col-md-9 pt-2 pb-2 pe-4 ps-4">
                                <p className="berita-card__judul berita-card__judul_panjang">
                                    {props.data.judul}
                                </p>
                                <div className="berita-card__info">
                                    <p className="berita-card__penulis me-4">
                                        <i className="fas fa-user-edit"></i> {props.data.penulis}
                                    </p>
                                    <p className="berita-card__tanggal">
                                        <i className="fas fa-calendar-day"></i> {props.data.iat}
                                    </p>
                                </div>
                                <div className="berita-card__isi">
                                    <ReactShowMoreText className="berita-card__shortdesc" lines={4} more={false} truncatedEndingComponent=' . . .'>
                                        <p className="berita-card__shortdesc show-read-more">
                                            {htmlToFormattedText(props.data.isi)}
                                        </p>
                                    </ReactShowMoreText>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={'/berita/' + props.data.slug} style={{ cursor: 'pointer' }} className="stretched-link" ></Link>
                </div>
            </div>
        </Fragment>
    )
}
