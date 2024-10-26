import{_ as n,c as d,j as t,a,G as s,w as l,a2 as p,B as i,o as c}from"./chunks/framework.8qdJL5ht.js";const v=JSON.parse('{"title":"unicorn/prefer-dom-node-dataset","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.md"},u={id:"unicorn-prefer-dom-node-dataset",tabindex:"-1"},m={class:"rule-meta"};function k(f,e,g,b,E,x){const o=i("Badge"),r=i("Alert");return c(),d("div",null,[t("h1",u,[e[0]||(e[0]=a("unicorn/prefer-dom-node-dataset ")),s(o,{type:"info",text:"Pedantic"}),e[1]||(e[1]=a()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#unicorn-prefer-dom-node-dataset","aria-label":'Permalink to "unicorn/prefer-dom-node-dataset <Badge type="info" text="Pedantic" />"'},"​",-1))]),t("div",m,[s(r,{class:"fix",type:"info"},{default:l(()=>e[3]||(e[3]=[t("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Use <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset" target="_blank" rel="noreferrer"><code>.dataset</code></a> on DOM elements over <code>getAttribute(…)</code>, <code>.setAttribute(…)</code>, <code>.removeAttribute(…)</code> and <code>.hasAttribute(…)</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>dataset</code> property is a map of strings that contains all the <code>data-*</code> attributes from the element. It is a convenient way to access all of them at once.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data-unicorn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.dataset.unicorn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_dataset.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=n(h,[["render",k]]);export{v as __pageData,_ as default};
