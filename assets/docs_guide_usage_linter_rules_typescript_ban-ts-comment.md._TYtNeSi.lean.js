import{_ as o,c as l,j as s,a as t,G as a,w as p,a2 as h,B as i,o as c}from"./chunks/framework.8qdJL5ht.js";const v=JSON.parse('{"title":"typescript/ban-ts-comment","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/ban-ts-comment.md","filePath":"docs/guide/usage/linter/rules/typescript/ban-ts-comment.md"}'),d={name:"docs/guide/usage/linter/rules/typescript/ban-ts-comment.md"},m={id:"typescript-ban-ts-comment",tabindex:"-1"},u={class:"rule-meta"};function k(b,e,y,f,g,E){const n=i("Badge"),r=i("Alert");return c(),l("div",null,[s("h1",m,[e[0]||(e[0]=t("typescript/ban-ts-comment ")),a(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-ban-ts-comment","aria-label":'Permalink to "typescript/ban-ts-comment <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",u,[a(r,{class:"fix",type:"info"},{default:p(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule for some violations. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule lets you set which directive comments you want to allow in your codebase.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using TypeScript directives to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // @ts-ignore: Unreachable code error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/ban_ts_comment.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const _=o(d,[["render",k]]);export{v as __pageData,_ as default};
