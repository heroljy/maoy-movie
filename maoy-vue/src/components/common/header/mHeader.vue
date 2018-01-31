<template>
    <div class="my-header">
        <div class="header-left">
            <slot name='overwrite-left'>
                <div @click.preventDefault @click="onClickBack">
                </div>
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
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        background: #e54847;
        .header-left,.header-right{
            flex: 1;
            font-size: px2rem(30);
            left: px2rem(32);
            padding-left: px2rem(32);
        }
        .header-left div{
            width: 100%;
            height: 100%;
            position: relative;
            &:after{
                content: "";
                position: absolute;
                left: 0;
                top: px2rem(30);
                width: px2rem(30);
                height: px2rem(30);
                border: px2rem(4) solid #fff;
                border-width: px2rem(4) 0 0 px2rem(4);
                transform: rotate(315deg);
            }
        }
        .header-title{
            flex: 6;
            text-align: center;
            font-size: px2rem(36)
        }
    }
</style>