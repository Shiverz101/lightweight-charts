"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3199],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9530:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/OhlcData",id:"version-3.8/api/interfaces/OhlcData",title:"Interface: OhlcData",description:"Represents a bar with a Time and open, high, low, and close prices.",source:"@site/versioned_docs/version-3.8/api/interfaces/OhlcData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/OhlcData",permalink:"/lightweight-charts/docs/api/interfaces/OhlcData",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"MouseEventParams",permalink:"/lightweight-charts/docs/api/interfaces/MouseEventParams"},next:{title:"Point",permalink:"/lightweight-charts/docs/api/interfaces/Point"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"time",id:"time",children:[],level:3},{value:"open",id:"open",children:[],level:3},{value:"high",id:"high",children:[],level:3},{value:"low",id:"low",children:[],level:3},{value:"close",id:"close",children:[],level:3}],level:2}],u={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a bar with a ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/TickMarkType#time"},"Time")," and open, high, low, and close prices."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"OhlcData"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BarData"},(0,i.kt)("inlineCode",{parentName:"a"},"BarData"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/CandlestickData"},(0,i.kt)("inlineCode",{parentName:"a"},"CandlestickData"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time"))),(0,i.kt)("p",null,"The bar time."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"open"},"open"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"open"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The open price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"high"},"high"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"high"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The high price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"low"},"low"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"low"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The low price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"close"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The close price."))}h.isMDXComponent=!0}}]);