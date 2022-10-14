import { useEffect } from "react";
import React from 'react'
import PetaLokasiDesa from '../components/pemerintahan/peta-lokasi-desa'
import ProfilPemerintahan from '../components/pemerintahan/profil-pemerintahan'
import VisiMisi from '../components/pemerintahan/visi-misi'

function Pemerintahan() {
    useEffect(function () {
        document.title = "Aparat Pemerintah | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <>
            <ProfilPemerintahan />
            <PetaLokasiDesa />
            <VisiMisi />
        </>
    )
}

export default Pemerintahan