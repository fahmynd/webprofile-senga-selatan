import React, { Suspense, lazy } from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/my-style.css'

const Home = lazy(() => import("./pages/home"));
const Pemerintahan = lazy(() => import("./pages/pemerintahan"));
const Infografis = lazy(() => import("./pages/infografis"));
const Idm = lazy(() => import("./pages/idm"));
const PostDetail = lazy(() => import("./components/berita/PostDetail"));
const Berita = lazy(() => import("./pages/berita"));
// const BelanjaItem = lazy(() => import("./components/belanja/BelanjaItem"));
const Belanja = lazy(() => import("./pages/belanja"));
const BelanjaDetail = lazy(() => import("./components/belanja/BelanjaDetail"));
const Navbar = lazy(() => import("./components/navbar"));
const Footer = lazy(() => import("./components/footer"));
const ScrollToTop = lazy(() => import("./components/scroll-to-top"));
const Pengaduan = lazy(() => import("./pages/pengaduan"));
const Ppid = lazy(() => import("./pages/ppid/Route.tsx"));
const ProfilPpid = lazy(() => import("./components/ppid/profil-ppid"));
const Geospasial = lazy(() => import("./pages/geospasial"));
// const TerbaruBerita1 = lazy(() => import("./components/berita/detail-berita/terbaru-detail1"));
// const TerbaruBerita2 = lazy(() => import("./components/berita/detail-berita/terbaru-detail2"));
// const TerbaruBerita3 = lazy(() => import("./components/berita/detail-berita/terbaru-detail3"));
// const TerbaruBerita4 = lazy(() => import("./components/berita/detail-berita/terbaru-detail4"));
// const PolitikBerita2 = lazy(() => import("./components/berita/detail-berita/politik-detail2"));
// const PolitikBerita3 = lazy(() => import("./components/berita/detail-berita/politik-detail3"));
// const PolitikBerita4 = lazy(() => import("./components/berita/detail-berita/politik-detail4"));
// const KesehatanBerita2 = lazy(() => import("./components/berita/detail-berita/kesehatan-detail2"));
// const KesehatanBerita3 = lazy(() => import("./components/berita/detail-berita/kesehatan-detail3"));
// const KesehatanBerita4 = lazy(() => import("./components/berita/detail-berita/kesehatan-detail4"));
// const SeniBerita1 = lazy(() => import("./components/berita/detail-berita/seni-detail1"));
// const SeniBerita2 = lazy(() => import("./components/berita/detail-berita/seni-detail2"));
// const SeniBerita3 = lazy(() => import("./components/berita/detail-berita/seni-detail3"));
// const SeniBerita4 = lazy(() => import("./components/berita/detail-berita/seni-detail4"));
// const TeknologiBerita1 = lazy(() => import("./components/berita/detail-berita/teknologi-detail1"));
// const TeknologiBerita2 = lazy(() => import("./components/berita/detail-berita/teknologi-detail2"));
// const DllBerita1 = lazy(() => import("./components/berita/detail-berita/dll-detail1"));
// const DllBerita2 = lazy(() => import("./components/berita/detail-berita/dll-detail2"));
// const DllBerita3 = lazy(() => import("./components/berita/detail-berita/dll-detail3"));
// const DllBerita4 = lazy(() => import("./components/berita/detail-berita/dll-detail4"));
// const Terbaru = lazy(() => import("./components/berita/detail-berita/terbaru"));
// const Terbaru31Nov = lazy(() => import("./components/berita/detail-berita/terbaru31Nov"));
// const Terbaru03Nov = lazy(() => import("./components/berita/detail-berita/terbaru03Nov"));
// const Terbaru04Nov = lazy(() => import("./components/berita/detail-berita/terbaru04Nov"));

