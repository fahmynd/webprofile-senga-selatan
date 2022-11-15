import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { rupiah } from "../helper.min";
// import { formatRupiah } from "../../components/belanja/format-rupiah";

export default function BeliDariDesa(props) {
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

        <section id="beliDariDesa">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Beli dari Desa</h2>
                        <p>
                            Layanan yang disediakan promosi produk UMKM Desa sehingga mampu meningkatkan perekonomian masyarakat desa
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <section id="kontenBelanja">
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12">
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
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="minuman" role="tabpanel" aria-labelledby="minuman-tab">
                                    <div className="row mt-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <Link to="/belanja" className="btn btn-outline-secondary">Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </section>
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