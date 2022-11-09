import React, { useEffect, useState } from "react";
import Content from "./card-belanja-pagination";

const Pasar = () => {
    const url = 'https://profil.digitaldesa.id/sengaselatan-luwu/belanja/lists';
    const [pasar, setPasar] = useState([]);

    const getDataPasar = async () => {
        const response = await fetch(url);
        const dataPasar = await response.json();
        setPasar(dataPasar.data);
        // console.log(pasar);
    }

    useEffect(() => {
        getDataPasar();
    })

    return (
        <Content data={pasar} />
    )
}

export default Pasar