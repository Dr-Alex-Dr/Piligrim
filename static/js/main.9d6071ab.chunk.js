(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports={container:"Home_container__2xIAJ",image:"Home_image__2KM-5"}},17:function(e,a,t){e.exports={TransactionsContainer:"Transactions_TransactionsContainer__3MHg5"}},18:function(e,a,t){e.exports=t(27)},27:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(13),m=t.n(l),r=t(9),c=t(2),o=t(8),i=t.n(o);var u=e=>{const{img:a,name:t,balance:n}=e;return s.a.createElement("div",{className:i.a.Bonus},s.a.createElement("div",{className:i.a.BonusImg},s.a.createElement("img",{src:a})),s.a.createElement("div",{className:i.a.BonusWrapper},s.a.createElement("p",{className:i.a.BonusName},t),s.a.createElement("p",{className:i.a.BonusBalace},n,"\u20bd")))},E=t(4),p=t.n(E),_=t(14),d=t.n(_),B=t(6);var g=e=>{let{bonusList:a}=e;const[t,l]=Object(n.useState)(!1);return s.a.createElement("div",{className:p.a.container},s.a.createElement("div",{className:d()(p.a.OtherBonusesWrapper,{[p.a.open]:t}),onClick:()=>{l(!0)}},s.a.createElement("div",{className:p.a.OtherBonusesImages},s.a.createElement("div",{className:p.a.OtherBonusesImageFirt},s.a.createElement("img",{className:p.a.Image,src:a[0].img,alt:a[0].name})),s.a.createElement("div",{className:p.a.OtherBonusesImageSecond},s.a.createElement("img",{className:p.a.Image,src:a[1].img,alt:a[1].name}))),s.a.createElement("p",{className:p.a.OtherBonusesTitle},"\u0414\u0440\u0443\u0433\u0438\u0435 \u0430\u043a\u0442\u0438\u0432\u044b"),s.a.createElement(B.c,{className:p.a.arrow})),t&&a.map((e,a)=>s.a.createElement(u,{key:a,img:e.img,name:e.name,balance:e.balance})))},v=t(7),I=t.n(v),h=t(16),L=t(0),N=t(15);var M=()=>{const e=Object(N.a)(),a=()=>e({message:"popup"});return s.a.createElement("div",{className:I.a.AppCommands},s.a.createElement("ul",{className:I.a.AppCommandsList},s.a.createElement("li",{className:I.a.AppCommandsListItem,onClick:a},s.a.createElement(L.b.Provider,{value:{color:"#6AB2F2",size:"27"}},s.a.createElement("div",null,s.a.createElement(B.b,null))),s.a.createElement("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),s.a.createElement("li",{className:I.a.AppCommandsListItem,onClick:a},s.a.createElement(L.b.Provider,{value:{color:"#6AB2F2",size:"27"}},s.a.createElement("div",null,s.a.createElement(B.a,null))),s.a.createElement("p",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c")),s.a.createElement("li",{className:I.a.AppCommandsListItem,onClick:a},s.a.createElement(L.b.Provider,{value:{color:"#6AB2F2",size:"27"}},s.a.createElement("div",null,s.a.createElement(B.b,null))),s.a.createElement("p",null,"\u041e\u0431\u043c\u0435\u043d\u044f\u0442\u044c")),s.a.createElement("li",{className:I.a.AppCommandsListItem,onClick:a},s.a.createElement(L.b.Provider,{value:{color:"#6AB2F2",size:"27"}},s.a.createElement("div",null,s.a.createElement(h.a,null))),s.a.createElement("p",null,"\u0421\u043f\u0438\u0441\u0430\u0442\u044c"))))},O=t(5),C=t.n(O);var b=function(){return s.a.createElement("div",{className:C.a.Menu},s.a.createElement("ul",{className:C.a.MenuList},s.a.createElement("li",{className:C.a.MenuListItem},s.a.createElement(r.b,{to:"/",className:C.a.MunuListItemLink},s.a.createElement("img",{src:"./assets/icons/credit-card.png"}),s.a.createElement("p",null,"\u041c\u043e\u044f \u043a\u0430\u0440\u0442\u0430"))),s.a.createElement("li",{className:C.a.MenuListItem},s.a.createElement(r.b,{to:"/map",className:C.a.MunuListItemLink},s.a.createElement("img",{src:"./assets/icons/location.png"}),s.a.createElement("p",null,"\u041a\u0430\u0440\u0442\u0430 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"))),s.a.createElement("li",{className:C.a.MenuListItem},s.a.createElement("a",{className:C.a.MunuListItemLink,href:"#"},s.a.createElement("img",{src:"./assets/icons/promotions.png"}),s.a.createElement("p",null,"\u0410\u043a\u0446\u0438\u0438"))),s.a.createElement("li",{className:C.a.MenuListItem},s.a.createElement("a",{className:C.a.MunuListItemLink,href:"#"},s.a.createElement("img",{src:"./assets/icons/profile.png"}),s.a.createElement("p",null,"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")))))},A=t(17),k=t.n(A);var y=e=>{let{HistoryList:a}=e;return s.a.createElement("div",{className:k.a.TransactionsContainer},s.a.createElement("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 "),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),s.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),s.a.createElement("th",null,"\u0422\u0438\u043f"))),s.a.createElement("tbody",null,a.map((e,a)=>s.a.createElement("tr",{key:a},s.a.createElement("td",null,e.date),s.a.createElement("td",null,e.quantity),s.a.createElement("td",null,e.type))))))},f=t(11),x=t.n(f);var w=()=>s.a.createElement("div",{className:x.a.container},s.a.createElement("img",{className:x.a.image,src:"backpiligrim.jpg"}),s.a.createElement(M,null),s.a.createElement("div",null,s.a.createElement(u,{img:"1.png",name:"Piligrim Bonus",balance:"3,4"})),s.a.createElement(g,{bonusList:[{img:"2.png",name:"Piligrim Bonus",balance:"3,4"},{img:"3.png",name:"Piligrim Bonus",balance:"3,4"}]}),s.a.createElement(y,{HistoryList:[{date:"2023-01-01",quantity:"10",type:"RECEIVED"},{date:"2023-01-02",quantity:"15",type:"RECEIVED"},{date:"2023-01-03",quantity:"20",type:"RECEIVED"}]}),s.a.createElement(b,null));var F=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"\u041a\u0430\u0440\u0442\u0430 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"));var S=()=>s.a.createElement(r.a,null,s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"*",element:s.a.createElement(w,null)}),s.a.createElement(c.a,{path:"/map",element:s.a.createElement(F,null)})));t(26);m.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)))},4:function(e,a,t){e.exports={OtherBonusesImages:"OtherBonuses_OtherBonusesImages__3Rke1",Image:"OtherBonuses_Image__1H_ce",OtherBonusesImageFirt:"OtherBonuses_OtherBonusesImageFirt__CHO5b",OtherBonusesImageSecond:"OtherBonuses_OtherBonusesImageSecond__2OMHv",OtherBonusesWrapper:"OtherBonuses_OtherBonusesWrapper__20mWs","css-o4b71y-MuiAccordionSummary-content":"OtherBonuses_css-o4b71y-MuiAccordionSummary-content__2kFO6","Mui-expanded":"OtherBonuses_Mui-expanded__F9jDs","css-15v22id-MuiAccordionDetails-root":"OtherBonuses_css-15v22id-MuiAccordionDetails-root__2MwZC",OtherBonusesTitle:"OtherBonuses_OtherBonusesTitle__1zrcf",open:"OtherBonuses_open__739L3",arrow:"OtherBonuses_arrow__1q5wx",container:"OtherBonuses_container__SrVQK"}},5:function(e,a,t){e.exports={Menu:"Menu_Menu__2VSJ9",MenuList:"Menu_MenuList__3Lrui",MenuListItem:"Menu_MenuListItem__3eval",MunuListItemLink:"Menu_MunuListItemLink__1JtpX"}},7:function(e,a,t){e.exports={AppCommands:"Commands_AppCommands__Ct47x",AppCommandsList:"Commands_AppCommandsList__78M-G",AppCommandsListItem:"Commands_AppCommandsListItem__2vGVZ"}},8:function(e,a,t){e.exports={Bonus:"Bonus_Bonus__DQJCp",BonusWrapper:"Bonus_BonusWrapper__2yGKS",BonusImg:"Bonus_BonusImg__2XQ8H",BonusName:"Bonus_BonusName__31U3P",BonusBalace:"Bonus_BonusBalace__2khBK"}}},[[18,1,2]]]);
//# sourceMappingURL=main.9d6071ab.chunk.js.map