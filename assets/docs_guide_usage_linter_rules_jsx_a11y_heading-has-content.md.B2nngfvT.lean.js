import{_ as i,c as n,j as a,a as s,G as r,a2 as o,B as h,o as l}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"jsx_a11y/heading-has-content","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md"}'),d={name:"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md"},c={id:"jsx-a11y-heading-has-content",tabindex:"-1"};function p(g,e,u,k,x,m){const t=h("Badge");return l(),n("div",null,[a("h1",c,[e[0]||(e[0]=s("jsx_a11y/heading-has-content ")),r(t,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#jsx-a11y-heading-has-content","aria-label":'Permalink to "jsx_a11y/heading-has-content <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Screen readers alert users to the presence of a heading tag. If the heading is empty or the text cannot be accessed, this could either confuse users or even prevent them from accessing information on the page&#39;s structure.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Foo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/heading_has_content.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const E=i(d,[["render",p]]);export{f as __pageData,E as default};
