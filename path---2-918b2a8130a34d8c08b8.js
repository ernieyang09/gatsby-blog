webpackJsonp([0x8f0ce58d3892],{449:function(n,s){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/what-s-thunk/"},frontmatter:{title:"thunk是什麼",date:"2018-01-13T10:32",tags:["react","functional programming"],release:!0},html:'<snippet>\n會知道thunk這個單字也是因為react-thunk，一開始也是傻傻的用，後來才常常在functional的文章看到這個詞，整理整理希望能對functional programming更了解。\n</snippet>\n<p>根據wiki的定義</p>\n<blockquote>\n<p>In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until it is needed, or to insert operations at the beginning or end of the other subroutine. They have a variety of other applications to compiler code generation and in modular programming.</p>\n</blockquote>\n<p>我的翻譯是thunk是其他程序要計算之前的另一個處理程序，不過聽起來很繞口，也不知道實際用途。</p>\n<p>這就要探討電腦世界中的求值策略(Evaluation strategy)了-定義何時和以何種次序求值給函式的實際參數，什麼時候把它們代換入函式，和代換以何種形式發生。</p>\n<p>假設我們在\bjavascript中，做以下的事情</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>那function的參數到底是什麼時候被計算?</p>\n<p>if 傳值呼叫(call by value)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ==> add(3)</span></code></pre>\n      </div>\n<p>if 傳名呼叫 (Call by name)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ==> (x + 2) + 1</span></code></pre>\n      </div>\n<p>如果今天的參數不是一個簡單的(x + 2)，而是一個複雜的計算，且function裡面沒有用到(可能沒有走進if else \bcondition)，那其實先將值求好是沒有義意的，所以傳名呼叫更傾向於原封不動的將參數先放入，等有需要的時候再使用。</p>\n<p>不過javascript的實作是傳值呼叫，所以我們會依靠thunk來幫我們處理此問題。</p>\n<p>所以thunk有一個很重要的特性就是lazy evaluation，表達式不在它被綁定到變量之後就立即求值，而是在該值被取用的時候求值。</p>\n<p>所以redux-thunk表達的是delay(\blazy) dispatch的直接使用。</p>\n<p>在javscript裡面寫成high order function就是thunk的應用(待求証)。假設我有一個判斷session的\b\bapi，可能在很多地方使用，可以寫成以下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">\b<span class="token keyword">const</span> <span class="token function-variable function">checkSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'MY_API/session\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// any place</span>\n<span class="token keyword">const</span> isLoggin <span class="token operator">=</span> <span class="token function">checkSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>你不用直接的把值求出來，而是用到的時候再呼叫。</p>\n<p>如果是每次都一定會用到的值或是沒必要delay就不要用thunk了，因為thunk多跑了一層function反而會降低效率。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> action1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token constant">TEST</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//多跑一層</span>\n<span class="token keyword">const</span> <span class="token function-variable function">action2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> dispatch <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token constant">TEST</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>正規的lazy evaluation是call by need，這是進階的call by name</p>\n<blockquote>\n<p>Call by need is a memoized version of call by name.</p>\n</blockquote>\n<p>在function\bal的世界中，給定一個function，每次給相同的input必定得到相同的output，我們可以稱這為pure function。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">f(x) = g(x) + 1</code></pre>\n      </div>\n<p>若是g(x)為很heavy或是expensive的function，那我們可以做memized將算完的結果儲存。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">cache = {}\ncache[v] = y</code></pre>\n      </div>\n<p>另外一個lazy evaluation的特性是最小化求值，這下次講functional的performance issue再提囉。</p>'}},{node:{fields:{slug:"/posts/faster-component/"},frontmatter:{title:"Faster Functional Component",date:"2018-01-12T10:32",tags:["react"],release:!0},html:'<snippet>\nOMG，好久沒更新了網誌了，其實有很多該記錄的都忘了...趕快來補一點文章。\n</snippet>\n<p>今天在整理書籤裡面的網頁，點出了<a href="https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f">這篇</a>。</p>\n<p>其實我不知道大部份人的寫作風格是不是stateless component，因為有一些人蠻強調這點，全部state寫進redux，還可以輔以recompose之，但我是沒看過這種專案。</p>\n<p>stateless component乾淨但是沒有實作performance優化。我自己習慣就算只寫render還是寫class。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>所以作者提出了直接用function，functional component!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span><span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>原文說效能提升，我就不特別驗証了。</p>\n<p>如果未來的某天，stateless component實作優化了，還請留言通知我啊(等好久啦)。</p>'}},{node:{fields:{slug:"/posts/react-decision/"},frontmatter:{title:"React開發決策",date:"2017-10-17T23:34",tags:["react"],release:!0},html:'<p><snippet>來自: <a href="https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594">8 Key React Component Decisions</a></p>\n<p>順便整理一下目前開發的心得\n</snippet></p>\n<p>整篇文章蠻簡單的，不照翻，文章內有投票可以知道世界各地大家是怎麼開發react的。\n(統計結果一直在變動，因為是即時的)</p>\n<h4>Decision 1: Dev Environment</h4>\n<p>主要講的是你的boilerplate從哪來，我個人prefer custom webpack，原因很簡單，用包裝好的常常不容易customize，公司有使用nwb做為開發，但我踩了很多雷，create-react-app預設了計多套件，也不一定每一個都是match的，custom也能讓自己更容易多了解各套件要如何設定，雖然繁瑣，但是增加練習機會。我使用atom，也不喜歡vscode的auto eslint，有人強調我們是來寫code的，而不該花時間在這上面。我覺得很多東西需要自動化(ci)，但這些應該是工程師要會的。</p>\n<p>統計結果: 65% create-react-app，不知道業界是不是都這樣@ _ @</p>\n<h4>Decision 2: Types</h4>\n<p>check type的選擇，我不是微軟派的，不會typescript!!正用proptypes，但想練習flow，久聞flow，不過沒有survey與proptypes的比較。</p>\n<p>統計結果: 42% proptypes，預設樂勝，不過沒想到typescript也很高。</p>\n<h4>Decision 3: createClass vs ES Class</h4>\n<p>不說了，ES class，結案。</p>\n<h4>Decision 4: Class vs Functional</h4>\n<p>stateful vs stateless，我有點忘記了，以前吃過蠻多stateless component的雷，而且實際上react沒有優化stateless，所以我就算只有render function也會寫class。stateless是真的讓code蠻乾淨的，如果真的要寫stateless可以搭配recompose使用，也更像functional programing，也計之後有機會再試試吧。</p>\n<h4>Decision 5: State</h4>\n<p>控管state的方法，啥是show answers XDD，目前就是用redux囉，業界應該也最常用。</p>\n<p>統計結果: 48% redux</p>\n<h4>Decision 6: Binding</h4>\n<p>Class prop arrow function for the win!!雖然javascript的dynamic Binding是特色之一，但我是覺得寫成class(尤其是react)，給class以外使用是很怪的，寫class arrow function最方便了XD，作者又提了一次別在render裡面使用arrow function與bind(重要)。</p>\n<p>統計結果: 36% Class prop arrow function</p>\n<h4>Decision 7: Styling</h4>\n<p>個人認為最頭痛的比較...我就是SASS派的，真心覺得css module Z > B，oocss、smacss、bem真的很夠用，不過我自認css沒這麼強，沒辨法給太多好的建議。以趨勢而言，2016 -> 2017 確實css module比例下降了，但我跟作者一樣，也在觀望styled-components，又是一個坑啦。</p>\n<p>統計結果: 58% plain CSS</p>\n<h4>Decision 8: Reusable Logic</h4>\n<p>hoc最有名，但render props正夯，之前有寫一兩篇文章介紹。我認為應該render props會強點，之後會更多人使用。</p>\n<p>統計結果: 45% \bhoc</p>\n<p>感謝作者的歸納與統計，拿來做自我的檢視剛剛好，建議對react不熟的人也可以多多去思考上面這些issue，對整個react會有更不一樣的認知。</p>'}},{node:{fields:{slug:"/posts/render-props/"},frontmatter:{title:"render prop正夯",date:"2017-10-07T22:54",tags:["react"],release:!0},html:'<snippet>\n前陣了寫了跟HOC有關的文章，我從來沒用過mixin，雖然介紹了HOC，但自己使用的時候總覺得哪裡怪怪的，看了最近蠻紅的影片，終於恍然大悟，讓我們來介紹render props吧。\n</snippet>\n<p>一切要從Michael Jackson的<a href="https://www.youtube.com/watch?v=BcVAq3YFiuc">影片</a>開始，或是你也可以看他寫的<a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">文章</a>。(他是react-router的創始人之一)</p>\n<h3>mixin</h3>\n<p>本來mixin的出現是為了code的reusable，這邊不特別介紹mixin的寫法，在我開始寫的時候，就已經不流行了。</p>\n<h4>mixin的問題</h4>\n<ol>\n<li>\n<p>不支持es6 class<br/>\n沒錯，就是這點，所以我沒寫過，我也以前也只知道這點XDD。</p>\n</li>\n<li>\n<p>無方向性<br/>\n我是看文章翻譯的，簡言之，mixin使用了state，這樣會使被附加的component不知道state從哪裡來，尤其是一個component內用了不只一個mixin，code會變的implict。</p>\n</li>\n<li>\n<p>命名衝突<br/>\n如果有兩個mixin操作了相同名稱的state，這時候就會發生命名衝突，而且程式會直接掛掉，無法跑。</p>\n</li>\n</ol>\n<h3>HOC</h3>\n<p>採用了decorator的方式，跟\bmixin相比支援es6 class。想了解的可以去翻我之前寫的文章。</p>\n<h4>HOC的問題</h4>\n<ol>\n<li>\n<p>一樣無方向性。</p>\n</li>\n<li>\n<p>一樣命名衝突，但是可以跑，後面的會覆蓋前面的，react不會警告。比起mixin，這樣應該算更不好的缺點。</p>\n</li>\n</ol>\n<h3>render prop</h3>\n<p>在render裡面做處理，跟前兩種很不一樣的點，前面兩種被視為static composition，你只會做一次composition，在你create class的時候，而render prop為dynamic composition，每一次render的時候都會。我對這些是沒辨法自己想到見解，但我覺得這是蠻有道理的。</p>\n<p>雖然我寫render prop，但其實常見的是Function as children?不過原理是一模一樣的，請安心使用。</p>\n<p>試寫Function as children</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">chilren</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span><span class="token constant">A</span><span class="token operator">></span>\n      <span class="token punctuation">{</span> AState <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">...</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">A</span><span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>無方向性解決，你可以很簡單的從function的params得知是哪來的。</p>\n<p>命名衝突解決，\bfunction的params就像module or block一樣。隸屬於不同的params，永遠不會衝突。</p>\n<p>唯一的問題(我想的)，因為變成兩個class，多了一個&#x3C;div>Root，我個人很討厭react的一堆div(炸)。</p>\n<p>打完啦，我是看影片學的，影片裡面有更多有趣的說法，像是問題就像nail，而mixin就是hammer，然後敲敲敲，react-router其實不想寫HOC，但是因為社群需要\b...建議聽的懂英文而有時間的可以看看影片，很精采。</p>\n<p>我個人是覺得應該還是各有優缺點(雖然原文是render prop必勝)，HOC有recompose這個套件，render prop有react-powerplugin這個套件，目前在寫的時候目標是往render prop走，再看看會遇到什麼坑囉。</p>'}},{node:{fields:{slug:"/posts/aws_s3_plugin/"},frontmatter:{title:"Webpack S3 plugin",date:"2017-09-30T21:57",tags:["webpack"],release:!0},html:'<p>承前幾天寫的文章，我也忘記為什麼突然search到這個plugin，看了一下可以自動化上傳，於是就跳下去了...</p>\n<p>試了一陣子，了解了之後其實很簡單</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">$ npm i webpack<span class="token operator">-</span>s3<span class="token operator">-</span>plugin</code></pre>\n      </div>\n<p>webpack設定</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  config<span class="token punctuation">.</span>webpack<span class="token punctuation">.</span>extra<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">S3Plugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// s3Options are required</span>\n      s3Options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        accessKeyId<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_ACCESS_KEY</span><span class="token punctuation">,</span>\n        secretAccessKey<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_SECRET_ACCESS_KEY</span><span class="token punctuation">,</span>\n        region<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_REGION</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      s3UploadOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        Bucket<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_BUCKET</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      cloudfrontInvalidateOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Automatically invalidate your Cloudfront distribution cache every time you upload your code</span>\n        DistributionId<span class="token punctuation">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">CLOUDFRONT_DISTRIBUTION_ID</span><span class="token punctuation">,</span>\n        Items<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"/*"</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bucket就是你S3的bucket，region請<a href="http://docs.aws.amazon.com/general/latest/gr/rande.html">參照此</a></p>\n<p>先講cloudfront部份，cloudfront有cache機制，預設是86400秒(一天)，如果要提前就要讓其失效(Invalidation)。關於失效的可以參考<a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#InvalidationLimits">這裡</a>，看起來是算更新次數而不是更新檔案，1000次非常夠用。</p>\n<p>再來就是accessId跟Key，一開始找不到在哪，問了同事要從IAM設一個新user，然後將AmazonS3FullAccess與CloudFrontFullAccess加上，不想用Invalidation不需要後面的權限，這樣就完成囉!!</p>\n<p>其實我相信真的有在大量使用AWS的公司，應該都會有DevOps做自動化流程，這套件也是將s3 cli包進來做指令。因為之前是微軟體系的，然後後來對前端比較有興趣，這次稍微碰了一下，AWS很強大，在很多服務中很容易不知道該做什麼，真的S難QAQ</p>'}},{node:{fields:{slug:"/posts/aws-s3-cdn-53/"},frontmatter:{title:"AWS簡略記",date:"2017-09-28T21:49",tags:["AWS"],release:!0},html:'<p><snippet>在公司做的頁面要上啦，說明要用AWS，跳坑研究一下(嗚嗚 需要devOps)，總共用了S3、CloudFront、Route53</snippet></p>\n<h3>S3 (Simple Storage Service)</h3>\n<p>雲端儲存，create一個bucket放置檔案，操作蠻簡單的。</p>\n<p>因為是要用來架站用，所有東西都要能被外界使用，所以要設立權限。這邊的權限是bucket裡面的object，而非bucket本身。\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 72.6161369193154%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACJ0lEQVQ4y6WTW2sTQRTH55sqvkhR8SFWJIKKUCJtFCltqb74UPwCPlibIuhDbdAULy+SS3Mzm71nd2c3e9/9e3ZsJJa0VRz4cYY5Z/5z5swZ5gQJrGmELM8xP+IkgR+GgiCKaCVHnqfCJmkCz/cxDQJh52G7Bw28PvyM2sFHvK0fofbpK97QmqTq0CYWDGJM8/3DBvbJt/uhgW/NjjhkJjoPK61tYXn9BUqVddxa3cT97R2UqxswlDEQcDi2hf5whOXqNm5v7WCpsomXr/YQxTEc1wOfTv+AuWEK7sfwogyceHako1rXsVrX8PyLBTcGnIBiRFyCWWXyPF8IM6YpdML0Uxh+hrvvVdyoSbi+N0L5nUy+BCqpyjyCQjZO8xNBLBxMM0xougFVMyCrGrhlIYtC2pEKYrpanmX428Ga3QF008LE5rAcFzb34HpUbD8QtqhTEP7qgpSEswtgpUcb9IoapPEYY0VGq93GcbdLB9gIKbvgpHVOv+ZZsKv31jDWdPQHQxz3epBkGcORROKKED3dZxfBlh48hmpOqNgpeoMBOpTd92YLzXYHsqLCpVaYBc8yPVfw2sMnQjBKYnT7fTRbbZGdopKY54kfU/RcYS3boZq655aA3Vx5iqEk04M4MOmKpmWLTcVpnAQ5zYUlJtQBRVzhtzlfCLtSruCHrMCjqxWBIviMDTP/77gFa+zSnRUo1IvFiy76m/8Ku0yCMjV2ePLZ/5efJ31j33wQGyAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="s3-1"\n        title=""\n        src="/static/s3-1-970dab34abfe188cfe51567b5c6f38be-a408b.png"\n        srcset="/static/s3-1-970dab34abfe188cfe51567b5c6f38be-4eabf.png 148w,\n/static/s3-1-970dab34abfe188cfe51567b5c6f38be-5a375.png 295w,\n/static/s3-1-970dab34abfe188cfe51567b5c6f38be-a408b.png 590w,\n/static/s3-1-970dab34abfe188cfe51567b5c6f38be-24515.png 818w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<p>可以使用AWS的policy generator即可。\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 88.58195211786372%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACvklEQVQ4y4VU2W7TQBTNlyPxAYgHnqh4QG02LzPeIiEeEGrrCBVUCbUSraDQIIITO3HixClqs/hw73hpQkFEOrkznpkz525T0w0D+wcHaDRbqNcb0HQDQlqQUiorhFRjNRc0lzak5RSwYVmWgm3n45olTAi9DVNjaDAImmbANC0YpoRuSBoLBTUWNh12CU4Bu4JDqAlS2CZ10mjDMnWCBluK/FZ1u6TNVqHErpQppQVy1bmtua4Hh2AKVmOSKlZjQtd1ZR3Hgeu6hNJ6f9hd1BxpwjZJnd6E1OrKOrZURAq0yXEYnrLlwfwiD16nA8/zKtTYLUFKLHJTUjx1iqVWqDMNvYifLCDUXl4zaI+g/WU4mEcpzJnzWzp0m//uA/z35zg5PcfZxTdcXP2ocFnYq+/DAgN86Q2U/Xwd4M3bQ45h7gITcgKur3uYpwtMpjNMkzlG4xjj8QSjUYyIkC5+4V+/Y98vFXoFoYUgCJCmKSaTCaaEdD5HttkgyzLCBvSHDc23wd/X6xUOD0khB5czygWuUQ0OBgPcLG4QhhFmsxnmRLhcrpSCnHRXVVZ8YOKjo6Pc5VIhk0dRRIoy9Pt9cnVMZMuCKNsifTiuCLdd5loLwxCr1YpiNlKur9frncN/wz1hkZS8zlzVCcPB8EGw7w9v/kN4jJqkwm619qm2WgpB8JMWM9ze3ip3GXd3d8quKSer1bqab68zoe9zUmwqVtGi7tAVgqCPxWKBJJlSUhKVFE5OkiTo904xiYf0La2+sZ1Op0S6xMlJlzqFqt0yNGq5FkS7icuLTxjHM4SjJAdlO4pCVU4f/T30vp4hjGIVa04ax5oRxzG63W5eNuV7xm3ET1O7sYfGyyeEp9SKTXo48vZyO6/VOr+NvL/s6RJbrVfCpfZ7Ba3+DPvPH6H+4jH1LBFKr3pxeM/umV38BlH6wVQRQfHTAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="s3-2"\n        title=""\n        src="/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-a408b.png"\n        srcset="/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-4eabf.png 148w,\n/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-5a375.png 295w,\n/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-a408b.png 590w,\n/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-9a0cc.png 885w,\n/static/s3-2-822f2cc9c4f0bb8735dd56ff463f9b90-c03c5.png 1086w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<p>但要特別注意一點，在產生的Resource後面要加上/*，不然會發生<a href="https://stackoverflow.com/questions/44228422/s3-bucket-action-doesnt-apply-to-any-resources">Action does not apply to any resource(s) in statement\b</a>。</p>\n<p>如果只是要架一個簡單的網站，到這邊配上Static website hosting就很夠了，使用c\bdn的話這邊不需要hosting。</p>\n<h3>CloudFront</h3>\n<p>AWS提供的cdn服務</p>\n<p>選擇web服務，Origin Domain Name選擇剛剛建立的S3 bucket，小設定不提，因為我要用cdn架站，再用Route53指過來，\nDefault Root Object要寫entry，每個人應該都是index.html。Compress Objects Automatically可以加速，記得打開。另外一個重要的點，\n跑SPA網站，網站的route是由前端控制，\bhosting可以由Error Pages設定。\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.16880093131548%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABC0lEQVQoz4WQ6W6DMBCEef/3C384i4AoBGyKEUc4psy2jpLiqpZGXoP38854QRAgyzLEcYw8z0VpmiIIA/Bf27bg2rYN+77/Ky8MQyRJgiiKRDzHx+77Pq7X6wnE87auP/V6kjdNEx7zA/M8o2kaUdd1z3oYBozjKGK9rotA+77/hv+SRzvr8SKBWmuBmANY3+8yYV3XMMaIaH9ZFolAKQXXEiAheV5Ifv7lguQjg/7s8deiXfY4M+QF2uHrxvTHrtGaAcVNHVktJ0u2kbFYOPWc0B6YCe3RCi03R611KxBGYncL4ACvk71Z5gfCiqKQ3JTSKMsSVVXJQ64Med+CnMB9f7fGRpdeIS7gF+FQutjxxuL1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="cloudfront-1"\n        title=""\n        src="/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-a408b.png"\n        srcset="/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-4eabf.png 148w,\n/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-5a375.png 295w,\n/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-a408b.png 590w,\n/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-9a0cc.png 885w,\n/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-aa987.png 1180w,\n/static/cloudfront-1-c9d09870ac47be483a77c3a01239bd97-ecaf3.png 1718w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n如此一來，如果有人直接打上路由，會被導到index並且正常的轉到該顯示的頁面。</p>\n<h3>Route53</h3>\n<p>AWS提供的dns控管服務</p>\n<p>如果CloudFront要串到這裡，Alternate Domain Names (CNAMEs)要先打上Route53即將要給的domain，這邊好像沒什麼特別要注意的。CloudFront那邊可以設定ipv6，\bipv4就選A然後選alias貼上CloudFront的網址(\bxxxxx.cloudfront.net)，有ipv6就AAAA也設定一下。不確定是不是CloudFront要Delpoyed才能生效(\bCloudFront每次進入in progess都要1x-2x分鐘)</p>\n<p>PS.</p>\n<p>還有遇到ssl問題啦(如果CloudFront走https又改domain)，結果custom ssl一直反白，Certificate只能用\b<a href="https://stackoverflow.com/questions/28609262/unable-to-select-custom-ssl-certificate-stored-in-aws-iam">美東</a>的啦</p>\n<p>呼，總算弄完了!!</p>'}}]}},pathContext:{offset:12,paginations:6,total:30}}}});
//# sourceMappingURL=path---2-918b2a8130a34d8c08b8.js.map