"use strict";(self.webpackChunkwebprofile_react=self.webpackChunkwebprofile_react||[]).push([[912],{6873:function(a,e,n){n.d(e,{c$:function(){return t},zD:function(){return i}});var s=function(a,e,n){return null==a?"":a.substring(e,e+n)},t=function(a){return"0000-00-00"==a?"-":s(a,8,2)+" "+r(s(a,5,2))+" "+s(a,0,4)},r=function(a){return 1==parseInt(a)?"Januari":2==parseInt(a)?"Februari":3==parseInt(a)?"Maret":4==parseInt(a)?"April":5==parseInt(a)?"Mei":6==parseInt(a)?"Juni":7==parseInt(a)?"Juli":8==parseInt(a)?"Agustus":9==parseInt(a)?"September":10==parseInt(a)?"Oktober":11==parseInt(a)?"November":12==parseInt(a)?"Desember":a},i=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?e+" "+parseInt(a).formatMoney(0,".",","):"Rp"+parseInt(a).formatMoney(0,",",".")+",-"};Number.prototype.formatMoney=function(a,e,n){var s=this,t=(a=isNaN(a=Math.abs(a))?2:a,e=void 0==e?".":e,n=void 0==n?",":n,s<0?"-":""),r=String(parseInt(s=Math.abs(Number(s)||0).toFixed(a))),i=(i=r.length)>3?i%3:0;return t+(i?r.substr(0,i)+n:"")+r.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+n)+(a?e+Math.abs(s-r).toFixed(a).slice(2):"")}},164:function(a,e,n){n.r(e),n.d(e,{default:function(){return j}});var s=n(2791),t=n(4165),r=n(5861),i=n(885),l=n(6048),c=n.n(l),d=n(1087),o=n.p+"static/media/bg-konten-jualan.132b1c0b1febd4800879.webp",m=n(6873),u=n(184);function p(a){var e=a.data,n=(0,s.useState)([]),t=(0,i.Z)(n,2),r=t[0],l=t[1],d=(0,s.useState)(0),m=(0,i.Z)(d,2),p=m[0],h=m[1],j=(0,s.useState)(0),x=(0,i.Z)(j,2),N=x[0],f=x[1];(0,s.useEffect)((function(){var a=N+8;l(e.slice(N,a)),h(Math.ceil(e.length/8))}),[N,8,e]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("main",{id:"kontenBelanja",children:[(0,u.jsxs)("section",{id:"headerBelanja",children:[(0,u.jsxs)("div",{className:"row justify-content-center mb-3",children:[(0,u.jsx)("div",{className:"col-lg-5 center-v",children:(0,u.jsxs)("p",{className:"jumbo-kontenBelanja",children:["Banyak Keperluan Tapi Malas ke Pasar? ",(0,u.jsx)("span",{className:"clr-green",children:"Belanja Disini Saja!"})]})}),(0,u.jsx)("div",{className:"col-lg-5 text-center",children:(0,u.jsx)("img",{className:"img-kontenBelanja",src:o,width:"70%",alt:""})})]}),(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row justify-content-center",children:(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsxs)("div",{className:"input-group input-group-lg mb-3",id:"wrapSearchBelanja",children:[(0,u.jsx)("span",{className:"input-group-text",id:"searchBelanja",children:(0,u.jsx)("i",{className:"fa fa-search"})}),(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"cari produk","aria-label":"pencarian","aria-describedby":"searchBelanja"})]})})})})]}),(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("section",{id:"kontenBelanja",children:[(0,u.jsx)("div",{className:"row mt-4 mb-4",children:(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[(0,u.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:(0,u.jsx)("div",{className:"row mt-3",children:r.map((function(a){return(0,u.jsx)(b,{data:a},a.id)}))})}),(0,u.jsx)("div",{className:"tab-pane fade",id:"makanan",role:"tabpanel","aria-labelledby":"makanan-tab",children:(0,u.jsx)("div",{className:"row mt-3"})}),(0,u.jsx)("div",{className:"tab-pane fade",id:"minuman",role:"tabpanel","aria-labelledby":"minuman-tab",children:(0,u.jsx)("div",{className:"row mt-3"})})]})})}),(0,u.jsx)(c(),{className:"pagination justify-content-center",nextLabel:"Next >",onPageChange:function(a){var n=8*a.selected%e.length;f(n)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:p,previousLabel:"< Previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})})]})})}function b(a){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"col-6 col-sm-6 col-md-6 col-lg-3 mb-4",children:(0,u.jsxs)("div",{className:"card h-100 beli-card",children:[(0,u.jsx)("img",{src:"https://api.digitaldesa.id/uploads/belanja/thumbs/"+a.data.foto,className:"card-img-top beli-card__img",alt:""}),(0,u.jsx)("div",{className:"card-body",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsx)("p",{className:"beli-card__judul",children:a.data.nama})}),(0,u.jsx)("div",{className:"col-md-12",children:(0,u.jsx)("p",{className:"beli-card__harga",children:(0,m.zD)(a.data.harga)})}),(0,u.jsx)("div",{className:"col-md-12 mb-4",children:(0,u.jsx)("p",{className:"beli-card__detail",children:a.data.jenis})})]})}),(0,u.jsx)(d.rU,{to:"/belanja/"+a.data.id,className:"btn-penjual__text stretched-link"})]})})})}var h=function(){var a=(0,s.useState)([]),e=(0,i.Z)(a,2),n=e[0],l=e[1],c=function(){var a=(0,r.Z)((0,t.Z)().mark((function a(){var e,n;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://profil.digitaldesa.id/sengaselatan-luwu/belanja/lists");case 2:return e=a.sent,a.next=5,e.json();case 5:n=a.sent,l(n.data);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return(0,s.useEffect)((function(){c()})),(0,u.jsx)(p,{data:n})};var j=function(){return(0,s.useEffect)((function(){document.title="Beli dari Desa | Website Resmi Desa Senga Selatan"}),[]),(0,u.jsx)("main",{className:"mb-5",children:(0,u.jsx)(h,{})})}}}]);
//# sourceMappingURL=912.b8b3500c.chunk.js.map