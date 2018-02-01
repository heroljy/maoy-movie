<template>
    <div>
        <m-header>
          <span>切换城市</span>
        </m-header>
      <div class="city-picker">
        <section class="city-area" v-for="(data,index) in citydatas">
          <div class="city-area-header" @click="cityShow(index)">
            <span>{{data.header}}</span>
            <span class="angle-down" :class="{'angle-up':currentIndex === index}"></span>
          </div>
          <transition name="city-area-transition"
            enter-active-class="animated fadeInLeft"
              v-on:before-enter="beforeEnter">
          <ul class="city-area-items" v-if="currentIndex === index">
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
      currentIndex: 0,
      citydatas: [
        {header: '热门城市', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'A', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'B', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'C', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'D', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'E', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'F', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'G', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'H', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'I', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'J', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'K', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'L', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'M', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'N', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'O', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'P', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Q', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'R', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'S', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'T', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'U', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'V', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'W', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'X', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Y', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']},
        {header: 'Z', cities: ['北京', '上海', '广州', '青岛', '深圳', '三亚', '重庆', '成都']}
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
    },
    cityShow (index) {
      if (this.currentIndex === index) {
        this.currentIndex = -1
      } else {
        this.currentIndex = index
      }
    },
    beforeEnter (el) {
      if (this.currentIndex > 0) {
        scrollTo(0, (this.currentIndex * 83 / 75 * this.$root.$options.fontSize))
      }
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
    .city-area-header{
      height: px2rem(83);
      line-height: px2rem(83);
      border-bottom: px2rem(1) solid #ccc;
      font-size: px2rem(30);
      padding-left: px2rem(30);
      position: relative;
      font-weight: bold;
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
      .angle-up:after{
          content: "";
          position: absolute;
          top: px2rem(34);
          width: px2rem(17);
          height: px2rem(17);
          transform: rotate(-315deg);
          border: px2rem(4) solid #ccc;
          border-width: px2rem(4) 0 0 px2rem(4);
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
