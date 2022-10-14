import { useEffect } from "react";
import React from 'react'
import KontenIdm from '../components/idm/konten-idm'

function Idm() {
    useEffect(function () {
        document.title = "Nilai IDM 2022 | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <KontenIdm />
    )
}

export default Idm