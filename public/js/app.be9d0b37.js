(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0fd4":function(t,e,s){},"33ab":function(t,e,s){"use strict";s("0fd4")},"3bad":function(t,e,s){},"499b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("quiz")],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[this.$store.state.finished?s("finish-exam"):t._e(),t.isLoading?s("loader"):t._e(),t.questions[t.questionIndex]?s("div",{staticClass:"app"},[s("AppHeader",{attrs:{userAnswerKeys:t.userAnswerKeys}}),s("div",{staticClass:"col-md-12 row mt-5 question"},[s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[t._v("Kalan Soru: "+t._s(t.questions.length-t.questionIndex))]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar",style:{width:t.progressValue+"%"},attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(parseInt(t.progressValue))+"% ")])])])]),s("hr"),s("div",{staticClass:"col-md-12 col-sm-12 text-start"},[t.questions[t.questionIndex].questionImage?s("img",{staticClass:"img-thumbnail",attrs:{src:"https://ehliyetsinavihazirlik.com/images/deneme4/18.png",height:"100"}}):t._e(),s("p",[t._v(t._s(t.questions[t.questionIndex].title))])])]),s("div",{staticClass:"col-md-6 row"},[s("div",{staticClass:"col-md-12"},[!1===t.questions[t.questionIndex].choiceImage?s("ul",{staticClass:"list-group answer"},t._l(t.questions[t.questionIndex].choices,(function(e,n){return s("li",{key:n,staticClass:"list-group-item",class:{"is-selected":t.userAnswer[t.questionIndex]===n},on:{click:function(s){return t.selectAnswer(e.id,t.questions[t.questionIndex].id,n)}}},[t._v(t._s(t._f("charIndex")(n))+"-) "+t._s(e.title)+" ")])})),0):s("ul",{staticClass:"list-group answer"},t._l(t.questions[t.questionIndex].choices,(function(e,n){return s("li",{key:n,staticClass:"list-group-item",class:{"is-selected":t.userAnswer[t.questionIndex]===n},on:{click:function(s){return t.selectAnswer(e.id,t.questions[t.questionIndex].id,n)}}},[t._v(t._s(t._f("charIndex")(n))+"-) "),s("img",{staticClass:"img-thumbnail",attrs:{src:e.path}})])})),0)])])]),s("div",{staticClass:"col-12 mt-5 row app-footer"},[s("div",{staticClass:"mobile d-md-none mb-3"},[s("button",{staticClass:"btn btn-danger prev col-sm-6",on:{click:t.prev}},[t._v("Önceki Soru")]),s("button",{staticClass:"btn btn-danger next col-sm-6 ",on:{click:t.next}},[t._v("Sonraki Soru")])]),s("div",{staticClass:"col-md-2 d-none d-md-block"},[s("button",{staticClass:"btn btn-danger prev",on:{click:t.prev}},[t._v("Önceki Soru")])]),s("div",{staticClass:"col-md-8 answer-keys"},t._l(t.questions,(function(e,n){return s("button",{key:n,staticClass:"border border-secondary",class:{"is-selected-answer-keys":t.questionIndex===n},on:{click:function(e){return t.selectQuestion(n)}}},[t._v(" "+t._s(n+1)+" - "+t._s(t._f("charIndex")(t.userAnswer[n]))+" ")])})),0),s("div",{staticClass:"col-md-2 d-none d-md-block"},[s("button",{staticClass:"btn btn-danger next",on:{click:t.next}},[t._v("Sonraki Soru")])])])],1):t._e()],1)},o=[],c=s("5530"),l=(s("cb29"),s("159b"),s("2f62")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12 row mt-3 app-header"},[s("div",{staticClass:"col-sm-12 d-md-none d-lg-none d-xl-none d-xxl-none close-exam"},[t._v(" Sınav Türü "),s("br"),t._m(0),s("button",{staticClass:"btn col-12 col-md-12 col-sm-12 close-btn",attrs:{"data-bs-toggle":"modal","data-bs-target":"#closeExamModalM"}},[t._v("Sınavdan Çık ")]),s("div",{staticClass:"modal fade",attrs:{id:"closeExamModalM",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body mt-5 text-dark"},[t._v(" Verileriniz kaydedilmedi yine de çıkmak istiyor musunuz? ")]),s("div",{staticClass:"modal-footer mt-5"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("İptal")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.closeExam}},[t._v("Sınavdan Çık")])])])])])]),s("div",{staticClass:"col-md-4 row member"},[t._m(1),s("div",{staticClass:"col-md-6 col-sm-6 col-6 member-details"},[s("p",{staticClass:"text-start"},[t._v(" Sayın : "+t._s(this.$store.state.user.name_surname)),s("br"),t._v(" E-mail : "+t._s(this.$store.state.user.email)+" ")])])]),s("div",{staticClass:"col-md-4 col-sm-12 close-exam d-none d-md-block d-lg-block d-xl-block d-xxl-block"},[t._v(" Sınav Türü "),s("br"),t._m(2),s("button",{staticClass:"btn col-md-12 col-sm-12 close-btn",attrs:{"data-bs-toggle":"modal","data-bs-target":"#closeExamModal"}},[t._v("Sınavdan Çık ")]),s("div",{staticClass:"modal fade",attrs:{id:"closeExamModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body mt-5 text-dark"},[t._v(" Verileriniz kaydedilmedi yine de çıkmak istiyor musunuz? ")]),s("div",{staticClass:"modal-footer mt-5"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("İptal")]),s("button",{staticClass:"btn btn-primary",class:{disabled:!0===this.$store.state.finished},attrs:{type:"button"},on:{click:t.closeExam}},[t._v("Sınavdan Çık")])])])])])]),s("div",{staticClass:"col-md-4 row close-exam-timer"},[s("div",{staticClass:"col m-auto"},[s("timer",{attrs:{time:"1500",userAnswerKeys:this.userAnswerKeys}})],1),s("div",{staticClass:"col m-auto"},[s("button",{staticClass:"btn btn-danger p-3",class:{disabled:!0===this.$store.state.finished},on:{click:function(e){return t.finishExam()}}},[t._v(" Sınavı Bitir ")])])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("b",[t._v("MTSK TEORİK E-SINAV(2021)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 col-sm-6 col-6 member-profile"},[s("i",{staticClass:"bi bi-person-circle text-dark"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("b",[t._v("MTSK TEORİK E-SINAV(2021)")])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer col"},[s("span",{staticClass:" align-middle text-center"},[t._v(t._s(t.timeDisplay))])])},f=[],h=(s("fb6a"),s("99af"),s("bc3a")),b=s.n(h),p=window.location.protocol+"//"+window.location.hostname+"/user",v={fetchQuestion:function(){var t=window.location.pathname;switch(t){case"/user/class-exam":return b.a.get(p+"/class-exam/fetchQuestion");case"/user/custom-exam":return b.a.get(p+"/custom-exam/fetchQuestion");default:return b.a.get(p+"/normal-exam/fetchQuestion")}},fetchUserAndTest:function(){return b.a.get(p+"/fetchUserAndTest")},setUserAnswer:function(t,e,s){b.a.post(p+"/postUserAnswer",{testId:t,userId:e,userAnswerKeys:s}).then((function(t){console.log(t)}))},setCloseExam:function(t){b.a.post(p+"/postCloseExam",{testId:t}),window.location.href=p+"/redirect"}},x={name:"Timer",props:{time:String,userAnswerKeys:Array},data:function(){return{currentTimeSeconds:this.time,interval:null}},created:function(){var t=this,e=setInterval((function(){t.currentTimeSeconds--,(t.currentTimeSeconds<=0||!0===t.$store.state.finished)&&(clearInterval(e),t.$store.commit("setFinished"))}),1e3)},computed:{timeDisplay:function(){var t=parseInt(this.currentTimeSeconds/60),e=this.currentTimeSeconds%60,s=("0"+t).slice(-2),n=("0"+e).slice(-2);return"".concat(s," : ").concat(n)}},watch:{currentTimeSeconds:function(){0==this.currentTimeSeconds&&(v.setUserAnswer(this.$store.state.test,this.$store.state.user.id,this.userAnswerKeys),this.$store.commit("setFinished"))}}},_=x,g=(s("ef7b"),s("2877")),C=Object(g["a"])(_,m,f,!1,null,"bf092754",null),w=C.exports,y={name:"AppHeader",props:{userAnswerKeys:Array},components:{Timer:w},methods:{closeExam:function(){v.setCloseExam(this.$store.state.test),this.$store.commit("setFinished")},finishExam:function(){v.setUserAnswer(this.$store.state.test,this.$store.state.user.id,this.userAnswerKeys),this.$store.commit("setFinished")}},created:function(){this.$store.dispatch("fetchUserAndTest")}},q=y,k=(s("33ab"),Object(g["a"])(q,u,d,!1,null,"4e5f5c32",null)),I=k.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",{staticClass:"loader"})},S=[],$=(s("74ae"),{}),E=Object(g["a"])($,A,S,!1,null,null,null),T=E.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade show",staticStyle:{display:"block"},attrs:{tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLiveLabel"}},[t._v("Sınav")])]),s("div",{staticClass:"modal-body"},[s("i",{staticClass:"bi bi-check-circle text-success fs-1"}),s("p",[t._v("Sınavınız bitmiştir")])]),s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"btn btn-primary col-md-12",attrs:{href:"/user/result"}},[t._v("Sonuçları Görmek İçin Tıklayınız")])])])])])}],K={name:"FinishExam"},M=K,Q=Object(g["a"])(M,O,j,!1,null,"7995e465",null),U=Q.exports,z={name:"Quiz",data:function(){return{isLoading:!0,progressValue:0,userAnswer:"",userAnswerKeys:[],questionIndex:0}},components:{Loader:T,AppHeader:I,FinishExam:U},filters:{charIndex:function(t){return null===t?"":String.fromCharCode(97+t).toUpperCase()}},computed:Object(c["a"])({},Object(l["b"])(["questions"])),created:function(){var t=this;this.$store.dispatch("fetchQuestion").then((function(){t.isLoading=!1,t.userAnswer=Array(t.$store.state.questions.length).fill(null),t.$store.state.questions.forEach((function(e,s){n["a"].set(t.userAnswerKeys,s,{questionId:e.id,choiceId:null})}))}))},methods:{selectAnswer:function(t,e,s){this.$store.state.finished||(n["a"].set(this.userAnswer,this.questionIndex,s),n["a"].set(this.userAnswerKeys,this.questionIndex,{questionId:e,choiceId:t}))},prev:function(){this.questions.length>0&&this.questionIndex>0&&this.questionIndex--,this.progressValue=this.questionIndex/this.questions.length*100},next:function(){this.questionIndex<this.questions.length-1&&this.questionIndex++,this.progressValue=this.questionIndex/this.questions.length*100},selectQuestion:function(t){this.questionIndex=t,this.progressValue=this.questionIndex/this.questions.length*100}}},V=z,L=(s("fdd7"),Object(g["a"])(V,r,o,!1,null,"695cc04b",null)),F=L.exports,P={name:"App",components:{Quiz:F}},R=P,H=(s("5c0b"),Object(g["a"])(R,i,a,!1,null,null,null)),D=H.exports,J=s("1da1");s("96cf");n["a"].use(l["a"]);var N=new l["a"].Store({state:{questions:[],user:[],test:null,finished:!1},mutations:{setQuestion:function(t,e){t.questions=e},setFinished:function(t){t.finished=!0},setUserAndTest:function(t,e){t.user=e.user,t.test=e.test}},getters:{questions:function(t){return t.questions}},actions:{fetchQuestion:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.fetchQuestion().then((function(e){t.commit("setQuestion",e.data.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchUserAndTest:function(t){return Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.fetchUserAndTest().then((function(e){t.commit("setUserAndTest",e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},modules:{}});s("21b6"),s("01d7");n["a"].config.productionTip=!1,new n["a"]({store:N,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"74ae":function(t,e,s){"use strict";s("b4ad")},"9c0c":function(t,e,s){},b4ad:function(t,e,s){},ef7b:function(t,e,s){"use strict";s("499b")},fdd7:function(t,e,s){"use strict";s("3bad")}});
//# sourceMappingURL=app.be9d0b37.js.map