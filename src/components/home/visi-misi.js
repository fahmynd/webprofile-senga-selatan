import React from 'react'

function VisiMisi() {
    return (
        <section id="visiMisi">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold sub-judul">Visi Misi</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-10">
                    <div className="col-md-6 text-center center-v">
                        <img className="center-v" src="assets/img/logo/logo-digides.svg" alt="" width="50%" />
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="wrap-visi">
                            <h3 className="fw-bold">Visi</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consectetur magni similique nulla laboriosam, in reprehenderit.
                                Illo a dolores, illum tempore vero iure sit maiores corporis
                                beatae asperiores cumque nam delectus.
                            </p>
                        </div>
                        <div className="wrap-misi mt-4">
                            <h3 className="fw-bold">Misi</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consectetur magni similique nulla laboriosam, in reprehenderit.
                                Illo a dolores, illum tempore vero iure sit maiores corporis
                                beatae asperiores cumque nam delectus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="bg-dots" src="assets/img/bg/dots.png" alt="" />
        </section>
    )
}

export default VisiMisi