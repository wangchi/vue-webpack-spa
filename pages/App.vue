<template lang="html">
  <site-header></site-header>
  <div class="message">
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
        msg: 'Hello from vue-loader'
      }
    },
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>

<style lang="sass">
  @import '../styles/reset.scss';
  @import '../styles/common.scss';

  /* ---- common layout START ---- */
  .message {
    color: #f80;
    font-size: 14px;
    font-weight: bold;
  }

  .site-footer {
    margin-top: 50px;
  }
  /* ---- common layout END ---- */
</style>
