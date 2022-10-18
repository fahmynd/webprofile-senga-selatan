import { useEffect } from "react";
import AdministrasiKeuangan from "../components/home/administrasi-keuangan";
import AdministrasiPenduduk from "../components/home/administrasi-penduduk";
import AdministrasiUmum from "../components/home/administrasi-umum";
import Apbd from "../components/home/apbd";
import BeliDariDesa from "../components/home/beli-dari-desa";
import Berita from "../components/home/berita";
import InfoSingkatDesa from "../components/home/info-singkat-desa";
import InstagramSection from "../components/home/instagram-section";
import JelajahiDesa from "../components/home/jelajahi-desa";
import Jumbotron from "../components/home/jumbotron";
import JumlahSurat from "../components/home/jumlah-surat";
import PetaDesa from "../components/home/peta-desa";
import PotensiDesa from "../components/home/potensi-desa";
import TwitterSection from "../components/home/twitter-section";
import VisiMisi from "../components/home/visi-misi";
import WisataDesa from "../components/home/wisata-desa";
import YoutubeSection from "../components/home/youtube-section";

function Home() {
    useEffect(function () {
        document.title = "Website Profil Desa Senga Selatan";
    }, []);
    return (
        <main className="mb-5">
            <Jumbotron />
            <InfoSingkatDesa />
            <VisiMisi />
            <JelajahiDesa />
            <AdministrasiUmum />
            <AdministrasiKeuangan />
            <AdministrasiPenduduk />
            <JumlahSurat />
            <Apbd />
            <Berita />
            <BeliDariDesa />
            <WisataDesa />
            <PotensiDesa />
            <PetaDesa />
            <YoutubeSection />
            <InstagramSection />
            <TwitterSection />
        </main>
    );
}

export default Home;
