<template>
  <div>
    <a v-for="name in names"
       :key="name">{{name}}</a>
    <img v-for="img in images"
         :key="img"
         :src="img" />
  </div>
</template>

<script>
export default {
  props: {
    names: Array,
    images: Array,
    hrefs: Array
  }
}
</script>

<style>
</style>
