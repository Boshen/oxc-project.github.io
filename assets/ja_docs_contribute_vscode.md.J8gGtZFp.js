import{_ as e,c as o,o as t,a5 as d}from"./chunks/framework.BWLfa7pZ.js";const h=JSON.parse('{"title":"VSCode Extension","description":"","frontmatter":{"title":"VSCode Extension","outline":"deep"},"headers":[],"relativePath":"ja/docs/contribute/vscode.md","filePath":"ja/docs/contribute/vscode.md"}'),n={name:"ja/docs/contribute/vscode.md"},i=d('<h1 id="vscode-extension" tabindex="-1">VSCode Extension <a class="header-anchor" href="#vscode-extension" aria-label="Permalink to &quot;VSCode Extension&quot;">​</a></h1><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Build the extension and run it inside vscode:</p><ol><li><code>pnpm install</code></li><li><code>pnpm run build</code></li><li><code>pnpm run package</code></li><li>open vscode and run the command palette &quot;Extensions: Install from VSIX...&quot;</li><li>find the <code>oxc-vscode-x.x.x.vsix</code> file from <code>./editor/vscode</code> directory</li><li>open a <code>.js</code> / <code>.ts</code> file, add <code>debugger;</code> and save</li><li>see the warning <code>eslint(no-debugger): debugger statement is not allowed - oxc</code></li></ol>',4),a=[i];function c(s,l,r,p,_,u){return t(),o("div",null,a)}const x=e(n,[["render",c]]);export{h as __pageData,x as default};
