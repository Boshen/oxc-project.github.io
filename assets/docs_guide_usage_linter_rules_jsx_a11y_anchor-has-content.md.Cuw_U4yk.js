import{_ as r,C as i,c as h,o as p,j as s,ag as d,a as e,G as t,w as o}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"jsx_a11y/anchor-has-content","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md"},u={id:"jsx-a11y-anchor-has-content",tabindex:"-1"},g={class:"rule-meta"};function k(b,a,y,f,x,m){const l=i("Badge"),n=i("Alert");return p(),h("div",null,[s("h1",u,[a[0]||(a[0]=e("jsx_a11y/anchor-has-content ")),t(l,{type:"info",text:"Correctness"}),a[1]||(a[1]=e()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#jsx-a11y-anchor-has-content","aria-label":'Permalink to "jsx_a11y/anchor-has-content <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",g,[t(n,{class:"default-on",type:"success"},{default:o(()=>a[3]||(a[3]=[s("span",{class:"emoji"},"✅",-1),e(" This rule is turned on by default. ")])),_:1}),t(n,{class:"fix",type:"info"},{default:o(()=>a[4]||(a[4]=[s("span",{class:"emoji"},"💡",-1),e(" A suggestion is available for this rule for some violations. ")])),_:1})]),a[5]||(a[5]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that anchors have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the <code>aria-hidden</code> prop.</p><p>Alternatively, you may use the <code>title</code> prop or the <code>aria-label</code> prop.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><h4 id="good" tabindex="-1">good <a class="header-anchor" href="#good" aria-label="Permalink to &quot;good&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a&gt;Anchor Content!&lt;/a&gt;</span></span>
<span class="line"><span> &lt;a&gt;&lt;TextWrapper /&gt;&lt;/a&gt;</span></span>
<span class="line"><span> &lt;a dangerouslySetInnerHTML={{ __html: &#39;foo&#39; }} /&gt;</span></span>
<span class="line"><span> &lt;a title=&#39;foo&#39; /&gt;</span></span>
<span class="line"><span> &lt;a aria-label=&#39;foo&#39; /&gt;</span></span></code></pre></div><h4 id="bad" tabindex="-1">bad <a class="header-anchor" href="#bad" aria-label="Permalink to &quot;bad&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a /&gt;</span></span>
<span class="line"><span>&lt;a&gt;&lt;TextWrapper aria-hidden /&gt;&lt;/a&gt;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Xcjdg" id="tab-8rS5eZ-" checked><label data-title="CLI" for="tab-8rS5eZ-">CLI</label><input type="radio" name="group-Xcjdg" id="tab-dKaWaeQ"><label data-title="Config (.oxlintrc.json)" for="tab-dKaWaeQ">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsx-a11y/anchor-has-content</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --jsx-a11y-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jsx-a11y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsx-a11y/anchor-has-content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/jsx_a11y/anchor_has_content.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const E=r(c,[["render",k]]);export{C as __pageData,E as default};
