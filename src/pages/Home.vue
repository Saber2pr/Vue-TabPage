<template>
  <!-- 下面实例化mainLayout标签，并注入内容到slot -->
  <mainLayout>
    <p>AK-12's Website</p>
    <img src="../common/img/AK12.jpg" />
    <p>I am AK-12</p>
    <p>the Website is based on Vue</p>
    <a href="https://github.com/Saber2pr">github</a>
    <a href="https://blog.csdn.net/u011607490">csdn</a>
    <a href="https://space.bilibili.com/71959910/#/">bilibili</a>
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
/* 关于通用标签（p，a）：父组件定义颜色样式，子组件定义大小 */
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
