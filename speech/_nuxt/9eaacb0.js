(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{246:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("5f2606a4",content,!0,{sourceMap:!1})},247:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("8272cf00",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";n(246)},249:function(t,e,n){var o=n(52)(!1);o.push([t.i,".sampletext-mainbox[data-v-a4ab2e7c]{padding:1rem 0}td[data-v-a4ab2e7c]{width:50%;text-align:center}",""]),t.exports=o},250:function(t,e,n){"use strict";n.r(e);var o={props:{color:String},watch:{tete:function(){this.sendStringToParent(this.textSample[this.tete])}},data:function(){return{tete:0,textSample:["日本語でのスピーチを行う場合、話す速度として適切な文章量は、一分間に300文字程度だといわれています。\nまた、句点では１秒から２秒程度の間を取ることが好ましいとされています。\nこの例文はおおよそ150文字ですから、これを30秒程度かけて音読するくらいの速さが、適切なスピーチ速度だといえるでしょう。","文章を書くときは、一文をなるべく短くするほうが好ましい、と言われています。文を短くすると、単語同士の関係が簡潔になり、内容が理解しやすくなります。目安として、一文の長さの平均は４０文字前後が好ましいとされています。\nもちろん、長くても理解しやすいよう書かれた文も、世の中にはたくさん存在します。実際、文豪が残した名作の多くは、現代文と比較して一文が長い傾向にあります。ですがこれは、文豪の技量があってのことでしょう。長くても理解しやすい一文を書くよりも、短い文を書くほうが、はるかに簡単です。\nスピーチをする際も、一文一文を短く区切ることを意識すれば、聞き手に理解してもらいやすくなるかもしれません。",""],historyText:""}},methods:{sendStringToParent:function(text){this.$emit("getString",text)},saveHistory:function(text){localStorage.setItem("historyText",text)},loadHistory:function(){this.$set(this.textSample,2,this.historyText)}},mounted:function(){localStorage.getItem("historyText")&&(this.historyText=localStorage.getItem("historyText")),this.sendStringToParent(this.textSample[this.tete])}},r=(n(248),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sampletext-mainbox"},[n("b-tabs",{attrs:{"content-class":"mt-3",fill:""},model:{value:t.tete,callback:function(e){t.tete=e},expression:"tete"}},[n("b-tab",{attrs:{title:"30秒",active:""}}),t._v(" "),n("b-tab",{attrs:{title:"60秒"}}),t._v(" "),n("b-tab",{attrs:{title:"カスタム"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.historyText,expression:"historyText !== ''"}]},[n("b-btn",{attrs:{disabled:t.historyText===t.textSample[2]},on:{click:t.loadHistory}},[t._v("\n          前回の入力を復元する\n        ")])],1)])],1),t._v(" "),n("b-textarea",{style:{"background-color":t.color},attrs:{rows:"7",disabled:2!==t.tete,placeholder:"ここに好きな文字を入力してください。"},on:{change:function(e){t.saveHistory(t.textSample[2]),t.sendStringToParent(t.textSample[2])}},model:{value:t.textSample[t.tete],callback:function(e){t.$set(t.textSample,t.tete,e)},expression:"textSample[tete]"}}),t._v(" "),n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",[t._v("文字数："+t._s(t.textSample[t.tete].length)+"文字")]),t._v(" "),n("td",[t._v("読み上げ目安："+t._s(t.textSample[t.tete].length/5)+"秒")])])])])],1)}),[],!1,null,"a4ab2e7c",null);e.default=component.exports},251:function(t,e,n){"use strict";n(247)},252:function(t,e,n){var o=n(52)(!1);o.push([t.i,"td[data-v-df4f6870]{width:33%;padding-left:1rem;text-align:left}.btn-box[data-v-df4f6870]{text-align:center;margin:1rem}",""]),t.exports=o},254:function(t,e,n){"use strict";n.r(e);n(31);var o={props:{canFlag:Boolean},data:function(){return{results:[{text:"*ここに入力済みの文が表示されます*"}],count:0,startTime:null,time:0,text:"",timer:null,recognition:null,childText:""}},methods:{getString:function(t){this.childText=t},getColor:function(t){return this.canFlag&&this.time>10?"rgb(".concat(220+50*(t-5),",220,220)"):"rgb(220,220,220)"},startRecognation:function(){var t=this;this.startTime=new Date,this.timer=setInterval((function(){t.time=t.nowTime(t.startTime)}),10),this.results=[],this.count=0,this.text="",this.canFlag&&this.recognition.start()},stopRecognation:function(){this.canFlag&&this.recognition.stop(),clearInterval(this.timer),this.timer=null,this.text="お疲れさまでした",this.canFlag||(this.count=this.childText.length)},nowTime:function(time){return Math.round((new Date-time.getTime())/10)/100}},mounted:function(){var t=this;window.SpeechRecognition=webkitSpeechRecognition||SpeechRecognition,this.recognition=new SpeechRecognition,this.recognition.lang="ja-JP",this.recognition.interimResults=!0,this.recognition.continuous=!0;var e=0,n=null;this.recognition.onresult=function(o){n||(n=new Date);for(var i=o.resultIndex;i<o.results.length;i++){var r=o.results[i][0].transcript;if(t.count=e+r.length,o.results[i].isFinal){var l={text:r,time:Math.round((new Date-n)/10)/100+"秒"};t.results.push(l),n=null,e+=r.length}else t.text=r}}}},r=(n(251),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("SampleText",{attrs:{color:t.getColor(Math.round(t.count/t.time*100)/100)},on:{getString:t.getString}}),t._v(" "),n("div",{staticClass:"btn-box"},[n("b-button",{attrs:{disabled:null!==t.timer},on:{click:function(e){return t.startRecognation()}}},[t._v("開始")]),t._v(" "),n("b-button",{attrs:{disabled:!t.timer},on:{click:function(e){return t.stopRecognation()}}},[t._v("終了")])],1),t._v(" "),t.canFlag?n("div",[n("table",{staticClass:"table"},[n("tr",[n("td",{attrs:{colspan:"3"}},[n("div",{staticStyle:{color:"gray"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:0===t.text.length,expression:"text.length === 0"}]},[t._v("*ここに現在の入力が表示されます*")]),t._v(t._s(t.text)+"\n            ")])])]),t._v(" "),n("tr",[n("td",[t._v("秒速"+t._s(Math.round(t.count/t.time*100)/100)+"文字")]),t._v(" "),n("td",[t._v("読み上げ済："+t._s(t.count)+"文字")]),t._v(" "),n("td",[t._v("経過時間："+t._s(t.time)+"秒")])])]),t._v(" "),n("div",[n("b-table",{attrs:{striped:"",hover:"",items:t.results,fields:["text","time"]}})],1)]):n("div",[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",[t._v("経過時間："+t._s(t.time)+"秒")]),t._v(" "),0!==t.count?n("td",[t._v("\n              秒速"+t._s(Math.round(t.count/t.time*100)/100)+"文字\n            ")]):n("td",[t._v("健闘を祈ります")])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tbody",[n("th",{attrs:{colspan:"2"}},[t._v("スピーチ速度目安")]),t._v(" "),n("tr",[n("td",[t._v("秒速~3文字")]),n("td",[t._v("ゆっくり")])]),t._v(" "),n("tr",[n("td",[t._v("秒速3~4.5文字")]),n("td",[t._v("すこしゆっくり")])]),t._v(" "),n("tr",[n("td",[t._v("秒速4.5~5.5文字")]),n("td",[t._v("適切")])]),t._v(" "),n("tr",[n("td",[t._v("秒速5.5~7文字")]),n("td",[t._v("すこし早口")])]),t._v(" "),n("tr",[n("td",[t._v("秒速7文字~")]),n("td",[t._v("早口")])])])])}],!1,null,"df4f6870",null);e.default=component.exports;installComponents(component,{SampleText:n(250).default})}}]);