import{_ as r,c as o,j as s,a,G as t,w as h,a2 as d,B as i,o as p}from"./chunks/framework.Cm5JpC29.js";const x=JSON.parse('{"title":"eslint/eqeqeq","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/eqeqeq.md","filePath":"docs/guide/usage/linter/rules/eslint/eqeqeq.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/eqeqeq.md"},k={id:"eslint-eqeqeq",tabindex:"-1"},u={class:"rule-meta"};function q(f,e,g,b,m,E){const n=i("Badge"),l=i("Alert");return p(),o("div",null,[s("h1",k,[e[0]||(e[0]=a("eslint/eqeqeq ")),t(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#eslint-eqeqeq","aria-label":'Permalink to "eslint/eqeqeq <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",u,[t(l,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule for some violations. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires the use of the === and !== operators</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using non-strict equality operators leads to hard to track bugs due to type coercion.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/eslint/eqeqeq.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const v=r(c,[["render",q]]);export{x as __pageData,v as default};
