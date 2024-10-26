import{_ as i,c as n,j as t,a as s,G as r,a2 as l,B as o,o as h}from"./chunks/framework.8qdJL5ht.js";const b=JSON.parse('{"title":"jest/no-test-return-statement","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-test-return-statement.md","filePath":"docs/guide/usage/linter/rules/jest/no-test-return-statement.md"}'),d={name:"docs/guide/usage/linter/rules/jest/no-test-return-statement.md"},p={id:"jest-no-test-return-statement",tabindex:"-1"};function k(u,e,c,g,m,E){const a=o("Badge");return h(),n("div",null,[t("h1",p,[e[0]||(e[0]=s("jest/no-test-return-statement ")),r(a,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#jest-no-test-return-statement","aria-label":'Permalink to "jest/no-test-return-statement <Badge type="info" text="Style" />"'},"​",-1))]),e[3]||(e[3]=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow explicitly returning from tests.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Tests in Jest should be void and not return values. If you are returning Promises then you should update the test to use <code>async/await</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;one&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/no_test_return_statement.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const f=i(d,[["render",k]]);export{b as __pageData,f as default};
