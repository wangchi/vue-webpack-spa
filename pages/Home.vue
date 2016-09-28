<template lang="html">
  <site-header></site-header>
  <div class="content">
    {{ msg }}
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
  /* ---- home layout START ---- */
  .content {
    color: #f00;
  }
  /* ---- home layout END ---- */
</style>
