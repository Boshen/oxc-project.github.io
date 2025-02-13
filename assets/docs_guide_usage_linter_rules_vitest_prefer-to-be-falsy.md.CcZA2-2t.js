import{_ as r,C as t,c as n,o as p,j as s,ag as h,a,G as i,w as d}from"./chunks/framework.K3-BBDXc.js";const x=JSON.parse('{"title":"vitest/prefer-to-be-falsy","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md","filePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md"}'),c={name:"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md"},k={id:"vitest-prefer-to-be-falsy",tabindex:"-1"},f={class:"rule-meta"};function y(u,e,g,E,b,m){const l=t("Badge"),o=t("Alert");return p(),n("div",null,[s("h1",k,[e[0]||(e[0]=a("vitest/prefer-to-be-falsy ")),i(l,{type:"info",text:"Style"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#vitest-prefer-to-be-falsy","aria-label":'Permalink to "vitest/prefer-to-be-falsy <Badge type="info" text="Style" />"'},"​",-1))]),s("div",f,[i(o,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when <code>toBe(false)</code> is used with <code>expect</code> or <code>expectTypeOf</code>. With <code>--fix</code>, it will be replaced with <code>toBeFalsy()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>toBe(false)</code> is less expressive and may not account for other falsy values like <code>0</code>, <code>null</code>, or <code>undefined</code>. <code>toBeFalsy()</code> provides a more comprehensive check for any falsy value, improving the robustness of the tests.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeFalsy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeFalsy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/vitest/prefer_to_be_falsy.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const _=r(c,[["render",y]]);export{x as __pageData,_ as default};
