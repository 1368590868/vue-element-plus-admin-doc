import{o as t,c as a,a as n}from"./app.2a11843f.js";const s='{"title":"Highlight 高亮组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Highlight 属性","slug":"highlight-属性"},{"level":2,"title":"Highlight 事件","slug":"highlight-事件"}],"relativePath":"components/highlight.md","lastUpdated":1650959713642}',e={},p=n('<h1 id="highlight-高亮组件"><a class="header-anchor" href="#highlight-高亮组件" aria-hidden="true">#</a> Highlight 高亮组件</h1><p>Highlight 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Highlight" target="_blank" rel="noopener noreferrer">src/components/Highlight</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>组件只能接收纯文本。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Highlight <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Highlight&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Highlight</span> <span class="token attr-name">:keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>十年前<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>现在<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    种一棵树最好的时间是十年前，其次就是现在。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Highlight</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="highlight-属性"><a class="header-anchor" href="#highlight-属性" aria-hidden="true">#</a> Highlight 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>tag</td><td>包裹标签</td><td><code>string</code></td><td>-</td><td>span</td></tr><tr><td>keys</td><td>高亮的关键字</td><td><code>string[]</code></td><td>-</td><td>[]</td></tr><tr><td>color</td><td>高亮的颜色</td><td><code>string</code></td><td>-</td><td>var(--el-color-primary)</td></tr></tbody></table><h2 id="highlight-事件"><a class="header-anchor" href="#highlight-事件" aria-hidden="true">#</a> Highlight 事件</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>关键字点击事件</td><td>key: string</td></tr></tbody></table>',9);e.render=function(n,s,e,o,l,i){return t(),a("div",null,[p])};export default e;export{s as __pageData};
