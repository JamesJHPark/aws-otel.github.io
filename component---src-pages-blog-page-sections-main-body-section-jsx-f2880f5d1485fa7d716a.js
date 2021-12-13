/*! For license information please see component---src-pages-blog-page-sections-main-body-section-jsx-f2880f5d1485fa7d716a.js.LICENSE.txt */
"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[7027,8387],{47673:function(e,n,r){var t=r(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.styles=void 0;var a=t(r(59713)),o=t(r(6479)),i=t(r(67154)),u=t(r(67294)),p=(t(r(45697)),t(r(75900))),c=(t(r(42473)),r(73976),t(r(6988))),f=function(e){var n={};return e.shadows.forEach((function(e,r){n["elevation".concat(r)]={boxShadow:e}})),(0,i.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},n)};function d(e){var n=e.classes,r=e.className,t=e.component,c=e.square,f=e.elevation,d=(0,o.default)(e,["classes","className","component","square","elevation"]),x=(0,p.default)(n.root,n["elevation".concat(f)],(0,a.default)({},n.rounded,!c),r);return u.default.createElement(t,(0,i.default)({className:x},d))}n.styles=f,d.defaultProps={component:"div",elevation:2,square:!1};var x=(0,c.default)(f,{name:"MuiPaper"})(d);n.default=x},95426:function(e,n,r){var t=r(95318);Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a.default}});var a=t(r(47673))},77942:function(e,n,r){var t=r(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.cloneElementWithClassName=i,n.cloneChildrenWithClassName=function(e,n){return a.default.Children.map(e,(function(e){return a.default.isValidElement(e)&&i(e,n)}))},n.isMuiElement=function(e,n){return a.default.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)},n.setRef=function(e,n){"function"==typeof e?e(n):e&&(e.current=n)};var a=t(r(67294)),o=t(r(75900));function i(e,n){return a.default.cloneElement(e,{className:(0,o.default)(e.props.className,n)})}},35985:function(e,n,r){r.d(n,{RK:function(){return i},eR:function(){return u},nC:function(){return p},Wn:function(){return c},Df:function(){return f},lr:function(){return d},MA:function(){return x},E7:function(){return l},nq:function(){return b},bE:function(){return s},An:function(){return g},X_:function(){return m},kY:function(){return h},ur:function(){return v},TI:function(){return w},D6:function(){return O},iW:function(){return y},cq:function(){return j},TN:function(){return k},X5:function(){return P}});var t=r(4942);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var i=260,u={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},p=o(o({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"}),{},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),c={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},f={fontWeight:"300",lineHeight:"1.5em"},d="#F5A800",x="#ff9800",l="#f44336",b="#4caf50",s="#00acc1",g="#e91e63",m="#999999",h={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},w={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},O={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},y={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},j={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},k=(o({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},O),o({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},w),o({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},y),o({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},v),o({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},h),o({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},j),o({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},f),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700"}),P=o(o({},k),{},{marginTop:".625rem"})}}]);
//# sourceMappingURL=component---src-pages-blog-page-sections-main-body-section-jsx-f2880f5d1485fa7d716a.js.map