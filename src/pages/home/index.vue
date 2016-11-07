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
