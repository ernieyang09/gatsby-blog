webpackJsonp([27],{"./.cache/api-runner-browser.js":function(e,o){"use strict";var s=[];e.exports=function(e,o,n){var t=s.map(function(s){if(s.plugin[e]){var n=s.plugin[e](o,s.options);return n}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}},"./.cache/async-requires.js":function(e,o,s){"use strict";o.components={"page-component---src-templates-posts-jsx":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-posts-jsx!./src/templates/Posts.jsx"),"page-component---src-templates-tag-page-jsx":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tag-page-jsx!./src/templates/tag-page.jsx"),"page-component---src-pages-404-js":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},o.json={"react-setstate.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---react-setstate!./.cache/json/react-setstate.json"),"first-post.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---first-post!./.cache/json/first-post.json"),"fetch-in-react-life-cycle.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---fetch-in-react-life-cycle!./.cache/json/fetch-in-react-life-cycle.json"),"test.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---test!./.cache/json/test.json"),"redux-middleware.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---redux-middleware!./.cache/json/redux-middleware.json"),"react-animation.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---react-animation!./.cache/json/react-animation.json"),"session-n-token.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---session-n-token!./.cache/json/session-n-token.json"),"dont-release-zalgo.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---dont-release-zalgo!./.cache/json/dont-release-zalgo.json"),"tags-react.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-react!./.cache/json/tags-react.json"),"tags-javascript.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-javascript!./.cache/json/tags-javascript.json"),"tags-前端.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-前端!./.cache/json/tags-前端.json"),"tags-blog.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-blog!./.cache/json/tags-blog.json"),"tags-redux.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-redux!./.cache/json/tags-redux.json"),"tags-promise.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-promise!./.cache/json/tags-promise.json"),"tags-async.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-async!./.cache/json/tags-async.json"),"tags-rest.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-rest!./.cache/json/tags-rest.json"),"tags-authorization.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-authorization!./.cache/json/tags-authorization.json"),"tags-session.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-session!./.cache/json/tags-session.json"),"404.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},o.layouts={index:s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var t=s("./node_modules/babel-runtime/helpers/extends.js"),a=n(t),r=s("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=n(r),l=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=n(l),u=s("./node_modules/babel-runtime/helpers/createClass.js"),c=n(u),g=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(g),m=s("./node_modules/babel-runtime/helpers/inherits.js"),j=n(m),b=s("./node_modules/react/react.js"),h=n(b),f=s("./.cache/loader.js"),y=n(f),x=s("./.cache/emitter.js"),_=n(x),k=function(e){function o(e){(0,i.default)(this,o);var s=(0,p.default)(this,(o.__proto__||(0,d.default)(o)).call(this));return s.state={location:e.location,pageResources:y.default.getResourcesForPathname(e.location.pathname)},s}return(0,j.default)(o,e),(0,c.default)(o,[{key:"componentWillReceiveProps",value:function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var s=y.default.getResourcesForPathname(e.location.pathname);s?this.setState({location:e.location,pageResources:s}):y.default.getResourcesForPathname(e.location.pathname,function(s){o.setState({location:e.location,pageResources:s})})}}},{key:"componentDidMount",value:function(){var e=this;_.default.on("onPostLoadPageResources",function(o){o.page.path===y.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,o){return this.state.pageResources.component!==o.pageResources.component||this.state.pageResources.json!==o.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,b.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),o}(h.default.Component);o.default=k},"./.cache/emitter.js":function(e,o,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=s("./node_modules/mitt/dist/mitt.js"),a=n(t),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,s){"use strict";var n=s("./node_modules/react-router-dom/index.js"),t={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(s){var a=s.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),t[a])return t[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,n.matchPath)(a,{path:e.path})||(0,n.matchPath)(a,{path:e.matchPath}))return r=e,t[a]=e,!0}else if((0,n.matchPath)(a,{path:e.path,exact:!0}))return r=e,t[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(24,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(23,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---dont-release-zalgo!./.cache/json/dont-release-zalgo.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(22,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/dont-release-zalgo.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---fetch-in-react-life-cycle!./.cache/json/fetch-in-react-life-cycle.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(21,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/fetch-in-react-life-cycle.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---first-post!./.cache/json/first-post.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(20,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/first-post.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(19,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---react-animation!./.cache/json/react-animation.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(18,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/react-animation.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---react-setstate!./.cache/json/react-setstate.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(17,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/react-setstate.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---redux-middleware!./.cache/json/redux-middleware.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(16,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/redux-middleware.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---session-n-token!./.cache/json/session-n-token.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(15,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/session-n-token.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-async!./.cache/json/tags-async.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(14,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-async.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-authorization!./.cache/json/tags-authorization.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(13,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-authorization.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-blog!./.cache/json/tags-blog.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(12,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-blog.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-javascript!./.cache/json/tags-javascript.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(11,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-javascript.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-promise!./.cache/json/tags-promise.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(10,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-promise.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-react!./.cache/json/tags-react.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(9,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-react.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-redux!./.cache/json/tags-redux.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(8,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-redux.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-rest!./.cache/json/tags-rest.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(7,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-rest.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-session!./.cache/json/tags-session.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(6,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-session.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---tags-前端!./.cache/json/tags-前端.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(5,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/tags-前端.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---test!./.cache/json/test.json":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(4,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s("./node_modules/json-loader/index.js!./.cache/json/test.json")})})}},"./.cache/loader.js":function(e,o,s){(function(o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=s("./node_modules/babel-runtime/core-js/get-iterator.js"),a=n(t),r=s("./.cache/find-page.js"),d=n(r),l=s("./.cache/emitter.js"),i=n(l),u=void 0,c={},g={},p={},m={},j={},b=[],h=[],f={},y=[],x={},_=function(e){return e&&e.default||e},k=void 0,v=!0;k=s("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){N(e,function(){y=y.filter(function(o){return o!==e}),k.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){k.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){k.onPostLoadPageResources(e)});var w=function(e,o){return x[e]>x[o]?1:x[e]<x[o]?-1:0},R=function(e,o){return f[e]>f[o]?1:f[e]<f[o]?-1:0},N=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])o.nextTick(function(){s(null,m[e])});else{var n="page-c"===e.slice(0,6)?g.components[e]:g.json[e];n(function(o,n){m[e]=n,s(o,n)})}},P=function(e,s){j[e]?o.nextTick(function(){s(null,j[e])}):N(e,function(o,n){if(o)s(o);else{var t=_(n());j[e]=t,s(o,t)}})},D=1,C={empty:function(){h=[],f={},x={},y=[],b=[]},addPagesArray:function(e){b=e;var o="";u=(0,d.default)(e,o)},addDevRequires:function(e){c=e},addProdRequires:function(e){g=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!b.some(function(o){return o.path===e}))return!1;var o=1/D;D+=1,f[e]?f[e]+=1:f[e]=1,C.has(e)||h.unshift(e),h.sort(R);var s=u(e);return s.jsonName&&(x[s.jsonName]?x[s.jsonName]+=1+o:x[s.jsonName]=1+o,y.indexOf(s.jsonName)!==-1||m[s.jsonName]||y.unshift(s.jsonName)),s.componentChunkName&&(x[s.componentChunkName]?x[s.componentChunkName]+=1+o:x[s.componentChunkName]=1+o,y.indexOf(s.componentChunkName)!==-1||m[s.jsonName]||y.unshift(s.componentChunkName)),y.sort(w),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:x}},getPages:function(){return{pathArray:h,pathCount:f}},getPage:function(e){return u(e)},has:function(e){return h.some(function(o){return o===e})},getResourcesForPathname:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(u(e)||navigator.serviceWorker.getRegistrations().then(function(e){var o=!0,s=!1,n=void 0;try{for(var t,r=(0,a.default)(e);!(o=(t=r.next()).done);o=!0){var d=t.value;d.unregister()}}catch(e){s=!0,n=e}finally{try{!o&&r.return&&r.return()}finally{if(s)throw n}}window.location.reload()})),v=!1;var n=u(e);if(!n)return void console.log("A page wasn't found for \""+e+'"');if(e=n.path,p[e])return o.nextTick(function(){s(p[e]),i.default.emit("onPostLoadPageResources",{page:n,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var t=void 0,r=void 0,d=function(){if(t&&r){p[e]={component:t,json:r};var o={component:t,json:r};s(o),i.default.emit("onPostLoadPageResources",{page:n,pageResources:o})}};return P(n.componentChunkName,function(e,o){e&&console.log("Loading the component for "+n.path+" failed"),t=o,d()}),void P(n.jsonName,function(e,o){e&&console.log("Loading the JSON for "+n.path+" failed"),r=o,d()})},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=C}).call(o,s("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"react-setstate.json",path:"/react-setstate/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"first-post.json",path:"/first-post/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"fetch-in-react-life-cycle.json",path:"/fetch-in-react-life-cycle/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"test.json",path:"/test/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"redux-middleware.json",path:"/redux-middleware/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"react-animation.json",path:"/react_animation/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"session-n-token.json",path:"/session_n_token/"},{componentChunkName:"page-component---src-templates-posts-jsx",jsonName:"dont-release-zalgo.json",path:"/dont-release-zalgo/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-react.json",path:"/tags/react/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-javascript.json",path:"/tags/javascript/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-前端.json",path:"/tags/前端/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-blog.json",path:"/tags/blog/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-redux.json",path:"/tags/redux/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-promise.json",path:"/tags/promise/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-async.json",path:"/tags/async/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-rest.json",path:"/tags/rest/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-authorization.json",path:"/tags/authorization/"},{componentChunkName:"page-component---src-templates-tag-page-jsx",jsonName:"tags-session.json",path:"/tags/session/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,s=e.createResourceDownload,n=[],t=[],a=function(){var e=o();e&&(t.push(e),s(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":t=t.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":n.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":n=n.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===t.length&&0===n.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:n,resourcesDownloading:t}},empty:function(){n=[],t=[]}}}},0:function(e,o,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function t(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,i.default)("onRouteUpdate",{location:e,action:o})}))}function a(e,o){var s=o.location.pathname,n=(0,i.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:s});if(n.length>0)return n[0];if(e){var t=e.location.pathname;if(t===s)return!1}return!0}var r=s("./node_modules/babel-runtime/helpers/extends.js"),d=n(r),l=s("./.cache/api-runner-browser.js"),i=n(l),u=s("./node_modules/react/react.js"),c=n(u),g=s("./node_modules/react-dom/index.js"),p=n(g),m=s("./node_modules/react-router-dom/index.js"),j=s("./node_modules/react-router-scroll/lib/index.js"),b=s("./node_modules/history/createBrowserHistory.js"),h=n(b),f=s("./.cache/emitter.js"),y=n(f),x=s("./.cache/pages.json"),_=n(x),k=s("./.cache/component-renderer.js"),v=n(k),w=s("./.cache/async-requires.js"),R=n(w),N=s("./.cache/loader.js"),P=n(N);window.___emitter=y.default,P.default.addPagesArray(_.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=m.matchPath,(0,i.default)("onClientEntry"),(0,i.default)("registerServiceWorker").length>0&&s("./.cache/register-service-worker.js");var D=function(e){function o(n){n.page.path===P.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",o),clearTimeout(s),window.___history.push(e))}if(window.location.pathname!==e){var s=setTimeout(function(){y.default.off("onPostLoadPageResources",o),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);P.default.getResourcesForPathname(e)?(clearTimeout(s),window.___history.push(e)):y.default.on("onPostLoadPageResources",o)}};window.___navigateTo=D;var C=(0,h.default)();(0,i.default)("onRouteUpdate",{location:C.location,action:C.action});var U=(0,i.default)("replaceRouterComponent",{history:C})[0],E=function(e){var o=e.children;return c.default.createElement(m.BrowserRouter,{history:C},o)},S=function(e){R.default.layouts.index?R.default.layouts.index(function(o,s){var n=s();e(n)}):e(function(e){return c.default.createElement("div",null,e.children())})};S(function(e){P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(U?U:E,null,(0,u.createElement)(j.ScrollContext,{shouldUpdateScroll:a},(0,u.createElement)((0,m.withRouter)(e),{children:function(e){return(0,u.createElement)(m.Route,{render:function(o){t(o.history);var s=e?e:o;return P.default.getPage(s.location.pathname)?(0,u.createElement)(v.default,(0,d.default)({},s)):(0,u.createElement)(v.default,{location:{pathname:"/404.html"}})}})}})))},s=(0,i.default)("wrapRootComponent",{Root:o},o)[0];p.default.render(c.default.createElement(s,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,o,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t=s("./.cache/emitter.js"),a=n(t),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,o,s){"use strict";function n(){function e(e){var o=n.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,n=document.querySelector("head"),t=s.e,a=s.s;s.e=function(n,r){var d=!1,l=!0,i=function(e){r&&(r(s,e),r=null)};return!a&&o&&o[n]?void i(!0):(t(n,function(){d||(d=!0,l?setTimeout(function(){i()}):i())}),void(d||(l=!1,e(function(){d||(d=!0,a?a[n]=void 0:(o||(o={}),o[n]=!0),i(!0))}))))}}n()},"./node_modules/mitt/dist/mitt.js":function(e,o){function s(e){return e=e||Object.create(null),{on:function(o,s){(e[o]||(e[o]=[])).push(s)},off:function(o,s){e[o]&&e[o].splice(e[o].indexOf(s)>>>0,1)},emit:function(o,s){(e[o]||[]).map(function(e){e(s)}),(e["*"]||[]).map(function(e){e(o,s)})}}}e.exports=s},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(2,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(26,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(3,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-posts-jsx!./src/templates/Posts.jsx":function(e,o,s){s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(1,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Posts.jsx')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tag-page-jsx!./src/templates/tag-page.jsx":function(e,o,s){
s("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return s.e(25,function(o,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-env/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/ernieyang09/Desktop/workspace/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tag-page.jsx')})})}}});
//# sourceMappingURL=app-028e1f0a8b18fbb2d494.js.map