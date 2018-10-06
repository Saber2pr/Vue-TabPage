<template>
  <div>
    <center>
      <slot></slot>
    </center>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:rgb(25, 26, 33)')
  },
  beforeDestroy () {
  }
}
</script>

<style scoped>
@font-face {
  font-family: MarkerFelt;
  src: url('../common/fonts/MarkerFelt.ttf');
}
div {
  box-shadow: rgb(0, 0, 0) 0px 5px 10px;
  font-family: MarkerFelt;
  background: rgb(40, 42, 54);
  height: 100%;
  border: 1px solid rgb(0, 0, 0);
}
p {
  display: block;
  color: rgb(248, 235, 195);
}
a {
  display: block;
  border-radius: 100%;
  color: rgb(98, 114, 164);
  text-decoration: none;
}
a:hover {
  box-shadow: darkgrey 5px 5px 30px 5px;
  color: rgb(116, 193, 210);
}
</style>
