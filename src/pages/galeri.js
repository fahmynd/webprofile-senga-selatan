import { useEffect } from "react";
import React from 'react'
import KontenGaleri from '../components/galeri/konten-galeri'

function Galeri() {
    useEffect(function () {
        document.title = "Galeri | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <KontenGaleri />
    )
}

export default Galeri