(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),i=n(8),a=n.n(i),r=(n(15),n(16),n(17),n(1)),s=function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{className:"header-text",children:"What are the targets today "})})},u=n(7),d=n(3),l=(n(19),n(10)),j=n(9),b=(n(20),function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),o=n[0],i=n[1],a=Object(c.useRef)(null);Object(c.useEffect)((function(){a.current.focus()}));var s=function(t){i(t.target.value)};return Object(r.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:o}),i("")},children:t.edit?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",placeholder:"Update Today's Target",name:"text",value:o,className:"todo-input edit",onChange:s,ref:a}),Object(r.jsx)("button",{className:"todo-button edit",children:"Update Target"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter Today's Target",name:"text",value:o,className:"todo-input",onChange:s,ref:a}),Object(r.jsx)("button",{className:"todo-button",children:"Add Target"})]})})}),f=function(t){var e=t.todos,n=t.completeTodo,o=t.removeTodo,i=t.updateTodo,a=Object(c.useState)({id:null,value:""}),s=Object(d.a)(a,2),u=s[0],f=s[1];return u.id?Object(r.jsx)(b,{edit:u,onSubmit:function(t){i(u.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(r.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(r.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(r.jsxs)("div",{className:"icons",children:[Object(r.jsx)(j.a,{onClick:function(){return o(t.id)},className:"delete-icon"}),Object(r.jsx)(l.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))},m=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(r.jsxs)("div",{className:"todo-container",children:[Object(r.jsx)(b,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(n));o(e)}}}),Object(r.jsx)(f,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var x=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(s,{}),Object(r.jsx)(m,{})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),p()}],[[21,1,2]]]);
//# sourceMappingURL=main.0d590e80.chunk.js.map