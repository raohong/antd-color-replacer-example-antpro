(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{gR1M:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=n(a("wCAj"));a("/zsF");var d=n(a("PArb"));a("bP8k");var u=n(a("gFTJ"));a("IzEo");var i=n(a("bx4M")),o=n(a("2Taf")),c=n(a("vZ4D")),f=n(a("l4Ni")),s=n(a("ujKo")),m=n(a("MhPg"));a("Awhp");var p=n(a("KrTs")),g=l(a("q1tI")),y=a("y1Nh"),h=a("MuoO"),b=n(a("ktph")),E=function(e,t,a,l){var n,r=arguments.length,d=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,a,l);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(d=(r<3?n(d):r>3?n(t,a,d):n(t,a))||d);return r>3&&d&&Object.defineProperty(t,a,d),d},I=[{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5f53\u524d\u8fdb\u5ea6",dataIndex:"rate",key:"rate"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"success"===e?g.default.createElement(p.default,{status:"success",text:"\u6210\u529f"}):g.default.createElement(p.default,{status:"processing",text:"\u8fdb\u884c\u4e2d"})}},{title:"\u64cd\u4f5c\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65f6",dataIndex:"cost",key:"cost"}],v=function(e){function t(){return(0,o.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"profileBasic/fetchBasic"})}},{key:"render",value:function(){var e=this.props,t=e.profileBasic,a=e.loading,l=t.basicGoods,n=t.basicProgress,o=[];if(l.length){var c=0,f=0;l.forEach(function(e){c+=Number(e.num),f+=Number(e.amount)}),o=l.concat({id:"\u603b\u8ba1",num:c,amount:f})}var s=function(e,t,a){var n={children:e,props:{}};return a===l.length&&(n.props.colSpan=0),n},m=[{title:"\u5546\u54c1\u7f16\u53f7",dataIndex:"id",key:"id",render:function(e,t,a){return a<l.length?g.default.createElement("a",{href:""},e):{children:g.default.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:4}}}},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name",key:"name",render:s},{title:"\u5546\u54c1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:s},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",align:"right",render:s},{title:"\u6570\u91cf\uff08\u4ef6\uff09",dataIndex:"num",key:"num",align:"right",render:function(e,t,a){return a<l.length?e:g.default.createElement("span",{style:{fontWeight:600}},e)}},{title:"\u91d1\u989d",dataIndex:"amount",key:"amount",align:"right",render:function(e,t,a){return a<l.length?e:g.default.createElement("span",{style:{fontWeight:600}},e)}}];return g.default.createElement(y.PageHeaderWrapper,null,g.default.createElement(i.default,{bordered:!1},g.default.createElement(u.default,{title:"\u9000\u6b3e\u7533\u8bf7",style:{marginBottom:32}},g.default.createElement(u.default.Item,{label:"\u53d6\u8d27\u5355\u53f7"},"1000000000"),g.default.createElement(u.default.Item,{label:"\u72b6\u6001"},"\u5df2\u53d6\u8d27"),g.default.createElement(u.default.Item,{label:"\u9500\u552e\u5355\u53f7"},"1234123421"),g.default.createElement(u.default.Item,{label:"\u5b50\u8ba2\u5355"},"3214321432")),g.default.createElement(d.default,{style:{marginBottom:32}}),g.default.createElement(u.default,{title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:32}},g.default.createElement(u.default.Item,{label:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),g.default.createElement(u.default.Item,{label:"\u8054\u7cfb\u7535\u8bdd"},"18100000000"),g.default.createElement(u.default.Item,{label:"\u5e38\u7528\u5feb\u9012"},"\u83dc\u9e1f\u4ed3\u50a8"),g.default.createElement(u.default.Item,{label:"\u53d6\u8d27\u5730\u5740"},"\u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u4e07\u5858\u8def18\u53f7"),g.default.createElement(u.default.Item,{label:"\u5907\u6ce8"},"\u65e0")),g.default.createElement(d.default,{style:{marginBottom:32}}),g.default.createElement("div",{className:b.default.title},"\u9000\u8d27\u5546\u54c1"),g.default.createElement(r.default,{style:{marginBottom:24},pagination:!1,loading:a,dataSource:o,columns:m,rowKey:"id"}),g.default.createElement("div",{className:b.default.title},"\u9000\u8d27\u8fdb\u5ea6"),g.default.createElement(r.default,{style:{marginBottom:16},pagination:!1,loading:a,dataSource:n,columns:I})))}}]),t}(g.Component);v=E([(0,h.connect)(function(e){var t=e.profileBasic,a=e.loading;return{profileBasic:t,loading:a.effects["profileBasic/fetchBasic"]}})],v);var k=v;t.default=k},ktph:function(e,t,a){e.exports={title:"antd-pro-pages-profile-basic-style-title"}}}]);