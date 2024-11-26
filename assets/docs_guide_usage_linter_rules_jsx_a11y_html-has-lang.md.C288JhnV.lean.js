import{_ as i,c as l,j as a,a as s,G as n,a2 as r,B as h,o}from"./chunks/framework.Cm5JpC29.js";const f=JSON.parse('{"title":"jsx_a11y/html-has-lang","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md"}'),d={name:"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md"},p={id:"jsx-a11y-html-has-lang",tabindex:"-1"};function c(g,e,u,m,k,b){const t=h("Badge");return o(),l("div",null,[a("h1",p,[e[0]||(e[0]=s("jsx_a11y/html-has-lang ")),n(t,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#jsx-a11y-html-has-lang","aria-label":'Permalink to "jsx_a11y/html-has-lang <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=r('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Ensures that every HTML document has a lang attribute</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>If the language of a webpage is not specified, the screen reader assumes the default language set by the user. Language settings become an issue for users who speak multiple languages and access website in more than one language.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/jsx_a11y/html_has_lang.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const y=i(d,[["render",c]]);export{f as __pageData,y as default};
