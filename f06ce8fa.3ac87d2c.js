(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(190)),i={id:"limitations",title:"Limitations, etc"},s={id:"limitations",title:"Limitations, etc",description:'## Expectations <a name="expectations"></a>',source:"@site/docs/02-limitations.md",permalink:"/docs/limitations",sidebar:"docs",previous:{title:"Separation logic and bi-abduction",permalink:"/docs/separation-logic-and-bi-abduction"},next:{title:"Checkers bug types",permalink:"/docs/checkers-bug-types"}},l=[{value:'Expectations <a name="expectations"></a>',id:"expectations",children:[]},{value:'Bug types <a name="bugtypes"></a>',id:"bug-types",children:[]},{value:'Language Features <a name="languagefeatures"></a>',id:"language-features",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"expectations"},"Expectations ",Object(o.b)("a",{name:"expectations"})),Object(o.b)("p",null,"We want to be clear that if you run Infer on your project you might get very\ngood results, but it is also possible that you don't. Although we have had good\nfix rates working with Facebook mobile codebases, we are not making strong\nclaims about rates of false alarms or similar when applied to arbitrary\ncodebases. For example, we have had some success\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"blog/2015/05/22/Infer-on-open-source-android-apps"}),"getting bugs fixed in the DuckDuckGo Android App"),",\nbut we encountered many false alarms when running Infer on GNU coreutils. It is\ntypical of program verification and static analysis tools that their results\nvary, and that is to be expected, e.g., because they are tackling undecidable\nproblems and because different codebases they are applied to will have been\ncoded differently."),Object(o.b)("p",null,"The good thing, though, is that you might get useful results! And, where the\nresults are imperfect, this can be taken as input for improvement."),Object(o.b)("p",null,"Apart from these general remarks, Infer has a number of specific technical\nlimitations, which we describe in terms of bug types and language features."),Object(o.b)("h2",{id:"bug-types"},"Bug types ",Object(o.b)("a",{name:"bugtypes"})),Object(o.b)("p",null,"At present Infer is reporting on a restricted collection of\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/checkers-bug-types"}),"bug types"),", typically involving null pointers and\nmemory or resource leaks. The initial set of bug types Infer has focused on was\ndriven by the most pressing needs for serving the Facebook mobile developers.\nOur approach has been to report less initially, to iterate with developers and\nprovide value to them, and gradually expand what we can do while still providing\nvalue."),Object(o.b)("p",null,"Some bug types we don't report as of yet include"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Array bounds errors"),Object(o.b)("li",{parentName:"ul"},"Cast exceptions"),Object(o.b)("li",{parentName:"ul"},"Leaking of tainted data"),Object(o.b)("li",{parentName:"ul"},"Concurrency race conditions")),Object(o.b)("p",null,"and more. In the first three cases we have partial treatments inside of Infer,\nbut we have not surfaced these capabilities yet; the reports are not of\nsufficient quality to present to developers. For example, Infer can find some\npotential array bounds errors, but many of its reports are false alarms and it\nmisses still more."),Object(o.b)("p",null,"Put another way: there is more work to do!"),Object(o.b)("h2",{id:"language-features"},"Language Features ",Object(o.b)("a",{name:"languagefeatures"})),Object(o.b)("p",null,"A different dimension in which Infer is limited concerns language features.\nInfer either does not understand or has a weak treatment of"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Concurrency, including Java's Concurrency Utilities and iOS's Grand Central\nDispatch"),Object(o.b)("li",{parentName:"ul"},"Dynamic dispatch"),Object(o.b)("li",{parentName:"ul"},"Reflection"),Object(o.b)("li",{parentName:"ul"},"Android lifecycles"),Object(o.b)("li",{parentName:"ul"},"Arithmetic"),Object(o.b)("li",{parentName:"ul"},"and more")),Object(o.b)("p",null,"Some of these problems are fundamental, largely open, problems in program\nanalysis (especially concurrency), while for others there is much prior and\nsuccessful work to draw upon (e.g., arithmetic) and are simply on our todo list\nawaiting work."),Object(o.b)("p",null,"Thus, Infer's core algorithms can be understood as being sound with respect to\nan idealized model (that is all soundness can ever be), but this idealized model\nis some distance from real execution models for programs where Infer is\ndeployed. One consequence of this is that we cannot claim that Infer reasons\nabout ",Object(o.b)("i",null," all ")," flows through an application, but only ",Object(o.b)("i",null," some ")," flows."),Object(o.b)("p",null,"In approaching these limitations going forward we must consider solutions that\ntake into account our use case: to comment in minutes on modifications to large\ncodebases. Methods based on whole program analysis are challenging to consider\nwhen approaching these problems for our deployment model."),Object(o.b)("p",null,"These limitations can be seen positively as opportunities for improvement, to do\nmore static analysis and program verification for the benefit of programmers\neverywhere! We will be delighted if people from the static analysis and program\nverification communities join us in working on these problems."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);