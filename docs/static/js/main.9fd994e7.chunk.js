(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),i=t(3),c=t.n(i),a=(t(14),t(6)),s=t(0);var u=t(4),h=t(5),m=t(8),l=t(7),p=(r.a.Component,t(16),function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,photo:e.image,origin:e.origin.name,origin2:e.origin.url,episode:e.episode.length}}))}))});var d=function(){var e=Object(o.useState)(),n=Object(a.a)(e,2),t=(n[0],n[1]);return Object(o.useEffect)((function(){p().then((function(e){t(e),console.table(e)}))}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{children:"Hola"})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9fd994e7.chunk.js.map