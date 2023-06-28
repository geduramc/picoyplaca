<template>
  <div class="restrictions">
    <article class="card" v-for="restriction in restrictions as RestrictionModel[]">
      <h4><i :class="restriction.Type?.Icon"></i> {{ restriction.Type?.TypeName }}</h4>
      <h6 class="card-title">Restricción para placas terminadas en</h6>
      <span class="placa">
        {{ restriction.RestrictionValues }}
      </span>
      <h6 class="card-title mb-1">
        Horario: {{ `${restriction.StartTime} a ${restriction.EndTime}` }}
      </h6>
    </article>
    <blockquote v-if="restrictions && restrictions.length <= 0">
      <p>Sin restricciones para la fecha...</p>
    </blockquote>
  </div>
</template>
<script lang="ts">
import RestrictionModel from '@/models/Restriction.model'

export default {
  name: 'RestrictionsComponent',
  props: {
    restrictions: Array
  },
  setup() {
    return {
      
    }
  }
}
</script>
<style scoped>
.restrictions {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 0rem 4rem 0rem;
}

blockquote {
  border-inline-start: 0.35rem solid #d81b60;
}

article {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: .2rem;
  justify-items: center;
  align-items: center;
}

h6 .card-title {
  font-size: 12px;
}

.placa {
  border: solid 5px;
  border-radius: 9px;
  font-weight: 900;
  font-size: 20px;
  padding: .5rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}

@media only screen and (max-device-width: 480px) {
  .cards {
    padding: 0rem;
  }
}
</style>