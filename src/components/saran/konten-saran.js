import React from 'react'

function KontenSaran() {
  return (
    <>
<form action="" className="formkritik" method="post" acceptCharset="utf-8">
<input type="hidden" name="csrf_test_name"/>
<div className="modal-body">
<div className="table-responsive">
<table className="m-auto">
<tbody>
<tr>
<td colSpan="2" className="text-center"><h2>SARAN DAN MASUKAN</h2></td>
</tr>
                                                        <tr>
                                                            <td colSpan="2" className="text-center">Untuk alasan tertentu Anda tidak puas dengan layanan kami,
                                                                Anda dapat menyampaikan masukan atau saran dibawah! <br/><span className="text-info">Tanggapan akan dikirim ke Email Anda.</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Nama</td>
                                                            <td>
                                                                <input type="text" id="nama" name="nama" className="form-control form-control-sm"/>
                                                                <div className="invalid-feedback errornama"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email Aktif</td>
                                                            <td>
                                                                <input type="text" id="email" name="email" className="form-control form-control-sm"/>
                                                                <div className="invalid-feedback erroremail"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>No Hp</td>
                                                            <td>
                                                                <input type="text" id="no_hpusr" name="no_hpusr" className="form-control form-control-sm"/>
                                                                <div className="invalid-feedback errorno_hpusr"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Topik</td>
                                                            <td>
                                                                <select defaultValue={'DEFAULT'} className="form-control form-control-sm" name="judul" id="judul">
                                                                    <option value="DEFAULT" disabled>--Pilih Topik--</option>
                                                                    <option value={'2'}>Pengaduan</option>
                                                                    <option value={'3'}>Aspirasi</option>
                                                                    <option value={'4'}>Permintaan Informasi</option>
                                                                </select>
                                                                <div className="invalid-feedback errorjudul"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Isi</td>
                                                            <td>
                                                                <textarea type="text" id="isi_kritik" name="isi_kritik" className="form-control"></textarea>
                                                                <div className="invalid-feedback errorisi_kritik"></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="modal-footer p-0 mt-3">
                                                <button type="submit" className="m-auto mt-3 btn btn-primary btnkritik"><i className="fas fa-paper-plane"></i> Kirim Pesan</button>
                                            </div>
                                        </div>
                                        </form>
</>
  )
}

export default KontenSaran