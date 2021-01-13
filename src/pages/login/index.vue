<template lang="html">
  <div class="content">
    <div class="login placeholder">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import './index.styl';

export default {
  data() {
    return {
      msg: 'Login',
    };
  },
};
</script>
