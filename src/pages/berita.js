import { useEffect } from "react";
import React from 'react'
import BlogPost from '../components/berita/card-berita-api'

function Berita() {
    useEffect(function () {
        document.title = "Berita Desa | Website Resmi Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <BlogPost />
        </main>
    )
}

export default Berita