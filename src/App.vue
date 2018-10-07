<template>
  <center>
    <tab-router :tabs="['Home', 'Project', 'About']">
      <!-- declare a variable in tab and get data from it -->
      <template slot-scope="TabRouter">
        <component :is="TabRouter.currentTab"></component>
      </template>
    </tab-router>
  </center>
</template>

<script>
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
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
