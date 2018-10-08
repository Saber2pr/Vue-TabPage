<template>
  <mainlayout>
    <tab-router :tabs="getNames()"></tab-router>
    <group :items="projects"></group>
  </mainlayout>
</template>

<script>
import mainlayout from '../../layouts/Main'
import TabRouter from '../../components/TabRouter'
import Group from '../../components/Group'

export default {
  components: {
    mainlayout,
    TabRouter,
    Group
  },
  data () {
    return {
      projects: require('./project.json')
    }
  },
  methods: {
    getNames () {
      let names = []
      for (const pro in this.projects) {
        names.push(this.projects[pro].name)
      }
      return names
    }
  }
}

</script>

<style>
</style>
