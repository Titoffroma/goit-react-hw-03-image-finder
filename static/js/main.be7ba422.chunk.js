(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(12),i=a.n(c),o=(a(19),a(11)),u=a(3),l=a.n(u),h=a(7),m=a(5),d=a(6),g=a(9),p=a(8),f=function(e){var t=e.onSubmit;return Object(r.jsx)("header",{className:"Searchbar",children:Object(r.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(r.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(r.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(r.jsx)("input",{name:"search",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=function(e){var t=e.url,a=e.large,n=e.tags;return Object(r.jsx)("li",{className:"ImageGalleryItem",children:Object(r.jsx)("img",{src:t,alt:n,"data-large":a,className:"ImageGalleryItem-image"})})},j=function(e){var t=e.images,a=e.onClick;return Object(r.jsx)("ul",{className:"ImageGallery",onClick:a,children:t&&t.map((function(e){return Object(r.jsx)(b,{url:e.webformatURL,large:e.largeImageURL,tags:e.tags},e.id)}))})},v=function(e){var t=e.onClick;return Object(r.jsx)("button",{className:"Button",onClick:t,children:"Load More"})},O=function(e){var t=e.image,a=e.tag;return Object(r.jsx)("div",{className:"Overlay",children:Object(r.jsx)("div",{className:"Modal",children:Object(r.jsx)("img",{src:t,alt:a})})})},y=a(4);a(22),a(23),a(24);function x(e){Object(y.error)({text:"".concat(e),type:"error",addClass:"error"}),setTimeout((function(){k()}),5e3)}function k(){var e=document.querySelector(".error");e&&e.remove()}y.defaults.styling="material",y.defaults.icons="material",y.defaults.hide=!1,y.defaults.remove=!1,delete y.defaults.stack;var S=function(){function e(t,a){Object(m.a)(this,e),this.APIURL="https://pixabay.com/api/",this.perPage=a,this.count=1,this.searchQuery="",this.key=t}return Object(d.a)(e,[{key:"clearResult",value:function(){this.count=1,k()}},{key:"fetchResult",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length){e.next=2;break}return e.abrupt("return",x("Enter the search word"));case 2:return e.prev=2,e.next=5,fetch(this.searchURL+t+"&page="+this.count);case 5:return a=e.sent,e.next=8,a.json();case 8:if(r=e.sent,!a.ok){e.next=13;break}return r.hits&&!r.hits.length&&(this.count>1&&x("No more matches. Try new search"),x("No matches. Try new search")),this.count+=1,e.abrupt("return",r);case 13:return e.abrupt("return",x(r.message));case 16:e.prev=16,e.t0=e.catch(2),x(e.t0.message);case 19:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"searchURL",get:function(){return this.APIURL+"?key="+this.key+"&image_type=photo&orientation=horizontal&per_page="+this.perPage+"&q="}}]),e}(),w=a(13),L=a.n(w),N=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(r.jsx)(L.a,{type:"Bars",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),C=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={imageSet:[],query:"",large:!1,spin:!1},e.imageFinder=new S("19116097-91cfda2f798a07cacf5b2db64",12),e.handleSubmit=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.search.value,e.imageFinder.count=1,e.setState({imageSet:[],spin:!0}),t.next=6,e.imageFinder.fetchResult(r);case 6:n=t.sent,s=n.hits,c=s||[],e.setState({imageSet:c,query:r,spin:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.loadMore=function(){var t=Object(h.a)(l.a.mark((function t(a){var r,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({spin:!0}),t.next=3,e.imageFinder.fetchResult(e.state.query);case 3:r=t.sent,n=r.hits,s=n||[],e.setState((function(e){var t=e.imageSet;return{imageSet:[].concat(Object(o.a)(t),Object(o.a)(s)),spin:!1}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.openModal=function(t){if("IMG"===t.target.nodeName){var a=t.target.dataset.large,r=t.target.getAttribute("alt");e.setState({large:{url:a,tag:r}})}},e.closeOnClick=function(t){t.target.classList.contains("Overlay")&&(e.setState({large:!1}),e.removeListeners())},e.closeOnPress=function(t){"Escape"===t.code&&(e.setState({large:!1}),e.removeListeners())},e.removeListeners=function(){window.removeEventListener("keydown",e.closeOnPress),document.removeEventListener("click",e.closeOnClick)},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.imageSet;this.state.large&&(window.addEventListener("keydown",this.closeOnPress),document.addEventListener("click",this.closeOnClick)),this.state.imageSet.length>a.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.imageSet,a=e.spin,n=t.length&&t.length%12===0,s=this.state.large,c=s.url,i=s.tag;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{onSubmit:this.handleSubmit,value:this.state.query}),Object(r.jsx)(j,{images:t,onClick:this.openModal}),!(!n||a)&&Object(r.jsx)(v,{onClick:this.loadMore}),!!c&&Object(r.jsx)(O,{image:c,tag:i}),!!a&&Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)(N,{})})]})}}]),a}(n.Component);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.be7ba422.chunk.js.map