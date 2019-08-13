(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},39:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),i=a(13),o=a.n(i),s=a(17),u=a(7),m=a(8),p=a(10),d=a(9),h=a(11),g=a(5),f=a(12),E=function(e){var t=e.units,a=e.switchUnits;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,"Weather app"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.b,{to:"/weather-app"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/weather-app/about"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"#",onClick:a},"metric"===t?"\u2192\xb0F":"\u2192\xb0C"))))},b=function(e){var t=e.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-".concat(t.type," text-center")},t.msg)},w=a(36),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onSubmit=function(e){e.preventDefault(),""===a.state.text?a.props.setAlert("Please enter something","dark"):(a.props.searchPlaces(a.state.text),a.setState({text:""}))},a.onChange=function(e){return a.setState(Object(w.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement("input",{type:"text",name:"text",value:this.state.text,placeholder:"Enter City Name...",onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),this.props.showClear&&r.a.createElement("button",{className:"btn btn-grey btn-block",onClick:this.props.clearSearch},"Clear"))}}]),t}(n.Component),v=function(e){var t=e.period,a=t.dt_txt,n=t.main,c=t.wind,l=t.weather,i=new Date(a).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,i)),r.a.createElement("li",null,r.a.createElement("img",{alt:l[0].description,src:"http://openweathermap.org/img/wn/".concat(l[0].icon,"@2x.png"),width:"100"})),r.a.createElement("li",null,r.a.createElement("h2",null,n.temp.toFixed(),"\xb0")),r.a.createElement("li",null,"Humidity: ",n.humidity,"%"),r.a.createElement("li",null,"Wind: ",c.speed.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",n.pressure.toFixed()," mbar")))},x=function(e){var t=e.day,a=t.valid_date,n=t.max_temp,c=t.min_temp,l=t.wind_spd,i=t.pop,o=t.pres,s=t.rh,u=t.weather,m=new Date(a).toLocaleDateString(navigator.language,{weekday:"short",month:"short",day:"numeric"});return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,m)),r.a.createElement("li",null,r.a.createElement("img",{alt:u.description,src:"https://www.weatherbit.io/static/img/icons/".concat(u.icon,".png"),width:"70"})),r.a.createElement("li",null,r.a.createElement("h2",null,n.toFixed(),"\xb0/",c.toFixed(),"\xb0")),r.a.createElement("li",null,"Precipitation: ",i,"%"),r.a.createElement("li",null,"Humidity: ",s,"%"),r.a.createElement("li",null,"Wind: ",l.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",o.toFixed()," mbar")))},k=a(37),S=a.n(k),j=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:S.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={btn:"16-day forecast",target:"forecast"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.current,c=t.forecastToday,l=t.forecast16,i=t.loading,o=a.name,s=a.weather,u=a.sky,m=a.wind,p=a.temp,d=a.pressure,h=a.humidity,E=a.icon,b=(new Date).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),w=this.state,y=w.btn,k=w.target;return 0===c.length?null:i?r.a.createElement(j,null):r.a.createElement(g.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"card grid-2",style:{padding:"0"}},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{alt:u,src:"http://openweathermap.org/img/wn/".concat(E,"@2x.png"),width:"150"})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("h1",null,p,"\xb0"),r.a.createElement("h2",null,o),r.a.createElement("h3",null,b))),r.a.createElement("div",{style:{padding:"0.7rem 0"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,s)),r.a.createElement("li",null,"Humidity: ",h,"%"),r.a.createElement("li",null,"Wind: ",m.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",d.toFixed()," mbar")),r.a.createElement(g.b,{to:"/weather-app/".concat(k,"/").concat(o),className:"btn btn-dark btn-sm my-1",onClick:function(){"forecast"===k?e.setState({btn:"24-hr forecast",target:"current"}):e.setState({btn:"16-day forecast",target:"forecast"})}},y))),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement("div",{className:"grid-3"},c.map(function(e){return r.a.createElement(v,{key:e.dt,period:e})}))}}),r.a.createElement(f.a,{exact:!0,path:"/weather-app/forecast/:name",render:function(e){return r.a.createElement("div",{className:"grid-4"},l.map(function(e){return r.a.createElement(x,{key:e.ts,day:e})}))}}))))}}]),t}(n.Component),F=a(15),N=a.n(F),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",sky:"",temp:"",icon:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t,a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.place,n=t.units,e.next=3,N.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(a.latitude,"&lon=").concat(a.longitude,"&units=").concat(n,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 3:r=e.sent,this.setState({name:r.data.name,temp:r.data.main.temp.toFixed(),sky:r.data.weather[0].description,icon:r.data.weather[0].icon}),console.log(this.state);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.place,a=e.getForecast,n=this.state,c=n.name,l=n.temp,i=n.sky,o=n.icon,s=t.city,u=t.regionCode,m=t.country,p=t.latitude,d=t.longitude;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("h1",null,l,"\xb0"),r.a.createElement("img",{alt:i,src:"http://openweathermap.org/img/wn/".concat(o,"@2x.png"),width:"100"}),r.a.createElement("h3",null,s,", ",u),r.a.createElement("h4",null,m),r.a.createElement("div",null,r.a.createElement(g.b,{to:"/weather-app/current/".concat(c),className:"btn btn-dark btn-sm my-1",onClick:function(){return a(c,p,d)}},"Select")))}}]),t}(n.Component),C=function(e){var t=e.places,a=e.loading,n=e.getForecast,c=e.units;return a?r.a.createElement(j,null):r.a.createElement("div",{className:"grid-3"},t.map(function(e){return r.a.createElement(A,{key:e.id,place:e,units:c,getForecast:n})}))},P=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"About this app"),r.a.createElement("p",null,"App to get current weather and 16-day forecast."),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),"."))},D=(a(66),a(38)),T=a.n(D),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={units:"metric",loading:!1,alert:null,places:[],place:null,current:{},forecastToday:[],forecast16:[]},a.searchPlaces=function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),T.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities").query({limit:"10"}).query({namePrefix:t}).query({sort:"-population"}).set("x-rapidapi-host","wft-geo-db.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){a.setState({places:e.body.data,loading:!1}),console.log(a.state.places)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.clearSearch=function(){return a.setState({places:[],loading:!1})},a.setAlert=function(e,t){a.setState({alert:{msg:e,type:t}}),setTimeout(function(){return a.setState({alert:null})},3e3)},a.getForecast=function(){var e=Object(s.a)(o.a.mark(function e(t,n,r){var c,l,i,s,u,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.state.units,a.setState({loading:!0}),e.next=4,N.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(r,"&units=").concat(c,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 4:return l=e.sent,a.setState({current:{name:l.data.name,temp:l.data.main.temp.toFixed(),wind:l.data.wind.speed,pressure:l.data.main.pressure,humidity:l.data.main.humidity,weather:l.data.weather[0].main,sky:l.data.weather[0].description,icon:l.data.weather[0].icon}}),e.next=8,N.a.get("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&units=").concat(c,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 8:return i=e.sent,s=i.data.list.slice(0,9),a.setState({forecastToday:s}),u="metric"===c?"M":"I",e.next=14,N.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(n,"&lon=").concat(r,"&units=").concat(u,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 14:m=e.sent,a.setState({forecast16:m.data.data,loading:!1,place:{name:t,lat:n,lon:r}}),console.log(a.state.forecastToday),console.log(a.state.forecast16),console.log(a.state.current);case 19:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.switchUnits=function(){"metric"===a.state.units?a.switcher("imperial"):a.switcher("metric")},a.switcher=function(e){var t=a.state.place;null!==t?a.setState(function(){return{units:e}},function(){return a.getForecast(t.name,t.lat,t.lon)}):(a.setState({units:e}),a.clearSearch())},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.places,c=t.loading,l=t.alert,i=t.units,o=t.current,s=t.forecastToday,u=t.forecast16;return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{switchUnits:this.switchUnits,units:i}),r.a.createElement("div",{className:"container"},r.a.createElement(b,{alert:l}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/weather-app",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(y,{searchPlaces:e.searchPlaces,clearSearch:e.clearSearch,showClear:a.length>0,setAlert:e.setAlert}),r.a.createElement(C,{places:a,loading:c,getForecast:e.getForecast,units:i}))}}),r.a.createElement(f.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement(O,{current:o,forecastToday:s,forecast16:u,loading:c})}}),r.a.createElement(f.a,{exact:!0,path:"/weather-app/about",component:P})))))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a067e573.chunk.js.map