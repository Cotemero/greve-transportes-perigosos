!function(e){var o={};function t(a){if(o[a])return o[a].exports;var r=o[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(a,r,function(o){return e[o]}.bind(null,r));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/",t(t.s=1)}({1:function(e,o,t){e.exports=t("mUkR")},mUkR:function(e,o){var t=[],a=[],r=['Thanks to <a href="https://www.facebook.com/WazePortugal/">Waze Portugal</a> for providing important data and permission to use their services','This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply'],i={obj:null},s={obj:null},n=["gasoline","diesel","lpg","none"],l=["normal","sos","none"];mapboxgl.accessToken="pk.eyJ1Ijoidm9zdHB0IiwiYSI6ImNqeXR3aHQxdTAyYjgzY21wbDMwaHJoaDQifQ.ql-IskzjOdAtEFvbltquaw";var p=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-7.8536599,39.557191],zoom:6,attributionControl:!1});function c(){return new Promise(function(e,o){t=[],$.getJSON("/storage/data/cache.json",function(o){o.forEach(function(e){var o=e.sell_gasoline&&e.has_gasoline,a=e.sell_diesel&&e.has_diesel,r=e.sell_lpg&&e.has_lpg,i=!o&&!a&&!r,s="",n="",l="",p=0,c=e.brand;if("SOS"==e.repa)e.repa="sos",s="REPA",p=2,n="0070bb",l="a9aeff",c+=" (REPA - Veículos Prioritários)",p=2;else if("Normal"==e.repa)e.repa="normal",s="REPA",p=1,n="0070bb",l="a9aeff",c+=" (REPA - Todos os Veículos)",p=1;else{var u=0;!o&&e.sell_gasoline||u++,!a&&e.sell_diesel||u++,!r&&e.sell_lpg||u++,3==u?(s="ALL",n="006837",l="53ea9f"):0==u?(s="NONE",n="c1272c",l="ff838b"):(s="PARTIAL",n="f7921e",l="f1b87d")}t.push({type:"Feature",geometry:{type:"Point",coordinates:[e.long,e.lat]},properties:{id:e.id,name:e.name,brand:c,repa:e.repa,with_gasoline:o,with_diesel:a,with_lpg:r,with_none:i,sell_gasoline:e.sell_gasoline,sell_diesel:e.sell_diesel,sell_lpg:e.sell_lpg,has_gasoline:e.has_gasoline,has_diesel:e.has_diesel,has_lpg:e.has_lpg,icon:s,popup_color:n,background_color:l,priority:p}})}),e()})})}function u(e,o){return new Promise(function(t,a){p.loadImage(o,function(o,r){o?(console.log("ERROR:"+o),a(o)):(console.log("IMAGE LOADED"),p.addImage(e,r),t())})})}function d(){var e=new Date,o=e.getSeconds(),t=e.getMinutes(),a=e.getHours(),i=[].concat(r);return i.push("Última Atualização às: "+("0"+a).slice(-2)+"h"+("0"+t).slice(-2)+"m"+("0"+o).slice(-2)+"s"),i}function g(){a.push(c()),Promise.all(a).then(function(){a=[],l.forEach(function(e){n.forEach(function(o){var t="poi-"+e+"-"+o;p.removeLayer(t)})}),p.removeSource("points"),p.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:t}}),l.forEach(function(e){var o=e;"none"==o&&(o=""),n.forEach(function(t){var a="poi-"+e+"-"+t;p.addLayer({id:a,type:"symbol",source:"points",layout:{"icon-image":"{icon}","symbol-sort-key":["get","priority"]}}),p.setFilter(a,["all",[">","with_"+t,0],["==","repa",o]])})}),p.removeControl(s.obj),p.removeControl(i.obj),delete i.obj,i.obj=new mapboxgl.AttributionControl({compact:!0,customAttribution:d()}),p.addControl(i.obj),p.addControl(s.obj,"bottom-left"),f()})}function f(){var e=$("input.type[type=radio]:checked").val(),o=[],t=$('input[name="fuel_stations_repa[]"]:checked');Object.values(t).forEach(function(e){var t=e.value;t&&o.push(t)}),l.forEach(function(t){n.forEach(function(a){var r="poi-"+t+"-"+a,i=o.includes(t)&&(a==e||"all"==e);p.setLayoutProperty(r,"visibility",i?"visible":"none")})})}String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},p.on("load",function(){$(".mapboxgl-ctrl-logo").css("float","left"),$(".mapboxgl-ctrl-bottom-left .mapboxgl-ctrl").append('<a style="cursor: pointer;" target="_blank" rel="noopener nofollow"  href="https://twitter.com/vostpt"><img src="/img/VOSTPT_LETTERING_COLOR.png" style="height: 42px; margin-top: -15px; margin-left: 10px;"/></a>'),a.push(u("REPA","/img/map/VOSTPT_JNDPA_REPA_ICON_25x25.png")),a.push(u("NONE","/img/map/VOSTPT_JNDPA_NONE_ICON_25x25.png")),a.push(u("PARTIAL","/img/map/VOSTPT_JNDPA_PARTIAL_ICON_25x25.png")),a.push(u("ALL","/img/map/VOSTPT_JNDPA_ALL_ICON_25x25.png")),a.push(c()),Promise.all(a).then(function(){a=[],p.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:t}}),l.forEach(function(e){var o=e;"none"==o&&(o=""),n.forEach(function(t){var a="poi-"+e+"-"+t;p.addLayer({id:a,type:"symbol",source:"points",layout:{"icon-image":"{icon}","symbol-sort-key":["get","priority"]}}),p.setFilter(a,["all",[">","with_"+t,0],["==","repa",o]]),function(e){p.on("click",e,function(e){var o=e.features[0].geometry.coordinates.slice(),t=e.features[0].properties.sell_gasoline&&e.features[0].properties.has_gasoline?'<img src="img/map/VOSTPT_GASPUMP_GASOLINA_500pxX500px.png"/>':'<img class="no-gas"src="img/map/VOSTPT_GASPUMP_GASOLINA_500pxX500px.png"/>',a=e.features[0].properties.sell_diesel&&e.features[0].properties.has_diesel?'<img src="img/map/VOSTPT_GASPUMP_GASOLEO_500pxX500px.png"/>':'<img class="no-gas" src="img/map/VOSTPT_GASPUMP_GASOLEO_500pxX500px.png"/>',r=e.features[0].properties.sell_lpg&&e.features[0].properties.has_lpg?'<img width="75px" src="img/map/VOSTPT_GASPUMP_GPL_500pxX500px.png"/>':'<img class="no-gas" src="img/map/VOSTPT_GASPUMP_GPL_500pxX500px.png"/>',i=e.features[0].properties.name?e.features[0].properties.name.toUpperCase():"",s="",n="";for(isHelping()?(n="",e.features[0].properties.sell_gasoline&&(n+='<div class="col-md v-fuel-info gasoline"><a href="#" onclick="swapIcon(this)">'+t+"</a><h6>GASOLINA</h6></div>"),e.features[0].properties.sell_diesel&&(n+='<div class="col-md v-fuel-info diesel"><a href="#" onclick="swapIcon(this)">'+a+"</a><h6>GASÓLEO</h6></div>"),e.features[0].properties.sell_lpg&&(n+='<div class="col-md v-fuel-info lpg"><a href="#" onclick="swapIcon(this)">'+r+"</a><h6>GPL</h6></div>")):(n="",e.features[0].properties.sell_gasoline&&(n+='<div class="col-md v-fuel-info">'+t+"<h6>GASOLINA</h6></div>"),e.features[0].properties.sell_diesel&&(n+='<div class="col-md v-fuel-info">'+a+"<h6>GASÓLEO</h6></div>"),e.features[0].properties.sell_lpg&&(n+='<div class="col-md v-fuel-info">'+r+"<h6>GPL</h6></div>")),s=isHelping()?'<div class="v-popup-content"><div class="v-popup-header" style="background-color:#85d5f8; text-align: center;"><h5>ADICIONAR INFORMAÇÃO</h5></div><div class="v-popup-body" style="background-color:#b8e1f8"><div class="row">'+n+'</div><img src="/img/map/separation.png" style="width: calc(100% + 1.6em); margin-left:-0.8em;" /><div class="row"><div class="col-md"><b>POR FAVOR INDICA QUE COMBUSTÍVEIS NÃO ESTÃO</b></div></div><div class="row"><div class="col-md"><b>DISPONÍVEIS NA '+i+'.</b></div></div><div class="row"><div class="col-md"><b>CARREGA NAS IMAGENS.</b></div></div></div><div class="v-popup-header" style="background-color:#85d5f8"><a href="#" onclick="submitEntry(this,'+e.features[0].properties.id+')"><h5 class="popup_submit_text">VALIDAR</h5></a></div></div>':'<div class="v-popup-content"><div class="v-popup-header" style="background-color: #'+e.features[0].properties.popup_color+'"><h5>'+e.features[0].properties.brand.toUpperCase()+"<br><small>"+i+'</small></h5></div><div class="v-popup-body" style="background-color: #'+e.features[0].properties.background_color+'"><div class="row">'+n+'</div></div><div class="v-popup-body directions"><a href="https://www.waze.com/ul?ll='+o[1]+"%2C"+o[0]+'&navigate=yes&zoom=16&download_prompt=false"  target="_blank" rel="noopener noreferrer"><img src="/img/map/map_separation_'+e.features[0].properties.background_color+'.png" style="width: 100%;" /></a></div><div class="v-popup-header" style="background-color: #'+e.features[0].properties.popup_color+'"><a href="https://www.waze.com/ul?ll='+o[1]+"%2C"+o[0]+'&navigate=yes&zoom=16&download_prompt=false"><h5>OBTER DIREÇÕES</h5></a></div></div>';Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;popup=(new mapboxgl.Popup).setLngLat(o).setHTML(s).addTo(p)}),p.on("mouseenter",e,function(){p.getCanvas().style.cursor="pointer"}),p.on("mouseleave",e,function(){p.getCanvas().style.cursor=""})}(a)})}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(e){p.flyTo({center:[e.coords.longitude,e.coords.latitude],zoom:14})}),i.obj=new mapboxgl.AttributionControl({compact:!0,customAttribution:d()}),p.addControl(i.obj),s.obj=new mapboxgl.NavigationControl({visualizePitch:!0,showZoom:!0,showCompass:!0}),p.addControl(s.obj,"bottom-right"),f(),setInterval(g,3e4)})}),p.on("error",function(e){console.log("MAP LOAD ERROR"),console.log(e)}),$("input.type[type=radio]").change(function(){f()}),$("input.repa[type=checkbox]").change(function(){f()})}});