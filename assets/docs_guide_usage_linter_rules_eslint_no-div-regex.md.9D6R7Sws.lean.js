import{_ as l,c as o,j as a,a as s,G as i,w as d,a2 as h,B as t,o as p}from"./chunks/framework.Cm5JpC29.js";const E=JSON.parse('{"title":"eslint/no-div-regex","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-div-regex.md","filePath":"docs/guide/usage/linter/rules/eslint/no-div-regex.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-div-regex.md"},g={id:"eslint-no-div-regex",tabindex:"-1"},u={class:"rule-meta"};function k(f,e,x,b,m,v){const n=t("Badge"),r=t("Alert");return p(),o("div",null,[a("h1",g,[e[0]||(e[0]=s("eslint/no-div-regex ")),i(n,{type:"info",text:"Restriction"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#eslint-no-div-regex","aria-label":'Permalink to "eslint/no-div-regex <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",u,[i(r,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow equal signs explicitly at the beginning of regular expressions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Characters /= at the beginning of a regular expression literal can be confused with a division assignment operator.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">=foo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/eslint/no_div_regex.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const _=l(c,[["render",k]]);export{E as __pageData,_ as default};
