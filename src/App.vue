<template>
  <main-layout>
    <center>
      <tab-router :tabs="['Home', 'Project', 'About']">
        <!-- declare a variable in tab and get data from it -->
        <template slot-scope="TabRouter">
          <component :is="TabRouter.currentTab"></component>
        </template>
      </tab-router>
    </center>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/Main'
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project/Project'
import About from './pages/About/About'

export default {
  components: {
    MainLayout,
    TabRouter,
    Home,
    Project,
    About
  }
}

</script>

<style>
</style>
