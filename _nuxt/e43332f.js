(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("6e5159b8",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(263)},272:function(t,e,r){var o=r(36)((function(i){return i[1]}));o.push([t.i,'.underline{\n  width:90px;\n  height:2px;\n  background-color:#fff;\n  content:""\n}',""]),t.exports=o},274:function(t,e,r){"use strict";r.r(e);var o=r(7),l=(r(50),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.$axios,e.next=3,o.$get("https://my-porto-api.herokuapp.com/porto/".concat(r.number));case 3:return l=e.sent,e.abrupt("return",{porto:l});case 5:case"end":return e.stop()}}),e)})))()}}),n=(r(271),r(19)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-24 text-white "},[r("div",{staticClass:"PersonalProject  w-full h-full",attrs:{"data-aos":"fade-up","data-aos-once":"true"}},[r("div",{staticClass:"flex flex-col ml-2 md:ml-16 mt-5"},[r("p",{staticClass:"text-base text-gray-300"},[t._v("Project")]),t._v(" "),r("h3",{staticClass:"text-3xl font-semibold"},[t._v(t._s(t.porto.name)+" ")]),t._v(" "),r("div",{staticClass:"underline my-3"}),t._v(" "),r("p",{staticClass:"text-sm text-gray-200 text-base my-2"},[t._v("My Role")]),t._v(" "),t._l(t.porto.role,(function(e){return r("p",{staticClass:"text-xs text-gray-300 text-base"},[t._v(t._s(e))])})),t._v(" "),r("p",{staticClass:"text-sm text-gray-200 mt-2 mb-1 text-base"},[t._v("Year")]),t._v(" "),r("p",{staticClass:"text-xs text-gray-300 text-base"},[t._v(t._s(t.porto.year)+" ")])],2)]),t._v(" "),r("div",{staticClass:"PersonalProjectDesc w-full h-full mt-5 md:mt-0  ",attrs:{"data-aos":"fade-up","data-aos-once":"true"}},[r("div",{staticClass:"flex mx-3 md:mt-5 md:mr-8 text-justify text-lg "},[r("p",[t._v(t._s(t.porto.desc))])])]),t._v(" "),r("div",{staticClass:" w-full h-full  md:col-span-2 ",attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 place-items-center"},t._l(t.porto.product,(function(t){return r("div",{staticClass:"flex w-10/12 h-5/6 my-12 justify-center items-center "},[r("img",{staticClass:"max-w-full h-auto",attrs:{src:t,alt:""}})])})),0)]),t._v(" "),r("div",{staticClass:"w-full h-full md:col-span-2 my-10 ",attrs:{"data-aos":"fade-up","data-aos-once":"true"}},[r("div",{staticClass:"flex justify-center"},[r("a",{attrs:{href:t.porto.website,target:"_blank"}},[r("button",{staticClass:"border border-white text-white text-xs py-1 px-3 mr-5 md:py-2 md:px-6 transition-all hover:bg-white hover:text-black text-md"},[t._v("Website")])]),t._v(" "),r("a",{attrs:{href:t.porto.source,target:"_blank"}},[r("button",{staticClass:"border border-white text-white text-xs py-1 px-3 mr-5 md:py-2 md:px-6 transition-all hover:bg-white hover:text-black text-md"},[t._v("Source Code")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);