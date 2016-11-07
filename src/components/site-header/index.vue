/**
 * Site Header
 */

<template lang="html">
  <header class="site-header">
    <div class="site-header-container">
      <div class="logo">
        <h1 class="text-logo"><a v-link="{path: '/'}">Vue Webpack</a></h1>
      </div>
      <ul class="top-menu">
        <li><a v-link="{path: '/'}">Home</a></li>
        <li><a v-link="{path: '/page1'}">Page1</a></li>
        <li><a v-link="{path: '/page2'}">Page2</a></li>
      </ul>
      <ul class="top-menu top-login">
        <li><a v-link="{path: '/login'}">Login</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
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
