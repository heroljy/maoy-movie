<template>
<img :src='defaultSrc' :data-src='currentSrc' class='my-img'/>  
</template>

<script>
// import Blazy from 'blazy'
export default {
  props: {
    defaultSrc: {
      type: String,
      default: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    }
  }
}
</script>

<style lang='scss'>

</style>
