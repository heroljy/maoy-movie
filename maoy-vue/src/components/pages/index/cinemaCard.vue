<template>
  <div class="cinema">
      <p class="cinema-name">
          <span>{{cinemaData.name}}</span>
          <span class="cinema-low-price">{{cinemaData.lowPrice}}元起</span>
      </p>
      <p class="cinema-place">
          <span class='cinema-address'>{{cinemaData.address}}</span>
          <span class='cinema-distance'>{{cinemaData.distance}}</span>
      </p>
      <p class="cinema-tags">
          <span v-for="tag in cinemaData.tags">{{tag}}</span>
      </p>
  </div>
</template>

<script>
export default {
  props: {
    cinemaData: Object
  }
}
</script>

<style lang='scss'>
@import 'src/assets/scss/functions.scss';
    .cinema{
        width: 100%;
        height: px2rem(208);
        border-bottom: px2rem(1) solid #e6e6e6;
        padding: px2rem(25) 0;
        font-size: px2rem(23);
        color:#999;
        .cinema-name{
            font-weight: bold;
            font-size: px2rem(30);
            color:#222;
            .cinema-low-price{
                color: #e54847;
                font-size: px2rem(25);
            }
        }
        .cinema-place{
            margin-top: px2rem(26);
            .cinema-address{
                display: inline-block;
                width: px2rem(553);
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .cinema-distance{
                display: inline-block;
                float: right;
                padding-right: px2rem(26)
            }
        }
        .cinema-tags{
            margin-top: px2rem(22.5);
            span{
                display: inline-block;
                color: #589DAF;
                border: px2rem(2) solid #589DAF;
                border-radius: px2rem(5);
                padding: px2rem(2) px2rem(5);
                margin-right: px2rem(3);
            }
        }
    }
</style>
