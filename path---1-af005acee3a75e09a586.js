webpackJsonp([44611889172531],{446:function(n,a){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/browser-mechanic/"},frontmatter:{title:"Browser render & performance",date:"2018-03-25T15:29",tags:["mechanic","performance tuning"],release:!0},html:'<snippet>\n  原本要介紹javascript event loop的，寫一寫變成介紹browserXDD\n</snippet>\n<p>有人問在處理器\bloading js會block render是為什麼，我知道js是single thread，但並不能確定是single thread的問題，於是乎一切要從browser講起。</p>\n<p>modern browser通常是multi process的，自己認為最大的優點是</p>\n<ul>\n<li>避免一頁crash而導致整個browser crash</li>\n<li>避免插件crash而導致整個browser crash</li>\n</ul>\n<p>而對於前端最重要的就是渲染進程(process)，而一個process又可以分成multi thread，而渲染進程裡面擁有的重要thread</p>\n<ul>\n<li>GUI</li>\n<li>JS</li>\n<li>Event</li>\n<li>Timer</li>\n<li>Http request</li>\n</ul>\n<p>GUI與JS \bthread是戶斥的，因為當repaint的時候會觸發GUI \bthread，但JS執行後很有可能會造成多次repaint，於是乎JS在執行的時候會先block GUI thread，待JS結束後才換GUI thread。</p>\n<p>所以如果在browser裡需要做密集運算可以使用web worker，browser會開一個子thread用來處理運算，但是不能操作dom，這是一個很酷的功能，目前的專案有地方可以優化的，只是browser的支援度還不夠所以放棄(IE 11 up...)，希望未來有機會玩囉。</p>\n<p>假設我們發送了一個http request，browser的行為大致如下</p>\n<ol>\n<li>Get content from http request</li>\n<li>Parse html and create dom tree (trigger DOMContentLoaded)</li>\n<li>Parse css and create render tree(with dom tree)</li>\n<li>(Layout/Reflow) the render tree</li>\n<li>Paint the render tree</li>\n<li>Composite &#x26; show on screen (trigger load)</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48.701298701298704%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6UlEQVQoz11SXW+bMBTNz9/jtP2Bve1h+wd7qKpulaZoSqONkLZAIBAgJkAwBgM2nF3cJWp3pKvra1+f+7kAoSgqdLKZj+gahor9wjj2xh5HbXR1Lskvp9OEKyZt7GkajcxYiOIPTukG7QDMzyf2DG/1Hn0nrv8GevCCBJ4foeqAutiijO8M9fiaf5qwODx9Rex8Qcs9SBEhi27BCweKArZSgLOflD2HkCPqVlPwNfncIWcWWHiDlioqku9Qjf+SYcsDiCqA49pIEhcH6wNOeQo/bsCOLoKHd6jPIRJWYReVSPY/wJxPyMsC69U3hHGMrb3Ek/NoKlmYPpHUEjgwActawt3tUNQaspPom9BoP8oQkDgBw2azxHNwxDHvUPABrJCIGYfSVHLfddCKGkhN5ULidJakezI1Rq2Mk1KKhjOaAaUsxy7MkJ+FGYrWA90r4296ODsyxhBT6j1lMqNuFI5ZhZyPZlgsy9F1Pd6CAmn9L9CLGML5ac5Ak8hBwUtDrJ5s+MczCmbTNG+IrDX94ac1RHb/ZnP+x2JmvWAmtIJH2CROzLEPfiPa3WKf5JAKyLzPSO2PKBsJN/bhJgH9Ga4rYzK8HF4TzxBNj5IaXtPepaykjxM67kCWGzAu8OBZ2EYBOqrsQjjjL3B7+wLRL+N4AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="RenderTree"\n        title=""\n        src="/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-a408b.png"\n        srcset="/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-4eabf.png 148w,\n/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-5a375.png 295w,\n/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-a408b.png 590w,\n/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-9a0cc.png 885w,\n/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-aa987.png 1180w,\n/static/RenderTree-7efd7b826a452eb48175a6d2846a6b1f-c00d7.png 1540w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<p>原本我知道javascript要放在body之後或是寫上defer，這邊我才發現css也會block render(dom tree ok，但render tree不行)，但是為了first time render，所以css一定要放在head，但如果很大要進行特殊處理，這邊有另一個領域叫critical render path(因為main css屬於critical但\bjs不是，所以js可以慢load)。</p>\n<p>(這就非常有趣了，首先我不知道webpack包裝成的SPA是怎麼處理css的，另外就是css in jsx，loader，styled-Component各會造成怎樣的效果。之後研究的目標之一)</p>\n<p>composite是另一個很有趣的概念，首先要先了解render pipeline</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 10.91160220994475%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAm0lEQVQI1yXMTwvBYADAYV/SyUXtMAelltZIS2YbRpJ8ArZx22VZmLO/RydHpU2U9xP8LDs9t6cgzmXEWUJcK4iLxPckEczueMM3npOwGqe4gwTfeeFPHliRjhmrGNs69r7519yp2HGD1rpKQRxLeXSR8/hQJJjecJ0Pi16SZXm4HKXM+0+6oY4RK+hRjU6WtTcKVqxlYRMtlPkB1Q51jFyu9xUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="render_pipeline"\n        title=""\n        src="/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-a408b.png"\n        srcset="/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-4eabf.png 148w,\n/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-5a375.png 295w,\n/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-a408b.png 590w,\n/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-9a0cc.png 885w,\n/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-aa987.png 1180w,\n/static/render_pipeline-18578f2ae7d686d16ac1ea1bc606f83c-52bff.png 1448w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<p>在前端的渲染機制是這樣</p>\n<ul>\n<li>Javascript - trigger event</li>\n<li>Style - css selector</li>\n<li>Layout - calculate Layout</li>\n<li>Paint - fill pixel</li>\n<li>Composite - layer merge</li>\n</ul>\n<p>只介紹後面三個，跟頁面排版有關的東西會重新計算(width, height, left...)，此種行為觸發layout，跟繪制有關的觸發paint(color, border...)，跟layer有關的觸發composite，這是一個pipeline，但不是每一個都要經過，經過越少step的效能越好。而通常在一個沒有特別設置的頁面只會有一個layer(或是browser預設的layer?待求證)，但我們可以用tranform, translate 3d, will-change等去特別制造一個layer出來，最後composite的時候就會組合起來。所以就以純移動來講，使用tranform(\bStyle -> Composite)比left(\bStyle -> Layout -> Paint -> Composite)好，但實際使用一個頁面太多layer反而會降低效率，所以這又很吃應用場景。</p>\n<p>當你修改了某些css的style，會產生不同的cost。這邊有份<a href="https://www.slideshare.net/ApoorvSaxena/performance-beyond-page-load">簡報</a>，甚至你可以到<a href="https://csstriggers.com/">css trigger</a>查詢。</p>\n<p>(這邊也非常有趣，沒有實際優化過，不過用過一兩次will-change)</p>\n<p>PS. 其實大部份的概念來自<a href="http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html">這篇文章</a>，建議好好的看過文章，因為我的版本省略了很多介紹XD</p>\n<p>不過以上介紹的東西在現代的前端開發(SPA component...)還需要再釐清，很多都是3-4年前的推廣，像是css建議多用class而不要js控制，但jsx推崇css in js，另外在render部份使用vdom技術，加上使用webpack打包會不會已經不用關注某些問題值得再討論。</p>'}},{node:{fields:{slug:"/posts/new-year-wish/"},frontmatter:{title:"New Year Wish",date:"2018-02-20T18:06",tags:["nothing special"],release:!0},html:'<snippet>\n  新年到了，該給自己一個目標。\n</snippet>\n<p>原本是想要每個月寫一篇文章的，但是人都有惰性(\bx)。</p>\n<p>最近也在凖備轉職，從面試中也得知了許多自己的不足，雖然我知道這些問題可能都是拿來壓薪水的XD</p>\n<p>近期也幫了公司導入unit test，因為要做教育訓練，也花了時間做投影片。從那些似曾相似的題目，從為了教育訓練而認真研究，能了解到一件事情。會用跟知道原理完全是兩回事，很多時候就覺得就是這樣，但說不出個所以然，感覺就很javavscript，因為javascript就是一個這麼不嚴格的語言XD</p>\n<p>import module用慣了，套件用久了，react寫多了，這麼的declative，反而造成了只知道怎麼用，而不知道原因。目前短期先把javascript的重要概念先補完吧，同時想要解決兩件事情，第一，當有人問起時，可以完整的告知原因，而不是隨便呼嚨兩句，第二，也是我最一開始的理想，把那些常忘記的事情記錄，會常忘記就是因為每次都好像是這樣，大概是這樣。</p>\n<p>這次增加了一頁TODO LIST，不記錄一下，我連想寫什麼文章都要忘了。</p>\n<p>原本的夢想是成為一個優秀的前端工程師，開著chrome dev tools，為使用者的0.01秒而奮鬥，但是在台灣的工作中好像沒有看過，大部份都是開發速度導向，當然我開發上也還有進步的空間，不過今年看到印象最深刻的還是react 0.16頁面中的<a href="https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3">twitter PWA tunning</a>。</p>\n<p>當然新年還是要玩一些新東西，還在想要朝向isomorphic還是react-native邁進。react-native比起以前已經相對的成熟了，通常做app更講究使用者體驗，也是我更有興趣的一部份，但是fullstack在職涯上有絕對的優勢，自己寫過過往的full stack mvc，也改過公司後台的nodejs(refactor一些東西)，非常不認同前端是比較簡單的工作(薪水比較低)，只是注意的點是不一樣的，我更在意的是使用者會如何跟我的介面互動，這就好像設計不值錢這種謬論是一樣的。</p>\n<p>最後，今年應該是兩個都會碰一下，不過主要玩isomorphic &#x26; backend相關技術，這與我幾年後的目標比較match，當然最終可以react-native + isomorphic，等到時候再說吧，前端技術，每18個月重來一次呢。</p>'}},{node:{fields:{slug:"/posts/react-setstate-2/"},frontmatter:{title:"React的setState非同步行為2",date:"2018-01-16T10:33",tags:["react","javascript"],release:!0},html:'<snippet>\n都2018了，現在的感覺是redux統一天下。不過在清書籤頁，希望是近期內最後一次深入了解state。\n</snippet>\n<p>因為state的改變會觸發re-render，而re-render是一個expensive的行為，所以React做了batch，在一連串state改變中只會render一次。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    something<span class="token punctuation">:</span> thisThing<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      something<span class="token punctuation">:</span> thatThing<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>有時候就是會寫出這種code(尤其是在lifecyle componentWillReceiveProps之類的)</p>\n<p>但因為非同步所以會拿到不對的state值，所以大家很喜歡在這事上討論(打轉)。</p>\n<h4>常見解決辨法</h4>\n<ol>\n<li>\n<p>update完成後，callback，看<a href="https://ernieyang09.github.io/posts/react-setstate/">這裡</a></p>\n</li>\n<li>\n<p>校正lifecyle，在正確的lifecycle裡面呼叫setState。</p>\n</li>\n</ol>\n<p>3\b. 直接呼叫callback，介紹一下</p>\n<p>\bsetState是可以直接帶入一個callback的</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> currentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  reurn <span class="token punctuation">{</span> prevState<span class="token punctuation">,</span> something<span class="token punctuation">:</span> currentProps<span class="token punctuation">.</span>something <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>不過這一點都不能解決非同步state問題(還是會拿到舊的state)</p>\n<p>很認真的看了<a href="https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3">文章</a>以後，我是覺得結論有點難懂</p>\n<p>，結論是說，將function移出class會讓需要修改的值變得更明確(agree)。但是仍然有小機率會用到舊的state(這邊不太理解小機率\b...)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">incrementFooBy</span><span class="token punctuation">(</span>delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>previousState<span class="token punctuation">,</span> currentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>previousState<span class="token punctuation">,</span> foo<span class="token punctuation">:</span> previousState<span class="token punctuation">.</span>foo <span class="token operator">+</span> delta <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token function">incrementFooBy</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>不過最大的變數應該是react setstate行為以後可能會全部重新定義吧。</p>\n<p>截錄另一篇<a href="http://vwangluo.com/article/detail/42214">文章</a>兩段話</p>\n<blockquote>\n<p>Honestly, the current batching strategy comes with a set of problems right now. I\'m hesitant to expand on it\'s API before we\'re sure that we\'re going to keep the current model. I think of it as a temporary escape until we figure out something better.</p>\n</blockquote>\n<p>問題的根源在於現有的 batching 策略，實話實說，這個策略帶來了一系列問題。也許這個在後期後有調整，在 batching 策略是否調整之前，盲目的擴充 setState 接口只會是一個短視的行為。</p>\n<blockquote>\n<p>In my experience, whenever I\'m tempted to use setState callback, I can achieve the same by overriding componentDidUpdate (and/or componentDidMount).</p>\n</blockquote>\n<p>對此，Redux 原作者 Dan Abramov 也發表了自己的看法。他認為，以他的經驗來看，任何需要使用 setState 第二個參數 callback 的場景，都可以使用生命周期函數 componentDidUpdate (and/or componentDidMount) 來覆寫。</p>\n<p>如果確認專案是使用redux flux等，state只用來處理一小部份short-time data，那我是覺得真正遇到問題的時候再研究啦。</p>'}},{node:{fields:{slug:"/posts/circular-dependency-plugin/"},frontmatter:{title:"Circular Dependency Plugin",date:"2018-01-15T15:25",tags:["webpack"],release:!0},html:'<snippet>\n之前在build的時候遇到的問題，主要就是開發的時候完全沒問題，但是在build的時候會發生error，error的畫面我忘記截圖了。最後的結果是import的順序有重復。\n</snippet>\n<p>Circular Dependency最常見的錯誤</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// A.js</span>\n<span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">\'./B\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// B.js</span>\n<span class="token keyword">import</span> <span class="token constant">C</span> <span class="token keyword">from</span> <span class="token string">\'./C\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// C.js</span>\n<span class="token keyword">import</span> <span class="token constant">A</span> <span class="token keyword">from</span> <span class="token string">\'./A\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// A -> B -> C -> A</span></code></pre>\n      </div>\n<p>常常發現\bimport之後<a href="https://stackoverflow.com/questions/35240716/webpack-import-returns-undefined-depending-on-the-order-of-imports">拿到undefined</a></p>\n<p>專案中我將網頁的router抽出來整理(router.js，裡面有import所有router用的component)，然後對每個頁面包覆Page component。</p>\n<p>Like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> routers <span class="token keyword">from</span> <span class="token string">\'./routers\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token punctuation">{</span>\n  routers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>router <span class="token operator">=></span><span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Route\n      path<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">.</span>path<span class="token punctuation">}</span>\n      component<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">.</span>component<span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>Page<span class="token operator">></span>\n          <span class="token operator">...</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Page<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>其中，Page component裡面寫了一個Breadcrumb，Breadcrumb理所當然跟router有關，所以我就在Breadcrumb import routers，開發時完全沒問題，build的時候就爆炸啦XD</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">index <span class="token operator">-</span><span class="token operator">></span>  routers <span class="token operator">-</span><span class="token operator">></span> Page <span class="token operator">-</span><span class="token operator">></span> Breadcrumb <span class="token operator">-</span><span class="token operator">></span> routers</code></pre>\n      </div>\n<p>這種重覆import的例子並不是只要有任何的寫到就會出錯，是一種機率性的，就像有時候build起來的css跑掉了，可能是import了某個module(但不一定有用到css)，造成webpack build的時候順序不一樣了，這種build的時候才會出現問題的最麻煩了。</p>\n<p>不過了解了這個問題之後，google了一下，有一個webpack plugin - <a href="https://github.com/aackerman/circular-dependency-plugin">Circular Dependency Plugin</a></p>\n<p>能在runtime的時候，發現重覆import的問題，直接不能執行，並且show出哪些文件有問題，我個人是覺得蠻好用的。</p>\n<p>最後我的作法是把index跟Breadcrumb load的router切開來寫成兩個檔案，只是以mainatin上就要保持兩邊一致(加入新的\broute，兩邊都要設計一遍)，目前還沒想到比較好的做法，不過這要看專案設計囉。</p>'}},{node:{fields:{slug:"/posts/what-s-thunk/"},frontmatter:{title:"thunk是什麼",date:"2018-01-13T10:32",tags:["react","functional programming"],release:!0},html:'<snippet>\n會知道thunk這個單字也是因為react-thunk，一開始也是傻傻的用，後來才常常在functional的文章看到這個詞，整理整理希望能對functional programming更了解。\n</snippet>\n<p>根據wiki的定義</p>\n<blockquote>\n<p>In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until it is needed, or to insert operations at the beginning or end of the other subroutine. They have a variety of other applications to compiler code generation and in modular programming.</p>\n</blockquote>\n<p>我的翻譯是thunk是其他程序要計算之前的另一個處理程序，不過聽起來很繞口，也不知道實際用途。</p>\n<p>這就要探討電腦世界中的求值策略(Evaluation strategy)了-定義何時和以何種次序求值給函式的實際參數，什麼時候把它們代換入函式，和代換以何種形式發生。</p>\n<p>假設我們在\bjavascript中，做以下的事情</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>那function的參數到底是什麼時候被計算?</p>\n<p>if 傳值呼叫(call by value)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ==> add(3)</span></code></pre>\n      </div>\n<p>if 傳名呼叫 (Call by name)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ==> (x + 2) + 1</span></code></pre>\n      </div>\n<p>如果今天的參數不是一個簡單的(x + 2)，而是一個複雜的計算，且function裡面沒有用到(可能沒有走進if else \bcondition)，那其實先將值求好是沒有義意的，所以傳名呼叫更傾向於原封不動的將參數先放入，等有需要的時候再使用。</p>\n<p>不過javascript的實作是傳值呼叫，所以我們會依靠thunk來幫我們處理此問題。</p>\n<p>所以thunk有一個很重要的特性就是lazy evaluation，表達式不在它被綁定到變量之後就立即求值，而是在該值被取用的時候求值。</p>\n<p>所以redux-thunk表達的是delay(\blazy) dispatch的直接使用。</p>\n<p>在javscript裡面寫成high order function就是thunk的應用(待求証)。假設我有一個判斷session的\b\bapi，可能在很多地方使用，可以寫成以下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">\b<span class="token keyword">const</span> <span class="token function-variable function">checkSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'MY_API/session\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// any place</span>\n<span class="token keyword">const</span> isLoggin <span class="token operator">=</span> <span class="token function">checkSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>你不用直接的把值求出來，而是用到的時候再呼叫。</p>\n<p>如果是每次都一定會用到的值或是沒必要delay就不要用thunk了，因為thunk多跑了一層function反而會降低效率。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> action1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token constant">TEST</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//多跑一層</span>\n<span class="token keyword">const</span> <span class="token function-variable function">action2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> dispatch <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token constant">TEST</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>正規的lazy evaluation是call by need，這是進階的call by name</p>\n<blockquote>\n<p>Call by need is a memoized version of call by name.</p>\n</blockquote>\n<p>在function\bal的世界中，給定一個function，每次給相同的input必定得到相同的output，我們可以稱這為pure function。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">f(x) = g(x) + 1</code></pre>\n      </div>\n<p>若是g(x)為很heavy或是expensive的function，那我們可以做memized將算完的結果儲存。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">cache = {}\ncache[v] = y</code></pre>\n      </div>\n<p>另外一個lazy evaluation的特性是最小化求值，這下次講functional的performance issue再提囉。</p>'}},{node:{fields:{slug:"/posts/faster-component/"},frontmatter:{title:"Faster Functional Component",date:"2018-01-12T10:32",tags:["react"],release:!0},html:'<snippet>\nOMG，好久沒更新了網誌了，其實有很多該記錄的都忘了...趕快來補一點文章。\n</snippet>\n<p>今天在整理書籤裡面的網頁，點出了<a href="https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f">這篇</a>。</p>\n<p>其實我不知道大部份人的寫作風格是不是stateless component，因為有一些人蠻強調這點，全部state寫進redux，還可以輔以recompose之，但我是沒看過這種專案。</p>\n<p>stateless component乾淨但是沒有實作performance優化。我自己習慣就算只寫render還是寫class。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>所以作者提出了直接用function，functional component!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span><span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>原文說效能提升，我就不特別驗証了。</p>\n<p>如果未來的某天，stateless component實作優化了，還請留言通知我啊(等好久啦)。</p>'}}]}},pathContext:{offset:6,paginations:6,total:28}}}});
//# sourceMappingURL=path---1-af005acee3a75e09a586.js.map