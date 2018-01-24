<template>
    <div class="my-tab">
        <slot></slot>
        <div class="slide" :style='slideStyle'></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value: -1,
      count: this.$children.length,
      slideStyle: {}
    }
  },
  mounted () {
    this.updateIndex()
  },
  props: {
    height: Number
  },
  watch: {
    value (newVal, old) {
      old > -1 && this.$children[old] && (this.$children[old].currentSelected = false)
      newVal > -1 && this.$children[newVal] && (this.$children[newVal].currentSelected = true)
      this.slideStyle = {
        width: 100 / this.$children.length + '%',
        left: (100 / this.$children.length * this.value) + '%'
      }
      this.$emit('changeIndex', old, newVal)// 通知父组件值改变了
    }
  },
  methods: {
    updateIndex () {
      const children = this.$children
      if (!children || children.length === 0) return
      this.count = children.length
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
        if (children[i].currentSelected) {
          this.value = i
        }
      }
      this.slideStyle = {
        width: 100 / children.length + '%',
        left: (100 / children.length * this.value) + '%'
      }
    }
  }
}
</script>
<style lang="less">
.my-tab{
  -webkit-touch-callout: none;
  position: relative;
  display: flex;
  border-bottom: 3px solid #DDD8CE;
  & > a.tab-current{
    color: #e54847;
    // &:after{
    //   background: #e54847;
    // }
  }
  & > a{
    display: block;
    position: relative;
    flex: 1;
    width: 100%;
    height: 35px;
    padding: 0;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    color:#000;
    white-space: nowrap;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    // &:after{
    //   content: "";
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   height: 3px;
    //   width: 100%;
    //   background: #DDD8CE;
    // }
  }
  & > .slide{
    position: absolute;
    bottom: -3px;
    height: 3px;
    background: red;
    transition: left .3s ease-in;
  }
}
</style>
