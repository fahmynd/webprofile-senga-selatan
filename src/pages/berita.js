import { useEffect } from "react";
import React from 'react'
import KontenBerita from '../components/berita/konten-berita'

function Berita() {
    useEffect(function () {
        document.title = "Berita";
    }, []);
    return (
        <KontenBerita />
    )
}

export default Berita