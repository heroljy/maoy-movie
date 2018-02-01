<template>
  <div class="film">
      <section class="film-img">
          <img :src='filmData.imgUrl'>
      </section>
      <section class="film-data">
          <p class="film-name">{{filmData.filmName}}</p>
          <p class="film-desc film-type">{{filmData.filmType}}</p>
          <p class="film-desc film-actors">{{filmData.filmActors}}</p>
          <p class="film-desc film-current">{{filmData.filmCurrent}}</p>
      </section>
      <section class="film-btn-area">
          <p class="film-score">
              <span v-if='filmData.status === 0'>{{filmData.score}}</span><span class="film-score-dot" v-if='filmData.status === 0'>分</span>
              <span v-if='filmData.status !== 0'>{{filmData.wannerNum}}</span><span class="film-score-dot" v-if='filmData.status !== 0'>人想看</span>
          </p>
          <a class="film-btn" v-if='filmData.status === 0'>购买</a>
          <a class="film-btn film-wanner" v-if='filmData.status !== 0'>预售</a>
      </section>
  </div>
</template>

<script>
export default {
  props: {
    filmData: Object
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/functions.scss';
.film{
    display: flex;
    height: px2rem(230);
    border-bottom: px2rem(1) solid #e6e6e6;
    position: relative;
    .film-img{
        flex: 1;
        padding: px2rem(25) px2rem(22) 0 0;
        img{
            width: px2rem(130);
            height: px2rem(180);
        }
    }
    .film-data{
        flex: 4;
        padding-top: px2rem(35);
        line-height: 1.7;
        .film-name{
            font-size: px2rem(29);
            color: #222;
            font-weight: bold;
        }
        .film-desc{
            font-size: px2rem(24);
            color: #666;
            font-weight: bold;
            width: px2rem(418);
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .film-type{

        }
        .film-actors{

        }
        .film-current{
            color: #999;
        }
    }
    .film-btn-area{
        position: absolute;
        padding-top: px2rem(35);
        right: px2rem(26);
        height: 100%;
        font-size: px2rem(29);
        .film-score{
            color: #ffcc51;
            .film-score-dot{
                font-size: px2rem(20)
            }
        }
        .film-btn{
            display: block;
            width: px2rem(92);
            height: px2rem(50);
            line-height: px2rem(50);
            background: #e54847;
            border-radius: px2rem(10);
            color: #fff;
            text-align: center;
            position: absolute;
            bottom: px2rem(25);
            right: 0;
        }
        .film-wanner{
            background: #52b0eb;
        }
    }
}
</style>
