(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{a480:function(e,a,t){e.exports={card:"antd-pro-pages-form-basic-form-style-card",heading:"antd-pro-pages-form-basic-form-style-heading",steps:"antd-pro-pages-form-basic-form-style-steps",errorIcon:"antd-pro-pages-form-basic-form-style-errorIcon",errorPopover:"antd-pro-pages-form-basic-form-style-errorPopover",errorListItem:"antd-pro-pages-form-basic-form-style-errorListItem",errorField:"antd-pro-pages-form-basic-form-style-errorField",editable:"antd-pro-pages-form-basic-form-style-editable",advancedForm:"antd-pro-pages-form-basic-form-style-advancedForm",optional:"antd-pro-pages-form-basic-form-style-optional"}},wqjW:function(e,a,t){"use strict";var r=t("tAuX"),l=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("+L6B");var o=l(t("2/Rp"));t("7Kak");var s=l(t("9yH6"));t("giR+");var m=l(t("fyUT"));t("Pwec");var d=l(t("CtXQ"));t("5Dmo");var f=l(t("3S7+"));t("IzEo");var i=l(t("bx4M")),n=l(t("2Taf")),c=l(t("vZ4D")),u=l(t("l4Ni")),p=l(t("ujKo")),b=l(t("MhPg"));t("5NDa");var g=l(t("5rEg"));t("iQDF");var E=l(t("+eQT"));t("OaEy");var h=l(t("2fM7"));t("y8nQ");var M=l(t("Vl3Y")),v=t("Y2fQ"),y=r(t("q1tI")),F=t("y1Nh"),w=t("MuoO"),O=l(t("a480")),j=M.default.Item,q=h.default.Option,x=E.default.RangePicker,k=g.default.TextArea,I=function(e){function a(){var e;return(0,n.default)(this,a),e=(0,u.default)(this,(0,p.default)(a).apply(this,arguments)),e.handleSubmit=function(a){var t=e.props,r=t.dispatch,l=t.form;a.preventDefault(),l.validateFieldsAndScroll(function(e,a){e||r({type:"formBasicForm/submitRegularForm",payload:a})})},e}return(0,b.default)(a,e),(0,c.default)(a,[{key:"render",value:function(){var e=this.props.submitting,a=this.props.form,t=a.getFieldDecorator,r=a.getFieldValue,l={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return y.default.createElement(F.PageHeaderWrapper,{content:y.default.createElement(v.FormattedMessage,{id:"formbasicform.basic.description"})},y.default.createElement(i.default,{bordered:!1},y.default.createElement(M.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},y.default.createElement(j,Object.assign({},l,{label:y.default.createElement(v.FormattedMessage,{id:"formbasicform.title.label"})}),t("title",{rules:[{required:!0,message:(0,v.formatMessage)({id:"formbasicform.title.required"})}]})(y.default.createElement(g.default,{placeholder:(0,v.formatMessage)({id:"formbasicform.title.placeholder"})}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement(v.FormattedMessage,{id:"formbasicform.date.label"})}),t("date",{rules:[{required:!0,message:(0,v.formatMessage)({id:"formbasicform.date.required"})}]})(y.default.createElement(x,{style:{width:"100%"},placeholder:[(0,v.formatMessage)({id:"formbasicform.placeholder.start"}),(0,v.formatMessage)({id:"formbasicform.placeholder.end"})]}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement(v.FormattedMessage,{id:"formbasicform.goal.label"})}),t("goal",{rules:[{required:!0,message:(0,v.formatMessage)({id:"formbasicform.goal.required"})}]})(y.default.createElement(k,{style:{minHeight:32},placeholder:(0,v.formatMessage)({id:"formbasicform.goal.placeholder"}),rows:4}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement(v.FormattedMessage,{id:"formbasicform.standard.label"})}),t("standard",{rules:[{required:!0,message:(0,v.formatMessage)({id:"formbasicform.standard.required"})}]})(y.default.createElement(k,{style:{minHeight:32},placeholder:(0,v.formatMessage)({id:"formbasicform.standard.placeholder"}),rows:4}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement("span",null,y.default.createElement(v.FormattedMessage,{id:"formbasicform.client.label"}),y.default.createElement("em",{className:O.default.optional},y.default.createElement(v.FormattedMessage,{id:"formbasicform.form.optional"}),y.default.createElement(f.default,{title:y.default.createElement(v.FormattedMessage,{id:"formbasicform.label.tooltip"})},y.default.createElement(d.default,{type:"info-circle-o",style:{marginRight:4}}))))}),t("client")(y.default.createElement(g.default,{placeholder:(0,v.formatMessage)({id:"formbasicform.client.placeholder"})}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement("span",null,y.default.createElement(v.FormattedMessage,{id:"formbasicform.invites.label"}),y.default.createElement("em",{className:O.default.optional},y.default.createElement(v.FormattedMessage,{id:"formbasicform.form.optional"})))}),t("invites")(y.default.createElement(g.default,{placeholder:(0,v.formatMessage)({id:"formbasicform.invites.placeholder"})}))),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement("span",null,y.default.createElement(v.FormattedMessage,{id:"formbasicform.weight.label"}),y.default.createElement("em",{className:O.default.optional},y.default.createElement(v.FormattedMessage,{id:"formbasicform.form.optional"})))}),t("weight")(y.default.createElement(m.default,{placeholder:(0,v.formatMessage)({id:"formbasicform.weight.placeholder"}),min:0,max:100})),y.default.createElement("span",{className:"ant-form-text"},"%")),y.default.createElement(j,Object.assign({},l,{label:y.default.createElement(v.FormattedMessage,{id:"formbasicform.public.label"}),help:y.default.createElement(v.FormattedMessage,{id:"formbasicform.label.help"})}),y.default.createElement("div",null,t("public",{initialValue:"1"})(y.default.createElement(s.default.Group,null,y.default.createElement(s.default,{value:"1"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.radio.public"})),y.default.createElement(s.default,{value:"2"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.radio.partially-public"})),y.default.createElement(s.default,{value:"3"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.radio.private"})))),y.default.createElement(j,{style:{marginBottom:0}},t("publicUsers")(y.default.createElement(h.default,{mode:"multiple",placeholder:(0,v.formatMessage)({id:"formbasicform.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===r("public")?"block":"none"}},y.default.createElement(q,{value:"1"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.option.A"})),y.default.createElement(q,{value:"2"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.option.B"})),y.default.createElement(q,{value:"3"},y.default.createElement(v.FormattedMessage,{id:"formbasicform.option.C"}))))))),y.default.createElement(j,Object.assign({},n,{style:{marginTop:32}}),y.default.createElement(o.default,{type:"primary",htmlType:"submit",loading:e},y.default.createElement(v.FormattedMessage,{id:"formbasicform.form.submit"})),y.default.createElement(o.default,{style:{marginLeft:8}},y.default.createElement(v.FormattedMessage,{id:"formbasicform.form.save"}))))))}}]),a}(y.Component),N=M.default.create()((0,w.connect)(function(e){var a=e.loading;return{submitting:a.effects["formBasicForm/submitRegularForm"]}})(I));a.default=N}}]);