import{_ as a,C as n,c as e,o as t,G as l,ag as p}from"./chunks/framework.K3-BBDXc.js";const u=JSON.parse('{"title":"Oxlint v0.10 Migration Guide","description":"","frontmatter":{"title":"Oxlint v0.10 Migration Guide","outline":"deep","authors":["don"],"editLink":false},"headers":[],"relativePath":"blog/2024-10-18-oxlint-v0.10-release.md","filePath":"blog/2024-10-18-oxlint-v0.10-release.md"}'),h={name:"blog/2024-10-18-oxlint-v0.10-release.md"};function o(k,s,d,r,c,E){const i=n("AppBlogPostHeader");return t(),e("div",null,[l(i),s[0]||(s[0]=p(`<p>Oxlint v0.10.0 is here! This release includes several exciting features, including many improvements to configuration files.</p><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="new-rules" tabindex="-1">New Rules <a class="header-anchor" href="#new-rules" aria-label="Permalink to &quot;New Rules&quot;">​</a></h3><p>This release includes the following new rules:</p><ul><li><code>promise/no-callback-in-promise</code></li><li><code>react/iframe-missing-sandbox</code></li><li><code>node/no-new-require</code></li></ul><p>And adds auto fixes/suggestions for:</p><ul><li><code>eslint/no-plusplus</code></li></ul><h3 id="enable-disable-rules-by-category" tabindex="-1">Enable/Disable Rules by Category <a class="header-anchor" href="#enable-disable-rules-by-category" aria-label="Permalink to &quot;Enable/Disable Rules by Category&quot;">​</a></h3><p>You can now enable or disable entire categories of rules with the <code>categories</code> field inside of your configuration file.</p><p>Now, instead of running this command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> correctness</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> suspicious</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint.json</span></span></code></pre></div><p>You can add a <code>categories</code> field to your <code>oxlint.json</code>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RfjKs" id="tab-Ubd-y7H" checked><label data-title="oxlintrc.json" for="tab-Ubd-y7H">oxlintrc.json</label></div><div class="blocks"><div class="language-jsonc vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {          </span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;correctness&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;suspicious&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },                       </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-const-assign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;import/no-cycle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>and drop the <code>-D</code> and <code>-W</code> flags.</p><h3 id="plugins-are-now-supported-in-configuration-files" tabindex="-1"><code>plugins</code> Are Now Supported in Configuration Files <a class="header-anchor" href="#plugins-are-now-supported-in-configuration-files" aria-label="Permalink to &quot;\`plugins\` Are Now Supported in Configuration Files&quot;">​</a></h3><p>Configuration files now support the <code>plugins</code> array from ESLint v8 configs. This allows you to enable plugins without CLI arguments, making it possible to use plugins in VSCode.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3H1hK" id="tab-yy19iUI" checked><label data-title="oxlintrc.json" for="tab-yy19iUI">oxlintrc.json</label></div><div class="blocks"><div class="language-jsonc vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;correctness&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;suspicious&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;react/jsx-uses-react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;react/react-in-jsx-scope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>This plays nicely with <code>categories</code>, as enabled/disabled categories affect plugins as well.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hesVc" id="tab-ySt69_6" checked><label data-title="oxlintrc.json" for="tab-ySt69_6">oxlintrc.json</label></div><div class="blocks"><div class="language-jsonc vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // \`categories\` affects all enabled plugins</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;correctness&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;suspicious&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-const-assign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;import/no-cycle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="breaking-changes-and-migration-guide" tabindex="-1">Breaking Changes and Migration Guide <a class="header-anchor" href="#breaking-changes-and-migration-guide" aria-label="Permalink to &quot;Breaking Changes and Migration Guide&quot;">​</a></h2><h3 id="cli-vs-config-file-rule-priority" tabindex="-1">CLI vs Config File Rule Priority <a class="header-anchor" href="#cli-vs-config-file-rule-priority" aria-label="Permalink to &quot;CLI vs Config File Rule Priority&quot;">​</a></h3><p>Before, config files would override rules set in CLI arguments. For example, running this command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> correctness</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlintrc.json</span></span></code></pre></div><p>With this config file</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uwzf_" id="tab-HnSNXMk" checked><label data-title="oxlintrc.json" for="tab-HnSNXMk">oxlintrc.json</label></div><div class="blocks"><div class="language-jsonc vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-const-assign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>Would result in a single rule, <code>no-const-assign</code> being turned on at an error level with all other rules disabled (i.e. set to &quot;allow&quot;).</p><p>Now, <strong>CLI arguments will override config files</strong>. That same command with the same config file will result with <strong>all rules being disabled</strong>. To get the same behavior as before, enable and disable categories in your config file instead of with CLI arguments.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint.json</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3KVFR" id="tab-Qwk7bu9" checked><label data-title="oxlintrc.json" for="tab-Qwk7bu9">oxlintrc.json</label></div><div class="blocks"><div class="language-jsonc vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {           </span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;correctness&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },                        </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-const-assign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,29))])}const y=a(h,[["render",o]]);export{u as __pageData,y as default};
