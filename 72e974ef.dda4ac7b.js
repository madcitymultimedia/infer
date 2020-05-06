(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(1),l=t(9),r=(t(0),t(190)),i={id:"eradicate-warnings",title:"Eradicate warnings"},o={id:"eradicate-warnings",title:"Eradicate warnings",description:"Below you will find a description of all the warnings reported by",source:"@site/docs/03-eradicate-warnings.md",permalink:"/docs/eradicate-warnings",sidebar:"docs",previous:{title:"Checkers bug types",permalink:"/docs/checkers-bug-types"},next:{title:"Linters bug types",permalink:"/docs/linters-bug-types"}},c=[{value:"Eradicate null field access",id:"eradicate-null-field-access",children:[]},{value:"Eradicate null method call",id:"eradicate-null-method-call",children:[]},{value:"Eradicate field not nullable",id:"eradicate-field-not-nullable",children:[]},{value:"Eradicate field not initialized",id:"eradicate-field-not-initialized",children:[]},{value:"Eradicate parameter not nullable",id:"eradicate-parameter-not-nullable",children:[]},{value:"Eradicate return not nullable",id:"eradicate-return-not-nullable",children:[]},{value:"Eradicate condition redundant",id:"eradicate-condition-redundant",children:[]},{value:"Eradicate return overannotated",id:"eradicate-return-overannotated",children:[]},{value:"Eradicate inconsistent subclass return annotation",id:"eradicate-inconsistent-subclass-return-annotation",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Below you will find a description of all the warnings reported by\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/eradicate"}),"Eradicate"),"."),Object(r.b)("h2",{id:"eradicate-null-field-access"},"Eradicate null field access"),Object(r.b)("p",null,"A field access of the form x.field where x could be null."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void foo(@Nullable C x) {\n    x.field = 3;\n  }\n}\n")),Object(r.b)("p",null,"Action: Make sure that x cannot be null by changing the code or changing\nannotations. If this cannot be done, the only choice is to use defensive\nprogramming: if (x != null) { ... x.field ... } else { ... you need to decide\nwhat to do when x is null ... } The general recommendation is to push null\nchecks up the call chain as much as possible in order to detect the place where\nnull values originate and deal with them at that point. When a null value is\npropagated down the call chain it is often difficult to determine its origin\nwithout global knowledge of what the program does. For example, a null value\ncould originate in third party libraries which are not under your control, and\nthe best place to check for null is typically immediately after calling these\nlibrary functions."),Object(r.b)("h2",{id:"eradicate-null-method-call"},"Eradicate null method call"),Object(r.b)("p",null,"A method call x.m(...) where x could be null."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void foo(@Nullable C x) {\n    String s = x.toString();\n  }\n}\n")),Object(r.b)("p",null,"Action: Same as for Null field access."),Object(r.b)("h2",{id:"eradicate-field-not-nullable"},"Eradicate field not nullable"),Object(r.b)("p",null,"An assignment x.f = v where v could be null and field f is not annotated with\n@Nullable."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String f;\n\n  void foo(@Nullable String s) {\n    f = s;\n  }\n}\n")),Object(r.b)("p",null,"Action: The preferred action is to ensure that a null value is never stored in\nthe field, by changing the code or changing annotations. If this cannot be done,\nadd a @Nullable annotation to the field. This annotation might trigger more\nwarnings in other code that uses the field, as that code must now deal with null\nvalues."),Object(r.b)("h2",{id:"eradicate-field-not-initialized"},"Eradicate field not initialized"),Object(r.b)("p",null,"The constructor does not initialize a field f which is not annotated with\n@Nullable"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String f;\n\n  C () { // field f not initialized and not annotated @Nullable\n  }\n}\n")),Object(r.b)("p",null,"Action: The preferred action is to initialize the field with a value that is not\nnull. If, by design, null is a valid value for the field, then it should be\nannotated with @Nullable."),Object(r.b)("h2",{id:"eradicate-parameter-not-nullable"},"Eradicate parameter not nullable"),Object(r.b)("p",null,"Method call x.m(..., v, ...) where v can be null and the corresponding parameter\nin method m is not annotated with @Nullable"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void m(C x) {\n    String s = x.toString()\n  }\n\n  void test(@Nullable C x) {\n    m(x);\n  }\n}\n")),Object(r.b)("p",null,"Action: The preferred action is to ensure that a null value is never passed to\nthe method, by changing the code or changing annotations. If this cannot be\ndone, add a @Nullable annotation to the relevant parameter in the method\ndeclaration. This annotation might trigger more warnings in the implementation\nof method m, as that code must now deal with null values."),Object(r.b)("h2",{id:"eradicate-return-not-nullable"},"Eradicate return not nullable"),Object(r.b)("p",null,"Method m can return null, but the method's return type is not annotated with\n@Nullable"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String m() {\n    return null;\n  }\n}\n")),Object(r.b)("p",null,"Action: The preferred action is to ensure that a null value is never returned by\nthe method, by changing the code or changing annotations. If this cannot be\ndone, add a @Nullable annotation to the the method declaration. This annotation\nmight trigger more warnings in the callers of method m, as the callers must now\ndeal with null values."),Object(r.b)("h2",{id:"eradicate-condition-redundant"},"Eradicate condition redundant"),Object(r.b)("p",null,"This report is inactive by default. Condition (x != null) or (x == null) when x\ncannot be null: the first condition is always true and the second is always\nfalse"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class C {\n  void m() {\n    String s = new String("abc");\n    if (s != null) {\n      int n = s.length();\n    }\n  }\n}\n')),Object(r.b)("p",null,"Action: Make sure that the annotations are correct, as the condition is\nconsidered redundant based on the existing annotations. In particular, check the\nannotation of any input parameters and fields of the current method, as well as\nthe annotations of any method called directly by the current method, if\nrelevant. If the annotations are correct, you can remove the redundant case."),Object(r.b)("h2",{id:"eradicate-return-overannotated"},"Eradicate return overannotated"),Object(r.b)("p",null,"This report is inactive by default. Method m is annotated with @Nullable but the\nmethod cannot return null"),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class C {\n  @Nullable String m() {\n    String s = new String("abc");\n    return s;\n  }\n}\n')),Object(r.b)("p",null,"Action: Make sure that the annotations are correct, as the return annotation is\nconsidered redundant based on the existing annotations. In particular, check the\nannotation of any input parameters and fields of the current method, as well as\nthe annotations of any method called directly by the current method, if\nrelevant. If the annotations are correct, you can remove the @Nullable\nannotation."),Object(r.b)("h2",{id:"eradicate-inconsistent-subclass-return-annotation"},"Eradicate inconsistent subclass return annotation"),Object(r.b)("p",null,"The return type of the overridden method is annotated @Nullable, but the\ncorresponding method in the superclass is not."),Object(r.b)("p",null,"Action: choose a consistent annotation based on the desired invariant."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class A {\n  String create() {\n    return new String("abc");\n  }\n}\n\nclass B extends A {\n  @Nullable String create() {  // Inconsistent @Nullable annotation.\n      return null;\n  }\n}\n')),Object(r.b)("p",null,"A consistent use of @Nullable on the return type across subtyping should prevent\nruntime issue like in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Main {\n\n  int foo(A a) {\n     String s = a.create();\n     return s.length();\n  }\n\n  void main(String[] args) {\n     A a = new B();\n     foo(a);\n  }\n\n}\n```\n\n\n##  Inconsistent subclass parameter annotation\n\nA parameter of the overridden method is missing a @Nullable annotation present in the superclass.\n\nAction: choose a consistent annotation based on the desired invariant.\n\nExample:\n\n```java\nclass A {\n\n  int len(@Nullable String s) {\n    if (s != null) {\n      return s.length();\n    } else {\n      return 0;\n    }\n  }\n}\n\nclass B extends A {\n\n  int len(String s) {  // @Nullable missing.\n    return s.length();\n  }\n}\n```\n\nA consistent use of @Nullable on parameters across subtyping should prevent runtime issue like in:\n\n```java\npublic class Main {\n\n  String s;\n\n  int foo() {\n    A a = new B();\n    return a.len(s);\n  }\n}\n```\n")))}d.isMDXComponent=!0},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),d=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},u=function(e){var n=d(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},h=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),h=a,p=u["".concat(i,".").concat(h)]||u[h]||b[h]||r;return t?l.a.createElement(p,o({ref:n},s,{components:t})):l.a.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);