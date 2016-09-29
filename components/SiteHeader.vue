<template lang="html">
  <header class="site-header">
    <div class="site-header-container">
      <div class="logo">
        <h1 class="text-logo"><a v-link="{path: '/'}">React Webpack</a></h1>
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

<style lang="sass">
.site-header {
  width: 100%;
  height: 60px;
  border-bottom: 1px rgba(255, 255, 255, 0.15) solid;
  background-color: #24282C;

  .site-header-container {
    margin: 0 auto;
    width: 1200px;
    background-color: #24282C;
    overflow: hidden;

    .logo {
      float: left;
      .text-logo {
        font-size: 22px;
        line-height: 60px;

        a {
          color: #fff;
          &:hover {
            opacity: .8;
          }
        }
      }
    }

    .top-menu {
      float: left;
      margin-left: 100px;
    }

    li {
      float: left;
      a {
        display: block;
        padding: 0 20px;
        line-height: 60px;
        color: #fff;

        &:hover {
          opacity: .8;
        }
      }
    }

    .top-login {
      float: right;
    }
  }
}
</style>
