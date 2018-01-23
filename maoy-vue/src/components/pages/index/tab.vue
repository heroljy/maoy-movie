<template>
    <div class="my-tab">
        <slot></slot>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: -1
    }
  },
  props: {
    height: Number
  },
  methods: {
    updateIndex () {
      this.$children.map((child, i) => {
        child.$props.selected && (this.currentIndex = i)
      })
      console.log(this.currentIndex)
    }
  }
}
</script>
<style lang="less">
.my-tab{
  -webkit-touch-callout: none;
  display: flex;
  & > a.tab-current{
    color: #e54847;
    &:after{
      background: #e54847;
    }
  }
  & > a{
    display: block;
    position: relative;
    flex: 1;
    width: 100%;
    height: 30px;
    padding: 0;
    font-size: 14px;
    line-height: 31px;
    text-align: center;
    color:#000;
    white-space: nowrap;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background: #fff;
    }
  }
}
</style>