function App() {
    return (
        <Fragment>
            <Navbar />
            <ScrollToTop />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/profil-desa" element={<Pemerintahan />} />
                    <Route path="/infografis" element={<Infografis />} />
                    <Route path="/geospasial" element={<Geospasial />} />
                    <Route path="/idm" element={<Idm />} />
                    <Route path="/berita" element={<Berita />} />
                    <Route path="/berita/:slug" element={<PostDetail />} />
                    {/* <Route path="/berita/*">
                        <Route path="pemdes-senga-selatan-mengikut-rapat-koordinasi-pelaksanaan-lomba-inovasi-daerah-tahun-2023" element={<Terbaru04Nov />} />
                        <Route path="desa-senga-selatan-luwu-wakili-sulsel-lomba-kip" element={<Terbaru03Nov />} />
                        <Route path="senga-selatan-wakili-sulsel-di-ajang-apresiasi-kip-desa-tingkat-nasional" element={<Terbaru31Nov />} />
                        <Route path="pemdes-senga-selatan-mengikuti-rakor-persiapan-kegiatan-evaluasi-dan-apresiasi-kip-nasional-2022" element={<Terbaru />} />
                        <Route path="kepala-desa-senga-selatan-mengadakan-rakor-terkait-peta-lokasi-kawasan-hutan-lindung" element={<TerbaruBerita1 />} />
                        <Route path="pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" element={<TerbaruBerita2 />} />
                        <Route path="pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" element={<TerbaruBerita3 />} />
                        <Route path="pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" element={<TerbaruBerita4 />} />
                        <Route path="pemdes-senga-selatan-gelar-musdes-ii-pembahasan-rkpdesa-berbasis-sgds-desa-tahun-2023" element={<PolitikBerita2 />} />
                        <Route path="rumah-adhyaksa-kejari-luwu-dideklarasikan-di-desa-senga-selatan" element={<PolitikBerita3 />} />
                        <Route path="anwar-amir-jabat-pj-kepala-desa-senga-selatan" element={<PolitikBerita4 />} />
                        <Route path="masuk-kantor-desa-senga-selatan-harus-scan-qr-code-pedulilindungi-apa-manfaatnya" element={<KesehatanBerita2 />} />
                        <Route path="basmin-tinjau-wisata-vaksin-desa-senga-selatan" element={<KesehatanBerita3 />} />
                        <Route path="desa-senga-selatan-juara-lomba-desa-tangguh-dan-desa-sehat-tingkat-kabupaten" element={<KesehatanBerita4 />} />
                        <Route path="desa-senga-selatan-juara-i-pada-lomba-inovasi-daerah-tingkat-desa-kelurahan-se-kabupaten-luwu" element={<SeniBerita1 />} />
                        <Route path="pemdes-senga-selatan-juara-2-lomba-festival-layang-layang-hias-polres-luwu" element={<SeniBerita2 />} />
                        <Route path="pembukan-lomba-adzan-dan-tilawatil-quran-ii-tingkat-desa-senga-selatan" element={<SeniBerita3 />} />
                        <Route path="pemdes-senga-selatan-raih-predikat-badan-publik-desa-informatif" element={<SeniBerita4 />} />
                        <Route path="pemkab-luwu-upayakan-hadirnya-duta-digital" element={<TeknologiBerita1 />} />
                        <Route path="launching-buku-tamu--anjungan-digital-desa-senga-selatan-basmin-tak-ada-kata-terlambat-untuk-transformasi" element={<TeknologiBerita2 />} />
                        <Route path="senga-selatan-yang-dikenang" element={<DllBerita1 />} />
                        <Route path="rapat-koordinasi-tahapan-evaluasi-dan-apresiasi-kip-desa-tingkat-nasional-2022" element={<DllBerita2 />} />
                        <Route path="lindungi-pantai-taddette-pemerintah-desa-senga-selatan-bersama-ptmda-menggelar-bakti-sosial-gerakan-tanam-sejuta-pohon-mangrove" element={<DllBerita3 />} />
                        <Route path="menunggu-hasil-pemdes-senga-selatan-ikuti-penilaian-akhir-lomba-inovasi-desa" element={<DllBerita4 />} />
                    </Route> */}
                    <Route path="/belanja" element={<Belanja />} />
                    <Route path="/belanja/:id" element={<BelanjaDetail />} />
                    <Route path="/ppid/*" element={<Ppid />} />
                    <Route path="/profil-ppid" element={<ProfilPpid />} />
                    <Route path="/pengaduan" element={<Pengaduan />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
            <Footer />
        </Fragment>
    );
}

export default App;
