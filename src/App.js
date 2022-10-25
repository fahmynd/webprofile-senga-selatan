import Home from "./pages/home";
import Pemerintahan from "./pages/pemerintahan";
import Infografis from "./pages/infografis";
import Idm from "./pages/idm";
import Berita from "./pages/berita";
import Belanja from "./pages/belanja";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import './assets/css/my-style.css'
import Pengaduan from "./pages/pengaduan";
import Ppid from "./pages/ppid";
import Geospasial from "./pages/geospasial";
import TerbaruBerita1 from "./components/berita/detail-berita/terbaru-detail1";
import TerbaruBerita2 from "./components/berita/detail-berita/terbaru-detail2";
import TerbaruBerita3 from "./components/berita/detail-berita/terbaru-detail3";
import TerbaruBerita4 from "./components/berita/detail-berita/terbaru-detail4";
import PolitikBerita2 from "./components/berita/detail-berita/politik-detail2";
import PolitikBerita3 from "./components/berita/detail-berita/politik-detail3";
import PolitikBerita4 from "./components/berita/detail-berita/politik-detail4";
import KesehatanBerita2 from "./components/berita/detail-berita/kesehatan-detail2";
import KesehatanBerita3 from "./components/berita/detail-berita/kesehatan-detail3";
import KesehatanBerita4 from "./components/berita/detail-berita/kesehatan-detail4";
import SeniBerita1 from "./components/berita/detail-berita/seni-detail1";
import SeniBerita2 from "./components/berita/detail-berita/seni-detail2";
import SeniBerita3 from "./components/berita/detail-berita/seni-detail3";
import SeniBerita4 from "./components/berita/detail-berita/seni-detail4";
import TeknologiBerita1 from "./components/berita/detail-berita/teknologi-detail1";
import TeknologiBerita2 from "./components/berita/detail-berita/teknologi-detail2";
import DllBerita1 from "./components/berita/detail-berita/dll-detail1";
import DllBerita2 from "./components/berita/detail-berita/dll-detail2";
import DllBerita3 from "./components/berita/detail-berita/dll-detail3";
import DllBerita4 from "./components/berita/detail-berita/dll-detail4";

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profil-desa" element={<Pemerintahan />} />
                <Route path="/infografis" element={<Infografis />} />
                <Route path="/geospasial" element={<Geospasial />} />
                <Route path="/idm" element={<Idm />} />
                <Route path="/berita" element={<Berita />} />
                <Route path="/berita/kepala-desa-senga-selatan-mengadakan-rakor-terkait-peta-lokasi-kawasan-hutan-lindung" element={<TerbaruBerita1 />} />
                <Route path="/pemdes-senga-selatan-melaksanakan-musyawarah-desa-dengan-beberapa-agenda" element={<TerbaruBerita2 />} />
                <Route path="/pemerintah-desa-senga-selatan-salurkan-insentif-pegawai-syara-kader-posyandu-kader-pkb-dll" element={<TerbaruBerita3 />} />
                <Route path="/pendaftaran-tanah-sistematis-lengkap-ptsl-tahun-2022-desa-senga-selatan" element={<TerbaruBerita4 />} />
                <Route path="/pemdes-senga-selatan-gelar-musdes-ii-pembahasan-rkpdesa-berbasis-sgds-desa-tahun-2023" element={<PolitikBerita2 />} />
                <Route path="/rumah-adhyaksa-kejari-luwu-dideklarasikan-di-desa-senga-selatan" element={<PolitikBerita3 />} />
                <Route path="/anwar-amir-jabat-pj-kepala-desa-senga-selatan" element={<PolitikBerita4 />} />
                <Route path="/masuk-kantor-desa-senga-selatan-harus-scan-qr-code-pedulilindungi-apa-manfaatnya" element={<KesehatanBerita2 />} />
                <Route path="/basmin-tinjau-wisata-vaksin-desa-senga-selatan" element={<KesehatanBerita3 />} />
                <Route path="/desa-senga-selatan-juara-lomba-desa-tangguh-dan-desa-sehat-tingkat-kabupaten" element={<KesehatanBerita4 />} />
                <Route path="/desa-senga-selatan-juara-i-pada-lomba-inovasi-daerah-tingkat-desa-kelurahan-se-kabupaten-luwu" element={<SeniBerita1 />} />
                <Route path="/pemdes-senga-selatan-juara-2-lomba-festival-layang-layang-hias-polres-luwu" element={<SeniBerita2 />} />
                <Route path="/pembukan-lomba-adzan-dan-tilawatil-quran-ii-tingkat-desa-senga-selatan" element={<SeniBerita3 />} />
                <Route path="/pemdes-senga-selatan-raih-predikat-badan-publik-desa-informatif" element={<SeniBerita4 />} />
                <Route path="/pemkab-luwu-upayakan-hadirnya-duta-digital" element={<TeknologiBerita1 />} />
                <Route path="/launching-buku-tamu--anjungan-digital-desa-senga-selatan-basmin-tak-ada-kata-terlambat-untuk-transformasi" element={<TeknologiBerita2 />} />
                <Route path="/senga-selatan-yang-dikenang" element={<DllBerita1 />} />
                <Route path="/rapat-koordinasi-tahapan-evaluasi-dan-apresiasi-kip-desa-tingkat-nasional-2022" element={<DllBerita2 />} />
                <Route path="/lindungi-pantai-taddette-pemerintah-desa-senga-selatan-bersama-ptmda-menggelar-bakti-sosial-gerakan-tanam-sejuta-pohon-mangrove" element={<DllBerita3 />} />
                <Route path="/menunggu-hasil-pemdes-senga-selatan-ikuti-penilaian-akhir-lomba-inovasi-desa" element={<DllBerita4 />} />
                <Route path="/belanja" element={<Belanja />} />
                <Route path="/ppid" element={<Ppid />} />
                <Route path="/pengaduan" element={<Pengaduan />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
