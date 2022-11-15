import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import pakde from '../../assets/img/bg/bg-konten-jualan.webp'
// import { formatRupiah } from "./format-rupiah";
import { rupiah } from "../helper.min";

export default function Content(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

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
        <>
            <main id="kontenBelanja">
                <section id="headerBelanja">
                    <div className="row justify-content-center mb-3">
                        <div className="col-lg-5 center-v">
                            <p className="jumbo-kontenBelanja">Banyak Keperluan Tapi Malas ke Pasar? <span className="clr-green">Belanja Disini Saja!</span></p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img className="img-kontenBelanja" src={pakde} width="70%" alt='' />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="input-group input-group-lg mb-3" id="wrapSearchBelanja">
                                    <span className="input-group-text" id="searchBelanja">
                                        <i className="fa fa-search"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="cari produk" aria-label="pencarian" aria-describedby="searchBelanja" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section id="kontenBelanja">
                        <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            Semua
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="makanan-tab" data-bs-toggle="tab" data-bs-target="#makanan" type="button" role="tab" aria-controls="makanan" aria-selected="false">
                                            Makanan
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="minuman-tab" data-bs-toggle="tab" data-bs-target="#minuman" type="button" role="tab" aria-controls="minuman" aria-selected="false">
                                            Minuman
                                        </button>
                                    </li>
                                </ul> */}
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row mt-3">
                                            {currentItems.map((belanja) => {
                                                return (
                                                    <Belanja
                                                        key={belanja.id}
                                                        data={belanja}
                                                    />
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="makanan" role="tabpanel" aria-labelledby="makanan-tab">
                                        <div className="row mt-3">
                                            {/* <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                                <div className="card beli-card">
                                                    <img src={makananDonat} className="card-img-top beli-card__img" alt="" />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <p className="beli-card__judul">Donat Bomboloni</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <p className="beli-card__harga">Rp4.000,-</p>
                                                            </div>
                                                            <div className="col-md-12 mb-4">
                                                                <p className="beli-card__detail">
                                                                    Kondisi: Baru, Berat: 100 Gram, Kategori: Makanan, Etalase: Semua Etalase.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-center wrap-button-penjual">
                                                            <a href="https://api.whatsapp.com/send?phone=6281248622527&text=Saya%20Tertarik%20dengan%20jualan%20Anda" target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="minuman" role="tabpanel" aria-labelledby="minuman-tab">
                                        <div className="row mt-3">
                                            {/* <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                                <div className="card beli-card">
                                                    <img src={minumanCendol} className="card-img-top beli-card__img" alt="" />
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <p className="beli-card__judul">Susu Cendol Cheese by Happy99</p>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <p className="beli-card__harga">Rp10.000,-</p>
                                                            </div>
                                                            <div className="col-md-12 mb-4">
                                                                <p className="beli-card__detail">
                                                                    Kondisi: Baru, Berat: 100 Gram, Kategori: Minuman, Etalase: Semua Etalase.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-center wrap-button-penjual">
                                                            <a href="https://api.whatsapp.com/send?phone=6285298313171&text=Saya%20Tertarik%20dengan%20jualan%20Anda" target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
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
                </div>
            </main>
        </>
    );
}

function Belanja(props) {
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card beli-card">
                    <img src={'https://api.digitaldesa.id/uploads/belanja/thumbs/' + props.data.foto} className="card-img-top beli-card__img" alt="" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="beli-card__judul">{props.data.nama}</p>
                            </div>
                            <div className="col-md-12">
                                <p className="beli-card__harga">{rupiah(props.data.harga)}</p>
                            </div>
                            <div className="col-md-12 mb-4">
                                <p className="beli-card__detail">
                                    {props.data.jenis}
                                </p>
                            </div>
                        </div>
                        <div className="text-center wrap-button-penjual">
                            {/* <a href={"https://api.whatsapp.com/send?phone=62" + props.data.notelp + '&text=Saya%20Tertarik%20dengan%20jualan%20Anda'} target="_blank" rel="noreferrer" className="stretched-link btn-penjual__text">Hubungi Penjual</a> */}
                            <Link to={'/belanja/' + props.data.id} className="btn-penjual__text stretched-link"> Lihat Deskripsi</Link>
                        </div>
                    </div>
                    <Link to={'/belanja/' + props.data.id} className="btn-penjual__text stretched-link" />
                </div>
            </div>
        </>
    )
}