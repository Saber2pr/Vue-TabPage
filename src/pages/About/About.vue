<template>
  <mainLayout>
    <p>Call Me</p>
    <p>@ Gmail: </p>
    <a :href="about.gmail.href">{{about.gmail.name}}</a>
    <p>@ QMail: </p>
    <a :href="about.qmail.href">{{about.qmail.name}}</a>
  </mainLayout>
</template>

<script>
import mainLayout from '../../layouts/Main'

export default {
  components: {
    mainLayout
  },
  data () {
    return {
      about: require('./about.json')
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 200%;
}
a {
  font-size: 150%;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 200px;
}
</style>
