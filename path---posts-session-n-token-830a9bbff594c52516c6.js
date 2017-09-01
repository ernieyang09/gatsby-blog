webpackJsonp([0x53f63a4d7860980],{"./node_modules/json-loader/index.js!./.cache/json/posts-session-n-token.json":function(e,s){e.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/08/0812--session_n_token.md absPath of file >>> MarkdownRemark",html:'<p>進入了SPA的世界中，這算是目前前端的趨勢。以前都沒有寫過SPA，SPA的好處在網路上寫了很多，我個人認知的就是更好的UX，使用起來更像native，\n另外就是很好的前後端分離，讓後端更著重在model的部分。不過介紹SPA不是這篇文章的重點，就不多贅述。</p>\n<p>原本是想寫Oauth在SPA的一些處理心得，但是爬一爬文章就寫了一下Session與Token-based認證的比較。</p>\n<p>先介紹State<br/>\n中文直譯就是狀態，在react裡面也有用到，代表的就是UI的狀態，譬如說isOpenNav...，而這邊所提的是HTTP的狀態，HTTP屬於stateless的協定，\n簡單分類的話就是伺服器會不會記得你所做的事情，假設你在網站中修改了個人檔案的姓名發送request，然後接著修改個人檔案的大頭貼另外又發送一個request，\n兩個request之間沒有任何關係，server也不會記得每個request你做了什麼，這樣就屬於一種stateless。</p>\n<p>Session<br/>\n具有狀態性(Stateful)，由於Session是你與server的連線紀錄，儲存在server端。</p>\n<h3>Session儲存的缺點</h3>\n<ul>\n<li>\n<p>scalable較麻煩<br/>\n試想若是後端有做loadbalance的機制，第一次進入登入頁面被導入server1，登入後Session儲存在server1，結果進入頁面後按了某個功能被導到server2，\n但此server沒有你的Session就可能重新回到登入頁面，當然有一些其他的解決方案(Redis等...)</p>\n</li>\n<li>\n<p>CORS問題<br/>\n若是使用Session則通常你的client與server要設在同一個domain或sub domain(因為你可能要在cookie裡面傳送東西，cross domain不好處理)，\n例如app.example.com的網頁，發送請求給api.example.com的server，但若是使用token-based，則可以很好的解決這個問題(因為user data會隨著http header而非cookie)</p>\n</li>\n</ul>\n<h3>Token-based的好處</h3>\n<ul>\n<li>\n<p>低耦合性 &#x26; Stateless<br/>\n不需要將你的認證綁住server端，只要有一組token，每個server，每個api都可以使用。並且屬於無狀態性，要做scalable很容易，大家都使用統一的token。</p>\n</li>\n<li>\n<p>Mobile friendly &#x26; no CSRF<br/>\n在沒有cookie的地方非常好使用(如native app)，並且不使用cookie，不會有CSRF的問題發生。</p>\n</li>\n<li>\n<p>效能up<br/>\n簡單來說，token裡面可以夾帶user訊息(新式token如JWT)，這樣可以省去查詢DB的時間。另外Session通常記在memory中，對於大型網站的伺服器也是種負擔。</p>\n</li>\n</ul>\n<p>結論:與SPA一樣，現在的Token-based也是一個更主流的開發方式，可以更好的分離程式之間的關聯性，不過前端就要額外做一些事情來處理token囉，結果前端更忙了(無誤)。</p>\n<p><a href="http://www.jianshu.com/p/9be79614bcd4">參考網站1</a>   \n<a href="https://yami.io/jwt/#">參考網站2</a>   \n<a href="https://auth0.com/blog/cookies-vs-tokens-definitive-guide/">參考網站3</a></p>',fields:{slug:"/posts/session_n_token/"},frontmatter:{title:"SPA, Session vs Token-based認證",date:"2017-08-12T19:07",tags:["Session","REST","Authorization"]}}},pathContext:{slug:"/posts/session_n_token/"}}}});
//# sourceMappingURL=path---posts-session-n-token-830a9bbff594c52516c6.js.map