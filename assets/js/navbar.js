$(document).ready(function () {
  if ($(window).width() <= 1000) {
    $(".navbar").addClass("bg-nav");
    $(".navbar").removeClass("bg-semi-transparent");
  }
});
$(window).scroll(function () {
  if ($(window).width() >= 1000) {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".navbar").addClass("bg-nav");
      $(".navbar").removeClass("bg-semi-transparent");
      $("#namaProvinsi").addClass("d-none");
      $("#namaKabupaten").addClass("d-none");
      $("#namaDesa").addClass("nama-desa-lite");
      $(".info-nav br").addClass("d-none");
      $("#logoNavbar").attr("height", "40");
      $("#brandWrap").removeClass("col-3");
      $("#brandWrap").addClass("col-3");
      $("#infoNavWrap").removeClass("col-9");
      $("#infoNavWrap").addClass("col-9");
    } else {
      $(".navbar").addClass("bg-semi-transparent");
      $(".navbar").removeClass("bg-nav");
      $("#namaProvinsi").removeClass("d-none");
      $("#namaKabupaten").removeClass("d-none");
      $("#namaDesa").removeClass("nama-desa-lite");
      $(".info-nav br").removeClass("d-none");
      $("#logoNavbar").attr("height", "50");
      $("#brandWrap").removeClass("col-3");
      $("#brandWrap").addClass("col-3");
      $("#infoNavWrap").removeClass("col-9");
      $("#infoNavWrap").addClass("col-9");
    }
  } else {
    $(".navbar").addClass("bg-nav");
    $(".navbar").removeClass("bg-semi-transparent");
    $("#namaProvinsi").addClass("d-none");
    $("#namaKabupaten").addClass("d-none");
    $("#namaDesa").addClass("nama-desa-lite");
    $(".info-nav br").addClass("d-none");
    $("#logoNavbar").attr("height", "40");
    $("#brandWrap").removeClass("col-3");
    $("#brandWrap").addClass("col-3");
    $("#infoNavWrap").removeClass("col-9");
    $("#infoNavWrap").addClass("col-9");
  }
});

$(document).ready(function() {
  let maxLength = 200;

  $(".show-read-more").each(function() {
      let myStr = $(this).text();

      if ($.trim(myStr).length > maxLength) {
          $(this).html(myStr.substring(0, maxLength));
          $(this).append(` ...<span class="more-text">${myStr.substring(maxLength, $.trim(myStr).length)}</span>`);
      }
  });
});