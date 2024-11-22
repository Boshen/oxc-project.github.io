import{_ as l,c as r,j as a,a as e,G as i,w as p,a2 as h,B as t,o as d}from"./chunks/framework.8qdJL5ht.js";const x=JSON.parse('{"title":"eslint/no-proto","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-proto.md","filePath":"docs/guide/usage/linter/rules/eslint/no-proto.md"}'),k={name:"docs/guide/usage/linter/rules/eslint/no-proto.md"},c={id:"eslint-no-proto",tabindex:"-1"},E={class:"rule-meta"};function u(g,s,_,b,y,f){const n=t("Badge"),o=t("Alert");return d(),r("div",null,[a("h1",c,[s[0]||(s[0]=e("eslint/no-proto ")),i(n,{type:"info",text:"Restriction"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-no-proto","aria-label":'Permalink to "eslint/no-proto <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",E,[i(o,{class:"fix",type:"info"},{default:p(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🚧",-1),e(" An auto-fix is still under development. ")])),_:1})]),s[4]||(s[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of the <code>__proto__</code> property</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>__proto__</code> property has been deprecated as of ECMAScript 3.1 and shouldn’t be used in new code. Use <code>Object.getPrototypeOf</code> and <code>Object.setPrototypeOf</code> instead.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-proto: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__proto__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__proto__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e91c2878d8c49213790df4d192bb3136503aa08b/crates/oxc_linter/src/rules/eslint/no_proto.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const F=l(k,[["render",u]]);export{x as __pageData,F as default};
