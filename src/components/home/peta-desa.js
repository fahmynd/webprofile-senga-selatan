import React from 'react'
import { Link } from 'react-router-dom'

function PetaDesa() {
    return (
        <section id="petaDesa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className="fw-bold sub-judul">Peta Desa</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique saepe hic aut provident aperiam, nostrum repellat ex
                            iste adipisci ut blanditiis dolor
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe title='petaDesa' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=digides&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><Link to="https://putlocker-is.org"></Link><br />
                                <Link to="https://www.embedgooglemap.net">show google map on website</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetaDesa