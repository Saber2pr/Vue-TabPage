# vue-tabpage

> A vue-cli project, it extends a example from https://jsfiddle.net/chrisvfritz/Lp20op9o/
   
   ### preview
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
```

> App.vue

```vue
<template>
  <main-layout>
    <center>
      <tab-router :tabs="['Home', 'Project', 'About']">
        <template slot-scope="TabRouter">
          <component :is="TabRouter.currentTab"
                     :home="home"
                     :projects="project"
                     :about="about"></component>
        </template>
      </tab-router>
    </center>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/Main'
import TabRouter from './components/TabRouter'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'

export default {
  components: {
    MainLayout,
    TabRouter,
    Home,
    Project,
    About
  },
  data () {
    return {
      home: require('./common/json/home.json'),
      project: require('./common/json/project.json'),
      about: require('./common/json/about.json')
    }
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
```

### More pages just like this and the App will import them to use tabs to play.

### ...
