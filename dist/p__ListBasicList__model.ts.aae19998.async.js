(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"K/5Q":function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.queryFakeList=c,e.removeFakeList=l,e.addFakeList=f,e.updateFakeList=y;var n=r(a("p0pE")),u=r(a("Y/ft")),i=r(a("d6i3")),s=r(a("1l/V")),p=r(a("io9h"));function c(t){return d.apply(this,arguments)}function d(){return d=(0,s.default)(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.default)("/api/fake_list",{params:e}));case 1:case"end":return t.stop()}},t)})),d.apply(this,arguments)}function l(t){return o.apply(this,arguments)}function o(){return o=(0,s.default)(i.default.mark(function t(e){var a,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.count,r=void 0===a?5:a,s=(0,u.default)(e,["count"]),t.abrupt("return",(0,p.default)("/api/fake_list",{method:"POST",params:{count:r},data:(0,n.default)({},s,{method:"delete"})}));case 2:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,s.default)(i.default.mark(function t(e){var a,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.count,r=void 0===a?5:a,s=(0,u.default)(e,["count"]),t.abrupt("return",(0,p.default)("/api/fake_list",{method:"POST",params:{count:r},data:(0,n.default)({},s,{method:"post"})}));case 2:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return v=(0,s.default)(i.default.mark(function t(e){var a,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.count,r=void 0===a?5:a,s=(0,u.default)(e,["count"]),t.abrupt("return",(0,p.default)("/api/fake_list",{method:"POST",params:{count:r},data:(0,n.default)({},s,{method:"update"})}));case 2:case"end":return t.stop()}},t)})),v.apply(this,arguments)}},mztX:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3")),i=a("K/5Q"),s={namespace:"listBasicList",state:{list:[]},effects:{fetch:u.default.mark(function t(e,a){var r,n,s,p;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,t.next=4,n(i.queryFakeList,r);case 4:return p=t.sent,t.next=7,s({type:"queryList",payload:Array.isArray(p)?p:[]});case 7:case"end":return t.stop()}},t)}),appendFetch:u.default.mark(function t(e,a){var r,n,s,p;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,t.next=4,n(i.queryFakeList,r);case 4:return p=t.sent,t.next=7,s({type:"appendList",payload:Array.isArray(p)?p:[]});case 7:case"end":return t.stop()}},t)}),submit:u.default.mark(function t(e,a){var r,n,s,p,c;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=a.call,s=a.put,p=r.id?1===Object.keys(r).length?i.removeFakeList:i.updateFakeList:i.addFakeList,t.next=5,n(p,r);case 5:return c=t.sent,t.next=8,s({type:"queryList",payload:c});case 8:case"end":return t.stop()}},t)})},reducers:{queryList:function(t,e){return(0,n.default)({},t,{list:e.payload})},appendList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[]},e=arguments.length>1?arguments[1]:void 0;return(0,n.default)({},t,{list:t.list.concat(e.payload)})}}},p=s;e.default=p}}]);