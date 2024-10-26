import{_ as s,c as i,a2 as e,o as t}from"./chunks/framework.8qdJL5ht.js";const c=JSON.parse('{"title":"Transformer","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/transformer.md","filePath":"docs/guide/usage/transformer.md"}'),r={name:"docs/guide/usage/transformer.md"};function n(l,a,h,o,p,d){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="transformer" tabindex="-1">Transformer <a class="header-anchor" href="#transformer" aria-label="Permalink to &quot;Transformer&quot;">​</a></h1><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Transforming TypeScript to ESNext.</li><li>Transforming React JSX to ESNext, with built-in React Refresh.</li><li><a href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#isolated-declarations" target="_blank" rel="noreferrer">TypeScript Isolated Declarations Emit</a> without using the TypeScript compiler.</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h3><p>Use the experimental node binding <a href="https://www.npmjs.com/package/oxc-transform" target="_blank" rel="noreferrer">oxc-transform</a>.</p><h3 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-label="Permalink to &quot;Rust&quot;">​</a></h3><p>Use the umbrella crate <a href="https://docs.rs/oxc" target="_blank" rel="noreferrer">oxc</a> with the <code>transformer</code> feature.</p><p>Rust usage example can be found <a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_transformer/examples/transformer.rs" target="_blank" rel="noreferrer">here</a>.</p><h2 id="api-example" tabindex="-1">API Example <a class="header-anchor" href="#api-example" aria-label="Permalink to &quot;API Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { transform } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;oxc-transform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transformed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filePath, sourceCode, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  typescript: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    onlyRemoveTypeImports: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    declaration: { stripInternal: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;out.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, transformed.code);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;out.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, transformed.declaration);</span></span></code></pre></div><h2 id="isolated-declarations" tabindex="-1">Isolated Declarations <a class="header-anchor" href="#isolated-declarations" aria-label="Permalink to &quot;Isolated Declarations&quot;">​</a></h2><ul><li><a href="https://github.com/unplugin/unplugin-isolated-decl" target="_blank" rel="noreferrer"><code>unplugin-isolated-decl</code></a></li></ul>`,13)]))}const E=s(r,[["render",n]]);export{c as __pageData,E as default};
