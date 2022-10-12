import Home from "./pages/home";
import Pemerintahan from "./pages/pemerintahan";
import Infografis from "./pages/infografis";
import Idm from "./pages/idm";
import Berita from "./pages/berita";
import Belanja from "./pages/belanja";
import Galeri from "./pages/galeri";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import './assets/css/my-style.css'

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/pemerintahan" element={<Pemerintahan />} />
                    <Route path="/infografis" element={<Infografis />} />
                    <Route path="/idm" element={<Idm />} />
                    <Route path="/berita" element={<Berita />} />
                    <Route path="/belanja" element={<Belanja />} />
                    <Route path="/galeri-desa" element={<Galeri />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </>
    );
}

export default App;
