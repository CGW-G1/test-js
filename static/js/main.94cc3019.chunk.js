(this.webpackJsonptestingjs=this.webpackJsonptestingjs||[]).push([[0],{23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(16),r=n.n(s),o=(n(23),n(7)),i=n.n(o),l=n(17),u=n(5),p=n(18),d=n.n(p).a.create({baseURL:"https://voicerss-text-to-speech.p.rapidapi.com",headers:{"x-rapidapi-host":"voicerss-text-to-speech.p.rapidapi.com","x-rapidapi-key":"bd52c7831bmsh885f8cdd1f00f06p13ec79jsn09e6320cff58"}}),b=[{langv:"en-us",langtxt:"English"},{langv:"zh-cn",langtxt:"\u4e2d\u6587"},{langv:"ms-my",langtxt:"Melayu"},{langv:"ja-jp",langtxt:"\u65e5\u672c\u8a9e"},{langv:"ko-kr",langtxt:"\ud55c\uad6d\uc5b4"}],j=n(0);var h=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),o=r[0],p=r[1],h=Object(a.useState)("en-us"),x=Object(u.a)(h,2),g=x[0],f=x[1];function O(e){f(e.target.value)}function m(){return(m=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("Submitting text: ",n),console.log("Submitting lang:",g),""!==n){e.next=6;break}return alert("string empty!"),e.abrupt("return");case 6:if(!(n.length>49e3)){e.next=9;break}return alert("string too long!"),e.abrupt("return");case 9:return"52b16d4b4f1246ee800ea25d1b9fe536","MP3","8khz_8bit_mono",!0,e.next=15,d.get("/?key=".concat("52b16d4b4f1246ee800ea25d1b9fe536","&hl=").concat(g,"&c=").concat("MP3","&f=").concat("8khz_8bit_mono","&src=").concat(n,"&b64=").concat(true));case 15:if(200!==(a=e.sent).status){e.next=23;break}console.log("200 ok"),console.log("Response: ",a),console.log("Response.data: ",a.data),p(a.data),e.next=25;break;case 23:return console.log("error: ",a.status),e.abrupt("return");case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"canvass",children:Object(j.jsxs)("div",{className:"displayWindow2",children:[Object(j.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(j.jsx)("h3",{children:"Input text for speech return"}),Object(j.jsx)("h5",{children:"sample text for copy/paste"}),Object(j.jsx)("p",{children:"Testing 1 2 3, 50,000. This is a chair."}),Object(j.jsx)("p",{children:"\u65e9\u4e0a\u597d\uff0c\u4f60\u5403\u4e86\u5417? 1,500,454"}),Object(j.jsx)("p",{children:"selamat pagi, dah makan? 459"}),Object(j.jsx)("p",{children:"\u304a\u306f\u3088\u3046\u3054\u3056\u3044\u307e\u3059\u3001\u98df\u3079\u307e\u3057\u305f\u304b? 1,500"}),Object(j.jsx)("p",{children:"\uc88b\uc740 \uc544\uce68, \uba39\uc5c8\uc5b4? 9"}),Object(j.jsx)("textarea",{name:"audiotext",rows:"4",cols:"50",placeholder:"Punctuation/numerals ok.",onChange:function(e){c(e.target.value)}}),function(){var e=b.map((function(e,t){return Object(j.jsx)("option",{value:e.langv,children:e.langtxt},"".concat(e,"-").concat(t))}));return Object(j.jsx)("select",{id:"lang",name:"lang",defaultValue:"en-us",onChange:O,children:e})}(),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),""===o?Object(j.jsx)("p",{children:"no audio currently"}):"ERROR"===o.substring(0,5)?Object(j.jsxs)("p",{children:[o," Please contact admin"]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"have audio"}),Object(j.jsx)("audio",{id:"audioPlayer",src:o,autoPlay:"autoplay",children:"audio not supported"})]})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.94cc3019.chunk.js.map