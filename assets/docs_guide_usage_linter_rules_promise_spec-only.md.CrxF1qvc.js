import{_ as t,c as o,j as s,a,G as r,a2 as n,B as l,o as p}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"promise/spec-only","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/promise/spec-only.md","filePath":"docs/guide/usage/linter/rules/promise/spec-only.md"}'),d={name:"docs/guide/usage/linter/rules/promise/spec-only.md"},h={id:"promise-spec-only",tabindex:"-1"};function c(m,e,u,k,g,y){const i=l("Badge");return p(),o("div",null,[s("h1",h,[e[0]||(e[0]=a("promise/spec-only ")),r(i,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#promise-spec-only","aria-label":'Permalink to "promise/spec-only <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=n('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow use of non-standard Promise static methods.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Non-standard Promises may cost more maintenance work.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">done</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/promise/spec_only.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const x=t(d,[["render",c]]);export{f as __pageData,x as default};
