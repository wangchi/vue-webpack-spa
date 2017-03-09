<template lang="html">
  <div>
    <site-header></site-header>
    <div class="content">
      <div class="page1 placeholder">Page1</div>
    </div>
    <site-footer></site-footer>
  </div>
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
