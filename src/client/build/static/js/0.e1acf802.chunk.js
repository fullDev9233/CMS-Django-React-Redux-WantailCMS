webpackJsonp([0],{127:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(c);r(135),r(137);var s=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){var e=this.props.data.module,t=e.text.split("\n").map(function(e,t){return i.default.createElement("p",{key:t},e)}),r=e.link?i.default.createElement("a",{href:e.link,target:"_blank"},i.default.createElement("i",{className:"fa fa-link mr-2"}),"Link"):null,n=e.image?e.image.file:"",a=e.paragraphs.map(function(t,r){var a=t.text.split("\n").map(function(e){return i.default.createElement("p",null,e)});return i.default.createElement("div",{className:"clear-fix"},i.default.createElement("div",{key:r,className:"pull-left col-12 col-md-5 mb-3"},i.default.createElement("img",{className:"img-responsive rounded",src:n,alt:e.title,width:"100%"})),a)});return i.default.createElement("section",{className:"wrap-image bg-primary text-white mb-0 mt-5",id:"about"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"pull-left col-12 col-md-5 mb-3"},i.default.createElement("img",{className:"img-responsive rounded",src:n,alt:e.title,width:"100%"})),i.default.createElement("div",{className:"pull-left col-12 col-md-7 mt-3"},i.default.createElement("h2",null,e.title),r,i.default.createElement("hr",null)),t,a,i.default.createElement("div",{className:"clear-fix col-xs-12"},i.default.createElement("hr",null))))}}]),t}(i.default.Component);t.default=s},135:function(e,t,r){var n=r(136);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(123)(n,a);n.locals&&(e.exports=n.locals)},136:function(e,t,r){t=e.exports=r(122)(!0),t.push([e.i,".clear-fix{clear:both}","",{version:3,sources:["/app/src/client/src/style/core.css"],names:[],mappings:"AAAA,WACE,UAAY,CACb",file:"core.css",sourcesContent:[".clear-fix {\n  clear: both;\n}\n"],sourceRoot:""}])},137:function(e,t,r){var n=r(138);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(123)(n,a);n.locals&&(e.exports=n.locals)},138:function(e,t,r){t=e.exports=r(122)(!0),t.push([e.i,".wrap-image a{color:#fff;font-size:1.5rem}.wrap-image a:focus{color:#fff}","",{version:3,sources:["/app/src/client/src/style/WrapImage.css"],names:[],mappings:"AAAA,cACE,WAAY,AACZ,gBAAkB,CACnB,AAED,oBACE,UAAY,CACb",file:"WrapImage.css",sourcesContent:[".wrap-image a {\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n.wrap-image a:focus {\n  color: #fff;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.e1acf802.chunk.js.map