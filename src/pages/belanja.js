import { useEffect } from "react";
import React from 'react'
import CardBelanja from '../components/belanja/card-belanja-api'

function Belanja() {
    useEffect(function () {
        document.title = "Beli dari Desa | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <CardBelanja />
        </main>

    )
}

export default Belanja