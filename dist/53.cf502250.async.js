(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"+wox":function(e,a,t){"use strict";var l=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("g9YV");var d=l(t("wCAj"));t("Pwec");var r=l(t("CtXQ"));t("5Dmo");var s=l(t("3S7+"));t("jCWc");var n=l(t("kPKH"));t("14J3");var u=l(t("BMrR"));t("IzEo");var i=l(t("bx4M")),o=t("Y2fQ"),f=l(t("q1tI")),c=l(t("ZhIB")),m=t("d+nf"),g=l(t("o0dW")),y=l(t("nWe9")),h=l(t("jWm5")),E=[{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return f.default.createElement("a",{href:"/"},e)}},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:h.default.alignRight},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return f.default.createElement(y.default,{flag:1===a.status?"down":"up"},f.default.createElement("span",{style:{marginRight:4}},e,"%"))}}],p=function(e){var a=e.loading,t=e.visitData2,l=e.searchData,y=e.dropdownGroup;return f.default.createElement(i.default,{loading:a,bordered:!1,title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:y,style:{height:"100%"}},f.default.createElement(u.default,{gutter:68,type:"flex"},f.default.createElement(n.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.analysis.search-users",defaultMessage:"search users"}),f.default.createElement(s.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(r.default,{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:(0,c.default)(12321).format("0,0"),status:"up",subTotal:17.1}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t})),f.default.createElement(n.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),f.default.createElement(s.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(r.default,{style:{marginLeft:8},type:"info-circle-o"}))),total:2.7,status:"down",subTotal:26.2,gap:8}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t}))),f.default.createElement(d.default,{rowKey:function(e){return e.index},size:"small",columns:E,dataSource:l,pagination:{style:{marginBottom:0},pageSize:5}}))},b=p;a.default=b}}]);