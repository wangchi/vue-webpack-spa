<template lang="html">
  <div class="sub">
    <input type="text" v-model="msg" />
    <button @click="sendMessage">Child, Dispatch</button>
    <br />
    {{ subData }}
  </div>
</template>

<script>
import './index.styl';

export default {
  data() {
    return {
      msg: 'hello',
      subData: 'sub',
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    sendMessage: function () {
      this.$dispatch('send-message', this.msg);
    },
  },
  events: {
    'parent-message': function (data) {
      this.subData = data;
    },
  },
  components: {},
};
</script>
