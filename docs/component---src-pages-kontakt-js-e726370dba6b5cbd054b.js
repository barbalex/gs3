(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(157),o=t(250),i=t.n(o),c=(t(173),t(270)),s=t.n(c),m=t(158),d=l.a.div.withConfig({displayName:"Kontakt__Page",componentId:"sc-1lx57ze-0"})(["padding:15px;.gm-style-cc{display:none;}"]),p=l.a.div.withConfig({displayName:"Kontakt__Row",componentId:"sc-1lx57ze-1"})([""]),u=l.a.div.withConfig({displayName:"Kontakt__Col",componentId:"sc-1lx57ze-2"})(["padding:10px !important;"]),g=l.a.img.withConfig({displayName:"Kontakt__StyledImg",componentId:"sc-1lx57ze-3"})(["margin-bottom:10px;"]),f={lat:47.283746,lng:8.56382},E={key:"AIzaSyDqE11-ME0QlbB34g_p9lyr6FrwrYPE3y0"},b={position:"absolute",width:40,height:40,left:-20,top:-20,border:"5px solid red",borderRadius:40,backgroundColor:"rgba(0,0,0,0)",padding:4};function h(e){return{zoomControlOptions:{position:e.ControlPosition.LEFT_BOTTOM,style:e.ZoomControlStyle.SMALL},mapTypeControl:!0,mapTypeId:e.MapTypeId.SATELLITE,mapTypeControlOptions:{style:e.MapTypeControlStyle.HORIZONTAL_BAR,position:e.ControlPosition.TOP_LEFT,mapTypeIds:[e.MapTypeId.ROADMAP,e.MapTypeId.SATELLITE,e.MapTypeId.HYBRID]}}}var y=function(){return r.a.createElement(m.a,null,r.a.createElement(d,{className:"page kontakt"},r.a.createElement(p,{className:"row marketing"},r.a.createElement(u,{className:"col-lg-3"},r.a.createElement(g,{alt:"Alexander Gabriel",src:s.a,className:"js-alexImage"}),r.a.createElement("address",{className:"js-address"},r.a.createElement("strong",null,"Gabriel Software"),r.a.createElement("br",null),"Alexander Gabriel",r.a.createElement("br",null),"Bönirainstrasse 14",r.a.createElement("br",null),"8800 Thalwil",r.a.createElement("br",null),"079 372 51 64",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:#"},"alex@gabriel-software.ch"))),r.a.createElement(u,{className:"col-lg-9"},r.a.createElement("div",{style:{height:400,width:"100%"}},r.a.createElement(i.a,{bootstrapURLKeys:E,defaultCenter:f,defaultZoom:19,options:h},r.a.createElement("div",{lat:47.283746,lng:8.56382,text:"Gabriel Software",style:b}))),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("a",{href:"https://www.google.ch/maps/place/47%C2%B017'01.9%22N+8%C2%B033'50.1%22E/@47.2838532,8.5632326,172m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d47.283852!4d8.56393",style:{color:"#0000FF",textAlign:"left"},target:"_blank",rel:"noopener noreferrer"},"in Google Maps öffnen")))))))};y.displayName="KontaktPage",a.default=y},151:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gabriel Software"}}}}},156:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),l=t(4),o=t.n(l),i=t(54),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},158:function(e,a,t){"use strict";var n=t(155),r=t(0),l=t.n(r),o=t(4),i=t.n(o),c=t(169),s=t.n(c),m=t(32),d=t.n(m),p=(t(151),l.a.createContext({})),u=function(e){return l.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var g=t(391),f=t(392),E=t(393),b=t(394),h=t(395),y=t(396),w=t(397),v=t(162),k=t(157),x=t(14),T=t(170),C=t(171);Object(C.setConfig)({pureSFC:!0});var N=Object(k.a)(g.a).withConfig({displayName:"header__StyledNavbar",componentId:"sc-1x4gasm-0"})(["&.bg-dark{background-color:#145f00 !important;}"]),I=Object(k.a)(f.a).withConfig({displayName:"header__StyledNavbarBrand",componentId:"sc-1x4gasm-1"})(["font-weight:600;"]),S=Object(k.a)(E.a).withConfig({displayName:"header__StyledNavItem",componentId:"sc-1x4gasm-2"})(["margin-bottom:0 !important;"]),_=Object(k.a)(b.a).withConfig({displayName:"header__StyledNavLink",componentId:"sc-1x4gasm-3"})(["border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";color:"," !important;"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"},function(e){return e.active?"white":"rgba(255, 255, 255, 0.7)"}),O=function(e){var a=e.siteTitle,t=Object(r.useState)(!1),n=t[0],o=t[1];return l.a.createElement(x.Location,null,function(e){var t=e.location;return l.a.createElement(N,{color:"dark",dark:!0,expand:"md",sticky:"top",role:"navigation"},l.a.createElement(I,{tag:d.a,to:"/"},a),l.a.createElement(h.a,{"aria-label":"toggle Navbar",onClick:function(){return o(!n)}}),l.a.createElement(y.a,{isOpen:n,navbar:!0},l.a.createElement(w.a,{className:"ml-auto",navbar:!0},l.a.createElement(S,null,l.a.createElement(_,{tag:d.a,to:"/Leitbild/",active:"/Leitbild/"===t.pathname},"Leitbild")),l.a.createElement(S,null,l.a.createElement(_,{tag:d.a,to:"/Projekte/",active:"/Projekte/"===t.pathname},"Projekte")),l.a.createElement(S,null,l.a.createElement(_,{tag:d.a,to:"/Technologien/",active:"/Technologien/"===t.pathname},"Technologien")),l.a.createElement(S,null,l.a.createElement(_,{tag:d.a,to:"/Kontakt/",active:"/Kontakt/"===t.pathname},"Kontakt")),Object(T.exists)(T.window)&&T.window.navigator&&T.window.navigator.share&&l.a.createElement(S,null,l.a.createElement(_,{href:"#",onClick:function(){T.window.navigator.share({title:"Gabriel Software",url:"https://gabriel-software.ch"})}},l.a.createElement(v.k,null)," Teilen")))))})},j=(t(172),function(e){var a=e.children;return l.a.createElement(u,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Gabriel Software"},{name:"keywords",content:"Software, Entwicklung, Naturschutz"}]},l.a.createElement("html",{lang:"de"})),l.a.createElement(O,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:1170}},a))},data:n})});j.propTypes={children:i.a.node.isRequired};a.a=j},270:function(e,a,t){e.exports=t.p+"static/alex-a70f432a33158b08a935b0f2c1b7ae44.jpg"}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-e726370dba6b5cbd054b.js.map