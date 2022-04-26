import{o as e,c as o,a as d}from"./app.2a11843f.js";const a='{"title":"模版生成","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"生成组件","slug":"生成组件"},{"level":2,"title":"生成视图","slug":"生成视图"},{"level":2,"title":"如何扩展","slug":"如何扩展"}],"relativePath":"dep/create-module.md","lastUpdated":1650959713642}',c={},r=d('<h1 id="模版生成"><a class="header-anchor" href="#模版生成" aria-hidden="true">#</a> 模版生成</h1><h2 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>为了方便开发者快速生成 <code>组件</code> 和 <code>视图</code> 文件，本项目提供了 <code>plop</code> 为开发者生成统一的文件模版。</p><h2 id="生成组件"><a class="header-anchor" href="#生成组件" aria-hidden="true">#</a> 生成组件</h2><p>运行</p><div class="language-shell"><pre><code><span class="token function">npm</span> run p\n</code></pre></div><p>选择 <code>component</code> 之后，输入组件名，如 <code>newCom</code>，既可在 <code>src/components</code> 目录下创建对应的组件。</p><p>组件名开头如果是小写，会自动转换为大写。</p><h2 id="生成视图"><a class="header-anchor" href="#生成视图" aria-hidden="true">#</a> 生成视图</h2><p>运行</p><div class="language-shell"><pre><code><span class="token function">npm</span> run p\n</code></pre></div><p>选择 <code>view</code> 之后，输入路径，默认为 <code>views</code>，接着输入模块名，如 <code>newView</code>，既可在 <code>src/${views}</code> 目录下创建对应的视图文件。</p><h2 id="如何扩展"><a class="header-anchor" href="#如何扩展" aria-hidden="true">#</a> 如何扩展</h2><p>如果需要扩展额外的视图模版，可以在根目录 <code>plopfile.js</code> 文件中，添加初始模版，然后到根目录 <code>plop</code> 文件夹中，添加对应的模块代码。具体可以参考 <code>component</code> 下的代码。</p><p>更多的 <code>plop</code> 配置，则可以查阅 <a href="https://plopjs.com/documentation/" target="_blank" rel="noopener noreferrer">文档</a></p>',15);c.render=function(d,a,c,p,n,l){return e(),o("div",null,[r])};export default c;export{a as __pageData};
