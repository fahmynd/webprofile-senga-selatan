import { useEffect } from "react";
import React from 'react'
import KontenBerita from '../components/berita/konten-berita'

function Berita() {
    useEffect(function () {
        document.title = "Berita Desa | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <KontenBerita />
    )
}

export default Berita