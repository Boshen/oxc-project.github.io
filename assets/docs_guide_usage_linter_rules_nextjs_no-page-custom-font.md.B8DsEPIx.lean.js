import{_ as s,c as n,j as t,a,G as i,a2 as r,B as d,o as l}from"./chunks/framework.Cm5JpC29.js";const j=JSON.parse('{"title":"nextjs/no-page-custom-font","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"}'),c={name:"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"},p={id:"nextjs-no-page-custom-font",tabindex:"-1"};function u(h,e,m,f,g,x){const o=d("Badge");return l(),n("div",null,[t("h1",p,[e[0]||(e[0]=a("nextjs/no-page-custom-font ")),i(o,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#nextjs-no-page-custom-font","aria-label":'Permalink to "nextjs/no-page-custom-font <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=r('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent page-only custom fonts.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><ul><li>The custom font you&#39;re adding was added to a page - this only adds the font to the specific page and not the entire application.</li><li>The custom font you&#39;re adding was added to a separate component within pages/_document.js - this disables automatic font optimization.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/nextjs/no_page_custom_font.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9))])}const v=s(c,[["render",u]]);export{j as __pageData,v as default};
