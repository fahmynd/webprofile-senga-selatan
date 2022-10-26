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

// expiration = new Date;
// expiration.setMonth(expiration.getMonth() + 6)
// counter = eval(cookieVal("total_visited"))
// counter++
// document.cookie = "total_visited=" + counter + ";expires=" + expiration.toGMTString()


// function cookieVal(cookieName) {
//   thisCookie = document.cookie.split("; ")
//   for (i = 0; i < thisCookie.length; i++) {
//     if (cookieName == thisCookie[i].split("=")[0]) {
//       return thisCookie[i].split("=")[1]
//     }
//   }
//   return 0;
// }

// document.getElementById('result').innerHTML = "<center><h3>You visited this page <label style='font-size:40px;' class='text-info'>" + counter + "</label> times.</h3></center>";