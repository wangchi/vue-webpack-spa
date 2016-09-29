<template lang="html">
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  // import SiteHeader from '../components/SiteHeader';
  // import SiteFooter from '../components/SiteFooter';
  // import Home from './Home';
  // export default {
  //   data: function () {
  //     return {
  //       msg: 'Hello from vue-loader'
  //     }
  //   },
  //   components: {
  //     Home
  //   }
  // }
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

  .content {
    margin: 0 auto;
    width: 1200px;

    .placeholder {
      margin-top: 50px;
      height: 300px;
      background-color: #eee;
      // box-shadow: 50px 50px 100px rgba(0, 0, 0, .6) inset;
      box-shadow: 10px 10px 80px #666 inset, -10px -10px 80px #666 inset;
      text-align: center;
      line-height: 300px;
      font-size: 50px;
      color: #999;
    }
  }

  .site-footer {
    margin-top: 50px;
  }
  /* ---- common layout END ---- */
</style>
