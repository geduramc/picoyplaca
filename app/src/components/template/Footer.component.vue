<template>
  <footer>
    <div class="row">
      <div class="col-md-6 copy">
        By @geduramc &#9749;
      </div>
      <div class="col-md-6 text-right">
        <button type="button" class="btn custom-tooltip left" data-toggle="modal"
          data-target="#message-modal">
          <i class="fa-solid fa-envelope"></i>
          <span class="tooltip-text">Ayudanos a mejorar!</span>
        </button>
      </div>
    </div>
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
img {
  width: 20px;
}

.btn {
  background-color: var(--default-btn-color);
  border-color: var(--default-btn-color);
  border-radius: 50%;
  color: var(--text-primary);
}

.btn :hover{
  opacity: 0.5;
}

@media only screen and (max-device-width: 640px) {
  .btn {
    top: 10px;
    position: fixed;
    right: 10px;
  }

  .tooltip-text{
    display: none;
  }

  .copy {
    text-align: center;
  }
}
</style>