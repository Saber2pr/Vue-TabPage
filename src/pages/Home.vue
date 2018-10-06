<template>
  <mainLayout>
    <p>{{title}}</p>
    <img :src="logo" />
    <p>{{author}}</p>
    <p>{{readME}}</p>
    <a :href="website1.href">{{website1.name}}</a>
    <a :href="website2.href">{{website2.name}}</a>
    <a :href="website3.href">{{website3.name}}</a>
  </mainLayout>
</template>

<script>
import mainLayout from '../layouts/Main'

export default {
  components: {
    mainLayout
  },
  data () {
    return {
      title: "AK-12's Website",
      logo: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/AK12.jpg',
      author: 'I am AK-12',
      readME: 'the Website is based on Vue',
      website1: {
        name: 'github',
        href: 'https://github.com/Saber2pr'
      },
      website2: {
        name: 'csdn',
        href: 'https://blog.csdn.net/u011607490'
      },
      website3: {
        name: 'bilibili',
        href: 'https://space.bilibili.com/71959910/#/'
      }
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
