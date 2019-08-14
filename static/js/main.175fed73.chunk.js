(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},40:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),i=a(8),o=a.n(i),s=a(18),u=a(9),m=a(10),p=a(13),d=a(11),h=a(14),f=a(5),E=a(7),g=function(e){var t=e.units,a=e.switchUnits;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,"Weather app"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/weather-app"},"Home")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/weather-app/about"},"About")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"#",onClick:a},"metric"===t?"\u2192\xb0F":"\u2192\xb0C"))))},b=function(e){var t=e.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-".concat(t.type," text-center")},t.msg)},w=a(37),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onSubmit=function(e){e.preventDefault(),""===a.state.text?a.props.setAlert("Please enter something","dark"):(a.props.searchPlaces(a.state.text),a.setState({text:""}))},a.onChange=function(e){return a.setState(Object(w.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement("input",{type:"text",name:"text",value:this.state.text,placeholder:"Enter City Name...",onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),this.props.showClear&&r.a.createElement("button",{className:"btn btn-grey btn-block",onClick:this.props.clearSearch},"Clear"))}}]),t}(n.Component),v=a(12),x=a.n(v),k=function(e){var t=e.period,a=e.offset,n=t.dt,c=t.main,l=t.wind,i=t.weather,o=n+a;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement(x.a,{unix:!0,format:"LT"},o))),r.a.createElement("li",null,r.a.createElement("img",{alt:i[0].description,src:"http://openweathermap.org/img/wn/".concat(i[0].icon,"@2x.png"),width:"100"})),r.a.createElement("li",null,r.a.createElement("h2",null,c.temp.toFixed(),"\xb0")),r.a.createElement("li",null,"Humidity: ",c.humidity,"%"),r.a.createElement("li",null,"Wind: ",l.speed.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",c.pressure.toFixed()," mbar")))},S=function(e){var t=e.day,a=t.ts,n=t.max_temp,c=t.min_temp,l=t.wind_spd,i=t.pop,o=t.pres,s=t.rh,u=t.weather;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement(x.a,{unix:!0,format:"ddd Do"},a))),r.a.createElement("li",null,r.a.createElement("img",{alt:u.description,src:"https://www.weatherbit.io/static/img/icons/".concat(u.icon,".png"),width:"70"})),r.a.createElement("li",null,r.a.createElement("h2",null,n.toFixed(),"\xb0/",c.toFixed(),"\xb0")),r.a.createElement("li",null,"Precipitation: ",i,"%"),r.a.createElement("li",null,"Humidity: ",s,"%"),r.a.createElement("li",null,"Wind: ",l.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",o.toFixed()," mbar")))},F=a(38),j=a.n(F),O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:j.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={btn:"16-day forecast",target:"16-day"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.current,c=t.forecastToday,l=t.forecast16,i=t.loading,o=this.state,s=o.btn,u=o.target,m=a.name,p=a.timezone,d=a.dt,h=a.weather,g=a.sky,b=a.wind,w=a.temp,y=a.pressure,v=a.humidity,F=a.icon,j=60*(new Date).getTimezoneOffset()+p,N=d+j;return 0===c.length?null:i?r.a.createElement(O,null):r.a.createElement(f.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"card grid-2",style:{padding:"0"}},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{alt:g,src:"http://openweathermap.org/img/wn/".concat(F,"@2x.png"),width:"150"})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("h1",null,w,"\xb0"),r.a.createElement("h2",null,m),r.a.createElement("h3",null,r.a.createElement(x.a,{unix:!0,format:"LT"},N)))),r.a.createElement("div",{style:{padding:"0.7rem 0"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,h)),r.a.createElement("li",null,"Humidity: ",v,"%"),r.a.createElement("li",null,"Wind: ",b.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",y.toFixed()," mbar")),r.a.createElement(f.b,{to:"/weather-app/".concat(u,"/").concat(m),className:"btn btn-dark btn-sm my-1",onClick:function(){"forecast"===u?e.setState({btn:"24-hr forecast",target:"current"}):e.setState({btn:"16-day forecast",target:"16-day"})}},s))),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement("div",{className:"grid-3"},c.map(function(e){return r.a.createElement(k,{key:e.dt,period:e,offset:j})}))}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/16-day/:name",render:function(e){return r.a.createElement("div",{className:"grid-4"},l.map(function(e){return r.a.createElement(S,{key:e.ts,day:e})}))}}))))}}]),t}(n.Component),P=function(e){var t=e.place,a=e.getForecast;console.log(t);var n=t.city,c=t.regionCode,l=t.country,i=t.latitude,o=t.longitude,s=t.temp,u=t.sky,m=t.icon;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("h1",null,s,"\xb0"),r.a.createElement("img",{alt:u,src:"http://openweathermap.org/img/wn/".concat(m,"@2x.png"),width:"100"}),r.a.createElement("h3",null,n,", ",c),r.a.createElement("h4",null,l),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/weather-app/current/".concat(n),className:"btn btn-dark btn-sm my-1",onClick:function(){return a(n,i,o)}},"Select")))},A=function(e){var t=e.places,a=e.loading,n=e.getForecast;return a?r.a.createElement(O,null):r.a.createElement("div",{className:"grid-3"},t.map(function(e){return r.a.createElement(P,{key:e.id,place:e,getForecast:n})}))},C=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"About this app"),r.a.createElement("p",null,"App to get current weather and 16-day forecast."),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),"."))},T=(a(52),a(39)),D=a.n(T),W=a(17),I=a.n(W),z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={units:"metric",loading:!1,alert:null,places:[],place:null,current:{},forecastToday:[],forecast16:[]},a.searchPlaces=function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),D.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities").query({limit:"10"}).query({namePrefix:t}).query({sort:"-population"}).set("x-rapidapi-host","wft-geo-db.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){a.setState({places:e.body.data,loading:!1}),a.getPlaceWeather(a.state.places),console.log(a.state.places)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getPlaceWeather=function(e){var t=a.state.units;e.map(function(){var e=Object(s.a)(o.a.mark(function e(a){var n,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.latitude,r=a.longitude,e.next=3,I.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(r,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 3:c=e.sent,Object.assign(a,{temp:c.data.main.temp.toFixed(),sky:c.data.weather[0].description,icon:c.data.weather[0].icon});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},a.clearSearch=function(){return a.setState({places:[],loading:!1})},a.setAlert=function(e,t){a.setState({alert:{msg:e,type:t}}),setTimeout(function(){return a.setState({alert:null})},3e3)},a.getForecast=function(){var e=Object(s.a)(o.a.mark(function e(t,n,r){var c,l,i,s,u,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.state.units,a.setState({loading:!0}),e.next=4,I.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(r,"&units=").concat(c,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 4:return l=e.sent,a.setState({current:{name:t,timezone:l.data.timezone,dt:l.data.dt,temp:l.data.main.temp.toFixed(),wind:l.data.wind.speed,pressure:l.data.main.pressure,humidity:l.data.main.humidity,weather:l.data.weather[0].main,sky:l.data.weather[0].description,icon:l.data.weather[0].icon}}),e.next=8,I.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&units=").concat(c,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 8:return i=e.sent,s=i.data.list.slice(0,9),a.setState({forecastToday:s}),u="metric"===c?"M":"I",e.next=14,I.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(n,"&lon=").concat(r,"&units=").concat(u,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 14:m=e.sent,a.setState({forecast16:m.data.data,loading:!1,place:{name:t,lat:n,lon:r}}),console.log(a.state.forecastToday),console.log(a.state.forecast16),console.log(a.state.current),console.log(a.state.place);case 20:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.switchUnits=function(){"metric"===a.state.units?a.switcher("imperial"):a.switcher("metric")},a.switcher=function(e){var t=a.state.place;null!==t?(a.setState(function(){return{units:e}},function(){return a.getForecast(t.name,t.lat,t.lon)}),a.clearSearch()):(a.setState({units:e}),a.clearSearch())},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.places,c=t.loading,l=t.alert,i=t.units,o=t.current,s=t.forecastToday,u=t.forecast16,m=t.loc;return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,{switchUnits:this.switchUnits,units:i}),r.a.createElement("div",{className:"container"},r.a.createElement(b,{alert:l}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/weather-app",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(y,{searchPlaces:e.searchPlaces,clearSearch:e.clearSearch,showClear:a.length>0,setAlert:e.setAlert}),r.a.createElement(A,{places:a,loading:c,getForecast:e.getForecast,units:i}))}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement(N,{current:o,forecastToday:s,forecast16:u,loading:c,loc:m})}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/about",component:C})))))}}]),t}(n.Component);l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.175fed73.chunk.js.map