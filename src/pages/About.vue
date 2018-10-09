<template>
  <mainLayout>
    <p class="aboutP">Call Me</p>
    <group :items="about"
           :width="300"></group>
  </mainLayout>
</template>

<script>
import mainLayout from '../layouts/Main'
import group from '../components/Group'

export default {
  components: {
    mainLayout,
    group
  },
  props: ['about']
}

</script>

<style>
.aboutP {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 200%;
}
a {
  font-size: 200%;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
