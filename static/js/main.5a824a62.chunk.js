(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},37:function(e,t,a){e.exports=a(73)},65:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),l=a.n(r),i=a(9),o=a(10),s=Object(n.createContext)(),u=function(){var e=Object(n.useContext)(s),t=e.units,a=e.lang,r=e.switchLang,l=e.switchUnits;return c.a.createElement("nav",{className:"navbar bg-primary"},c.a.createElement("h1",null,c.a.createElement("i",{className:"fas fa-cloud-sun-rain"})," Weather app"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/weather-app"},"en"===a?"Search":"\u041f\u043e\u0438\u0441\u043a")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/weather-app/about"},"en"===a?"About":"\u0418\u043d\u0444\u043e")),c.a.createElement("li",null,c.a.createElement("div",{className:"switch"},c.a.createElement("div",{className:"select"},"metric"===t?"\xb0C":"\xb0F",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"select-drop"},c.a.createElement("li",{onClick:l},"metric"===t?"\xb0F":"\xb0C")))),c.a.createElement("li",null,c.a.createElement("div",{className:"switch"},c.a.createElement("div",{className:"select"},"en"===a?"EN":"RU",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"select-drop"},c.a.createElement("li",{onClick:r},"en"===a?"RU":"EN"))))))},m=function(){var e=Object(n.useContext)(s).alert;return null!==e&&c.a.createElement("div",{className:"alert alert-".concat(e.type," text-center")},c.a.createElement("i",{className:"fas fa-info-circle"})," ",e.msg)},p=a(7),d=function(e){var t=e.history,a=Object(n.useContext)(s),r=a.searchPlaces,l=a.clearSearch,i=a.setAlert,o=a.lang,u=a.places,m=Object(n.useState)(""),d=Object(p.a)(m,2),E=d[0],f=d[1];Object(n.useEffect)(function(){t.push("/weather-app")},[u]);return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===E?i("en"===o?"Please enter something":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c","dark"):(r(E),f(""))},className:"form"},c.a.createElement("input",{type:"text",name:"text",value:E,placeholder:"en"===o?"Enter City Name...":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435...",onChange:function(e){return f(e.target.value)}}),c.a.createElement("input",{type:"submit",value:"en"===o?"Search":"\u041f\u043e\u0438\u0441\u043a",className:"btn btn-dark btn-block"})),u.length>0&&"/weather-app"===window.location.pathname&&c.a.createElement("button",{className:"btn btn-grey btn-block",onClick:l},"en"===o?"Clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))},E=a(12),f=a.n(E),h=function(e){var t=e.period,a=e.offset,n=e.lang,r=t.dt,l=t.main,i=t.weather,o=r+a;return c.a.createElement("div",{className:"card text-center"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h3",null,c.a.createElement(f.a,{locale:n,unix:!0,format:"ddd LT"},o))),c.a.createElement("li",null,c.a.createElement("img",{alt:i[0].description,src:"https://openweathermap.org/img/wn/".concat(i[0].icon,"@2x.png"),style:{width:"100px"}})),c.a.createElement("li",null,c.a.createElement("h1",null,l.temp.toFixed(),"\xb0"))))},g=function(e){var t=e.day,a=e.lang,n=t.ts,r=t.max_temp,l=t.min_temp,i=t.wind_spd,o=t.pop,s=t.pres,u=t.rh,m=t.weather;return c.a.createElement("div",{className:"card text-center"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h3",null,c.a.createElement(f.a,{locale:a,unix:!0,format:"ddd Do"},n))),c.a.createElement("li",null,c.a.createElement("img",{alt:m.description,src:"https://www.weatherbit.io/static/img/icons/".concat(m.icon,".png"),style:{width:"70px"}})),c.a.createElement("li",null,c.a.createElement("h2",null,r.toFixed(),"\xb0/",l.toFixed(),"\xb0")),c.a.createElement("li",null,"en"===a?"Precipitation: ":"\u041e\u0441\u0430\u0434\u043a\u0438: ",o,"%"),c.a.createElement("li",null,"en"===a?"Humidity: ":"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",u,"%"),c.a.createElement("li",null,"en"===a?"Wind: ":"\u0412\u0435\u0442\u0435\u0440: ",i.toFixed(1)," ","en"===a?"m/s":"\u043c/\u0441"),c.a.createElement("li",null,"en"===a?"Pressure: ":"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",s.toFixed()," ","en"===a?"mbar":"\u043c\u0431\u0430\u0440")))},y=a(35),b=a.n(y),w=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("img",{src:b.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},x=function(){var e=Object(n.useContext)(s),t=e.current,a=e.forecastToday,r=e.forecast16,l=e.getWeather,u=e.loading,m=e.units,d=e.lang,E=Object(n.useState)(""),y=Object(p.a)(E,2),b=y[0],x=y[1],v=Object(n.useState)(""),O=Object(p.a)(v,2),j=O[0],N=O[1];Object(n.useEffect)(function(){"en"===d?(x("16-day forecast"),N("16-day")):(x("\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 16 \u0434\u043d\u0435\u0439"),N("16-day"))},[]),Object(n.useEffect)(function(){T()},[d,j]),Object(n.useEffect)(function(){l()},[m]);var T=function(){x("16-day"===j?"en"===d?"16-day forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 16 \u0434\u043d\u0435\u0439":"en"===d?"30-hr forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 30 \u0447\u0430\u0441\u043e\u0432")},C=t.name,A=t.timezone,S=t.dt,_=t.weather,k=t.sky,R=t.wind,P=t.temp,L=t.pressure,F=t.humidity,H=t.icon,I=60*(new Date).getTimezoneOffset()+A,W=S+I;return 0===a.length?null:u?c.a.createElement(w,null):c.a.createElement(i.a,null,c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card grid-2"},c.a.createElement("div",{className:"card grid-2"},c.a.createElement("div",{className:"all-center"},c.a.createElement("img",{alt:k,src:"https://openweathermap.org/img/wn/".concat(H,"@2x.png"),style:{width:"150px"}})),c.a.createElement("div",{style:{margin:"auto 0"}},c.a.createElement("h1",null,P,"\xb0"),c.a.createElement("h2",null,C),c.a.createElement("h3",null,c.a.createElement(f.a,{locale:d,unix:!0,format:"LT"},W)))),c.a.createElement("div",{style:{margin:"auto 0"}},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h3",null,"en"===d?_:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f:")),c.a.createElement("li",null,"en"===d?"Humidity: ":"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",F,"%"),c.a.createElement("li",null,"en"===d?"Wind: ":"\u0412\u0435\u0442\u0435\u0440: ",R.toFixed(1)," ","en"===d?"m/s":"\u043c/\u0441"),c.a.createElement("li",null,"en"===d?"Pressure: ":"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",L.toFixed()," ","en"===d?"mbar":"\u043c\u0431\u0430\u0440")),c.a.createElement(i.b,{to:"/weather-app/".concat(j,"/").concat(C),className:"btn btn-dark btn-sm my-1",onClick:function(){return function(e){N("16-day"===e?"current":"16-day")}(j)}},b))),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return c.a.createElement("div",{className:"grid-5"},a.map(function(e){return c.a.createElement(h,{key:e.dt,period:e,offset:I,lang:d})}))}}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/16-day/:name",render:function(e){return c.a.createElement("div",{className:"grid-4"},r.map(function(e){return c.a.createElement(g,{key:e.ts,day:e,lang:d})}))}}))))},v=a(4),O=a.n(v),j=a(11),N=a(14),T=a.n(N),C=function(e){var t=e.selectPlace,a=e.place,r=e.lang,l=e.units,o=Object(n.useState)(""),s=Object(p.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(""),E=Object(p.a)(d,2),f=E[0],h=E[1],g=Object(n.useState)(""),y=Object(p.a)(g,2),b=y[0],w=y[1];Object(n.useEffect)(function(){x()},[l]);var x=function(){var e=Object(j.a)(O.a.mark(function e(){var t,n,c,r,i,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.latitude,n=a.longitude,e.next=3,T.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&units=").concat(l,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 3:c=e.sent,r=c.data,i=r.main,o=r.weather,m(i.temp.toFixed()),h(o[0].description),w(o[0].icon);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=a.city,N=a.regionCode,C=a.country;return c.a.createElement("div",{className:"card text-center"},c.a.createElement("h1",null,u,"\xb0"),c.a.createElement("img",{alt:f,src:"https://openweathermap.org/img/wn/".concat(b,"@2x.png"),style:{width:"100px"}}),c.a.createElement("h3",null,v,", ",N),c.a.createElement("h4",null,C),c.a.createElement("div",null,c.a.createElement(i.b,{to:"/weather-app/current/".concat(v),className:"btn btn-dark btn-sm my-1",onClick:function(){return t(a)}},"en"===r?"Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")))},A=function(){var e=Object(n.useContext)(s),t=e.places,a=e.selectPlace,r=e.loading,l=e.lang,i=e.units;return r?c.a.createElement(w,null):c.a.createElement("div",{className:"grid-3"},t.map(function(e){return c.a.createElement(C,{key:e.id,place:e,selectPlace:a,units:i,lang:l})}))},S=function(){return"en"===Object(n.useContext)(s).lang?c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"About this app"),c.a.createElement("p",null,"An application for finding weather in more than 134,000 cities in the world."),c.a.createElement("p",null,"Provides information on current weather, as well as a detailed forecast for the next 30 hours and a forecast for 16 days."),c.a.createElement("p",null,"Made by ",c.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),".")):c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),c.a.createElement("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 134 000 \u0433\u043e\u0440\u043e\u0434\u0430\u0445 \u043c\u0438\u0440\u0430."),c.a.createElement("p",null,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043e\u0433\u043e\u0434\u0435, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 30 \u0447\u0430\u0441\u043e\u0432 \u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 16 \u0434\u043d\u0435\u0439."),c.a.createElement("p",null,"\u0421\u0434\u0435\u043b\u0430\u043b ",c.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),"."))},_=function(){return"en"===Object(n.useContext)(s).lang?c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"Not Found"),c.a.createElement("p",{className:"lead"},"The page you are looking for does not exist...")):c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),c.a.createElement("p",{className:"lead"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0438\u0449\u0435\u0442\u0435, \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442..."))},k=(a(65),a(36)),R=a.n(k),P=a(6),L=function(e,t){switch(t.type){case"SEARCH_PLACES":return Object(P.a)({},e,{places:t.payload,loading:!1});case"CLEAR_SEARCH":return Object(P.a)({},e,{places:[]});case"SELECT_PLACE":return Object(P.a)({},e,{place:t.payload,loading:!1});case"GET_CURRENT_WEATHER":return Object(P.a)({},e,{current:t.payload,loading:!1});case"GET_TODAY_WEATHER":return Object(P.a)({},e,{forecastToday:t.payload,loading:!1});case"GET_FORECAST":return Object(P.a)({},e,{forecast16:t.payload,loading:!1});case"SWITCH_LANG":return Object(P.a)({},e,{lang:t.payload});case"SWITCH_UNITS":return Object(P.a)({},e,{units:t.payload});case"SET_ALERT":return Object(P.a)({},e,{alert:t.payload,loading:!1});case"REMOVE_ALERT":return Object(P.a)({},e,{alert:null});case"SET_LOADING":return Object(P.a)({},e,{loading:!0});default:return e}},F=function(e){var t=Object(n.useReducer)(L,{units:"metric",lang:"en",loading:!1,alert:null,places:[],place:null,current:{},forecastToday:[],forecast16:[]}),a=Object(p.a)(t,2),r=a[0],l=a[1],i=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d(),R.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities").query({limit:"10"}).query({namePrefix:t}).query({sort:"-population"}).query({languageCode:r.lang}).set("x-rapidapi-host","wft-geo-db.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){if(0===e.body.data.length){var t="en"===r.lang?"No cities found. Check the spelling and try again":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430";o(t,"dark")}else l({type:"SEARCH_PLACES",payload:e.body.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),o=function(e,t){l({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout(function(){return l({type:"REMOVE_ALERT"})},3e3)},u=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l({type:"SELECT_PLACE",payload:t});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(O.a.mark(function e(){var t,a,n,c,i,o,s,u,m,p,E,f,h,g,y,b,w,x,v,N,C,A,S;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(),t=r.units,a=r.place,n=a.city,c=a.latitude,i=a.longitude,e.next=4,T.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(i,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 4:return o=e.sent,s=o.data,u=s.timezone,m=s.dt,p=s.main,E=s.wind,f=s.weather,h=s.sys,g=p.temp,y=p.pressure,b=p.humidity,w=h.sunrise,x=h.sunset,v={name:n,timezone:u,dt:m,temp:g.toFixed(),wind:E.speed,pressure:y,humidity:b,weather:f[0].main,sky:f[0].description,icon:f[0].icon,sunrise:w,sunset:x},l({type:"GET_CURRENT_WEATHER",payload:v}),e.next=10,T.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(c,"&lon=").concat(i,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 10:return N=e.sent,(C=N.data.list.slice(0,10)).map(function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w+86400<t.dt&&t.dt<x+86400?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"d":x<t.dt&&t.dt<w+86400?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"n":w<t.dt&&t.dt<x?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"d":x-86400<t.dt&&t.dt<w&&(t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"n");case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),l({type:"GET_TODAY_WEATHER",payload:C}),A="metric"===t?"M":"I",e.next=17,T.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(c,"&lon=").concat(i,"&units=").concat(A,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 17:S=e.sent,l({type:"GET_FORECAST",payload:S.data.data});case 19:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){return l({type:"SET_LOADING"})};return c.a.createElement(s.Provider,{value:{units:r.units,lang:r.lang,loading:r.loading,alert:r.alert,places:r.places,place:r.place,current:r.current,forecastToday:r.forecastToday,forecast16:r.forecast16,searchPlaces:i,clearSearch:function(){return l({type:"CLEAR_SEARCH"})},setAlert:o,selectPlace:u,getWeather:m,switchUnits:function(){"metric"===r.units?l({type:"SWITCH_UNITS",payload:"imperial"}):l({type:"SWITCH_UNITS",payload:"metric"})},switchLang:function(){"en"===r.lang?l({type:"SWITCH_LANG",payload:"ru"}):l({type:"SWITCH_LANG",payload:"en"})}}},e.children)},H=function(){return c.a.createElement(F,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement(m,null),c.a.createElement(o.a,{path:"/weather-app",component:d}),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/weather-app",component:A}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/current/:name",component:x}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/about",component:S}),c.a.createElement(o.a,{component:_}))))))};a(72);l.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5a824a62.chunk.js.map