(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2439040"],{b0c0:function(e,t,c){var r=c("83ab"),n=c("5e77").EXISTS,i=c("e330"),l=c("9bf2").f,o=Function.prototype,a=i(o.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=i(s.exec),b="name";r&&!n&&l(o,b,{configurable:!0,get:function(){try{return d(s,a(this))[1]}catch(e){return""}}})},cf2a:function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),n={class:"container"},i={class:"table mt-4"},l=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",{width:"100"},"訂單編號"),Object(r["i"])("th",{width:"120"},"訂單日期"),Object(r["i"])("th",null,"收件人姓名"),Object(r["i"])("th",{width:"120"},"收件方法"),Object(r["i"])("th",{width:"120"},"收件人電話"),Object(r["i"])("th",{width:"100"},"是否付款"),Object(r["i"])("th",{width:"200"},"編輯")])],-1),o={class:"text-right"},a={class:"text-right"},s={key:0,class:"text-success"},d={key:1,class:"text-success"},b={class:"btn-group"},u=["onClick"],O=["onClick"];function j(e,t,c,j,m,h){var p=Object(r["I"])("PaginationVue"),f=Object(r["I"])("OrderModel"),g=Object(r["I"])("DelModal");return Object(r["A"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",n,[Object(r["i"])("table",i,[l,Object(r["i"])("tbody",null,[(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["G"])(m.orders,(function(e){return Object(r["A"])(),Object(r["h"])("tr",{key:e.due_data},[Object(r["i"])("td",null,Object(r["L"])(e.num),1),Object(r["i"])("td",null,Object(r["L"])(h.cangeTime(e.create_at)),1),Object(r["i"])("td",null,Object(r["L"])(e.user.name),1),Object(r["i"])("td",o,Object(r["L"])(e.user.payment_method),1),Object(r["i"])("td",a,Object(r["L"])(e.user.tel),1),Object(r["i"])("td",null,[e.is_paid?(Object(r["A"])(),Object(r["h"])("span",s,"付款完成")):(Object(r["A"])(),Object(r["h"])("span",d,"尚未付款"))]),Object(r["i"])("td",null,[Object(r["i"])("div",b,[Object(r["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:Object(r["X"])((function(t){return h.openModal(m.isNew,e)}),["prevent"])},"編輯",8,u),Object(r["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:Object(r["X"])((function(t){return h.delOrder(e)}),["prevent"])},"刪除",8,O)])])])})),128))])]),Object(r["l"])(p,{pages:m.pagination,onEmitPages:h.getOrder},null,8,["pages","onEmitPages"]),Object(r["l"])(f,{ref:"orderModel",order:m.ordersItem,onEmitOrder:h.updateOrder},null,8,["order","onEmitOrder"])]),Object(r["l"])(g,{ref:"delModal",product:m.ordersItem,onDelItem:h.delOrder},null,8,["product","onDelItem"])],64)}c("99af"),c("a15b");var m={class:"modal",tabindex:"-1",ref:"modal"},h={class:"modal-dialog"},p={class:"modal-content"},f=Object(r["i"])("div",{class:"modal-header"},[Object(r["i"])("h5",{class:"modal-title"},"編輯訂單"),Object(r["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"row"},y={class:"mb-3 col-6"},I=Object(r["i"])("label",{for:"title",class:"form-label"},"收件人姓名",-1),w={class:"mb-3 col-6"},M=Object(r["i"])("label",{for:"email",class:"form-label"},"收件人信箱",-1),k={class:"mb-3 col-6"},x=Object(r["i"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),_={class:"mb-3 col-6"},A=Object(r["i"])("label",{for:"payment_method",class:"form-label"},"付款方式",-1),$=["value"],L={class:"mb-3 col-12"},V=Object(r["i"])("label",{for:"address",class:"form-label"},"收件人地址",-1),C=Object(r["i"])("p",null,"商品項目",-1),D={class:"mb-3",style:{height:"150px",overflow:"auto"}},U={class:"table"},W=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",null,"商品名稱"),Object(r["i"])("th",null,"商品數量"),Object(r["i"])("th",null,"商品價格")])],-1),E={class:"fw-bold"},P={class:"mb-3"},N={class:"form-check"},Q=Object(r["i"])("label",{class:"form-check-label",for:"is_paid"}," 是否付款 ",-1),S={class:"modal-footer"};function T(e,t,c,n,i,l){return Object(r["A"])(),Object(r["h"])("div",null,[Object(r["i"])("div",m,[Object(r["i"])("div",h,[Object(r["i"])("div",p,[f,Object(r["i"])("div",g,[Object(r["i"])("div",v,[Object(r["i"])("div",y,[I,Object(r["W"])(Object(r["i"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.orderItem.user.name=e}),placeholder:"請輸入姓名"},null,512),[[r["Q"],i.orderItem.user.name]])]),Object(r["i"])("div",w,[M,Object(r["W"])(Object(r["i"])("input",{type:"text",class:"form-control",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.orderItem.user.email=e}),placeholder:"請輸入信箱"},null,512),[[r["Q"],i.orderItem.user.email]])]),Object(r["i"])("div",k,[x,Object(r["W"])(Object(r["i"])("input",{type:"text",class:"form-control",id:"tel","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.orderItem.user.tel=e}),placeholder:"請輸入電話"},null,512),[[r["Q"],i.orderItem.user.tel]])]),Object(r["i"])("div",_,[A,Object(r["W"])(Object(r["i"])("select",{class:"form-select",id:"payment_method","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.orderItem.user.payment_method=e})},[(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["G"])(i.payMethods,(function(e){return Object(r["A"])(),Object(r["h"])("option",{key:e,value:e},Object(r["L"])(e),9,$)})),128))],512),[[r["P"],i.orderItem.user.payment_method]])]),Object(r["i"])("div",L,[V,Object(r["W"])(Object(r["i"])("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.orderItem.user.address=e}),placeholder:"請輸入地址"},null,512),[[r["Q"],i.orderItem.user.address]])]),C,Object(r["i"])("div",D,[Object(r["i"])("table",U,[W,Object(r["i"])("tbody",null,[(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["G"])(i.orderItem.products,(function(t){return Object(r["A"])(),Object(r["h"])("tr",{key:t},[Object(r["i"])("th",null,Object(r["L"])(t.product.title),1),Object(r["i"])("th",null,Object(r["L"])(t.qty),1),Object(r["i"])("th",null,"$"+Object(r["L"])(e.$filters.currency(t.final_total)),1)])})),128))])])]),Object(r["i"])("p",E,"總金額 : $"+Object(r["L"])(e.$filters.currency(i.orderItem.total)),1),Object(r["i"])("div",P,[Object(r["i"])("div",N,[Object(r["W"])(Object(r["i"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.orderItem.is_paid=e}),id:"is_paid"},null,512),[[r["O"],i.orderItem.is_paid]]),Q])])])]),Object(r["i"])("div",S,[Object(r["i"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=function(t){e.hideModal()})},"取消"),Object(r["i"])("button",{type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=Object(r["X"])((function(e){return l.getOrder()}),["prevent"]))},"確認")])])])],512)])}var X=c("5191"),G={data:function(){return{orderItem:{user:{}},payMethods:["ATM轉帳","信用卡","超商取貨"]}},mixins:[X["a"]],methods:{getOrder:function(){this.$emit("emitOrder",this.orderItem)}},props:{order:{type:Object}},watch:{order:function(){this.orderItem=this.order}}},F=c("6b0d"),J=c.n(F);const q=J()(G,[["render",T]]);var Y=q,z=c("1799"),B=c("6ff1"),H={inject:["emitter"],components:{OrderModel:Y,PaginationVue:z["a"],DelModal:B["a"]},data:function(){return{orders:[],ordersItem:{},pagination:{},isNew:!1}},methods:{getOrder:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/orders/?page=").concat(t);this.$http.get(c).then((function(t){t.data.success&&(e.orders=t.data.orders,e.pagination=t.data.pagination)}))},cangeTime:function(e){var t=new Date(1e3*e);return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())},openModal:function(e,t){this.isNew=e,this.isNew?this.ordersItem={}:this.ordersItem=t,this.$refs.orderModel.showModal()},updateOrder:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/order/").concat(e.id);this.$http.put(c,{data:e}).then((function(e){t.$refs.orderModel.hideModal(),e.data.success?(t.getOrder(),t.emitter.emit("push-message",{style:"success",title:"更新成功"})):t.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})}))},delOrder:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/order/").concat(e.id);this.$http.delete(c).then((function(e){t.$refs.delModal.hideModal(),e.data.success?(console.log(e.data),t.emitter.emit("push-message",{style:"success",title:"刪除成功"})):t.emitter.emit("push-message",{style:"danger",title:"刪除失敗",content:e.data.message}),t.getOrder()}))}},created:function(){this.getOrder()}};const K=J()(H,[["render",j]]);t["default"]=K}}]);
//# sourceMappingURL=chunk-b2439040.4108d701.js.map