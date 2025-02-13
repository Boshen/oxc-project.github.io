import{_ as n,C as r,c as p,o as d,j as a,ag as h,a as e,G as i,w as o}from"./chunks/framework.K3-BBDXc.js";const E=JSON.parse('{"title":"jsx_a11y/aria-props","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-props.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-props.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/aria-props.md"},u={id:"jsx-a11y-aria-props",tabindex:"-1"},k={class:"rule-meta"};function f(g,s,b,y,m,x){const l=r("Badge"),t=r("Alert");return d(),p("div",null,[a("h1",u,[s[0]||(s[0]=e("jsx_a11y/aria-props ")),i(l,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#jsx-a11y-aria-props","aria-label":'Permalink to "jsx_a11y/aria-props <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",k,[i(t,{class:"default-on",type:"success"},{default:o(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1}),i(t,{class:"fix",type:"info"},{default:o(()=>s[4]||(s[4]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule for some violations. ")])),_:1})]),s[5]||(s[5]=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that elements do not use invalid ARIA attributes.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using invalid ARIA attributes can mislead screen readers and other assistive technologies. It may cause the accessibility features of the website to fail, making it difficult for users with disabilities to use the site effectively.</p><p>This rule includes fixes for some common typos.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-labeledby</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;address_label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-labelledby</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;address_label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/jsx_a11y/aria_props.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const v=n(c,[["render",f]]);export{E as __pageData,v as default};
