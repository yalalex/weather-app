(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},37:function(e,t,a){e.exports=a(73)},65:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),l=a.n(r),i=a(9),o=a(10),s=Object(n.createContext)(),m=function(){var e=Object(n.useContext)(s),t=e.units,a=e.lang,r=e.switchLang,l=e.switchUnits;return c.a.createElement("nav",{className:"navbar bg-primary"},c.a.createElement("h1",null,c.a.createElement("i",{className:"fas fa-cloud-sun-rain"})," Weather app"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/weather-app"},"en"===a?"Search":"\u041f\u043e\u0438\u0441\u043a")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/weather-app/about"},"en"===a?"About":"\u0418\u043d\u0444\u043e")),c.a.createElement("li",null,c.a.createElement("div",{className:"switch"},c.a.createElement("div",{className:"select"},"metric"===t?"\xb0C":"\xb0F",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"select-drop"},c.a.createElement("li",{onClick:function(){return l(t)}},"metric"===t?"\xb0F":"\xb0C")))),c.a.createElement("li",null,c.a.createElement("div",{className:"switch"},c.a.createElement("div",{className:"select"},"en"===a?"EN":"RU",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("ul",{className:"select-drop"},c.a.createElement("li",{onClick:function(){return r(a)}},"en"===a?"RU":"EN"))))))},u=function(){var e=Object(n.useContext)(s).alert;return null!==e&&c.a.createElement("div",{className:"alert alert-".concat(e.type," text-center")},c.a.createElement("i",{className:"fas fa-info-circle"})," ",e.msg)},p=a(7),d=function(e){var t=e.history,a=e.location,r=Object(n.useContext)(s),l=r.searchPlaces,i=r.clearSearch,o=r.setAlert,m=r.lang,u=r.places,d=Object(n.useState)(""),E=Object(p.a)(d,2),f=E[0],h=E[1];Object(n.useEffect)(function(){t.push("/weather-app")},[u]);return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===f?o("en"===m?"Please enter something":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c","dark"):(l(f),h(""))},className:"form"},c.a.createElement("input",{type:"text",name:"text",value:f,placeholder:"en"===m?"Enter City Name...":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435...",onChange:function(e){return h(e.target.value)}}),c.a.createElement("input",{type:"submit",value:"en"===m?"Search":"\u041f\u043e\u0438\u0441\u043a",className:"btn btn-dark btn-block"})),u.length>0&&"/weather-app"===a.pathname&&c.a.createElement("button",{className:"btn btn-grey btn-block my-1",onClick:i},"en"===m?"Clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))},E=a(12),f=a.n(E),h=function(e){var t=e.period,a=e.offset,n=e.lang,r=t.dt,l=t.main,i=t.weather,o=r+a;return c.a.createElement("div",{className:"weatheritem"},c.a.createElement("h3",null,c.a.createElement(f.a,{locale:n,unix:!0,format:"ddd LT"},o)),c.a.createElement("img",{alt:i[0].description,src:"https://openweathermap.org/img/wn/".concat(i[0].icon,"@2x.png"),style:{width:"100px"}}),c.a.createElement("h1",null,l.temp.toFixed(),"\xb0"))},g=function(e){var t=e.day,a=e.lang,r=e.units,l=t.ts,i=t.max_temp,o=t.min_temp,s=t.wind_spd,m=t.pop,u=t.pres,p=t.rh,d=t.weather;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"weatheritem"},c.a.createElement("h3",null,c.a.createElement(f.a,{locale:a,unix:!0,format:"dd Do"},l)),c.a.createElement("img",{alt:d.description,src:"https://www.weatherbit.io/static/img/icons/".concat(d.icon,".png"),style:{width:"70px"}}),c.a.createElement("h2",null,i.toFixed(),"\xb0/",o.toFixed(),"\xb0"),c.a.createElement("div",{className:"conditions"},c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-umbrella"}),m,"%"),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-water"}),p,"%"))),c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-wind"}),s.toFixed(1),"en"===a?"metric"===r?"m/s":"mph":"metric"===r?"\u043c/c":"\u043c/\u0447"),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-square"}),u.toFixed(),"en"===a?"mb":"\u043c\u0431"))))))},y=a(35),b=a.n(y),w=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("img",{src:b.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},x=function(){var e=Object(n.useContext)(s),t=e.current,a=e.forecastToday,r=e.forecast15,l=e.getWeather,m=e.place,u=e.loading,d=e.units,E=e.lang,y=Object(n.useState)(""),b=Object(p.a)(y,2),x=b[0],v=b[1],O=Object(n.useState)(""),N=Object(p.a)(O,2),j=N[0],C=N[1];Object(n.useEffect)(function(){"en"===E?(v("15-day forecast"),C("15-day")):(v("\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439"),C("15-day"))},[]),Object(n.useEffect)(function(){T()},[E,j]),Object(n.useEffect)(function(){l(m,d)},[d]);var T=function(){v("15-day"===j?"en"===E?"15-day forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439":"en"===E?"48-hr forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 48 \u0447\u0430\u0441\u043e\u0432")},A=t.name,_=t.timezone,S=t.dt,k=t.weather,F=t.sky,R=t.wind,L=t.temp,P=t.pressure,H=t.humidity,I=t.icon,W=60*(new Date).getTimezoneOffset()+_,D=S+W;return u||0===r.length?c.a.createElement(w,null):c.a.createElement(i.a,null,c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card grid-2"},c.a.createElement("div",{className:"card grid-2"},c.a.createElement("div",{className:"all-center"},c.a.createElement("img",{alt:F,src:"https://openweathermap.org/img/wn/".concat(I,"@2x.png"),style:{width:"150px"}})),c.a.createElement("div",{style:{margin:"auto 0"}},c.a.createElement("h1",null,L.toFixed(),"\xb0"),c.a.createElement("h3",null,r[0].max_temp.toFixed(),"\xb0/",r[0].min_temp.toFixed(),"\xb0"),c.a.createElement("h2",null,A),c.a.createElement("h4",null,c.a.createElement(f.a,{locale:E,unix:!0,format:"LT"},D)))),c.a.createElement("div",{style:{margin:"auto 0"}},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h3",null,"en"===E?k:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f:")),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-water"})," ","en"===E?"Humidity: ":"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",H,"%"),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-wind"})," ","en"===E?"Wind: ":"\u0412\u0435\u0442\u0435\u0440: ",R.toFixed(1)," ","en"===E?"metric"===d?"m/s":"mph":"metric"===d?"\u043c/c":"\u043c/\u0447"),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-square"})," ","en"===E?"Pressure: ":"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",P.toFixed()," ","en"===E?"mbar":"\u043c\u0431\u0430\u0440")),c.a.createElement(i.b,{to:"/weather-app/".concat(j,"/").concat(A),className:"btn btn-dark btn-sm my-1",onClick:function(){return function(e){C("15-day"===e?"current":"15-day")}(j)}},x))),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return c.a.createElement("div",{className:"listitems"},a.map(function(e){return c.a.createElement(h,{key:e.dt,period:e,offset:W,lang:E})}))}}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/15-day/:name",render:function(e){return c.a.createElement("div",{className:"listitems"},r.map(function(e){return c.a.createElement(g,{key:e.ts,day:e,lang:E,units:d})}))}}))))},v=a(4),O=a.n(v),N=a(11),j=a(14),C=a.n(j),T=function(e){var t=e.place,a=Object(n.useContext)(s),r=a.units,l=a.selectPlace,o=Object(n.useState)(""),m=Object(p.a)(o,2),u=m[0],d=m[1],E=Object(n.useState)(""),f=Object(p.a)(E,2),h=f[0],g=f[1],y=Object(n.useState)(""),b=Object(p.a)(y,2),w=b[0],x=b[1];Object(n.useEffect)(function(){v()},[r]);var v=function(){var e=Object(N.a)(O.a.mark(function e(){var a,n,c,l,i,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.latitude,n=t.longitude,e.next=3,C.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&units=").concat(r,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 3:c=e.sent,l=c.data,i=l.main,o=l.weather,"-0"===i.temp.toFixed()&&(i.temp=0),d(i.temp.toFixed()),g(o[0].description),x(o[0].icon);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=t.city,T=t.regionCode,A=t.country;return c.a.createElement(i.b,{to:"/weather-app/current/".concat(j),onClick:function(){return l(t)}},c.a.createElement("div",{className:"placeitem"},c.a.createElement("h1",null,u,"\xb0"),c.a.createElement("img",{alt:h,src:"https://openweathermap.org/img/wn/".concat(w,"@2x.png"),style:{width:"100px"}}),c.a.createElement("div",{className:"all-center"},c.a.createElement("h3",null,j,", ",T),c.a.createElement("h4",null,A))))},A=function(){var e=Object(n.useContext)(s),t=e.places;return e.loading?c.a.createElement(w,null):c.a.createElement("div",{className:"listitems"},t.map(function(e){return c.a.createElement(T,{key:e.id,place:e})}))},_=function(){return"en"===Object(n.useContext)(s).lang?c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"About this app"),c.a.createElement("p",null,"An application for finding weather in more than 134,000 cities in the world."),c.a.createElement("p",null,"Provides information on current weather, as well as a detailed forecast for the next 48 hours and a forecast for 15 days."),c.a.createElement("p",null,"Made by ",c.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),".")):c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),c.a.createElement("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 134 000 \u0433\u043e\u0440\u043e\u0434\u0430\u0445 \u043c\u0438\u0440\u0430."),c.a.createElement("p",null,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043e\u0433\u043e\u0434\u0435, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439."),c.a.createElement("p",null,"\u0421\u0434\u0435\u043b\u0430\u043b ",c.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),"."))},S=function(){return"en"===Object(n.useContext)(s).lang?c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"Not Found"),c.a.createElement("p",{className:"lead"},"The page you are looking for does not exist...")):c.a.createElement(n.Fragment,null,c.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),c.a.createElement("p",{className:"lead"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0438\u0449\u0435\u0442\u0435, \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442..."))},k=(a(65),a(36)),F=a.n(k),R=a(6),L=function(e,t){switch(t.type){case"SEARCH_PLACES":return Object(R.a)({},e,{places:t.payload,loading:!1});case"CLEAR_SEARCH":return Object(R.a)({},e,{places:[]});case"SELECT_PLACE":return Object(R.a)({},e,{place:t.payload});case"GET_CURRENT_WEATHER":return Object(R.a)({},e,{current:t.payload});case"GET_TODAY_WEATHER":return Object(R.a)({},e,{forecastToday:t.payload});case"GET_FORECAST":return Object(R.a)({},e,{forecast15:t.payload,loading:!1});case"SWITCH_LANG":return Object(R.a)({},e,{lang:"en"===t.payload?"ru":"en"});case"SWITCH_UNITS":return Object(R.a)({},e,{units:"metric"===t.payload?"imperial":"metric"});case"SET_ALERT":return Object(R.a)({},e,{alert:t.payload,loading:!1});case"REMOVE_ALERT":return Object(R.a)({},e,{alert:null});case"SET_LOADING":return Object(R.a)({},e,{loading:!0});default:return e}},P=function(e){var t=Object(n.useReducer)(L,{units:"metric",lang:"en",loading:!1,alert:null,places:[],place:null,current:{},forecastToday:[],forecast15:[]}),a=Object(p.a)(t,2),r=a[0],l=a[1],i=function(e,t){l({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout(function(){return l({type:"REMOVE_ALERT"})},3e3)},o=function(){var e=Object(N.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u(),F.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities").query({limit:"10"}).query({namePrefix:t}).query({sort:"-population"}).query({languageCode:r.lang}).set("x-rapidapi-host","wft-geo-db.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){if(0===e.body.data.length){var t="en"===r.lang?"No cities found. Check the spelling and try again":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430";i(t,"dark")}else l({type:"SEARCH_PLACES",payload:e.body.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(N.a)(O.a.mark(function e(t,a){var n,c,r,i,o,s,m,p,d,E,f,h,g,y,b,w,x,v,j,T,A,_;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(),n=t.city,c=t.latitude,r=t.longitude,e.next=4,C.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(r,"&units=").concat(a,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 4:return i=e.sent,o=i.data,s=o.timezone,m=o.dt,p=o.main,d=o.wind,E=o.weather,f=o.sys,h=p.temp,g=p.pressure,y=p.humidity,b=f.sunrise,w=f.sunset,"-0"===(x={name:n,timezone:s,dt:m,temp:h,wind:d.speed,pressure:g,humidity:y,weather:E[0].main,sky:E[0].description,icon:E[0].icon,sunrise:b,sunset:w}).temp.toFixed()&&(x.temp=0),l({type:"GET_CURRENT_WEATHER",payload:x}),e.next=11,C.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(c,"&lon=").concat(r,"&units=").concat(a,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 11:return v=e.sent,(j=v.data.list.slice(0,15)).map(function(){var e=Object(N.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"-0"===t.main.temp.toFixed()&&(t.main.temp=0),b+86400<t.dt&&t.dt<w+86400?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"d":w<t.dt&&t.dt<b+86400?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"n":b<t.dt&&t.dt<w?t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"d":w-86400<t.dt&&t.dt<b&&(t.weather[0].icon=t.weather[0].icon.slice(0,-1)+"n");case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),l({type:"GET_TODAY_WEATHER",payload:j}),T="metric"===a?"M":"I",e.next=18,C.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(c,"&lon=").concat(r,"&units=").concat(T,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 18:A=e.sent,(_=A.data.data.slice(1,16)).map(function(){var e=Object(N.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"-0"===t.max_temp.toFixed()&&(t.max_temp=0),"-0"===t.min_temp.toFixed()&&(t.min_temp=0);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),l({type:"GET_FORECAST",payload:_});case 22:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),u=function(){return l({type:"SET_LOADING"})};return c.a.createElement(s.Provider,{value:{units:r.units,lang:r.lang,loading:r.loading,alert:r.alert,places:r.places,place:r.place,current:r.current,forecastToday:r.forecastToday,forecast15:r.forecast15,searchPlaces:o,clearSearch:function(){return l({type:"CLEAR_SEARCH"})},setAlert:i,selectPlace:function(e){l({type:"SELECT_PLACE",payload:e})},getWeather:m,switchUnits:function(e){return l({type:"SWITCH_UNITS",payload:e})},switchLang:function(e){return l({type:"SWITCH_LANG",payload:e})}}},e.children)},H=function(){return c.a.createElement(P,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(o.a,{path:"/weather-app",component:d}),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/weather-app",component:A}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/current/:name",component:x}),c.a.createElement(o.a,{exact:!0,path:"/weather-app/about",component:_}),c.a.createElement(o.a,{component:S}))))))};a(72);l.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ce851292.chunk.js.map