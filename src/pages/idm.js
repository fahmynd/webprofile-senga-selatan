import { useEffect } from "react";
import React from 'react'
import KontenIdm from '../components/idm/konten-idm'

function Idm() {
    useEffect(function () {
        document.title = "IDM";
    }, []);
    return (
        <KontenIdm />
    )
}

export default Idm