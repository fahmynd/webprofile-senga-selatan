import { useEffect } from "react";
import React from 'react'
import KontenBelanja from '../components/belanja/konten-belanja'

function Belanja() {
    useEffect(function () {
        document.title = "Beli dari Desa | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <KontenBelanja />
        </main>
        
    )
}

export default Belanja