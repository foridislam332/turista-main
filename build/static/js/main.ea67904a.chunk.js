(this["webpackJsonpturista-main"]=this["webpackJsonpturista-main"]||[]).push([[0],{105:function(e,c,t){},106:function(e,c,t){},107:function(e,c,t){},119:function(e,c,t){},120:function(e,c,t){},121:function(e,c,t){},122:function(e,c,t){},123:function(e,c,t){},124:function(e,c,t){},125:function(e,c,t){},126:function(e,c,t){},127:function(e,c,t){},128:function(e,c,t){},129:function(e,c,t){},130:function(e,c,t){},131:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),r=t(33),n=t.n(r),i=(t(83),t(84),t(20)),j=t(17),l=(t(85),t(10)),d=t(47),o=t(74),b={apiKey:"AIzaSyC9lBrjTxa3zwne5HZj0lItpgX_LzCOGrY",authDomain:"turista-18a4c.firebaseapp.com",projectId:"turista-18a4c",storageBucket:"turista-18a4c.appspot.com",messagingSenderId:"813223529289",appId:"1:813223529289:web:f38a7ba2e820886dc5e898"},h=function(){Object(o.a)(b)},O=new d.a;h();var x=function(){var e=Object(a.useState)({}),c=Object(l.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(!0),n=Object(l.a)(r,2),i=n[0],j=n[1],o=Object(d.b)();return Object(a.useEffect)((function(){Object(d.c)(o,(function(e){s(e||{}),j(!1)}))}),[o]),{user:t,logOut:function(){j(!0),Object(d.e)(o).then((function(){s({})})).finally((function(){return j(!1)}))},isLoading:i,setIsLoading:j,googleSignInProvider:function(){return j(!0),Object(d.d)(o,O)}}},u=t(0),m=Object(a.createContext)(),g=function(e){var c=e.children,t=x();return Object(u.jsx)(m.Provider,{value:t,children:c})},p=t(5),f=t(56),v=t.n(f),N=t(57),_=(t(105),function(){var e=Object(N.a)(),c=e.register,t=e.reset,a=e.handleSubmit;e.formState.errors;return Object(u.jsx)("div",{className:"add_package_area",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("h1",{className:"text-center mt-4",children:"Add New Package"}),Object(u.jsx)("div",{className:"personal_details row",children:Object(u.jsxs)("form",{className:"col-lg-6",onSubmit:a((function(e){v.a.post("https://macabre-nightmare-74197.herokuapp.com/all-package",e).then((function(e){e.data.insertedId&&(alert("Success to added new package"),t())})),console.log(e)})),children:[Object(u.jsx)("input",Object(p.a)({placeholder:"Package Name"},c("name"))),Object(u.jsx)("input",Object(p.a)({placeholder:"$ Price"},c("price"))),Object(u.jsx)("textarea",Object(p.a)({placeholder:"Description"},c("description"))),Object(u.jsx)("input",Object(p.a)({placeholder:"Image URL"},c("img"))),Object(u.jsx)("input",{className:"btn_regular",type:"submit",value:"Add Package"})]})})]})})}),k=(t(106),function(){return Object(u.jsx)("div",{className:"footer_area",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"Turista"}),Object(u.jsx)("p",{children:"Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours."})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"About Us"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Our Story"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Travel Blog & Tips"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Tour Guid"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Be Our Partner"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Contact Us"})})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"footer_single",children:[Object(u.jsx)("h1",{children:"Support"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Customer Support"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Privacy & Policy"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Terms & Condition"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Forum"})})]})]})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"copyright_area",children:Object(u.jsx)("p",{children:"Copyright @ 2020 Turista all right reserved."})})]})})}),y=t(136),T=t(133),P=t(137),w=function(){return Object(a.useContext)(m)},I=(t(107),function(){var e=w(),c=e.user,t=e.logOut;return Object(u.jsx)("div",{children:Object(u.jsx)(y.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(T.a,{children:[Object(u.jsx)(y.a.Brand,{as:i.b,to:"/home",children:"TURISTA"}),Object(u.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(P.a,{className:"ms-auto",children:[Object(u.jsx)(P.a.Link,{as:i.b,to:"/home",children:"Home"}),Object(u.jsx)(P.a.Link,{as:i.b,to:"/all-package",children:"All-Packages"}),c.email?Object(u.jsx)(P.a.Link,{as:i.b,to:"/add-paclage",children:"Add New Package"}):"",c.email?Object(u.jsx)(P.a.Link,{as:i.b,to:"/myorder",children:"My Orders"}):""]}),Object(u.jsx)(y.a.Text,{children:Object(u.jsx)("img",{className:"user_img me-3",title:c.displayName,src:c.photoURL,alt:""})}),Object(u.jsx)(y.a.Text,{children:Object(u.jsx)("span",{children:c.displayName})}),c.email?Object(u.jsx)("button",{className:"btn btn-danger ms-3",onClick:t,children:"Log Out"}):Object(u.jsx)(P.a.Link,{as:i.b,className:"text-light",to:"/login",children:"Login"})]})]})})})}),S=t(138),C=t(134),B=t(41),L=t(42),E=(t(119),function(e){var c=Object(u.jsx)(B.a,{icon:L.b}),t=e.package,a=t._id,s=t.name,r=t.img,n=t.description,j="/order/".concat(a);return Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"package_card",children:[Object(u.jsx)("div",{className:"card_img",children:Object(u.jsx)(S.a.Img,{variant:"top",src:r})}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)(S.a.Title,{children:s}),Object(u.jsx)(S.a.Text,{children:n}),Object(u.jsx)(i.b,{to:j,children:Object(u.jsxs)(C.a,{className:"btn_regular",children:[c," Book Now"]})})]})]})})}),M=(t(120),function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],s=c[1];return Object(a.useEffect)((function(){fetch("https://macabre-nightmare-74197.herokuapp.com/all-package").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(u.jsx)("div",{id:"all_package",className:"all_package_area",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"all_package_head",children:[Object(u.jsx)("h5",{children:"Popular Tour Package"}),Object(u.jsxs)("h1",{children:["The Best Of Our All ",Object(u.jsx)("br",{})," Tour Packages"]})]}),Object(u.jsx)("div",{className:"row g-4",children:t.map((function(e){return Object(u.jsx)(E,{package:e},e._id)}))})]})})}),A=(t(121),function(){return Object(u.jsx)("div",{className:"awesome_tour_area",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsx)("div",{className:"awesome_img",children:Object(u.jsx)("img",{className:"w-100",src:"https://i.ibb.co/NmY5gHZ/awesome-bg.jpg",alt:""})})}),Object(u.jsx)("div",{className:"col-lg-6 d-flex align-items-center",children:Object(u.jsxs)("div",{className:"awesome_content",children:[Object(u.jsxs)("h1",{children:["Go Ahead & Make ",Object(u.jsx)("br",{})," Awesome Tour"]}),Object(u.jsx)("h5",{children:"Discover Hidden Wonders On Trips With Peulis"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Explore More..."})]})})]})})})}),R=(t(122),function(){var e=Object(u.jsx)(B.a,{icon:L.a});return Object(u.jsx)("div",{className:"banner_area",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"banner_content",children:[Object(u.jsxs)("h1",{children:["Explore ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Your Travel"})]}),Object(u.jsx)("p",{children:"Discover your next great adventure, become an explorer to get started!z"}),Object(u.jsx)(i.b,{to:"/all-package",children:Object(u.jsxs)(C.a,{className:"btn_regular",children:["Booking Now ",e]})})]})})})}),D=(t(123),function(){var e=Object(u.jsx)(B.a,{icon:L.c}),c=Object(u.jsx)(B.a,{icon:L.d});return Object(u.jsxs)("div",{className:"popular_area container",children:[Object(u.jsxs)("div",{className:"popular_place_head",children:[Object(u.jsx)("h5",{children:"Popular Destinations"}),Object(u.jsxs)("h1",{children:["Travel Most Popular Place ",Object(u.jsx)("br",{})," In The World"]})]}),Object(u.jsxs)("div",{className:"row g-4",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/VBvnJZP/1.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," T\xfcrkistan, Kazakistan"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/Xkb2gXd/2.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," Tokyo , Japan"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/8rC2nPr/3.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," Semporna , Malaysia"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})})]}),Object(u.jsxs)("div",{className:"row g-4 mt-1",children:[Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/8DbtvRK/4.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," Victoria, Columbia"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/BTwC8PG/5.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," Bangkok , Thailan"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)(S.a,{className:"popular_card",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:"https://i.ibb.co/d5dS609/6.jpg"}),Object(u.jsx)(C.a,{className:"btn_regular",children:"Read More"}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsxs)(S.a.Title,{children:[e," Jakarta, Indonesia"]}),Object(u.jsxs)(S.a.Text,{children:[c,c,c,c,c]})]})]})})]})]})}),V=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(R,{}),Object(u.jsx)(M,{}),Object(u.jsx)(D,{}),Object(u.jsx)(A,{})]})},U=(t(124),function(){var e,c=w(),t=c.googleSignInProvider,a=c.setIsLoading,s=Object(j.h)(),r=Object(j.g)(),n=(null===(e=s.state)||void 0===e?void 0:e.from)||"/home";return Object(u.jsxs)("div",{className:"login_area container-fluid",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("h1",{children:"TURISTA"})}),Object(u.jsx)("div",{className:"login_container",children:Object(u.jsxs)("div",{className:"login_body",children:[Object(u.jsx)("h1",{children:"Login with"}),Object(u.jsx)("div",{className:"google_logo",children:Object(u.jsx)("img",{src:"https://i.ibb.co/f48CVVP/google.png",alt:""})}),Object(u.jsxs)("div",{className:"google_login",onClick:function(){t().then((function(e){r.push(n)})).finally((function(){return a(!1)}))},children:[Object(u.jsx)("img",{src:"https://i.ibb.co/3rwxDRh/google-logo-9827.png",alt:""}),Object(u.jsx)("span",{children:"Connect with Google"})]})]})})]})}),z=(t(125),function(){var e=w().user,c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],r=t[1],n=Object(a.useState)([]),j=Object(l.a)(n,2),d=j[0],o=j[1],b=e.email;Object(a.useEffect)((function(){fetch("https://macabre-nightmare-74197.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.useEffect)((function(){if(s.length){var e=s.filter((function(e){return e.userEmail==b}));o(e)}}),[s]);return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container mb-5",children:[Object(u.jsx)("h1",{className:"text-center my-5",children:"Manage Your all Order"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-8",children:d.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"my_order manage_my_order w-100",children:[Object(u.jsx)("div",{className:"order_img",children:Object(u.jsx)("img",{src:e.packageImg,alt:""})}),Object(u.jsxs)("div",{className:"order_content",children:[Object(u.jsx)("h4",{children:e.packageName}),Object(u.jsxs)("h5",{children:["Price: $",e.packagePrice]})]}),Object(u.jsx)("div",{className:"handle_btn",children:Object(u.jsx)(C.a,{onClick:function(){return function(e){if(window.confirm("Are you sure, You want to Remove this package?")){var c="https://macabre-nightmare-74197.herokuapp.com/users/".concat(e);fetch(c,{method:"DELETE"}).then((function(e){return e.json()})).then((function(c){if(c.deletedCount>0){alert("Package Remove Successfully");var t=s.filter((function(c){return c._id!==e}));o(t)}}))}}(e._id)},className:"btn_regular",children:"Remove"})})]})},e._id)}))}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"my_order_area",children:[Object(u.jsxs)("h1",{children:["Total Orders :",d.length]}),Object(u.jsx)(i.b,{to:"/myorder",children:Object(u.jsx)(C.a,{className:"btn_regular mt-3",children:"My Orders"})})]})})]})]})})}),F=(t(126),function(e){var c=e.order,t=c.packageName,a=c.packagePrice,s=c.packageImg;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"my_order w-100",children:[Object(u.jsx)("div",{className:"order_img",children:Object(u.jsx)("img",{src:s,alt:""})}),Object(u.jsxs)("div",{className:"order_content",children:[Object(u.jsx)("h4",{children:t}),Object(u.jsxs)("h5",{children:["Price: $",a]})]})]})})}),G=(t(127),function(){var e=w().user,c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],r=t[1],n=Object(a.useState)([]),j=Object(l.a)(n,2),d=j[0],o=j[1],b=e.email;return Object(a.useEffect)((function(){fetch("https://macabre-nightmare-74197.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.useEffect)((function(){if(s.length){var e=s.filter((function(e){return e.userEmail==b}));o(e)}}),[s]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container mb-5",children:[Object(u.jsx)("h1",{className:"text-center my-5",children:"My Orders"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-8",children:d.map((function(e){return Object(u.jsx)(F,{order:e},e._id)}))}),Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"my_order_area",children:[Object(u.jsxs)("h1",{children:["My order :",d.length]}),Object(u.jsx)(i.b,{to:"/manage-order",children:Object(u.jsx)(C.a,{className:"btn_regular mt-3",children:"Manage All Orders"})})]})})]})]})})}),H=(t(128),function(e){var c=e.catchPackage,t=c._id,a=c.name,s=c.img,r=c.price,n=c.description,i=Object(N.a)(),j=i.register,l=i.handleSubmit,d=i.formState.errors,o=w().user;return Object(u.jsx)("div",{className:"order_area",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-6",children:[Object(u.jsx)("div",{className:"order_package_img",children:Object(u.jsx)("img",{className:"w-100",src:s,alt:""})}),Object(u.jsx)("div",{className:"order_package_details",children:Object(u.jsx)("div",{className:"d-flex align-items-center",children:Object(u.jsxs)("div",{className:"order_package_content",children:[Object(u.jsx)("h1",{children:a}),Object(u.jsx)("h5",{children:n}),Object(u.jsxs)("h3",{children:["Price : ",Object(u.jsxs)("span",{children:["$",r]})]})]})})})]}),Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsx)("div",{className:"personal_details",children:Object(u.jsxs)("form",{className:"w-100",onSubmit:l((function(e){v.a.post("https://macabre-nightmare-74197.herokuapp.com/order",e).then((function(e){e.data.insertedId&&alert("added successfully")}))})),children:[Object(u.jsx)("h1",{children:"Package info"}),Object(u.jsx)("input",Object(p.a)({defaultValue:a},j("packageName"))),Object(u.jsx)("input",Object(p.a)({defaultValue:r,placeholder:"$ Price"},j("packagePrice"))),Object(u.jsx)("textarea",Object(p.a)({defaultValue:n,placeholder:"Description"},j("packageDes"))),Object(u.jsx)("input",Object(p.a)({defaultValue:s},j("packageImg"))),Object(u.jsx)("input",Object(p.a)({defaultValue:t},j("packageId"))),Object(u.jsx)("h4",{children:"Personal Info"}),Object(u.jsx)("input",Object(p.a)({defaultValue:o.displayName},j("userName"))),Object(u.jsx)("input",Object(p.a)({defaultValue:o.email},j("userEmail",{required:!0}))),d.email&&Object(u.jsx)("span",{children:"This field is required"}),Object(u.jsx)("input",Object(p.a)({placeholder:"Address"},j("address"))),Object(u.jsx)("input",Object(p.a)({placeholder:"City"},j("city"))),Object(u.jsx)("input",Object(p.a)({placeholder:"Phone Number"},j("phone"))),Object(u.jsx)("input",{className:"btn_regular",type:"submit",value:"Prace An Order"})]})})})]})})})}),J=function(){var e=Object(j.i)().id,c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],r=t[1],n=Object(a.useState)([]),i=Object(l.a)(n,2),d=i[0],o=i[1];return Object(a.useEffect)((function(){fetch("https://macabre-nightmare-74197.herokuapp.com/all-package").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.useEffect)((function(){if(s.length){var c=[],t=s.find((function(c){return c._id==e}));c.push(t),o(c)}}),[s]),Object(u.jsx)("div",{children:d.map((function(e){return Object(u.jsx)(H,{catchPackage:e},e._id)}))})},Y=(t(129),function(){return Object(u.jsx)("div",{className:"page_not_found_area",children:Object(u.jsx)(i.b,{to:"/home",children:Object(u.jsx)(C.a,{className:"btn_regular",children:"Back To Home"})})})}),$=t(9),K=t(135),W=(t(130),["children"]);var X=function(e){var c=e.children,t=Object($.a)(e,W),a=w(),s=a.user;return a.isLoading?Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)(K.a,{className:"spinner",animation:"grow",variant:"danger"})}):Object(u.jsx)(j.b,Object(p.a)(Object(p.a)({},t),{},{render:function(e){var t=e.location;return s.email?c:Object(u.jsx)(j.a,{to:{pathname:"/login",state:{from:t}}})}}))};var Z=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(g,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(I,{}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(V,{})}),Object(u.jsx)(j.b,{path:"/home",children:Object(u.jsx)(V,{})}),Object(u.jsx)(j.b,{path:"/all-package",children:Object(u.jsx)(M,{})}),Object(u.jsx)(X,{path:"/order/:id",children:Object(u.jsx)(J,{})}),Object(u.jsx)(X,{path:"/order/:orderId",children:Object(u.jsx)(H,{})}),Object(u.jsx)(X,{path:"/add-paclage",children:Object(u.jsx)(_,{})}),Object(u.jsx)(X,{path:"/myorder",children:Object(u.jsx)(G,{})}),Object(u.jsx)(X,{path:"/manage-order",children:Object(u.jsx)(z,{})}),Object(u.jsx)(j.b,{path:"/login",children:Object(u.jsx)(U,{})}),Object(u.jsx)(j.b,{exact:!0,path:"*",children:Object(u.jsx)(Y,{})})]}),Object(u.jsx)(k,{})]})})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,139)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,r=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),q()},83:function(e,c,t){},85:function(e,c,t){}},[[131,1,2]]]);
//# sourceMappingURL=main.ea67904a.chunk.js.map