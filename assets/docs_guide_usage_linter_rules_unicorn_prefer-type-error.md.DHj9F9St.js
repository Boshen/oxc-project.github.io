import{_ as o,c as p,j as s,a,G as i,w as l,a2 as h,B as r,o as d}from"./chunks/framework.Cm5JpC29.js";const F=JSON.parse('{"title":"unicorn/prefer-type-error","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-type-error.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-type-error.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-type-error.md"},k={id:"unicorn-prefer-type-error",tabindex:"-1"},f={class:"rule-meta"};function u(g,e,E,y,b,m){const t=r("Badge"),n=r("Alert");return d(),p("div",null,[s("h1",k,[e[0]||(e[0]=a("unicorn/prefer-type-error ")),i(t,{type:"info",text:"Pedantic"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-type-error","aria-label":'Permalink to "unicorn/prefer-type-error <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",f,[i(n,{class:"fix",type:"info"},{default:l(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce throwing a <code>TypeError</code> instead of a generic <code>Error</code> after a type checking if-statement.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Throwing a <code>TypeError</code> instead of a generic <code>Error</code> after a type checking if-statement is more specific and helps to catch bugs.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Expected foo to be an array&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TypeError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Expected foo to be an array&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/unicorn/prefer_type_error.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const v=o(c,[["render",u]]);export{F as __pageData,v as default};
