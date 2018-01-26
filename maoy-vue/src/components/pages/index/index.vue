<template>
  <div id='index'>
    <div>
      <tab @changeIndex='changeIndex'>
        <tab-item selected @itemClick='itemClick'>影片</tab-item>
        <tab-item @itemClick='itemClick'>影院</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import TabItem from './tabItem'
import Tab from './tab'
export default {
  data () {
    return {
      city: '北京'
    }
  },
  components: {
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

<style>
  .city{
    color: #fff;
  }
  .city:after{
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 4px;
    border-width: 4px;
    border-color: #fff transparent transparent;
    border-style: solid;
    font-size: 0;
    vertical-align: -2px;
  }
</style>
