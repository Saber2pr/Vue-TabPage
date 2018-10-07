<template>
  <mainlayout>
    <tab-router :tabs="getNames()"></tab-router>
    <elem></elem>
    <a :href="projects.pro1.site">{{projects.pro1.name}}</a>
    <img :src="projects.pro1.img" />
    <a :href="projects.pro2.site">{{projects.pro2.name}}</a>
    <img :src="projects.pro2.img" />
    <a :href="projects.pro3.site">{{projects.pro3.name}}</a>
    <img :src="projects.pro3.img" />
    <a :href="projects.pro4.site">{{projects.pro4.name}}</a>
    <img :src="projects.pro4.img" />
    <a :href="projects.pro5.site">{{projects.pro5.name}}</a>
    <img :src="projects.pro5.img" />
    <a :href="projects.pro6.site">{{projects.pro6.name}}</a>
    <img :src="projects.pro6.img" />
    <a :href="projects.pro7.site">{{projects.pro7.name}}</a>
    <img :src="projects.pro7.img" />
  </mainlayout>
</template>

<script>
import mainlayout from '../layouts/Main'
import TabRouter from '../components/TabRouter'
import Vue from 'vue'

Vue.component('elem', {
  render: function (h) {
    return h({
      template: '<p>render!</p>'
    })
  }
})

export default {
  components: {
    mainlayout,
    TabRouter
  },
  data () {
    return {
      projects: {
        pro1: {
          name: 'HouseBlocks',
          site: 'https://saber2pr.github.io/HouseBlocks/HouseBlocks_CocosCreator/build/web-mobile0.1/',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/newHouseBlocks.jpg'
        },
        pro2: {
          name: 'csvTochat',
          site: 'https://saber2pr.github.io/csvToChart/',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/csvToChartView.jpg'
        },
        pro3: {
          name: 'CameraIdea',
          site: 'https://saber2pr.github.io/CocosCreatorExam/CameraIdea/build/web-mobile/',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/camera.gif'
        },
        pro4: {
          name: 'RandPlat',
          site: 'https://saber2pr.github.io/CocosCreatorExam/RandPlat/build/web-mobile/',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/RandPlat.jpg'
        },
        pro5: {
          name: 'ComputerBattle',
          site: 'https://saber2pr.github.io/ComputerBattle/build/web-mobile/',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/CompView.gif'
        },
        pro6: {
          name: 'imageToCode',
          site: 'https://github.com/Saber2pr/openCvImageTransformer',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/badapple.jpg'
        },
        pro7: {
          name: 'XmJUMP',
          site: 'https://github.com/Saber2pr/XM_JUMP',
          img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/XM_JUMP.jpg'
        }
      }
    }
  },
  methods: {
    getNames () {
      let names = []
      for (const pro in this.projects) {
        names.push(this.projects[pro].name)
      }
      return names
    }
  }
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
  margin-top: 20px;
  font-size: 200%;
  width: 190px;
}
</style>
