(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-394b5200"],{"0b42":function(t,e,r){var c=r("da84"),n=r("e8b5"),i=r("68ee"),o=r("861d"),a=r("b622"),u=a("species"),l=c.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,i(e)&&(e===l||n(e.prototype))?e=void 0:o(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?l:e}},"1dde":function(t,e,r){var c=r("d039"),n=r("b622"),i=r("2d00"),o=n("species");t.exports=function(t){return i>=51||!c((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3795:function(t,e,r){},"65f0":function(t,e,r){var c=r("0b42");t.exports=function(t,e){return new(c(t))(0===e?0:e)}},"78d4":function(t,e,r){"use strict";r("3795")},8418:function(t,e,r){"use strict";var c=r("a04b"),n=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=c(e);o in t?n.f(t,o,i(0,r)):t[o]=r}},"99af":function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),i=r("d039"),o=r("e8b5"),a=r("861d"),u=r("7b0b"),l=r("07fa"),d=r("8418"),s=r("65f0"),b=r("1dde"),f=r("b622"),O=r("2d00"),j=f("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",v=n.TypeError,y=O>=51||!i((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),g=b("concat"),w=function(t){if(!a(t))return!1;var e=t[j];return void 0!==e?!!e:o(t)},x=!y||!g;c({target:"Array",proto:!0,forced:x},{concat:function(t){var e,r,c,n,i,o=u(this),a=s(o,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(i=-1===e?o:arguments[e],w(i)){if(n=l(i),b+n>h)throw v(p);for(r=0;r<n;r++,b++)r in i&&d(a,b,i[r])}else{if(b>=h)throw v(p);d(a,b++,i)}return a.length=b,a}})},a3d3:function(t,e,r){"use strict";r.r(e);r("b0c0");var c=r("7a23"),n={class:"container width-rwd mt-5"},i=Object(c["i"])("h3",{class:"text-center text-secondary fw-bold mt-5"},"訂單資料",-1),o={class:"table table-light"},a=Object(c["i"])("th",null,"Email:",-1),u=Object(c["i"])("th",null,"收件人姓名",-1),l=Object(c["i"])("th",null,"收件人電話",-1),d=Object(c["i"])("th",null,"收件人地址",-1),s=Object(c["i"])("th",null,"付款狀態",-1),b={key:0,class:"text-danger"},f={key:1},O={class:"d-flex justify-content-end"},j={key:0,class:"btn btn-danger",type:"submit"},h=Object(c["i"])("h3",{class:"text-center text-secondary fw-bold"},"訂單產品",-1),p={class:"table text-left table-light"},v=Object(c["i"])("thead",null,[Object(c["i"])("tr",{class:"fw-bold",style:{"vertical-align":"middle"}},[Object(c["i"])("td",null,"產品名稱"),Object(c["i"])("td",null,"價格")])],-1),y={class:"m-0"},g={class:"m-0"},w=Object(c["i"])("th",null,"總計 :",-1),x={class:"fw-bold"};function m(t,e,r,m,A,L){return Object(c["A"])(),Object(c["h"])("div",n,[Object(c["i"])("form",{onSubmit:e[0]||(e[0]=function(t){return L.payOder()})},[i,Object(c["i"])("table",o,[Object(c["i"])("tbody",null,[Object(c["i"])("tr",null,[a,Object(c["i"])("td",null,Object(c["L"])(A.user.email),1)]),Object(c["i"])("tr",null,[u,Object(c["i"])("td",null,Object(c["L"])(A.user.name),1)]),Object(c["i"])("tr",null,[l,Object(c["i"])("td",null,Object(c["L"])(A.user.tel),1)]),Object(c["i"])("tr",null,[d,Object(c["i"])("td",null,Object(c["L"])(A.user.address),1)]),Object(c["i"])("tr",null,[s,A.order.is_paid?(Object(c["A"])(),Object(c["h"])("td",b,"付款完成")):(Object(c["A"])(),Object(c["h"])("td",f,"尚未付款"))])])]),Object(c["i"])("div",O,[A.order.is_paid?Object(c["g"])("",!0):(Object(c["A"])(),Object(c["h"])("button",j,"完成付款"))])],32),h,Object(c["i"])("table",p,[v,Object(c["i"])("tbody",null,[(Object(c["A"])(!0),Object(c["h"])(c["a"],null,Object(c["G"])(A.order.products,(function(e){return Object(c["A"])(),Object(c["h"])("tr",{key:e.id,style:{"vertical-align":"middle"}},[Object(c["i"])("td",null,[Object(c["i"])("p",y,Object(c["L"])(e.product.title),1),Object(c["i"])("p",g,"數量 : "+Object(c["L"])(e.qty),1)]),Object(c["i"])("td",null," $"+Object(c["L"])(t.$filters.currency(e.total)),1)])})),128))]),Object(c["i"])("tfoot",null,[Object(c["i"])("tr",null,[w,Object(c["i"])("td",x,"$ "+Object(c["L"])(t.$filters.currency(A.order.total)),1)])])])])}r("99af");var A={data:function(){return{order:{},user:{},orderId:""}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,t.user=e.data.order.user,console.log(t.order))}))},payOder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){e.data.success&&t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},L=(r("78d4"),r("6b0d")),k=r.n(L);const $=k()(A,[["render",m]]);e["default"]=$},b0c0:function(t,e,r){var c=r("83ab"),n=r("5e77").EXISTS,i=r("e330"),o=r("9bf2").f,a=Function.prototype,u=i(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=i(l.exec),s="name";c&&!n&&o(a,s,{configurable:!0,get:function(){try{return d(l,u(this))[1]}catch(t){return""}}})},e8b5:function(t,e,r){var c=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-394b5200.921812e3.js.map