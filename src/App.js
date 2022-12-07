import React, { Suspense, lazy } from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/my-style.css'
import Galeri from "./pages/galeri";

const Home = lazy(() => import("./pages/home"));
const Pemerintahan = lazy(() => import("./pages/pemerintahan"));
const Infografis = lazy(() => import("./pages/infografis"));
const Idm = lazy(() => import("./pages/idm"));
const PostDetail = lazy(() => import("./components/berita/PostDetail"));
const Berita = lazy(() => import("./pages/berita"));
const Belanja = lazy(() => import("./pages/belanja"));
const BelanjaDetail = lazy(() => import("./components/belanja/BelanjaDetail"));
const Navbar = lazy(() => import("./components/navbar"));
const Footer = lazy(() => import("./components/footer"));
const ScrollToTop = lazy(() => import("./components/scroll-to-top"));
const Pengaduan = lazy(() => import("./pages/pengaduan"));
const Ppid = lazy(() => import("./pages/ppid/Route.tsx"));
const ProfilPpid = lazy(() => import("./components/ppid/profil-ppid"));
const Geospasial = lazy(() => import("./pages/geospasial"));

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
                    <Route path="/belanja" element={<Belanja />} />
                    <Route path="/belanja/:id" element={<BelanjaDetail />} />
                    <Route path="/ppid/*" element={<Ppid />} />
                    <Route path="/profil-ppid" element={<ProfilPpid />} />
                    <Route path="/pengaduan" element={<Pengaduan />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path="/galeri" element={<Galeri />} />
                </Routes>
            </Suspense>
            <Footer />
        </Fragment>
    );
}

export default App;
