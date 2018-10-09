<template>
  <mainLayout>
    <p>{{title}}</p>
    <img :src="logo" />
    <p>{{author}}</p>
    <p>{{readME}}</p>
    <group :items="websites"
           :width="90"
           :fontSize="32"></group>
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
  props: ['home'],
  computed: {
    title () {
      return this.home.title
    },
    logo () {
      return this.home.logo
    },
    author () {
      return this.home.author
    },
    readME () {
      return this.home.readME
    },
    websites () {
      return this.home.websites
    }
  }
}
</script>

<style scoped>
img {
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
}
p {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 150%;
}
a {
  font-size: 200%;
  width: 90px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
