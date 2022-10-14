import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

function InstagramSection() {
    return (
        <section id="instagramSection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Instagram</h2>
                        <p>
                        Layanan media sosial yang berisi konten menarik tentang desa baik dari segi potensi desa maupun hal-hal unik lainnya tentang desa
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/CeOejjElDa4/" width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstagramSection