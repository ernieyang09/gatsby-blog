webpackJsonp([32011686734224],{457:function(n,a){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/09/0902--connect_n_di.md absPath of file >>> MarkdownRemark",html:'<p><snippet>已前沒有學過design pattern，雖然看過很多文章，但是寫前端還是很少會思考這個問題。不過實際上，如果常常會整理自己code的人一定或多或少會用到一些pattern觀念。其實在使用framework的時候也有很多己經包進去的pattern了。</snippet></p>\n<p>這次要來講很夯的DI(dependency injection)，首先要先了解控制反轉(inversion of control)。</p>\n<h3>控制反轉</h3>\n<p>通常會說到這個詞都是OO設計，概念是依賴對象 (Dependent Object) &#x26; 被依賴對象（Dependency Object）</p>\n<p><img src="./pic/connect_n_di01.jpg" alt="ioc1"></p>\n<p>物件導向中，會很常說到耦合度，當物件彼此交互引用(繼承)時，關聯性很大，其中的一個物件掛了，整體就不能動了，稱之為高耦合性。</p>\n<p><img src="./pic/connect_n_di02.jpg" alt="ioc2"></p>\n<p>在控制反轉的設計中，巧妙的加入一個容器。物件需要別的物件的東西，只需要從容器注入。原本從頭到尾由類別控制，但是控制反轉將控制權交到了容器手上，也可以從另一個角度來看，傳統的方式是高階(parent)模組建立低階(child)模組，現在則是低階模組注入高階模組，可以大幅降低耦合度。</p>\n<p>舉例</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Lecture</span> <span class="token punctuation">{</span>\n  Lecturer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>Lecturer<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>假設B做了演講這件事後，隔天換成C要演講，那就得再造一個新的class。</p>\n<p>IoC寫法</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Lecture</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>Lecturer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>Lecturer <span class="token operator">=</span> Lecturer<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>Lecturer<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>不要在容器裡面註冊物件，而是將容器透過介面，將物件注入容器。"Don\'t call me, I\'ll call you."</p>\n<p>javascript的世界中，並沒有介面這種東西，屬於ducking type，這點需特別注意。</p>\n<p>另外javascript有一種很常見的控制反轉 - callback。你將你的控制權交給callback(想像成容器)，但這是不好的做法，常常引用的\bcallback都是來自第三方的api，你被迫交出控制權，很難debug，也無法保証你程式的 \bcontinuation。</p>\n<p>這邊你須要使用promise來控制逆反轉(uninversion of control)，所以說design pattern可以帶來一些好處，但不一定百分之百就是最好的。</p>\n<p>另外控制權是相對的，什麼叫做"失去控制權"是很抽像的，甚至連網頁的btn click都算控制反轉(是你將資料交(注入)紿程式)，我們應該要了解的是控制反轉的好處與使用情境。</p>\n<p>簡單來說，將程式的flow以不同的方式運行都是一種控制反轉的概念。</p>\n<h3>Dependency Injection</h3>\n<p>這邊好像沒啥好介紹的，DI是IoC的子集合，或是說是一種實現IoC的設計模型。以Spring為例，就是有一個IoC Container，透過xml,json...將每一個注入的模組定義好，以後就可以靠文檔，方便抽換模組。</p>\n<h3>DI vs Strategy Pattern vs Factory Pattern</h3>\n<p>Strategy Pattern是軟體設計模型，強調的是在runtime的時候選擇一個實作，更重要的是選擇，你要先知道你的情境是什麼。DI是物件導向設計，強調的是容器與解耦的概念。你可以在不同情境的時候，注入不同的方法。解耦跟抽換實作是完全不一樣的概念，抽換仍然是相依在高階模組之下。Factory Pattern也是常常被拿來與Strategy Pattern做比較的，Factory的做用是create new objects，而Strategy是做implement居多。</p>\n<h3>React HOC &#x26; Dependency Injection</h3>\n<p>React裡面常常會遇到一種情況，就是props hell，從parent要給某個grandchild值需要不斷的傳遞props，這樣其實造成了高耦合度，而且中間的component明明就沒有使用props，是非常不好的寫法。因此可以使用HOC注入資料就好。</p>\n<p>原本寫這篇文章是已為HOC是Dependency injection，認真研究以後才知道比較像是Decorator Pattern，但是React裡面還是可以利用context做Dependency injection，最近工作上遇到的疑問全部都混在一起變成撒尿牛丸了XDDD</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> ComponentHOC <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component\n                <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span>\n                <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>\n                enchance<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`YOUR ENCHANE DATA`</span></span><span class="token punctuation">}</span>\n              <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>HOC還須要注入資料，就可以使用react context，這邊先不介紹context用法(但請警慎使用)。在所有常見的provider library裡面幾乎都有使用，像i18n\bext reac\bt、socket provider、react-router、跟最常用的react-redux。這些都同時使用Decorator Pattern &#x26; Dependency injection，但這兩個概念是不同的。react中常見一起使用，所以才造成我的誤解。</p>\n<p>在寫這篇文章的時候爬到了這個<a href="https://github.com/krasimir/react-in-patterns">github</a>，實在是很過癮，再花時間慢慢看。</p>\n<p>最近才開始學習design pattern，若是有錯請指教，至於hoc與es6 Decorator與context之後再寫別篇文章了(累)</p>\n<p><a href="http://madphilosophy.idv.tw/2016/12/24/springmvc-%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%89inversion-of-control%E8%88%87%E4%BE%9D%E8%B3%B4%E6%B3%A8%E5%85%A5dependency-injection/?i=1">圖片來源</a></p>',fields:{slug:"/posts/connect_n_di/"},frontmatter:{title:"DI & React HOC &....",date:"2017-09-02T00:35",tags:["javascript","Design Pattern"]}}},pathContext:{slug:"/posts/connect_n_di/"}}}});
//# sourceMappingURL=path---posts-connect-n-di-9ca96683a1cb09677567.js.map