<template>
  <mainlayout>
    <a :href="project1.site">{{project1.name}}</a>
    <img :src="project1.img" />
    <a :href="project2.site">{{project2.name}}</a>
    <img :src="project2.img" />
    <a :href="project3.site">{{project3.name}}</a>
    <img :src="project3.img" />
    <a :href="project4.site">{{project4.name}}</a>
    <img :src="project4.img" />
    <a :href="project5.site">{{project5.name}}</a>
    <img :src="project5.img" />
    <a :href="project6.site">{{project6.name}}</a>
    <img :src="project6.img" />
    <a :href="project7.site">{{project7.name}}</a>
    <img :src="project7.img" />
  </mainlayout>
</template>

<script>
import mainlayout from '../layouts/Main'

export default {
  components: {
    mainlayout
  },
  data () {
    return {
      project1: {
        name: 'HouseBlocks',
        site: 'https://saber2pr.github.io/HouseBlocks/HouseBlocks_CocosCreator/build/web-mobile0.1/',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/newHouseBlocks.jpg'
      },
      project2: {
        name: 'csvTochat',
        site: 'https://saber2pr.github.io/csvToChart/',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/csvToChartView.jpg'
      },
      project3: {
        name: 'CameraIdea',
        site: 'https://saber2pr.github.io/CocosCreatorExam/CameraIdea/build/web-mobile/',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/camera.gif'
      },
      project4: {
        name: 'RandPlat',
        site: 'https://saber2pr.github.io/CocosCreatorExam/RandPlat/build/web-mobile/',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/RandPlat.jpg'
      },
      project5: {
        name: 'ComputerBattle',
        site: 'https://saber2pr.github.io/ComputerBattle/build/web-mobile/',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/CompView.gif'
      },
      project6: {
        name: 'imageToCode',
        site: 'https://github.com/Saber2pr/openCvImageTransformer',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/badapple.jpg'
      },
      project7: {
        name: 'XmJUMP',
        site: 'https://github.com/Saber2pr/XM_JUMP',
        img: 'https://github.com/Saber2pr/MyWeb/raw/master/resource/XM_JUMP.jpg'
      }
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
