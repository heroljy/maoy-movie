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
<style lang="less" scoped>
.my-tab{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row
}
</style>
