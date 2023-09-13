"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{4814:function(n,e,r){r.d(e,{$:function(){return s}});var t,i,o=r(168),a=r(7686),d=a.Z.section(t||(t=(0,o.Z)(["\n  margin: auto;\n  padding: 26px 0;\n\n  background-color: #f9f9f9;\n"]))),c=a.Z.h2(i||(i=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  text-align: center;\n  margin: 0;\n"]))),l=r(184),s=function(n){var e=n.title,r=n.children;return(0,l.jsxs)(d,{children:[e&&(0,l.jsx)(c,{children:e}),r]})}},759:function(n,e,r){r.r(e),r.d(e,{default:function(){return mn}});var t,i,o,a,d,c,l,s,p,u,x,f,b,g,h,m,Z,v,w,j,y,k,z,C,N,A=r(9439),E=r(2791),L=r(9434),I=r(8115),$=function(n){return n.contacts.items},M=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},q=function(n){return n.filters},D=r(4814),S=r(168),B=r(7686),F=B.Z.form(t||(t=(0,S.Z)(["\n  width: 350px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 30px;\n  border: 2px solid black;\n  margin-bottom: 25px;\n  background-color: #ddd;\n  flex-wrap: wrap;\n  align-content: center;\n  align-item: center;\n"]))),K=B.Z.label(i||(i=(0,S.Z)(["\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n"]))),T=B.Z.input(o||(o=(0,S.Z)(["\n  display: block;\n  margin-top: 10px;\n  border: 2px solid;\n  border-radius: 4px;\n  height: 20px;\n"]))),G=B.Z.button(a||(a=(0,S.Z)(["\n  width: 100px;\n  border: 2px solid grey;\n  border-radius: 2px;\n  /* background-color: inherit; */\n  background-color: #f1d50b;\n"]))),J=r(184),P=function(){var n=(0,L.I0)(),e=(0,L.v9)($);return(0,J.jsxs)(F,{onSubmit:function(r){r.preventDefault();var t=r.target,i=r.target.elements.name.value,o=r.target.elements.number.value;if(e.find((function(n){return n.name.toLowerCase()===i})))return alert("".concat(i," is already in contacts")),!1;n((0,I.uK)({name:i,number:o})),t.reset()},children:[(0,J.jsxs)(K,{children:["Name",(0,J.jsx)(T,{type:"text",name:"name",value:e.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,J.jsxs)(K,{children:["Number",(0,J.jsx)(T,{type:"tel",name:"number",value:e.number,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,J.jsx)(G,{type:"submit",children:"Add contact"})]})},R=r(3797),X=B.Z.label(d||(d=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),Y=B.Z.input(c||(c=(0,S.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),H=function(){var n=(0,L.I0)(),e=(0,L.v9)(q);return(0,J.jsx)(X,{children:(0,J.jsx)(Y,{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,R.p)(r))}})})},O=r(3433),Q=r(9135),U=(0,B.Z)(Q.Xws)(l||(l=(0,S.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),V=(0,B.Z)(Q.DNl)(s||(s=(0,S.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),W=(0,B.Z)(Q.dIY)(p||(p=(0,S.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),nn=B.Z.li(u||(u=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),en=B.Z.p(x||(x=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n  font-weight: 500;\n"]))),rn=B.Z.p(f||(f=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n"]))),tn=B.Z.button(b||(b=(0,S.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #4eced0;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),on=r(1686),an=function(n){var e=n.id,r=n.name,t=n.number,i=(0,L.I0)();return(0,J.jsxs)(nn,{children:[(0,J.jsxs)(en,{children:[(0,J.jsx)(U,{}),r]}),(0,J.jsxs)(rn,{children:[(0,J.jsx)(V,{}),t]}),(0,J.jsxs)(tn,{onClick:function(){return n=e,void i((0,I.GK)(n)).unwrap().then((function(n){on.Notify.success("".concat(n.name," successfully deleted from contacts"))})).catch((function(){on.Notify.failure("Sorry, something's wrong")}));var n},children:[(0,J.jsx)(W,{}),"Delete"]})]},e)},dn=B.Z.ul(g||(g=(0,S.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\n  grid-gap: 26px;\n"]))),cn=function(){var n=(0,L.v9)($),e=(0,L.v9)(q),r=(0,O.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,J.jsx)(dn,{children:r.map((function(n){var e=n.name,r=n.number,t=n.id;return(0,J.jsx)(an,{id:t,name:e,number:r},t)}))})},ln=(0,B.Z)(Q.Bj$)(h||(h=(0,S.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),sn=B.Z.div(m||(m=(0,S.Z)(["\n  padding: 38px 48px;\n  height: 100vh;\n\n  border-radius: 32px 32px 0 0;\n  background-color: #f9f9f9;\n"]))),pn=B.Z.div(Z||(Z=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n"]))),un=B.Z.h2(v||(v=(0,S.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  color: #120bf4;\n\n  margin: 0;\n"]))),xn=B.Z.div(w||(w=(0,S.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),fn=(B.Z.form(j||(j=(0,S.Z)([""]))),B.Z.label(y||(y=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),B.Z.input(k||(k=(0,S.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),B.Z.button(z||(z=(0,S.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  padding: 1.063em 1.5em;\n  margin-left: 28px;\n\n  background-color: #64d8f5;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n    > svg {\n      fill: #000000;\n    }\n  }\n"])))),bn=B.Z.div(C||(C=(0,S.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);\n  z-index: 1200;\n"]))),gn=B.Z.div(N||(N=(0,S.Z)(["\n  border-radius: 25px;\n  overflow: hidden;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #f9f9f9;\n"]))),hn=function(n){var e=n.children,r=n.onCloseModal;(0,E.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,J.jsx)(bn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,J.jsx)(gn,{children:e})})},mn=function(){var n=(0,L.I0)(),e=(0,L.v9)(M),r=(0,L.v9)(_),t=(0,E.useState)(!1),i=(0,A.Z)(t,2),o=i[0],a=i[1];(0,E.useEffect)((function(){n((0,I.yF)())}),[n]);var d=function(){a((function(n){return!n}))};return(0,J.jsxs)(sn,{children:[(0,J.jsxs)(D.$,{children:[(0,J.jsxs)(pn,{children:[(0,J.jsx)(un,{children:"Contacts"}),(0,J.jsxs)(xn,{children:[(0,J.jsx)(H,{}),(0,J.jsxs)(fn,{type:"button",onClick:d,children:[(0,J.jsx)(ln,{}),"New Contact"]})]})]}),e&&!r&&(0,J.jsx)("b",{children:"Request in progress"}),(0,J.jsx)(cn,{})]}),o&&(0,J.jsx)(hn,{children:(0,J.jsx)(D.$,{title:"Add New Contact",children:(0,J.jsx)(P,{onCloseModal:d})}),onCloseModal:d})]})}}}]);
//# sourceMappingURL=759.47eae921.chunk.js.map