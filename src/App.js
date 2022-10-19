import Home from "./pages/home";
import Pemerintahan from "./pages/pemerintahan";
import Infografis from "./pages/infografis";
import Idm from "./pages/idm";
import Berita from "./pages/berita";
import Belanja from "./pages/belanja";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import './assets/css/my-style.css'
import Pengaduan from "./pages/pengaduan";
import Ppid from "./pages/ppid";
import Geospasial from "./pages/geospasial";

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/pemerintahan" element={<Pemerintahan />} />
                <Route path="/infografis" element={<Infografis />} />
                <Route path="/geospasial" element={<Geospasial />} />
                <Route path="/idm" element={<Idm />} />
                <Route path="/berita" element={<Berita />} />
                <Route path="/belanja" element={<Belanja />} />
                <Route path="/ppid" element={<Ppid />} />
                <Route path="/pengaduan" element={<Pengaduan />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
