(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee012f4"],{e01a:function(t,e,c){"use strict";var o=c("23e7"),a=c("83ab"),l=c("da84"),n=c("e330"),i=c("1a2d"),s=c("1626"),r=c("3a9b"),d=c("577e"),u=c("9bf2").f,b=c("e893"),p=l.Symbol,h=p&&p.prototype;if(a&&s(p)&&(!("description"in h)||void 0!==p().description)){var m={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=r(h,this)?new p(t):void 0===t?p():p(t);return""===t&&(m[e]=!0),e};b(O,p),O.prototype=h,h.constructor=O;var f="Symbol(test)"==String(p("test")),j=n(h.toString),g=n(h.valueOf),v=/^Symbol\((.*)\)[^)]+$/,y=n("".replace),P=n("".slice);u(h,"description",{configurable:!0,get:function(){var t=g(this),e=j(t);if(i(m,t))return"";var c=f?P(e,7,-1):y(e,v,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:O})}},e6dc:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),a={class:"table mt-4"},l=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"120"},"分類"),Object(o["h"])("th",null,"產品名稱"),Object(o["h"])("th",{width:"120"},"原價"),Object(o["h"])("th",{width:"120"},"售價"),Object(o["h"])("th",{width:"100"},"是否啟用"),Object(o["h"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},i={class:"text-right"},s={key:0,class:"text-success"},r={key:1,class:"text-muted"},d={class:"btn-group"},u=["onClick"],b=["onClick"];function p(t,e,c,p,h,m){var O=Object(o["E"])("Loading"),f=Object(o["E"])("PaginationVue"),j=Object(o["E"])("ProductsModal"),g=Object(o["E"])("DelModal");return Object(o["v"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(O,{active:h.isLoading},null,8,["active"]),Object(o["h"])("button",{class:"text-end btn btn-primary",type:"button",onClick:e[0]||(e[0]=Object(o["P"])((function(t){return m.openModal(!0)}),["prevent"]))},"新增產品 "),Object(o["h"])("table",a,[l,Object(o["h"])("tbody",null,[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["C"])(h.products,(function(e){return Object(o["v"])(),Object(o["g"])("tr",{key:e.id},[Object(o["h"])("td",null,Object(o["H"])(e.category),1),Object(o["h"])("td",null,Object(o["H"])(e.title),1),Object(o["h"])("td",n,Object(o["H"])(t.$filters.currency(e.origin_price)),1),Object(o["h"])("td",i,Object(o["H"])(t.$filters.currency(e.price)),1),Object(o["h"])("td",null,[e.is_enabled?(Object(o["v"])(),Object(o["g"])("span",s,"啟用")):(Object(o["v"])(),Object(o["g"])("span",r,"未啟用"))]),Object(o["h"])("td",null,[Object(o["h"])("div",d,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}},"編輯",8,u),Object(o["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDelModal(e)}},"刪除",8,b)])])])})),128))])]),Object(o["k"])(f,{pages:h.pagination,onEmitPages:m.getProducts},null,8,["pages","onEmitPages"]),Object(o["k"])(j,{ref:"productsModal",product:h.tempProduct,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["k"])(g,{ref:"delModal",product:h.tempProduct,onDelItem:m.delItem},null,8,["product","onDelItem"])],64)}var h=c("5530"),m=(c("99af"),c("a15b"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl"},f={class:"modal-content border-0"},j=Object(o["h"])("div",{class:"modal-header"},[Object(o["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"新增產品"),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"row"},y={class:"col-sm-4"},P=Object(o["h"])("div",{class:"mb-3"},[Object(o["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址"),Object(o["h"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),w={class:"mb-3"},x=Object(o["h"])("label",{for:"customFile",class:"form-label"},[Object(o["j"])("或 上傳圖片 "),Object(o["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),M=Object(o["i"])('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),k={class:"col-sm-8"},$={class:"mb-3"},U=Object(o["h"])("label",{for:"title",class:"form-label"},"標題",-1),V={class:"row gx-2"},_={class:"mb-3 col-md-6"},C=Object(o["h"])("label",{for:"category",class:"form-label"},"分類",-1),L={class:"mb-3 col-md-6"},D=Object(o["h"])("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},E={class:"mb-3 col-md-6"},F=Object(o["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),I={class:"mb-3 col-md-6"},S=Object(o["h"])("label",{for:"price",class:"form-label"},"售價",-1),H=Object(o["h"])("hr",null,null,-1),J={class:"mb-3"},N=Object(o["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},z=Object(o["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),A={class:"mb-3"},B={class:"form-check"},G=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Q={class:"modal-footer"},R=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function T(t,e,c,a,l,n){return Object(o["v"])(),Object(o["g"])("div",m,[Object(o["h"])("div",O,[Object(o["h"])("div",f,[j,Object(o["h"])("div",g,[Object(o["h"])("div",v,[Object(o["h"])("div",y,[P,Object(o["h"])("div",w,[x,Object(o["h"])("input",{type:"file",id:"customFile",class:"form-control",onChange:e[0]||(e[0]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)}),ref:"fileInput"},null,544)]),M]),Object(o["h"])("div",k,[Object(o["h"])("div",$,[U,Object(o["O"])(Object(o["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[o["K"],l.tempProduct.title]])]),Object(o["h"])("div",V,[Object(o["h"])("div",_,[C,Object(o["O"])(Object(o["h"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[2]||(e[2]=function(t){return l.tempProduct.category=t}),placeholder:"請輸入分類"},null,512),[[o["K"],l.tempProduct.category]])]),Object(o["h"])("div",L,[D,Object(o["O"])(Object(o["h"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[o["K"],l.tempProduct.unit]])])]),Object(o["h"])("div",K,[Object(o["h"])("div",E,[F,Object(o["O"])(Object(o["h"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[o["K"],l.tempProduct.origin_price]])]),Object(o["h"])("div",I,[S,Object(o["O"])(Object(o["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProduct.price=t}),placeholder:"請輸入售價"},null,512),[[o["K"],l.tempProduct.price]])])]),H,Object(o["h"])("div",J,[N,Object(o["O"])(Object(o["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[o["K"],l.tempProduct.description]])]),Object(o["h"])("div",q,[z,Object(o["O"])(Object(o["h"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[o["K"],l.tempProduct.content]])]),Object(o["h"])("div",A,[Object(o["h"])("div",B,[Object(o["O"])(Object(o["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["J"],l.tempProduct.is_enabled]]),G])])])])]),Object(o["h"])("div",Q,[R,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=function(e){return t.$emit("update-product",l.tempProduct)})},"確認")])])])],512)}var W=c("5191"),X={mixins:[W["a"]],props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/upload");this.$http.post(o,c).then((function(e){console.log(e.data),e.data.success?(t.tempProduct.imageUrl=e.data.imageUrl,console.log(e.data),console.log(t.tempProduct)):console.log(e.data.message)}))}}},Y=c("6b0d"),Z=c.n(Y);const tt=Z()(X,[["render",T]]);var et=tt,ct=c("6ff1"),ot=c("1799"),at={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductsModal:et,DelModal:ct["a"],PaginationVue:ot["a"]},inject:["emitter"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/products/?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.isLoading=!1,console.log(c),e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination,console.log(t.products))}))},openModal:function(t,e){this.isNew=t,this.tempProduct=t?{}:Object(h["a"])({},e),this.$refs.productsModal.showModal()},updateProduct:function(t){var e=this;this.tempProduct=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/product/").concat(t.id),o="put");var a=this.$refs.productsModal;this.isLoading=!0,this.$http[o](c,{data:this.tempProduct}).then((function(t){e.isLoading=!1,a.hideModal(),t.data.success?(e.getProducts(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelModal:function(t){this.tempProduct=Object(h["a"])({},t),this.$refs.delModal.showModal()},delItem:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("funtonw-api","/admin/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(e){t.$refs.delModal.hideModal(),e.data.success?(t.getProducts(),t.emitter.emit("push-message",{style:"success",title:"刪除成功"})):t.emitter.emit("push-message",{style:"danger",title:"刪除失敗",content:e.data.message})}))}},created:function(){this.getProducts()}};const lt=Z()(at,[["render",p]]);e["default"]=lt}}]);
//# sourceMappingURL=chunk-5ee012f4.2babea70.js.map