<template>
  <div class="my-tab-item" :class="{'my-tab-item-sel':selected}" @click="selected=!selected">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    selected: Boolean
  },
  mounted () {
    // console.log(this.$parent)
    this.$parent.updateIndex()
  }
}
</script>
<style lang="less" scoped>
  .my-tab-item{
    flex: 1;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    border-bottom: 4px solid #ccc;
    color:#000;
  }
  .my-tab-item-sel{
    border-bottom-color: @dialog-button-text-warn-color;
    color: @dialog-button-text-warn-color
  }
</style>
