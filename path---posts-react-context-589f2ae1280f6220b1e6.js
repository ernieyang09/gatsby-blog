webpackJsonp([0xd1dd89374c53],{475:function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/09/0909--react_context.md absPath of file >>> MarkdownRemark",html:'<snippet>\ncontext是一個很少被使用的屬性，我想一方面在react的教學頁面不會特別提到這點，另一方面介紹的頁面就先警告一般人不要使用。一開始我也是看到警告就沒有研究了，不過在實際遇到情境與研究了HOC以後，確實是挺有趣的。\n</snippet>\n<h3>Context</h3>\n<p>react的<a href="https://facebook.github.io/react/docs/context.html">官方文章</a>中，會告訴你props要傳遞每個component很麻煩，所以有了context這個power api，不過下一秒又跟說不建議使用XD</p>\n<p>context的用法也相當簡單，這邊不太細講整體用法，請自己看官方文件</p>\n<p>總之，在你的context container加上getChildContext與childContextTypes</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>key<span class="token punctuation">:</span> <span class="token string">"value"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nParent<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> PropTypes<span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在你的child加上contextTypes，最後呼叫this.context使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nChild<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> PropTypes<span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>為什麼不要使用context的原因</p>\n<ol>\n<li>\n<p>很難找到source<br/>\n這與react的特色完全相抵觸，react強調的是props的傳遞與資料的明確性，你的所有東西會照著flow走。而context打破了這個規則，你必須去翻你的source code。當然現在的IDE都很猛，可能也不是很care，但是跟原生react比，確實有這個問題。</p>\n</li>\n<li>\n<p>造成耦合度<br/>\n原本的component只要接收props就可以在任何地方，任何專案中使用，但是一但使用了context，你必須綁定某個parent，這樣是增加了耦合度。</p>\n</li>\n<li>\n<p>難以test<br/>\n如果有在寫test，因為component的data要從context取得而非props，實際想想就覺得很困難。</p>\n</li>\n<li>\n<p>語意不清與render問題<br/>\n從setState你可以馬上看的懂state要改變了，但是getChildContext是跟著setState一起的，這本身語意上就不清晰，另外因為getChildContext這個method會在props or state改變的時候被呼叫，所以你要改變context的值應該使用props or state(但這其實就是不好的做法)。<br/>\n因為child更新context會被shouldCompoentUpdate所擋下來。這邊並不是指child本身shouldCompoentUpdate，而是parent到child之間所有的component若是有實作shouldCompoentUpdate且return false，更大的機率可能用了PureComponent，這樣就會導致child更新失敗。<br/></p>\n<p>所以所以重點來了</p>\n<ol>\n<li>context不應該被改變(or shalow immutable)。</li>\n<li>承上，context只應該在constructor的時候收到一次。</li>\n</ol>\n<p>基於以上理由我們可以</p>\n<ol>\n<li>將context由props or state搬到外面轉為Dependency injection。</li>\n<li>加上observe pattern，訂閱Dependency Object，當Object改變時，主動告知底下改變。</li>\n</ol>\n<p><a href="https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076">這篇必看!!!</a></p>\n</li>\n</ol>\n<p>打完這篇我也將專案中的context先拆掉了(因為本來就可以用provider+hoc的方式處理)，但是使用provider本身也就有相當的耦合度，主要還是看架構，再來決定你的component要如何設計囉。</p>',fields:{slug:"/posts/react_context/"},frontmatter:{title:"React context認識",date:"2017-09-09T14:55",tags:["react"]}}},pathContext:{slug:"/posts/react_context/"}}}});
//# sourceMappingURL=path---posts-react-context-589f2ae1280f6220b1e6.js.map