<template>
  <div>
    <!-- 导航按钮 -->
    <button v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab;postCurrentPage()">{{ tab }}</button>
  </div>
</template>

<script>
/**
 * > 注册页面(Controller)
 *    <tab-router :mainPage="'Home'"
 *                :pages="['Home', 'Project', 'About']">
 *    </tab-router>
 * > 然后点击tab会发射带有页面名的消息
 * ///提示：（监听消息并显示对应页面）
 *    添加属性,监听流动页面(View-Model)
 *    <component :is="currentPage||'Home'"></component>
 *    beforeCreate () {
 *      this.$root.$on('page', (page) => {
 *        this.currentPage = page
 *      })
 *    },
 *    data () {
 *      return {
 *        currentPage: null
 *      }
 *    },
 */
export default {
  // tab页面属性
  props: {
    mainPage: String,
    pages: Array
  },
  data () {
    return {
      currentTab: this.mainPage,
      tabs: this.pages
    }
  },
  methods: {
    // 发射事件
    postCurrentPage () {
      this.$root.$emit('page', this.currentTab.toLowerCase())
    }
  }
}

</script>

<style>
.tab-button {
  width: 100px;
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  color: rgb(98, 114, 164);
  font-size: 200%;
  font-family: MarkerFelt;
  background: rgb(25, 26, 33);
  margin-right: 1px;
  margin-left: 1px;
  outline: none;
}
.tab-button:hover {
  box-shadow: rgb(0, 0, 0) -5px 5px 10px;
}
.tab-button.active {
  background: rgb(40, 42, 54);
  box-shadow: rgb(0, 0, 0) -5px 0px 10px;
  background: rgb(40, 42, 54);
}
</style>
