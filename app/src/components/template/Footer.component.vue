<template>
  <footer>
    <a href="https://geduramc.com" target="_blank">By @geduramc</a>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  setup() {
    return {
    }
  }
}
</script>
<style scoped>
a {
  color: var(--text-primary) !important;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>