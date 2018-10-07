<template>
  <div>
    <button v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab}]"
            :style="{ width: widthData }"
            @click="currentTab=tab">{{ tab }}</button>
    <slot :currentTab="currentTab"></slot>
  </div>
</template>

<script>

export default {
  props: {
    tabs: Array
  },
  data () {
    return {
      // default tab
      currentTab: this.tabs[0]
    }
  },
  computed: {
    widthData () {
      return 100 / this.tabs.length + '%'
    }
  }
}

</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  color: rgb(42, 51, 77);
  font-size: 200%;
  font-family: MarkerFelt;
  background: rgb(25, 26, 33);
  outline: none;
}
.tab-button:hover {
  color: rgb(60, 67, 94);
  box-shadow: rgb(0, 0, 0) -5px 5px 10px;
}
.tab-button.active {
  color: rgb(98, 114, 164);
  background: rgb(40, 42, 54);
  box-shadow: rgb(0, 0, 0) -5px 5px 10px;
}
</style>
