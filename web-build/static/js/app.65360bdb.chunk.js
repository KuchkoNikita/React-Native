(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{247:function(e,t,r){"use strict";r.d(t,"a",(function(){return ce}));var n=r(0),a=r.n(n),c=r(72),o=r(215),i=r(18),l=r(213),s=r(411),u=r(5),f=r.n(u),d=r(107),m=r.n(d),p=r(217),E=r(4),y=r(231),b=r(412),O=r(3),g=O.a.create({header:{justifyContent:"center",alignItems:"center",marginTop:30},input:{textAlign:"center",fontSize:25,color:"#fff",width:200,borderStyle:"solid",borderBottomWidth:2,borderBottomColor:"#fff"},button:{display:"flex"}}),h=r(6),v=r.n(h),w=function(e){return{city:e.name,country:e.sys.country,tempreture:(t=e.main.temp,Math.floor(t-273.15)),humidity:e.main.humidity,wind:e.wind.speed,description:e.weather[0].description,coordinates:{lat:e.coord.lon,lng:e.coord.lat},icon:e.weather[0].icon};var t},S=function(e){return e.response.GeoObjectCollection.featureMember[2].GeoObject.name},j=function(e){return{type:"WEATHER_RESPONSE",payload:e}},P=function(e){return{type:"WEATHER_RESPONSE_FAIL",payload:e}},x=function(){return function(e,t){var r,n,a,c,o,i,l;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r=t(),n=r.city,a=r.previousRequests,s.prev=1,s.next=4,v.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=b6ce763b1e16f6f845d8d595fa0efb2c"));case 4:return c=s.sent,s.next=7,v.a.awrap(c.json());case 7:o=s.sent,console.log("response: ",o),200===o.cod?e(j(w(o))):e(P(!0)),i=t(),l=i.data,a.push({date:new Date,data:l}),s.next=18;break;case 14:s.prev=14,s.t0=s.catch(1),console.error("Error: ",s.t0),e(P(!0));case 18:case"end":return s.stop()}}),null,null,[[1,14]],Promise)}},_=function(e){return{type:"SET_CITY",payload:e}},C=function(){var e=Object(i.b)();return a.a.createElement(E.a,{style:g.header},a.a.createElement(y.a,{style:g.input,onChangeText:function(t){return e(_(t))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),a.a.createElement(b.a,{name:"search1",size:24,color:"white",style:g.button,title:"\u2713",onPress:function(){return e(x())}}))},T=r(7),A=O.a.create({loaction:{marginTop:30},city:{color:"#fff",fontSize:32,textAlign:"center"},country:{color:"#fff",fontSize:19,textAlign:"center"}}),R=function(){var e=Object(i.c)((function(e){return e.data.city})),t=Object(i.c)((function(e){return e.data.country}));return a.a.createElement(E.a,{style:A.loaction},a.a.createElement(T.a,{style:A.city},e),a.a.createElement(T.a,{style:A.country},t))},k=r(131),N=O.a.create({iconWeather:{width:150,height:150},weather:{color:"#fff",marginTop:20},description:{color:"#fff",fontSize:20,textAlign:"center"},tempreture:{color:"#fff",fontSize:48,textAlign:"center"},additionalParameter:{color:"#fff",marginTop:20,fontSize:25,textAlign:"center"}}),I=function(){var e=Object(i.c)((function(e){return e.data.description})),t=Object(i.c)((function(e){return e.data.tempreture})),r=Object(i.c)((function(e){return e.data.humidity})),n=Object(i.c)((function(e){return e.data.wind})),c=Object(i.c)((function(e){return e.data.icon}));return a.a.createElement(E.a,{style:N.weather},a.a.createElement(k.a,{source:{uri:"http://openweathermap.org/img/wn/"+c+".png"},style:N.iconWeather}),a.a.createElement(T.a,{style:N.description},e),a.a.createElement(T.a,{style:N.tempreture},t," \xb0C"),a.a.createElement(T.a,{style:N.additionalParameter},"Humidity ",r,"%"),a.a.createElement(T.a,{style:N.additionalParameter},"Wind ",n," km/h"))},z=O.a.create({error:{textAlign:"center",fontSize:30,color:"#fff"}}),D=function(){return a.a.createElement(T.a,{style:z.error},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")},W=O.a.create({coordinates:{color:"#fff",fontSize:19,textAlign:"center"}}),H=function(){var e=Object(i.c)((function(e){return e.data.coordinates}));return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(T.a,{style:W.coordinates},"latitude: "+e.lat),e&&a.a.createElement(T.a,{style:W.coordinates},"longitude: "+e.lng))},L=O.a.create({container:{flex:1,backgroundColor:"#1c9bbe",alignItems:"center"}}),q=function(e){m()(e);var t=Object(i.b)(),r=Object(n.useState)(),c=f()(r,2),o=c[0],l=c[1],s=Object(i.c)((function(e){return e.data})),u=Object(i.c)((function(e){return e.isError}));Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(d,d,{enableHighAccuracy:!0,timeOut:2e4,maximumAge:86400})}),[]);var d=function(e){l({lat:e.coords.latitude,lng:e.coords.longitude}),t(function(e){return{type:"GEOLOCATION_RESPONSE",payload:e}}(o)),t((function(e,t){var r,n,a,c;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t(),n=r.currentPosition,console.log("currentPosition: ",n),o.prev=2,o.next=5,v.a.awrap(fetch("https://geocode-maps.yandex.ru/1.x/?format=json&apikey=500e65e6-b4fb-4dbc-8abf-318ac1e1cf61&geocode="+n.lat+","+n.lng+"&lang=en_US"));case 5:return a=o.sent,o.next=8,v.a.awrap(a.json());case 8:c=o.sent,e(setCity(S(c))),e(x()),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(2),e(P(!0));case 16:case"end":return o.stop()}}),null,null,[[2,13]],Promise)}))};return a.a.createElement(E.a,{style:L.container},a.a.createElement(C,null),s&&a.a.createElement(H,null),u&&a.a.createElement(D,null),s&&!u&&a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null),a.a.createElement(I,null)),a.a.createElement(p.StatusBar,{style:"auto"}))},F=r(248),M=r(238),G=r(88),U=O.a.create({row:{marginTop:50,backgroundColor:"#fff",alignSelf:"stretch"},parametrs:{fontSize:20}}),V=O.a.create({parametrs:{textAlign:"center",fontSize:15,width:250}}),X=function(e){var t=e.visible,r=e.setVisible,n=e.data;return a.a.createElement(E.a,{style:{position:"absolute",zIndex:1e3,display:t?"flex":"none",backgroundColor:"#fff"}},a.a.createElement(E.a,{style:V.container},a.a.createElement(T.a,{style:V.parametrs},"City: ",n.city),a.a.createElement(T.a,{style:V.parametrs},"Country: ",n.country),a.a.createElement(T.a,{style:V.parametrs},"Description: ",n.description),a.a.createElement(T.a,{style:V.parametrs},"Tempreture:",n.tempreture," \xb0C"),a.a.createElement(T.a,{style:V.parametrs},"Humidity: ",n.humidity),a.a.createElement(T.a,{style:V.parametrs},"Wind: ",n.wind),a.a.createElement(G.a,{title:"Close",onPress:function(){r(!1)}})))},B=function(e){var t=e.date,r=e.data,c=Object(i.b)(),o=Object(n.useState)(!1),l=f()(o,2),s=l[0],u=l[1];return a.a.createElement(E.a,{style:U.row},a.a.createElement(T.a,{style:U.parametrs},"Date: "+t.getDate()+"."+t.getMonth()+"."+t.getFullYear()),a.a.createElement(T.a,{style:U.parametrs},"Time: "+t.getHours()+" : "+t.getMinutes()),a.a.createElement(T.a,{style:U.parametrs},"latitude:"+r.coordinates.lat+" longitude:"+r.coordinates.lng),a.a.createElement(T.a,{style:U.parametrs},"City: "+r.city),a.a.createElement(G.a,{title:"Repeat this request",onPress:function(){c(_(r.city)),c(x())}}),a.a.createElement(G.a,{title:"Check this request(History)",onPress:function(){u(!0)}}),a.a.createElement(X,{visible:s,setVisible:u,data:r}))},Y=O.a.create({container:{flex:1,backgroundColor:"#f26122",alignItems:"center"}}),J=function(e){m()(e);var t=Object(i.c)((function(e){return e.previousRequests}));return a.a.createElement(M.a,{style:Y.container},a.a.createElement(F.a,{data:t,renderItem:function(e){var t=e.item;return a.a.createElement(B,{date:t.date,data:t.data})},keyExtractor:function(e){return""+(e.data.city+e.data.coordinates.lng+101*Math.random())}}))},K=Object(s.a)();function Q(){return a.a.createElement(l.a,null,a.a.createElement(K.Navigator,null,a.a.createElement(K.Screen,{name:"Weather",component:q}),a.a.createElement(K.Screen,{name:"History",component:J})))}var Z=r(32),$=r.n(Z);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){$()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re={data:null,previousRequests:[],currentPosition:null,isError:!1};var ne="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):c.c,ae=Object(c.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"SET_CITY":return te(te({},e),{},{city:n});case"WEATHER_RESPONSE":return te(te({},e),{},{data:te({},n),isError:!1});case"WEATHER_RESPONSE_FAIL":case"GEOLOCATION_RESPONSE_FAIL":return te(te({},e),{},{isError:n});case"GEOLOCATION_RESPONSE":return te(te({},e),{},{currentPosition:n});case"GEOLOCATION_CURRENT":return te(te({},e),{},{previousRequests:n});default:return e}}),ne(Object(c.a)(o.a)));function ce(){return a.a.createElement(i.a,{store:ae},a.a.createElement(Q,null))}},256:function(e,t,r){r(257),e.exports=r(398)},257:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[256,1,2]]]);
//# sourceMappingURL=app.65360bdb.chunk.js.map