<template>
  <mainlayout>
    <group :items="projects"
           :width="200"
           :fontSize="'30'"></group>
  </mainlayout>
</template>

<script>
import mainlayout from '../layouts/Main'
import Group from '../components/Group'

export default {
  components: {
    mainlayout,
    Group
  },
  props: ['projects'],
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
