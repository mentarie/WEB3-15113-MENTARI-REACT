(this["webpackJsonppweb3-reactstrap"]=this["webpackJsonppweb3-reactstrap"]||[]).push([[0],{129:function(e,a,t){e.exports=t(214)},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},202:function(e,a,t){e.exports=t.p+"static/media/picture.c88992de.jpg"},213:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(3),r=t.n(l),o=(t(134),t(7)),c=t(8),s=t(10),m=t(9),u=t(11),d=(t(135),t(218)),h=(t(136),t(221)),b=t(222),p=t(35),g=(d.a.SubMenu,function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={current:"mail"},t.handleClick=function(e){console.log("click ",e),t.setState({current:e.key})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"menuBar"},i.a.createElement(d.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},i.a.createElement(d.a.Item,{key:"mail"},i.a.createElement(h.a,null),i.a.createElement(p.b,{to:"/"},"Profile")),i.a.createElement(d.a.Item,{key:"app"},i.a.createElement(b.a,null),i.a.createElement(p.b,{to:"/portofolio"},"Portofolio")),i.a.createElement(d.a.Item,{key:"alipay"},i.a.createElement("a",{href:"https://github.com/mentarie",color:"#7e6752",target:"_blank",rel:"noopener noreferrer"},"Repositori Github"))))}}]),a}(n.Component)),f=t(30),k=t(216),E=t(219),v=t(220),y=t(217),O=(t(198),t(55));t(199);var j=function(e){var a=e.type,t=e.text,n=e.disabled,l=e.borderRadius,r=void 0===l?25:l,o=e.background,c=void 0===o?"#7e6752":o,s=e.textColor,m=void 0===s?"white":s,u=e.border,d=void 0===u?"none":u,h=e.margin,b=void 0===h?"0px":h,p=e.marginLeft,g=e.marginRight,f=e.marginTop,k=e.marginBottom,E=e.className,v=e.onClick;return i.a.createElement(O.a,{type:a,className:E,disabled:n,style:{backgroundColor:c,color:m,borderRadius:r,border:d,margin:b,marginLeft:p,marginRight:g,marginTop:f,marginBottom:k},onClick:v},t)},w=k.a.Content,C=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=t(202),a=this.props,n=a.initialData,l=a.showModal,r=a.handleOk,o=a.handleCancel;return i.a.createElement(k.a,{className:"landing-container"},i.a.createElement(w,{style:{overflow:"hidden"}}," ",i.a.createElement(E.a,{className:"section-container"},i.a.createElement(v.a,{lg:12,md:12,sm:12},i.a.createElement("div",{className:"image-big-container"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"80%",marginLeft:"100px"}}))),i.a.createElement(v.a,{lg:12,md:12,sm:12},i.a.createElement(E.a,null,i.a.createElement(v.a,{span:24},i.a.createElement("div",{className:"title-container"},i.a.createElement("span",{className:"text-soft-blue title-biggest bold"},"Halo, aku "),i.a.createElement("br",null),i.a.createElement("span",{className:"text-soft-blue title-big bold"},"Mentari Enggar Rizki"))),i.a.createElement(v.a,{span:24},i.a.createElement("div",{className:"image-hidden"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"100%"}})),i.a.createElement("div",{className:"description-container desc-medium"},"Aku adalah tempat bercerita orang-orang, terutama oleh mereka yang membutuhkan bantuan agar teknologi menjadi lebih mudah digunakan dalam segi psikologi. Ya, aku UX Researcher. Salam kenal!")),i.a.createElement(v.a,{span:24},i.a.createElement("div",{className:"button-section-1-container"},i.a.createElement(j,{text:"Show Me",background:"#7e6752",textColor:"#fff",className:"button-participate",onClick:l}),i.a.createElement(j,{text:"Another Information",background:"white",textColor:"#7e6752",border:"1px solid #7e6752",marginLeft:16,className:"button-participate"}))),i.a.createElement(y.a,{title:"Contact",visible:n.visible,onOk:r,onCancel:o,className:"modal-notif"},i.a.createElement("p",{className:"text-notif"},"Anda dapat mengirimkan atau bertanya di mentari.e.r@mail.ugm.ac.id")))))))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),t.setState({visible:!1})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(C,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),a}(n.Component),x=(t(213),k.a.Content),S=[{title:"Photography",link:"https://www.instagram.com/mentari.e.r/",description:"Saya cukup aktif di sosial media, salah satunya adalah instagram. So, let's keep in touch :)"},{title:"Linkedin",link:"https://www.linkedin.com/in/mentarierizki/",description:"Saya sudah memiliki portofolio profesional atau CV yang dapat diakses melalui Linkedin"},{title:"UX",link:"https://dribbble.com/mentareen",description:"Salah satu yang dibutuhkan seorang desainer adalah portofolio desainnya. Saya mengunggah beberapa desain di Dribbble."}],M=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(k.a,{className:"landing-container"},i.a.createElement(x,{style:{overflow:"hidden"}},i.a.createElement(E.a,{className:"section-container"},i.a.createElement(v.a,{lg:24},i.a.createElement("div",{className:"text-soft-blue title-big bold discover-container"},"Kenali Lebih Jauh")),i.a.createElement(v.a,{lg:24},i.a.createElement("div",{className:"text-black description-discover"},"Hal-hal yang aku lakukan belakangan ini.")),i.a.createElement(v.a,{lg:24},i.a.createElement("hr",{style:{minHeight:8,backgroundColor:"#7d5e2a",border:"none",maxWidth:150,borderRadius:26}})),i.a.createElement(v.a,{lg:24,className:"mt-20"},i.a.createElement(E.a,{type:"flex",justify:"center",className:"card-why-container"},S.map((function(e){return i.a.createElement(v.a,{lg:8,md:12,sm:12,className:""},i.a.createElement("div",{className:"card-why-content"},i.a.createElement("img",{src:e.image,className:"card-why-image"}),i.a.createElement("div",{className:"text-soft-blue semi-bold mt-10"},e.title),i.a.createElement("div",{className:"mt-10",style:{maxWidth:"260px"}},e.description,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:e.link},i.a.createElement(j,{text:"More",background:"#7e6752",textColor:"#fff",className:"button-participate",onClick:e.link})))))})))))))}}]),a}(n.Component),R=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),t.setState({visible:!1})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(M,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),a}(n.Component),A=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(f.c,null,i.a.createElement(f.a,{exact:!0,path:"/",component:N}),i.a.createElement(f.a,{path:"/portofolio",component:R}))}}]),a}(n.Component),L=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(A,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p.a,{basename:"/mentarie/WEB3-15113-MENTARI-REACT"},i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.e6c4f03b.chunk.js.map