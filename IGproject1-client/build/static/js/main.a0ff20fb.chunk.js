(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(e,t,n){e.exports=n(462)},292:function(e,t,n){},462:function(e,t,n){"use strict";n.r(t);var a=n(76),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(0),l=n.n(o),c=n(37),s=n(66),m=n(474),i=(n(291),n(292),n(21)),u=n(104),d=n(242),p=n.n(d),b={user:null};if(localStorage.getItem("jwtToken")){var E=p()(localStorage.getItem("jwtToken"));1e3*E.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=E}var g=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function f(e,t){switch(t.type){case"LOGIN":return Object(u.a)({},e,{user:t.payload});case"LOGOUT":return Object(u.a)({},e,{user:null});default:return e}}function v(e){var t=Object(o.useReducer)(f,b),n=Object(i.a)(t,2),a=n[0],r=n[1];return l.a.createElement(g.Provider,Object.assign({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var h=n(243);var j=function(e){var t=e.component,n=Object(h.a)(e,["component"]),a=Object(o.useContext)(g).user;return l.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement(t,e)}}))},O=n(481);var y=function(){var e=Object(o.useContext)(g),t=e.user,n=e.logout,a=window.location.pathname,r="/"===a?"home":a.substr(1),s=Object(o.useState)(r),m=Object(i.a)(s,2),u=m[0],d=m[1],p=function(e,t){var n=t.name;return d(n)};return t?l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:t.username,active:!0,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"logout",onClick:n}))):l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:"home",active:"home"===u,onClick:p,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"login",active:"login"===u,onClick:p,as:c.b,to:"/login"}),l.a.createElement(O.a.Item,{name:"register",active:"register"===u,onClick:p,as:c.b,to:"/register"})))},C=n(32),w=n(482),I=n(484),k=n(479),P=n(274),S=n(480),$=n(90),x=n(137),N=n(105),A=n.n(N),D=n(33),L=n(34),R=n.n(L),T=n(478);var Q=function(e){var t=e.content,n=e.children;return l.a.createElement(T.a,{inverted:!0,content:t,trigger:n})};function U(){var e=Object(D.a)(["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId) {\n      id\n      likes {\n        id\n        username\n      }\n      likeCount\n    }\n  }\n"]);return U=function(){return e},e}var q=R()(U()),z=function(e){var t=e.user,n=e.post,a=n.id,r=n.likeCount,s=n.likes,m=Object(o.useState)(!1),u=Object(i.a)(m,2),d=u[0],p=u[1];Object(o.useEffect)(function(){t&&s.find(function(e){return e.username===t.username})?p(!0):p(!1)},[t,s]);var b=Object(C.a)(q,{variables:{postId:a}}),E=Object(i.a)(b,1)[0],g=t?d?l.a.createElement(S.a,{color:"teal"},l.a.createElement($.a,{name:"heart"})):l.a.createElement(S.a,{color:"teal",basic:!0},l.a.createElement($.a,{name:"heart"})):l.a.createElement(S.a,{as:c.b,to:"/login",color:"teal",basic:!0},l.a.createElement($.a,{name:"heart"}));return l.a.createElement(S.a,{as:"div",labelPosition:"right",onClick:E},l.a.createElement(Q,{content:d?"Unlike":"Like"},g),l.a.createElement(x.a,{basic:!0,color:"teal",pointing:"left"},r))},B=n(476);function G(){var e=Object(D.a)(["\n  {\n    getPosts {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]);return G=function(){return e},e}var M=R()(G());function H(){var e=Object(D.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n      commentCount\n    }\n  }\n"]);return H=function(){return e},e}function F(){var e=Object(D.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]);return F=function(){return e},e}var W=R()(F()),J=R()(H()),V=function(e){var t=e.postId,n=e.commentId,a=e.callback,r=Object(o.useState)(!1),c=Object(i.a)(r,2),s=c[0],m=c[1],u=n?J:W,d=Object(C.a)(u,{update:function(e){if(m(!1),!n){var r=e.readQuery({query:M});r.getPosts=r.getPosts.filter(function(e){return e.id!==t}),e.writeQuery({query:M,data:r})}a&&a()},variables:{postId:t,commentId:n}}),p=Object(i.a)(d,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q,{content:n?"Delete comment":"Delete post"},l.a.createElement(S.a,{as:"div",color:"red",floated:"right",onClick:function(){return m(!0)}},l.a.createElement($.a,{name:"trash",style:{margin:0}}))),l.a.createElement(B.a,{open:s,onCancel:function(){return m(!1)},onConfirm:p}))};var K=function(e){var t=e.post,n=t.body,a=t.createdAt,r=t.id,s=t.username,m=t.likeCount,i=t.commentCount,u=t.likes,d=Object(o.useContext)(g).user;return l.a.createElement(k.a,{fluid:!0},l.a.createElement(k.a.Content,null,l.a.createElement(P.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/jenny.jpg"}),l.a.createElement(k.a.Header,null,s),l.a.createElement(k.a.Meta,{as:c.b,to:"/posts/".concat(r)},A()(a).fromNow(!0)),l.a.createElement(k.a.Description,null,n)),l.a.createElement(k.a.Content,{extra:!0},l.a.createElement(z,{user:d,post:{id:r,likes:u,likeCount:m}}),l.a.createElement(Q,{content:"Comment on post"},l.a.createElement(S.a,{labelPosition:"right",as:c.b,to:"/posts/".concat(r)},l.a.createElement(S.a,{color:"blue",basic:!0},l.a.createElement($.a,{name:"comments"})),l.a.createElement(x.a,{basic:!0,color:"blue",pointing:"left"},i))),d&&d.username===s&&l.a.createElement(V,{postId:r})))},X=n(276),Y=n(475),Z=n(41),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.useState)(t),a=Object(i.a)(n,2),r=a[0],l=a[1];return{onChange:function(e){l(Object(u.a)({},r,Object(Z.a)({},e.target.name,e.target.value)))},onSubmit:function(t){t.preventDefault(),e()},values:r}};function ee(){var e=Object(D.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]);return ee=function(){return e},e}var te=R()(ee()),ne=function(){var e=_(function(){c()},{body:""}),t=e.values,n=e.onChange,a=e.onSubmit,r=Object(C.a)(te,{variables:t,update:function(e,n){var a=e.readQuery({query:M});a.getPosts=[n.data.createPost].concat(Object(X.a)(a.getPosts)),e.writeQuery({query:M,data:a}),t.body=""}}),o=Object(i.a)(r,2),c=o[0],s=o[1].error;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{onSubmit:a},l.a.createElement("h2",null,"Create a post:"),l.a.createElement(Y.a.Field,null,l.a.createElement(Y.a.Input,{placeholder:"Hi World!",name:"body",onChange:n,value:t.body,error:!!s}),l.a.createElement(S.a,{type:"submit",color:"teal"},"Submit"))),s&&l.a.createElement("div",{className:"ui error message",style:{marginBottom:20}},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,s.graphQLErrors[0].message))))};var ae=function(){var e=Object(o.useContext)(g).user,t=Object(C.b)(M),n=t.loading,a=t.data,r=(a=void 0===a?{}:a).getPosts;return l.a.createElement(w.a,{columns:3},l.a.createElement(w.a.Row,{className:"page-title"},l.a.createElement("h1",null,"Recent Posts")),l.a.createElement(w.a.Row,null,e&&l.a.createElement(w.a.Column,null,l.a.createElement(ne,null)),n?l.a.createElement("h1",null,"Loading posts.."):l.a.createElement(I.a.Group,null,r&&r.map(function(e){return l.a.createElement(w.a.Column,{key:e.id,style:{marginBottom:20}},l.a.createElement(K,{post:e}))}))))};function re(){var e=Object(D.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]);return re=function(){return e},e}var oe=R()(re()),le=function(e){var t=Object(o.useContext)(g),n=Object(o.useState)({}),a=Object(i.a)(n,2),r=a[0],c=a[1],s=_(function(){E()},{username:"",password:""}),m=s.onChange,u=s.onSubmit,d=s.values,p=Object(C.a)(oe,{update:function(n,a){var r=a.data.login;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),b=Object(i.a)(p,2),E=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(Y.a,{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Login"),l.a.createElement(Y.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:d.username,error:!!r.username,onChange:m}),l.a.createElement(Y.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:d.password,error:!!r.password,onChange:m}),l.a.createElement(S.a,{type:"submit",primary:!0},"Login")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map(function(e){return l.a.createElement("li",{key:e},e)}))))};function ce(){var e=Object(D.a)(["\n  mutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        username: $username\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]);return ce=function(){return e},e}var se=R()(ce()),me=function(e){var t=Object(o.useContext)(g),n=Object(o.useState)({}),a=Object(i.a)(n,2),r=a[0],c=a[1],s=_(function(){E()},{username:"",email:"",password:"",confirmPassword:""}),m=s.onChange,u=s.onSubmit,d=s.values,p=Object(C.a)(se,{update:function(n,a){var r=a.data.register;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),b=Object(i.a)(p,2),E=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(Y.a,{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Register"),l.a.createElement(Y.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:d.username,error:!!r.username,onChange:m}),l.a.createElement(Y.a.Input,{label:"Email",placeholder:"Email..",name:"email",type:"email",value:d.email,error:!!r.email,onChange:m}),l.a.createElement(Y.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:d.password,error:!!r.password,onChange:m}),l.a.createElement(Y.a.Input,{label:"Confirm Password",placeholder:"Confirm Password..",name:"confirmPassword",type:"password",value:d.confirmPassword,error:!!r.confirmPassword,onChange:m}),l.a.createElement(S.a,{type:"submit",primary:!0},"Register")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map(function(e){return l.a.createElement("li",{key:e},e)}))))};function ie(){var e=Object(D.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]);return ie=function(){return e},e}function ue(){var e=Object(D.a)(["\n  mutation($postId: String!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        createdAt\n        username\n      }\n      commentCount\n    }\n  }\n"]);return ue=function(){return e},e}var de=R()(ue()),pe=R()(ie()),be=function(e){var t,n=e.match.params.postId,a=Object(o.useContext)(g).user,r=Object(o.useRef)(null),c=Object(o.useState)(""),s=Object(i.a)(c,2),m=s[0],u=s[1],d=Object(C.b)(pe,{variables:{postId:n}}).data.getPost,p=Object(C.a)(de,{update:function(){u(""),r.current.blur()},variables:{postId:n,body:m}}),b=Object(i.a)(p,1)[0];if(d){var E=d.id,f=d.body,v=d.createdAt,h=d.username,j=d.comments,O=d.likes,y=d.likeCount,I=d.commentCount;t=l.a.createElement(w.a,null,l.a.createElement(w.a.Row,null,l.a.createElement(w.a.Column,{width:2},l.a.createElement(P.a,{src:"https://react.semantic-ui.com/images/avatar/large/molly.png",size:"small",float:"right"})),l.a.createElement(w.a.Column,{width:10},l.a.createElement(k.a,{fluid:!0},l.a.createElement(k.a.Content,null,l.a.createElement(k.a.Header,null,h),l.a.createElement(k.a.Meta,null,A()(v).fromNow()),l.a.createElement(k.a.Description,null,f)),l.a.createElement("hr",null),l.a.createElement(k.a.Content,{extra:!0},l.a.createElement(z,{user:a,post:{id:E,likeCount:y,likes:O}}),l.a.createElement(Q,{content:"Comment on post"},l.a.createElement(S.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment on post")}},l.a.createElement(S.a,{basic:!0,color:"blue"},l.a.createElement($.a,{name:"comments"})),l.a.createElement(x.a,{basic:!0,color:"blue",pointing:"left"},I))),a&&a.username===h&&l.a.createElement(V,{postId:E,callback:function(){e.history.push("/")}}))),a&&l.a.createElement(k.a,{fluid:!0},l.a.createElement(k.a.Content,null,l.a.createElement("p",null,"Post a comment"),l.a.createElement(Y.a,null,l.a.createElement("div",{className:"ui action input fluid"},l.a.createElement("input",{type:"text",placeholder:"Comment..",name:"comment",value:m,onChange:function(e){return u(e.target.value)},ref:r}),l.a.createElement("button",{type:"submit",className:"ui button teal",disabled:""===m.trim(),onClick:b},"Submit"))))),j.map(function(e){return l.a.createElement(k.a,{fluid:!0,key:e.id},l.a.createElement(k.a.Content,null,a&&a.username===e.username&&l.a.createElement(V,{postId:E,commentId:e.id}),l.a.createElement(k.a.Header,null,e.username),l.a.createElement(k.a.Meta,null,A()(e.createdAt).fromNow()),l.a.createElement(k.a.Description,null,e.body)))}))))}else t=l.a.createElement("p",null,"Loading post..");return t};var Ee=function(){return l.a.createElement(v,null,l.a.createElement(c.a,null,l.a.createElement(m.a,null,l.a.createElement(y,null),l.a.createElement(s.b,{exact:!0,path:"/",component:ae}),l.a.createElement(j,{exact:!0,path:"/login",component:le}),l.a.createElement(j,{exact:!0,path:"/register",component:me}),l.a.createElement(s.b,{exact:!0,path:"/posts/:postId",component:be}))))},ge=n(68),fe=n(275),ve=n(277),he=n(28),je=n(273),Oe=Object(ve.a)({uri:"http://localhost:5000"}),ye=Object(je.a)(function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}}),Ce=new ge.c({link:ye.concat(Oe),cache:new fe.a}),we=l.a.createElement(he.a,{client:Ce},l.a.createElement(Ee,null));r.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[286,1,2]]]);
//# sourceMappingURL=main.a0ff20fb.chunk.js.map