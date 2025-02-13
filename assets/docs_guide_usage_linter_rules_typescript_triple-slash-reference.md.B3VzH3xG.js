import{_ as n,C as a,c as o,o as p,j as s,ag as d,a as t,G as i,w as h}from"./chunks/framework.K3-BBDXc.js";const v=JSON.parse('{"title":"typescript/triple-slash-reference","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/triple-slash-reference.md","filePath":"docs/guide/usage/linter/rules/typescript/triple-slash-reference.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/triple-slash-reference.md"},u={id:"typescript-triple-slash-reference",tabindex:"-1"},f={class:"rule-meta"};function k(g,e,b,y,m,_){const r=a("Badge"),l=a("Alert");return p(),o("div",null,[s("h1",u,[e[0]||(e[0]=t("typescript/triple-slash-reference ")),i(r,{type:"info",text:"Correctness"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-triple-slash-reference","aria-label":'Permalink to "typescript/triple-slash-reference <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",f,[i(l,{class:"default-on",type:"success"},{default:h(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"✅",-1),t(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow certain triple slash directives in favor of ES6-style import declarations.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Use of triple-slash reference type directives is generally discouraged in favor of ECMAScript Module imports.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lib</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;code&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalThis.value;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/typescript/triple_slash_reference.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const A=n(c,[["render",k]]);export{v as __pageData,A as default};
