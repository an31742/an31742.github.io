import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as n}from"./app-D6NHQvEw.js";const l={},e=n(`<h3 id="规则类-说明类文件-前端自定义下载" tabindex="-1"><a class="header-anchor" href="#规则类-说明类文件-前端自定义下载"><span>规则类，说明类文件，前端自定义下载</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//使用a标签作为链接下载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;item-link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> :href=&quot;\`\${path}检查明细表.xlsx\`&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> download</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;检查明细表&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; 检查明细表&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//使用基础路由</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">   //使用基础路由</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">process</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">BASE_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue动态设置class样式" tabindex="-1"><a class="header-anchor" href="#vue动态设置class样式"><span>vue动态设置class样式</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//设置class对象可以根据多个状态展示不同的样式。对象的键就是样式的名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">class</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{unselect:item.disable===1,select:item.disable===2,ban:item.disable===3}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//设置class数组形式是三元表达式这样适合两种样式得切换 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">class</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;[item.disable? &#39;unselect&#39;:&#39;select&#39;]&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中英文自动换行" tabindex="-1"><a class="header-anchor" href="#中英文自动换行"><span>中英文自动换行</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  word-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">break-word</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">normal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  word-break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">break-all</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">不换行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">自动换行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  word-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">break-word</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  word-break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">normal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">强制换行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  word-break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">break-all</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不固定宽高垂直居中" tabindex="-1"><a class="header-anchor" href="#不固定宽高垂直居中"><span>不固定宽高垂直居中</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//1</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">伪元素 和inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">vertical-aligin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.box-wrap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#56B6C2;">:before</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:‘’;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  margin-right</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">-0.25</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  vertical-align</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:maiddle;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">// 2</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">使用flex使div垂直居中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.box-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">#666</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素占满整个屏幕" tabindex="-1"><a class="header-anchor" href="#元素占满整个屏幕"><span>元素占满整个屏幕</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.dom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">vh</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="css实现文本两端对齐" tabindex="-1"><a class="header-anchor" href="#css实现文本两端对齐"><span>css实现文本两端对齐</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">    text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">justify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">    text-justify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">distribute-all-lines</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  //</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">ie</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">6</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">8</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">    text-align-last</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">justify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;  //一个块或行的最后一行对齐方式</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    -moz-text-align-last</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">justify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    -webkit-text-align-last</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">justify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决1像素边框变粗的问题" tabindex="-1"><a class="header-anchor" href="#解决1像素边框变粗的问题"><span>解决1像素边框变粗的问题</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.dom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">#dbdbdb</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  transform</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">scaleY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片自适应" tabindex="-1"><a class="header-anchor" href="#图片自适应"><span>图片自适应</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">前提条件父容器要有宽高</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  object-fit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cover</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">背景图片</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">:cover</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">contain</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),h=[e];function t(k,p){return a(),i("div",null,h)}const B=s(l,[["render",t],["__file","一些小技巧应用.html.vue"]]),c=JSON.parse('{"path":"/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/%E4%B8%80%E4%BA%9B%E5%B0%8F%E6%8A%80%E5%B7%A7%E5%BA%94%E7%94%A8.html","title":"一些小技巧应用","lang":"zh-CN","frontmatter":{"title":"一些小技巧应用","icon":"circle-info","description":"规则类，说明类文件，前端自定义下载 vue动态设置class样式 中英文自动换行 不固定宽高垂直居中 元素占满整个屏幕 css实现文本两端对齐 解决1像素边框变粗的问题 图片自适应","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/%E4%B8%80%E4%BA%9B%E5%B0%8F%E6%8A%80%E5%B7%A7%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"一些小技巧应用"}],["meta",{"property":"og:description","content":"规则类，说明类文件，前端自定义下载 vue动态设置class样式 中英文自动换行 不固定宽高垂直居中 元素占满整个屏幕 css实现文本两端对齐 解决1像素边框变粗的问题 图片自适应"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T10:33:31.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-27T10:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一些小技巧应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T10:33:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"规则类，说明类文件，前端自定义下载","slug":"规则类-说明类文件-前端自定义下载","link":"#规则类-说明类文件-前端自定义下载","children":[]},{"level":3,"title":"vue动态设置class样式","slug":"vue动态设置class样式","link":"#vue动态设置class样式","children":[]},{"level":3,"title":"中英文自动换行","slug":"中英文自动换行","link":"#中英文自动换行","children":[]},{"level":3,"title":"不固定宽高垂直居中","slug":"不固定宽高垂直居中","link":"#不固定宽高垂直居中","children":[]},{"level":3,"title":"元素占满整个屏幕","slug":"元素占满整个屏幕","link":"#元素占满整个屏幕","children":[]},{"level":3,"title":"css实现文本两端对齐","slug":"css实现文本两端对齐","link":"#css实现文本两端对齐","children":[]},{"level":3,"title":"解决1像素边框变粗的问题","slug":"解决1像素边框变粗的问题","link":"#解决1像素边框变粗的问题","children":[]},{"level":3,"title":"图片自适应","slug":"图片自适应","link":"#图片自适应","children":[]}],"git":{"createdTime":1719484411000,"updatedTime":1719484411000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"businessProblem/常用方法使用/一些小技巧应用.md","localizedDate":"2024年6月27日","autoDesc":true}');export{B as comp,c as data};
