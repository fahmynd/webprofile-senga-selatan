import React from 'react'
import { YouTubeEmbed } from 'react-social-media-embed';

function YoutubeSection() {
    return (
        <section id="youtubeSection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Youtube</h2>
                        <p>
                            Layanan berbasis video yang disediakan untuk promosi potensi, pembangunan, dan segala aktivitas lain di desa
                        </p>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=Ja4GDlIIdr4" width={600} height={400} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default YoutubeSection