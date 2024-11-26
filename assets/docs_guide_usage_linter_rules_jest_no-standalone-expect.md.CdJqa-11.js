import{_ as i,c as n,j as s,a as t,G as o,a2 as l,B as r,o as d}from"./chunks/framework.Cm5JpC29.js";const b=JSON.parse('{"title":"jest/no-standalone-expect","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-standalone-expect.md","filePath":"docs/guide/usage/linter/rules/jest/no-standalone-expect.md"}'),p={name:"docs/guide/usage/linter/rules/jest/no-standalone-expect.md"},c={id:"jest-no-standalone-expect",tabindex:"-1"};function h(k,e,u,g,E,x){const a=r("Badge");return d(),n("div",null,[s("h1",c,[e[0]||(e[0]=t("jest/no-standalone-expect ")),o(a,{type:"info",text:"Correctness"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#jest-no-standalone-expect","aria-label":'Permalink to "jest/no-standalone-expect <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevents <code>expect</code> statements outside of a <code>test</code> or <code>it</code> block. An <code>expect</code> within a helper function (but outside of a <code>test</code> or <code>it</code> block) will not trigger this rule.</p><p>Statements like <code>expect.hasAssertions()</code> will NOT trigger this rule since these calls will execute if they are not in a test block.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">describe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/jest/no_standalone_expect.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const m=i(p,[["render",h]]);export{b as __pageData,m as default};
