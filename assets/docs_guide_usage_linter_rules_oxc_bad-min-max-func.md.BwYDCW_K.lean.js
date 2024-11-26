import{_ as r,c as h,j as s,a as e,G as i,w as o,a2 as d,B as t,o as p}from"./chunks/framework.Cm5JpC29.js";const C=JSON.parse('{"title":"oxc/bad-min-max-func","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md","filePath":"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md"}'),c={name:"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md"},k={id:"oxc-bad-min-max-func",tabindex:"-1"},u={class:"rule-meta"};function m(x,a,E,g,f,b){const n=t("Badge"),l=t("Alert");return p(),h("div",null,[s("h1",k,[a[0]||(a[0]=e("oxc/bad-min-max-func ")),i(n,{type:"info",text:"Correctness"}),a[1]||(a[1]=e()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#oxc-bad-min-max-func","aria-label":'Permalink to "oxc/bad-min-max-func <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",u,[i(l,{class:"default-on",type:"success"},{default:o(()=>a[3]||(a[3]=[s("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1})]),a[4]||(a[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Checks whether the clamp function <code>Math.min(Math.max(x, y), z)</code> always evaluate to a constant result because the arguments are in the wrong order.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z));</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/oxc/bad_min_max_func.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,6))])}const F=r(c,[["render",m]]);export{C as __pageData,F as default};
