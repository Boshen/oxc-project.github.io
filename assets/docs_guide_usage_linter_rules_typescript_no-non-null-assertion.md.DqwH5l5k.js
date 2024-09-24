import{_ as n,c as i,j as s,a as t,G as o,a2 as r,B as l,o as p}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"typescript/no-non-null-assertion","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md"}'),h={name:"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md"},d={id:"typescript-no-non-null-assertion",tabindex:"-1"};function c(u,e,k,y,g,m){const a=l("Badge");return p(),i("div",null,[s("h1",d,[e[0]||(e[0]=t("typescript/no-non-null-assertion ")),o(a,{type:"info",text:"Restriction"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-no-non-null-assertion","aria-label":'Permalink to "typescript/no-non-null-assertion <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions using the ! postfix operator.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>TypeScript&#39;s ! non-null assertion operator asserts to the type system that an expression is non-nullable, as in not null or undefined. Using assertions to tell the type system new information is often a sign that code is not fully type-safe. It&#39;s generally better to structure program logic so that TypeScript understands when values may be nullable.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x.y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/no_non_null_assertion.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const E=n(h,[["render",c]]);export{f as __pageData,E as default};
