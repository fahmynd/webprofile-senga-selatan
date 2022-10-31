import React from 'react'
import pemerintahan from '../../assets/img/lembaga/struktur-pemerintahan.jpg'

function LembagaDesa() {
    return (
        <section id='strukturPemda' className="container">
            <div>
                <h2 className="fw-bold sub-judul text-center mb-5">Struktur Pemerintahan Desa</h2>
            </div>
            <input type="checkbox" id="zoomCheck" />
            <label htmlFor="zoomCheck">
                <img src={pemerintahan} alt='' />
            </label>
            {/* <div className="mt-5">
                <img className='mx-auto d-block' src={pemerintahan} alt="" width='90%' />
            </div> */}
            {/* <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur BPD</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div>
                <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur RT</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div>
                <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur LPMD</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div>
                <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur Karang Taruna</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div>
                <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur Posyandu</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div>
                <div className="container">
                    <h2 className="fw-bold sub-judul text-center">Struktur PKK</h2>
                </div>
                <div className="mt-5">
                    <img className='w-75 mx-auto d-block' src={pemerintahan} alt="" />
                </div> */}
        </section>
    )
}

export default LembagaDesa