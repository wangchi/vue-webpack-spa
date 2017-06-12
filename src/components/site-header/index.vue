/**
 * Site Header
 */

<template lang="html">
  <header class="site-header">
    <div class="site-header-container">
      <div class="logo">
        <h1 class="text-logo">
          <router-link :to="{ path: '/' }">Vue Webpack</router-link>
        </h1>
      </div>
      <ul class="top-menu">
        <li><router-link :to="{ path: '/' }">Home</router-link></li>
        <li><router-link :to="{ path: '/page1' }">Page1</router-link></li>
        <li><router-link :to="{ path: '/page2' }">Page2</router-link></li>
      </ul>
      <ul class="top-menu top-login">
        <!-- you can also use name -->
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
  import './index.styl';

  export default {
    data () {
      return {}
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: {}
  }
</script>
