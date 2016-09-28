<template lang="html">
  <home></home>
</template>

<script>
  // import SiteHeader from '../components/SiteHeader';
  // import SiteFooter from '../components/SiteFooter';
  import Home from './Home';
  export default {
    data: function () {
      return {
        msg: 'Hello from vue-loader'
      }
    },
    components: {
      Home
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
