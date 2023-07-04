"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{9164:function(t,e,r){r.d(e,{Z:function(){return W}});var n=r(4942),a=r(3366),o=r(7462),i=r(2791),s=r(8182),c=r(1122),u=r(1217),l=r(4419),d=r(7078),m=r(3457),p=r(5080),f=r(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,p.Z)(),x=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e["maxWidth".concat((0,c.Z)(String(r.maxWidth)))],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),b=function(t){return(0,d.Z)({props:t,name:"MuiContainer",defaultTheme:v})},g=function(t,e){var r=t.classes,n=t.fixed,a=t.disableGutters,o=t.maxWidth,i={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),n&&"fixed",a&&"disableGutters"]};return(0,l.Z)(i,(function(t){return(0,u.Z)(e,t)}),r)};var w=r(4036),Z=r(6934),k=r(1402),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.createStyledComponent,r=void 0===e?x:e,c=t.useThemeProps,u=void 0===c?b:c,l=t.componentName,d=void 0===l?"MuiContainer":l,m=r((function(t){var e=t.theme,r=t.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,r){var n=r,a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:"".concat(a).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,r=t.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},e.breakpoints.up(r.maxWidth),{maxWidth:"".concat(e.breakpoints.values[r.maxWidth]).concat(e.breakpoints.unit)}))})),p=i.forwardRef((function(t,e){var r=u(t),n=r.className,i=r.component,c=void 0===i?"div":i,l=r.disableGutters,p=void 0!==l&&l,v=r.fixed,x=void 0!==v&&v,b=r.maxWidth,w=void 0===b?"lg":b,Z=(0,a.Z)(r,h),k=(0,o.Z)({},r,{component:c,disableGutters:p,fixed:x,maxWidth:w}),y=g(k,d);return(0,f.jsx)(m,(0,o.Z)({as:c,ownerState:k,className:(0,s.Z)(y.root,n),ref:e},Z))}));return p}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e["maxWidth".concat((0,w.Z)(String(r.maxWidth)))],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:function(t){return(0,k.Z)({props:t,name:"MuiContainer"})}}),W=y},3457:function(t,e,r){var n=(0,r(4046).ZP)();e.Z=n},9135:function(t,e,r){r.d(e,{I7T:function(){return d}});var n=r(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return n.createElement(l,i({attr:i({},t.attr)},e),c(t.child))}}function l(t){var e=function(e){var r,a=t.attr,o=t.size,c=t.title,u=s(t,["attr","size","title"]),l=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,u,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(a)}function d(t){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}}}]);
//# sourceMappingURL=774.c8882654.chunk.js.map