import{_ as o,C as i,c as l,o as h,j as a,ag as d,a as s,G as t,w as p}from"./chunks/framework.K3-BBDXc.js";const x=JSON.parse('{"title":"unicorn/no-new-buffer","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-new-buffer.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-new-buffer.md"}'),f={name:"docs/guide/usage/linter/rules/unicorn/no-new-buffer.md"},c={id:"unicorn-no-new-buffer",tabindex:"-1"},u={class:"rule-meta"};function k(b,e,g,m,y,_){const r=i("Badge"),n=i("Alert");return h(),l("div",null,[a("h1",c,[e[0]||(e[0]=s("unicorn/no-new-buffer ")),t(r,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-no-new-buffer","aria-label":'Permalink to "unicorn/no-new-buffer <Badge type="info" text="Pedantic" />"'},"​",-1))]),a("div",u,[t(n,{class:"fix",type:"info"},{default:p(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🚧",-1),s(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=d('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows the deprecated <code>new Buffer()</code> constructor.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Enforces the use of <a href="https://nodejs.org/api/buffer.html#static-method-bufferfromarray" target="_blank" rel="noreferrer">Buffer.from</a> and <a href="https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding" target="_blank" rel="noreferrer">Buffer.alloc()</a> instead of <a href="https://nodejs.org/api/buffer.html#new-bufferarray" target="_blank" rel="noreferrer">new Buffer()</a>, which has been deprecated since Node.js 4.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/unicorn/no_new_buffer.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const w=o(f,[["render",k]]);export{x as __pageData,w as default};
