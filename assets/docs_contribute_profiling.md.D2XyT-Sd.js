import{_ as i,c as t,a2 as a,o as s}from"./chunks/framework.8qdJL5ht.js";const u=JSON.parse('{"title":"Profiling","description":"","frontmatter":{"title":"Profiling","outline":"deep"},"headers":[],"relativePath":"docs/contribute/profiling.md","filePath":"docs/contribute/profiling.md"}'),n={name:"docs/contribute/profiling.md"};function o(l,e,r,p,h,c){return s(),t("div",null,e[0]||(e[0]=[a(`<h1 id="profiling" tabindex="-1">Profiling <a class="header-anchor" href="#profiling" aria-label="Permalink to &quot;Profiling&quot;">​</a></h1><h2 id="compiling-oxlint-in-release-mode-with-debug-information" tabindex="-1">Compiling <code>oxlint</code> in release mode with debug information <a class="header-anchor" href="#compiling-oxlint-in-release-mode-with-debug-information" aria-label="Permalink to &quot;Compiling \`oxlint\` in release mode with debug information&quot;">​</a></h2><p>For profiling, you will need to compile the <code>oxlint</code> binary in release mode with debug information enabled. You can do that by passing <code>--profile release-with-debug</code> to <code>cargo build</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release-with-debug</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span></span></code></pre></div><p>After building, the binary is located at <code>./target/release-with-debug/oxlint</code>. This is the binary that should be used for profiling.</p><h2 id="cpu-samply" tabindex="-1">CPU - Samply <a class="header-anchor" href="#cpu-samply" aria-label="Permalink to &quot;CPU - Samply&quot;">​</a></h2><p><a href="https://github.com/mstange/samply" target="_blank" rel="noreferrer">Samply</a> is a command line CPU profiler which uses the Firefox profiler as its UI. Works on macOS and Linux.</p><p>To use Samply with <code>oxlint</code>, run <code>samply record</code> followed by the <code>oxlint</code> command and arguments:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">samply</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> record</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./target/release-with-debug/oxlint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>To improve the profiling experience, you might consider some of the following options:</p><ul><li><code>oxlint</code>: <code>--silent</code> will suppress diagnostics output and keep the profile more focused.</li><li><code>oxlint</code>: <code>--threads 1</code> will run the linter single threaded, which is slower, but makes it easier to analyze the profile for single-threaded performance.</li><li><code>samply record</code>: <code>--rate &lt;number&gt;</code> will sample the profile at a higher rate. The default is 1000Hz (1ms), but increasing this will provide more detailed information at the cost of a larger profile file.</li></ul><p>For example, running <code>oxlint</code> single-threaded with a 0.1ms sample rate:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">samply</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> record</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./target/release-with-debug/oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --silent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><h2 id="cpu-mac-xcode-instruments" tabindex="-1">CPU - Mac Xcode Instruments <a class="header-anchor" href="#cpu-mac-xcode-instruments" aria-label="Permalink to &quot;CPU - Mac Xcode Instruments&quot;">​</a></h2><p><a href="https://github.com/cmyr/cargo-instruments" target="_blank" rel="noreferrer"><code>cargo instruments</code></a> is the tool of choice to bridge Mac Xcode instruments.</p><p>The following instruction replicates the procedure of <code>cargo instruments</code>.</p><p>First, install Xcode Instruments command-line tools:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xcode-select</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span></span></code></pre></div><p>Then, if you haven&#39;t already, <a href="#compiling-oxlint-in-release-mode-with-debug-information">ensure that the <code>oxlint</code> binary is compiled</a>.</p><p>Under the hood, <code>cargo instruments</code> invokes the <code>xcrun xctrace</code> command, which is equivalent to</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xcrun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xctrace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> record</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Time Profile&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --launch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/oxc/target/release-with-debug/oxlint</span></span></code></pre></div><p>Running the command above produces the following output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Starting recording with the Time Profiler template. Launching process: oxlint.</span></span>
<span class="line"><span>Ctrl-C to stop the recording</span></span>
<span class="line"><span>Target app exited, ending recording...</span></span>
<span class="line"><span>Recording completed. Saving output file...</span></span>
<span class="line"><span>Output file saved as: Launch_oxlint_2023-09-03_4.41.45 PM_EB179B85.trace</span></span></code></pre></div><p>Open the trace file <code>open Launch_oxlint_2023-09-03_4.41.45\\ PM_EB179B85.trace</code>.</p><p>To see a top down trace:</p><ol><li>On the top panel, click CPUs</li><li>On the left input box, click <code>x</code> then select <code>Time Profiler</code></li><li>At the bottom panel, click &quot;Call Tree&quot;, turn on &quot;Invert Call Tree&quot; and turn off separate by thread.</li></ol><p>For memory and disk operations, use <code>--template &#39;Allocations&#39;</code> and <code>--template &#39;File Activity&#39;</code>.</p><p>For more detailed CPU profiling, such as L1/L2 cache misses, cycle and instruction counts, and branch prediction info, you need to use a custom &quot;CPU Counters&quot; template:</p><ol><li>Open Instruments and select the &quot;CPU Counters&quot; template.</li><li>In the &quot;CPU Counters&quot; settings: <ol><li>Turn on the &quot;High Frequency Sampling&quot; option.</li><li>Below the &quot;High Frequency Sampling&quot; option, click the plus icon and select an event type. Some suggested event types: <ul><li>Cycles - for getting a rough idea of how many CPU cycles are spent in each function.</li><li>Instructions - for getting a rough idea of how many CPU instructions are executed in each function and how many cycles that takes</li><li><code>L1D_CACHE_MISS_LD</code> - count of L1 cache misses from loading data from memory</li></ul></li></ol></li><li>Once you have enabled the events you are interested in, save the template in &quot;File &gt; Save as Template ...&quot; and give it a name.</li><li>Now you can use this with <code>xctrace</code> by passing the template name to the <code>--template</code> option: <code>xcrun xctrace record --template &#39;My Custom CPU Counters&#39; --output . --launch -- /path/to/oxc/target/release-with-debug/oxlint</code></li></ol><h2 id="heap-allocation" tabindex="-1">Heap Allocation <a class="header-anchor" href="#heap-allocation" aria-label="Permalink to &quot;Heap Allocation&quot;">​</a></h2><p>Try <a href="https://docs.rs/dhat/latest/dhat" target="_blank" rel="noreferrer">dhat</a>.</p>`,31)]))}const g=i(n,[["render",o]]);export{u as __pageData,g as default};
