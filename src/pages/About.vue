<template>
  <mainLayout>
    <p>Call Me</p>
    <p>@ Gmail: </p>
    <a href="https://saber2pr@gmail.com">saber2pr@gmail.com</a>
    <p>@ QMail: </p>
    <a href="https://1029985799@qq.com">1029985799@qq.com</a>
  </mainLayout>
</template>

<script>
import mainLayout from '../layouts/Main.vue'

export default {
  components: {
    mainLayout
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
