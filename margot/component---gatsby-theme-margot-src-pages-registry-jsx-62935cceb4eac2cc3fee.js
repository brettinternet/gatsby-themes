(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{364:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return b}));a(210),a(35);var r=a(1),i=a(0),n=a.n(i),s=a(132),o=a.n(s),d=a(151),l=a.n(d),c=a(388),u=a(144),f=a(419),g=a.n(f),p=a(47),m=Object(r.css)(["border-top:1px solid ",";&:last-child{border-bottom:1px solid ",";}a{transition:all 300ms;opacity:0.8;&:hover,&:active{opacity:1;background:#efefef;}}"],(function(e){return e.theme.colors.lightGray}),(function(e){return e.theme.colors.lightGray})),h=Object(r.default)(p.b).withConfig({componentId:"sc-5mjn6-0"})(["",""],m);t.default=function(e){var t=e.data,a=t.site.siteMetadata.registries;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"Registry"}),n.a.createElement(u.a,{my:3},n.a.createElement(p.c,{mb:4,fontWeight:[400,400,300],textAlign:"center",as:"h2",fontSize:["2rem","2rem","3rem"]},"Our Registries"),n.a.createElement(p.b,{flexWrap:"wrap"},a.map((function(e,a){var r=e.name,i=e.href,s=o()(l()(t.registries.edges,(function(e){return e.node.name===r})),"node");return s&&n.a.createElement(h,{key:a,justifyContent:"center",width:[1,1,.5,1/3],mx:"auto"},n.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(g.a,{fixed:s.childImageSharp.fixed,alt:r+" logo"})))})))))};var b="3954327077"},388:function(e,t,a){"use strict";var r=a(389),i=a(0),n=a.n(i),s=a(55),o=a.n(s),d=a(143),l=a.n(d),c=a(106);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,d=e.imageSrc;return n.a.createElement(c.b,{query:g,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?[{name:"keywords",content:s.join(", ")}]:[]).concat(i).concat(d?[{name:"og:image",content:d},{name:"twitter:image",content:d}]:[])})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]};var f={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,imageSrc:o.a.string};o.a.shape(f);t.a=u;var g="2197604054"},389:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Margot","description":"A Gatsby theme by @brettinternet"}}}}')},419:function(e,t,a){"use strict";a(6),a(4),a(2),a(64),a(107),a(210);var r=a(37);t.__esModule=!0,t.default=void 0;var i,n=r(a(109)),s=r(a(108)),o=r(a(211)),d=r(a(212)),l=r(a(0)),c=r(a(55)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(z,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:V?1:0,transition:k?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,j={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},k&&j,{},o,{},f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:g};if(p){var N=p,P=N[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&j)}),P.base64&&l.default.createElement(R,{src:P.base64,spreadProps:M,imageVariants:N,generateSources:E}),P.tracedSVG&&l.default.createElement(R,{src:P.tracedSVG,spreadProps:M,imageVariants:N,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(N),l.default.createElement(z,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:L},P,{imageVariants:N}))}}))}if(m){var q=m,W=q[0],G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},k&&j)}),W.base64&&l.default.createElement(R,{src:W.base64,spreadProps:M,imageVariants:q,generateSources:E}),W.tracedSVG&&l.default.createElement(R,{src:W.tracedSVG,spreadProps:M,imageVariants:q,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(q),l.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:L},W,{imageVariants:q}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:k,sizes:C,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=V;t.default=x}}]);
//# sourceMappingURL=component---gatsby-theme-margot-src-pages-registry-jsx-62935cceb4eac2cc3fee.js.map