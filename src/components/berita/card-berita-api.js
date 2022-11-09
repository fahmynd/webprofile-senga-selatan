import React, { useEffect, useState } from "react";
import Detail from "./card-berita-pagination";
// import { Link } from "react-router-dom";

const News = () => {
    const url = 'https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists';
    const [news, setNews] = useState([]);

    const getDataNews = async () => {
        const response = await fetch(url);
        const dataBerita = await response.json();
        setNews(dataBerita.data);
        // console.log(news);
    }

    useEffect(() => {
        getDataNews();
    })

    return (
        <Detail data={news} />
    )
}

export default News