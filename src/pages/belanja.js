import { useEffect } from "react";
import React from 'react'
import KontenBelanja from '../components/belanja/konten-belanja'

function Belanja() {
    useEffect(function () {
        document.title = "Belanja";
    }, []);
    return (
        <KontenBelanja />
    )
}

export default Belanja