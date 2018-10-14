webpackJsonp([0x69a18d499ab9],{460:function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/09/0917--hoc_n_decorator.md absPath of file >>> MarkdownRemark",html:'<p><snippet>React強調composition > inheritance，利用許多小的component組合成大的comoponent</snippet></p>\n<p>其中，High-order component也是代替inheritance的一種方式。HOC為一個function，接收一個component為params，然後回傳另一個component。最常見的HOC就是react-redux的connect，此function幫助整個app可以綁定唯一的store，將邏輯與UI分離卻又很方便的建立component。</p>\n<blockquote>\n<p>hocFactory:: W: React.Component => E: React.Component</p>\n</blockquote>\n<p>對我來說，最大的好處就是不同的component可以使用HOC掛載相同的行為或屬性。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Logger</span> <span class="token operator">=</span> <span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">ClickLogger</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    handleClick <span class="token operator">=></span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上述的function可以綁定任何的component，也是為什麼composition比inheritance好的原因。不過這其實這應該回到oo design討論，若只是為了code reuse，完全不應該使用inheritance。\binheritance分為\bimplementation inheritance（實作繼承)與interface inheritance（介面繼承)，我們應該為了interface而繼承(is-a的概念)，而implementation inheritance則使用composition取代。</p>\n<p>並且，inheritance擁有最高的耦合度，在現在流行的functional progaming完全相反，或者說，functional progaming的一部份目的本來就是為了降低耦合度。</p>\n<p>另外一個使用情境就是對props做一些處理，例如修改或是新增props (props proxy)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> Loggin <span class="token operator">=</span> <span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">LogginWrap</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> newProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n        user<span class="token punctuation">:</span> currentLoggedInUser\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent\n        <span class="token punctuation">{</span>\n          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span>\n          organization<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>organization<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n        <span class="token punctuation">{</span> <span class="token operator">...</span>newProps <span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e">這篇文章</a>還有更多應用像是inheritance inversion(看了一下很有趣，debug part看起來很好用，另一個不知道使用境)，然後naming超實用!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token constant">HOC</span><span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token template-string"><span class="token string">`HOC(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getDisplayName</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token comment">//or</span>\n<span class="token keyword">class</span> <span class="token class-name">HOC</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> displayName <span class="token operator">=</span> <span class="token template-string"><span class="token string">`HOC(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getDisplayName</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Decorator與Recompose研究一下，下一篇再介紹。</p>',fields:{slug:"/posts/hoc_n_decorator/"},frontmatter:{title:"HOC in React",date:"2017-09-17T16:48",tags:["react"]}}},pathContext:{slug:"/posts/hoc_n_decorator/"}}}});
//# sourceMappingURL=path---posts-hoc-n-decorator-9d0c9065f485a5a2c335.js.map