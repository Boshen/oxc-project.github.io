import{_ as l,c as p,j as s,a as t,G as a,w as o,a2 as h,B as i,o as d}from"./chunks/framework.Cm5JpC29.js";const F=JSON.parse('{"title":"typescript/ban-types","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/ban-types.md","filePath":"docs/guide/usage/linter/rules/typescript/ban-types.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/ban-types.md"},k={id:"typescript-ban-types",tabindex:"-1"},y={class:"rule-meta"};function u(b,e,g,f,m,x){const n=i("Badge"),r=i("Alert");return d(),p("div",null,[s("h1",k,[e[0]||(e[0]=t("typescript/ban-types ")),a(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-ban-types","aria-label":'Permalink to "typescript/ban-types <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",y,[a(r,{class:"fix",type:"info"},{default:o(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),t(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime objects from being used.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Some built-in types have aliases, while some types are considered dangerous or harmful. It&#39;s often a good idea to ban certain types to help with consistency and safety.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/fd0935cfcd660901d612b9b146bc136d40d2f02f/crates/oxc_linter/src/rules/typescript/ban_types.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const _=l(c,[["render",u]]);export{F as __pageData,_ as default};
