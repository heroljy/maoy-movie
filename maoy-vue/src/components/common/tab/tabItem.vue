<template>
  <a href="javascript:void(0)" class="my-tab-item" :class="classes" :style="styles" @click="onItemClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    }
  },
  props: {
    selected: Boolean
  },
  mounted () {
    this.$parent.updateIndex()
  },
  computed: {
    classes () {
      return {
        'tab-current': this.currentIndex === this.$parent.value
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
  },
  watch: {
    selected (val) {
      this.currentSelected = val
    }
  },
  methods: {
    onItemClick () {
      this.currentSelected = true
      this.$parent.value = this.currentIndex
      this.$emit('itemClick', this.currentIndex)
    }
  }
}
</script>