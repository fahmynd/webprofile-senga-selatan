import { Fragment } from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactShowMoreText from "react-show-more-text";
import { Link } from 'react-router-dom'
import htmlToFormattedText from 'html-to-formatted-text'
import { tgl_indo } from "../helper.min";

export default function Berita(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
            <section id="berita">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h2 className="fw-bold sub-judul">Berita Utama</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-4">
                                        {Object.entries(currentItems).map((post, i) => {
                                            if (!i) {
                                                return (
                                                    <MainCards key={post.id} data={post[1]} />
                                                )
                                            }

                                            return false
                                        })
                                        }
                                        <div className="col-md-12 col-lg-7">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h3 className="fw-bold">Berita Terbaru</h3>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <Link className="link-selengkapnya" to="/berita">Selengkapnya</Link>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                {Object.entries(currentItems).map((post, i) => {
                                                    if (i) {
                                                        return (
                                                            <Cards key={post.id} data={post[1]} />
                                                        )
                                                    }

                                                    return false
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

function Cards(props) {
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
                                        <i className="fas fa-calendar-day"></i> {tgl_indo(props.data.iat)}
                                    </p>
                                </div>
                                <div className="berita-card__isi">
                                    <ReactShowMoreText className="berita-card__shortdesc" lines={3} more={false} truncatedEndingComponent=' . . .'>
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

function MainCards(props) {
    return (
        <Fragment>
            <div className="col-md-12 col-lg-5 mb-5">
                <div className="card berita-card">
                    <img src={'https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/' + props.data.foto} className="card-img-top img-berita" alt="" />
                    <div className="card-body">
                        <p className="berita-card__judul">
                            {props.data.judul}
                        </p>
                        <div className="berita-card__info">
                            <p className="berita-card__penulis me-4">
                                <i className="fas fa-user-edit"></i> {props.data.penulis}
                            </p>
                            <p className="berita-card__tanggal">
                                <i className="fas fa-calendar-day"></i> {tgl_indo(props.data.iat)}
                            </p>
                        </div>
                        <div className="berita-card__isi">
                            <ReactShowMoreText className="berita-card__shortdesc" lines={3} more={false} truncatedEndingComponent=' . . .'>
                                <p className="berita-card__shortdesc show-read-more">
                                    {htmlToFormattedText(props.data.isi)}
                                </p>
                            </ReactShowMoreText>
                        </div>
                    </div>
                    <Link to={'/berita/' + props.data.slug} style={{ cursor: 'pointer' }} className="stretched-link" ></Link>
                </div>
            </div>
        </Fragment>
    )
}
