import React from 'react'
import { useEffect } from "react";

function Geospasial() {
    useEffect(function () {
        document.title = "Geospasial | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <iframe title='webgis' src="https://sengaselatan.digitaldesa.id/webgis/index.html" frameBorder="0" height='580px' width='100%' />
        // <iframe title='webgis' src="https://sengaselatan.digitaldesa.id/webgis/index.html" frameBorder="0" style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden', height: '100%', width: '100%', position: 'absolute', top: '67px', left: '0px', right: '0px', bottom: '0px' }} />
    )
}

export default Geospasial