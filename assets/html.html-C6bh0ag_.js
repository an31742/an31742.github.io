import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,a}from"./app-D6NHQvEw.js";const n={},t=a(`<h1 id="html-meta" tabindex="-1"><a class="header-anchor" href="#html-meta"><span>HTML meta</span></a></h1><h3 id="doctype" tabindex="-1"><a class="header-anchor" href="#doctype"><span>DOCTYPE</span></a></h3><ul><li>DTD：文档类型定义的语法规则的定义，用来定义XML和HTML的文件类型。</li><li>DOCTYPE：告诉浏览器我是什么文档类型的DTD规范，常见；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>HTML5 : &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>HTML 4.01 Strict/Transitional 严格模式、传统模式</span></span>
<span class="line"><span>严格不包括展示性和废弃的一些元素（font）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>meta标签共有两个属性，分别是http-equiv属性和name属性。</li></ul><h3 id="_1-name" tabindex="-1"><a class="header-anchor" href="#_1-name"><span>1.name</span></a></h3><ul><li>keywords(关键字):用于告诉搜索引擎，你网页的关键字。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;keywords&quot; content=&quot;Lxxyx,博客，文科生，前端&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>description(网站内容的描述):用于告诉搜索引擎，你网站的主要内容。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;description&quot; content=&quot;文科生，热爱前端与编程。目前大二，这是我的前端博客&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>viewport(移动端的窗口):视口，用于改变body默认值最小宽度（980px）,满足屏幕宽度。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>robots(定义搜索引擎爬虫的索引方式):robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。content的参数有all,none,index,noindex,follow,nofollow。默认是all。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;robots&quot; content=&quot;all&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.none : 搜索引擎将忽略此网页，等价于noindex，nofollow。</span></span>
<span class="line"><span>2.noindex : 搜索引擎不索引此网页。</span></span>
<span class="line"><span>3.nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。</span></span>
<span class="line"><span>4.all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。</span></span>
<span class="line"><span>5.index : 搜索引擎索引此网页。</span></span>
<span class="line"><span>6.follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>revisit-after:如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;revisit-after&quot; content=&quot;7 days&quot; &gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>renderer(双核浏览器渲染方式):renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。举例：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta name=&quot;renderer&quot; content=&quot;webkit&quot;&gt; //默认webkit内核</span></span>
<span class="line"><span>&lt;meta name=&quot;renderer&quot; content=&quot;ie-comp&quot;&gt; //默认IE兼容模式</span></span>
<span class="line"><span>&lt;meta name=&quot;renderer&quot; content=&quot;ie-stand&quot;&gt; //默认IE标准模式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-http-equiv" tabindex="-1"><a class="header-anchor" href="#_2-http-equiv"><span>2.http-equiv</span></a></h3><ul><li>content-Type:用于设定网页字符集，便于浏览器解析与渲染页面举例</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;content-Type&quot; content=&quot;text/html;charset=utf-8&quot;&gt;  //旧的HTML，不推荐</span></span>
<span class="line"><span>&lt;meta charset=&quot;utf-8&quot;&gt; //HTML5设定网页字符集的方式，推荐使用UTF-8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>X-UA-Compatible:用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;/&gt; //指定IE和Chrome使用最新版本渲染当前页面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>cache-control:</li><li>1.指导浏览器如何缓存某个响应以及缓存多长时间。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;cache-control&quot; content=&quot;no-cache&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。</span></span>
<span class="line"><span>2.no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）</span></span>
<span class="line"><span>3.public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果</span></span>
<span class="line"><span>4.private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）</span></span>
<span class="line"><span>5.maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Cache-Control&quot; content=&quot;no-siteapp&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>expires网页到期时间:用于设定网页的到期时间，过期后网页必须到服务器上重新传输</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;expires&quot; content=&quot;Sunday 26 October 2016 01:00 GMT&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>refresh(自动刷新并指向某页面):网页将在设定的时间内，自动刷新并调向设定的网址。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;refresh&quot; content=&quot;2；URL=http://www.lxxyx.win/&quot;&gt; //意思是2秒后跳转向我的博客</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Set-Cookie:如果网页过期。那么这个网页存在本地的cookies也会被自动删除。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Set-Cookie&quot; content=&quot;User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT&quot;&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><ul><li>sessionStorage 、localStorage 和 cookie 之间的区别</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1)、存储内容是否发送到服务器端：当设置了Cookie后，数据会发送到服务器端，造成一定的宽带浪费；web storage,会将数据保存到本地，不会造成宽带浪费；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2)、数据存储大小不同：Cookie数据不能超过4K,适用于会话标识；</span></span>
<span class="line"><span>web storage数据存储可以达到5M;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3)、数据存储的有效期限不同：cookie只在设置了Cookid过期时间之前一直有效，即使关闭窗口或者浏览器；</span></span>
<span class="line"><span>essionStorage,仅在关闭浏览器之前有效；</span></span>
<span class="line"><span>localStorage,数据存储永久有效；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(4)、作用域不同：cookie和localStorage是在同源同窗口中都是共享的；sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-dns预解析" tabindex="-1"><a class="header-anchor" href="#_3-dns预解析"><span>3.DNS预解析</span></a></h3><ul><li>DNS 作为互联网的基础协议，其解析的速度似乎很容易被网站优化人员忽视。现在大多数新浏览器已经针对DNS解析进行了优化，典型的一次DNS解析需要耗费 20-120 毫秒，减少DNS解析时间和次数是个很好的优化方式。DNS Prefetching 是让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入是串行的网络操作，所以这个方式能 减少用户的等待时间，提升用户体验 。</li><li>默认情况下浏览器会对页面中和当前域名（正在浏览网页的域名）不在同一个域的域名进行预获取，并且缓存结果，这就是隐式的 DNS Prefetch。如果想对页面中没有出现的域进行预获取，那么就要使用显示的 DNS Prefetch 了。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1. 用meta信息来告知浏览器, 当前页面要做DNS预解析:</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;x-dns-prefetch-control&quot; content=&quot;on&quot; /&gt;</span></span>
<span class="line"><span>2. 在页面header中使用link标签来强制对DNS预解析: </span></span>
<span class="line"><span>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;http://bdimg.share.baidu.com&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),l=[t];function d(r,o){return s(),i("div",null,l)}const p=e(n,[["render",d],["__file","html.html.vue"]]),u=JSON.parse('{"path":"/frontEndInterview/html/html.html","title":"html","lang":"zh-CN","frontmatter":{"title":"html","icon":"circle-info","description":"HTML meta DOCTYPE DTD：文档类型定义的语法规则的定义，用来定义XML和HTML的文件类型。 DOCTYPE：告诉浏览器我是什么文档类型的DTD规范，常见； meta标签共有两个属性，分别是http-equiv属性和name属性。 1.name keywords(关键字):用于告诉搜索引擎，你网页的关键字。 description(网...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/html/html.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"html"}],["meta",{"property":"og:description","content":"HTML meta DOCTYPE DTD：文档类型定义的语法规则的定义，用来定义XML和HTML的文件类型。 DOCTYPE：告诉浏览器我是什么文档类型的DTD规范，常见； meta标签共有两个属性，分别是http-equiv属性和name属性。 1.name keywords(关键字):用于告诉搜索引擎，你网页的关键字。 description(网..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"html\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"DOCTYPE","slug":"doctype","link":"#doctype","children":[]},{"level":3,"title":"1.name","slug":"_1-name","link":"#_1-name","children":[]},{"level":3,"title":"2.http-equiv","slug":"_2-http-equiv","link":"#_2-http-equiv","children":[]},{"level":3,"title":"3.DNS预解析","slug":"_3-dns预解析","link":"#_3-dns预解析","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":5.52,"words":1657},"filePathRelative":"frontEndInterview/html/html.md","localizedDate":"2024年6月23日","autoDesc":true}');export{p as comp,u as data};
