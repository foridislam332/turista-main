(this["webpackJsonpturista-main"]=this["webpackJsonpturista-main"]||[]).push([[0],{69:function(e,c,t){},71:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},88:function(e,c,t){},89:function(e,c,t){},90:function(e,c,t){},91:function(e,c,t){},92:function(e,c,t){},93:function(e,c,t){},94:function(e,c,t){},95:function(e,c,t){},96:function(e,c,t){},97:function(e,c,t){},98:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(31),r=t.n(n),i=(t(69),t(70),t(18)),j=t(17),l=(t(71),t(13)),o=t(46),d=t(60),b={apiKey:"AIzaSyC9lBrjTxa3zwne5HZj0lItpgX_LzCOGrY",authDomain:"turista-18a4c.firebaseapp.com",projectId:"turista-18a4c",storageBucket:"turista-18a4c.appspot.com",messagingSenderId:"813223529289",appId:"1:813223529289:web:f38a7ba2e820886dc5e898"},h=function(){Object(d.a)(b)},O=new o.a;h();var x=function(){var e=Object(s.useState)({}),c=Object(l.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!0),r=Object(l.a)(n,2),i=r[0],j=r[1],d=Object(o.b)();return Object(s.useEffect)((function(){Object(o.c)(d,(function(e){a(e||{}),j(!1)}))}),[d]),{user:t,logOut:function(){Object(o.e)(d).then((function(){a({})})).finally((function(){return j(!1)}))},isLoading:i,googleSignInProvider:function(){j(!0),Object(o.d)(d,O).then((function(e){a(e.user)})).finally((function(){return j(!1)}))}}},u=t(1),g=Object(s.createContext)(),m=function(e){var c=e.children,t=x();return Object(u.jsx)(g.Provider,{value:t,children:c})},p=(t(74),function(){return Object(u.jsx)("div",{className:"footer_area",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"Turista"}),Object(u.jsx)("p",{children:"Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours."})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"About Us"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Our Story"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Travel Blog & Tips"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Tour Guid"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Be Our Partner"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Contact Us"})})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"Support"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Customer Support"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Privacy & Policy"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Terms & Condition"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Forum"})})]})]})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"copyright_area",children:Object(u.jsx)("p",{children:"Copyright @ 2020 Turista all right reserved."})})]})})}),v=t(103),f=t(100),N=t(104),_=function(){return Object(s.useContext)(g)},k=(t(75),function(){var e=_(),c=e.user,t=e.logOut;return Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(v.a.Brand,{as:i.b,to:"/home",children:"TURISTA"}),Object(u.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(N.a,{className:"ms-auto",children:[Object(u.jsx)(N.a.Link,{as:i.b,to:"/home",children:"Home"}),Object(u.jsx)(N.a.Link,{as:i.b,to:"/all-package",children:"All-Packages"}),Object(u.jsx)(N.a.Link,{as:i.b,to:"/about",children:"About Us"}),Object(u.jsx)(N.a.Link,{as:i.b,to:"/contact",children:"Contact Us"})]}),Object(u.jsx)(v.a.Text,{children:Object(u.jsx)("img",{className:"user_img",title:c.displayName,src:c.photoURL,alt:""})}),c.email?Object(u.jsx)("button",{className:"btn btn-danger ms-3",onClick:t,children:"Log Out"}):Object(u.jsx)(N.a.Link,{as:i.b,className:"text-light",to:"/login",children:"Login"})]})]})})})}),T=t(105),w=t(101),P=t(40),y=t(41),B=(t(88),function(e){var c=Object(u.jsx)(P.a,{icon:y.b}),t=e.package,s=t._id,a=t.name,n=t.img,r=t.description,j="/package/".concat(s);return Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"package_card",children:[Object(u.jsx)("div",{className:"card_img",children:Object(u.jsx)(T.a.Img,{variant:"top",src:n})}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsx)(T.a.Title,{children:a}),Object(u.jsx)(T.a.Text,{children:r}),Object(u.jsx)(i.b,{to:j,children:Object(u.jsxs)(w.a,{className:"btn_regular",children:[c," Book Now"]})})]})]})})}),C=(t(89),function(){var e=Object(s.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("http://localhost:5000/all-package").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsx)("div",{id:"all_package",className:"all_package_area",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"all_package_head",children:[Object(u.jsx)("h5",{children:"Popular Tour Package"}),Object(u.jsxs)("h1",{children:["The Best Of Our All ",Object(u.jsx)("br",{})," Tour Packages"]})]}),Object(u.jsx)("div",{className:"row g-4",children:t.map((function(e){return Object(u.jsx)(B,{package:e},e._id)}))})]})})}),I=(t(90),function(){return Object(u.jsx)("div",{className:"awesome_tour_area",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsx)("div",{className:"awesome_img",children:Object(u.jsx)("img",{className:"w-100",src:"https://i.ibb.co/NmY5gHZ/awesome-bg.jpg",alt:""})})}),Object(u.jsx)("div",{className:"col-lg-6 d-flex align-items-center",children:Object(u.jsxs)("div",{className:"awesome_content",children:[Object(u.jsxs)("h1",{children:["Go Ahead & Make ",Object(u.jsx)("br",{})," Awesome Tour"]}),Object(u.jsx)("h5",{children:"Discover Hidden Wonders On Trips With Peulis"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Explore More..."})]})})]})})})}),S=(t(91),function(){var e=Object(u.jsx)(P.a,{icon:y.a});return Object(u.jsx)("div",{className:"banner_area",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"banner_content",children:[Object(u.jsxs)("h1",{children:["Explore ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Your Travel"})]}),Object(u.jsx)("p",{children:"Discover your next great adventure, become an explorer to get started!z"}),Object(u.jsx)(i.b,{to:"/all-package",children:Object(u.jsxs)(w.a,{className:"btn_regular",children:["Booking Now ",e]})})]})})})}),L=(t(92),function(){var e=Object(u.jsx)(P.a,{icon:y.c}),c=Object(u.jsx)(P.a,{icon:y.d});return Object(u.jsxs)("div",{className:"popular_area container",children:[Object(u.jsxs)("div",{className:"popular_place_head",children:[Object(u.jsx)("h5",{children:"Popular Destinations"}),Object(u.jsxs)("h1",{children:["Travel Most Popular Place ",Object(u.jsx)("br",{})," In The World"]})]}),Object(u.jsxs)("div",{className:"row g-4",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/VBvnJZP/1.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," T\xfcrkistan, Kazakistan"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/Xkb2gXd/2.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," Tokyo , Japan"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/8rC2nPr/3.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," Semporna , Malaysia"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})})]}),Object(u.jsxs)("div",{className:"row g-4 mt-1",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/8DbtvRK/4.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," Victoria, Columbia"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/BTwC8PG/5.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," Bangkok , Thailan"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(T.a,{className:"popular_card",children:[Object(u.jsx)(T.a.Img,{variant:"top",src:"https://i.ibb.co/d5dS609/6.jpg"}),Object(u.jsx)(w.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(T.a.Body,{children:[Object(u.jsxs)(T.a.Title,{children:[e," Jakarta, Indonesia"]}),Object(u.jsxs)(T.a.Text,{children:[c,c,c,c,c]})]})]})})]})]})}),A=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{}),Object(u.jsx)(C,{}),Object(u.jsx)(L,{}),Object(u.jsx)(I,{})]})},M=(t(93),function(e){var c=e.catchPackage;console.log(c);var t=c.name,s=c.img,a=c.price,n=c.description;return Object(u.jsx)("div",{className:"show_package_area",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-7",children:Object(u.jsx)("div",{className:"show_package_img",children:Object(u.jsx)("img",{className:"w-100",src:s,alt:""})})}),Object(u.jsx)("div",{className:"col-lg-5 d-flex align-items-center",children:Object(u.jsxs)("div",{className:"show_package_content",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h5",{children:n}),Object(u.jsxs)("h3",{children:["Price : ",Object(u.jsxs)("span",{children:["$",a]})]}),Object(u.jsx)(i.b,{to:"/order",children:Object(u.jsx)(w.a,{className:"btn_regular",children:"Prace An Order"})})]})})]})})})}),R=function(){var e=Object(j.i)().id,c=Object(s.useState)([]),t=Object(l.a)(c,2),a=t[0],n=t[1],r=Object(s.useState)([]),i=Object(l.a)(r,2),o=i[0],d=i[1];return Object(s.useEffect)((function(){fetch("http://localhost:5000/all-package").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(s.useEffect)((function(){if(a.length){var c=[],t=a.find((function(c){return c._id==e}));c.push(t),d(c)}}),[a]),Object(u.jsx)("div",{children:o.map((function(e){return Object(u.jsx)(M,{catchPackage:e},e._id)}))})},D=(t(94),function(){var e,c=_().googleSignInProvider,t=Object(j.h)();Object(j.g)(),null===(e=t.state)||void 0===e||e.from;return Object(u.jsxs)("div",{className:"login_area container-fluid",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("h1",{children:"TURISTA"})}),Object(u.jsx)("div",{className:"login_container",children:Object(u.jsxs)("div",{className:"login_body",children:[Object(u.jsx)("h1",{children:"Login with"}),Object(u.jsx)("div",{className:"google_logo",children:Object(u.jsx)("img",{src:"https://i.ibb.co/f48CVVP/google.png",alt:""})}),Object(u.jsxs)("div",{className:"google_login",onClick:c,children:[Object(u.jsx)("img",{src:"https://i.ibb.co/3rwxDRh/google-logo-9827.png",alt:""}),Object(u.jsx)("span",{children:"Connect with Google"})]})]})})]})}),E=(t(95),function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Prace an Order"})})}),U=(t(96),function(){return Object(u.jsx)("div",{className:"page_not_found_area",children:Object(u.jsx)(i.b,{to:"/home",children:Object(u.jsx)(w.a,{className:"btn_regular",children:"Back To Home"})})})}),z=t(6),F=t(9),G=t(102),H=(t(97),["children"]);var J=function(e){var c=e.children,t=Object(F.a)(e,H),s=_(),a=s.user;return s.isLoading?Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)(G.a,{className:"spinner",animation:"grow",variant:"danger"})}):Object(u.jsx)(j.b,Object(z.a)(Object(z.a)({},t),{},{render:function(e){var t=e.location;return a.email?c:Object(u.jsx)(j.a,{to:{pathname:"/login",state:{from:t}}})}}))};var V=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(k,{}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(A,{})}),Object(u.jsx)(j.b,{path:"/home",children:Object(u.jsx)(A,{})}),Object(u.jsx)(j.b,{path:"/all-package",children:Object(u.jsx)(C,{})}),Object(u.jsx)(J,{path:"/package/:id",children:Object(u.jsx)(R,{})}),Object(u.jsx)(J,{path:"/order",children:Object(u.jsx)(E,{})}),Object(u.jsx)(j.b,{path:"/login",children:Object(u.jsx)(D,{})}),Object(u.jsx)(j.b,{exact:!0,path:"*",children:Object(u.jsx)(U,{})})]}),Object(u.jsx)(p,{})]})})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,106)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),K()}},[[98,1,2]]]);
//# sourceMappingURL=main.82376329.chunk.js.map