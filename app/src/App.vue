<template>
  <main>
    <div class="container general-container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent/>
</template>

<script lang="ts">
  import FooterComponent from '@/components/template/Footer.component.vue'

  export default {
    name: "App",
    components: {
      FooterComponent
    }
}
</script>

<style>
@import '@/assets/theme/base.css';
</style>
