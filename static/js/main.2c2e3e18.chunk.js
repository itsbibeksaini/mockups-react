(this["webpackJsonpmockups-react"]=this["webpackJsonpmockups-react"]||[]).push([[0],{30:function(e,t,a){e.exports={loginCard:"LoginPage_loginCard__3lBtq",savedUser:"LoginPage_savedUser__PnxBR",trashIcon:"LoginPage_trashIcon__opq66",profileIcon:"LoginPage_profileIcon__2zNKH",initials:"LoginPage_initials__V5ZxY",verticalCenter:"LoginPage_verticalCenter__2eg0a"}},35:function(e,t,a){e.exports={padding2030:"Home_padding2030__1I1Y2",galleryWrapper:"Home_galleryWrapper__3UtKW",grid:"Home_grid__1ct0g",gridItem:"Home_gridItem__PULNS",gridItemLG:"Home_gridItemLG__1l1IT",caption:"Home_caption__2gfhJ",gridItemSM:"Home_gridItemSM__15TO_",gridItemXS:"Home_gridItemXS__3QfB5"}},36:function(e,t,a){e.exports={MusicStore:"MusicStore_MusicStore__2F_NS",topMenu:"MusicStore_topMenu__3wtIa",accordian:"MusicStore_accordian__R1yu4",imageTitle:"MusicStore_imageTitle__3ebvI",albumArts:"MusicStore_albumArts__3vLec",album:"MusicStore_album__3mO7_",title:"MusicStore_title__2kJBm"}},79:function(e,t,a){},80:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(9),s=a.n(c),r=(a(79),a(41)),o=a(17),l=a(13),d=a(21),j=a(19),m=a(40),b=a(11),p=(a(80),a(119)),h=a(28),u=a(29),g=a(2),x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).routes=void 0,i.routes=e.routes,i}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{padding:"0.75rem",height:"100%",boxSizing:"border-box"},children:Object(g.jsx)(p.a,{style:{boxSizing:"border-box",margin:"auto",height:"100%",overflow:"hidden",overflowY:"auto"},classes:{root:"shadow padding2030 max-supported-width"},children:this.routes.map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(m.b,{to:"/",children:Object(g.jsx)(h.a,{icon:u.c,style:{fontSize:"28px",color:"#000"},className:"cursor-pointer"})}),Object(g.jsx)("h2",{style:{margin:0},children:e.name}),Object(g.jsx)("hr",{}),Object(g.jsx)(b.a,{path:e.path,exact:e.exact,render:function(t){return Object(g.jsx)(e.component,Object(r.a)(Object(r.a)({routes:e.childern},t),e.props))}})]},t)}))})})}}]),a}(n.a.Component),O=a(63),f=a(127),v=a(35),_=a.n(v),y=[{image:a.p+"static/media/loginpage.ee8f15ee.png",routerLink:"/login",size:""},{image:a.p+"static/media/musicstore.b5742c60.png",routerLink:"/music-store",size:""}],S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;Object(o.a)(this,a),(i=t.call(this,e)).availableSizes=["gridItemLG","gridItemSM","gridItemXS"],i.getRandomNumber=function(e){for(var t=Math.floor(Math.random()*i.availableSizes.length);e===t;)t=Math.floor(Math.random()*i.availableSizes.length);return t};var n=0;return y.map((function(e,t){var a=i.getRandomNumber(n);e.size=i.availableSizes[a],n=a})),i.state={thumbmails:y},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"".concat(_.a.padding2030),children:[Object(g.jsxs)("header",{style:{textAlign:"center"},children:[Object(g.jsx)(O.a,{variant:"h3",children:"Mockups Gallery"}),Object(g.jsx)(O.a,{variant:"subtitle2",children:"Some mockups on which I worked."}),Object(g.jsx)("hr",{})]}),Object(g.jsx)(f.a,{display:"flex",className:"".concat(_.a.padding2030," ").concat(_.a.galleryWrapper),children:Object(g.jsx)("div",{className:"".concat(_.a.grid),children:this.state.thumbmails.map((function(e,t){return Object(g.jsx)("div",{className:[_.a[e.size],_.a.gridItem,"animate__animated animate__zoomIn animate__faster"].join(" "),children:Object(g.jsx)(m.b,{to:e.routerLink,children:Object(g.jsx)("img",{src:e.image,alt:""})})},t)}))})})]})}}]),a}(n.a.Component),w=a(125),N=a(122),k=a(123),I=a(128),L=a(124),M=a(30),z=a.n(M),C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).clickUser=function(e){var t=i.state.savedUser;t.map((function(e){e.selected&&(e.selected=!1)}));var a=Object.assign({},t[e]);a.selected=!0,t[e]=a,i.setState({savedUser:t})},i.togglePassword=function(){alert("test")},i.deleteUser=function(e){var t=i.state.savedUser;t.splice(e,1),i.setState({savedUser:t})},i.state={savedUser:[{initials:"JD",name:"John Doe 1",username:"johndoe",selected:!1},{initials:"JD",name:"John Doe 2",username:"johndoe",selected:!1},{initials:"JD",name:"John Doe 3",username:"johndoe",selected:!1}]},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(f.a,{flexDirection:"row",flexWrap:"wrap",display:"flex",justifyContent:"center",children:[Object(g.jsxs)(f.a,{m:1,className:"".concat(z.a.loginCard),height:"fit-content",children:[Object(g.jsxs)("header",{className:"padding1015",children:[Object(g.jsx)(O.a,{variant:"h4",children:"Welcome"}),Object(g.jsx)(O.a,{variant:"subtitle2",children:"Login to continue to services"})]}),Object(g.jsxs)("div",{className:"padding1015",children:[Object(g.jsx)(w.a,{id:"outlined-basic",helperText:"test",label:"Username",variant:"outlined",style:{width:"100%",marginBottom:"0.75rem"},InputProps:{startAdornment:Object(g.jsx)(N.a,{position:"start",children:Object(g.jsx)(h.a,{icon:u.e,style:{fontSize:"21px"}})})}}),Object(g.jsx)(w.a,{id:"outlined-basic",helperText:"Test",type:"password",label:"Password",variant:"outlined",style:{width:"100%"},InputProps:{startAdornment:Object(g.jsx)(N.a,{position:"start",children:Object(g.jsx)(h.a,{icon:u.b,style:{fontSize:"21px"}})}),endAdornment:Object(g.jsx)(N.a,{position:"end",children:Object(g.jsx)(h.a,{icon:u.a,style:{fontSize:"21px"},className:"cursor-pointer"})})}}),Object(g.jsx)(k.a,{control:Object(g.jsx)(I.a,{}),label:"Remember me"}),Object(g.jsx)("div",{style:{textAlign:"right"},children:Object(g.jsx)(L.a,{variant:"contained",color:"primary",children:" Log in "})}),Object(g.jsx)("div",{style:{textAlign:"right",marginTop:"0.25rem"},children:Object(g.jsx)(L.a,{color:"primary",children:" Forgot password? "})})]})]}),Object(g.jsxs)(f.a,{m:1,className:"".concat(z.a.loginCard),children:[Object(g.jsxs)("header",{className:"padding1015",children:[Object(g.jsx)(O.a,{variant:"h4",children:"Welcome"}),Object(g.jsx)(O.a,{variant:"subtitle2",children:"Login to continue to services"})]}),Object(g.jsxs)("div",{className:"padding1015",children:[this.state.savedUser.map((function(t,a){return Object(g.jsxs)(f.a,{flexDirection:"column",display:"flex",className:"".concat(z.a.savedUser),children:[Object(g.jsxs)(f.a,{flexDirection:"row",display:"flex",onClick:function(){return e.clickUser(a)},children:[Object(g.jsx)("div",{style:{width:"40px",position:"relative"},children:Object(g.jsx)("div",{className:"".concat(z.a.profileIcon," ").concat(z.a.verticalCenter),children:Object(g.jsx)("span",{className:"".concat(z.a.initials),children:t.initials})})}),Object(g.jsxs)(f.a,{flexGrow:1,style:{marginLeft:"0.5rem"},children:[Object(g.jsx)(O.a,{variant:"h5",children:t.name}),Object(g.jsxs)(O.a,{variant:"subtitle2",children:["@",t.username]})]}),Object(g.jsx)(f.a,{justifyItems:"flex-end",className:"".concat(z.a.trashIcon),style:{position:"relative",width:"50px",textAlign:"center"},children:Object(g.jsx)(h.a,{icon:u.d,className:"".concat(z.a.verticalCenter),onClick:function(){return e.deleteUser(a)}})})]}),t.selected?Object(g.jsxs)(f.a,{className:"padding1015",style:{marginTop:"0.5rem"},children:[Object(g.jsx)(w.a,{variant:"outlined",label:"Password",type:"password",style:{width:"100%"},InputProps:{startAdornment:Object(g.jsx)(N.a,{position:"start",children:Object(g.jsx)(h.a,{icon:u.b,style:{fontSize:"21px"}})}),endAdornment:Object(g.jsx)(N.a,{position:"end",children:Object(g.jsx)(h.a,{icon:u.a,style:{fontSize:"21px"},className:"cursor-pointer",onClick:function(){return e.togglePassword()}})})}}),Object(g.jsx)("div",{style:{marginTop:"0.5rem",textAlign:"right"},children:Object(g.jsxs)(L.a,{variant:"contained",color:"primary",children:["Log in as ",t.name,"?"]})})]}):""]},a)})),Object(g.jsx)("div",{style:{textAlign:"right"},children:Object(g.jsx)(L.a,{variant:"outlined",color:"primary",children:" Use another account"})})]})]})]})}}]),a}(n.a.Component),P=a(36),A=a.n(P),U=[{image:a.p+"static/media/piku.357867de.jpg",title:"Piku"},{image:a.p+"static/media/leela-ek-paheli.8f68d127.jpg",title:"Leela ek paheli"},{image:a.p+"static/media/roy.96b602bd.jpg",title:"Roy"},{image:a.p+"static/media/dilwale.e4c1266c.jpg",title:"Dilwale"},{image:a.p+"static/media/alliswell.1a2b5320.jpg",title:"All is well"}],T=[{image:a.p+"static/media/alliswell.e166bb2c.png",title:"All is well"},{image:a.p+"static/media/airlift.127077c8.png",title:"Airlift"},{image:a.p+"static/media/kabir-singh.f172776d.png",title:"Kabir Singh"},{image:a.p+"static/media/roy.a3579630.png",title:"Roy"},{image:a.p+"static/media/wazir.04349d19.png",title:"Wazir"},{image:a.p+"static/media/befikre.2b1d0454.png",title:"Befikre"},{image:a.p+"static/media/dishoom.8f95de1c.png",title:"Dishoom"},{image:a.p+"static/media/jagga-jasoos.f7da425d.png",title:"Jagga Jasoos"},{image:a.p+"static/media/raaz-reboot.aefa16f4.png",title:"Raaz Reboot"},{image:a.p+"static/media/rockey-handsome.a8134c66.png",title:"Rockey Handsome"}],D=[{path:"/",name:"",component:S,exact:!0},{path:"/login",name:"",component:x,exact:!0,childern:[{path:"",name:"Login",component:C,exact:!0}]},{path:"/music-store",name:"",component:x,exact:!0,childern:[{path:"",name:"Music Store",component:function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={banners:U,albumThumbs:T},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"".concat(A.a.MusicStore),children:[Object(g.jsxs)(f.a,{display:"flex",className:"".concat(A.a.topMenu),children:[Object(g.jsx)(f.a,{flexGrow:1,children:Object(g.jsx)(O.a,{variant:"h4",children:"Music Store"})}),Object(g.jsx)(f.a,{alignSelf:"center",children:Object(g.jsx)(L.a,{variant:"contained",color:"primary",children:"Log in"})})]}),Object(g.jsx)("header",{className:"".concat(A.a.accordian),children:Object(g.jsx)("ul",{children:this.state.banners.map((function(e,t){return Object(g.jsxs)("li",{children:[Object(g.jsx)("div",{className:"".concat(A.a.imageTitle),children:Object(g.jsx)("span",{children:e.title})}),Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:e.image})})]})}))})}),Object(g.jsx)(f.a,{display:"flex",flexWrap:"wrap",justifyContent:"center",style:{width:"900px",margin:"auto"},className:"".concat(A.a.albumArts),children:this.state.albumThumbs.map((function(e,t){return Object(g.jsxs)(f.a,{m:1,className:"".concat(A.a.album),children:[Object(g.jsx)("div",{className:"".concat(A.a.title),children:Object(g.jsx)(O.a,{variant:"h6",children:e.title})}),Object(g.jsx)("img",{src:e.image})]})}))})]})}}]),a}(n.a.Component),exact:!0}]}],J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(m.a,{basename:"",children:Object(g.jsx)(b.c,{children:D.map((function(e,t){return Object(g.jsx)(b.a,{path:e.path,exact:e.exact,render:function(t){return Object(g.jsx)(e.component,Object(r.a)(Object(r.a)({routes:e.childern},t),e.props))}},t)}))})})}}]),a}(n.a.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};a(93);s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),H()}},[[94,1,2]]]);
//# sourceMappingURL=main.2c2e3e18.chunk.js.map