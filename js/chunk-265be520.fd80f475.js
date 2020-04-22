(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265be520"],{"2bdf":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage-ens-container"},[n("h3",[t._v(t._s(t.$t("ens.manage"))+" "+t._s(t.domainName))]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isController,expression:"!isController"}],staticClass:"set-controller-container"},[n("i18n",{attrs:{path:"ens.controller-text",tag:"div"}},[n("b",{attrs:{slot:"domain"},slot:"domain"},[t._v(t._s(t.domainName))]),n("b",{attrs:{slot:"addr"},slot:"addr"},[t._v(t._s(t.account.address))]),n("br")]),n("div",{staticClass:"set-controller-submit"},[n("button",{on:{click:function(e){return t.setController()}}},[t._v(t._s(t.$t("ens.set-controller")))])])],1),n("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"},{name:"b-toggle",rawName:"v-b-toggle.multicoinsec",modifiers:{multicoinsec:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.multi-coin")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"multicoinsec",visible:t.resolverMultiCoinSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t.selectedCurrency}},t._l(Object.keys(t.supportedCoins),(function(e,a){return n("b-dd-item",{key:e+a,on:{click:function(n){return t.addCurrencyInput(e)}}},[t._v(t._s(e))])})),1)],1),t._l(t.currencyInputs,(function(e,a){return n("div",{key:a.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(a)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:e.name+" address",type:"text",name:"updateResolver"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("i",{class:["validity-indication fa",t.isInvalidAddress(e)?"error fa-times-circle-o":"valid fa-check-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeCoinInput(a)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:[t.isValidAddresses?"":"disabled",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendCurrency(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.textrecords",modifiers:{textrecords:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.txt-record")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"textrecords",visible:!t.resolverMultiCoinSupport&&t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t._f("capitalize")(t.selectedText)}},t._l(Object.keys(t.txtRecords),(function(e,a){return n("b-dd-item",{key:e+a,on:{click:function(n){return t.addTxtInput(e)}}},[t._v(t._s(t._f("capitalize")(e)))])})),1)],1),t._l(t.txtRecordInputs,(function(e,a){return n("div",{key:a.id},[n("div",{staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(t._f("capitalize")(a))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.txtRecordInputs[a],expression:"txtRecordInputs[k]"},{name:"validate",rawName:"v-validate",value:t.getInputType(a),expression:"getInputType(k)"}],attrs:{placeholder:t._f("capitalize")(a),name:a,type:"text"},domProps:{value:t.txtRecordInputs[a]},on:{input:function(e){e.target.composing||t.$set(t.txtRecordInputs,a,e.target.value)}}}),n("i",{class:["validity-indication fa",t.txtRecordInputs[a]&&""!==t.txtRecordInputs[a]&&!t.errors.hasOwnProperty(""+a)&&t.validateTxtValue(a)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeTxtInput(a)}}})]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.validateTxtValue(a),expression:"!validateTxtValue(k)"}],staticClass:"text-error"},[t._v(" "+t._s(t.$t("ens.text-record-error",{value:t.txtRecordInputs[a],name:a}))+" ")])])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:[t.validTextRecords?"disabled":"",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendTxtRecs(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.transferens",modifiers:{transferens:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.transfer-domain")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"transferens",visible:!t.resolverMultiCoinSupport&&!t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-form"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"transferEns"}},[t._v(t._s(t.$t("ens.transfer-to"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:t.transferTo},on:{input:function(e){e.target.composing||(t.transferTo=e.target.value)}}})]),n("div",{staticClass:"submit-container"},[n("button",{class:[t.isAddress(t.transferTo)?"":"disabled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.transferDomain(t.transferTo)}}},[t._v(" "+t._s(t.$t("ens.transfer"))+" ")])])])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],r=(n("99af"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b"),n("f3f3")),i=n("539d"),o=n("b7d3"),c=n("2f62"),u=n("ce96"),l=n("1131"),d=n.n(l),p=n("3c35f"),f={components:{"interface-bottom-text":i["a"]},props:{domainName:{type:String,default:""},setMultiCoin:{type:Function,default:function(){}},setRecord:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},tld:{type:String,default:""},resolverMultiCoinSupport:{type:Boolean,default:!1},resolverTxtSupport:{type:Boolean,default:!1},supportedCoins:{type:Object,default:function(){}},setController:{type:Function,default:function(){}},txtRecords:{type:Object,default:function(){}},isController:{type:Boolean,default:!1}},data:function(){var t=this.copySupported(),e={},n={};for(var a in p["a"].forEach((function(t){n[t.name]=t.validate})),t)t[a].hasOwnProperty("value")&&""===t[a].value&&delete t[a];for(var s in this.txtRecords)""!==this.txtRecords[s]&&(e[s]=this.txtRecords[s]);return{transferTo:"",multiCoinSupport:!1,isAddress:o["a"],currencyInputs:t,selectedCurrency:"ETH",selectedText:"Email",hasError:!1,txtRecordInputs:e,txtValidators:n}},computed:Object(r["a"])({},Object(c["c"])("main",["web3","account"]),{isValidAddresses:function(){for(var t in this.currencyInputs){if(this.currencyInputs[t].id===this.currencyInputs.ETH.id&&""===this.currencyInputs[t].value)return!1;if(""!==this.currencyInputs[t].value&&!this.currencyInputs[t].validator.validate(this.currencyInputs[t].value))return!1}return!0},validTextRecords:function(){for(var t in this.txtRecordInputs)if(this.txtRecordInputs[t]&&""!==this.txtRecordInputs[t]&&!this.txtValidators[t](this.txtRecordInputs[t]))return!1;return!0}}),watch:{currencyInputs:{handler:function(t){this.currencyInputs=t},deep:!0},txtRecordInputs:{handler:function(t){this.txtRecordInputs=t},deep:!0}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")},methods:{isInvalidAddress:function(t){return t.id===this.supportedCoins.ETH.id&&""===t.value||""!==t.value&&!t.validator.validate(t.value)},getInputType:function(t){var e=p["a"].find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));switch(e.type){case"url":return"required|url:require_protocol";case"email":return"email|required";default:return"required"}},validateTxtValue:function(t){return this.txtValidators[t](this.txtRecordInputs[t])},copySupported:function(){var t=d.a._.map(this.supportedCoins,d.a._.clone),e={};return t.forEach((function(t){e[t.symbol]=t})),e},addCurrencyInput:function(t){this.selectedCurrency=t;var e=this.copySupported(),n=Object.assign({},this.currencyInputs);n[t]?u["e"].responseHandler("Currency ".concat(t," is already added for ").concat(this.domainName),u["e"].WARN):(n[t]=e[t],this.currencyInputs=n)},addTxtInput:function(t){this.selectedText=t;var e=Object.assign({},this.txtRecordInputs);e[t]?u["e"].responseHandler("Text Record ".concat(t," input is already added for ").concat(this.domainName),u["e"].WARN):(e[t]=this.txtRecordInputs[t],this.txtRecordInputs=e)},removeCoinInput:function(t){var e=Object.assign({},this.currencyInputs);e[t].value="",this.currencyInputs=e},removeTxtInput:function(t){var e=Object.assign({},this.txtRecordInputs);e[t]="",this.txtRecordInputs=e},checkAndSendTxtRecs:function(){if("."!==this.domainName){var t={},e=Object.assign({},this.txtRecordInputs),n=Object.assign({},this.txtRecords);Object.keys(n).forEach((function(a){e[a]&&n[a]!==e[a]&&(t[a]=e[a])})),Object.keys(t).length>0&&this.setRecord(t)}},checkAndSendCurrency:function(){if("."!==this.domainName){var t=[],e=Object.assign({},this.currencyInputs),n=Object.assign({},this.supportedCoins);Object.keys(n).forEach((function(a){e[a]&&n[a].value!==e[a].value&&t.push(e[a])})),t.length>0&&this.setMultiCoin(t)}}}},v=f,m=(n("f8a7"),n("2877")),h=Object(m["a"])(v,a,s,!1,null,"50e485e8",null),b=h.exports},"3c35f":function(t,e,n){"use strict";n("99af"),n("caad"),n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("2532");var a=n("7856"),s=(n("1276"),function(t){var e;return e=t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0],e=e.split(":")[0],e=e.split("?")[0],e}),r=function(t){if(!t)return"";var e=s(t),n=e.split("."),a=n.length;return a>2&&(e=n[a-2]+"."+n[a-1],2==n[a-2].length&&2==n[a-1].length&&(e=n[a-3]+"."+e)),e.toLowerCase()},i=function(t){var e=r(t),n=Object(a["a"])(e),s=new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);return s.test(n.toLowerCase())},o=function(t){var e=t.indexOf("@"),n=Object(a["a"])(t.substr(0,e)),s=Object(a["a"])(t.substr(e+1,t.length)),r=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/);return r.test("".concat(n,"@").concat(s).toLowerCase())},c=function(t){var e=Object(a["a"])(t);return"string"===typeof e},u=function(t){var e=t.indexOf("@"),n=Object(a["a"])(t.substr(e+1,t.length));return!!c(n)&&!n.includes("@")},l=[{name:"email",type:"email",validate:o},{name:"url",type:"url",validate:i},{name:"avatar",type:"url",validate:i},{name:"description",type:"string",validate:c},{name:"notice",type:"string",validate:c},{name:"keywords",type:"string",validate:c},{name:"vnd.twitter",type:"string",validate:u},{name:"vnd.github",type:"string",validate:u}];e["a"]=l},"67c8":function(t,e,n){},f8a7:function(t,e,n){"use strict";var a=n("67c8"),s=n.n(a);s.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-265be520.fd80f475.js.map