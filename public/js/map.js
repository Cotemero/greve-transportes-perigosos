!function(e){var o={};function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)i.d(t,a,function(o){return e[o]}.bind(null,a));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/",i(i.s=40)}({40:function(e,o,i){e.exports=i(41)},41:function(e,o){var i=!1,t=[],a=[],n=['Thanks to <a href="https://waze.com/pt" >Waze</a> for providing important data and permission to use their services','This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply'],r={obj:null},s=["gasoline","diesel","lpg","none"],l=["normal","sos","none"];mapboxgl.accessToken="pk.eyJ1IjoiY290ZW1lcm8iLCJhIjoiY2p5NzQyeTdvMDc1MzNlbGNnbzh3NjVuOCJ9.cPrQc61yiHA0kOptuuZsSA";var p=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-7.8536599,39.557191],zoom:6,attributionControl:!1});function c(){return new Promise(function(e,o){t=[],$.getJSON("/storage/data/cache.json",function(o){o.forEach(function(e){var o=e.sell_gasoline&&e.has_gasoline,i=e.sell_diesel&&e.has_diesel,a=e.sell_lpg&&e.has_lpg,n=!o&&!i&&!a,r="",s="",l=e.brand;if("SOS"==e.repa)e.repa="sos",r="REPA",2,s="#2f86ca",l+=" (REPA - Veículos Prioritários)";else if("Normal"==e.repa)e.repa="normal",r="REPA",1,s="#2f86ca",l+=" (REPA - Todos os Veículos)";else{var p=0;!o&&e.sell_gasoline||p++,!i&&e.sell_diesel||p++,!a&&e.sell_lpg||p++,3==p?(r="ALL",s="#65ac3d"):0==p?(r="NONE",s="#b32e25"):(r="PARTIAL",s="#f3a433")}t.push({type:"Feature",geometry:{type:"Point",coordinates:[e.long,e.lat]},properties:{id:e.id,name:e.name,brand:l,repa:e.repa,with_gasoline:o,with_diesel:i,with_lpg:a,with_none:n,sell_gasoline:e.sell_gasoline,sell_diesel:e.sell_diesel,sell_lpg:e.sell_lpg,has_gasoline:e.has_gasoline,has_diesel:e.has_diesel,has_lpg:e.has_lpg,icon:r,popup_color:s,priority:0}})}),e()})})}function u(e,o){return new Promise(function(i,t){p.loadImage(o,function(o,a){o?(console.log("ERROR:"+o),t(o)):(console.log("IMAGE LOADED"),p.addImage(e,a),i())})})}function d(){var e=new Date,o=e.getSeconds(),i=e.getMinutes(),t=e.getHours(),a=[].concat(n);return a.push("Última Atualização às: "+("0"+t).slice(-2)+"h"+("0"+i).slice(-2)+"m"+("0"+o).slice(-2)+"s"),a}function f(){a.push(c()),Promise.all(a).then(function(){a=[],l.forEach(function(e){s.forEach(function(o){var i="poi-"+e+"-"+o;p.removeLayer(i)})}),p.removeSource("points"),p.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:t}}),l.forEach(function(e){var o=e;"none"==o&&(o=""),s.forEach(function(i){var t="poi-"+e+"-"+i;p.addLayer({id:t,type:"symbol",source:"points",layout:{"icon-image":"{icon}","symbol-sort-key":["get","priority"]}}),p.setFilter(t,["all",[">","with_"+i,0],["==","repa",o]])})}),p.removeControl(r.obj),delete r.obj,r.obj=new mapboxgl.AttributionControl({compact:!1,customAttribution:d()}),p.addControl(r.obj),g()})}function g(){var e=$("input.type[type=radio]:checked").val(),o=$("input.repa[type=radio]:checked").val();l.forEach(function(i){s.forEach(function(t){var a="poi-"+i+"-"+t,n=(i==o||"all"==o)&&(t==e||"all"==e);p.setLayoutProperty(a,"visibility",n?"visible":"none")})})}String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},p.on("load",function(){a.push(u("REPA","/img/map/VOSTPT_JNDPA_REPA_ICON_25x25.png")),a.push(u("NONE","/img/map/VOSTPT_JNDPA_NONE_ICON_25x25.png")),a.push(u("PARTIAL","/img/map/VOSTPT_JNDPA_PARTIAL_ICON_25x25.png")),a.push(u("ALL","/img/map/VOSTPT_JNDPA_ALL_ICON_25x25.png")),a.push(c()),Promise.all(a).then(function(){a=[],p.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:t}}),l.forEach(function(e){var o=e;"none"==o&&(o=""),s.forEach(function(t){var a="poi-"+e+"-"+t;p.addLayer({id:a,type:"symbol",source:"points",layout:{"icon-image":"{icon}","symbol-sort-key":["get","priority"]}}),p.setFilter(a,["all",[">","with_"+t,0],["==","repa",o]]),function(e){p.on("click",e,function(e){var o=e.features[0].geometry.coordinates.slice(),t=e.features[0].properties.sell_gasoline&&e.features[0].properties.has_gasoline?'<img src="img/map/VOSTPT_GASPUMP_GASOLINA_500pxX500px.png"/>':'<img class="no-gas"src="img/map/VOSTPT_GASPUMP_GASOLINA_500pxX500px.png"/>',a=e.features[0].properties.sell_diesel&&e.features[0].properties.has_diesel?'<img src="img/map/VOSTPT_GASPUMP_GASOLEO_500pxX500px.png"/>':'<img class="no-gas" src="img/map/VOSTPT_GASPUMP_GASOLEO_500pxX500px.png"/>',n=e.features[0].properties.sell_lpg&&e.features[0].properties.has_lpg?'<img width="75px" src="img/map/VOSTPT_GASPUMP_GPL_500pxX500px.png"/>':'<img class="no-gas" src="img/map/VOSTPT_GASPUMP_GPL_500pxX500px.png"/>',r=e.features[0].properties.name?e.features[0].properties.name.toUpperCase():"",s="";for(s=i?'<div class="v-popup-content"><div class="v-popup-header" style="background-color:#6bd7fc"><h5>'+e.features[0].properties.brand.toUpperCase()+"<br><small>"+r+'</small></h5></div><div class="v-popup-body" style="background-color:#ffffff"><div class="row"><div class="col-md-4 v-fuel-info gasoline"><a href="#" onclick="swapIcon(this)">'+t+'</a><h6>GASOLINA</h6></div><div class="col-md-4 v-fuel-info diesel"><a href="#" onclick="swapIcon(this)">'+a+'</a><h6>GASOLEO</h6></div><div class="col-md-4 v-fuel-info lpg"><a href="#" onclick="swapIcon(this)">'+n+'</a><h6>GPL</h6></div></div><div class="row"><div class="col-md-12">Por favor indica que combústiveis não estão disponiveis na '+r+'.</div></div><div class="row"><div class="col-md-12">Carrega nas imagens deixando as disponiveis mais nitidas.</div></div></div><div class="v-popup-header" style="background-color:#6bd7fc"><a href="#" onclick="submitEntry(this,'+e.features[0].properties.id+')"><h5>VALIDAR</h5></a></div></div>':'<div class="v-popup-content"><div class="v-popup-header" style="background-color:'+e.features[0].properties.popup_color+'"><h5>'+e.features[0].properties.brand.toUpperCase()+"<br><small>"+r+'</small></h5></div><div class="v-popup-body"><div class="row"><div class="col-md-4 v-fuel-info">'+t+'<h6>GASOLINA</h6></div><div class="col-md-4 v-fuel-info">'+a+'<h6>GASOLEO</h6></div><div class="col-md-4 v-fuel-info">'+n+'<h6>GPL</h6></div></div></div><div class="v-popup-header" style="background-color:'+e.features[0].properties.popup_color+'"><h5>OBTER DIREÇÕES</h5></div><div class="v-popup-body directions"><a href="https://www.waze.com/ul?ll='+o[1]+"%2C"+o[0]+'&navigate=yes&zoom=16&download_prompt=false"  target="_blank" rel="noopener noreferrer"><img src="/img/map/map_blur.png"></a></div></div>';Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;(new mapboxgl.Popup).setLngLat(o).setHTML(s).addTo(p)}),p.on("mouseenter",e,function(){p.getCanvas().style.cursor="pointer"}),p.on("mouseleave",e,function(){p.getCanvas().style.cursor=""})}(a)})}),"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(e){p.flyTo({center:[e.coords.longitude,e.coords.latitude],zoom:14})}),r.obj=new mapboxgl.AttributionControl({compact:!1,customAttribution:d()}),p.addControl(r.obj),g(),setInterval(f,3e4)})}),p.on("error",function(e){console.log("MAP LOAD ERROR"),console.log(e)}),$("input.type[type=radio]").change(function(){g()}),$("input.repa[type=radio]").change(function(){g()})}});