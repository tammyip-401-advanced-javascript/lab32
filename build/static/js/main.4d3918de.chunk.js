(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{300:function(e,t,a){e.exports=a(612)},308:function(e,t,a){},331:function(e,t){},384:function(e,t){},397:function(e,t){},399:function(e,t){},612:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),u=a(20),i=(a(308),a(55));var l=function(e){return r.a.createElement(i.b,{to:"/"},r.a.createElement("header",null,r.a.createElement("h1",null,"~ \u2740 My Beauty Store \u2740 ~")))};var s=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{id:"footer"},r.a.createElement("p",null,"Created by Tammy Ip"),r.a.createElement("a",{href:"https://www.linkedin.com/in/tammy-ip-cpa-48145025/"}),r.a.createElement("a",{href:"https://github.com/iptmh"})))},p=a(656),m=a(114),d=a(81),E=a(649),f=a(650),g=a(651),h=a(659),v=a(652),y=a(658),b=a(653),C=a(648),O=a(613);function k(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(C.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var T=Object(E.a)((function(e){return{appBar:{position:"relative"},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),R=["Shipping address","Payment details","Review your order"];var _=Object(u.b)((function(e){return{cartCount:e.reducer.cartCount,cart:e.reducer.cart}}))((function(e){console.log(e.cart);var t=T(),a=r.a.useState(0),n=Object(m.a)(a,2),c=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement("main",{className:t.layout},r.a.createElement(g.a,{className:t.paper},r.a.createElement(O.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),r.a.createElement(h.a,{activeStep:c,className:t.stepper},R.map((function(e){return r.a.createElement(v.a,{key:e},r.a.createElement(y.a,null,e))}))),r.a.createElement(r.a.Fragment,null,c===R.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(O.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.buttons},0!==c&&r.a.createElement(b.a,{onClick:function(){o(c-1)},className:t.button},"Back"),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){o(c+1)},className:t.button},c===R.length-1?"Place order":"Next"))))),r.a.createElement(k,null)))}));var j=Object(u.b)((function(e){return{currentCategory:e.currentCategory}}))((function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Current Category:"),r.a.createElement("p",null,e.currentCategory))})),w=a(41),S=a(37),A=a.n(S),D=a(84),x=a(85),G=a.n(x),N=function(e){return{type:"GET_CATEGORIES",payload:e}},P=function(e){return console.log(e),{type:"GET_PRODUCTS",payload:e}},I=function(e){return{type:"ADD_TO_CART",payload:e}};var B=Object(u.b)((function(e){return{categories:e.reducer.categories,currentCategory:e.reducer.currentCategory}}),(function(e){return{getCategories:function(){return e(function(){var e=Object(D.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://js401n16-lab31.herokuapp.com/api/v1/categories");case 2:a=e.sent,t(N(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setCurrentCategories:function(t){return e(function(e){return{type:"SET_CURRENT_CATEGORY",payload:e}}(t))}}}))((function(e){var t=e.categories,a=e.getCategories;Object(n.useEffect)((function(){a()}),[a]);var c=[];if(t)for(var o=function(a){var n=t[a];c.push(r.a.createElement("button",{key:a,onClick:function(){e.setCurrentCategories({type:"SET_CURRENT_CATEGORY",payload:n.name})}},n.displayName||n.name))},u=0;u<t.length;u++)o(u);return r.a.createElement("div",null,r.a.createElement("h3",null,"Browse our Categories:"),c)})),F=a(654),L=a(160),W=a(292),Y=a.n(W),M={categories:[{name:"Electronics",display_name:"Electronics"},{name:"Clothing",display_name:"Clothing"},{name:"Supplements",display_name:"Supplements"}],products:[],currentCategory:"",cart:[],cartCount:0,drawer:!1,activeProduct:{}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type,r=Object(w.a)({},e);switch(n){case"SET_CURRENT_CATEGORY":r.currentCategory=a.payload;break;case"ADD_TO_CART":r.cart.push(a),r.cartCount++;for(var c=0;c<r.products.length;c++)if(r.products[c]._id===a._id){var o=r.products[c].inStock-1;r.products[c].inStock=o}break;case"REMOVE_FROM_CART":r.cartCount--,r.cart=r.cart.filter((function(e){return e.name!==a.name}));break;case"TOGGLE_DRAWER":r.drawer=a;break;case"ADD_PRODUCT":r.products.push(a);break;case"RESET_STORE":r=Object(w.a)({},M);break;case"VIEW_DETAIL":r.activeProduct=a,console.log(r.activeProduct);break;case"GET_PRODUCTS":console.log(a),r.products=a;break;case"GET_CATEGORIES":r.categories=a}return r};var V=Object(u.b)()((function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],u=e.inStock;return r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:e.img,alt:e.alt}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Price: $",e.price),r.a.createElement("p",null,"Stock: ",u),r.a.createElement("div",{className:"img"},r.a.createElement("img",{width:"200",height:"200",src:"https://image.freepik.com/free-vector/new-product-coming-soon-poster-background-design_7102-179.jpg"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var t,a=(t=e.product,function(){var e=Object(D.a)(A.a.mark((function e(a){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,G.a.put("https://js401n16-lab31.herokuapp.com/api/v1/products/".concat(t._id),Object(w.a)(Object(w.a)({},t),{},{inStock:t.inStock-1}));case 3:n=e.sent,console.log(n),a(I(n.data));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());u--,e.dispatch(a)}},"Add To Cart"),r.a.createElement("button",{onClick:function(){o(!c);var t={type:"VIEW_DETAIL",payload:e.product};e.dispatch(t)}},"View Details"),r.a.createElement("div",null,c?e.description:null)))}));Object(L.configure)({adapter:new Y.a});var J=Object(u.b)((function(e){return{products:e.reducer.products,currentCategory:e.reducer.currentCategory}}),(function(e){return{getProducts:function(){return e(function(){var e=Object(D.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://js401n16-lab31.herokuapp.com/api/v1/products");case 2:a=e.sent,t(P(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.products,a=e.getProducts;Object(n.useEffect)((function(){a()}),[a]);var c=[];if(t)for(var o=t.filter((function(t){return t.category===e.currentCategory})),u=function(t){var a=o[t];c.push(r.a.createElement(V,{key:t,name:a.name,description:a.description,price:a.price,inStock:a.inStock,add:function(a){var n;n=t,e.dispatch({type:"ADD_TO_CART",payload:e.products[n]})},view:function(e){},product:a}))},i=0;i<o.length;i++)u(i);return r.a.createElement(F.a,{id:"products",container:!0,spacing:4},c)})),$=a(657),q=a(655);var z=Object(u.b)((function(e){return{cartCount:e.reducer.cartCount,cart:e.reducer.cart}}))((function(e){console.log(e);var t=r.a.createElement("div",{onClick:function(){return e.dispatch({type:"TOGGLE_DRAWER",payload:!1})}}),a=[];return e.cart&&e.cart.forEach((function(t){a.push(r.a.createElement(F.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"flex-end"},r.a.createElement("div",null,t.name),r.a.createElement("button",{id:"remove",onClick:function(a){e.dispatch({type:"REMOVE_FROM_CART",payload:t})}}," Remove")))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/cart"}," ",r.a.createElement("div",{id:"cart"},"Checkout / Your Cart ",e.cartCount)),r.a.createElement(F.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"flex-end"},a),r.a.createElement($.a,{anchor:"right",open:e.drawer},t,r.a.createElement(q.a,{edge:"start",color:"inherit",onClick:function(){return e.dispatch({type:"TOGGLE_DRAWER",payload:!1})}})))})),H=a(10);function K(){return r.a.createElement(i.a,null,r.a.createElement(l,null),r.a.createElement(z,null),r.a.createElement(p.a,null,r.a.createElement(H.a,{path:"/",exact:!0},r.a.createElement(B,null),r.a.createElement(j,null),r.a.createElement(J,null)),r.a.createElement(H.a,{path:"/cart",component:_})),r.a.createElement(s,null))}var Q=a(39),X=a(293),Z=function(e){return function(t){return function(a){return"function"===typeof a?a(e.dispatch,e.getState):t(a)}}},ee={reducer:U},te=Object(Q.createStore)(Object(Q.combineReducers)(ee),Object(X.composeWithDevTools)(Object(Q.applyMiddleware)(Z)));function ae(){return r.a.createElement(u.a,{store:te},r.a.createElement(K,null))}var ne=document.getElementById("root");o.a.render(r.a.createElement(ae,null),ne)}},[[300,1,2]]]);
//# sourceMappingURL=main.4d3918de.chunk.js.map