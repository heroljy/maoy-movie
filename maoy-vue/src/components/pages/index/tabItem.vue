<template>
  <a href="javascript:void(0)" class="my-tab-item" :class="classes" :style="styles" @click="onItemClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: -1
    }
  },
  props: {
    selected: Boolean
  },
  computed: {
    classes () {
      return {
        '.tab-current': this.currentIndex === this.$parent.currentIndex
      }
    },
    styles () {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        }
      }
    }
  }
}
</script>