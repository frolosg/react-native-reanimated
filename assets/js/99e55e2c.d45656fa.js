(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(271)),l={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},c={unversionedId:"api/withDecay",id:"version-2.0.0/api/withDecay",isDocsHomePage:!1,title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.0.0/api/withDecay.md",slug:"/api/withDecay",permalink:"/react-native-reanimated/docs/2.0.0/api/withDecay",version:"2.0.0",sidebar_label:"withDecay",sidebar:"version-2.0.0/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.0.0/api/withSpring"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.0.0/api/cancelAnimation"}},o=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Starts a velocity based "scroll" animation.'),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"options-object"},Object(i.b)("inlineCode",{parentName:"h4"},"options")," ","[object]"),Object(i.b)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Options"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"velocity"),Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"Initial velocity")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"deceleration"),Object(i.b)("td",{parentName:"tr",align:null},"0.998"),Object(i.b)("td",{parentName:"tr",align:null},"Rate of decay")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"clamp"),Object(i.b)("td",{parentName:"tr",align:null},"[]"),Object(i.b)("td",{parentName:"tr",align:null},"Array of two animation boundaries (optional)")))),Object(i.b)("h4",{id:"callback-functionoptional"},Object(i.b)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),Object(i.b)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",Object(i.b)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",{parentName:"p",href:"useAnimatedStyle"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (evt) => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}b.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);