<template>
  <div class="film-detail">
      <m-header>
          <span>{{filmData.name}}</span>
      </m-header>
      <div class="film-header">
          <div class="film-background" :style='backgroundImg'></div>
          <div class="film-filter"></div>
          <div class="film-container">
            <div class="film-img">
              <img :src='filmData.img'/>
            </div>
            <div class="flim-desc">
              <p class="film-cname">{{filmData.name}}</p>
              <p class="film-ename">{{filmData.ename}}</p>
              <p class="film-score" v-if="filmData.status === '0'">
                <img src='../../../assets/star-full-new.png'/>
                <img src='../../../assets/star-full-new.png'/>
                <img src='../../../assets/star-full-new.png'/>
                <img src='../../../assets/star-full-new.png'/>
                <img src='../../../assets/star-full-new.png'/>
                {{filmData.score}}
              </p>
              <p class="film-score-remark" v-if="filmData.status === '0'">（{{filmData.peopleNum}}人评分）</p>
              <p class="film-score" v-if="filmData.status === '1'">
                点映评分 {{filmData.score}}
                <span class='film-point'>（{{filmData.peopleNum}}人评分）</span>
              </p>
              <p class="film-score-remark" v-if="filmData.status === '1'">{{filmData.wannerNum}}人想看</p>
              <p class="film-score film-wanner" v-if="filmData.status === '2'">
                {{filmData.wannerNum}}人想看
              </p>
              <p class="film-score-type">
                {{filmData.type}}
                <span class="film-tag" v-for="tag in tags" :class="{'film-tag-d': tag !== 'IMAX', 'film-tag-imax': tag === 'IMAX'}">{{tag}}</span>
              </p>
              <p class="film-score-area">{{filmData.country}}/{{filmData.duration}}分钟</p>
              <p class="film-score-time">{{filmData.releaseTime}}</p>
            </div>
          </div>
      </div>
      <div class="film-buy-container">
        <div class="film-buy">立即购票</div>
        <div class="film-buy-desc">{{filmData.desc}}</div>
      </div>
      <div class="film-actors">

      </div>
      <div class="film-box-office">

      </div>
      <div class="film-commition">

      </div>
  </div>
</template>

<script>
import MHeader from '#/header/mHeader'
export default {
  data () {
    return {
      filmData: {}
    }
  },
  components: {
    MHeader
  },
  mounted () {
    this.filmData = this.$route.query.filmData
  },
  computed: {
    backgroundImg () {
      return {
        background: `url(${this.filmData.img})`
      }
    },
    tags () {
      let tagss = []
      if (this.filmData.tags) {
        tagss = this.filmData.tags.split(',')
      }
      return tagss
    },
    fullStar () {
      return this.filmData.score / 2
    },
    halfStar () {

    },
    emptyStar () {

    }
  }
}
</script>
<style lang='scss'>
@import 'src/assets/scss/functions.scss';
.film-detail{
    .film-header{
        margin-top: px2rem(101);
        height:px2rem(365);
        position: relative;
        overflow: hidden;
        .film-background{
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            padding: px2rem(30);
            z-index: 0;
            position: absolute;
            filter: blur(.6rem);
            -webkit-filter: blur(.6rem);
            background-size: cover;
            background-image: gray;
            background-repeat: no-repeat;
            background-position-y: 40%;
        }
        .film-filter{
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            position: absolute;
            background-color: #40454d;
            opacity: .55;
        }
        .film-container{
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          padding: px2rem(30);
          z-index: 0;
          position: absolute;
          .film-img{
            float: left;
            width: px2rem(213);
            height:px2rem(298);
            border: px2rem(2) #fff solid;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .flim-desc{
            opacity: .8;
            float: left;
            padding-left: px2rem(27);
            color: #fff;
            font-size: px2rem(25);
            line-height: 1.5;
            .film-cname{
              font-size: px2rem(32);
            }
            .film-ename{
              font-size: px2rem(25);
            }
            .film-score{
              font-size: px2rem(32);
              color: #ffc600;
            }
            .film-tag{
                display: inline-block;
                color: #fff;
                padding: 0 px2rem(3);
                font-size: px2rem(20);
                border-radius: px2rem(4)
            }
            .film-tag-d{
                color: #fff;
                background: #8bb7ce;
            }
            .film-tag-imax{
                color: #8bb7ce;
                background: #fff;
                border: 1px solid #8bb7ce;
            }
            .film-wanner{
              line-height: 2;
            }
            .film-point{
              font-size: px2rem(25);
              color:#fff;
            }
          }
        }
    }
    .film-buy-container{
      width: 90%;
      margin: 0 auto;
      margin-top: px2rem(30);
      color:#555;
      .film-buy{
        height: px2rem(70);
        background: #e54847;
        color: #fff;
        border-radius: 10px;
        font-size: px2rem(30);
        text-align: center;
        line-height: px2rem(70);
        margin-bottom: px2rem(30);
      }
      .film-buy-desc{
        max-height:99999px;//字数超过一定量之后rem单位失效，产生原因:foot-boosting
        font-size: px2rem(29);
      }
    }
}
</style>
