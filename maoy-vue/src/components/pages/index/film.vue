<template>
  <div class="film">
      <section class="film-img">
          <img src='//p0.meituan.net/movie/18121bb13bd8b36243a871d075bcc80c1015601.jpg@128w_180h'>
      </section>
      <section class="film-data">
          <p class="film-name">{{filmData.filmName}}</p>
          <p class="film-type">{{filmData.filmType}}</p>
          <p class="film-actors">{{filmData.filmActors}}</p>
          <p class="film-current">{{filmData.filmCurrent}}</p>
      </section>
  </div>
</template>

<script>
export default {
  props: {
    filmData: Object
  },
  mounted () {
    console.log(this.filmData)
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/functions.scss';
.film{
    display: flex;
    height: px2rem(230);
    border-bottom: px2rem(1) solid #e6e6e6;
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
        padding-top: px2rem(41);
    }
}
</style>
