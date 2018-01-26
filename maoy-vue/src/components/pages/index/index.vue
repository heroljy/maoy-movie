<template>
  <div id='index'>
    <m-header>
      <span slot="overwrite-left" class="city">
        北京
      </span>
      <span>猫眼电影</span>
    </m-header>
    <div>
      <tab @changeIndex='changeIndex'>
        <tab-item selected @itemClick='itemClick'>影片</tab-item>
        <tab-item @itemClick='itemClick'>影院</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import MHeader from './mHeader'
import TabItem from './tabItem'
import Tab from './tab'
export default {
  data () {
    return {
      city: '北京'
    }
  },
  components: {
    MHeader,
    Tab,
    TabItem
  },
  methods: {
    changeIndex (oldVal, newVal) {
      // console.log('oldVal = ' + oldVal + '        newVal = ' + newVal)
    },
    itemClick (val) {
      // console.log(val)
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
</style>
