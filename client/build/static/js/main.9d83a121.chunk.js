(this["webpackJsonpadmin-client"]=this["webpackJsonpadmin-client"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(12),c=t.n(r),m=(t(69),t(5)),s=t(4),o=t(6),i=t(7),u=t(62),E=t(28),d=t(10),p=(t(70),t(71),t(72),t(74),t(75),t(76),t(25)),g=t(24),f=t(37),h=t.n(f),b=t(38),S=t.n(b),v=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).changeEye=function(e){e.preventDefault(),l.state.secured?l.setState({secured:!1}):l.setState({secured:!0})},l.enterPressed=function(e){"Enter"===e.key&&l.props.login(e)},l.state={secured:!0},l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"password-container"},n.a.createElement("label",{htmlFor:"password"},n.a.createElement("i",{className:"fas fa-key"})),n.a.createElement("input",{type:this.state.secured?"password":"text",placeholder:"Password",id:"passwordInput",name:"password",className:"fields",onChange:this.props.handleChange,onKeyPress:this.enterPressed,required:!0}),n.a.createElement("button",{onClick:this.changeEye},n.a.createElement("i",{id:"eyeContainer",className:this.state.secured?"fas fa-eye-slash":"far fa-eye"}))))}}]),t}(l.Component),N=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).handleInputChange=function(e){l.setState(Object(g.a)({},e.target.name,e.target.value))},l.login=function(e){e.preventDefault();var a=l.state,t=a.email,n=a.password;S.a.post("http://localhost:8080/api/admin/authentication/auth-admin",{email:t,password:n}).then((function(e){l.props.login(e.data.token,e.data.userData)})).catch((function(e){p.b.error(e.response.data.msg)}))},l.state={email:"",password:""},l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"mx-auto"},n.a.createElement("img",{src:h.a,alt:"Nagarjuna College of IT Logo"}),n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"email"},n.a.createElement("i",{className:"far fa-user-circle"})),n.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,placeholder:"Email",className:"fields",required:!0}),n.a.createElement("br",null),n.a.createElement(v,{login:this.login,handleChange:this.handleInputChange}),n.a.createElement(d.b,{to:"",className:" forgot"},"Forgot Password?"),n.a.createElement("button",{type:"submit",className:"submit",onClick:this.login},"Login")))}}]),t}(l.Component),w=(t(98),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).login=function(a,t){e.props.login(a,t)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.wrapper=n.a.createRef()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",ref:this.wrapper},n.a.createElement(p.a,null),n.a.createElement("header",null,n.a.createElement(d.b,{to:"/",className:"backPage"},n.a.createElement("i",{className:"fas fa-arrow-left"})," Back to page")),n.a.createElement(N,{login:this.login}),n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12"},"\xa9 Nagarjuna College of IT. All Rights Reserved"),n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 text-xl-right text-lg-right text-md-right"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.b,{to:""},"About")),n.a.createElement("li",null,n.a.createElement(d.b,{to:""},"Contact")))))))}}]),t}(l.Component)),y=(t(99),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).logout=function(){localStorage.clear(),window.location.reload()},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"container"},"Welcome to home!",n.a.createElement("button",{onClick:function(){e.logout()}},"logout"),n.a.createElement(d.b,{to:"/admin/user-list"},"UserList")))}}]),t}(l.Component)),C=t(8),j=t.n(C),O=(t(100),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"statusCards container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex"},n.a.createElement("div",{className:"info"},n.a.createElement("h1",null,"999"),n.a.createElement("span",{className:"cardTitle"},"Students")),n.a.createElement("div",{className:"icon align-self-center"},n.a.createElement("i",{class:"fas fa-user-graduate"}))),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex"},n.a.createElement("div",{className:"info"},n.a.createElement("h1",null,"88"),n.a.createElement("span",{className:"cardTitle"},"Teachers")),n.a.createElement("div",{className:"icon align-self-center"},n.a.createElement("i",{class:"fas fa-chalkboard-teacher"}))),n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex"},n.a.createElement("div",{className:"info"},n.a.createElement("h1",null,"999"),n.a.createElement("span",{className:"cardTitle"},"Admins")),n.a.createElement("div",{className:"icon align-self-center"},n.a.createElement("i",{class:"fas fa-user-secret"}))))))}}]),t}(l.Component)),x=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{className:"filterName"},n.a.createElement("input",{className:"searchInput",type:"text",name:"filterName",placeholder:"Search Name"}),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Search",className:"submit"})))}}]),t}(l.Component),I=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Select User"),n.a.createElement("option",{value:"volvo"},"Students "),n.a.createElement("option",{value:"saab"},"Teacher"),n.a.createElement("option",{value:"opel"},"Admins")),n.a.createElement("hr",null),n.a.createElement("ul",{className:"sortBy"},n.a.createElement("li",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Program* "),n.a.createElement("option",{value:"saab"},"BSc.CSIT"),n.a.createElement("option",{value:"opel"},"BIT"))),n.a.createElement("li",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Semester* "),n.a.createElement("option",{value:"saab"},"BSc.CSIT"),n.a.createElement("option",{value:"opel"},"BIT"))),n.a.createElement("li",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Group "),n.a.createElement("option",{value:"saab"},"BSc.CSIT"),n.a.createElement("option",{value:"opel"},"BIT"))),n.a.createElement("li",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Reported "),n.a.createElement("option",{value:"saab"},"BSc.CSIT"),n.a.createElement("option",{value:"opel"},"BIT"))),n.a.createElement("li",null,n.a.createElement("select",{className:"userType"},n.a.createElement("option",{selected:!0,disabled:!0},"Blacklisted"),n.a.createElement("option",{value:"saab"},"BSc.CSIT"),n.a.createElement("option",{value:"opel"},"BIT")))))}}]),t}(l.Component),k=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"userList"},n.a.createElement(O,null),n.a.createElement("div",{className:"listOfUser container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-4 col-sm-12"},n.a.createElement(x,null),n.a.createElement("div",{className:"filterGroup"},n.a.createElement(I,null))),n.a.createElement("div",{className:"col-xl-9 col-lg-8 col-md-8 col-sm-12 userCardLists"},n.a.createElement("ul",null,n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))),n.a.createElement("li",{className:"userCard"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"2"},n.a.createElement("img",{src:j.a,alt:"profileImage",width:"65px"})),n.a.createElement("td",null,"Sangya Sherpa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Send Message")))))))))}}]),t}(l.Component),M=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).handleInputChange=function(e){l.setState(Object(g.a)({},e.target.name,e.target.value))},l.register=function(e){e.preventDefault();var a=l.state,t=a.email,n=a.password,r=a.full_name,c=a.contact_number;S.a.post("http://localhost:8080/api/admin/accounts/new-admin",{email:t,password:n,full_name:r,contact_number:c}).then((function(e){p.b.success(e.data.msg)})).catch((function(e){p.b.error(e.response.data.msg)}))},l.state={full_name:"",email:"",password:"",contact_number:""},l}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"mx-auto"},n.a.createElement("img",{src:h.a,alt:"Nagarjuna College of IT Logo"}),n.a.createElement("form",null,n.a.createElement("input",{type:"text",name:"full_name",onChange:this.handleInputChange,placeholder:"Full Name",className:"fields",required:!0}),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,placeholder:"Email",className:"fields",required:!0}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange,placeholder:"Password",className:"fields",required:!0}),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"contact_number",onChange:this.handleInputChange,placeholder:"Contact Number",className:"fields",required:!0}),n.a.createElement("button",{type:"submit",className:"submit",onClick:this.register},"Register")))}}]),t}(l.Component),T=(t(101),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(p.a,null),n.a.createElement("header",null,n.a.createElement(d.b,{to:"/admin",className:"backPage"},n.a.createElement("i",{className:"fas fa-arrow-left"})," Back to page")),n.a.createElement(M,null),n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12"},"\xa9 Nagarjuna College of IT. All Rights Reserved"),n.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 text-xl-right text-lg-right text-md-right"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.b,{to:""},"About")),n.a.createElement("li",null,n.a.createElement(d.b,{to:""},"Contact")))))))}}]),t}(l.Component)),B=(t(102),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"topBar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.b,{className:"brand",to:"/admin"},"Nagarjuna College of IT")),n.a.createElement("li",{className:"text-right"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{class:"far fa-user"})," ",this.props.userName),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},n.a.createElement(d.b,{className:"dropdown-item",to:""},"Profile"),n.a.createElement(d.b,{className:"dropdown-item",to:""},"My account"),n.a.createElement(d.b,{className:"dropdown-item",onClick:function(){localStorage.clear(),window.location.reload()}},"Logout")))))))))}}]),t}(l.Component)),D=t(59),A=t(61),P=t(9),_=t(131),L=t(134),R=t(135),q=t(60),F=t.n(q),J=(t(104),Object(_.a)({list:{width:250},fullList:{width:"auto"}}));function U(e){var a=J(),t=n.a.useState({left:!1}),l=Object(A.a)(t,2),r=l[0],c=l[1],m=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(Object(D.a)({},r,Object(g.a)({},e,a)))}};return n.a.createElement("div",{className:"sidebar"},["left"].map((function(e){return n.a.createElement(n.a.Fragment,{key:e},n.a.createElement(R.a,{onClick:m(e,!0)},n.a.createElement("i",{className:"fas fa-chevron-left"})),n.a.createElement(L.a,{className:"drawer",anchor:e,open:r[e],onClose:m(e,!1)},function(e){return n.a.createElement("div",{className:Object(P.a)(a.list,Object(g.a)({},a.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:m(e,!1),onKeyDown:m(e,!1)},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"./index.html"},n.a.createElement("i",{class:"fas fa-home"})," Home")),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-newspaper"})," Attendance"),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-dollar-sign"})," Fees Details"),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-list-ul"})," Assignments"),n.a.createElement("li",null,n.a.createElement("i",{class:"far fa-question-circle"})," Examination"),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-scroll"})," Results"),n.a.createElement("li",null,n.a.createElement("a",{href:"./messages.html"},n.a.createElement("i",{class:"far fa-envelope"})," Messages")),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-gift"})," Opportunities"),n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-code"})," Practicals"),n.a.createElement("li",null,n.a.createElement("i",{class:"far fa-check-circle"})," Approved Application"),n.a.createElement("li",null,n.a.createElement("i",{class:"far fa-user"})," Faculty")))}(e)))})),n.a.createElement("div",{className:"container pageTitle"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("i",{class:"fas fa-home"})," Hey, ",e.userName),n.a.createElement("li",{className:"text-right"},"Today: ",n.a.createElement("span",{className:"date"},F()().format("MMM Do YY"))))))))}var W=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).state={userData:{}},l}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("userData");this.setState({userData:JSON.parse(e)})}}]),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(B,{userName:this.state.userData.full_name}),n.a.createElement(U,{userName:this.state.userData.full_name}),n.a.createElement(E.d,null,n.a.createElement(E.b,{exact:!0,path:"/admin",component:y}),n.a.createElement(E.b,{path:"/admin/user-list",component:k}),n.a.createElement(E.b,{path:"/admin/register-admin",component:T})))}}]),t}(l.Component),G=(t(105),function(){var e=localStorage.getItem("access-token");return!!e});function H(e){var a=e.component,t=e.path,l=Object(u.a)(e,["component","path"]);return n.a.createElement(E.b,{path:t,render:function(e){return G()?n.a.createElement(a,Object.assign({},e,l)):n.a.createElement(E.a,{to:"/"})}})}var K=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).login=function(e,a){localStorage.setItem("access-token",e),localStorage.setItem("userData",JSON.stringify(a)),l.setState({isAuthenticated:!0})},l.state={isAuthenticated:G(),userData:{}},l}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(E.d,null,n.a.createElement(H,{path:"/admin",component:W}),n.a.createElement(E.b,{exact:!0,path:"/",render:function(a){return e.state.isAuthenticated?n.a.createElement(E.a,{to:"/admin"}):n.a.createElement(w,{login:e.login})}})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,a,t){e.exports=t.p+"static/media/logo.2d0f120e.png"},64:function(e,a,t){e.exports=t(106)},69:function(e,a,t){},8:function(e,a,t){e.exports=t.p+"static/media/userIcon.8082f5dc.png"},98:function(e,a,t){},99:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.9d83a121.chunk.js.map