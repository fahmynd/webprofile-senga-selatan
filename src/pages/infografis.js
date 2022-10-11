import { useEffect } from "react";
import React from 'react'
import KontenInfografis from "../components/infografis/konten-infografis";

function Infografis() {
    useEffect(function () {
        document.title = "Infografis";
    }, []);
    return (
        <KontenInfografis />
    )
}

export default Infografis