webpackJsonp([28583035284499],{467:function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2018/04/0429--javascript-memory.md absPath of file >>> MarkdownRemark",html:'<snippet>\n  整個四月都在忙轉職的事情，而且跑去刷leetcode啦，結果要寫的東西越來越多啦，才發現我連event loop都還沒寫.\n</snippet>\n<p>這篇要介紹的是javascript的memory的機制，在認識event loop的時候知道的queue與stack，不過還缺一個heap，還可以順便提一下primitive與object。</p>\n<p>在js的語言中，只有兩種資料型態</p>\n<h4>primitive type - 基本型別</h4>\n<p>\b\n包涵以下六種</p>\n<ul>\n<li>string</li>\n<li>number</li>\n<li>boolean</li>\n<li>null</li>\n<li>undefined</li>\n<li>symbol(es6加入)</li>\n</ul>\n<h4>object - 物件 沒啥好說的</h4>\n<p>在string、number、boolean與symbol有所謂的wrapper object(封裝物件?網路上很多種翻譯)</p>\n<p>在使用這些primitive的時候，JS會臨時的create一個new [Type] object(ex: new Number(8))，然後進行操作完後就拋棄。請永遠不要用new的方式去初始化參數，原因是啥我忘了，大概在比較上有些不一樣的與速度比一般直接宣告慢。</p>\n<p>也不要在primitive加properties，以下有一個很簡單的例子</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">\'Hello World\'</span><span class="token punctuation">;</span>\ns<span class="token punctuation">.</span>len <span class="token operator">=</span> <span class="token string">\'len\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> t <span class="token operator">=</span> s<span class="token punctuation">.</span>len<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token comment">// undefined</span></code></pre>\n      </div>\n<p>因為每次操作的時候，都會產生一個新的object，然後就釋放掉，所以t的那行拿不到上一行s.len的值。</p>\n<p>primitive是call by value的</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>\nb <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 123</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 456</span></code></pre>\n      </div>\n<p>object是call by reference的</p>\n<p>array是normal object + "special function" 所以也是call by reference</p>\n<p>然後function也是一種特殊object...(callable object)\n(要記的清楚好麻煩XD)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>\n\nb<span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>test<span class="token punctuation">)</span> <span class="token comment">//false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>test<span class="token punctuation">)</span> <span class="token comment">//false</span></code></pre>\n      </div>\n<p>PS. 有人說更正確的為call by sharing</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> bar<span class="token punctuation">;</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> bar<span class="token punctuation">;</span>\nbar <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">\'key\'</span> <span class="token punctuation">:</span> <span class="token string">\'value\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo <span class="token punctuation">,</span> bar <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// if call by reference?</span></code></pre>\n      </div>\n<p>說的太深又是一篇文章，先略過吧。</p>\n<br/>\n<p>那進入我們的memory介紹</p>\n<p>因為javascript是dynamic language，變數可能隨時改變型別，所以記憶體是動態分配的。</p>\n<p>不管是primitive或是object皆儲存在heap記憶體中。</p>\n<p>而stack會保存heap裡面變數的ref</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 73.875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABkElEQVQ4y32T2WoDMQxF/f+/ljwmIStZCGQh+767PYJjpqXUIEYjS1fX8nXK3+v9fuf7/Z63222+Xq/x//l8wp7PZ/wbO5/PYa/XK8w9jJUoAIzNTqeTZ7NZ+LfbLT8ejzD2aQTgdDqNPPcul0t8yScvUUyAroPBIC+Xy2BFgqDkEMMHlIVPTJbiJBmMRqOw8Xic5/N5xA6HQzDDF5h/gQA3jgVDNi0CCCPRQuIwZRSwh02VtcA/ACnodrsxG2yxWJQEC4/HYz6dTn8CaXFkj4MBNplMytEEdCywIy6AZJwhftLp9/u53W7nVquVV6tVOZqyEVh5eGFVleAnrxv6HBUtOsNqdxl623y5xGazWWKFoTNBNrDc7XaFocYyV4aOq9okGOLArNFoRMfNZlM6OrfhcBg51Rt2hsaKsBE1YLVaLfd6vWDKJgXsAcgLQZfO8V/ZWITWYIc8eFJIRQas6msRSNAfsmGDm63X6yGd9XodQEqERIX++8gy9vjJ4cNmv9/HhWB2lSGNq09Q37jS+QL8qoxq3PmqzAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="stack_n_heap.png"\n        title=""\n        src="/static/stack_n_heap-90b51a4be5dbfff29bcca49d861a0e83-a408b.png"\n        srcset="/static/stack_n_heap-90b51a4be5dbfff29bcca49d861a0e83-4eabf.png 148w,\n/static/stack_n_heap-90b51a4be5dbfff29bcca49d861a0e83-5a375.png 295w,\n/static/stack_n_heap-90b51a4be5dbfff29bcca49d861a0e83-a408b.png 590w,\n/static/stack_n_heap-90b51a4be5dbfff29bcca49d861a0e83-4cbbd.png 800w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<p>primitive跟object的差別在於，primitive會在heap create一個新的，然後將新的ref傳出去，而object不會，只會將現有的ref傳出去。最後，js會自動分辨型別，決定拿到的ref是\nprimitive還是object。</p>\n<p>網路上也能找到這張圖</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 436px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.68807339449541%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABxElEQVQoz11S2XaiUBDk/7/FZ98SGaMzZjREjMriAmpYFBVwQ41ac6tznONJv9wLt6u6urq1PM9RFAW88Qi1eh2j0RjFocB+v8ftdgPj57ndbnE8nTCPQjw9V+D5Po7Hb4xWLpdRe3mBZTtYLBaIogir1UoRj5Bl2X+i6/Uq9+VyCb1SQa1aRb/fRxjFCIMAaZrKt+Y4Dna7HdbrNTabjVSn4tlsJmDG5XKR83A4oFQqYTAYCAEFEMf7+XxGr9eDVv2lw3GHQsYHqqL0yWQigHvwv+u6oEXdbhe2ban3RHL5j0VbrRY0PrIKWyUBVTHBV77M53MhS5JEEdhyZzcDRczcIPhEHMeSR/XNZhPa39dXWFZf+s/zDU7K7MvXlyRSNcnY4j1oSffjQw1xDNuykGZqqIqMPrOoZhiGgKfTKTzPE2WfymS2Z5od8fJxwixC3+M4QhCG0hnx7KrT6UBrNBoCdgcuHFXBsmzlqQvj3RDgnexxZUzTxFhtQZpmal2O4iNjOBx+K6QHVMhKbJEDoNLHtXlUSAvoNdURSz9ZqN1uQ9N1He+K1PcnknxfBe4hyX8Scih/ftfx9mYgUaQkYh5PTvkfILboBpMHtuEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="stack_n_heap2.png"\n        title=""\n        src="/static/stack_n_heap2-e43d40986d2db92e23897b29c69e1700-704f6.png"\n        srcset="/static/stack_n_heap2-e43d40986d2db92e23897b29c69e1700-e054b.png 148w,\n/static/stack_n_heap2-e43d40986d2db92e23897b29c69e1700-1e7c4.png 295w,\n/static/stack_n_heap2-e43d40986d2db92e23897b29c69e1700-704f6.png 436w"\n        sizes="(max-width: 436px) 100vw, 436px"\n      />\n    </span>\n  </span>\n  </p>\n<p>primitive是直接存在stack裡面的，也是網路上比較多的文章寫的，我認為就是看環境complier的實作方式。</p>\n<p>由於這張圖，有人說js只能call by value的，只是傳出去的時候，primitive的value是實際的值，而object的\bvalue的addr。</p>\n<p><a href="https://stackoverflow.com/questions/33125547/javascript-string-stored-on-stack">這篇</a>寫的很好</p>\n<blockquote>\n<p>In any case, for the JS programmer, worrying about stacks and heaps is somewhere between meaningless and distracting. It\'s more important to understand the behavior of various types of values.</p>\n</blockquote>\n<p>我認為primitive存在哪裡並不是這麼重要(但primitive與object的比較還有heap memory還是很重要)。然後我個人偏好第一種說法，因為stack的size應為fixed，才有使用stack的優點。</p>\n<h4>stack &#x26; heap 比較</h4>\n<table>\n<thead>\n<tr>\n<th>Stack</th>\n<th>Heap</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>在compile時期知道size</td>\n<td>在runtime分配size</td>\n</tr>\n<tr>\n<td>FILO(跟function exec順序有關)</td>\n<td>沒有特別順序</td>\n</tr>\n<tr>\n<td>靜態分配</td>\n<td>動態分配</td>\n</tr>\n</tbody>\n</table>\n<h3>memory leak issue</h3>\n<p>在以前沒有es6與module(common js require)之前，常常用clousre保存變數。那時候是dom的操作，加上瀏覽器引擎沒這麼好，電腦沒這麼強，對於memory要求比較care。現在的話使用eco-system寫好的framework，加上原生的module功能，很少人會特別說到memory的問題，不過對於SPA來說，使用者瀏覽的時間偏長(更正確應該說SPA所有操作都是在同一頁面的javascript)，如果這頁面是面對眾多的user還是需要注意。</p>\n<p>javascript是動態語言會自己分配memory，同樣的也有自己的GC機制。</p>\n<p>最簡單的GC演算法，會偵測變數是否有被其他人引用，若是沒有就會進行memory回收。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  obj2<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 2 objs create</span>\n\n<span class="token keyword">var</span> obj3 <span class="token operator">=</span> obj1<span class="token punctuation">;</span> <span class="token comment">// obj1 got 2 ref(itself &amp; obj3)</span>\n\n<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// obj1 got 1 ref(obj3)</span>\n\n<span class="token keyword">var</span> obj4 <span class="token operator">=</span> obj3<span class="token punctuation">.</span>obj2 <span class="token comment">// obj2 got 2 ref(obj3\'s property &amp; obj4)</span>\n\nobj3 <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// no one need obj1, obj1 got GCed</span>\n\nobj4 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// no one need obj2, obj2 got GCed</span></code></pre>\n      </div>\n<p>但這無法解決cycle ref</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  o1<span class="token punctuation">.</span>p <span class="token operator">=</span> o2<span class="token punctuation">;</span> <span class="token comment">// o1 references o2</span>\n  o2<span class="token punctuation">.</span>p <span class="token operator">=</span> o1<span class="token punctuation">;</span> <span class="token comment">// o2 references o1. This creates a cycle.</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>所以後來GC機制改用Mark-and-sweep演算法，簡言之從global當作root，往chilren一步一步走，將走過的變數設為active。最後將非active的變數釋放掉。</p>\n<p>所以不管有沒有cycle循環，只要root抵達不了就會回收。2012的時候，大部份的modern browser更新了此GC。</p>\n<p>雖說了這麼多，但還是有四個常見的JS memory leak</p>\n<h4>global variable</h4>\n<p>大家都是知道少用global var，且在global = root情況下是不會回收的，比較常見的是</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    bar <span class="token operator">=</span> <span class="token string">"some text"</span><span class="token punctuation">;</span> <span class="token comment">// oops</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>另外適時的使用global var是好的，不過當不用的時候可以ressign it或是 delete property。</p>\n<h4>timer &#x26; callback</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">\'123\'</span><span class="token punctuation">;</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  test<span class="token punctuation">.</span>innerHtml <span class="token operator">=</span> data<span class="token punctuation">;</span>\n  <span class="token comment">// might be better</span>\n  <span class="token comment">// document.getElementById(\'test\').innerHtml = data;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>\n\n<span class="token comment">// data never GCed</span></code></pre>\n      </div>\n<p>由於dom有可能從頁面上消失掉，所以包在function裡面是很多餘的</p>\n<p>另外data被Interval event使用著，所以never GCed</p>\n<p>上面的better寫法除了說減少多餘以外，另外因為不用宣告var，memory上略好一點</p>\n<p>不過code的<a href="https://stackoverflow.com/questions/8766220/javascript-declaring-variables-or-not">可讀性</a>更重要，我覺得最重要的應該是data不能被GC</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> button<span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbutton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//remove yourself if not need</span>\nbutton<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>但聽說現在modern的瀏覽器都會幫忙檢查observer相關的問題了</p>\n<p>以前都需要自己寫removeListener before remove dom現在就不用囉(但寫了才是有quality的code，而且還是會有非modern browser的使用者)</p>\n<h4>額外的dom參考</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> elements <span class="token operator">=</span> <span class="token punctuation">{</span>\n    button<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    image<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'image\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'text\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    image<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">\'http://some.url/image\'</span><span class="token punctuation">;</span>\n    button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Much more logic</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">removeButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The button is a direct child of body.</span>\n    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// At this point, we still have a reference to #button in the global</span>\n    <span class="token comment">// elements dictionary. In other words, the button element is still in</span>\n    <span class="token comment">// memory and cannot be collected by the GC.</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>有時候因為方便，會在js裡面寫hash map，對於dom如同有兩個ref(one from dom tree, one from js)。</p>\n<p>如果你只從dom tree刪除，因為還有js的ref，所以memory無法GC</p>\n<p>特別的是如果你對一個td做記憶，然後移掉整個table，最後整個table無法被GC(因為必須同時記得他的parent)</p>\n<p>已經很少對於dom進行直接操作，不過想想以前好像寫過許多這種ng行為XD</p>\n<h4>Closure</h4>\n<p>實務上可能每天都在用closure，也有一些很tricky的行為</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> theThing <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> <span class="token function-variable function">replaceThing</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> originalThing <span class="token operator">=</span> theThing<span class="token punctuation">;</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">unused</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>originalThing<span class="token punctuation">)</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  theThing <span class="token operator">=</span> <span class="token punctuation">{</span>\n    longStr<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'*\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    someMethod<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>someMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">setInterval</span><span class="token punctuation">(</span>replaceThing<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>網路的文章我看了很久，我不確定我的說法是不是對的</p>\n<p>因為theThing在replaceThing裡面被引用了，而someMethod是一個closure，其中的一個free variable是unused，但因為unused也是closures，然後同樣parent scope中的closures會互相shared scope。在這個unused裡面又用到了originalThing(引用了上個循環的thingThing)，所以造成這個"上一次"的theThing也需要被記憶不能被GC。</p>\n<p>我將unused移除，並且用chrome dev tool查看，確實有unused會memory leak，沒有的就不會。</p>\n<p>其實任何的function在建立時皆為一個closure，並不是function retrun function才是closure。有些定義是需要有free variables才算closure。</p>\n<p>但由上面的整理也得知，就算closure裡面有許多的var，只要沒有被引用，就不會有memory的問題啦(不過無用的var eslint應該會警告)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// y沒用到會自己被回收，x就會一直保存</span>\n\b<span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token operator">=></span> z <span class="token operator">=></span> x <span class="token operator">+</span> z<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>實際喔，我覺得還是memory detect in action吧 XD，畢竟js這麼神奇。重點是當你從工具中察覺到了memory leak的時候，是否能歸納出是哪種問題。</p>\n<br>\n<p>memory可以參考<a href="https://segmentfault.com/a/1190000007536949">此</a></p>\n<p>memory leak可以參考<a href="https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/">此</a></p>',fields:{slug:"/posts/javascript-memory/"},frontmatter:{title:"Javascript memory in use",date:"2018-04-29T16:18",tags:["mechanic"]}}},pathContext:{slug:"/posts/javascript-memory/"}}}});
//# sourceMappingURL=path---posts-javascript-memory-e570f6240757f0b4c202.js.map