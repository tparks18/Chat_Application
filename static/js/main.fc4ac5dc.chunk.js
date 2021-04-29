(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(12),n=a.n(c),r=a(13),l=a(8),i=a(9),o=a(96),u=a(97),j=a(1),m=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=e.chatId,m=e.creds,d=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.o)(m,r,{text:t}),n("")};return Object(j.jsxs)("form",{className:"message-form",onSubmit:d,children:[Object(j.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(l.l)(e,r)},onSubmit:d}),Object(j.jsx)("label",{htmlFor:"upload-button",children:Object(j.jsx)("span",{className:"image-button",children:Object(j.jsx)(o.a,{className:"picture-icon"})})}),Object(j.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.o)(m,r,{files:e.target.files,text:""})}}),Object(j.jsx)("button",{type:"submit",className:"send-button",children:Object(j.jsx)(u.a,{className:"send-icon"})})]})},d=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(j.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(j.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},b=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(j.jsxs)("div",{className:"message-row",children:[n&&Object(j.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(j.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(j.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC"},children:c.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a];return n?Object(j.jsxs)("div",{className:"chat-feed",children:[Object(j.jsxs)("div",{className:"chat-title-container",children:[Object(j.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(j.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0==a?null:e[a-1],l=s==n.sender.userName;return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)("div",{className:"message-block",children:l?Object(j.jsx)(d,{message:n}):Object(j.jsx)(b,{message:n,lastMessage:c[r]})}),Object(j.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:l})]},"msg_".concat(a))}))}(),Object(j.jsx)("div",{style:{height:"100px"}}),Object(j.jsx)("div",{className:"message-form-container",children:Object(j.jsx)(m,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."},g=a(24),p=a.n(g),O=a(40),x=a(4),f=a.n(x),v=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),m=Object(i.a)(u,2),d=m[0],b=m[1],h=function(){var e=Object(O.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"b6a7514f-00b5-4fff-9f31-15a4da0e89fb","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Oops, wrong password or username.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{className:"title",children:"Chat Application"}),Object(j.jsxs)("form",{onSubmit:h,children:[Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(j.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(j.jsx)("div",{align:"center",children:Object(j.jsx)("button",{type:"submit",className:"button",children:Object(j.jsx)("span",{children:"Start Chatting"})})})]}),Object(j.jsx)("h1",{children:d})]})})},N=(a(93),function(){return localStorage.getItem("username")?Object(j.jsx)(l.d,{height:"100vh",projectID:"b6a7514f-00b5-4fff-9f31-15a4da0e89fb",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(j.jsx)(h,Object(r.a)({},e))}}):Object(j.jsx)(v,{})});n.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.fc4ac5dc.chunk.js.map