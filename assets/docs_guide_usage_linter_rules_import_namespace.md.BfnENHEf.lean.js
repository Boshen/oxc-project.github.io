import{_ as r,c as s,j as a,a as t,G as n,a2 as i,B as c,o as d}from"./chunks/framework.DlAqvapY.js";const _=JSON.parse('{"title":"import/namespace","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/import/namespace.md","filePath":"docs/guide/usage/linter/rules/import/namespace.md"}'),p={name:"docs/guide/usage/linter/rules/import/namespace.md"},l={id:"import-namespace",tabindex:"-1"};function m(f,e,u,h,b,x){const o=c("Badge");return d(),s("div",null,[a("h1",l,[e[0]||(e[0]=t("import/namespace ")),n(o,{type:"info",text:"Correctness"}),e[1]||(e[1]=t()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#import-namespace","aria-label":'Permalink to "import/namespace <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=i('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces names exist at the time they are dereferenced, when imported as a full namespace (i.e. <code>import * as foo from &#39;./foo&#39;; foo.bar();</code> will report if bar is not exported by <code>./foo.</code>). Will report at the import declaration if there are no exported names found. Also, will report for computed references (i.e. <code>foo[&quot;bar&quot;]()</code>). Reports on assignment to a member of an imported namespace.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/import/namespace.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',5))])}const B=r(p,[["render",m]]);export{_ as __pageData,B as default};
