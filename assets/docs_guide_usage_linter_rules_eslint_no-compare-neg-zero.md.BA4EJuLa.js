import{_ as r,C as n,c as p,o as h,j as s,ag as d,a,G as i,w as o}from"./chunks/framework.K3-BBDXc.js";const x=JSON.parse('{"title":"eslint/no-compare-neg-zero","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md","filePath":"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.md"},u={id:"eslint-no-compare-neg-zero",tabindex:"-1"},g={class:"rule-meta"};function k(b,e,m,f,y,E){const l=n("Badge"),t=n("Alert");return h(),p("div",null,[s("h1",u,[e[0]||(e[0]=a("eslint/no-compare-neg-zero ")),i(l,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#eslint-no-compare-neg-zero","aria-label":'Permalink to "eslint/no-compare-neg-zero <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",g,[i(t,{class:"default-on",type:"success"},{default:o(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1}),i(t,{class:"fix",type:"info"},{default:o(()=>e[4]||(e[4]=[s("span",{class:"emoji"},"🛠️💡",-1),a(" An auto-fix and a suggestion are available for this rule for some violations. ")])),_:1})]),e[5]||(e[5]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow comparing against -0</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. The author probably intended Object.is(x, -0).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-1UVMb" id="tab-lpymyHM" checked><label data-title="CLI" for="tab-lpymyHM">CLI</label><input type="radio" name="group-1UVMb" id="tab-KD3irtv"><label data-title="Config (.oxlintrc.json)" for="tab-KD3irtv">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-compare-neg-zero</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-compare-neg-zero&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/eslint/no_compare_neg_zero.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=r(c,[["render",k]]);export{x as __pageData,C as default};
