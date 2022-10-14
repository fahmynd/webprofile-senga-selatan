import { useEffect } from "react";
import React from 'react'
import KontenBelanja from '../components/belanja/konten-belanja'

function Belanja() {
    useEffect(function () {
        document.title = "Beli dari Desa | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <KontenBelanja />
    )
}

export default Belanja