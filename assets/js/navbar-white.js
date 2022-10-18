$(document).ready(function () {
  if ($(window).width() <= 1000) {

  }
});
$(window).scroll(function () {
  if ($(window).width() >= 1000) {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {     
      $("#namaProvinsi").addClass("d-none");
      $("#namaKabupaten").addClass("d-none");
      $("#namaDesa").addClass("nama-desa-lite");
      $(".info-nav br").addClass("d-none");
      $("#logoNavbar").attr("height", "40");
      $("#brandWrap").removeClass("col-3");
      $("#brandWrap").addClass("col-2");
      $("#infoNavWrap").removeClass("col-9");
      $("#infoNavWrap").addClass("col-9");
    } else {
      
      $("#namaProvinsi").removeClass("d-none");
      $("#namaKabupaten").removeClass("d-none");
      $("#namaDesa").removeClass("nama-desa-lite");
      $(".info-nav br").removeClass("d-none");
      $("#logoNavbar").attr("height", "50");
      $("#brandWrap").removeClass("col-2");
      $("#brandWrap").addClass("col-3");
      $("#infoNavWrap").removeClass("col-9");
      $("#infoNavWrap").addClass("col-9");
    }
  } else {

    $("#namaProvinsi").addClass("d-none");
    $("#namaKabupaten").addClass("d-none");
    $("#namaDesa").addClass("nama-desa-lite");
    $(".info-nav br").addClass("d-none");
    $("#logoNavbar").attr("height", "40");
    $("#brandWrap").removeClass("col-3");
    $("#brandWrap").addClass("col-2");
    $("#infoNavWrap").removeClass("col-9");
    $("#infoNavWrap").addClass("col-9");
  }
});
