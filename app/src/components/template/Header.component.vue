<template>
  <header>
    <div class="header">
      <h1>Pico y Placa</h1>
      {{ `${dayName}, ${dayNumber} de ${monthName} de ${year}` }}
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'FooterComponent',
  setup() {
    const days: Array<string> = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    const months: Array<string> = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const dayName = ref(days[new Date().getDay()])
    const monthName = ref(months[new Date().getMonth()])
    const dayNumber = ref(new Date().getDate())
    const year = ref(new Date().getFullYear())

    return {
      dayName,
      monthName,
      dayNumber,
      year
    }
  }
}
</script>
<style scoped>
header {
  margin-top: 2rem;
  text-align: center;
}
.header {
  width: 300px;
  border: solid 5px;
  border-radius: 9px;
  padding: 15px;
  margin: 0 auto;
  font-weight: 900;
}

.header h1 {
  font-weight: 900;
}
</style>
