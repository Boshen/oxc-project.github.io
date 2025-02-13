import{_ as r,C as s,c as o,o as p,j as t,ag as d,a,G as i,w as c}from"./chunks/framework.K3-BBDXc.js";const q=JSON.parse('{"title":"eslint/no-template-curly-in-string","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md","filePath":"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.md"},u={id:"eslint-no-template-curly-in-string",tabindex:"-1"},g={class:"rule-meta"};function m(b,e,k,f,y,_){const n=s("Badge"),l=s("Alert");return p(),o("div",null,[t("h1",u,[e[0]||(e[0]=a("eslint/no-template-curly-in-string ")),i(n,{type:"info",text:"Style"}),e[1]||(e[1]=a()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#eslint-no-template-curly-in-string","aria-label":'Permalink to "eslint/no-template-curly-in-string <Badge type="info" text="Style" />"'},"​",-1))]),t("div",g,[i(l,{class:"fix",type:"info"},{default:c(()=>e[3]||(e[3]=[t("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=d('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow template literal placeholder syntax in regular strings</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>ECMAScript 6 allows programmers to create strings containing variable or expressions using template literals, instead of string concatenation, by writing expressions like <code>${variable}</code> between two backtick quotes. It can be easy to use the wrong quotes when wanting to use template literals, by writing <code>&quot;${variable}&quot;</code>, and end up with the literal value <code>&quot;${variable}&quot;</code> instead of a string containing the value of the injected expressions.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-template-curly-in-string: &quot;error&quot;*/</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello ${name}!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello ${name}!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Time: ${12 * 60 * 60 * 1000}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/eslint/no_template_curly_in_string.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9))])}const E=r(h,[["render",m]]);export{q as __pageData,E as default};
