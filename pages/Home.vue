<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="placeholder">Home Content1</div>
    <div class="placeholder old-color-red">Home Content2</div>
    <div class="placeholder">Home Content3</div>
  </div>
  <site-footer></site-footer>
</template>

<script>
  import SiteHeader from '../components/SiteHeader';
  import SiteFooter from '../components/SiteFooter';
  export default {
    data: function () {
      return {
        msg: 'Home'
      }
    },
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>

<style lang="stylus">
  /* ---- home layout START ---- */
  .content
    color #f00
  /* ---- home layout END ---- */
</style>
