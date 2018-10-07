# vue-tabpage

> A Vue.js project, it extends a example from https://jsfiddle.net/chrisvfritz/Lp20op9o/

![loadingImage...](https://github.com/Saber2pr/MyWeb/raw/master/resource/Vue.jpg)

- easy to make a tabpage!

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Details

> TabRouter.vue

```vue
<template>
  <div>
    <button v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab}]"
            @click="currentTab=tab">{{ tab }}</button>
    <slot :currentTab="currentTab"></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array
  },
  data() {
    return {
      // default tab
      currentTab: this.tabs[0]
    }
  }
}
</script>
```

> App.vue

```vue
<template>
  <center>
    <tab-router :tabs="['Home', 'Project', 'About']">
      <!-- declare a variable in tab and get data from it -->
      <template slot-scope="TabRouter">
        <component :is="TabRouter.currentTab"></component>
      </template>
    </tab-router>
  </center>
</template>

<script>
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
  components: {
    TabRouter,
    Home,
    Project,
    About
  }
}
</script>
```

> Home.vue

```vue
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
```

### More pages just like this and the App will import them to use tabs to play.

### ...
