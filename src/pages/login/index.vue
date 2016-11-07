<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="login placeholder">Login</div>
  </div>
  <site-footer></site-footer>
</template>

<script>
  import './index.styl';

  import SiteHeader from '../../components/site-header';
  import SiteFooter from '../../components/site-footer';
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
