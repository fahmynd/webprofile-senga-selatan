import { useEffect } from "react";
import React from 'react'
import PetaLokasiDesa from '../components/pemerintahan/peta-lokasi-desa'
// import ProfilPemerintahan from '../components/pemerintahan/profil-pemerintahan'
import InfoSingkatDesa from "../components/home/info-singkat-desa";
import VisiMisi from "../components/home/visi-misi";
import LembagaDesa from "../components/pemerintahan/lembaga-desa";

function Pemerintahan() {
    useEffect(function () {
        document.title = "Profil Desa | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <main>
            {/* <ProfilPemerintahan /> */}
            <InfoSingkatDesa />
            <VisiMisi />
            <LembagaDesa />
            <PetaLokasiDesa />
        </main>
    )
}

export default Pemerintahan