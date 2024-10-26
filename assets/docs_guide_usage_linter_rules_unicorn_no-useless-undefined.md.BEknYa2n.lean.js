import{_ as r,c as l,j as s,a,G as i,w as d,a2 as c,B as t,o as u}from"./chunks/framework.8qdJL5ht.js";const E=JSON.parse('{"title":"unicorn/no-useless-undefined","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-useless-undefined.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-useless-undefined.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/no-useless-undefined.md"},h={id:"unicorn-no-useless-undefined",tabindex:"-1"},f={class:"rule-meta"};function g(k,e,m,b,x,v){const n=t("Badge"),o=t("Alert");return u(),l("div",null,[s("h1",h,[e[0]||(e[0]=a("unicorn/no-useless-undefined ")),i(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-no-useless-undefined","aria-label":'Permalink to "unicorn/no-useless-undefined <Badge type="info" text="Pedantic" />"'},"​",-1))]),s("div",f,[i(o,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Do not use useless <code>undefined</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>undefined</code> is the default value for new variables, parameters, return statements, etc… so specifying it doesn&#39;t make any difference.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_useless_undefined.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=r(p,[["render",g]]);export{E as __pageData,_ as default};
