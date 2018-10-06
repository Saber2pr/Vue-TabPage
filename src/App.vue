<template>
  <center>
    <tab-router :tabs="['Home', 'Project', 'About']"
                @tab="(tab)=>{page=tab}">
      <component :is="page||'Home'"></component>
    </tab-router>
  </center>
</template>

<script>
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
  data () {
    return {
      page: null
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
