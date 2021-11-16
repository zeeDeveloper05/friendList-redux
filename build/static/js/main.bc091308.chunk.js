(this["webpackJsonpfriend-list-redux"]=this["webpackJsonpfriend-list-redux"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),s=(n(26),n(27),n(3)),o=n(12),l=n(13),u=n(18),j=n(20),f=n(1),d=function(e){var t=Object(a.useState)(4),n=Object(s.a)(t,2),i=n[0],r=(n[1],Object(a.useState)(1)),o=Object(s.a)(r,2),l=o[0],u=o[1],j=Object(a.useState)(0),d=Object(s.a)(j,2),b=d[0],m=d[1],O=Object(a.useState)([]),v=Object(s.a)(O,2);v[0],v[1];Object(a.useEffect)((function(){m(Math.ceil(e.data.length/4))}),[e.data]);for(var h=[],x=1;x<=b;x++)h.push(x);return e.paginationData({pageCount:i,pageSelect:l,totalPage:b,pageArr:h}),Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("nav",{className:"d-flex justify-content-center mt-3",children:Object(f.jsxs)("ul",{className:"pagination",children:[Object(f.jsx)("li",{className:"page-item "+(1===l?"disabled":""),children:Object(f.jsx)("a",{style:{cursor:"pointer"},className:"page-link",onClick:function(){u(l-1)},children:"Previous"})}),h.map((function(e,t){return Object(f.jsx)("li",{className:"page-item "+(t+1===l?"active":""),children:Object(f.jsx)("a",{className:"page-link",style:{cursor:"pointer"},onClick:function(){u(e)},children:e})},t)})),Object(f.jsx)("li",{className:"page-item "+(b===l?"disabled":""),children:Object(f.jsx)("a",{style:{cursor:"pointer"},className:"page-link",onClick:function(){b>l&&u(l+1)},children:"Next"})})]})})})},b=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(4),b=Object(s.a)(o,2),m=b[0],O=b[1],v=Object(a.useState)(1),h=Object(s.a)(v,2),x=h[0],g=h[1],p=Object(a.useState)(!1),L=Object(s.a)(p,2),N=L[0],y=L[1];Object(a.useEffect)((function(){r(e.data)}),[e.data]);for(var S=m*(x-1),F=m*x,C=[],k=1;k<=Math.ceil(e.data.length/4);k++)C.push(k);return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsxs)("div",{className:"text-right mb-3 d-flex justify-content-between align-items-center",children:[Object(f.jsxs)("p",{className:"m-0",children:["See The List Of ",N?"Least Favorite":"Favorites"," Friends"]}),Object(f.jsx)("button",{onClick:function(){y(!N),e.favBtn(N)},className:"btn btn-outline-success",children:N?"Least Favorite":"Favorites"})]}),Object(f.jsx)("div",{className:"list-group",style:{minHeight:"252px"},children:i.length?i.slice(S,F).map((function(t,n){return Object(f.jsxs)("div",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(f.jsx)("div",{className:"name-block",children:t.name}),Object(f.jsxs)("div",{className:"action-block",children:[Object(f.jsx)("button",{onClick:function(){return n=t,void e.addToFav(n);var n},className:"btn mr-2 btn-outline-success",children:t.fav?Object(f.jsx)(l.a,{icon:u.a}):Object(f.jsx)(l.a,{icon:j.a})}),Object(f.jsx)("button",{onClick:function(){return n=t.name,void e.deleteBtn(n);var n},className:"btn btn-outline-danger",children:Object(f.jsx)(l.a,{icon:u.b})})]})]},n)})):Object(f.jsx)("div",{className:"alert alert-danger",children:"No Data Found"})}),C.length>1?Object(f.jsx)(d,{data:i,paginationData:function(e){return function(e){O(e.pageCount),g(e.pageSelect)}(e)}}):""]})},m=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("input",{onKeyDown:function(t){return function(t){13===t.keyCode&&e.onEnetr({name:i,fav:0})}(t)},value:i,onChange:function(t){return function(t){r(t.target.value),e.searchVal(t.target.value)}(t)},type:"text",className:"form-control",placeholder:"Search Friend..."})})},O=n(5),v=Object(O.b)("DELETE"),h=Object(O.b)("SORT"),x=Object(O.b)("ADD"),g=Object(O.b)("FAVORITE"),p=Object(o.b)((function(e){return{mainData:e.mainReducer}}),(function(e){return{onDelete:function(t){e(v(t))},onSort:function(t){e(h(t))},onAdd:function(t){e(x(t))},onFav:function(t){e(g(t))}}}))((function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),u=l[0],j=l[1];Object(a.useEffect)((function(){r(e.mainData.friendList),j(e.mainData.friendList)}),[e.mainData.friendList]);return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)("h2",{className:"text-center",children:"Friend List"}),Object(f.jsx)("hr",{}),Object(f.jsx)(m,{onEnetr:function(t){e.onAdd(t)},searchVal:function(e){return function(e){var t=i;t=t.filter((function(t){return-1!==t.name.toLowerCase().search(e.toLowerCase())})),j(t)}(e)}}),Object(f.jsx)("hr",{}),Object(f.jsx)(b,{addToFav:function(t){e.onFav(t)},favBtn:function(t){return function(t){console.log(t),e.onSort(t)}(t)},deleteBtn:function(t){e.onDelete(t)},data:u})]})}));var L,N=function(){return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("div",{className:"main-conatiner border p-3 mx-auto mt-5",style:{maxWidth:"90%"},children:Object(f.jsx)(p,{})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},S=(n(36),n(4)),F=n(8),C=n(21),k=Object(O.c)({friendList:[{name:"Amit Patel",fav:1},{name:"Bijal Makwana",fav:0},{name:"Neha Pandey",fav:0},{name:"Ram Lodhi",fav:0},{name:"Javed Ali",fav:0},{name:"Rohit Kumar",fav:1},{name:"Jasmine Dsuza",fav:1},{name:"Rahul Kumar",fav:0},{name:"Javed Ali",fav:0},{name:"Rohit Kumar",fav:1},{name:"Palak Singh",fav:1},{name:"Sonum singh",fav:0},{name:"Govind Gawli",fav:0},{name:"Rohit Kumar",fav:1},{name:"Saif Ali Khan",fav:1}]},(L={},Object(F.a)(L,v.type,(function(e,t){e.friendList=e.friendList.filter((function(e,n){return e.name!==t.payload}))})),Object(F.a)(L,h.type,(function(e,t){console.log(t),e.friendList=e.friendList.sort((function(e,n){return t.payload?e.fav>n.fav?1:e.fav<n.fav?-1:0:e.fav>n.fav?-1:e.fav<n.fav?1:0}))})),Object(F.a)(L,x.type,(function(e,t){var n=!1;if(e.friendList.map((function(e){t.payload.name.toLowerCase()===e.name.toLowerCase()&&(alert("Name Already Present"),n=!0)})),!n){var a=Object(C.a)(e.friendList);a.unshift(t.payload),e.friendList=a}})),Object(F.a)(L,g.type,(function(e,t){console.log(t.payload),e.friendList.map((function(n,a){n.name===t.payload.name&&(console.log(a),e.friendList[a].fav=!e.friendList[a].fav)}))})),L)),D=Object(S.c)({mainReducer:k}),w=Object(O.a)({reducer:D});r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(o.a,{store:w,children:Object(f.jsx)(N,{})})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.bc091308.chunk.js.map