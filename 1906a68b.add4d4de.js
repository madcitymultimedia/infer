(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"Math",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(9),r=(a(0),a(190)),c={id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction"},i={id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction",description:"export const Math = ({ code }) => ( <img",source:"@site/docs/02-separation-logic-and-biabduction.md",permalink:"/docs/separation-logic-and-bi-abduction",sidebar:"docs",previous:{title:"About Infer",permalink:"/docs/about-Infer"},next:{title:"Limitations, etc",permalink:"/docs/limitations"}},l=[{value:"Separation logic",id:"separation-logic",children:[]},{value:"Bi-abduction",id:"bi-abduction",children:[]},{value:"Technical papers",id:"technical-papers",children:[]}],s=function(e){var t=e.code;return Object(r.b)("img",{src:"https://math.now.sh?from="+encodeURIComponent(t)+"&color=mediumslateblue",style:{height:"100%",verticalAlign:"middle"}})},b={rightToc:l,Math:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"separation-logic-and-bi-abduction#separation-logic"}),"Separation logic")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"separation-logic-and-bi-abduction#bi-abduction"}),"Bi-abduction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"separation-logic-and-bi-abduction#technical-papers"}),"Technical papers"))),Object(r.b)("h2",{id:"separation-logic"},"Separation logic"),Object(r.b)("p",null,"Separation logic is a novel kind of mathematical logic which facilitates\nreasoning about mutations to computer memory. It enables scalability by breaking\nreasoning into chunks corresponding to local operations on memory, and then\ncomposing the reasoning chunks together."),Object(r.b)("p",null,"Separation logic is based on a logical connective ",Object(r.b)(s,{code:"\\\\( * \\\\)",mdxType:"Math"}),"\ncalled the ",Object(r.b)("em",{parentName:"p"},"separating conjunction"),' and pronounced "and separately". Separation\nlogic formulae are interpreted over program allocated heaps. The logical formula'),Object(r.b)(s,{code:"\\\\( A*B \\\\)",mdxType:"Math"})," holds of a piece of program heap (a heaplet) when it can be divided into two sub-heaplets described by ",Object(r.b)(s,{code:"\\\\(A\\\\)",mdxType:"Math"})," and",Object(r.b)(s,{code:"\\\\(B\\\\)",mdxType:"Math"}),". For example, the formula",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(x \\mapsto y * y \\mapsto x \\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,'can be read "',Object(r.b)(s,{code:"\\\\(x\\\\)",mdxType:"Math"})," points to ",Object(r.b)(s,{code:"\\\\(y\\\\)",mdxType:"Math"})," and\nseparately ",Object(r.b)(s,{code:"\\\\(y\\\\)",mdxType:"Math"})," points to ",Object(r.b)(s,{code:"\\\\(x\\\\)",mdxType:"Math"}),'". This\nformula describes precisely two allocated memory cells. The first cell is\nallocated at the address denoted by the pointer ',Object(r.b)(s,{code:"\\\\(x\\\\)",mdxType:"Math"})," and the\ncontent of this cell is the value of ",Object(r.b)(s,{code:"\\\\(y\\\\)",mdxType:"Math"}),". The second cell is\nallocated at the address denoted by the pointer ",Object(r.b)(s,{code:"\\\\(y\\\\)",mdxType:"Math"})," and the\ncontent of this second cell is the value of ",Object(r.b)(s,{code:"\\\\(x\\\\)",mdxType:"Math"}),". Crucially,\nwe know that there are precisely two cells because ",Object(r.b)(s,{code:"\\\\( * \\\\)",mdxType:"Math"}),"\nstipulates that they are separated and therefore the cells are allocated in two\ndifferent parts of memory. In other words, ",Object(r.b)(s,{code:"\\\\( * \\\\)",mdxType:"Math"})," says that"),Object(r.b)(s,{code:"\\\\(x\\\\)",mdxType:"Math"})," and ",Object(r.b)(s,{code:"\\\\(y\\\\)",mdxType:"Math"})," do not hold the same value (i.e., these pointers are not aliased). The heaplet partitioning defined by the formula above can visualized like so:",Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/SepSplit.jpg",alt:null}))),Object(r.b)("p",null,"The important thing about separating conjunction is the way that it fits\ntogether with mutation to computer memory; reasoning about program commands\ntends to work by updating ",Object(r.b)(s,{code:"\\\\(*\\\\)",mdxType:"Math"}),"-conjuncts in-place, mimicking\nthe operational in-place update of RAM."),Object(r.b)("p",null,"Separation logic uses Hoare triples of the form"),Object(r.b)(s,{code:"\\\\( \\lbrace pre \\rbrace prog \\lbrace post \\rbrace \\\\)",mdxType:"Math"})," where",Object(r.b)(s,{code:"\\\\(pre\\\\)",mdxType:"Math"})," is the precondition, ",Object(r.b)(s,{code:"\\\\(prog\\\\)",mdxType:"Math"})," a program part, and ",Object(r.b)(s,{code:"\\\\(post\\\\)",mdxType:"Math"})," the postcondition. Triples are abstract specifications of the behavior of the program. For example, we could take",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace r \\mapsto open\\rbrace \\, closeResource(r)\\, \\lbrace r \\mapsto closed\\rbrace  \\;\\;\\; (spec)\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"as a specification for a method which closes a resource given to it as a\nparameter."),Object(r.b)("p",null,"Now, suppose we have two resources ",Object(r.b)(s,{code:"\\\\( r\\_1 \\\\)",mdxType:"Math"})," and"),Object(r.b)(s,{code:"\\\\( r\\_2 \\\\)",mdxType:"Math"}),", described by",Object(r.b)(s,{code:"\\\\(r\\_1 \\mapsto open * r\\_2 \\mapsto open\\\\)",mdxType:"Math"})," and we close the first of them. We think operationally in terms of updating the memory in place, leaving \\\\(r_2 \\mapsto open\\\\) alone, as described by this triple:",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace r\\_1 \\mapsto open * r\\_2 \\mapsto open\\rbrace  closeResource(r\\_1) \\lbrace r\\_1 \\mapsto closed * r\\_2 \\mapsto open \\rbrace \\;\\;\\; (use)\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"What we have here is the that specification (spec) described how"),Object(r.b)(s,{code:"\\\\(closeResource()\\\\)",mdxType:"Math"})," works by mentioning only one piece of state, what is sometimes called a small specification, and in (use) we use that specification to update a larger precondition in place.",Object(r.b)("p",null,"This is an instance of a general pattern. There is a rule that lets you go from\nsmaller to bigger specifications"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\frac{\\lbrace pre \\rbrace prog \\lbrace post \\rbrace}{\\lbrace pre * frame \\rbrace prog \\lbrace post * frame \\rbrace}\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Our passage from (spec) to (use) is obtained by taking"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)(s,{code:"\\\\(pre\\\\)",mdxType:"Math"})," to be ",Object(r.b)(s,{code:"\\\\(r\\_1 \\mapsto open\\\\)",mdxType:"Math"})),Object(r.b)("li",{parentName:"ul"},Object(r.b)(s,{code:"\\\\(post\\\\)",mdxType:"Math"})," to be ",Object(r.b)(s,{code:"\\\\(r\\_1 \\mapsto closed \\\\)",mdxType:"Math"}),", and"),Object(r.b)("li",{parentName:"ul"},Object(r.b)(s,{code:"\\\\(frame\\\\)",mdxType:"Math"})," to be ",Object(r.b)(s,{code:"\\\\(r\\_2 \\mapsto open \\\\)",mdxType:"Math"}))),Object(r.b)("p",null,"This rule is called the ",Object(r.b)("em",{parentName:"p"},"frame rule")," of separation logic. It is named after the\nframe problem, a classic problem in artificial intelligence. Generally, the"),Object(r.b)(s,{code:"\\\\(frame\\\\)",mdxType:"Math"})," describes state that remains unchanged; the terminology comes from the analogy of a background scene in an animation as unchanging while the objects and characters within the scene change.",Object(r.b)("p",null,"The frame rule is the key to the principle of local reasoning in separation\nlogic: reasoning and specifications should concentrate on the resources that a\nprogram accesses (the footprint), without mentioning what doesn't change."),Object(r.b)("h2",{id:"bi-abduction"},"Bi-abduction"),Object(r.b)("p",null,"Bi-abduction is a form of logical inference for separation logic which automates\nthe key ideas about local reasoning."),Object(r.b)("p",null,"Usually, logic works with validity or entailment statements like"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(A \\vdash B\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"which says that ",Object(r.b)(s,{code:"\\\\(A\\\\)",mdxType:"Math"})," implies ",Object(r.b)(s,{code:"\\\\(B\\\\)",mdxType:"Math"}),". Infer\nuses an extension of this inference question in an internal theorem prover while\nit runs over program statements. Infer's question"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(A * ?antiframe \\vdash B * ?frame\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"is called ",Object(r.b)("em",{parentName:"p"},"bi-abduction"),". The problem here is for the theorem prover to ",Object(r.b)("i",null,"\ndiscover ")," a pair of frame and antiframe formulae that make the entailment\nstatement valid."),Object(r.b)("p",null,"Global analyses of large programs are normally computational untractable.\nHowever, bi-abduction allows to break the large analysis of a large program in\nsmall independent analyses of its procedures. This gives Infer the ability to\nscale independently of the size of the analyzed code. Moreover, by breaking the\nanalysis in small independent parts, when the full program is analyzed again\nbecause of a code change the analysis results of the unchanged part of the code\ncan be reused and only the code change needs to be re-analyzed. This process is\ncalled incremental analysis and it is very powerful when integrating a static\nanalysis tool like infer in a development environment."),Object(r.b)("p",null,"In order to be able to decompose a global analysis in small independent\nanalyses, let's first consider how a function call is analyzed in separation\nlogic. Assume we have the following spec for a function"),Object(r.b)(s,{code:"\\\\( f() \\\\)",mdxType:"Math"}),":",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace pre\\_f \\rbrace \\;\\; f() \\;\\; \\lbrace post\\_f \\rbrace \\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"and by analyzing the caller function, we compute that before the call of"),Object(r.b)(s,{code:"\\\\( f \\\\)",mdxType:"Math"}),", the formula ",Object(r.b)(s,{code:"\\\\( CallingState \\\\)",mdxType:"Math"}),"hold. Then to utilize the specification of ",Object(r.b)(s,{code:"\\\\( f \\\\)",mdxType:"Math"})," the following implication must holds:",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( CallingState \\vdash pre\\_f  \\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; (Function Call)\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Given that, bi-abduction is used at procedure call sites for two reasons: to\ndiscover missing state that is needed for the above implication to hold and\nallow the analysis to proceed (the antiframe) as well as state that the\nprocedure leaves unchanged (the frame)."),Object(r.b)("p",null,"To see how this works suppose we have some bare code"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(closeResource(r1); \\, closeResource(r2)\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"but no overall specification; we are going to describe how to discover a\npre/post spec for it. Considering the first statement and the (spec) above, the\nhuman might say: if only we had ",Object(r.b)(s,{code:"\\\\(r1 \\mapsto open\\\\)",mdxType:"Math"})," in the\nprecondition then we could proceed. Technically, we ask a bi-abduction question"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(emp * ?antiframe \\vdash r1 \\mapsto open * ?frame\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"and we can fill this in easily by picking"),Object(r.b)(s,{code:"\\\\(antiframe = r1 \\mapsto open\\\\)",mdxType:"Math"})," and",Object(r.b)(s,{code:"\\\\(frame = emp\\\\)",mdxType:"Math"}),", where emp means the empty state. The emp is recording that at the start we presume nothing. So we obtain the trivially true implication:",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(emp * r1 \\mapsto open \\vdash r1 \\mapsto open * emp\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"which, by applying logical rules, can be re-written equivalently to:"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(r1 \\mapsto open \\vdash r1 \\mapsto open\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Notice that this satisfy the (Function Call) requirement to correctly make the\ncall. So let's add that information in the pre, and while we are at it record\nthe information in the post of the first statement that comes from (spec)."),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto closed \\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Now, let's move to the second statement. Its precondition"),Object(r.b)(s,{code:"\\\\(r1 \\mapsto closed\\\\)",mdxType:"Math"})," in the partial symbolic execution trace just given does not have the information needed by",Object(r.b)(s,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"}),", so we can fill that in and continue by putting ",Object(r.b)(s,{code:"\\\\(r2 \\mapsto open\\\\)",mdxType:"Math"})," in the pre. While we are at it we can thread this assertion back to the beginning.",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"This information on what to thread backwards can be obtained as the antiframe\npart of the bi-abduction question"),Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\(r1 \\mapsto closed * ?antiframe \\vdash r2 \\mapsto open * ?frame\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"where the solution picks"),Object(r.b)(s,{code:"\\\\(antiframe = r2 \\mapsto open\\\\) and \\\\(frame = r1 \\mapsto closed\\\\)",mdxType:"Math"}),". Note that the antiframe is precisely the information missing from the precondition in order for ",Object(r.b)(s,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"})," to proceed. On the other hand, the frame ",Object(r.b)(s,{code:"\\\\(r1 \\mapsto closed\\\\)",mdxType:"Math"})," is the portion of state not changed by ",Object(r.b)(s,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"}),"; we can thread that through to the overall postconditon (as justified by the frame rule), giving us",Object(r.b)("hr",null),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),Object(r.b)(s,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto closed \\rbrace\\\\)",mdxType:"Math"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Thus, we have obtained a pre and post for this code by symbolically executing\nit, using bi-abduction to discover preconditions (abduction of antiframes) as\nwell as untouched portions of memory (frames) as we go along."),Object(r.b)("p",null,"In general, bi-abduction provides a way to infer a pre/post specs from bare\ncode, as long as we know specs for the primitives at the base level of the code.\nThe human does not need to write preconditions and postconditions for all the\nprocedures, which is the key to having a high level of automation. This is the\nbasis for how Infer works, why it can scale, and how it can analyze code changes\nincrementally."),Object(r.b)("p",null,"Context: The logical terminology we have been using here comes from AI and\nphilosophy of science. Abductive inference was introduced by the philosopher\nCharles Peirce, and described as the mechanism underpinning hypothesis formation\n(or, guessing what might be true about the world), the most creative part of the\nscientific process. Abduction and the frame problem have both attracted\nsignificant attention in AI. Infer uses an automated form of abduction to\ngenerate preconditions describing the memory that a program touches (the\nantiframe part above), and frame inference to discover what isn't touched. Infer\nthen uses deductive reasoning to calculate a formula describing the effect of a\nprogram, starting from the preconditions. In a sense, Infer approaches automated\nreasoning about programs by mimicking what a human might do when trying to\nunderstand a program: it abduces what the program needs, and deduces conclusions\nof that. It is when the reasoning goes wrong that Infer reports a potential bug."),Object(r.b)("p",null,"This description is by necessity simplified compared to what Infer actually\ndoes. More technical information can be found in the following papers. The\ndescriptions in the papers are precise, but still simplified; there are many\nengineering decisions not recorded there. Finally, beyond the papers, you can\nread the source code if you wish!"),Object(r.b)("h2",{id:"technical-papers"},"Technical papers"),Object(r.b)("p",null,"The following papers contain some of the technical background on Infer and\ninformation on how it is used inside Facebook."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"http://link.springer.com/chapter/10.1007%2F3-540-44802-0_1"},"Local Reasoning about Programs that Alter Data Structures.")," An early separation logic paper which advanced ideas about local reasoning and the frame rule."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"http://link.springer.com/chapter/10.1007/11804192_6"},"Smallfoot: Modular Automatic Assertion Checking with Separation Logic.")," First separation logic verification tool, introduced frame inference"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"http://link.springer.com/chapter/10.1007%2F11691372_19"},"A Local Shape Analysis Based on Separation Logic.")," Separation logic meets abstract interpretation; calculating loop invariants via a fixed-point computation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"http://dl.acm.org/citation.cfm?id=2049700"},"Compositional Shape Analysis by Means of Bi-Abduction.")," The bi-abduction paper."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://research.facebook.com/publications/moving-fast-with-software-verification/"},"Moving Fast with Software Verification.")," A paper about the way we use Infer at Facebook.")))}p.isMDXComponent=!0},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?o.a.createElement(m,i({ref:t},s,{components:a})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);