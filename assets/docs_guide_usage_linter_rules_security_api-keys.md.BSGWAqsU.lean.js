import{_ as t,c as n,j as a,a as e,G as r,a2 as l,B as h,o}from"./chunks/framework.Cm5JpC29.js";const m=JSON.parse('{"title":"security/api-keys","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/security/api-keys.md","filePath":"docs/guide/usage/linter/rules/security/api-keys.md"}'),p={name:"docs/guide/usage/linter/rules/security/api-keys.md"},k={id:"security-api-keys",tabindex:"-1"};function d(c,s,y,u,g,E){const i=h("Badge");return o(),n("div",null,[a("h1",k,[s[0]||(s[0]=e("security/api-keys ")),r(i,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#security-api-keys","aria-label":'Permalink to "security/api-keys <Badge type="info" text="Correctness" />"'},"​",-1))]),s[3]||(s[3]=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows hard-coded API keys and other credentials.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Hard-coding API keys and committing them to source control is a serious security risk.</p><ol><li>If your code is leaked, attackers can use your API keys to access your services and data.</li><li>Accidental bundling of API keys can lead them to be exposed publicly in your website, compriming your services.</li><li>Any developer or contractor you hire will have access to your services, even after they lose access to your codebase.</li><li>Even after being deleted, they will be visible in your git repo&#39;s commit history.</li><li>Key rotation requires a code change and redeployment, and can therefore not be handled by security teams or by automated systems.</li><li>Many, many more reasons.</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;abcdef123456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/some/endpoint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Authorization: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Bearer \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API_KEY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="what-to-do-instead" tabindex="-1">What To Do Instead <a class="header-anchor" href="#what-to-do-instead" aria-label="Permalink to &quot;What To Do Instead&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The Oxc team are not security experts. We do not endorse any particular key management service or strategy. Do your research and choose the best solution/architecture for your use case.</p></div><p>One possible alternative is to store secrets in a secure secrets manager (such as <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/kms/" target="_blank" rel="noreferrer">AWS KMS</a>, <a href="https://github.com/nodevault/node-vault/tree/v0.10.2" target="_blank" rel="noreferrer">HashiCorp Vault</a>, <a href="https://pangea.cloud/docs/sdk/js/vault#retrieve" target="_blank" rel="noreferrer">Pangea</a>, etc.) and request them when your application starts (e.g. a Docker container, an EC2).</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AWS_ACCESS_KEY_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;AKIA1234X678C123B567&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OPENAI_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sk_test_1234567890&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AWS_ACCESS_KEY_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AWS_ACCESS_KEY_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OPENAI_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getSecret</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open-ai-api-key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/security/api_keys/mod.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,17))])}const F=t(p,[["render",d]]);export{m as __pageData,F as default};
