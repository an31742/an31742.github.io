import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,a}from"./app-D6NHQvEw.js";const i={},l=a(`<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>vue</span></a></h2><h3 id="less-css的预编译" tabindex="-1"><a class="header-anchor" href="#less-css的预编译"><span>less(css的预编译)</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>style-loader!css-loader!less-loader</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot;&gt;</span></span>
<span class="line"><span>1、可以用变量，例如（$变量名称=值）；</span></span>
<span class="line"><span>2、节点式书写</span></span>
<span class="line"><span>3、函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue特性" tabindex="-1"><a class="header-anchor" href="#vue特性"><span>vue特性</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.轻量级的框架</span></span>
<span class="line"><span>2.双向数据绑定</span></span>
<span class="line"><span>3.指令</span></span>
<span class="line"><span>4.插件化</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex"><span>vuex</span></a></h3><ul><li>vue框架中状态管理机</li><li>场景有：管理全局的数据状态和传递数据，传递方法；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【1】</span></span>
<span class="line"><span>Vue.use(Vuex);</span></span>
<span class="line"><span>export default new Vuex.Store({</span></span>
<span class="line"><span>  // getters: getters,</span></span>
<span class="line"><span>  state: state,</span></span>
<span class="line"><span>  // actions: actions,</span></span>
<span class="line"><span>  mutations: mutations,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【2】在main.js引入store，注入</span></span>
<span class="line"><span>import store from &#39;./store.js&#39;;</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  el: &#39;#app&#39;,</span></span>
<span class="line"><span>  // 这样的模式可以先测试为单个模块</span></span>
<span class="line"><span>  render: h =&gt; h(App),</span></span>
<span class="line"><span>  // router: router,</span></span>
<span class="line"><span>  // =====================vuex</span></span>
<span class="line"><span>  store:store,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【3】使用</span></span>
<span class="line"><span>computed:{</span></span>
<span class="line"><span>  $x_add_btn_name: function() {</span></span>
<span class="line"><span>      return this.$store.state.add_btn_name;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>me.$store.commit(&#39;user_suc&#39;, { _id: data._id });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>它集中于MVC模式中的Model层，规定所有的数据操作必须通过 action – mutation – statechange 的流程来进行，再结合Vue的数据视图双向绑定特性来实现页面的展示更新;</li></ul><h3 id="vue生命周期" tabindex="-1"><a class="header-anchor" href="#vue生命周期"><span>vue生命周期</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【创建前/后】</span></span>
<span class="line"><span>1.beforeCreated：vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。</span></span>
<span class="line"><span>2.在created阶段，vue实例的数据对象data有了，$el还没有进行挂载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【载入前/后】</span></span>
<span class="line"><span>1.beforeMount：vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。</span></span>
<span class="line"><span>2.mounted：vue实例挂载完成，data.message成功渲染。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【更新前/后】当data变化时，会触发beforeUpdate和updated方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【销毁前/后】1.在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令directive" tabindex="-1"><a class="header-anchor" href="#指令directive"><span>指令directive</span></a></h3><ul><li>全局指令</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Vue.directive(&#39;focus&#39;, {</span></span>
<span class="line"><span>  // 当被绑定的元素插入到 DOM 中时……</span></span>
<span class="line"><span>  inserted: function (el) {</span></span>
<span class="line"><span>    // 聚焦元素</span></span>
<span class="line"><span>    el.focus()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>局部指令</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>directives: {</span></span>
<span class="line"><span>  focus: {</span></span>
<span class="line"><span>    // 指令的定义</span></span>
<span class="line"><span>    inserted: function (el) {</span></span>
<span class="line"><span>      el.focus()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>四个钩子函数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。</span></span>
<span class="line"><span>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。</span></span>
<span class="line"><span>update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新</span></span>
<span class="line"><span>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。</span></span>
<span class="line"><span>unbind：只调用一次，指令与元素解绑时调用。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-cli自定义的组件" tabindex="-1"><a class="header-anchor" href="#vue-cli自定义的组件"><span>vue.cli自定义的组件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.在components目录新建你的组件文件</span></span>
<span class="line"><span>（smithButton.vue），export default {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.在需要用的页面（组件）中导入：</span></span>
<span class="line"><span>import smithButton from ‘../components/smithButton.vue’</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.注入到vue的子组件的components属性上面,</span></span>
<span class="line"><span>components:{smithButton}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.在template视图view中使用，驼峰命名，使用为-</span></span>
<span class="line"><span>&lt;smith-button&gt;  &lt;/smith-button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混入mixins" tabindex="-1"><a class="header-anchor" href="#混入mixins"><span>混入mixins</span></a></h3><ul><li>就是把常用的数据和方法提前为公共，混入组件内部进行使用；我自己感觉，其实直接写个全局对象就行了。</li><li>混入选项为数据data,混入选项为对象时，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。发生冲突时取组件内的属性</li><li>混入钩子函数，混入对象的钩子函数在组件的钩子函数之前调用;</li><li>也可以全局注册混入对象。注意使用！ 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。使用恰当时，可以为自定义对象注入处理逻辑。</li></ul><h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick"><span>$nextTick</span></a></h3><ul><li>用法：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</li><li>异步说明：Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。</li><li>异步执行的运行机制：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。</span></span>
<span class="line"><span>（2）主线程之外，还存在一个&quot;任务队列&quot;（task queue）。只要异步任务有了运行结果，就在&quot;任务队列&quot;之中放置一个事件。</span></span>
<span class="line"><span>（3）一旦&quot;执行栈&quot;中的所有同步任务执行完毕，系统就会读取&quot;任务队列&quot;，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。</span></span>
<span class="line"><span>（4）主线程不断重复上面的第三步。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>事件循环：简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。</li><li>created、mounted：需要注意的是，在 created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法。注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>showsou(){</span></span>
<span class="line"><span>  this.showit = true</span></span>
<span class="line"><span>  this.$nextTick(function () {</span></span>
<span class="line"><span>    // DOM 更新了</span></span>
<span class="line"><span>    document.getElementById(&quot;keywords&quot;).focus()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vnode:<a href="https://segmentfault.com/a/1190000013314893" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000013314893</a></li><li>可能你还没有注意到，Vue异步执行DOM更新。只要观察到数据变化，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作上非常重要。然后，在下一个的事件循环“tick”中，Vue刷新队列并执行实际 (已去重的) 工作。</li><li>简而言之，就是在一个事件循环中发生的所有数据改变都会在下一个事件循环的Tick中来触发视图更新，这也是一个“批处理”的过程。（注意下一个事件循环的Tick有可能是在当前的Tick微任务执行阶段执行，也可能是在下一个Tick执行，主要取决于nextTick函数到底是使用Promise/MutationObserver还是setTimeout）</li><li>nextTick函数其实做了两件事情，一是生成一个timerFunc，把回调作为microTask或macroTask参与到事件循环中来。二是把回调函数放入一个callbacks队列，等待适当的时机执行。（这个时机和timerFunc不同的实现有关）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>if (typeof Promise !== &#39;undefined&#39; &amp;&amp; isNative(Promise)) {</span></span>
<span class="line"><span>    /*使用Promise*/</span></span>
<span class="line"><span>    var p = Promise.resolve()</span></span>
<span class="line"><span>    var logError = err =&gt; { console.error(err) }</span></span>
<span class="line"><span>    timerFunc = () =&gt; {</span></span>
<span class="line"><span>        p.then(nextTickHandler).catch(logError)</span></span>
<span class="line"><span>        // in problematic UIWebViews, Promise.then doesn&#39;t completely break, but</span></span>
<span class="line"><span>        // it can get stuck in a weird state where callbacks are pushed into the</span></span>
<span class="line"><span>        // microTask queue but the queue isn&#39;t being flushed, until the browser</span></span>
<span class="line"><span>        // needs to do some other work, e.g. handle a timer. Therefore we can</span></span>
<span class="line"><span>        // &quot;force&quot; the microTask queue to be flushed by adding an empty timer.</span></span>
<span class="line"><span>        if (isIOS) setTimeout(noop)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} else if (typeof MutationObserver !== &#39;undefined&#39; &amp;&amp; (</span></span>
<span class="line"><span>    isNative(MutationObserver) ||</span></span>
<span class="line"><span>    // PhantomJS and iOS 7.x</span></span>
<span class="line"><span>    MutationObserver.toString() === &#39;[object MutationObserverConstructor]&#39;</span></span>
<span class="line"><span>    )) {</span></span>
<span class="line"><span>    // use MutationObserver where native Promise is not available,</span></span>
<span class="line"><span>    // e.g. PhantomJS IE11, iOS7, Android 4.4</span></span>
<span class="line"><span>    /*新建一个textNode的DOM对象，用MutationObserver绑定该DOM并指定回调函数，在DOM变化的时候则会触发回调,该回调会进入主线程（比任务队列优先执行），即textNode.data = String(counter)时便会触发回调*/</span></span>
<span class="line"><span>    var counter = 1</span></span>
<span class="line"><span>    var observer = new MutationObserver(nextTickHandler)</span></span>
<span class="line"><span>    var textNode = document.createTextNode(String(counter))</span></span>
<span class="line"><span>    observer.observe(textNode, {</span></span>
<span class="line"><span>        characterData: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    timerFunc = () =&gt; {</span></span>
<span class="line"><span>        counter = (counter + 1) % 2</span></span>
<span class="line"><span>        textNode.data = String(counter)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    // fallback to setTimeout</span></span>
<span class="line"><span>    /* istanbul ignore next */</span></span>
<span class="line"><span>    /*使用setTimeout将回调推入任务队列尾部*/</span></span>
<span class="line"><span>    timerFunc = () =&gt; {</span></span>
<span class="line"><span>        setTimeout(nextTickHandler, 0)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>值得注意的是，它会按照Promise、MutationObserver、setTimeout优先级去调用传入的回调函数。前两者会生成一个microTask任务，而后者会生成一个macroTask。（微任务和宏任务）</li><li>之所以会设置这样的优先级，主要是考虑到浏览器之间的兼容性（IE没有内置Promise）。另外，设置Promise最优先是因为Promise.resolve().then回调函数属于一个微任务，浏览器在一个Tick中执行完macroTask后会清空当前Tick所有的microTask再进行UI渲染，把DOM更新的操作放在Tick执行microTask的阶段来完成，相比使用setTimeout生成的一个macroTask会少一次UI的渲染。</li></ul><h3 id="vue-spa的实现原理" tabindex="-1"><a class="header-anchor" href="#vue-spa的实现原理"><span>vue spa的实现原理</span></a></h3><ul><li>随着 ajax 的流行，异步数据请求交互运行在不刷新浏览器的情况下进行。而异步交互体验的更高级版本就是 SPA —— 单页应用。</li><li>【spa】单页应用不仅仅是在页面交互是无刷新的，连页面跳转都是无刷新的，为了实现单页应用，所以就有了前端路由。</li><li>类似于服务端路由，前端路由实现起来其实也很简单，就是匹配不同的 url 路径，进行解析，然后动态的渲染出区域 html 内容。</li><li>但是这样存在一个问题，就是 url 每次变化的时候，都会造成页面的刷新。那解决问题的思路便是在改变 url 的情况下，保证页面的不刷新。</li></ul><h3 id="vue-router实现原理" tabindex="-1"><a class="header-anchor" href="#vue-router实现原理"><span>vue-router实现原理</span></a></h3><h5 id="_1-hash模式" tabindex="-1"><a class="header-anchor" href="#_1-hash模式"><span>1.hash模式</span></a></h5><ul><li>在 2014 年之前，大家是通过 hash 来实现路由，url hash 就是类似于：<code>http://www.xxx.com/#/login</code>;</li><li>这种 #后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。</li><li>另外每次 hash 值的变化，还会触发hashchange 这个事件，然后我们便可以监听hashchange来实现更新页面部分内容的操作：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>function matchAndUpdate () {</span></span>
<span class="line"><span>   // todo 匹配 hash 做 dom 更新操作</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>window.addEventListener(&#39;hashchange&#39;, matchAndUpdate)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-history模式" tabindex="-1"><a class="header-anchor" href="#_2-history模式"><span>2.history模式</span></a></h5><ul><li>14年后，因为HTML5标准发布。多了两个 API，pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。</li><li>同时还有 popstate 事件。通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。</li><li>用了 HTML5 的实现，单页路由的 url 就不会多出一个#，变得更加美观。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>function matchAndUpdate () {</span></span>
<span class="line"><span>   // todo 匹配路径 做 dom 更新操作</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>window.addEventListener(&#39;popstate&#39;, matchAndUpdate)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router应用" tabindex="-1"><a class="header-anchor" href="#vue-router应用"><span>vue-router应用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.vue-router模块的router-link、router-view组件。active-class</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.动态路由？怎么获取传过来的动态参数？ </span></span>
<span class="line"><span>对path属性加上/:id。</span></span>
<span class="line"><span>router对象的params.id {{$route.params | json}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.vue-router有哪几种导航钩子？    </span></span>
<span class="line"><span>【1】全局导航钩子:router.beforeEach(to,from,next)，前置钩子/后置钩子afterEach</span></span>
<span class="line"><span>【2】组件内的钩子:beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave</span></span>
<span class="line"><span>【3】配置路由钩子:beforeEnter/afterEach</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的template编译" tabindex="-1"><a class="header-anchor" href="#vue的template编译"><span>Vue的template编译</span></a></h3><ul><li>首先，通过compile编译器把template编译成AST语法树</li><li>AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）;这里的Vnode其实就是我们订阅者；（和绑定属性相关的DOM节点）</li></ul><h3 id="vue数据双向绑定原理" tabindex="-1"><a class="header-anchor" href="#vue数据双向绑定原理"><span>VUE数据双向绑定原理</span></a></h3><ul><li>就是做了三件事：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.属性监听：把data上的所有属性进行获取值的监听，值改变时通知所有订阅者进行更新数据。</span></span>
<span class="line"><span>2.模板解析：</span></span>
<span class="line"><span> 2.1解析的过程就是把和属性相关的所有的DOM订阅者收集，以便为属性监听时可以进行订阅者更新。</span></span>
<span class="line"><span> 2.2 所有指令相关的DOM进行我们设置的事件进行绑定；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</li></ul><h3 id="mvvm框架" tabindex="-1"><a class="header-anchor" href="#mvvm框架"><span>mvvm框架</span></a></h3><ul><li>Mvvm定义MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。</li><li>【模型】指的是后端传递的数据。</li><li>【视图】指的是所看到的页面。</li><li>【视图模型】mvvm模式的核心，它是连接view和model的桥梁。</li><li>它有两个方向：</li><li>一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。(模板解析过程中的指令解析和赋值、绑定方法。)</li><li>二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。（发布订阅者模式，收集Vnode,进行DOM节点属性的更新）</li><li>这两个方向都实现的，我们称之为数据的双向绑定。</li><li>在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，</li><li>当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，</li><li>而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，还是数据改动嘛；</li></ul><h3 id="vue实现数据双向绑定的原理-object-defineproperty" tabindex="-1"><a class="header-anchor" href="#vue实现数据双向绑定的原理-object-defineproperty"><span>Vue实现数据双向绑定的原理：Object.defineProperty()</span></a></h3><p>vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调</p><p>a、Observer实现对MVVM自身model数据劫持，监听数据的属性变更，并在变动时进行notify b、Compile实现指令解析，初始化视图，并订阅数据变化，绑定好更新函数 c、Watcher一方面接收Observer通过dep传递过来的数据变化，一方面通知Compile进行view update</p><p>observer用来实现对每个vue中的data中定义的属性循环用Object.defineProperty()实现数据劫持，以便利用其中的setter和getter，然后通知订阅者，订阅者会触发它的update方法，对视图进行更新。</p>`,53),p=[l];function t(d,r){return n(),e("div",null,p)}const v=s(i,[["render",t],["__file","vue.html.vue"]]),o=JSON.parse('{"path":"/frontEndInterview/vue/vue.html","title":"vue","lang":"zh-CN","frontmatter":{"title":"vue","icon":"circle-info","description":"vue less(css的预编译) vue特性 vuex vue框架中状态管理机 场景有：管理全局的数据状态和传递数据，传递方法； 它集中于MVC模式中的Model层，规定所有的数据操作必须通过 action – mutation – statechange 的流程来进行，再结合Vue的数据视图双向绑定特性来实现页面的展示更新; vue生命周期 指令d...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/vue/vue.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"vue"}],["meta",{"property":"og:description","content":"vue less(css的预编译) vue特性 vuex vue框架中状态管理机 场景有：管理全局的数据状态和传递数据，传递方法； 它集中于MVC模式中的Model层，规定所有的数据操作必须通过 action – mutation – statechange 的流程来进行，再结合Vue的数据视图双向绑定特性来实现页面的展示更新; vue生命周期 指令d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":2,"title":"vue","slug":"vue","link":"#vue","children":[{"level":3,"title":"less(css的预编译)","slug":"less-css的预编译","link":"#less-css的预编译","children":[]},{"level":3,"title":"vue特性","slug":"vue特性","link":"#vue特性","children":[]},{"level":3,"title":"vuex","slug":"vuex","link":"#vuex","children":[]},{"level":3,"title":"vue生命周期","slug":"vue生命周期","link":"#vue生命周期","children":[]},{"level":3,"title":"指令directive","slug":"指令directive","link":"#指令directive","children":[]},{"level":3,"title":"vue.cli自定义的组件","slug":"vue-cli自定义的组件","link":"#vue-cli自定义的组件","children":[]},{"level":3,"title":"混入mixins","slug":"混入mixins","link":"#混入mixins","children":[]},{"level":3,"title":"$nextTick","slug":"nexttick","link":"#nexttick","children":[]},{"level":3,"title":"vue spa的实现原理","slug":"vue-spa的实现原理","link":"#vue-spa的实现原理","children":[]},{"level":3,"title":"vue-router实现原理","slug":"vue-router实现原理","link":"#vue-router实现原理","children":[]},{"level":3,"title":"vue-router应用","slug":"vue-router应用","link":"#vue-router应用","children":[]},{"level":3,"title":"Vue的template编译","slug":"vue的template编译","link":"#vue的template编译","children":[]},{"level":3,"title":"VUE数据双向绑定原理","slug":"vue数据双向绑定原理","link":"#vue数据双向绑定原理","children":[]},{"level":3,"title":"mvvm框架","slug":"mvvm框架","link":"#mvvm框架","children":[]},{"level":3,"title":"Vue实现数据双向绑定的原理：Object.defineProperty()","slug":"vue实现数据双向绑定的原理-object-defineproperty","link":"#vue实现数据双向绑定的原理-object-defineproperty","children":[]}]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":11.63,"words":3490},"filePathRelative":"frontEndInterview/vue/vue.md","localizedDate":"2024年6月23日","autoDesc":true}');export{v as comp,o as data};