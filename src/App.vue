<template>
  <main-layout>
    <center>
      <tab-router :tabs="['Home', 'Project', 'About']">
        <template slot-scope="TabRouter">
          <component :is="TabRouter.currentTab"
                     :home="home"
                     :projects="project"
                     :about="about"></component>
        </template>
      </tab-router>
    </center>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/Main'
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
  components: {
    MainLayout,
    TabRouter,
    Home,
    Project,
    About
  },
  data () {
    return {
      index: require('./common/json/data.json')
    }
  },
  computed: {
    home () {
      return this.index.home
    },
    project () {
      return this.index.project
    },
    about () {
      return this.index.about
    }
  }
}

</script>

<style>
</style>
