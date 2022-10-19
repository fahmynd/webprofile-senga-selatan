import React from 'react'
import { useEffect } from "react";

function Ppid() {
    useEffect(function () {
        document.title = "PPID | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <iframe title='ppid' src="https://profil.digitaldesa.id/sengaselatan-luwu/ppid?plainpage" frameBorder="0" height='1600px' width='100%' scrolling='no' />
        // <iframe title='ppid' src="https://profil.digitaldesa.id/sengaselatan-luwu/ppid?plainpage" frameBorder="0"
        //     style={{ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden', height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px' }}
        // />
    )
}

export default Ppid