<template lang="html">
  <div>
    <site-header></site-header>
    <div class="content">
      <div class="placeholder">Home Content1</div>
      <div class="placeholder old-color-red">Home Content2</div>
      <div class="placeholder">Home Content3</div>
      <div class="placeholder">
        {{ message }}
        <input type="text" v-model="message1" @change="handleMessageChange"/>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import './index.styl';

  import SiteHeader from '../../components/site-header';
  import SiteFooter from '../../components/site-footer';
  export default {
    computed: {
      ...mapGetters([
        'message'
      ])
    },
    data: function () {
      return {
        msg: 'Home',
        message1: 'Hello!'
      }
    },
    mounted () {
      console.log('mounted');
    },
    methods: {
      handleMessageChange () {
        console.log(this.message1);
        this.$store.dispatch('setMessage', this.message1);
      }
    },
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>
