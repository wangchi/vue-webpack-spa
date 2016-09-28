<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="page1 placeholder">Page1</div>
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

<style lang="sass">
  /* ---- page1 layout START ---- */
  .content {
    .page1.placeholder {
      background-color: #999;
      color: #fff;
    }
  }
  /* ---- page1 layout END ---- */
</style>
