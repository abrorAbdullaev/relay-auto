(this["webpackJsonprelay-auto"]=this["webpackJsonprelay-auto"]||[]).push([[0],{82:function(e,n,t){e.exports=t(98)},87:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),u=t.n(c),i=(t(87),t(18)),o=t.n(i),l=t(14),s=t(13),f=r.a.createContext({trucks:{},isLoggedIn:!1,dispatch:void 0}),m=t(17),d={isInitialized:!0,isSearching:!1,refreshRate:250,isLoggedIn:!0,trucks:[]},b="ADD_TRUCK",v="EDIT_TRUCK",p="REMOVE_TRUCK",h="UPDATE_LOGIN_STATE",g={ADD_TRUCK:"trucks",EDIT_TRUCK:"trucks",REMOVE_TRUCK:"trucks",UPDATE_LOGIN_STATE:"isLoggedIn"};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.keys(e);return function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=!1,c={},u=0;u<n.length;u++){var i=n[u];c[i]=e[i](t[i],a),r=r||c[i]!==t[i]}return r?c:t}}({trucks:function(e,n){switch(n.type){case b:return Object(l.a)({},e,Object(m.a)({},n.id,{id:n.id,name:n.name}));case v:return Object(l.a)({},e,Object(m.a)({},n.id,Object(l.a)({},e[n.id],{name:n.name})));case p:var t=Object(l.a)({},e);return delete t[n.id],Object(l.a)({},t);default:return e}},isLoggedIn:function(e,n){switch(n.type){case h:return n.state;default:return!1}}}),O=function(e){var n=e.data,t=e.storage,c=e.children,u=Object(a.useReducer)(function(e){return function(n,t){var a=j(n,t),r=g[t.type];return e.set(r,a[r]),a}}(t),Object(l.a)({},n)),i=Object(s.a)(u,2),o=i[0],m=i[1];return r.a.createElement(f.Provider,{value:Object(l.a)({},o,{dispatch:m})},c)},E=t(31),k=t(32),y=function(){function e(){Object(E.a)(this,e),this.nameSpace="local"}return Object(k.a)(e,[{key:"get",value:function(e){var n=this;return new Promise((function(t,a){try{chrome.storage[n.nameSpace].get(["".concat(e)],(function(n){t(n["".concat(e)])}))}catch(r){a(r)}}))}},{key:"set",value:function(e,n){var t=this;return new Promise((function(a,r){try{chrome.storage["".concat(t.nameSpace)].set(Object(m.a)({},"".concat(e),n),(function(){return a(!0)}))}catch(c){r(c)}}))}},{key:"addListener",value:function(e,n,t){var a=this;chrome.storage.onChanged.addListener((function(r,c){!r["".concat(n)]||t&&t!==r["".concat(n)].newValue||c!==a.nameSpace||e(r["".concat(n)])}))}},{key:"initialize",value:function(){var e=this;return new Promise((function(n,t){try{e.get("isInitialized").then((function(a){a||Promise.all(Object.entries(d).map((function(n){var t=Object(s.a)(n,2),a=t[0],r=t[1];return e.set("".concat(a),d[r])}))).then((function(e){e.every(Boolean)?n(!0):t("Some values in storage are not set successfully!")}))}))}catch(a){t(a)}}))}},{key:"getDataObject",value:function(e){return new Promise((function(n){return n(e.reduce((function(e,n){return Object(l.a)({},e,Object(m.a)({},n,JSON.parse(localStorage.getItem(n))))}),{}))}))}}]),e}(),w=t(10),x=t(11),T=t(122),S=t(63),L=t.n(S),C=t(62),I=t.n(C),D=function(e){var n=e.isTrucksListShown,t=e.onTrucksListOpen;return r.a.createElement(T.a,{variant:"extended",size:"medium",color:"primary","aria-label":"show-trucks",onClick:t},"Show Trucks",n?r.a.createElement(I.a,null):r.a.createElement(L.a,null))},R=t(128),A=t(130),_=t(134),P=t(131),U=t(125),z=t(126),K=t(127),F=t(136),N=t(66),B=t.n(N),J=t(67),V=t.n(J),W=t(64),G=t.n(W),M=t(65),Y=t.n(M);function $(){var e=Object(w.a)(["\n  width: 100%;\n"]);return $=function(){return e},e}var q=Object(x.a)(F.a)($()),H=function(e){var n=e.truck,t=e.onEditTruck,c=e.onRemoveTruck,u=Object(a.useState)(!1),i=Object(s.a)(u,2),o=i[0],l=i[1],f=Object(a.useState)(n.name||""),m=Object(s.a)(f,2),d=m[0],b=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement(q,{placeholder:"Name",readOnly:!o,value:o?d:n.name,onChange:function(e){return b(e.target.value)}}),r.a.createElement(z.a,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{"aria-label":"edit",onClick:function(){t(d),l(!1)}},r.a.createElement(G.a,null)),r.a.createElement(K.a,{"aria-label":"delete",onClick:function(){b(n.name),l(!1)}},r.a.createElement(Y.a,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{"aria-label":"edit",onClick:function(){b(n.name),l(!0)}},r.a.createElement(B.a,null)),r.a.createElement(K.a,{"aria-label":"delete",onClick:c},r.a.createElement(V.a,null))))),r.a.createElement(R.a,null))};function Q(){var e=Object(w.a)(["\n  display: flex;\n  width: 100%;\n  margin-top: 100px;\n  justify-content: center;\n  align-items: center;\n"]);return Q=function(){return e},e}var X=x.a.div(Q()),Z=function(){return r.a.createElement(X,null,r.a.createElement(_.a,{fontWeight:500,fontSize:20},"You have no trucks yet."))},ee=t(129),ne=t(71),te=t.n(ne),ae=function(e){var n=e.onAddTruck;return r.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:n},"Add",r.a.createElement(te.a,null))};function re(){var e=Object(w.a)(["\n  padding-bottom: 0 !important;\n"]);return re=function(){return e},e}function ce(){var e=Object(w.a)(["\n  padding: 10px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(w.a)(["\n  width: 100%;\n  margin-top: 25px;\n  background: #fff;\n  height: 300px;\n  max-height: 300px;\n  overflow: auto;\n"]);return ue=function(){return e},e}var ie=Object(x.a)(A.a)(ue()),oe=Object(x.a)(_.a)(ce()),le=Object(x.a)(P.a)(re()),se=function(e){var n=e.trucks,t=e.onAddTruck,a=e.onEditTruck,c=e.onRemoveTruck,u=Object.keys(n).map((function(e){return n[e]}));return r.a.createElement(ie,null,r.a.createElement(oe,{display:"flex",justifyContent:"flex-end"},r.a.createElement(ae,{onAddTruck:t})),r.a.createElement(R.a,null),u.length?r.a.createElement(le,null,u.map((function(e,n){return r.a.createElement(H,{key:n,truck:e,onEditTruck:function(n){return a(e.id,n)},onRemoveTruck:function(){return c(e.id)}})}))):r.a.createElement(Z,null))},fe=t(72),me=t.n(fe);function de(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  width: 100%;\n  margin-top: 50px;\n"]);return de=function(){return e},e}var be=x.a.div(de()),ve=function(e){var n=e.trucks,t=e.onDispatch,c=Object(a.useState)(!1),u=Object(s.a)(c,2),i=u[0],o=u[1];return r.a.createElement(be,null,r.a.createElement(D,{isTrucksListShown:i,onTrucksListOpen:function(){return o(!i)}}),i?r.a.createElement(se,{trucks:n,onAddTruck:function(){return t((e="",{type:b,id:me()(),name:e}));var e},onEditTruck:function(e,n){return t(function(e,n){return{type:v,id:e,name:n}}(e,n))},onRemoveTruck:function(e){return t(function(e){return{type:p,id:e}}(e))}}):null)},pe=function(){return r.a.createElement(ee.a,{id:"customTest",type:"button",variant:"contained",color:"primary"},"Fetch")};function he(){var e=Object(w.a)(["\n  font-weight: bold;\n  display: block;\n  font-size: 40px;\n  color: #fff;\n"]);return he=function(){return e},e}function ge(){var e=Object(w.a)(["\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #6498FE;\n"]);return ge=function(){return e},e}var je=Object(x.a)(_.a)(ge()),Oe=Object(x.a)(_.a)(he()),Ee=function(){return r.a.createElement(je,null,r.a.createElement(Oe,null,"Relay Auto \ud83d\udce6"))},ke=t(132);function ye(){var e=Object(w.a)(["\n  margin-top: 30px !important;\n"]);return ye=function(){return e},e}function we(){var e=Object(w.a)(["\n  width: 100%;\n"]);return we=function(){return e},e}function xe(){var e=Object(w.a)(["\n  width: 100%;\n"]);return xe=function(){return e},e}function Te(){var e=Object(w.a)(["\n  width: 100%;\n  margin-top: -40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"]);return Te=function(){return e},e}function Se(){var e=Object(w.a)(["\n  width: 40%;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"]);return Se=function(){return e},e}var Le=Object(x.a)(_.a)(Se()),Ce=x.a.form(Te()),Ie=Object(x.a)(ke.a)(xe()),De=Object(x.a)(ke.a)(we()),Re=Object(x.a)(ee.a)(ye()),Ae=function(e){var n=e.onSubmit,t=Object(a.useState)(""),c=Object(s.a)(t,2),u=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),f=l[0],m=l[1];return r.a.createElement(Le,null,r.a.createElement(Ce,{name:"login-form",onSubmit:function(e){e.preventDefault(),n({login:u,password:f})}},r.a.createElement(Ie,{label:"Login",onChange:function(e){return i(e.target.value)}}),r.a.createElement(De,{label:"Password",type:"password",onChange:function(e){return m(e.target.value)}}),r.a.createElement(Re,{type:"submit",variant:"contained",color:"primary"},"Login")))},_e=t(52),Pe=function(){function e(){Object(E.a)(this,e)}return Object(k.a)(e,null,[{key:"login",value:function(e,n){var t,a,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,o.a.awrap(fetch("https://raw.githubusercontent.com/abrorAbdullaev/RelayAuth/master/authv2.json"));case 3:return t=c.sent,c.next=6,o.a.awrap(t.json());case 6:return a=c.sent,r=a[Object(_e.sha256)(e)],c.abrupt("return",!(!r||r!==Object(_e.sha256)(n)));case 11:return c.prev=11,c.t0=c.catch(0),c.abrupt("return",!1);case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}]),e}();function Ue(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return Ue=function(){return e},e}var ze=x.a.div(Ue()),Ke=function(e){var n=e.onDispatch;return r.a.createElement(ze,null,r.a.createElement(Ee,null),r.a.createElement(Ae,{onSubmit:function(e){var t,a;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.login,a=e.password,r.next=3,o.a.awrap(Pe.login(t,a));case 3:r.sent&&n({type:h,state:!0});case 5:case"end":return r.stop()}}))}}))};function Fe(){var e=Object(w.a)(["\n  padding: 50px 100px 0;\n  width: 100%;\n"]);return Fe=function(){return e},e}var Ne=Object(x.a)(_.a)(Fe()),Be=function(){var e=Object(a.useContext)(f),n=e.trucks,t=e.isLoggedIn,c=e.dispatch;return t?r.a.createElement(Ne,{display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(pe,null),r.a.createElement(ve,{trucks:n,onDispatch:c})):r.a.createElement(Ke,{onDispatch:c})},Je=new y,Ve=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)({trucks:{},isLoggedIn:!1}),i=Object(s.a)(u,2),f=i[0],m=i[1];return Object(a.useEffect)((function(){(function(){var e,n,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(Je.getDataObject(["trucks","isLoggedIn"]));case 2:e=a.sent,n=e.trucks,t=e.isLoggedIn,m(Object(l.a)({},f,{trucks:n||{},isLoggedIn:t})),c(!0);case 7:case"end":return a.stop()}}))})().then()}),[]),t?r.a.createElement(O,{storage:Je,data:f},r.a.createElement(Be,null)):r.a.createElement("span",null,"Loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[82,1,2]]]);
//# sourceMappingURL=main.056cb8b5.chunk.js.map