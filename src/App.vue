<template>
  <center>
    <tab-router :mainPage="'Home'"
                :pages="['Home', 'Project', 'About']">
    </tab-router>
    <component :is="currentPage||'Home'"></component>
  </center>
</template>

<script>
// 引入组件
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
  beforeCreate () {
    this.$root.$on('page', (page) => {
      this.currentPage = page
    })
  },
  data () {
    return {
      currentPage: null
    }
  },
  components: {
    TabRouter,
    Home,
    Project,
    About
  }
}

</script>

<style>
</style>
