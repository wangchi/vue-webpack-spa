<template lang="html">
  <div class="content">
    <div class="placeholder">Home Content1</div>
    <div class="placeholder old-color-red">Home Content2</div>
    <div class="placeholder">Home Content3</div>
    <div class="placeholder">
      {{ message }}
      <input type="text" :value="message" @change="handleMessageChange" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['message']),
  },

  data() {
    return {
      msg: 'Home',
    };
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    handleMessageChange(e) {
      console.log(e.target.value);
      this.$store.dispatch('setMessage', e.target.value);
    },
  },
};
</script>
<style lang="stylus" scoped>
.content
  color #f00
</style>
