(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{247:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={mixins:[n(102).a],methods:{srcSetOld:function(image,t){var e=[];return image[t+"_x1"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x1"]," 1x")),image[t+"_x2"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x2"]," 2x")),image[t+"_x3"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x3"]," 3x")),e.join(", ")},srcSet:function(image,t){var e=[];return this.$device.isSafari||(image[t+"_x1_webp"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x1_webp"]," 1x")),image[t+"_x2_webp"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x2_webp"]," 2x")),image[t+"_x3_webp"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x3_webp"]," 3x"))),image[t+"_x1"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x1"]," 1x")),image[t+"_x2"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x2"]," 2x")),image[t+"_x3"]&&e.push("".concat(this.apiUrl).concat(image[t+"_x3"]," 3x")),e.join(", ")}}}},541:function(t,e,n){var content=n(692);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cf02cd46",content,!0,{sourceMap:!1})},691:function(t,e,n){"use strict";n(541)},692:function(t,e,n){var o=n(19)(!1);o.push([t.i,".visible-tablet-sm[data-v-60fdc568]{display:none!important}@media screen and (max-width:768px){.visible-tablet-sm[data-v-60fdc568]{display:flex!important}}@media screen and (max-width:768px){.hidden-mobile[data-v-60fdc568]{display:none!important}}.visible-mobile-xl-only[data-v-60fdc568]{display:none!important}@media screen and (max-width:600px){.visible-mobile-xl-only[data-v-60fdc568]{display:block!important}}.visible-mobile-xl-only--flex[data-v-60fdc568]{display:none!important}@media screen and (max-width:600px){.visible-mobile-xl-only--flex[data-v-60fdc568]{display:flex!important}}.visible-tablet-only[data-v-60fdc568]{display:none!important}@media screen and (max-width:992px){.visible-tablet-only[data-v-60fdc568]{display:flex!important}}.upper-subtitle[data-v-60fdc568]{font-size:10px;text-transform:uppercase;letter-spacing:.66em;color:#042055}@media screen and (max-width:768px){.upper-subtitle[data-v-60fdc568]{font-size:8px}}.h1[data-v-60fdc568]{font-size:48px;font-weight:400;color:#042055;margin:0;line-height:1.2}@media screen and (max-width:1024px){.h1[data-v-60fdc568]{font-size:36px}}@media screen and (max-width:768px){.h1[data-v-60fdc568]{font-size:32px}}.h2[data-v-60fdc568]{margin:0;font-weight:800;font-size:40px;color:#042055;line-height:1.2}@media screen and (max-width:1024px){.h2[data-v-60fdc568]{font-size:36px}}@media screen and (max-width:768px){.h2[data-v-60fdc568]{font-size:28px}}.h3[data-v-60fdc568]{margin:0;font-weight:800;font-size:28px;color:#042055;line-height:1.2}@media screen and (max-width:1024px){.h3[data-v-60fdc568]{font-size:24px}}@media screen and (max-width:768px){.h3[data-v-60fdc568]{font-size:22px}}@media screen and (max-width:600px){.authors[data-v-60fdc568]{display:flex;flex-flow:row wrap}}.authors h3[data-v-60fdc568]{font-family:NeueHaasUnicaW1G,Arial,serif;color:#414042;margin:0 0 24px;font-weight:800;font-size:28px;line-height:135%}@media screen and (max-width:600px){.authors h3[data-v-60fdc568]{width:100%!important;min-width:100%!important;margin-bottom:12px;font-size:22px}}.authors__item[data-v-60fdc568]{display:flex;margin-bottom:16px;align-items:flex-start;cursor:pointer;transition:.15s;text-decoration:none}.authors__item[data-v-60fdc568]:hover{opacity:.8}.authors__item aside[data-v-60fdc568]{width:50px;min-width:50px;height:50px;border-radius:50%;overflow:hidden;margin-right:16px}.authors__item aside img[data-v-60fdc568]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.authors__item>div[data-v-60fdc568]{display:flex;flex-direction:column;padding-top:4px}@media screen and (max-width:600px){.authors__item>div[data-v-60fdc568]{display:none}}.authors__item b[data-v-60fdc568],.authors__item span[data-v-60fdc568]{display:block;font-family:NeueHaasUnicaW1G,Arial,serif;font-size:14px;line-height:1.2;color:#9797a1}.authors__item b[data-v-60fdc568]{font-weight:800;color:#414042;margin-bottom:8px}",""]),t.exports=o},749:function(t,e,n){"use strict";n.r(e);var o=n(51),d=n(247),c={mixins:[o.a,d.a]},r=(n(691),n(7)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"authors"},[n("h3",[t._v(t._s(t.texts.blog_authors_title))]),t._v(" "),t._l(t.lang.authors,(function(e,o){return n("nuxt-link",{key:o,staticClass:"authors__item",attrs:{to:{name:t.$ROUTES.BLOG_AUTHOR,params:{slug:e.slug}}}},[n("aside",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.apiUrl+e.picture_x1,expression:"apiUrl + item.picture_x1"}],attrs:{"data-srcset":t.srcSet(e,"picture"),alt:e.name,width:"50",height:"50"}})]),t._v(" "),n("div",[n("b",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.position))])])])}))],2)}),[],!1,null,"60fdc568",null);e.default=component.exports}}]);