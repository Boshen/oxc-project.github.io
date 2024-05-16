import{_ as e,c as o,o as n,a4 as t}from"./chunks/framework.BX13wLY0.js";const m=JSON.parse('{"title":"Command-line Interface","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter-cli.md","filePath":"docs/guide/usage/linter-cli.md"}'),i={name:"docs/guide/usage/linter-cli.md"},l=t('<h1 id="command-line-interface" tabindex="-1">Command-line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command-line Interface&quot;">​</a></h1><h2 id="usage" tabindex="-1"><strong>Usage</strong> <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;**Usage**&quot;">​</a></h2><p><strong><code>oxlint</code></strong> [<strong><code>-c</code></strong>=<em><code>&lt;./eslintrc.json&gt;</code></em>] [<strong><code>--fix</code></strong>] [<em><code>PATH</code></em>]...</p><p>Omitting <code>PATH</code> defaults to linting the current working directory.</p><h2 id="useful-options-and-examples" tabindex="-1">Useful Options and Examples <a class="header-anchor" href="#useful-options-and-examples" aria-label="Permalink to &quot;Useful Options and Examples&quot;">​</a></h2><ul><li><code>--deny-warnings</code> turn warnings into errors, useful for failing CI with exit code 1.</li><li><code>-D all</code> deny (turn on) all rules.</li><li><code>-A all -D eqeqeq</code> run a single rule.</li><li><code>-D correctness -D perf -A debugger -A eqeqeq</code> deny (turn on) <code>correctness</code> and <code>perf</code> rules and allow (turn off) the <code>debugger</code> and <code>eqeqeq</code> rule.</li><li><code>-c ./eslintrc.json</code> use the <code>rules</code> field to configure the rules, as documented in <a href="https://eslint.org/docs/latest/use/configure/rules#using-configuration-files" target="_blank" rel="noreferrer">ESLint</a>. Only <code>json</code> format is supported.</li></ul><h2 id="basic-configuration" tabindex="-1"><strong>Basic Configuration</strong> <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;**Basic Configuration**&quot;">​</a></h2><ul><li><p><strong><code>-c</code></strong>, <strong><code>--config</code></strong>=<em><code>&lt;./eslintrc.json&gt;</code></em> — ESLint configuration file (experimental)</p><ul><li>only <code>.json</code> extension is supported</li></ul></li><li><p><strong><code> --tsconfig</code></strong>=<em><code>&lt;./tsconfig.json&gt;</code></em> — TypeScript <code>tsconfig.json</code> path for reading path alias and project references for import plugin</p></li></ul><h2 id="allowing-denying-multiple-lints" tabindex="-1"><strong>Allowing / Denying Multiple Lints</strong> <a class="header-anchor" href="#allowing-denying-multiple-lints" aria-label="Permalink to &quot;**Allowing / Denying Multiple Lints**&quot;">​</a></h2><p>For example <code>-D correctness -A no-debugger</code> or <code>-A all -D no-debugger</code>.</p><p>The default category is <code>-D correctness</code>.</p><p>See <a href="/docs/guide/usage/linter-rules.html"><code>rules</code></a> for rule names.</p><p>The categories are:</p><ul><li><code>correctness</code> - code that is outright wrong or useless</li><li><code>suspicious</code> - code that is most likely wrong or useless</li><li><code>pedantic</code> - lints which are rather strict or have occasional false positives</li><li><code>style</code> - code that should be written in a more idiomatic way</li><li><code>nursery</code> - new lints that are still under development</li><li><code>restriction</code> - lints which prevent the use of language and library features</li><li><code>all</code> - all the categories listed above</li></ul><ul><li><strong><code>-A</code></strong>, <strong><code>--allow</code></strong>=<em><code>NAME</code></em> — Allow the rule or category (suppress the lint)</li><li><strong><code>-D</code></strong>, <strong><code>--deny</code></strong>=<em><code>NAME</code></em> — Deny the rule or category (emit an error)</li></ul><h2 id="enable-plugins" tabindex="-1"><strong>Enable Plugins</strong> <a class="header-anchor" href="#enable-plugins" aria-label="Permalink to &quot;**Enable Plugins**&quot;">​</a></h2><ul><li><strong><code> --import-plugin</code></strong> — Enable the experimental import plugin and detect ESM problems. It is recommended to use along side with the <code>--tsconfig</code> option.</li><li><strong><code> --jsdoc-plugin</code></strong> — Enable the experimental JSDoc plugin and detect JSDoc problems</li><li><strong><code> --jest-plugin</code></strong> — Enable the Jest plugin and detect test problems</li><li><strong><code> --jsx-a11y-plugin</code></strong> — Enable the JSX-a11y plugin and detect accessibility problems</li><li><strong><code> --nextjs-plugin</code></strong> — Enable the Next.js plugin and detect Next.js problems</li><li><strong><code> --react-perf-plugin</code></strong> — Enable the React performance plugin and detect rendering performance problems</li></ul><h2 id="fix-problems" tabindex="-1"><strong>Fix Problems</strong> <a class="header-anchor" href="#fix-problems" aria-label="Permalink to &quot;**Fix Problems**&quot;">​</a></h2><ul><li><strong><code> --fix</code></strong> — Fix as many issues as possible. Only unfixed issues are reported in the output</li></ul><h2 id="ignore-files" tabindex="-1"><strong>Ignore Files</strong> <a class="header-anchor" href="#ignore-files" aria-label="Permalink to &quot;**Ignore Files**&quot;">​</a></h2><ul><li><p><strong><code> --ignore-path</code></strong>=<em><code>PATH</code></em> — Specify the file to use as your .eslintignore</p></li><li><p><strong><code> --ignore-pattern</code></strong>=<em><code>PAT</code></em> — Specify patterns of files to ignore (in addition to those in .eslintignore)</p><p>The supported syntax is the same as for .eslintignore and .gitignore files You should quote your patterns in order to avoid shell interpretation of glob patterns</p></li><li><p><strong><code> --no-ignore</code></strong> — Disables excluding of files from .eslintignore files, <strong><code>--ignore-path</code></strong> flags and <strong><code>--ignore-pattern</code></strong> flags</p></li><li><p><strong><code> --symlinks</code></strong> — Follow symbolic links. Oxlint ignores symbolic links by default.</p></li></ul><h2 id="handle-warnings" tabindex="-1"><strong>Handle Warnings</strong> <a class="header-anchor" href="#handle-warnings" aria-label="Permalink to &quot;**Handle Warnings**&quot;">​</a></h2><ul><li><strong><code> --quiet</code></strong> — Disable reporting on warnings, only errors are reported</li><li><strong><code> --deny-warnings</code></strong> — Ensure warnings produce a non-zero exit code</li><li><strong><code> --max-warnings</code></strong>=<em><code>INT</code></em> — Specify a warning threshold, which can be used to force exit with an error status if there are too many warning-level rule violations in your project</li></ul><h2 id="output" tabindex="-1"><strong>Output</strong> <a class="header-anchor" href="#output" aria-label="Permalink to &quot;**Output**&quot;">​</a></h2><ul><li><strong><code>-f</code></strong>, <strong><code>--format</code></strong>=<em><code>ARG</code></em> — Use a specific output format (default, json, unix, checkstyle, GitHub)</li></ul><h2 id="miscellaneous" tabindex="-1"><strong>Miscellaneous</strong> <a class="header-anchor" href="#miscellaneous" aria-label="Permalink to &quot;**Miscellaneous**&quot;">​</a></h2><ul><li><strong><code> --threads</code></strong>=<em><code>INT</code></em> — Number of threads to use. Set to 1 for using only 1 CPU core</li></ul><h2 id="available-positional-items" tabindex="-1"><strong>Available positional items:</strong> <a class="header-anchor" href="#available-positional-items" aria-label="Permalink to &quot;**Available positional items:**&quot;">​</a></h2><ul><li><em><code>PATH</code></em> — Single file, single path or list of paths</li></ul><h2 id="available-options" tabindex="-1"><strong>Available options:</strong> <a class="header-anchor" href="#available-options" aria-label="Permalink to &quot;**Available options:**&quot;">​</a></h2><ul><li><strong><code> --rules</code></strong> — list all the rules that are currently registered</li><li><strong><code>-h</code></strong>, <strong><code>--help</code></strong> — Prints help information</li></ul>',31),r=[l];function s(a,c,d,g,u,p){return n(),o("div",null,r)}const f=e(i,[["render",s]]);export{m as __pageData,f as default};
