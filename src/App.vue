<template>
  <div id="app" class="app">
    <site-header />
    <router-view />
    <site-footer />
    <!--transition :name="transitionName">
    </transition-->
  </div>
</template>

<script>

import SiteHeader from './components/site-header';
import SiteFooter from './components/site-footer';

export default {
  data() {
    return {
      transitionName: ''
    };
  },

  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>
