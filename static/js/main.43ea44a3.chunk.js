(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),s=(n(18),n(1)),l=n(2),c=n(4),d=n(3),k=n(5),u=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="FOREDRAG"===this.props.selected?"button-selected":"",n="WORKSHOP"===this.props.selected?"button-selected":"",r=function(t){return e.props.onClick(t)};return a.a.createElement("div",{className:"top-buttons"},a.a.createElement("div",{className:"top-button ".concat(t),onClick:function(){return r("FOREDRAG")}},"FOREDRAG"),a.a.createElement("div",{className:"top-button ".concat(n),onClick:function(){return r("WORKSHOP")}},"WORKSHOPS"))}}]),t}(r.Component),m=n(9),p=n.n(m),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=a.a.createElement(p.a,{name:this.props.icon,style:{lineHeight:"1.30em",fontSize:"1.30em"}}),t=a.a.createElement("p",{className:"time-label-text"}," ",this.props.klokkeslett," ");return a.a.createElement("div",{className:"time-label"},e,t)}}]),t}(r.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("a",{className:"sign-up",href:this.props.link,target:"_blank",rel:"noopener noreferrer"}," ","MELD DEG P\xc5"," ")}}]),t}(r.Component),h=n(10),v=n.n(h),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.props.type,r=t.tittel,o=t.klokkeslett,i=t.foredragsholder,s=t.info,l=this.props.expand?0:2,c="Pause med mat og drikke"===r?"cutlery":"foredrag"===n?"comments":"cogs",d=a.a.createElement(g,{icon:c,klokkeslett:o}),k=t.link?a.a.createElement(f,{link:t.link}):null;return a.a.createElement("div",{className:"event-card"},d,a.a.createElement("div",{className:"event-card-content"},a.a.createElement("p",{className:"event-card-title"}," ",r," "),a.a.createElement("p",{className:"event-card-author"}," ",i," "),a.a.createElement("div",{className:"truncate-wrapper",onClick:function(){return e.props.onClick(t)}},a.a.createElement(v.a,{line:l,truncateText:"...",text:s})),k))}}]),t}(r.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={selected:"FOREDRAG",expandedEvent:{}},n}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.setState({expandedEvent:t})},n=this.props.data.foredrag?this.props.data.foredrag:[],r=this.props.data.workshops?this.props.data.workshops:[],o="FOREDRAG"===this.state.selected?n.map(function(n){return e.mapEvent(n,"foredrag",t)}):r.map(function(n){return e.mapEvent(n,"workshop",t)});return a.a.createElement("div",{className:"main-container"},a.a.createElement(u,{onClick:function(t){return e.setState({selected:t})},selected:this.state.selected}),o,a.a.createElement("p",{className:"event-card-author credits-text"},"Laget av Ragnhild Aalvik og Kristian Rosland, oppdatert av Sondre Nilsen"))}},{key:"mapEvent",value:function(e,t,n){var r=this.state.expandedEvent===e;return a.a.createElement(b,{event:e,type:t,key:e.tittel,expand:r,onClick:n})}}]),t}(r.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"top-info-box"},a.a.createElement("h1",null," FAGKVELD "),a.a.createElement("h4",{className:"top-time-info"}," ","29. mars kl. 17.00 | Media City Bergen"," "),a.a.createElement("a",{className:"attend-button",href:"https://goo.gl/forms/CQzGIAxISZymVRzw2",target:"_blank",rel:"noopener noreferrer"},"MELD DEG P\xc5 HER"),a.a.createElement("p",{className:"top-info"}," ",this.props.text," "))}}]),t}(r.Component),O={topText:"Velkommen til fagkveld 2019 for IT-studenter i Bergen! Fagutvalget ved Institutt for Informatikk, Fagutvalget Infomedia og Linjeforeningen Root inviterer til en kveld fullstappet med foredrag, workshops, \ud83c\udf55og \ud83c\udf7b! Ti forskjellige bedrifter har bidratt med sine beste foredragsholdere for \xe5 gi oss et innblikk i problemene og teknologiene de jobber med til daglig. Det vil bli parallelle spor med foredrag og workshops, s\xe5 det skal v\xe6re mulig \xe5 finne noe for alle, uansett niv\xe5. Husk at det er begrenset antall plasser p\xe5 workshops, s\xe5 meld deg p\xe5 n\xe5!",workshops:[{tittel:"Pause med mat og drikke",foredragsholder:"",info:"",klokkeslett:"18.45 - 19.30"},{tittel:"CV-Workshop",foredragsholder:"Adrian Moksness & Margrethe Johnsen, Netlight",info:"Hvordan bygger man en god CV for \xe5 f\xe5 spennende muligheter etter studiet? Adrian og Margrethe i Netlight gir et innblikk i karrieremulighetene i Netlight, hva vi anser som en \xabgod CV\xbb og hvordan en kan jobbe med \xe5 bygge CVen sin gjennom erfaringer underveis i studietiden.",klokkeslett:"00.00 - 01.30",link:"#"},{tittel:"Visualisering av data i kart med Leaflet",foredragsholder:"Anders Linge Olsvik Breilid, Kantega",info:"I denne workshopen vil deltakerne l\xe6re \xe5 bruke biblioteket Leaflet for kartvisning i HTML med Javascript, samt l\xe6re hvordan man kan hente data fra et \xe5pent API og visualisere dataene i kartet. Det vil v\xe6re fokus p\xe5 \xe5 bruke dokumentasjon aktivt for \xe5 forst\xe5 hvordan biblioteket og API-et fungerer.",klokkeslett:"00.00 - 01.30",link:"#"}],foredrag:[{tittel:"Pause med mat og drikke",foredragsholder:"",info:"",klokkeslett:"18.45 - 19.30"},{tittel:"Velkommen",foredragsholder:"",info:"",klokkeslett:"17.00 - 17.15"},{tittel:"Vil du jobbe med data?",foredragsholder:"Didrik Finn\xf8y, Data Scientist hos Atea",info:"Data er den nye elektrisiteten, den nye oljen, og kanskje den mest spennende karriereretningen man kan velge i disse dager. Foredraget gir innsikt i hvordan det er \xe5 jobbe med data i Bergen / Norge, og  hvordan man skiller seg ut n\xe5r man s\xf8ker data - relaterte jobber. Du f\xe5r h\xf8re litt om hva slags arbeid som venter deg, og hva som kreves for \xe5 lykkes. Didrik Finn\xf8y, Data Scientist hos Atea.Didrik studerte 'feil' fag p\xe5 universitetet, og har kjempet seg inn i data bransjen gjennom kurs, b\xf8ker, og personlige prosjekter. I dag jobber han som konsulent, og hjelper Atea sine kunder med \xe5 utvinne verdi fra dataen de forvalter.",klokkeslett:"00.00 - 00.20"},{tittel:"Hvordan ta i bruk web plattformen for bedre kodedeling?",foredragsholder:"\xd8ystein \xd8steb\xf8 Olsen og Torbj\xf8rn Angeltveit, Scout Gaming",info:"Custom elements er en web standard som endelig beskriver hvordan rammeverk kan snakke sammen og en viktig primitiv for \xe5 endelig kunne fokusere p\xe5 \xe5 lage gode UI elementer. En introduksjon til hva det er og hvordan det hjelper rammeverk \xe5 snakke samme spr\xe5k.",klokkeslett:"00.20 - 00.40"}]},w=n(11),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=function(e,t){var n=parseInt(e.klokkeslett.substring(0,2),10),r=parseInt(t.klokkeslett.substring(0,2),10),a=parseInt(e.klokkeslett.substring(3,5),10),o=parseInt(t.klokkeslett.substring(3,5),10);return n!==r?n-r:a-o};return O.foredrag.sort(e),O.workshops.sort(e),a.a.createElement("div",null,a.a.createElement(w.Particles,{params:{particles:{number:{value:100},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},className:"particles"}),a.a.createElement("div",{className:"app"},a.a.createElement(E,{text:O.topText}),a.a.createElement(j,{data:O})))}}]),t}(r.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.43ea44a3.chunk.js.map