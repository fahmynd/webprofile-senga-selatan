import { useEffect } from "react";
import React from 'react'
import KontenPengaduan from '../components/pengaduan/konten-pengaduan'

function Pengaduan() {
    useEffect(function () {
        document.title = "Pengaduan Masyarakat | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <KontenPengaduan />
    )
}

export default Pengaduan