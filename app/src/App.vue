<template>
  <HeaderComponent/>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent/>
</template>

<script lang="ts">
  import FooterComponent from '@/components/template/Footer.component.vue'
  import HeaderComponent from '@/components/template/Header.component.vue'

  export default {
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent
    }
}
</script>

<style>
@import '@/assets/theme/base.css';
</style>
