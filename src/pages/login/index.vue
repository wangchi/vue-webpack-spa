<template lang="html">
  <div>
    <site-header></site-header>
    <div class="content">
      <div class="login placeholder">
        {{msg}}
        <sub-component></sub-component>
        <div class="parent">
          <input type="text" v-model="parentMessage">
          <button @click="sendParentMessge">Parent, Broadcast</button>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import './index.styl';

  import SiteHeader from '../../components/site-header';
  import SiteFooter from '../../components/site-footer';
  import SubComponent from '../../components/sub';

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
      SubComponent
    }
  }
</script>
