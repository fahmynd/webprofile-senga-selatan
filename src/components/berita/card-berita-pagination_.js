import { Fragment } from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactShowMoreText from "react-show-more-text";
import { Link } from 'react-router-dom'
import htmlToFormattedText from 'html-to-formatted-text'
import terbaru04Nov from '../../assets/img/berita/terbaru04Nov.jpeg'

export default function Detail(props) {
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
            <section id="kontenBerita">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h2 className="fw-bold mt-4">Berita</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            Terbaru
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="politik-tab" data-bs-toggle="tab" data-bs-target="#politik" type="button" role="tab" aria-controls="politik" aria-selected="false">
                                            Politik
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="kesehatan-tab" data-bs-toggle="tab" data-bs-target="#kesehatan" type="button" role="tab" aria-controls="kesehatan" aria-selected="false">
                                            Kesehatan
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="seni-tab" data-bs-toggle="tab" data-bs-target="#seni" type="button" role="tab" aria-controls="seni" aria-selected="false">
                                            Seni
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="teknologi-tab" data-bs-toggle="tab" data-bs-target="#teknologi" type="button" role="tab" aria-controls="teknologi" aria-selected="false">
                                            Teknologi
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="dll-tab" data-bs-toggle="tab" data-bs-target="#dll" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                            dll
                                        </button>
                                    </li>
                                </ul> */}
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-4">
                                        <div className="col-md-12 col-lg-5 mb-5">
                                            <div className="card berita-card">
                                                <img src={terbaru04Nov} className="card-img-top img-berita" alt="" />
                                                <div className="card-body">
                                                    <p className="berita-card__judul">
                                                        Pemdes Senga Selatan mengikut Rapat Koordinasi Pelaksanaan Lomba Inovasi Daerah Tahun 2023
                                                    </p>
                                                    <div className="berita-card__info">
                                                        <p className="berita-card__penulis me-4">
                                                            <i className="fas fa-user-edit"></i> Admin
                                                        </p>
                                                        <p className="berita-card__tanggal">
                                                            <i className="fas fa-calendar-day"></i> 04 November 2022
                                                        </p>
                                                    </div>
                                                    <div className="berita-card__isi">
                                                        <p className="berita-card__shortdesc show-read-more">
                                                            Rapat Koordinasi dalam rangka pelaksanaan Kompetisi Inovasi Pelayanan Publik di Lingkungan Kementerian/ Lembaga, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah Tahun 2023 di ...
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link to="pemdes-senga-selatan-mengikut-rapat-koordinasi-pelaksanaan-lomba-inovasi-daerah-tahun-2023" className="stretched-link"></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-7">
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
                <ReactPaginate
                    className="pagination justify-content-center"
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
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
                                        <i className="fas fa-calendar-day"></i> {props.data.iat}
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