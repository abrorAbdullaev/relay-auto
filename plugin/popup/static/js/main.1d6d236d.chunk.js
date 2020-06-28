(this["webpackJsonprelay-auto"]=this["webpackJsonprelay-auto"]||[]).push([[0],{101:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),u=t.n(c),i=(t(90),t(19)),o=t.n(i),l=t(14),s=t(75),f=t(13),m=r.a.createContext({trucks:{},isLoggedIn:!1,isSearching:!1,dispatch:void 0}),d=t(18),h={isInitialized:!0,isSearching:!1,refreshRate:250,isLoggedIn:!0,trucks:[]},g=["trucks","isLoggedIn","isSearching"],p="ADD_TRUCK",v="EDIT_TRUCK",b="REMOVE_TRUCK",j="UPDATE_LOGIN_STATE",E="UPDATE_SEARCHING_STATE",O={ADD_TRUCK:"trucks",EDIT_TRUCK:"trucks",REMOVE_TRUCK:"trucks",UPDATE_LOGIN_STATE:"isLoggedIn",UPDATE_SEARCHING_STATE:"isSearching"};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.keys(e);return function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=!1,c={},u=0;u<n.length;u++){var i=n[u];c[i]=e[i](t[i],a),r=r||c[i]!==t[i]}return r?c:t}}({trucks:function(e,n){switch(n.type){case p:return Object(l.a)({},e,Object(d.a)({},n.id,{id:n.id,name:n.name}));case v:return Object(l.a)({},e,Object(d.a)({},n.id,Object(l.a)({},e[n.id],{name:n.name})));case b:var t=Object(l.a)({},e);return delete t[n.id],Object(l.a)({},t);default:return e}},isLoggedIn:function(e,n){switch(n.type){case j:return n.state;default:return e}},isSearching:function(e,n){switch(n.type){case E:return n.state;default:return e}}}),y=function(e){var n=e.data,t=e.storage,c=e.children,u=Object(a.useReducer)(function(e){return function(n,t){var a=k(n,t),r=O[t.type];return e.set(r,a[r]),a}}(t),Object(l.a)({},n)),i=Object(f.a)(u,2),o=i[0],s=i[1];return r.a.createElement(m.Provider,{value:Object(l.a)({},o,{dispatch:s})},c)},w=t(31),x=t(32),S=function(){function e(){Object(w.a)(this,e),this.nameSpace="local"}return Object(x.a)(e,[{key:"get",value:function(e){var n=this;return new Promise((function(t,a){try{chrome.storage[n.nameSpace].get(["".concat(e)],(function(n){t(n["".concat(e)])}))}catch(r){a(r)}}))}},{key:"set",value:function(e,n){var t=this;return new Promise((function(a,r){try{chrome.storage["".concat(t.nameSpace)].set(Object(d.a)({},"".concat(e),n),(function(){return a(!0)}))}catch(c){r(c)}}))}},{key:"addListener",value:function(e,n,t){var a=this;chrome.storage.onChanged.addListener((function(r,c){!r["".concat(n)]||t&&t!==r["".concat(n)].newValue||c!==a.nameSpace||e(r["".concat(n)])}))}},{key:"initialize",value:function(){var e=this;return new Promise((function(n,t){try{e.get("isInitialized").then((function(a){a||Promise.all(Object.entries(h).map((function(n){var t=Object(f.a)(n,2),a=t[0],r=t[1];return e.set("".concat(a),h[r])}))).then((function(e){e.every(Boolean)?n(!0):t("Some values in storage are not set successfully!")}))}))}catch(a){t(a)}}))}},{key:"getDataObject",value:function(e){return new Promise((function(n){return n(e.reduce((function(e,n){return Object(l.a)({},e,Object(d.a)({},n,JSON.parse(localStorage.getItem(n))))}),{}))}))}}]),e}(),T=t(10),C=t(11),I=t(125),A=t(63),D=t.n(A),L=t(62),R=t.n(L),_=function(e){var n=e.isTrucksListShown,t=e.onTrucksListOpen;return r.a.createElement(I.a,{variant:"extended",size:"medium",color:"primary","aria-label":"show-trucks",onClick:t},"Show Trucks",n?r.a.createElement(R.a,null):r.a.createElement(D.a,null))},P=t(131),U=t(133),z=t(137),K=t(134),N=t(128),F=t(129),G=t(130),B=t(140),J=t(66),V=t.n(J),W=t(67),H=t.n(W),M=t(64),Y=t.n(M),$=t(65),q=t.n($);function Q(){var e=Object(T.a)(["\n  width: 100%;\n"]);return Q=function(){return e},e}var X=Object(C.a)(B.a)(Q()),Z=function(e){var n=e.truck,t=e.onEditTruck,c=e.onRemoveTruck,u=Object(a.useState)(!1),i=Object(f.a)(u,2),o=i[0],l=i[1],s=Object(a.useState)(n.name||""),m=Object(f.a)(s,2),d=m[0],h=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(X,{placeholder:"Name",readOnly:!o,value:o?d:n.name,onChange:function(e){return h(e.target.value)}}),r.a.createElement(F.a,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{"aria-label":"edit",onClick:function(){t(d),l(!1)}},r.a.createElement(Y.a,null)),r.a.createElement(G.a,{"aria-label":"delete",onClick:function(){h(n.name),l(!1)}},r.a.createElement(q.a,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{"aria-label":"edit",onClick:function(){h(n.name),l(!0)}},r.a.createElement(V.a,null)),r.a.createElement(G.a,{"aria-label":"delete",onClick:c},r.a.createElement(H.a,null))))),r.a.createElement(P.a,null))};function ee(){var e=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  margin-top: 100px;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}var ne=C.a.div(ee()),te=function(){return r.a.createElement(ne,null,r.a.createElement(z.a,{fontWeight:500,fontSize:20},"You have no trucks yet."))},ae=t(132),re=t(71),ce=t.n(re),ue=function(e){var n=e.onAddTruck;return r.a.createElement(ae.a,{variant:"contained",color:"primary",onClick:n},"Add",r.a.createElement(ce.a,null))};function ie(){var e=Object(T.a)(["\n  padding-bottom: 0 !important;\n"]);return ie=function(){return e},e}function oe(){var e=Object(T.a)(["\n  padding: 10px;\n"]);return oe=function(){return e},e}function le(){var e=Object(T.a)(["\n  width: 100%;\n  margin-top: 25px;\n  background: #fff;\n  height: 300px;\n  max-height: 300px;\n  overflow: auto;\n"]);return le=function(){return e},e}var se=Object(C.a)(U.a)(le()),fe=Object(C.a)(z.a)(oe()),me=Object(C.a)(K.a)(ie()),de=function(e){var n=e.trucks,t=e.onAddTruck,a=e.onEditTruck,c=e.onRemoveTruck,u=Object.keys(n).map((function(e){return n[e]}));return r.a.createElement(se,null,r.a.createElement(fe,{display:"flex",justifyContent:"flex-end"},r.a.createElement(ue,{onAddTruck:t})),r.a.createElement(P.a,null),u.length?r.a.createElement(me,null,u.map((function(e,n){return r.a.createElement(Z,{key:n,truck:e,onEditTruck:function(n){return a(e.id,n)},onRemoveTruck:function(){return c(e.id)}})}))):r.a.createElement(te,null))},he=t(72),ge=t.n(he);function pe(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  width: 100%;\n  margin-top: 50px;\n"]);return pe=function(){return e},e}var ve=C.a.div(pe()),be=function(e){var n=e.trucks,t=e.onDispatch,c=Object(a.useState)(!1),u=Object(f.a)(c,2),i=u[0],o=u[1];return r.a.createElement(ve,null,r.a.createElement(_,{isTrucksListShown:i,onTrucksListOpen:function(){return o(!i)}}),i?r.a.createElement(de,{trucks:n,onAddTruck:function(){return t((e="",{type:p,id:ge()(),name:e}));var e},onEditTruck:function(e,n){return t(function(e,n){return{type:v,id:e,name:n}}(e,n))},onRemoveTruck:function(e){return t(function(e){return{type:b,id:e}}(e))}}):null)},je=t(73),Ee=t.n(je),Oe=t(74),ke=t.n(Oe),ye=function(e){var n=e.isSearching,t=e.onDispatch,a=function(){t({type:E,state:!n})};return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(ae.a,{variant:"contained",color:"secondary",endIcon:r.a.createElement(ke.a,null),onClick:a},"Stop"):r.a.createElement(ae.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(Ee.a,null),onClick:a},"Start"))};function we(){var e=Object(T.a)(["\n  font-weight: bold;\n  display: block;\n  font-size: 40px;\n  color: #fff;\n"]);return we=function(){return e},e}function xe(){var e=Object(T.a)(["\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #6498FE;\n"]);return xe=function(){return e},e}var Se=Object(C.a)(z.a)(xe()),Te=Object(C.a)(z.a)(we()),Ce=function(){return r.a.createElement(Se,null,r.a.createElement(Te,null,"Relay Auto \ud83d\udce6"))},Ie=t(135);function Ae(){var e=Object(T.a)(["\n  margin-top: 30px !important;\n"]);return Ae=function(){return e},e}function De(){var e=Object(T.a)(["\n  width: 100%;\n"]);return De=function(){return e},e}function Le(){var e=Object(T.a)(["\n  width: 100%;\n"]);return Le=function(){return e},e}function Re(){var e=Object(T.a)(["\n  width: 100%;\n  margin-top: -40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"]);return Re=function(){return e},e}function _e(){var e=Object(T.a)(["\n  width: 40%;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"]);return _e=function(){return e},e}var Pe=Object(C.a)(z.a)(_e()),Ue=C.a.form(Re()),ze=Object(C.a)(Ie.a)(Le()),Ke=Object(C.a)(Ie.a)(De()),Ne=Object(C.a)(ae.a)(Ae()),Fe=function(e){var n=e.onSubmit,t=Object(a.useState)(""),c=Object(f.a)(t,2),u=c[0],i=c[1],o=Object(a.useState)(""),l=Object(f.a)(o,2),s=l[0],m=l[1];return r.a.createElement(Pe,null,r.a.createElement(Ue,{name:"login-form",onSubmit:function(e){e.preventDefault(),n({login:u,password:s})}},r.a.createElement(ze,{label:"Login",onChange:function(e){return i(e.target.value)}}),r.a.createElement(Ke,{label:"Password",type:"password",onChange:function(e){return m(e.target.value)}}),r.a.createElement(Ne,{type:"submit",variant:"contained",color:"primary"},"Login")))},Ge=t(52),Be=function(){function e(){Object(w.a)(this,e)}return Object(x.a)(e,null,[{key:"login",value:function(e,n){var t,a,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,o.a.awrap(fetch("https://raw.githubusercontent.com/abrorAbdullaev/RelayAuth/master/authv2.json"));case 3:return t=c.sent,c.next=6,o.a.awrap(t.json());case 6:return a=c.sent,r=a[Object(Ge.sha256)(e)],c.abrupt("return",!(!r||r!==Object(Ge.sha256)(n)));case 11:return c.prev=11,c.t0=c.catch(0),c.abrupt("return",!1);case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}]),e}();function Je(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return Je=function(){return e},e}var Ve=C.a.div(Je()),We=function(e){var n=e.onDispatch;return r.a.createElement(Ve,null,r.a.createElement(Ce,null),r.a.createElement(Fe,{onSubmit:function(e){var t,a;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.login,a=e.password,r.next=3,o.a.awrap(Be.login(t,a));case 3:r.sent&&n({type:j,state:!0});case 5:case"end":return r.stop()}}))}}))};function He(){var e=Object(T.a)(["\n  padding: 50px 100px 0;\n  width: 100%;\n"]);return He=function(){return e},e}var Me=Object(C.a)(z.a)(He()),Ye=function(){var e=Object(a.useContext)(m),n=e.trucks,t=e.isLoggedIn,c=e.isSearching,u=e.dispatch;return t?r.a.createElement(Me,{display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(ye,{isSearching:c,onDispatch:u}),r.a.createElement(be,{trucks:n,onDispatch:u})):r.a.createElement(We,{onDispatch:u})},$e=new S,qe=function(){var e=Object(a.useState)(!1),n=Object(f.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)({trucks:{},isLoggedIn:!1,isSearching:!1}),i=Object(f.a)(u,2),m=i[0],d=i[1];return Object(a.useEffect)((function(){(function(){var e,n,t,a;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap($e.getDataObject(Object(s.a)(g)));case 2:e=r.sent,n=e.trucks,t=e.isLoggedIn,a=e.isSearching,d(Object(l.a)({},m,{trucks:n||{},isLoggedIn:t,isSearching:a})),c(!0);case 8:case"end":return r.stop()}}))})().then()}),[]),t?r.a.createElement(y,{storage:$e,data:m},r.a.createElement(Ye,null)):r.a.createElement("span",null,"Loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,n,t){e.exports=t(101)},90:function(e,n,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.1d6d236d.chunk.js.map