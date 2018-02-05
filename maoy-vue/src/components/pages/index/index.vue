<template>
  <div id='index'>
    <m-header>
      <span slot="overwrite-left" class="city" @click="selCity">{{city}}</span>
      <span>猫眼电影</span>
    </m-header>
    <div class="index-tab">
      <tab @changeIndex='changeIndex'>
        <tab-item :selected='currentIndex===0' @itemClick='itemClick'>影片</tab-item>
        <tab-item :selected='currentIndex===1' @itemClick='itemClick'>影院</tab-item>
      </tab>
    </div>
    <section class="index-main">
      <transition name="city-area-transition" enter-active-class="animated fadeInLeft">
        <section class="film-area" v-if="currentIndex === 0">
          <film v-for='data in filmData' :film-data='data'></film>
        </section>
      </transition>
      <transition name="city-area-transition" enter-active-class="animated fadeInRight">
        <section class="cinema-area" v-if="currentIndex === 1">
          <cinema v-for='data in cinemas' :cinema-data='data'></cinema>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MHeader from '#/header/mHeader'
import TabItem from '#/tab/tabItem'
import Tab from '#/tab/tab'
import Film from './film'
import Cinema from './cinema'
export default {
  data () {
    return {
      city: '北京',
      filmData: [
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/16b410d5c58fce6b76c14775d946c3cc310492.jpg.webp@128w_180h', filmName: '移动迷宫3：死亡解药', filmType: '动作,惊悚,科幻', filmActors: '主演:迪伦·奥布莱恩,卡雅·斯考达里奥,托马斯·桑斯特', filmCurrent: '今天181家影院放映1452场'},
        {wannerNum: '28879', status: 1, imgUrl: '//p0.meituan.net/movie/18121bb13bd8b36243a871d075bcc80c1015601.jpg.webp@128w_180h', filmName: '马戏之王', filmType: '剧情,传记,歌舞', filmActors: '主演:休·杰克曼,扎克·埃夫隆,米歇尔·威廉姆斯', filmCurrent: '今天172家影院放映1637场'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/ba489e6ba90fe7b0110479c548797396585731.png.webp@128w_180h', filmName: '神秘巨星', filmType: '剧情,喜剧,音乐', filmActors: '主演:阿米尔·汗,塞伊拉·沃西,梅·维贾', filmCurrent: '今天182家影院放映1191场'},
        {wannerNum: '29233', status: 2, imgUrl: '//p1.meituan.net/movie/ddbaa3f31cdbdfa6cd72721de63545021032555.jpg.webp@128w_180h', filmName: '捉妖记2', filmType: '喜剧,奇幻', filmActors: '主演:梁朝伟,白百何,井柏然', filmCurrent: '2018-02-16上映'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/75352182978ae891abb55727f51c28b6305181.jpg.webp@128w_180h', filmName: '无问西东', filmType: '爱情,战争', filmActors: '主演:章子怡,黄晓明,王力宏', filmCurrent: '今天180家影院放映1004场'},
        {wannerNum: '2983', status: 1, imgUrl: '//p1.meituan.net/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg.webp@128w_180h', filmName: '唐人街探案2', filmType: '喜剧,动作,悬疑', filmActors: '主演:王宝强,刘昊然,肖央', filmCurrent: '2018-02-16上映'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/bfd371ed5c7290ca47a41e45e36dfe43963033.jpg.webp@128w_180h', filmName: '西游记女儿国', filmType: '喜剧,爱情,动作', filmActors: '主演:郭富城,冯绍峰,赵丽颖', filmCurrent: '2018-02-16上映'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/16b410d5c58fce6b76c14775d946c3cc310492.jpg.webp@128w_180h', filmName: '移动迷宫3：死亡解药', filmType: '动作,惊悚,科幻', filmActors: '主演:迪伦·奥布莱恩,卡雅·斯考达里奥,托马斯·桑斯特', filmCurrent: '今天181家影院放映1452场'},
        {wannerNum: '27803', status: 2, imgUrl: '//p0.meituan.net/movie/18121bb13bd8b36243a871d075bcc80c1015601.jpg.webp@128w_180h', filmName: '马戏之王', filmType: '剧情,传记,歌舞', filmActors: '主演:休·杰克曼,扎克·埃夫隆,米歇尔·威廉姆斯', filmCurrent: '今天172家影院放映1637场'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/ba489e6ba90fe7b0110479c548797396585731.png.webp@128w_180h', filmName: '神秘巨星', filmType: '剧情,喜剧,音乐', filmActors: '主演:阿米尔·汗,塞伊拉·沃西,梅·维贾', filmCurrent: '今天182家影院放映1191场'},
        {score: '7.5', status: 0, imgUrl: '//p1.meituan.net/movie/ddbaa3f31cdbdfa6cd72721de63545021032555.jpg.webp@128w_180h', filmName: '捉妖记2', filmType: '喜剧,奇幻', filmActors: '主演:梁朝伟,白百何,井柏然', filmCurrent: '2018-02-16上映'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/75352182978ae891abb55727f51c28b6305181.jpg.webp@128w_180h', filmName: '无问西东', filmType: '爱情,战争', filmActors: '主演:章子怡,黄晓明,王力宏', filmCurrent: '今天180家影院放映1004场'},
        {score: '7.5', status: 0, imgUrl: '//p1.meituan.net/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg.webp@128w_180h', filmName: '唐人街探案2', filmType: '喜剧,动作,悬疑', filmActors: '主演:王宝强,刘昊然,肖央', filmCurrent: '2018-02-16上映'},
        {score: '7.5', status: 0, imgUrl: '//p0.meituan.net/movie/bfd371ed5c7290ca47a41e45e36dfe43963033.jpg.webp@128w_180h', filmName: '西游记女儿国', filmType: '喜剧,爱情,动作', filmActors: '主演:郭富城,冯绍峰,赵丽颖', filmCurrent: '2018-02-16上映'}
      ],
      cinemas: [
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '900m', tags: ['座', 'IMAX厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.2km', tags: ['座', '杜比全景声厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.5km', tags: ['座', 'IMAX厅']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '1.9km', tags: ['座']},
        {name: '万画影城(四季青店)', lowPrice: '33', address: '海淀区西四环北路金四季购物中心中段三层B003', distance: '2.3km', tags: ['座', '杜比全景声厅']}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentIndex'
    ])
  },
  components: {
    MHeader,
    Tab,
    TabItem,
    Film,
    Cinema
  },
  methods: {
    changeIndex (oldVal, newVal) {
      // console.log('oldVal = ' + oldVal + '        newVal = ' + newVal)
    },
    itemClick (val) {
      this.$store.dispatch('SET_INDEX', val)
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
    position: fixed;
    z-index: 999;
    top: px2rem(101);
    width: 100%;
    background: #fff;
  }
  .index-main{
    position: relative;
    top: px2rem(202);
    .film-area{
      padding: 0 px2rem(24);
    }
    .cinema-area{
      width: 100%;
      padding-left: px2rem(31);
    }
  }
</style>
