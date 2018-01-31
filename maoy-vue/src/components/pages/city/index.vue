<template>
    <div>
        <m-header>
          <span>切换城市</span>
        </m-header>
      <div class="city-picker">
        <section class="city-area" v-for="data in citydatas">
          <div class="city-area-header" @click="data.show = !data.show">
            <span>{{data.header}}</span>
            <span class="angle-down"></span>
          </div>
          <transition name="custom-classes-transition"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutRight">
          <ul class="city-area-items" v-if="data.show">
            <li v-for="city in data.cities" @click="goIndex(data)">{{city}}</li>
          </ul>
          </transition>
        </section>
      </div>
    </div>
</template>
<script>
import MHeader from '#/header/mHeader'
export default {
  data () {
    return {
      citydatas: [
        {header: '热门城市', show: true, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'A', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'B', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'C', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'D', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'E', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'F', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'G', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'H', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'I', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'J', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'K', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'L', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'M', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'N', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'O', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'P', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Q', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'R', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'S', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'T', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'U', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'V', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'W', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'X', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Y', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Z', show: false, cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']}
      ]
    }
  },
  components: {
    MHeader
  },
  computed: {

  },
  methods: {
    goIndex (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss">
@import 'src/assets/scss/functions.scss';
.city-picker{
  position: relative;
  width: 100%;
  top: px2rem(101);
  .city-area{
    font-weight: bold;
    .city-area-header{
      height: px2rem(83);
      line-height: px2rem(83);
      border-bottom: px2rem(1) solid #ccc;
      font-size: px2rem(30);
      padding-left: px2rem(30);
      position: relative;
      .angle-down{
        position: absolute;
        right: px2rem(64);
        display: inline-block;
        height: inherit;
        width: px2rem(25);
        &:after{
          content: "";
          position: absolute;
          top: px2rem(34);
          width: px2rem(17);
          height: px2rem(17);
          transform: rotate(945deg);
          border: px2rem(4) solid #ccc;
          border-width: px2rem(4) 0 0 px2rem(4);
        }
      }
    }
    .city-area-items{
      line-height: px2rem(73);
      font-size: px2rem(25);
      li{
        height: px2rem(73);
        background: #f4f4f4;
        padding-left: px2rem(26);
        border-bottom: px2rem(1) solid #ccc;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
