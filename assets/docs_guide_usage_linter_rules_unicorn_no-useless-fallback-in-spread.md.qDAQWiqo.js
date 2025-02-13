import{_ as o,C as n,c as p,o as h,j as a,ag as d,a as e,G as i,w as l}from"./chunks/framework.K3-BBDXc.js";const x=JSON.parse('{"title":"unicorn/no-useless-fallback-in-spread","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.md"}'),k={name:"docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.md"},c={id:"unicorn-no-useless-fallback-in-spread",tabindex:"-1"},u={class:"rule-meta"};function g(f,s,b,y,E,m){const r=n("Badge"),t=n("Alert");return h(),p("div",null,[a("h1",c,[s[0]||(s[0]=e("unicorn/no-useless-fallback-in-spread ")),i(r,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#unicorn-no-useless-fallback-in-spread","aria-label":'Permalink to "unicorn/no-useless-fallback-in-spread <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",u,[i(t,{class:"default-on",type:"success"},{default:l(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1}),i(t,{class:"fix",type:"info"},{default:l(()=>s[4]||(s[4]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule for some violations. ")])),_:1})]),s[5]||(s[5]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow useless fallback when spreading in object literals.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Spreading <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" target="_blank" rel="noreferrer">falsy values</a> in object literals won&#39;t add any unexpected properties, so it&#39;s unnecessary to add an empty object as fallback.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}) };</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { not: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;empty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) };</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/unicorn/no_useless_fallback_in_spread.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const v=o(k,[["render",g]]);export{x as __pageData,v as default};
