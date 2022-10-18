import React from 'react'
import '../pengaduan/konten-pengaduan.css'

function KontenPengaduan() {
  return (
    <div id="contact" className="text-center pb-5">
  <div className="container">
    <div className="section-title center">
      <h2>FORM PENGADUAN</h2>
      <p>Isi form di bawah ini untuk membuat laporan pengaduan.<br/>Isian yang bertanda (<b>*</b>) wajib diisi pelapor.</p>
    </div>


    <div className="col-md-8 col-md-offset-2 m-auto">
      <form method="POST" action="https://sipemandu.kemendesa.go.id/ticket-web" encType="multipart/form-data"/>
        <input type="hidden" name="_token" />
        <input type="number" className="form-control" id="channel_id" name="channel_id" required style={{display: "none"}}/>

        
        <div className="row">
            <div className="form-group">
              <input type="hidden" name="category_id" id="category_id" />
              
                          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Nama lengkap <span>*</span></label>
              <input type="text" className="form-control danger voice-onfocus" id="name" name="name" placeholder="Nama lengkap" />
                          </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nik">NIK <span>*</span></label>
              <input type="number" className="form-control voice-onfocus" id="nik" name="nik" placeholder="Nomor Induk Kependudukan"/>
                          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Nomor handphone <span>*</span></label>
              <input type="number" className="form-control voice-onfocus" id="phone" name="phone" placeholder="Nomor handphone" minLength="8" maxLength="13"/>
                          </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Alamat email</label>
              <input type="email" className="form-control voice-onfocus" id="email" name="email" placeholder="example@mail.com"/>
                          </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="occupation">Pendidikan</label>
              <div className="form-line">
                <select defaultValue={'DEFAULT'} className="form-control voice-onfocus" id="education_id" name="education_id">
                    <option value="DEFAULT" disabled></option>
                                                                    <option value={"1"}>SD atau SMP</option>
                                                                                          <option value={"2"}>SMA/SMK</option>
                                                                                          <option value={"3"}>D3 atau S1</option>
                                                                                          <option value={"4"}>S2 atau S3</option>
                                                        </select>
                              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="occupation">Pekerjaan</label>
              <div className="form-line">
                <select defaultValue={'DEFAULT'} className="form-control voice-onfocus" id="occupation_id" name="occupation_id" data-placeholder="Pilih pekerjaan pelapor">
                    <option value="DEFAULT"></option>
                                                                    <option value="1">Guru</option>
                                                                                          <option value="2">Pemerintahan</option>
                                                                                          <option value="3">Karyawan Swasta</option>
                                                                                          <option value="4">Wirausaha</option>
                                                                                          <option value="5">Lainnya</option>
                                                        </select>
                              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender">Jenis Kelamin</label>
              <div className="form-line">
                <select className="form-control voice-onfocus" id="gender" name="gender" data-placeholder="Pilih jenis kelamin pelapor.">
                    <option></option>
                  <option value="1">Laki-Laki</option>
                  <option value="0">Perempuan</option>
                </select>
                              </div>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <h3>Alamat Pelapor</h3>
          <label htmlFor="selProvinsi">Provinsi <span>*</span></label>
          <select defaultValue={'DEFAULT'} className="form-control voice-onfocus show-tick" id="_province" name="province_id" data-placeholder="Pilih provinsi asal">
              <option value="DEFAULT"></option>
                                                        <option value="11">ACEH</option>
                                                                          <option value="12">SUMATERA UTARA</option>
                                                                          <option value="13">SUMATERA BARAT</option>
                                                                          <option value="14">RIAU</option>
                                                                          <option value="15">JAMBI</option>
                                                                          <option value="16">SUMATERA SELATAN</option>
                                                                          <option value="17">BENGKULU</option>
                                                                          <option value="18">LAMPUNG</option>
                                                                          <option value="19">KEPULAUAN BANGKA BELITUNG</option>
                                                                          <option value="21">KEPULAUAN RIAU</option>
                                                                          <option value="31">DKI JAKARTA</option>
                                                                          <option value="32">JAWA BARAT</option>
                                                                          <option value="33">JAWA TENGAH</option>
                                                                          <option value="34">DI YOGYAKARTA</option>
                                                                          <option value="35">JAWA TIMUR</option>
                                                                          <option value="36">BANTEN</option>
                                                                          <option value="51">BALI</option>
                                                                          <option value="52">NUSA TENGGARA BARAT</option>
                                                                          <option value="53">NUSA TENGGARA TIMUR</option>
                                                                          <option value="61">KALIMANTAN BARAT</option>
                                                                          <option value="62">KALIMANTAN TENGAH</option>
                                                                          <option value="63">KALIMANTAN SELATAN</option>
                                                                          <option value="64">KALIMANTAN TIMUR</option>
                                                                          <option value="65">KALIMANTAN UTARA</option>
                                                                          <option value="71">SULAWESI UTARA</option>
                                                                          <option value="72">SULAWESI TENGAH</option>
                                                                          <option value="73">SULAWESI SELATAN</option>
                                                                          <option value="74">SULAWESI TENGGARA</option>
                                                                          <option value="75">GORONTALO</option>
                                                                          <option value="76">SULAWESI BARAT</option>
                                                                          <option value="81">MALUKU</option>
                                                                          <option value="82">MALUKU UTARA</option>
                                                                          <option value="91">PAPUA BARAT</option>
                                                                          <option value="94">PAPUA</option>
                                          </select>
                  </div>
        
        <div className="form-group">
          <label htmlFor="selKabKot">Kabupaten/Kota <span>*</span></label>
          <select className="form-control voice-onfocus show-tick" id="_regency" name="regency_id" data-placeholder="Pilih kabupaten atau kota asal pelapor"></select>
                  </div>
        
        <div className="form-group">
          <label htmlFor="selKecamatan">Kecamatan <span>*</span></label>
          <select className="form-control voice-onfocus show-tick" id="_district" name="district_id" data-placeholder="Pilih kecamatan asal pelapor"></select>
                  </div>
        
        <div className="form-group">
          <label htmlFor="selKelurahan">Desa/Kelurahan <span>*</span></label>
          <select className="form-control voice-onfocus show-tick" id="_village" name="village_id" data-placeholder="Pilih kelurahan atau desa asal pelapor"></select>
                  </div>

        <div className="form-group">
          <label htmlFor="address">Alamat <span>*</span></label>
          <input type="text" className="form-control voice-onfocus" id="address" name="address" placeholder="Alamat KTP" />
                  </div>

        <div className="form-group">
          <h3>Obyek Terlapor</h3>
          <label htmlFor="reported_location">Alamat <span>*</span></label>
          <input type="text" className="form-control voice-onfocus" id="reported_location" name="reported_location" placeholder="Alamat Lengkap Obyek Terlapor" />
                  </div>

        <div className="form-group">
          <label htmlFor="issue_id">Permasalahan<span>*</span></label>
          <div className="form-line">
            <select className="form-control voice-onfocus" id="issue_id" name="issue_id" data-placeholder="Pilih jenis permasalahan">
                <option></option>
                                                        <option value="21">DESA</option>
                                                                          <option value="22">PDT</option>
                                                                          <option value="23">TRANSMIGRASI</option>
                                                                          <option value="24">LAIN-LAIN</option>
                                            </select>
                      </div>
        </div>

        <div className="form-group">
          <label htmlFor="issue_id">Sub Permasalahan <span>*</span></label>
          <div className="form-line">
            <select className="form-control voice-onfocus" id="_subissue" name="subissue_id" data-placeholder="Pilih jenis subpermasalahan"></select>
                      </div>
        </div>

        <div className="form-group">
          <label htmlFor="judul">Judul <span>*</span></label>
          <input type="text" className="form-control voice-onfocus" id="judul" name="judul" />
                  </div>

        <div className="form-group">
          <label htmlFor="description">Deskripsi <span>*</span></label>
          <textarea className="form-control voice-onfocus" rows="5" id="description" name="description"></textarea>
                  </div>
        
        <div className="form-group">
          <label htmlFor="filependukung">File Pendukung (jpeg,jpg,png,pdf,docx,doc,xlsx,xls,pptx,ppt,mp3,mp4)</label>
          <input className="form-control voice-onfocus" type="file" id="filependukung" name="filependukung[]" multiple accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf, audio/*, video/*, image/*,text/plain"/>
                  </div>

          <div className="form-group">
              <div className="g-recaptcha"
                   data-sitekey="6Le2ndoZAAAAAMcdFJ0WqjiVZuV_Ow_DB4FICe9E">
              </div>
              <small className="help-block text-danger"></small>
          </div>

        <button type="submit" className="btn btn-default voice-onhover">KIRIM</button>
      
    </div>
  </div>
</div>

  )
}

export default KontenPengaduan