import React from 'react'

function Galeri() {
    return (
        <section id="galeri">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Berbagai Momen</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique saepe hic aut provident aperiam, nostrum repellat ex
                            iste adipisci ut blanditiis dolor
                        </p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-12">
                        <div className="grid-gallery">
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/200/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/300/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/400/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/500/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/600/400?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/200/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/300/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/400/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="item-gallery">
                                <img
                                    alt=''
                                    src="https://picsum.photos/500/500?random=3"
                                    data-toggle="lightbox"
                                    data-remote="https://picsum.photos/1280/768?random=3"
                                    className="img-fluid"
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

export default Galeri