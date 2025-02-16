import{_ as o,C as e,c as l,o as h,j as s,ag as p,a as i,G as n,w as d}from"./chunks/framework.K3-BBDXc.js";const v=JSON.parse('{"title":"unicorn/no-instanceof-array","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"},k={id:"unicorn-no-instanceof-array",tabindex:"-1"},u={class:"rule-meta"};function g(y,a,f,E,b,m){const t=e("Badge"),r=e("Alert");return h(),l("div",null,[s("h1",k,[a[0]||(a[0]=i("unicorn/no-instanceof-array ")),n(t,{type:"info",text:"Pedantic"}),a[1]||(a[1]=i()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#unicorn-no-instanceof-array","aria-label":'Permalink to "unicorn/no-instanceof-array <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",u,[n(r,{class:"fix",type:"info"},{default:d(()=>a[3]||(a[3]=[s("span",{class:"emoji"},"🛠️",-1),i(" An auto-fix is available for this rule. ")])),_:1})]),a[4]||(a[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require <code>Array.isArray()</code> instead of <code>instanceof Array</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The instanceof Array check doesn&#39;t work across realms/contexts, for example, frames/windows in browsers or the vm module in Node.js.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-x3hmD" id="tab-Y3NAIMg" checked><label data-title="CLI" for="tab-Y3NAIMg">CLI</label><input type="radio" name="group-x3hmD" id="tab-7Ru_xnN"><label data-title="Config (.oxlintrc.json)" for="tab-7Ru_xnN">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/no-instanceof-array</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/no-instanceof-array&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/unicorn/no_instanceof_array.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=o(c,[["render",g]]);export{v as __pageData,C as default};
