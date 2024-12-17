import{_ as d,c as r,j as a,a as s,G as i,w as l,a2 as p,B as t,o as c}from"./chunks/framework.Cm5JpC29.js";const E=JSON.parse('{"title":"unicorn/no-typeof-undefined","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.md"},u={id:"unicorn-no-typeof-undefined",tabindex:"-1"},f={class:"rule-meta"};function g(k,e,b,y,m,x){const n=t("Badge"),o=t("Alert");return c(),r("div",null,[a("h1",u,[e[0]||(e[0]=s("unicorn/no-typeof-undefined ")),i(n,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-no-typeof-undefined","aria-label":'Permalink to "unicorn/no-typeof-undefined <Badge type="info" text="Pedantic" />"'},"​",-1))]),a("div",f,[i(o,{class:"fix",type:"info"},{default:l(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🚧",-1),s(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow <code>typeof</code> comparisons with <code>undefined</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Checking if a value is <code>undefined</code> by using <code>typeof value === &#39;undefined&#39;</code> is needlessly verbose. It&#39;s generally better to compare against <code>undefined</code> directly. The only time <code>typeof</code> is needed is when a global variable potentially does not exists, in which case, using <code>globalThis.value === undefined</code> may be better.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;undefined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/unicorn/no_typeof_undefined.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=d(h,[["render",g]]);export{E as __pageData,_ as default};
