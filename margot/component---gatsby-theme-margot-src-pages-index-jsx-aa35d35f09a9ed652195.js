(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{363:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var r=a(0),i=a.n(r),n=a(1),s=a(419),o=a.n(s),l=a(388),d=a(144),c=a(47),u=Object(n.default)(c.a).withConfig({componentId:"sc-1x46jxh-0"})(["position:relative;max-width:2460px;margin:auto;"]);t.default=function(e){var t=e.data,a=t.site.siteMetadata,r=a.title,n=a.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:"Home",description:n}),i.a.createElement(u,{mx:"auto"},i.a.createElement(c.a,null,i.a.createElement(o.a,{fluid:t.heroImage.childImageSharp.fluid,style:{maxHeight:"800px"}})),i.a.createElement(f,null,i.a.createElement(c.c,{fontWeight:[400,400,300],textAlign:"center",as:"h1",color:"white",letterSpacing:"0.9rem",fontSize:["2rem","2rem","3rem","5.5rem"]},r))))};var f=Object(n.default)(d.a).withConfig({componentId:"sc-1x46jxh-1"})(["position:absolute;top:20%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;"]),g="2383126429"},388:function(e,t,a){"use strict";var r=a(389),i=a(0),n=a.n(i),s=a(55),o=a.n(s),l=a(143),d=a.n(l),c=a(106);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=e.imageSrc;return n.a.createElement(c.b,{query:g,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?[{name:"keywords",content:s.join(", ")}]:[]).concat(i).concat(l?[{name:"og:image",content:l},{name:"twitter:image",content:l}]:[])})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]};var f={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,imageSrc:o.a.string};o.a.shape(f);t.a=u;var g="2197604054"},389:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Margot","description":"A Gatsby theme by @brettinternet"}}}}')},419:function(e,t,a){"use strict";a(6),a(4),a(2),a(64),a(107),a(210);var r=a(37);t.__esModule=!0,t.default=void 0;var i,n=r(a(109)),s=r(a(108)),o=r(a(211)),l=r(a(212)),d=r(a(0)),c=r(a(55)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(k,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,g=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,onClick:u,ref:t,loading:f,draggable:g,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:R?1:0,transition:z?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,j={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&j,{},o,{},f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:v};if(p){var N=p,P=N[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&j)}),P.base64&&d.default.createElement(O,{src:P.base64,spreadProps:M,imageVariants:N,generateSources:E}),P.tracedSVG&&d.default.createElement(O,{src:P.tracedSVG,spreadProps:M,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(k,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:L},P,{imageVariants:N}))}}))}if(m){var q=m,W=q[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},z&&j)}),W.base64&&d.default.createElement(O,{src:W.base64,spreadProps:M,imageVariants:q,generateSources:E}),W.tracedSVG&&d.default.createElement(O,{src:W.tracedSVG,spreadProps:M,imageVariants:q,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:L},W,{imageVariants:q}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:z,sizes:V,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=R;t.default=x}}]);
//# sourceMappingURL=component---gatsby-theme-margot-src-pages-index-jsx-aa35d35f09a9ed652195.js.map