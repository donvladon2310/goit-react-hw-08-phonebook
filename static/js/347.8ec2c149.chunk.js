(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{8347:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(2791),a={},i=t(2007),s=t.n(i),o=t(3329),c=function(e){var n=e.removeContact,t=e.items.map((function(e){var t=e._id,r=e.name,a=e.phone;return(0,o.jsxs)("li",{children:[r,": ",a,(0,o.jsx)("button",{onClick:function(){return n(t)},type:"button",children:"delete"})]},t)}));return(0,o.jsx)("ul",{children:t})},u=c;c.defaultProps={items:[]},c.PropTypes={removeContact:s().func.isRequired,items:s().arrayOf(s().shape({id:s().string.isRequireds,name:s().string.isRequireds,phone:s().string.isRequireds}))};var d=function(e){var n=e.handelChange,t=e.value;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h5",{children:"Find contacts by name"}),(0,o.jsx)("input",{value:t,name:"filter",onChange:n})]})},l=t(4942),h=t(1413),p=t(9439),m=function(e){var n=e.onSubmit,t=(0,r.useState)({name:"",phone:""}),a=(0,p.Z)(t,2),i=a[0],s=a[1],c=function(e){var n=e.target,t=n.name,r=n.value;s((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,l.Z)({},t,r))}))},u=i.name,d=i.phone;return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({name:u,phone:d}),s({name:"",phone:""})},children:[(0,o.jsx)("div",{children:(0,o.jsx)("input",{onChange:c,value:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,o.jsx)("h4",{children:"Number"}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{onChange:c,value:d,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,o.jsx)("button",{type:"submit",children:"Add Contact"})]})},f=t(9434),v=t(2421),x=t(5029),j=t(4654),y=function(){var e=(0,f.v9)(j.PR).email,n=(0,f.I0)();return(0,o.jsxs)("div",{children:[e," ",(0,o.jsx)("button",{onClick:function(){n((0,x.kS)())},children:"Logout"})]})},b=t(5653),C=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var r=t.toLowerCase();return n.items.filter((function(e){var n=e.name,t=e.phone;return n.toLowerCase().includes(r)||t.toLowerCase().includes(r)}))},g=function(e){return e.filter},k=t(4182),_=function(){var e=(0,f.v9)(C),n=(0,f.v9)(g),t=(0,f.I0)();(0,r.useEffect)((function(){t((0,k.CL)())}),[t]);var i=(0,f.v9)(j.y6);return(0,o.jsxs)("div",{children:[!i&&(0,o.jsx)(v.Z,{}),i&&(0,o.jsx)(y,{}),(0,o.jsx)("h3",{children:"Phonebook"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:a.wrapper,children:[(0,o.jsx)("h4",{children:"Name"}),(0,o.jsx)(m,{onSubmit:function(e){var n=e.name,r=e.phone;t((0,k.v6)({name:n,phone:r}))}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"Contacts"}),(0,o.jsx)(d,{value:n,handelChange:function(e){var n=e.target;t((0,b.T)(n.value))}}),(0,o.jsx)(u,{removeContact:function(e){t((0,k.in)(e))},items:e})]})]})]})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=347.8ec2c149.chunk.js.map