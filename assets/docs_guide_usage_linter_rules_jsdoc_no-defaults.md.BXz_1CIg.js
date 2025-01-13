import{_ as o,c as r,j as a,a as i,G as e,w as h,a2 as p,B as t,o as d}from"./chunks/framework.Cm5JpC29.js";const A=JSON.parse('{"title":"jsdoc/no-defaults","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/no-defaults.md","filePath":"docs/guide/usage/linter/rules/jsdoc/no-defaults.md"}'),k={name:"docs/guide/usage/linter/rules/jsdoc/no-defaults.md"},c={id:"jsdoc-no-defaults",tabindex:"-1"},u={class:"rule-meta"};function g(f,s,E,y,m,b){const n=t("Badge"),l=t("Alert");return d(),r("div",null,[a("h1",c,[s[0]||(s[0]=i("jsdoc/no-defaults ")),e(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#jsdoc-no-defaults","aria-label":'Permalink to "jsdoc/no-defaults <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",u,[e(l,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule reports defaults being used on the relevant portion of <code>@param</code> or <code>@default</code>. It also optionally reports the presence of the square-bracketed optional arguments at all.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The rule is intended to prevent the indication of defaults on tags where this would be redundant with ES6 default parameters.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;7&quot;]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> quux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/457aa31d92800aaf37a12c695928e8d941308d33/crates/oxc_linter/src/rules/jsdoc/no_defaults.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const F=o(k,[["render",g]]);export{A as __pageData,F as default};
