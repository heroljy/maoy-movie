<template>
  <div id='index'>
    <m-header>
      <span slot="overwrite-left" class="city" @click="selCity">{{city}}</span>
      <span>猫眼电影</span>
    </m-header>
    <div class="index-tab">
      <tab @changeIndex='changeIndex'>
        <tab-item selected @itemClick='itemClick'>影片</tab-item>
        <tab-item @itemClick='itemClick'>影院</tab-item>
      </tab>
    </div>
    <section class="index-main">
      <section class="film-area">
        <film :film-data='filmData'></film>
        <film :film-data='filmData'></film>
        <film :film-data='filmData'></film>
        <film :film-data='filmData'></film>
        <film :film-data='filmData'></film>
        <film :film-data='filmData'></film>
      </section>
      <section class="cinema-area">

      </section>
    </section>
  </div>
</template>

<script>
import MHeader from '#/header/mHeader'
import TabItem from '#/tab/tabItem'
import Tab from '#/tab/tab'
import Film from './film'
export default {
  data () {
    return {
      city: '北京',
      filmData: {filmName: '移动迷宫3：死亡解药', filmType: '动作,惊悚,科幻', filmActors: '主演:迪伦·奥布莱恩,卡雅·斯考达里奥,托马斯·桑斯特', filmCurrent: '今天181家影院放映1452场'}
    }
  },
  components: {
    MHeader,
    Tab,
    TabItem,
    Film
  },
  methods: {
    changeIndex (oldVal, newVal) {
      // console.log('oldVal = ' + oldVal + '        newVal = ' + newVal)
    },
    itemClick (val) {
      // console.log(val)
    },
    selCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/functions.scss';
  .city{
    position: relative;
    display: inline-block;
    &:after{
      content: '';
      position: absolute;
      top: px2rem(45);
      right: px2rem(-25);
      display: inline-block;
      width: 0;
      height: 0;
      border-width: px2rem(9);
      border-color: #fff transparent transparent;
      border-style: solid;
    }
  }
  .index-tab{
    position: relative;
    top: px2rem(101);
    width: 100%;
  }
  .index-main{
    position: relative;
    top: px2rem(101);
    padding: 0 px2rem(24);
  }
</style>
