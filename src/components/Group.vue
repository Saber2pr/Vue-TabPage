<template>
  <div>
    <div v-for="item in items"
         :key="item.string">
      <a :href="item.href"
         :style="{width: width + 'px', fontSize: fontSize + 'px'}">{{item.name}}</a>
      <img :src="item.img" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'width', 'fontSize']
}
</script>

<style scoped>
img {
  display: block;
  margin-bottom: 20px;
  max-width: 100%;
  overflow: hidden;
  transform: scale(0.7);
}
a {
  display: block;
  margin-top: 20px;
  border-radius: 100%;
  color: rgb(98, 114, 164);
  text-decoration: none;
}
a:hover {
  box-shadow: darkgrey 5px 5px 30px 5px;
  color: rgb(116, 193, 210);
}
</style>
