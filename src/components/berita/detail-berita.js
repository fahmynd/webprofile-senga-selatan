import React, { useEffect, useState } from 'react'

function DetailBerita() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getArticles() {
            const request = await fetch(
                'https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists'
            );
            const response = await request.json();
            setArticles(response);
            setLoading(false)
        }
        getArticles();
    }, []);
    return (
        <>
            <div>DetailBerita</div>

            {loading && <i>Loading articles ...</i>}
            {!loading && (
                <div>
                    {articles.map(function (article) {
                        return <article key={article.id}>{article.judul}</article>
                    })}
                </div>
            )}
        </>
    )
}

export default DetailBerita