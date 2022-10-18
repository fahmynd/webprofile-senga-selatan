import { useEffect } from "react";
import React from 'react'
import KontenSaran from '../components/saran/konten-saran'

function Saran() {
    useEffect(function () {
        document.title = "Pengaduan | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <KontenSaran />
    )
}

export default Saran