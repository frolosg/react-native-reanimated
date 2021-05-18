(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(271)),i={id:"useAnimatedProps",title:"useAnimatedProps",sidebar_label:"useAnimatedProps"},p={unversionedId:"api/useAnimatedProps",id:"version-2.0.0/api/useAnimatedProps",isDocsHomePage:!1,title:"useAnimatedProps",description:"This hook is a counterpart of useAnimatedStyle hook, but works for a non-style view properties.",source:"@site/versioned_docs/version-2.0.0/api/useAnimatedProps.md",slug:"/api/useAnimatedProps",permalink:"/react-native-reanimated/docs/2.0.0/api/useAnimatedProps",version:"2.0.0",sidebar_label:"useAnimatedProps",sidebar:"version-2.0.0/docs",previous:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/2.0.0/api/useAnimatedReaction"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/2.0.0/api/withTiming"}},s=[{value:"Example",id:"example",children:[{value:"Arguments",id:"arguments",children:[]}]},{value:"Example",id:"example-1",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This hook is a counterpart of ",Object(o.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.0.0/api/useAnimatedStyle"},Object(o.b)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," hook, but works for a non-style view properties.\nIt allows for defining a set of native view properties that can be updated on the UI thread as a response to a Shared Value change.\nSimilarily to ",Object(o.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.0.0/api/useAnimatedStyle"},Object(o.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),", this hook takes a single worklet (it is not necessary to add ",Object(o.b)("inlineCode",{parentName:"p"},"worklet")," directive here, because the method will be converted to worklet automatically).\nThe provided worklet is responsible for returning a object with view properties."),Object(o.b)("p",null,'Only "native" properties of "native views" can be set via ',Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedProps"),".\nThe most common usecase for this hook is when we want to animate properties of some third-party native component, since most of the properties for the core React Native components are a part of the styles anyways (at least the properties for which it makes sense to be animated).\nYou can use the following functions to animate properties that Reanimated don't support by default:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"addWhitelistedNativeProps()")," is used to animate properties that trigger layout recalculation, you can find them ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/src/ConfigHelper.js#L31"},"here"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"addWhitelistedUIProps()")," is used for properties that are updated directly on the UI thread, currently allowed props are listed ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/src/ConfigHelper.js#L6"},"here"),"."))),Object(o.b)("p",null,"In order to connect the ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedProps")," hook result to a view, you need to pass it as ",Object(o.b)("inlineCode",{parentName:"p"},"animatedProps")," property to the ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"animatedProps")," property is added when a native component is wrapped with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.createAnimatedComponent"),"."),Object(o.b)("p",null,"If the animated props worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),Object(o.b)("p",null,"In the example below we use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-svg"},Object(o.b)("inlineCode",{parentName:"a"},"react-native-svg"))," package and animate one of the native properties of SVG views:"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{12-16}","{12-16}":!0},"import React from 'react';\nimport { StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedProps,\n} from 'react-native-reanimated';\nimport Svg, { Path } from 'react-native-svg';\n\nconst AnimatedPath = Animated.createAnimatedComponent(Path);\n\nfunction App() {\n  const radius = useSharedValue(50);\n\n  const animatedProps = useAnimatedProps(() => {\n    // draw a circle\n    const path = `\n    M 100, 100\n    m -${radius.value}, 0\n    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0\n    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0\n    `;\n    return {\n      d: path,\n    };\n  });\n\n  // attach animated props to an SVG path using animatedProps\n  return (\n    <Svg>\n      <AnimatedPath animatedProps={animatedProps} fill=\"black\" />\n    </Svg>\n  );\n}\n")),Object(o.b)("h1",{id:"createanimatedpropadapter"},"createAnimatedPropAdapter"),Object(o.b)("p",null,"In some third-party libraries(but also may happen in users' custom components), props are named differently on the API layer than they really are underneath. This tool lets users handle such situations by defining a proper way to convert specific props."),Object(o.b)("p",null,"Note: It is recommended to create adapters outside of components. ",Object(o.b)("inlineCode",{parentName:"p"},"createAnimatedPropAdapter")," is not a hook and should not be called on every component's rerender."),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"adapter-function"},Object(o.b)("inlineCode",{parentName:"h4"},"adapter")," ","[Function]"),Object(o.b)("p",null,"Required parameter, this is a function that would receive an object of props that are supposed to be updated on the UI thread. The function itself doesn't have to return anything - modifying the received object is enough."),Object(o.b)("h4",{id:"nativeprops-array"},Object(o.b)("inlineCode",{parentName:"h4"},"nativeProps")," ","[Array]"),Object(o.b)("p",null,"A list of props that should be added to ",Object(o.b)("inlineCode",{parentName:"p"},"NATIVE_THREAD_PROPS_WHITELIST"),"."),Object(o.b)("h2",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{3,9,24}","{3,9,24}":!0},"class Hello extends React.Component {\n  render() {\n    return <Text style={{ fontSize: this.props.helloSize }}>Hello</Text>;\n  }\n}\n\nconst AnimatedHello = Animated.createAnimatedComponent(Hello);\n\nconst adapter = createAnimatedPropAdapter(\n  (props) => {\n    if (Object.keys(props).includes('helloSize')) {\n      props.fontSize = props.helloSize;\n      delete props.helloSize;\n    }\n  },\n  ['fontSize']\n);\n\nexport default function Component() {\n  const sv = useSharedValue(14);\n  const helloProps = useAnimatedProps(\n    () => ({ helloSize: sv.value }),\n    null,\n    adapter\n  );\n\n  return <AnimatedHello animatedProps={helloProps} />;\n}\n")))}l.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.a.createElement(b,p(p({ref:t},c),{},{components:n})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);