<template lang="html">
  <site-header></site-header>
  <div class="content">
    <div class="login placeholder">
      {{msg}}
      <sub></sub>
      <div class="parent">
        <input type="text" v-model="parentMessage">
        <button @click="sendParentMessge">Parent, Broadcast</button>
      </div>
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
        msg: 'Login',
        parentMessage: 'parent'
      }
    },
    methods: {
      print: function () {
        console.log('print fn');
      },

      sendParentMessge: function () {
        this.$broadcast('parent-message', this.parentMessage);
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
