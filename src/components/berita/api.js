export function newsApi() {
    let url = `https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        });
}