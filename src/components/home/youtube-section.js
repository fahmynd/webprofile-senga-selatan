import React from 'react'

function YoutubeSection() {
    return (
        <section id="youtubeSection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Youtube</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique saepe hic aut provident aperiam, nostrum repellat ex
                            iste adipisci ut blanditiis dolor
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="tagembed-container" style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                            <div className="tagembed-socialwall" data-wall-id="28083" view-url="https://widget.tagembed.com/28083?view"></div>
                            <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default YoutubeSection