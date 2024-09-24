import{_ as t,c as r,j as s,a,G as n,a2 as o,B as l,o as h}from"./chunks/framework.DlAqvapY.js";const b=JSON.parse('{"title":"react/react-in-jsx-scope","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md","filePath":"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md"}'),p={name:"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md"},c={id:"react-react-in-jsx-scope",tabindex:"-1"};function d(k,e,u,g,E,x){const i=l("Badge");return h(),r("div",null,[s("h1",c,[e[0]||(e[0]=a("react/react-in-jsx-scope ")),n(i,{type:"info",text:"Suspicious"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#react-react-in-jsx-scope","aria-label":'Permalink to "react/react-in-jsx-scope <Badge type="info" text="Suspicious" />"'},"​",-1))]),e[3]||(e[3]=o(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow missing React when using JSX</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>When using JSX, <code>&lt;a /&gt;</code> expands to <code>React.createElement(&quot;a&quot;)</code>. Therefore the <code>React</code> variable must be in scope.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/react_in_jsx_scope.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const f=t(p,[["render",d]]);export{b as __pageData,f as default};
