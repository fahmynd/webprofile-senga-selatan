import React, { useEffect } from 'react'
import kesehatanBerita2 from '../../../assets/img/berita/kesehatan-berita2.jpeg'

export default function KesehatanBerita2() {
    useEffect(function () {
        document.title = "Masuk Kantor Desa Senga Selatan Harus Scan QR Code PeduliLindungi, Apa Manfaatnya? | Website Profil Desa Senga Selatan";
    }, []);
    return (
        <div className="container">
            <div className="konten" itemScope itemType="http://schema.org/Blog">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 style={{ fontSize: '1.75rem' }} itemProp="name">Masuk Kantor Desa Senga Selatan Harus Scan QR Code PeduliLindungi, Apa Manfaatnya?</h1>
                        <p>03 Februari 2022</p>
                    </div>
                    <div className="col-md-12 mt-2 text-center">
                        <img className="img-content" src={kesehatanBerita2} width="70%" alt="Foto Berita" />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="isi-konten" itemProp="description">
                        <p>
                            Sebagai langkah penerapan disiplin protokol kesehatan (prokes), Pemerintah Desa Senga Selatan telah menerapkan ketentuan scan Quick Response (QR) Code menggunakan aplikasi PeduliLindungi dan dipasang di pintu atau akses masuk kantor.
                        </p>
                        <p>
                            Demikian disampaikan Penjabat Kepala Desa Senga Selatan, Anwar Amir diruang kerja Kepala Desa Senga Selatan usai melakukan uji coba pemasangan banner QR Code Pedulilindungi.
                        </p>
                        <p>
                            Menurutnya ada beberapa manfaat yang diperoleh dengan diterapkannya mekanisme QR Code PeduliLindungi ini. Pertama, pihaknya dapat mengatur kepadatan maksimal pengunjung yang diperbolehkan masuk untuk mendukung penerapan prokes dan menekan penyebaran Covid-19.
                        </p>
                        <p>
                            "Aplikasi ini juga terkoneksi dengan data pemeriksaan Covid-19 dan vaksinasi nasional, sehingga bisa langsung diketahui status tiap individu yang berkunjung, cukup dengan memindai poster QR Code lewat aplikasi PeduliLindungi yang bisa diunduh di Playstore," terang Anwar.
                        </p>
                        <p>
                            Anwar pun menjelaskan bahwa terdapat 4 kategori yang akan muncul di gawai para pengunjung setelah memindai QR Code tersebut. Kategori ini diwakili dengan notifikasi warna hijau, kuning, merah dan hitam.
                        </p>
                        <p>
                            Warna hijau menandakan jika pengunjung sudah ikut vaksinasi tahap dua dan diperbolehkan masuk. Kuning artinya baru ikut vaksin pertama, diperbolehkan masuk setelah verifikasi lebih lanjut oleh petugas dan diwajibkan menjalankan prokes ketat. Lalu warna merah berarti belum vaksin atau terdata sebagai kontak erat sehingga tidak diperbolehkan masuk. Terakhir warna hitam yang artinya pengunjung tersebut terkonfirmasi positif Covid-19 dan tentu saja dilarang keras masuk ke ruangan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}