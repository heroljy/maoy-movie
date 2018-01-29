<template>
    <div class="my-header">
        <div class="header-left">
            <slot name='overwrite-left'>

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
    export default {
      data () {
        return {
    
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