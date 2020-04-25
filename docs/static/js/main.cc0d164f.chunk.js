(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty_-_logo_(English).75509f2e.png"},19:function(e,a,t){e.exports=t.p+"static/media/uknow.ead9d02d.svg"},20:function(e,a,t){e.exports=t.p+"static/media/alive.ee3b81c9.svg"},21:function(e,a,t){e.exports=t.p+"static/media/died.2ef5ea9a.svg"},22:function(e,a,t){e.exports=t.p+"static/media/alien.422193e5.svg"},23:function(e,a,t){e.exports=t.p+"static/media/human.7c2c3ee2.svg"},24:function(e,a,t){e.exports=t(40)},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),s=t(6),i=(t(29),t(12)),o=t(5),m=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,origin:e.origin.name,episode:e.episode,status:e.status}}))}))};var u=function(e){var a=e.character,t=a.id,n=a.image,r=a.name,l=a.species;return c.a.createElement("li",{className:"CharacterLi"},c.a.createElement(s.b,{to:"/detail/".concat(t),className:"link"},c.a.createElement("img",{className:"Img",src:n,title:"foto de ".concat(r),alt:"foto de ".concat(r)}),c.a.createElement("div",{className:"ContainerInfo"},c.a.createElement("h4",null,r),c.a.createElement("p",null,l))))};t(35);var p=function(e){var a=e.characters,t=e.value,n=a.map((function(e,a){return c.a.createElement(u,{character:e,key:a})}));return c.a.createElement("section",{className:"SectionList"},0!==n.length?c.a.createElement("ul",{className:"CharacterList"},n):c.a.createElement("p",{className:"ContainerInfo text-nofound"},"No hay resultados con la palabra ".concat(t)))};t(36);var d=function(e){return c.a.createElement("form",{htmlFor:"search-form",className:"Filters",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",{htmlFor:"name"}),c.a.createElement("input",{type:"text",id:"name",name:"nameCharacter",className:"Input",value:e.value,maxLength:"30",placeholder:"Nombre del personaje",onChange:function(a){e.handleChange(a.target.value)},required:!0}))},f=t(18),h=t.n(f);t(37);var E=function(){return c.a.createElement("header",{className:"Header"},c.a.createElement("img",{className:"header-img",src:h.a,alt:"Rick and Morty",title:"Rick and Morty"}))},g=(t(38),t(19)),v=t.n(g),N=t(20),b=t.n(N),w=t(21),I=t.n(w),k=t(22),x=t.n(k),C=t(23),y=t.n(C);var j=function(e){var a=e.character,t=a.image,n=a.name,r=a.status,l=a.species,i=a.origin,o=a.episode;return c.a.createElement("section",{className:"CharacterDetail"},c.a.createElement(s.b,{to:"/",className:"link"},"Volver"),c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:"ImgDetail",src:t,title:n,alt:n}),c.a.createElement("ul",{className:"Info"},c.a.createElement("h3",{className:"titleName"},n),c.a.createElement("li",{className:"pIcon bold"},"Status: ",c.a.createElement("span",{className:"normal"},r),function(){var e,a="w-8";switch(r){case"Alive":e=b.a;break;case"Dead":e=I.a;break;default:e=v.a,a="w-5"}return c.a.createElement("img",{className:"iconImg ".concat(a),src:e,alt:r,title:r})}()),c.a.createElement("li",{className:"pIcon bold"},"Species: ",c.a.createElement("span",{className:"normal"},l," "),c.a.createElement("img",{className:"Human"===l?"iconImg w-4":"iconImg w-8",src:"Human"===l?y.a:x.a,alt:l,title:l})),c.a.createElement("li",{className:"pIcon bold"},"Origin: ",c.a.createElement("span",{className:"normal"},i)),c.a.createElement("li",{className:"pIcon bold"},"Episodes: ",c.a.createElement("span",{className:"normal"},o.length)))))};t(39);var S=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],f=s[1];Object(n.useEffect)((function(){m().then((function(e){var a=e.sort((function(e,a){return e.name.localeCompare(a.name)}));r(a)}))}),[]);var h=t.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})),g=function(e){var a=parseInt(e.match.params.id),n=t.find((function(e){return e.id===a}));return void 0!==n?c.a.createElement(j,{character:n}):c.a.createElement("p",{className:"Error"},"El personaje que buscas no existe")};return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(d,{handleChange:function(e){f(e)},value:u}),c.a.createElement(p,{characters:h,value:u})),c.a.createElement(o.a,{path:"/detail/:id"},g)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cc0d164f.chunk.js.map