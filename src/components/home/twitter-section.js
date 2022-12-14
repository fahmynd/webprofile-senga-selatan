import React from 'react'
import { TwitterEmbed } from 'react-social-media-embed'

function TwitterSection() {
    return (
        <section id="twitterSection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Twitter</h2>
                        <p>
                        Layanan yang berguna untuk memperluas promosi dan jejaring desa di dunia digital
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TwitterEmbed url="https://twitter.com/pemdessengasel/status/1494228523392724998" width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwitterSection