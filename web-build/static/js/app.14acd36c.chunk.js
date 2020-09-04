(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{249:function(e,t,r){"use strict";r.d(t,"a",(function(){return ae}));var n=r(0),a=r.n(n),c=r(72),o=r(216),i=r(20),l=r(214),s=r(413),u=r(5),f=r.n(u),m=r(107),d=r.n(m),p=r(218),E=r(4),y=r(232),O=r(414),b=r(3),g=b.a.create({header:{justifyContent:"center",alignItems:"center",marginTop:30},input:{textAlign:"center",fontSize:25,color:"#fff",width:200,borderStyle:"solid",borderBottomWidth:2,borderBottomColor:"#fff"},button:{display:"flex"}}),h=r(6),v=r.n(h),w=function(e){return{city:e.name,country:e.sys.country,tempreture:(t=e.main.temp,Math.floor(t-273.15)),humidity:e.main.humidity,wind:e.wind.speed,description:e.weather[0].description,coordinates:{lat:e.coord.lon,lng:e.coord.lat},icon:e.weather[0].icon};var t},S=function(e){return e.response.GeoObjectCollection.featureMember[4].GeoObject.name},j=function(e){return{type:"SET_CITY",payload:e}},P=function(e){return{type:"WEATHER_RESPONSE",payload:e}},_=function(e){return{type:"WEATHER_RESPONSE_FAIL",payload:e}},x=function(){return function(e,t){var r,n,a,c,o,i,l;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r=t(),n=r.city,a=r.previousRequests,s.prev=1,s.next=4,v.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=b6ce763b1e16f6f845d8d595fa0efb2c"));case 4:return c=s.sent,s.next=7,v.a.awrap(c.json());case 7:200===(o=s.sent).cod?e(P(w(o))):e(_(!0)),i=t(),l=i.data,a.push({date:new Date,data:l}),s.next=17;break;case 13:s.prev=13,s.t0=s.catch(1),console.error("Error: ",s.t0),e(_(!0));case 17:case"end":return s.stop()}}),null,null,[[1,13]],Promise)}},T=function(){var e=Object(i.b)();return a.a.createElement(E.a,{style:g.header},a.a.createElement(y.a,{style:g.input,onChangeText:function(t){return e(j(t))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),a.a.createElement(O.a,{name:"search1",size:24,color:"white",style:g.button,title:"\u2713",onPress:function(){return e(x())}}))},C=r(7),A=b.a.create({loaction:{marginTop:30},city:{color:"#fff",fontSize:32,textAlign:"center"},country:{color:"#fff",fontSize:19,textAlign:"center"}}),R=function(){var e=Object(i.c)((function(e){return e.data.city})),t=Object(i.c)((function(e){return e.data.country})),r=Object(i.c)((function(e){return e.data.coordinates}));return a.a.createElement(E.a,{style:A.loaction},r&&a.a.createElement(C.a,{style:A.country},"latitude: "+r.lat),r&&a.a.createElement(C.a,{style:A.country},"longitude: "+r.lng),a.a.createElement(C.a,{style:A.city},e),a.a.createElement(C.a,{style:A.country},t))},N=r(132),k=b.a.create({iconWeather:{width:150,height:150},weather:{color:"#fff",marginTop:20},description:{color:"#fff",fontSize:20,textAlign:"center"},tempreture:{color:"#fff",fontSize:48,textAlign:"center"},additionalParameter:{color:"#fff",marginTop:20,fontSize:25,textAlign:"center"}}),I=function(){var e=Object(i.c)((function(e){return e.data.description})),t=Object(i.c)((function(e){return e.data.tempreture})),r=Object(i.c)((function(e){return e.data.humidity})),n=Object(i.c)((function(e){return e.data.wind})),c=Object(i.c)((function(e){return e.data.icon}));return a.a.createElement(E.a,{style:k.weather},a.a.createElement(N.a,{source:{uri:"http://openweathermap.org/img/wn/"+c+".png"},style:k.iconWeather}),a.a.createElement(C.a,{style:k.description},e),a.a.createElement(C.a,{style:k.tempreture},t," \xb0C"),a.a.createElement(C.a,{style:k.additionalParameter},"Humidity ",r,"%"),a.a.createElement(C.a,{style:k.additionalParameter},"Wind ",n," km/h"))},D=b.a.create({error:{textAlign:"center",fontSize:30,color:"#fff"}}),W=function(){return a.a.createElement(C.a,{style:D.error},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")},z=b.a.create({container:{flex:1,backgroundColor:"#1c9bbe",alignItems:"center"}}),H=function(e){d()(e);var t=Object(i.b)(),r=Object(n.useState)(),c=f()(r,2),o=c[0],l=c[1],s=Object(i.c)((function(e){return e.data})),u=Object(i.c)((function(e){return e.isError}));Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(m,m,{enableHighAccuracy:!0,timeOut:2e4,maximumAge:86400})}),[]);var m=function(e){l({lat:e.coords.latitude,lng:e.coords.longitude}),t(function(e){return{type:"GEOLOCATION_RESPONSE",payload:e}}(o)),console.log("where: ",o),t((function(e,t){var r,n,a,c;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t(),n=r.currentPosition,console.log("currentPosition: ",n),o.prev=2,o.next=5,v.a.awrap(fetch("https://geocode-maps.yandex.ru/1.x/?format=json&apikey=500e65e6-b4fb-4dbc-8abf-318ac1e1cf61&geocode="+n.lat+","+n.lng+"&lang=en_US"));case 5:return a=o.sent,o.next=8,v.a.awrap(a.json());case 8:c=o.sent,console.log(S(c)),e(j(S(c))),e(x()),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(2),e(_(!0));case 17:case"end":return o.stop()}}),null,null,[[2,14]],Promise)}))};return a.a.createElement(E.a,{style:z.container},a.a.createElement(T,null),u&&a.a.createElement(W,null),s&&!u&&a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null),a.a.createElement(I,null)),a.a.createElement(p.StatusBar,{style:"auto"}))},L=r(250),q=r(240),M=r(88),F=b.a.create({row:{marginTop:20,backgroundColor:"#fff",alignSelf:"stretch"},parametrs:{fontSize:20}}),G=r(239),U=b.a.create({parametrs:{textAlign:"center",fontSize:20}}),V=function(e){var t=e.visible,r=e.setVisible,n=e.data;return a.a.createElement(G.a,{visible:t},a.a.createElement(E.a,{style:U.container},a.a.createElement(C.a,{style:U.parametrs},"City: ",n.city),a.a.createElement(C.a,{style:U.parametrs},"Country: ",n.country),a.a.createElement(C.a,{style:U.parametrs},"Description: ",n.description),a.a.createElement(C.a,{style:U.parametrs},"Tempreture:",n.tempreture," \xb0C"),a.a.createElement(C.a,{style:U.parametrs},"Humidity: ",n.humidity),a.a.createElement(C.a,{style:U.parametrs},"Wind: ",n.wind),a.a.createElement(M.a,{title:"Close",onPress:function(){r(!1)}})))},X=function(e){var t=e.date,r=e.data,c=Object(i.b)(),o=Object(n.useState)(!1),l=f()(o,2),s=l[0],u=l[1];return a.a.createElement(E.a,{style:F.row},a.a.createElement(V,{visible:s,setVisible:u,data:r}),a.a.createElement(C.a,{style:F.parametrs},"Date: "+t.getDate()+"."+t.getMonth()+"."+t.getFullYear()),a.a.createElement(C.a,{style:F.parametrs},"Time: "+t.getHours()+" : "+t.getMinutes()),a.a.createElement(C.a,{style:F.parametrs},"latitude:"+r.coordinates.lat+" longitude:"+r.coordinates.lng),a.a.createElement(C.a,{style:F.parametrs},"City: "+r.city),a.a.createElement(M.a,{title:"Repeat this request",onPress:function(){c(j(r.city)),c(x())}}),a.a.createElement(M.a,{title:"Check this request(History)",onPress:function(){u(!0)}}))},B=b.a.create({container:{flex:1,backgroundColor:"#f26122",alignItems:"center"}}),Y=function(e){d()(e);var t=Object(i.c)((function(e){return e.previousRequests}));return a.a.createElement(q.a,{style:B.container},a.a.createElement(L.a,{data:t,renderItem:function(e){var t=e.item;return a.a.createElement(X,{date:t.date,data:t.data})},keyExtractor:function(e){return""+(e.data.city+e.data.coordinates.lng+101*Math.random())}}))},J=Object(s.a)();function K(){return a.a.createElement(l.a,null,a.a.createElement(J.Navigator,null,a.a.createElement(J.Screen,{name:"Weather",component:H}),a.a.createElement(J.Screen,{name:"History",component:Y})))}var Q=r(32),Z=r.n(Q);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Z()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te={data:null,previousRequests:[],currentPosition:null,isError:!1};var re="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):c.c,ne=Object(c.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"SET_CITY":return ee(ee({},e),{},{city:n});case"WEATHER_RESPONSE":return ee(ee({},e),{},{data:ee({},n),isError:!1});case"WEATHER_RESPONSE_FAIL":case"GEOLOCATION_RESPONSE_FAIL":return ee(ee({},e),{},{isError:n});case"GEOLOCATION_RESPONSE":return ee(ee({},e),{},{currentPosition:n});case"GEOLOCATION_CURRENT":return ee(ee({},e),{},{previousRequests:n});default:return e}}),re(Object(c.a)(o.a)));function ae(){return a.a.createElement(i.a,{store:ne},a.a.createElement(K,null))}},258:function(e,t,r){r(259),e.exports=r(400)},259:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[258,1,2]]]);
//# sourceMappingURL=app.14acd36c.chunk.js.map