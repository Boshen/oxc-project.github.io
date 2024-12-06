import{_ as l,c as o,j as s,a as r,G as a,w as c,a2 as p,B as t,o as d}from"./chunks/framework.Cm5JpC29.js";const S=JSON.parse('{"title":"unicorn/prefer-string-slice","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-slice.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-slice.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-slice.md"},g={id:"unicorn-prefer-string-slice",tabindex:"-1"},b={class:"rule-meta"};function k(u,e,f,E,m,v){const i=t("Badge"),n=t("Alert");return d(),o("div",null,[s("h1",g,[e[0]||(e[0]=r("unicorn/prefer-string-slice ")),a(i,{type:"info",text:"Pedantic"}),e[1]||(e[1]=r()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-string-slice","aria-label":'Permalink to "unicorn/prefer-string-slice <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",b,[a(n,{class:"fix",type:"info"},{default:c(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),r(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank" rel="noreferrer"><code>String#slice()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank" rel="noreferrer"><code>String#substr()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank" rel="noreferrer"><code>String#substring()</code></a>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank" rel="noreferrer"><code>String#substr()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank" rel="noreferrer"><code>String#substring()</code></a> are the two lesser known legacy ways to slice a string. It&#39;s better to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank" rel="noreferrer"><code>String#slice()</code></a> as it&#39;s a more popular option with clearer behavior that has a consistent <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="noreferrer"><code>Array</code> counterpart</a>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/fd0935cfcd660901d612b9b146bc136d40d2f02f/crates/oxc_linter/src/rules/unicorn/prefer_string_slice.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=l(h,[["render",k]]);export{S as __pageData,_ as default};
