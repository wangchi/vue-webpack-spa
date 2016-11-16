<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="login placeholder">
      {{msg}}
      <sub></sub>
    </div>
  </div>
  <site-footer></site-footer>
</template>

<script>
  import './index.styl';

  import SiteHeader from '../../components/site-header';
  import SiteFooter from '../../components/site-footer';
  import Sub from '../../components/sub';

  export default {
    data: function () {
      return {
        msg: 'Login'
      }
    },
    methods: {
      print: function () {
        console.log('print fn');
      }
    },
    events: {
      'send-message': function (data) {
        // console.log(data);
        this.msg = data;
        this.print();
      }
    },
    components: {
      SiteHeader,
      SiteFooter,
      Sub
    }
  }
</script>
