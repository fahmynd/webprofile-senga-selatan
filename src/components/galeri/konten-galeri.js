import React from 'react'

function KontenGaleri() {
    return (
        <section id="kontenGaleri">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="fw-bold mt-4">Galeri Desa</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="grid-gallery">
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/200/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/300/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/400/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/500/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/600/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/200/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/300/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/400/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    src="https://picsum.photos/500/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KontenGaleri