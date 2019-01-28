# 一、Getting Start —— TodoList

根据Vue.js作者尤雨溪的建议 [新手向：Vue 2.0 的建议学习顺序
](https://zhuanlan.zhihu.com/p/23134551?utm_source=wechat_session&utm_medium=social&utm_oi=1046000273645961216)

首先，我将Vue.js官网的基础教程过一遍，了解基本的v-on,v-bind,v-for等指令的用法，了解如何创建Vue实例等。那些组件化开发等更进阶一些的我就较为快速的过了一遍，但是没有每个例子都敲一遍。之后我翻墙去到了一个叫Vue-School [Vue.js Fundamentals
](https://vueschool.io/courses/vuejs-fundamentals) 的网站，学习了一个Vue.js入门应用的开发，也就是下面展示的这个TodoList应用，他教的是ShoppingList,我在他的基础上完善了删除功能，同时实现了根据浏览器屏幕大小自适应宽度。

这个demo是通过script引入vue来使用的，还是听尤大的话，不要一上来就直接用 vue-cli 构建项目，打好基础先💪


<center>
 <img src="/images/1_index.png" margin=20% width=70% />
</center>

### 大致记录下收获

**一、简写**
  - v-bind 指令可以用于响应式地更新 HTML 特性。`v-bind: -> :`
  - v-on 指令，它用于监听 DOM 事件。 `v-on: -> @`
  
**二、性能优化**
  - 这是有关页面渲染的问题，可以去了解一下。总之，引入的css文件放在head中，而js文件要放在body的最尾处，防止js阻塞渲染，导致页面渲染变慢
  
因为和微信小程序开发确实很像，做这样一个小demo还是没什么难度的，所以也不知道能总结些啥，也就不赘述了hhh，接下来会继续更新～！
