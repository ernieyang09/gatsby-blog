webpackJsonp([53431415496894],{481:function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/10/1007--render-props.md absPath of file >>> MarkdownRemark",html:'<snippet>\n前陣了寫了跟HOC有關的文章，我從來沒用過mixin，雖然介紹了HOC，但自己使用的時候總覺得哪裡怪怪的，看了最近蠻紅的影片，終於恍然大悟，讓我們來介紹render props吧。\n</snippet>\n<p>一切要從Michael Jackson的<a href="https://www.youtube.com/watch?v=BcVAq3YFiuc">影片</a>開始，或是你也可以看他寫的<a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">文章</a>。(他是react-router的創始人之一)</p>\n<h3>mixin</h3>\n<p>本來mixin的出現是為了code的reusable，這邊不特別介紹mixin的寫法，在我開始寫的時候，就已經不流行了。</p>\n<h4>mixin的問題</h4>\n<ol>\n<li>\n<p>不支持es6 class<br/>\n沒錯，就是這點，所以我沒寫過，我也以前也只知道這點XDD。</p>\n</li>\n<li>\n<p>無方向性<br/>\n我是看文章翻譯的，簡言之，mixin使用了state，這樣會使被附加的component不知道state從哪裡來，尤其是一個component內用了不只一個mixin，code會變的implict。</p>\n</li>\n<li>\n<p>命名衝突<br/>\n如果有兩個mixin操作了相同名稱的state，這時候就會發生命名衝突，而且程式會直接掛掉，無法跑。</p>\n</li>\n</ol>\n<h3>HOC</h3>\n<p>採用了decorator的方式，跟\bmixin相比支援es6 class。想了解的可以去翻我之前寫的文章。</p>\n<h4>HOC的問題</h4>\n<ol>\n<li>\n<p>一樣無方向性。</p>\n</li>\n<li>\n<p>一樣命名衝突，但是可以跑，後面的會覆蓋前面的，react不會警告。比起mixin，這樣應該算更不好的缺點。</p>\n</li>\n</ol>\n<h3>render prop</h3>\n<p>在render裡面做處理，跟前兩種很不一樣的點，前面兩種被視為static composition，你只會做一次composition，在你create class的時候，而render prop為dynamic composition，每一次render的時候都會。我對這些是沒辨法自己想到見解，但我覺得這是蠻有道理的。</p>\n<p>雖然我寫render prop，但其實常見的是Function as children?不過原理是一模一樣的，請安心使用。</p>\n<p>試寫Function as children</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">chilren</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span><span class="token constant">A</span><span class="token operator">></span>\n      <span class="token punctuation">{</span> AState <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">...</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">A</span><span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>無方向性解決，你可以很簡單的從function的params得知是哪來的。</p>\n<p>命名衝突解決，\bfunction的params就像module or block一樣。隸屬於不同的params，永遠不會衝突。</p>\n<p>唯一的問題(我想的)，因為變成兩個class，多了一個&#x3C;div>Root，我個人很討厭react的一堆div(炸)。</p>\n<p>打完啦，我是看影片學的，影片裡面有更多有趣的說法，像是問題就像nail，而mixin就是hammer，然後敲敲敲，react-router其實不想寫HOC，但是因為社群需要\b...建議聽的懂英文而有時間的可以看看影片，很精采。</p>\n<p>我個人是覺得應該還是各有優缺點(雖然原文是render prop必勝)，HOC有recompose這個套件，render prop有react-powerplugin這個套件，目前在寫的時候目標是往render prop走，再看看會遇到什麼坑囉。</p>',fields:{slug:"/posts/render-props/"},frontmatter:{title:"render prop正夯",date:"2017-10-07T22:54",tags:["react"]}}},pathContext:{slug:"/posts/render-props/"}}}});
//# sourceMappingURL=path---posts-render-props-5db8ba99e33e98cea69a.js.map