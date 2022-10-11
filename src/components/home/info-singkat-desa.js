import React from 'react'

function InfoSingkatDesa() {
    return (
        <section id="infoSingkatDesa">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="vertical-center">
                            <img src="assets/img/logo/logo-digides.png" width="70" alt="" />
                            <span className="info-singkat-desa__nama fw-bold center-v">Desa <span id="#namaDesa">DIGIDES</span></span>
                            <p className="mt-3">
                                Praesent sapien massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla quis lorem ut libero malesuada feugiat. Quisque
                                velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
                                lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia
                                eget consectetur sed, convallis at tellus. <br />
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Donec sollicitudin molestie malesuada. Donec rutrum congue
                                leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.
                            </p>
                            <p>
                                Praesent sapien massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla quis lorem ut libero malesuada feugiat. Quisque
                                velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
                                lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia
                                eget consectetur sed, convallis at tellus. <br />
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Donec sollicitudin molestie malesuada. Donec rutrum congue
                                leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="bg-tentang-desa" src="assets/img/bg/bg-tentang-desa.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSingkatDesa