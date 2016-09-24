<template lang="html">
  <div class="message">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'Hello from vue-loader'
      }
    }
  }
</script>

<style lang="css">
  .message {
    color: #f80;
    font-size: 14px;
    font-weight: bold;
  }
</style>
