<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="login placeholder">Login</div>
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
    .login.placeholder {
      margin-left: auto;
      margin-right: auto;
      width: 600px;
      background-color: #666;
    }
  }
  /* ---- page1 layout END ---- */
</style>
