(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150);a(162);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NICHT GEFUNDEN"),r.a.createElement("p",null,"Sorry, diese URL existiert nicht :-("))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(144),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var s=a(34);a.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gabriel Software"}}}}},147:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(159),u=a.n(l),d=a(143),s=a(156),m=a(152),f=a(148),p=a(14),g=a(160),h=a(161);Object(h.setConfig)({pureSFC:!0});var b=Object(f.a)(s.f).withConfig({displayName:"header__StyledNavbar",componentId:"sc-1x4gasm-0"})(["&.bg-dark{background-color:#145f00 !important;}"]),v=Object(f.a)(s.g).withConfig({displayName:"header__StyledNavbarBrand",componentId:"sc-1x4gasm-1"})(["font-weight:600;"]),w=Object(f.a)(s.e).withConfig({displayName:"header__StyledNavLink",componentId:"sc-1x4gasm-2"})(["border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";color:"," !important;"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"},function(e){return e.active?"white":"rgba(255, 255, 255, 0.7)"}),y=function(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],o=a[1];return i.a.createElement(p.Location,null,function(e){var a=e.location;return i.a.createElement(b,{color:"dark",dark:!0,expand:"md",sticky:"top",role:"navigation"},i.a.createElement(v,{tag:d.Link,to:"/"},t),i.a.createElement(s.h,{"aria-label":"toggle Navbar",onClick:function(){return o(!n)}}),i.a.createElement(s.a,{isOpen:n,navbar:!0},i.a.createElement(s.c,{className:"ml-auto",navbar:!0},i.a.createElement(s.d,null,i.a.createElement(w,{tag:d.Link,to:"/Leitbild/",active:"/Leitbild/"===a.pathname},"Leitbild")),i.a.createElement(s.d,null,i.a.createElement(w,{tag:d.Link,to:"/Projekte/",active:"/Projekte/"===a.pathname},"Projekte")),i.a.createElement(s.d,null,i.a.createElement(w,{tag:d.Link,to:"/Technologien/",active:"/Technologien/"===a.pathname},"Technologien")),i.a.createElement(s.d,null,i.a.createElement(w,{tag:d.Link,to:"/Kontakt/",active:"/Kontakt/"===a.pathname},"Kontakt")),Object(g.exists)(g.window)&&g.window.navigator&&g.window.navigator.share&&i.a.createElement(s.d,null,i.a.createElement(w,{href:"#",onClick:function(){g.window.navigator.share({title:"Gabriel Software",url:"https://gabriel-software.ch"})}},i.a.createElement(m.k,null)," Teilen")))))})},E=(a(149),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Gabriel Software"},{name:"keywords",content:"Software, Entwicklung, Naturschutz"}]},i.a.createElement("html",{lang:"de"})),i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1170}},t))},data:n})});E.propTypes={children:c.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-9288fec49e756b00155a.js.map