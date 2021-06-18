(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(t,e,c){},28:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(13),s=c.n(a),i=(c(28),c(29),c(2)),r=c(8),o=c(9),l=(c(11),c(1));Storage.prototype.setObj=function(t,e){return this.setItem(t,JSON.stringify(e))},Storage.prototype.getObj=function(t){return JSON.parse(this.getItem(t))};var j=function(t){var e=t.city,c=t.displayDeleteLink,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],j=s[1];return console.log("city passed here="+e),Object(n.useEffect)((function(){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=imperial&appid=").concat("60883d4567df70d5f670df6b8fbfff20");fetch(t).then((function(t){return t.json()})).then((function(t){j(t)})).catch((function(t){console.error(t)}))}),[e]),Object(l.jsx)(l.Fragment,{children:i.weather?Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(o.b,{className:"link",to:"/forecast/".concat(e),children:[Object(l.jsxs)("h3",{children:[i.name,", ",i.sys.country]}),Object(l.jsxs)("p",{children:[i.main.temp,"\xb0F"]}),Object(l.jsx)("p",{children:i.weather[0].description}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(i.weather[0].icon,"@2x.png"),alt:"weather-icon"})]}),c?Object(l.jsx)("button",{className:"deleteBttn",onClick:function(){return function(t){console.log("Deleted "+e.toUpperCase());var c=localStorage.getObj("city");c.splice(c.indexOf(t),1),console.log(c),localStorage.setObj("city",c),window.location.reload()}(e)},children:"Delete city"}):null]},e):null})},d=["Hong Kong","Cairo","Edinburgh","London","New York","Boston","Moscow","Juneau","Montevideo","Tel Aviv","Brussels","Cape Town","Rome","Tokyo","Manila","Istanbul"],h=function(){return Object(l.jsx)("div",{className:"cardContainer",children:d.map((function(t){return Object(l.jsx)(j,{city:t},t)}))})},p=c.p+"static/media/weather.660f4c18.png",u=c.p+"static/media/map.8f5b2ad6.jpeg",b=c.p+"static/media/city.6b0dbfbb.png",m=function(){return Object(l.jsxs)("div",{className:"mainNavContainer",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("img",{className:"logo",src:p,title:"Go home",alt:"Sun and Clouds"})}),Object(l.jsx)(o.b,{to:"/map",children:Object(l.jsx)("img",{className:"map",src:u,title:"View Map",alt:"Map Link"})}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{className:"saved-cities",to:"/user_cities",children:Object(l.jsx)("img",{className:"star",title:"User Cities",src:b,alt:"favorite-star-icon"})})})]})},f=c(20),O=c.n(f),x=function(t){var e=t.match,c=Object(n.useState)([]),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){var t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e.params.city,"&units=imperial&appid=").concat("60883d4567df70d5f670df6b8fbfff20");fetch(t).then((function(t){return t.json()})).then((function(t){i(t)})).catch((function(t){console.error(t)}))}),[e.params.city]),Object(l.jsx)(l.Fragment,{children:s.list?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"city-header",children:Object(l.jsxs)("h2",{children:["5 Day Forecast For ",e.params.city]})}),Object(l.jsx)("div",{children:function(){for(var t=[],e=0;e<=35;){for(var c=[],n=e;n<=e+7;n++)n%8===0&&c.push(Object(l.jsxs)("div",{className:"dateHeader",children:["Date: ",O()(s.list[n].dt_txt).format("MM-DD-YYYY")]})),c.push(Object(l.jsx)("div",{className:"childBox",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("h3",{children:[" ",O()(s.list[n].dt_txt).format("hh:mm A")]}),Object(l.jsx)("img",{alt:"weather-icon",src:"http://openweathermap.org/img/wn/".concat(s.list[n].weather[0].icon,".png")}),Object(l.jsxs)("li",{children:["Weather: ",s.list[n].weather[0].main]}),Object(l.jsxs)("li",{children:["Temp: ",s.list[n].main.temp," \xb0F "]})]})}));t.push(Object(l.jsx)("div",{className:"parentBox",children:c})),e+=8}return Object(l.jsx)("div",{className:"boxContainer",children:t})}()})]}):null})},g=function(t){var e=t.addCity,c=Object(n.useState)(""),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(l.jsxs)("form",{className:"saved-form",onSubmit:function(t){t.preventDefault(),e(s)},children:[Object(l.jsx)("label",{children:"City Name:"}),Object(l.jsx)("input",{type:"text",value:s,required:!0,onChange:function(t){return i(t.target.value)}}),Object(l.jsx)("input",{className:"add-city",type:"submit",value:"Add City"})]})};Storage.prototype.setObj=function(t,e){return this.setItem(t,JSON.stringify(e))},Storage.prototype.getObj=function(t){return JSON.parse(this.getItem(t))};var v=function(t){var e=localStorage.getObj("city");return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{addCity:function(t){var e=localStorage.getObj("city");null===e&&(e=[]),e.includes(t.toUpperCase())||(e.push(t.toUpperCase()),localStorage.setObj("city",e),window.location.reload())}}),Object(l.jsx)("div",{className:"cardContainer",children:e?e.map((function(t){return Object(l.jsx)(j,{city:t,displayDeleteLink:!0},t)})):null})]})},y=c(39),w=c(40),N=function(){return Object(l.jsxs)("div",{className:"map__container",children:[Object(l.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"}),Object(l.jsx)("script",{src:"https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"}),Object(l.jsx)(y.a,{center:[44.967243,-103.771556],zoom:3,style:{height:"100vh",width:"100%"},onClick:function(t){return console.log("click")},children:Object(l.jsx)(w.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})]})};var C=function(){return Object(n.useEffect)((function(){document.title="WeatherApp"}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"topNavBar",children:Object(l.jsx)(m,{})})}),Object(l.jsxs)("main",{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:h}),Object(l.jsx)(i.a,{path:"/forecast/:city",render:function(t){return Object(l.jsx)(x,{match:t.match})}}),Object(l.jsx)(i.a,{path:"/user_cities",component:v}),Object(l.jsx)(i.a,{path:"/map",component:N})]})]})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};s.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.6b41f187.chunk.js.map