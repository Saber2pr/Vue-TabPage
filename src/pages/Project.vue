<template>
  <mainlayout>
    <a :href="this.HouseBlocks.site">HouseBlocks</a>
    <img :src="this.HouseBlocks.img" />
    <a :href="this.csvTochat.site">csvTochat</a>
    <img :src="this.csvTochat.img" />
    <a :href="this.CameraIdea.site">CameraIdea</a>
    <img :src="this.CameraIdea.img" />
    <a :href="this.RandPlat.site">RandPlat</a>
    <img :src="this.RandPlat.img" />
    <a :href="this.ComputerBattle.site">ComputerBattle</a>
    <img :src="this.ComputerBattle.img" />
    <a :href="this.imageToCode.site">imageToCode</a>
    <img :src="this.imageToCode.img" />
    <a :href="this.XmJUMP.site">XmJUMP</a>
    <img :src="this.XmJUMP.img" />
  </mainlayout>
</template>

<script>
import mainlayout from '../layouts/Main.vue'

export default {
  components: {
    mainlayout
  },
  data () {
    return {
      HouseBlocks: {
        site: 'https://saber2pr.github.io/HouseBlocks/HouseBlocks_CocosCreator/build/web-mobile0.1/',
        img: require('../common/img/newHouseBlocks.jpg')
      },
      csvTochat: {
        site: 'https://saber2pr.github.io/csvToChart/',
        img: require('../common/img/csvToChartView.jpg')
      },
      CameraIdea: {
        site: 'https://saber2pr.github.io/CocosCreatorExam/CameraIdea/build/web-mobile/',
        img: require('../common/img/camera.gif')
      },
      RandPlat: {
        site: 'https://saber2pr.github.io/CocosCreatorExam/RandPlat/build/web-mobile/',
        img: require('../common/img/RandPlat.jpg')
      },
      ComputerBattle: {
        site: 'https://saber2pr.github.io/ComputerBattle/build/web-mobile/',
        img: require('../common/img/CompView.gif')
      },
      imageToCode: {
        site: 'https://github.com/Saber2pr/openCvImageTransformer',
        img: require('../common/img/badapple.jpg')
      },
      XmJUMP: {
        site: 'https://github.com/Saber2pr/XM_JUMP',
        img: require('../common/img/XM_JUMP.jpg')
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
