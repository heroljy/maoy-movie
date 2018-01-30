<template>
    <div class="my-header">
        <div class="header-left">
            <slot name='overwrite-left'>
                <a @click.preventDefault @click="onClickBack">back</a>
            </slot>
        </div>
        <div class="header-title">
            <slot>
                <span>标题</span>
            </slot>
        </div>
        <div class="header-right">
            <slot name='overwrite-right'>

            </slot>
        </div>
    </div>
</template>
<script>
import _assign from 'lodash/assign'
export default {
  data () {
    return {

    }
  },
  props: {
    leftOptions: Object
  },
  computed: {
    _leftOptions () {
      return _assign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  }
}
</script>
<style lang="scss">
@import 'src/assets/scss/functions.scss';
    .my-header{
        height: px2rem(101);
        line-height: px2rem(101);
        color: #fff; 
        display:flex;
        background: #e54847;
        .header-left,.header-right{
            flex: 1;
            font-size: px2rem(30);
            left: px2rem(32);
            padding-left: px2rem(32);
        }
        .header-title{
            flex: 6;
            text-align: center;
            font-size: px2rem(36)
        }
    }
</style>