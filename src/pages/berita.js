import { useEffect } from "react";
import React from 'react'
import KontenBerita from '../components/berita/konten-berita'

function Berita() {
    useEffect(function () {
        document.title = "Berita Desa | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <KontenBerita />
        </main>
    )
}

export default Berita