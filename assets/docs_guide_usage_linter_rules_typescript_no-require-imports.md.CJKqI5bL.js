import{_ as o,C as a,c as l,o as p,j as s,ag as h,a as e,G as t,w as d}from"./chunks/framework.K3-BBDXc.js";const q=JSON.parse('{"title":"typescript/no-require-imports","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-require-imports.md","filePath":"docs/guide/usage/linter/rules/typescript/no-require-imports.md"}'),k={name:"docs/guide/usage/linter/rules/typescript/no-require-imports.md"},c={id:"typescript-no-require-imports",tabindex:"-1"},g={class:"rule-meta"};function u(m,i,E,y,b,f){const n=a("Badge"),r=a("Alert");return p(),l("div",null,[s("h1",c,[i[0]||(i[0]=e("typescript/no-require-imports ")),t(n,{type:"info",text:"Restriction"}),i[1]||(i[1]=e()),i[2]||(i[2]=s("a",{class:"header-anchor",href:"#typescript-no-require-imports","aria-label":'Permalink to "typescript/no-require-imports <Badge type="info" text="Restriction" />"'},"​",-1))]),s("div",g,[t(r,{class:"fix",type:"info"},{default:d(()=>i[3]||(i[3]=[s("span",{class:"emoji"},"🚧",-1),e(" An auto-fix is still under development. ")])),_:1})]),i[4]||(i[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Forbids the use of CommonJS <code>require</code> calls.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>require</code> imports, while functional in Node.js and older JavaScript environments, are generally considered less desirable than ES modules (<code>import</code>) for several key reasons in modern JavaScript development:</p><ol><li><p><strong>Static vs. Dynamic</strong>: <code>require</code> is a <strong>runtime</strong> function. It executes when the code runs, which means errors related to missing modules or incorrect paths are only discovered during runtime. ES modules (<code>import</code>) are static imports. Their resolution and potential errors are checked during the compilation or bundling process, making them easier to catch during development.</p></li><li><p><strong>Code Organization and Readability</strong>: <code>require</code> statements are scattered throughout the code, potentially making it harder to quickly identify the dependencies of a given module. <code>import</code> statements are typically grouped at the top of a file, improving code organization and readability.</p></li><li><p><strong>Tree Shaking and Optimization</strong>: Modern bundlers like Webpack and Rollup use tree-shaking to remove unused code from the final bundle. Tree-shaking works significantly better with ES modules because their dependencies are declared statically and explicitly. <code>require</code> makes it harder for bundlers to accurately identify and remove unused code, resulting in larger bundle sizes and slower load times.</p></li><li><p><strong>Cyclic Dependencies</strong>: Handling cyclic dependencies (where module A imports B, and B imports A) is significantly more challenging with <code>require</code>. ES modules, through their declarative nature and the use of dynamic imports (<code>import()</code>), provide better mechanisms to handle cyclic imports and manage asynchronous loading.</p></li><li><p><strong>Maintainability and Refactoring</strong>: Changing module names or paths is simpler with ES modules because the changes are declared directly and the compiler or bundler catches any errors. With <code>require</code>, you might have to track down all instances of a specific <code>require</code> statement for a particular module, making refactoring more error-prone.</p></li><li><p>Modern JavaScript Standards: import is the standard way to import modules in modern JavaScript, aligned with current best practices and language specifications. Using require necessitates additional build steps or tools to translate it to a format that the browser or modern JavaScript environments can understand.</p></li><li><p>Error Handling: ES modules provide a more structured way to handle errors during module loading using <code>try...catch</code> blocks with dynamic imports, enhancing error management. <code>require</code> errors can be less predictable.</p></li></ol><p>In summary, while <code>require</code> works, the benefits of ES modules in terms of static analysis, better bundling, improved code organization, and easier maintainability make it the preferred method for importing modules in modern JavaScript projects.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lib1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lib2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lib3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lib1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lib1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { lib2 } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lib2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lib3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lib3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><h4 id="allow" tabindex="-1"><code>allow</code> <a class="header-anchor" href="#allow" aria-label="Permalink to &quot;\`allow\`&quot;">​</a></h4><p>array of strings</p><p>These strings will be compiled into regular expressions with the u flag and be used to test against the imported path. A common use case is to allow importing <code>package.json</code>. This is because <code>package.json</code> commonly lives outside of the TS root directory, so statically importing it would lead to root directory conflicts, especially with <code>resolveJsonModule</code> enabled. You can also use it to allow importing any JSON if your environment doesn&#39;t support JSON modules, or use it for other cases where <code>import</code> statements cannot work.</p><p>With { allow: [&#39;/package\\.json$&#39;] }:</p><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../package.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).version);</span></span></code></pre></div><h4 id="allowasimport" tabindex="-1"><code>allowAsImport</code> <a class="header-anchor" href="#allowasimport" aria-label="Permalink to &quot;\`allowAsImport\`&quot;">​</a></h4><p>When set to <code>true</code>, <code>import ... = require(...)</code> declarations won&#39;t be reported. This is useful if you use certain module options that require strict CommonJS interop semantics.</p><p>With <code>{ allowAsImport: true }</code>:</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/typescript/no_require_imports.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,27))])}const v=o(k,[["render",u]]);export{q as __pageData,v as default};
