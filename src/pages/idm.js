import { useEffect } from "react";
import React from 'react'
import KontenIdm from '../components/idm/konten-idm'

function Idm() {
    useEffect(function () {
        document.title = "Nilai IDM 2022 | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <KontenIdm />
        </main>
    )
}

export default Idm