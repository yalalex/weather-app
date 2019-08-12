(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},39:function(e,t,a){e.exports=a(73)},55:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),i=a(13),o=a.n(i),s=a(17),u=a(7),m=a(8),p=a(10),d=a(9),h=a(11),g=a(5),E=a(12),f=function(e){var t=e.units,a=e.switchUnits,n=(e.clearSearch,"metric"===t?"\xb0C":"\xb0F");return console.log(n),r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,"Weather app"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.b,{to:"/weather-app"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/weather-app/about"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/weather-app",onClick:a},n))))},y=function(e){var t=e.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-".concat(t.type," text-center")},t.msg)},b=a(36),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onSubmit=function(e){e.preventDefault(),""===a.state.text?a.props.setAlert("Please enter something","dark"):(a.props.searchPlaces(a.state.text),a.setState({text:""}))},a.onChange=function(e){return a.setState(Object(b.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement("input",{type:"text",name:"text",value:this.state.text,placeholder:"Enter City Name...",onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),this.props.showClear&&r.a.createElement("button",{className:"btn btn-grey btn-block",onClick:this.props.clearSearch},"Clear"))}}]),t}(n.Component),v=function(e){var t=e.period,a=t.dt_txt,n=t.main,c=t.wind,l=t.weather,i=new Date(a).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,i)),r.a.createElement("li",null,r.a.createElement("img",{alt:l[0].description,src:"http://openweathermap.org/img/wn/".concat(l[0].icon,"@2x.png"),width:"100"})),r.a.createElement("li",null,r.a.createElement("h2",null,n.temp.toFixed(),"\xb0")),r.a.createElement("li",null,"Humidity: ",n.humidity,"%"),r.a.createElement("li",null,"Wind: ",c.speed.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",n.pressure.toFixed()," mbar")))},x=function(e){var t=e.day,a=t.valid_date,n=t.max_temp,c=t.min_temp,l=t.wind_spd,i=t.pop,o=t.pres,s=t.rh,u=t.weather,m=new Date(a).toLocaleDateString(navigator.language,{weekday:"short",month:"short",day:"numeric"});return r.a.createElement("div",{className:"card text-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,m)),r.a.createElement("li",null,r.a.createElement("img",{alt:u.description,src:"https://www.weatherbit.io/static/img/icons/".concat(u.icon,".png"),width:"70"})),r.a.createElement("li",null,r.a.createElement("h2",null,n.toFixed(),"\xb0/",c.toFixed(),"\xb0")),r.a.createElement("li",null,"Precipitation: ",i,"%"),r.a.createElement("li",null,"Humidity: ",s,"%"),r.a.createElement("li",null,"Wind: ",l.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",o.toFixed()," mbar")))},k=a(37),S=a.n(k),j=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:S.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={btn:"16-day forecast",target:"forecast"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.current,c=t.forecastToday,l=t.forecast16,i=t.loading,o=a.name,s=a.weather,u=a.sky,m=a.wind,p=a.temp,d=a.pressure,h=a.humidity,f=a.icon,y=(new Date).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),b=this.state,w=b.btn,k=b.target;return 0===c.length?null:i?r.a.createElement(j,null):r.a.createElement(g.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"card grid-2",style:{padding:"0"}},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{alt:u,src:"http://openweathermap.org/img/wn/".concat(f,"@2x.png"),width:"150"})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("h1",null,p,"\xb0"),r.a.createElement("h2",null,o),r.a.createElement("h3",null,y))),r.a.createElement("div",{style:{padding:"0.7rem 0"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,s)),r.a.createElement("li",null,"Humidity: ",h,"%"),r.a.createElement("li",null,"Wind: ",m.toFixed(1)," m/s"),r.a.createElement("li",null,"Pressure: ",d.toFixed()," mbar")),r.a.createElement(g.b,{to:"/weather-app/".concat(k,"/").concat(o),className:"btn btn-dark btn-sm my-1",onClick:function(){"forecast"===k?e.setState({btn:"Today",target:"current"}):e.setState({btn:"16-day forecast",target:"forecast"})}},w))),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement("div",{className:"grid-3"},c.map(function(e){return r.a.createElement(v,{key:e.dt,period:e})}))}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/forecast/:name",render:function(e){return r.a.createElement("div",{className:"grid-4"},l.map(function(e){return r.a.createElement(x,{key:e.ts,day:e})}))}}))))}}]),t}(n.Component),F=a(16),N=a.n(F),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",weather:"",sky:"",wind:"",temp:"",pressure:"",humidity:"",icon:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t,a,n,r=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,a=t.place,n=t.units,N.a.get("https://community-open-weather-map.p.rapidapi.com/weather").query({lat:a.latitude}).query({lon:a.longitude}).query({units:n}).set("x-rapidapi-host","community-open-weather-map.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){r.setState({name:e.body.name,temp:e.body.main.temp.toFixed(),wind:e.body.wind.speed,pressure:e.body.main.pressure,humidity:e.body.main.humidity,weather:e.body.weather[0].main,sky:e.body.weather[0].description,icon:e.body.weather[0].icon})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.place,n=t.getForecast,c=this.state,l=c.temp,i=c.sky,o=c.icon;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("h1",null,l,"\xb0"),r.a.createElement("img",{alt:i,src:"http://openweathermap.org/img/wn/".concat(o,"@2x.png"),width:"100"}),r.a.createElement("h3",null,a.city,", ",a.regionCode),r.a.createElement("h4",null,a.country),r.a.createElement("div",null,r.a.createElement(g.b,{to:"/weather-app/current/".concat(this.state.name),className:"btn btn-dark btn-sm my-1",onClick:function(){return n(a.latitude,a.longitude,e.state)}},"Select")))}}]),t}(n.Component),A=function(e){var t=e.places,a=e.loading,n=e.getForecast,c=e.units;return a?r.a.createElement(j,null):r.a.createElement("div",{className:"grid-3"},t.map(function(e){return r.a.createElement(C,{key:e.id,place:e,units:c,getForecast:n})}))},P=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"About this app"),r.a.createElement("p",null,"App to get current weather and 16-day forecast."),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://github.com/yalalex/"},"Alex Y"),"."))},T=(a(55),a(38)),q=a.n(T),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={units:"metric",loading:!1,alert:null,places:[],current:{},forecastToday:[],forecast16:[]},a.searchPlaces=function(e){a.setState({loading:!0}),N.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities").query({limit:"10"}).query({namePrefix:e}).query({sort:"-population"}).set("x-rapidapi-host","wft-geo-db.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){a.setState({places:e.body.data,loading:!1}),console.log(a.state.places)}).catch(function(e){console.log(e)})},a.clearSearch=function(){return a.setState({places:[],loading:!1})},a.setAlert=function(e,t){a.setState({alert:{msg:e,type:t}}),setTimeout(function(){return a.setState({alert:null})},3e3)},a.getForecast=function(){var e=Object(s.a)(o.a.mark(function e(t,n,r){var c,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),N.a.get("https://community-open-weather-map.p.rapidapi.com/forecast").query({lat:t}).query({lon:n}).query({units:a.state.units}).set("x-rapidapi-host","community-open-weather-map.p.rapidapi.com").set("x-rapidapi-key","d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577").set("Accept","application/json").then(function(e){var t=e.body.list.slice(0,9);a.setState({forecastToday:t,current:r,loading:!1})}).catch(function(e){console.log(e)}),c="metric"===a.state.units?"M":"I",e.next=5,q.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(t,"&lon=").concat(n,"&units=").concat(c,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 5:l=e.sent,a.setState({forecast16:l.data.data}),console.log(a.state.forecastToday);case 8:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.switchUnits=function(){"metric"===a.state.units?a.setState({units:"imperial"}):a.setState({units:"metric"}),a.clearSearch()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.places,c=t.loading,l=t.alert,i=t.units,o=t.current,s=t.forecastToday,u=t.forecast16;return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{switchUnits:this.switchUnits,clearSearch:this.clearSearch,units:i}),r.a.createElement("div",{className:"container"},r.a.createElement(y,{alert:l}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/weather-app",render:function(t){return r.a.createElement(n.Fragment,null,r.a.createElement(w,{searchPlaces:e.searchPlaces,clearSearch:e.clearSearch,showClear:a.length>0,setAlert:e.setAlert}),r.a.createElement(A,{places:a,loading:c,getForecast:e.getForecast,units:i}))}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/current/:name",render:function(e){return r.a.createElement(O,{current:o,forecastToday:s,forecast16:u,loading:c})}}),r.a.createElement(E.a,{exact:!0,path:"/weather-app/about",component:P})))))}}]),t}(n.Component);l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.32d4acd4.chunk.js.map