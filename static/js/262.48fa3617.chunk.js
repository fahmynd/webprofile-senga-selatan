"use strict";(self.webpackChunkwebprofile_react=self.webpackChunkwebprofile_react||[]).push([[262],{5846:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var s=t(2791),r=t(4165),n=t(5861),i=t(885),c=t(6048),l=t.n(c),d=t(966),o=t(1087),u=t(7333),m=t.n(u),f=t(184);function h(e){var a=e.data,t=(0,s.useState)([]),r=(0,i.Z)(t,2),n=r[0],c=r[1],d=(0,s.useState)(0),o=(0,i.Z)(d,2),u=o[0],m=o[1],h=(0,s.useState)(0),g=(0,i.Z)(h,2),j=g[0],x=g[1];(0,s.useEffect)((function(){var e=j+4;c(a.slice(j,e)),m(Math.ceil(a.length/4))}),[j,4,a]);return(0,f.jsx)(s.Fragment,{children:(0,f.jsxs)("section",{id:"kontenBerita",children:[(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"row justify-content-center",children:(0,f.jsx)("div",{className:"col-md-12",children:(0,f.jsx)("h2",{className:"fw-bold mt-4",children:"Berita"})})}),(0,f.jsx)("div",{className:"row mt-4",children:(0,f.jsx)("div",{className:"col-md-12",children:(0,f.jsx)("div",{className:"tab-content",id:"myTabContent",children:(0,f.jsx)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:(0,f.jsxs)("div",{className:"row mt-4",children:[Object.entries(n).map((function(e,a){return!a&&(0,f.jsx)(b,{data:e[1]},e.id)})),(0,f.jsx)("div",{className:"col-md-12 col-lg-7",children:(0,f.jsx)("div",{className:"row mt-2",children:Object.entries(n).map((function(e,a){return!!a&&(0,f.jsx)(p,{data:e[1]},e.id)}))})})]})})})})})]}),(0,f.jsx)(l(),{className:"pagination justify-content-center",nextLabel:"Next >",onPageChange:function(e){var t=4*e.selected%a.length;x(t)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:u,previousLabel:"< Previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})})}function p(e){return(0,f.jsx)(s.Fragment,{children:(0,f.jsx)("div",{className:"col-md-12 mb-2",children:(0,f.jsxs)("div",{className:"card berita-card berita-card__panjang",children:[(0,f.jsx)("div",{className:"card-body",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-3 full-col",children:(0,f.jsx)("img",{src:"https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/"+e.data.foto,className:"card-img-top img-berita-panjang",alt:"..."})}),(0,f.jsxs)("div",{className:"col-md-9 pt-2 pb-2 pe-4 ps-4",children:[(0,f.jsx)("p",{className:"berita-card__judul berita-card__judul_panjang",children:e.data.judul}),(0,f.jsxs)("div",{className:"berita-card__info",children:[(0,f.jsxs)("p",{className:"berita-card__penulis me-4",children:[(0,f.jsx)("i",{className:"fas fa-user-edit"})," ",e.data.penulis]}),(0,f.jsxs)("p",{className:"berita-card__tanggal",children:[(0,f.jsx)("i",{className:"fas fa-calendar-day"})," ",new Date(e.data.iat).toLocaleString("id-ID",{day:"2-digit",month:"long",year:"numeric"})]})]}),(0,f.jsx)("div",{className:"berita-card__isi",children:(0,f.jsx)(d.Z,{className:"berita-card__shortdesc",lines:3,more:!1,truncatedEndingComponent:" . . .",children:(0,f.jsx)("p",{className:"berita-card__shortdesc show-read-more",children:m()(e.data.isi)})})})]})]})}),(0,f.jsx)(o.rU,{to:"/berita/"+e.data.slug,style:{cursor:"pointer"},className:"stretched-link"})]})})})}function b(e){return(0,f.jsx)(s.Fragment,{children:(0,f.jsx)("div",{className:"col-md-12 col-lg-5 mb-5",children:(0,f.jsxs)("div",{className:"card berita-card",children:[(0,f.jsx)("img",{src:"https://profil.digitaldesa.id/uploads/73.17.07.2014/berita/thumbs/"+e.data.foto,className:"card-img-top img-berita",alt:""}),(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("p",{className:"berita-card__judul",children:e.data.judul}),(0,f.jsxs)("div",{className:"berita-card__info",children:[(0,f.jsxs)("p",{className:"berita-card__penulis me-4",children:[(0,f.jsx)("i",{className:"fas fa-user-edit"})," ",e.data.penulis]}),(0,f.jsxs)("p",{className:"berita-card__tanggal",children:[(0,f.jsx)("i",{className:"fas fa-calendar-day"})," ",new Date(e.data.iat).toLocaleString("id-ID",{day:"2-digit",month:"long",year:"numeric"})]})]}),(0,f.jsx)("div",{className:"berita-card__isi",children:(0,f.jsx)(d.Z,{className:"berita-card__shortdesc",lines:3,more:!1,truncatedEndingComponent:" . . .",children:(0,f.jsx)("p",{className:"berita-card__shortdesc show-read-more",children:m()(e.data.isi)})})})]}),(0,f.jsx)(o.rU,{to:"/berita/"+e.data.slug,style:{cursor:"pointer"},className:"stretched-link"})]})})})}var g=function(){var e=(0,s.useState)([]),a=(0,i.Z)(e,2),t=a[0],c=a[1],l=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var a,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://profil.digitaldesa.id/sengaselatan-luwu/berita/lists");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){l()})),(0,f.jsx)(h,{data:t})};var j=function(){return(0,s.useEffect)((function(){document.title="Berita Desa | Website Resmi Desa Senga Selatan"}),[]),(0,f.jsx)("main",{className:"mb-5",children:(0,f.jsx)(g,{})})}},7333:function(e,a,t){var s,r=t(5460),n=(s=r)&&s.__esModule?s:{default:s},i=t(326);var c=["p","div","br","hr","title","h1","h2","h3","h4","h5","h6","ol","ul","li","pre","table","th","td","blockquote","header","footer","nav","section","summary","aside","article","address"];e.exports=(0,i.compose)((function(e){return e.replace(/^\n+/,"")}),(function(e){return e.replace(/\n+$/,"")}),(function(e){return e.replace(/\n\n/g,"\n")}),(function(e){return e.replace(/&nbsp;/g," ")}),(function(e){return(0,n.default)(e,[],"\n")}),(function(e){return(0,n.default)(e,c)}))},326:function(e){e.exports={compose:function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.reduce((function(e,a){return function(){return e(a.apply(void 0,arguments))}}))}}},5460:function(e,a,t){var s;!function(r){if("function"!==typeof n){var n=function(e){return e};n.nonNative=!0}var i=n("plaintext"),c=n("html"),l=n("comment"),d=/<(\w*)>/g,o=/<\/?([^\s\/>]+)/;function u(e,a,t){return f(e=e||"",m(a=a||[],t=t||""))}function m(e,a){return{allowable_tags:e=function(e){var a,t=new Set;if("string"===typeof e)for(;a=d.exec(e);)t.add(a[1]);else n.nonNative||"function"!==typeof e[n.iterator]?"function"===typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:a,state:i,tag_buffer:"",depth:0,in_quote_char:""}}function f(e,a){for(var t=a.allowable_tags,s=a.tag_replacement,r=a.state,n=a.tag_buffer,d=a.depth,o=a.in_quote_char,u="",m=0,f=e.length;m<f;m++){var p=e[m];if(r===i)if("<"===p)r=c,n+=p;else u+=p;else if(r===c)switch(p){case"<":if(o)break;d++;break;case">":if(o)break;if(d){d--;break}o="",r=i,n+=">",t.has(h(n))?u+=n:u+=s,n="";break;case'"':case"'":o=p===o?"":o||p,n+=p;break;case"-":"<!-"===n&&(r=l),n+=p;break;case" ":case"\n":if("<"===n){r=i,u+="< ",n="";break}n+=p;break;default:n+=p}else if(r===l)if(">"===p)"--"==n.slice(-2)&&(r=i),n="";else n+=p}return a.state=r,a.tag_buffer=n,a.depth=d,a.in_quote_char=o,u}function h(e){var a=o.exec(e);return a?a[1].toLowerCase():null}u.init_streaming_mode=function(e,a){var t=m(e=e||[],a=a||"");return function(e){return f(e||"",t)}},void 0===(s=function(){return u}.call(a,t,a,e))||(e.exports=s)}()}}]);
//# sourceMappingURL=262.48fa3617.chunk.js.map