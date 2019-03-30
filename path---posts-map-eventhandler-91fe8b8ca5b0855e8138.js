webpackJsonp([77411995587048],{470:function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/09/0927--map_eventhandler.md absPath of file >>> MarkdownRemark",html:'<p>這個問題好像不常遇到，但是今天被同事問到的時候還一時回答不出來。</p>\n<p>問題淺顯易懂，在map function裡面的params要何如何傳出來parent。</p>\n<p>一下就回答用callback啊，但是仔細想一想要怎麼傳哬，囧。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// what to do</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span> child <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token comment">// I want child props ex: ID</span>\n            <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>先想了一個解決方法後開始google，看到這篇\b<a href="https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method">文章</a></p>\n<h4>Easy way</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span> child <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>這就是一般人直覺會想到的做法，但並不是太好。這網路上有很多文章，反正會有slightly performance issue(rebind與pure component等問題)，另外不好閱讀。</p>\n<h4>Better Way</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function-variable function">onChildClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span> child <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token comment">// I want child props ex: ID</span>\n            <span class="token operator">&lt;</span>Child onChildClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChildClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onChildClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>這例子看起來很蠢，不過現實中很少map裡面長這麼簡單的，以前都寫這種寫法，所以就不知道怎麼回答寫在同一層的XD。</p>\n<p>不過我一開始認真想的是data-attr</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> cid <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"data-cid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span> child <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token comment">// I want child props ex: ID</span>\n            <span class="token operator">&lt;</span>div data<span class="token operator">-</span>cid<span class="token operator">=</span><span class="token punctuation">{</span>child<span class="token punctuation">.</span>id<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>隱約記得在哪個文章看過(react官方網站?!人老了)</p>\n<p>最後，因為專案都用semantic-react啦\b...可以直接傳出data，用久了難怪忘光XDD，看了一下source code，使用lodash的invoke</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> disabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n\n  _<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span> <span class="token string">\'onClick\'</span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>也算學到了新東西!!</p>',fields:{slug:"/posts/map_eventhandler/"},frontmatter:{title:"React with map中的eventhandler",date:"2017-09-27T22:49",tags:["react","javascript"]}}},pathContext:{slug:"/posts/map_eventhandler/"}}}});
//# sourceMappingURL=path---posts-map-eventhandler-91fe8b8ca5b0855e8138.js.map