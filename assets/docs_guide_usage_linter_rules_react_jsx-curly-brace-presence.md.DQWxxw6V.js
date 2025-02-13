import{_ as e,C as l,c as n,o as h,j as i,ag as p,a,G as k}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"react/jsx-curly-brace-presence","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md","filePath":"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md"}'),r={name:"docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.md"},o={id:"react-jsx-curly-brace-presence",tabindex:"-1"};function d(E,s,g,c,y,u){const t=l("Badge");return h(),n("div",null,[i("h1",o,[s[0]||(s[0]=a("react/jsx-curly-brace-presence ")),k(t,{type:"info",text:"Style"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#react-jsx-curly-brace-presence","aria-label":'Permalink to "react/jsx-curly-brace-presence <Badge type="info" text="Style" />"'},"​",-1))]),s[3]||(s[3]=p(`<div class="rule-meta"></div><h1 id="disallow-unnecessary-jsx-expressions-when-literals-alone-are" tabindex="-1">Disallow unnecessary JSX expressions when literals alone are <a class="header-anchor" href="#disallow-unnecessary-jsx-expressions-when-literals-alone-are" aria-label="Permalink to &quot;Disallow unnecessary JSX expressions when literals alone are&quot;">​</a></h1><p>sufficient or enforce JSX expressions on literals in JSX children or attributes (<code>react/jsx-curly-brace-presence</code>)</p><p>🔧 This rule is automatically fixable by the <a href="https://oxc-project.github.io/docs/guide/usage/linter/cli.html#fix-problems" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.</p><p>For situations where JSX expressions are unnecessary, please refer to <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank" rel="noreferrer">the React doc</a> and <a href="https://github.com/facebook/react/blob/v15.4.0-rc.3/docs/docs/02.3-jsx-gotchas.md#html-entities" target="_blank" rel="noreferrer">this page about JSX gotchas</a>.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>By default, this rule will check for and warn about unnecessary curly braces in both JSX props and children. For the sake of backwards compatibility, prop values that are JSX elements are not considered by default.</p><p>You can pass in options to enforce the presence of curly braces on JSX props, children, JSX prop values that are JSX elements, or any combination of the three. The same options are available for not allowing unnecessary curly braces as well as ignoring the check.</p><p><strong>Note</strong>: it is <em>highly recommended</em> that you configure this rule with an object, and that you set &quot;propElementValues&quot; to &quot;always&quot;. The ability to omit curly braces around prop values that are JSX elements is obscure, and intentionally undocumented, and should not be relied upon.</p><h2 id="rule-options" tabindex="-1">Rule Options <a class="header-anchor" href="#rule-options" aria-label="Permalink to &quot;Rule Options&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react/jsx-curly-brace-presence&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;props&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, &quot;children&quot;: &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, &quot;propElementValues&quot;: &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>or alternatively</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react/jsx-curly-brace-presence&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><h3 id="valid-options-for-string" tabindex="-1">Valid options for <code>&lt;string&gt;</code> <a class="header-anchor" href="#valid-options-for-string" aria-label="Permalink to &quot;Valid options for \`&lt;string&gt;\`&quot;">​</a></h3><p>They are <code>always</code>, <code>never</code> and <code>ignore</code> for checking on JSX props and children.</p><ul><li><code>always</code>: always enforce curly braces inside JSX props, children, and/or JSX prop values that are JSX Elements</li><li><code>never</code>: never allow unnecessary curly braces inside JSX props, children, and/or JSX prop values that are JSX Elements</li><li><code>ignore</code>: ignore the rule for JSX props, children, and/or JSX prop values that are JSX Elements</li></ul><p>If passed in the option to fix, this is how a style violation will get fixed</p><ul><li><p><code>always</code>: wrap a JSX attribute in curly braces/JSX expression and/or a JSX child the same way but also with double quotes</p></li><li><p><code>never</code>: get rid of curly braces from a JSX attribute and/or a JSX child</p></li><li><p>All fixing operations use double quotes.</p></li></ul><p>For examples:</p><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>{ props: &quot;always&quot;, children: &quot;always&quot; }</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>They can be fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>{ props: &quot;never&quot;, children: &quot;never&quot; }</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;;</span></span></code></pre></div><p>They can be fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span></code></pre></div><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>{ props: &quot;always&quot;, children: &quot;always&quot;, &quot;propElementValues&quot;: &quot;always&quot; }</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">=&lt;div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/&gt;</span></span></code></pre></div><p>They can be fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;} /&gt;</span></span></code></pre></div><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>{ props: &quot;never&quot;, children: &quot;never&quot;, &quot;propElementValues&quot;: &quot;never&quot; }</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;} /&gt;</span></span></code></pre></div><p>They can be fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">=&lt;div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/&gt;</span></span></code></pre></div><h3 id="alternative-syntax" tabindex="-1">Alternative syntax <a class="header-anchor" href="#alternative-syntax" aria-label="Permalink to &quot;Alternative syntax&quot;">​</a></h3><p>The options are also <code>always</code>, <code>never</code>, and <code>ignore</code> for the same meanings.</p><p>In this syntax, only a string is provided and the default will be set to that option for checking on both JSX props and children.</p><p>For examples:</p><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>&quot;always&quot;</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Hello world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>They can be fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>Examples of <strong>incorrect</strong> code for this rule, when configured with <code>&quot;never&quot;</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>It can fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> attr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Hello world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="edge-cases" tabindex="-1">Edge cases <a class="header-anchor" href="#edge-cases" aria-label="Permalink to &quot;Edge cases&quot;">​</a></h2><p>The fix also deals with template literals, strings with quotes, and strings with escapes characters.</p><ul><li>If the rule is set to get rid of unnecessary curly braces and the template literal inside a JSX expression has no expression, it will throw a warning and be fixed with double quotes. For example:</li></ul><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello world\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello world\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>will be warned and fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>If the rule is set to enforce curly braces and the strings have quotes, it will be fixed with double quotes for JSX children and the normal way for JSX attributes. Also, double quotes will be escaped in the fix.</li></ul><p>For example:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello &quot;foo&quot; world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello &#39;foo&#39; &quot;bar&quot; world&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>will warned and fixed to:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello &quot;foo&quot; world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello &#39;foo&#39; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>If the rule is set to get rid of unnecessary curly braces(JSX expression) and there are characters that need to be escaped in its JSX form, such as quote characters, <a href="https://facebook.github.io/jsx/" target="_blank" rel="noreferrer">forbidden JSX text characters</a>, escaped characters and anything that looks like HTML entity names, the code will not be warned because the fix may make the code less readable.</li></ul><p>Examples of <strong>correct</strong> code for this rule, even when configured with <code>&quot;never&quot;</code>:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u00a0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u00b7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.main { margin-top: 0; }&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * there&#39;s no way to inject a whitespace into jsx without a container so this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * will always be allowed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;     &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* comment */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bpp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;}&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// the comment makes the container necessary</span></span></code></pre></div><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>You should turn this rule off if you are not concerned about maintaining consistency regarding the use of curly braces in JSX props and/or children as well as the use of unnecessary JSX expressions.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/react/jsx_curly_brace_presence.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,66))])}const b=e(r,[["render",d]]);export{C as __pageData,b as default};
