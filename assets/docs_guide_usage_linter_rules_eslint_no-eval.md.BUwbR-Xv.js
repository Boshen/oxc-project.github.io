import{_ as i,c as n,j as a,a as s,G as l,a2 as o,B as r,o as d}from"./chunks/framework.8qdJL5ht.js";const f=JSON.parse('{"title":"eslint/no-eval","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-eval.md","filePath":"docs/guide/usage/linter/rules/eslint/no-eval.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-eval.md"},p={id:"eslint-no-eval",tabindex:"-1"};function c(u,e,k,g,m,v){const t=r("Badge");return d(),n("div",null,[a("h1",p,[e[0]||(e[0]=s("eslint/no-eval ")),l(t,{type:"info",text:"Restriction"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-no-eval","aria-label":'Permalink to "eslint/no-eval <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=o(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows referencing the &#39;eval&#39; function.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Calling &#39;eval&#39; is not supported in some secure contexts and can lead to vulnerabilities.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> someString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;console.log(&#39;pwned&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(someString);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_eval.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const x=i(h,[["render",c]]);export{f as __pageData,x as default};
