(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{267:function(e,t,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("2572fe42",content,!0,{sourceMap:!1})},268:function(e,t,n){e.exports=n.p+"img/record.8a2b2f2.png"},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/music/embers.mp3"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/music/告五人Accusefive.mp3"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/music/jaychou.mp3"},272:function(e,t,n){"use strict";n(267)},273:function(e,t,n){var r=n(72)((function(i){return i[1]}));r.push([e.i,".slider{width:350px;margin:30px auto}@media(max-width:768px){.slider{width:80%}}.volumeSlider{width:150px;margin:30px auto}@media(max-width:768px){.volumeSlider{width:200px}}.timeBar{-webkit-appearance:none;margin:0 auto 30px;height:7px;background:hsla(0,0%,100%,.6);border-radius:5px;background-image:linear-gradient(#79aa79,#79aa79);background-size:0 100%;background-repeat:no-repeat;box-shadow:0 2px 5px rgba(0,0,0,.2)}.timeBar::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.timeBar::-moz-range-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-moz-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.timeBar::-ms-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-ms-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.timeBar::-webkit-slider-thumb:hover{background:#648d64}.timeBar::-moz-range-thumb:hover{background:#648d64}.timeBar::-ms-thumb:hover{background:#648d64}.timeBar::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.timeBar::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.timeBar::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.changeVolume{-webkit-appearance:none;margin-right:15px;margin-bottom:30px;height:7px;background:hsla(0,0%,100%,.6);border-radius:5px;background-image:linear-gradient(#79aa79,#79aa79);background-size:0 100%;background-repeat:no-repeat;box-shadow:0 2px 5px rgba(0,0,0,.2)}.changeVolume::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.changeVolume::-moz-range-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-moz-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.changeVolume::-ms-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#79aa79;cursor:ew-resize;box-shadow:0 0 2px 0 #555;-ms-transition:background .3s ease-in-out;transition:background .3s ease-in-out;box-shadow:0 2px 4px rgba(0,0,0,.2)}.changeVolume::-webkit-slider-thumb:hover{background:#648d64}.changeVolume::-moz-range-thumb:hover{background:#648d64}.changeVolume::-ms-thumb:hover{background:#648d64}.changeVolume::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.changeVolume::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.changeVolume::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}",""]),r.locals={},e.exports=r},279:function(e,t,n){"use strict";n.r(t);n(74);var r=n(274),o=n.n(r),c=(n(275),n(276)),d=n.n(c),l=(n(277),n(278),{name:"IndexPage",components:{VueSlickCarousel:d.a,RangeSlider:o.a},data:function(){return{musicArr:[{id:1,title:"Emberz - Embers",sound:n(269).default},{id:2,title:"告五人十首精選歌曲",sound:n(270).default},{id:3,title:"周杰倫15首精選",sound:n(271).default}],playTitle:"",isPlay:!1,audio:null,duration:100,currentTime:0,isSpin:!1,gainNode:.5,currentItem:0}},computed:{runTime:function(){var e=parseInt(this.currentTime/this.duration*100+1);return"backgroundSize: ".concat(e,"% 100%")},volumeVal:function(){return"backgroundSize: ".concat(this.gainNode/1*100,"% 100%")}},methods:{handleSwipe:function(e,t){this.isPlay=!1,this.isSpin=!1,this.currentTime=0,this.audio&&this.audio.pause(),this.audio=null,this.currentItem=t,this.playTitle=this.musicArr[t].title},changeVolume:function(){this.audio&&(this.audio.volume=this.gainNode)},changeDuration:function(){this.audio&&(this.audio.currentTime=this.currentTime)},playNotification:function(e){var t=this;this.isSpin=!this.isSpin,this.isPlay?(this.isPlay=!1,this.audio.pause()):this.audio?(this.isPlay=!0,this.audio.play()):(this.isPlay=!0,this.audio=new Audio(e),this.audio.volume=.5,this.gainNode=this.audio.volume,this.audio.play().then((function(){setTimeout((function(){t.duration=parseInt(t.audio.duration)}),200);var e=setInterval((function(){t.audio?t.currentTime=parseInt(t.audio.currentTime):clearInterval(e),t.currentTime===t.duration&&(t.isPlay=!1,t.isSpin=!1,clearInterval(e))}),1e3)})))},changeMusic:function(e){e?this.$refs.carousel.next():this.$refs.carousel.prev()}},mounted:function(){this.playTitle=this.musicArr[0].title}}),h=(n(272),n(58)),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("section",{staticClass:"min-h-screen w-full bg-[#718f67] overflow-hidden"},[r("VueSlickCarousel",{ref:"carousel",on:{beforeChange:e.handleSwipe}},e._l(e.musicArr,(function(t){return r("div",{key:t.id,staticClass:"flex justify-center mt-20"},[r("img",{staticClass:"h-64 w-64 md:h-80 md:w-80 duration-300 mx-auto cursor-pointer",class:{"animate-spin":e.isSpin},attrs:{src:n(268),alt:t.title},on:{click:function(n){return e.playNotification(t.sound)}}}),e._v(" "),r("h2",{staticClass:"text-center text-white text-2xl font-bold mt-10"},[e._v(e._s(t.title))])])})),0),e._v(" "),r("div",{staticClass:"w-screen flex flex-col align-center mt-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTime,expression:"currentTime"}],staticClass:"timeBar w-[80%] md:w-[30%]",style:e.runTime,attrs:{min:"0",max:e.duration,step:"1",type:"range"},domProps:{value:e.currentTime},on:{change:e.changeDuration,__r:function(t){e.currentTime=t.target.value}}}),e._v(" "),r("div",{staticClass:"flex align-center justify-center mt-4"},[r("fa",{staticClass:"text-white cursor-pointer text-2xl",attrs:{icon:"fa-solid fa-backward-fast"},on:{click:function(t){return e.changeMusic(!1)}}}),e._v(" "),e.isPlay?r("fa",{staticClass:"text-white text-2xl cursor-pointer mx-10",attrs:{icon:"fa-solid fa-pause"},on:{click:function(t){return e.playNotification(e.musicArr[e.currentItem].sound)}}}):r("fa",{staticClass:"text-white text-2xl cursor-pointer mx-10",attrs:{icon:"fa-solid fa-play"},on:{click:function(t){return e.playNotification(e.musicArr[e.currentItem].sound)}}}),e._v(" "),r("fa",{staticClass:"text-white text-2xl cursor-pointer",attrs:{icon:"fa-solid fa-forward-fast"},on:{click:function(t){return e.changeMusic(!0)}}})],1),e._v(" "),r("div",{staticClass:"w-full flex justify-center mt-6 gap-2"},[0!=e.gainNode?r("button",{on:{click:function(t){e.gainNode=0,e.changeVolume()}}},[r("fa",{staticClass:"text-white text-2xl",attrs:{icon:"fa-solid fa-volume-high"}})],1):r("button",{on:{click:function(t){e.gainNode=.5,e.changeVolume()}}},[r("fa",{staticClass:"text-white text-2xl",attrs:{icon:"fa-solid fa-volume-xmark"}})],1),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.gainNode,expression:"gainNode"}],staticClass:"changeVolume mt-7",style:e.volumeVal,attrs:{min:"0",max:"1",step:"0.01",type:"range"},domProps:{value:e.gainNode},on:{change:e.changeVolume,__r:function(t){e.gainNode=t.target.value}}})])])],1)])}),[],!1,null,null,null);t.default=component.exports},283:function(e,t,n){"use strict";n.r(t);var r=n(58),component=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("Record")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Record:n(279).default})}}]);