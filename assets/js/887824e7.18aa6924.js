(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),r=(a(0),a(271)),o={slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},l={unversionedId:"about",id:"version-1.x.x/about",isDocsHomePage:!1,title:"About React Native Reanimated",description:"React Native's Animated library reimplemented.",source:"@site/versioned_docs/version-1.x.x/about.md",slug:"/",permalink:"/react-native-reanimated/docs/1.x.x/",version:"1.x.x",sidebar_label:"About",sidebar:"version-1.x.x/docs",next:{title:"Getting started",permalink:"/react-native-reanimated/docs/1.x.x/getting_started"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Reanimated overview",id:"reanimated-overview",children:[]},{value:"At most once evaluation (the algorithm)",id:"at-most-once-evaluation-the-algorithm",children:[]},{value:"100% declarative gesture interactions",id:"100-declarative-gesture-interactions",children:[]}],c={toc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native's Animated library reimplemented."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Native Performance"),": Declare your animations in JS, but have them run on the native thread! \ud83e\uddd9\u200d\u2642\ufe0f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Precise Animations"),": The API affords new levels of precision and detailed control of your animations. \ud83d\udd79"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"(mostly) Backwards Compatible"),": Use the same Animated API from React Native that you've been using. You generally don't ",Object(r.b)("em",{parentName:"li"},"need")," to change anything to get started. \ud83d\udc4d")),Object(r.b)("p",null,"Reanimated provides a more comprehensive, low level abstraction for the Animated library API, giving you much greater flexibility, control and performance. Combine it with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/kmagiera/react-native-gesture-handler"},"react-native-gesture-handler")," for performant gesture-based interactions."),Object(r.b)("h3",{id:"motivation"},"Motivation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Animated")," library has several limitations that become troubling when it comes to gesture based interactions.\nThis project was initially created to resolve the issue of pan interaction when the object can be dragged along the screen and when released it should snap to some place on the screen.\nThe problem was that despite using ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event")," and mapping gesture state to the position of the box, and making this whole interaction run on UI thread with ",Object(r.b)("inlineCode",{parentName:"p"},"useNativeDriver"),' flag, we still had to call back into JS at the end of the gesture for us to start "snap" animation.\nThis is because ',Object(r.b)("inlineCode",{parentName:"p"},"Animated.spring({}).start()"),' cannot be used in a "declarative" manner, because when it gets executed it has a "side effect" of starting a process (an animation) that updates the value for some time.\nAdding "side effect" nodes into the current Animated implementation turned out to be a pretty difficult task as the execution model of the Animated API runs all the dependent nodes of each frame for the views that need to update.\nWe don\'t want to run "side effects" more often than necessary as it would, for example, result in the animation starting multiple times.'),Object(r.b)("p",null,"Another inspiration to redesigning the internals of ",Object(r.b)("inlineCode",{parentName:"p"},"Animated"),' was Krzysztof\'s work on porting "Animated Tracking" functionality to the native driver.\nApparently, even though the native driver is out for quite a while, it still does not support all the things non-native ',Object(r.b)("inlineCode",{parentName:"p"},"Animated")," lib can do.\nObviously, it is far more difficult to build three versions of each feature (JS, Android and iOS) instead of one, and the same applies for fixing bugs.\nOne of the goals of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated"),' was to provide a more generic building block for the API that would allow for building more complex features only in JS and make the native codebase as minimal as possible.\nTaking "diffClamp" node as an example, it is currently implemented in three different places in ',Object(r.b)("inlineCode",{parentName:"p"},"Animated")," core and even though it is pretty useful it actually only has one use case (collapsible scrollview header)."),Object(r.b)("p",null,"On a similar topic, there's React Native's PR ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/18029"},"#18029")," and even though it provides a legitimate use case, maintainers are hesitant about merging it. The ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," API shouldn't block people from building things like this and the goal of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," is to provide lower level access that would allow for implementing that and many more features with no necessary changes to the core of the library."),Object(r.b)("p",null,"You can watch Krzysztof Magiera's ",Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kdq4z2708VM"},"React Europe talk")," where he explains the motivation."),Object(r.b)("p",null,"The goals:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"More generic primitive node types leading to more code reuse for the library internals therefore making it easier to add new features and fix bugs."),Object(r.b)("li",{parentName:"ul"},"The new set of base nodes can be used to implement ",Object(r.b)("inlineCode",{parentName:"li"},"Animated")," compatible API including:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Complex nodes such as \u201cdiffClamp\u201d."),Object(r.b)("li",{parentName:"ul"},"Interactions such as animated value tracking or animation staggering."))),Object(r.b)("li",{parentName:"ul"},"Conditional evaluation & nodes with side effects (",Object(r.b)("inlineCode",{parentName:"li"},"set"),", ",Object(r.b)("inlineCode",{parentName:"li"},"startClock"),", ",Object(r.b)("inlineCode",{parentName:"li"},"stopClock"),")."),Object(r.b)("li",{parentName:"ul"},"No more \u201cuseNativeDriver\u201d \u2013 all animations runs on the UI thread by default")),Object(r.b)("h3",{id:"reanimated-overview"},"Reanimated overview"),Object(r.b)("p",null,"We aim to bring this project to be fully compatible with ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," API. We believe that the set of base nodes we have selected should make this possible to be done only by writing JS code and does not require significant changes in the native codebases. Here is a list of things that haven't yet been ported from the original version of ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," library.\nAll the functionality that missing elements provide in ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," can already be achieved with ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," although a different methodology for implementing those may be required (e.g. check ",Object(r.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/declarative"},'"Declarative Animation API" section')," to see how the implementation may differ)."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"using value offsets"),Object(r.b)("li",{parentName:"ul"},"value tracking (can be achieved in different way, ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-reanimated")," also allows for tracking all the animation parameters not only destination params)"),Object(r.b)("li",{parentName:"ul"},"animation staggering"),Object(r.b)("li",{parentName:"ul"},"animation delays")),Object(r.b)("h3",{id:"at-most-once-evaluation-the-algorithm"},"At most once evaluation (the algorithm)"),Object(r.b)("p",null,"Unlike the original ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," library where each node could have been evaluated many times within a single frame, ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," restricts each node to be evaluated at most once in a frame.\nThis restriction is required for nodes that have side-effects to be used (e.g. ",Object(r.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/set"},Object(r.b)("inlineCode",{parentName:"a"},"set"))," or ",Object(r.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/startClock"},Object(r.b)("inlineCode",{parentName:"a"},"startClock")),").\nWhen node is evaluated (e.g. in case of an ",Object(r.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/add"},Object(r.b)("inlineCode",{parentName:"a"},"add"))," node we want to get a sum of the input nodes) its value is cached. If within the next frame there are other nodes that want to use the output of that node instead of evaluating we return cached value.\nThis notion also helps with performance as we can try to evaluate as few nodes as expected.\nThe current algorithm for making decisions of which nodes to evaluate works as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"For each frame we first analyze the generated events (e.g. touch stream). It is possible that events may update some animated values."),Object(r.b)("li",{parentName:"ol"},"Then we update values that correspond to ",Object(r.b)("a",{parentName:"li",href:"/react-native-reanimated/docs/1.x.x/clock"},"clock"),' nodes that are "running".'),Object(r.b)("li",{parentName:"ol"},"We traverse the node's tree starting from the nodes that have been updated in the current cycle and we look for final nodes that are connected to views."),Object(r.b)("li",{parentName:"ol"},"If we found nodes connected to view properties we evaluate them. This can recursively trigger an evaluation for their input nodes etc."),Object(r.b)("li",{parentName:"ol"},'After everything is done we check if some "running" clocks exists. If so we enqueue a callback to be evaluated with the next frame and start over from pt 1. Otherwise we do nothing.')),Object(r.b)("h3",{id:"100-declarative-gesture-interactions"},"100% declarative gesture interactions"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," works best with the ",Object(r.b)("a",{parentName:"p",href:"https://kmagiera.github.io/react-native-gesture-handler"},"Gesture Handler"),"\nlibrary. Currently all the examples are made using that library, including the ultimate\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/Example/src/imageViewer"},"ImagePreview app"),"."))}d.isMDXComponent=!0},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,p=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return a?i.a.createElement(p,l(l({ref:t},c),{},{components:a})):i.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);