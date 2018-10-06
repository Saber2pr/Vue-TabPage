// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 绑定的dom
  el: '#app',
  // 声明成员组件
  components: {
    App
  },
  // 配置template内容
  template: '<App/>'
})
