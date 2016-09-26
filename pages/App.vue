<template lang="html">
  <site-header></site-header>
  <div class="message">
    {{ msg }}
  </div>
</template>

<script>
  import SiteHeader from '../components/SiteHeader.vue';
  export default {
    data: function () {
      return {
        msg: 'Hello from vue-loader'
      }
    },
    components: {
      SiteHeader
    }
  }
</script>

<style lang="sass">
  @import '../styles/reset.scss';
  @import '../styles/common.scss';

  .message {
    color: #f80;
    font-size: 14px;
    font-weight: bold;
  }
</style>
