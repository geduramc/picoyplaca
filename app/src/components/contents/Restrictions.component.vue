<template>
  <div v-if="!noData" v-for="restriction in restrictions" class="col-md-8 offset-md-2">
    <div class="card bg-secondary mt-4 border-dark text-center">
      <div class="card-header">
        <h4><i :class="restriction.Type?.Icon"></i> {{ restriction.Type?.TypeName }}</h4>
      </div>
      <div class="card-body">
        <h6 class="card-title">Restricción para placas terminadas en</h6>
        <div class="placa">
          <p class="card-text restriction-values">{{ restriction.RestrictionValues }}</p>
        </div>
        <h6 class="card-title mb-1">
          Horario: {{ `${restriction.StartTime} a ${restriction.EndTime}` }}
        </h6>
        <span class="badge" v-bind:class="restriction.TimeLabel?.class">{{ restriction.TimeLabel?.text }}</span>
      </div>
    </div>
  </div>
  <div v-if="noData" class="alert alert-danger col-md-8 offset-md-2 mt-4" role="alert">
    Sin restricciones para la fecha...
  </div>
</template>
<script lang="ts">
import CityModel from '@/models/City.model'
import RestrictionModel from '@/models/Restriction.model'
import TypeModel from '@/models/Type.model'
import { inject, ref, watch } from 'vue'

export default {
  name: 'RestrictionsComponent',
  setup() {
    const state: any = inject('state')
    const restrictionsRef = ref(state.restrictions as RestrictionModel[])
    const restrictions = ref([] as RestrictionModel[])
    const cities = ref(state.cities as CityModel[])
    const types = ref(state.types as TypeModel[])
    const noData = ref(true)
    const currentDate = new Date().toISOString().slice(0, 10)

    function changeTimeZone(date, timeZone) {
      return new Date(
        date.toLocaleString('en-US', {
          timeZone,
        }),
      )
    }

    const cityFilter = () => {
      restrictions.value = restrictionsRef.value
      const citySelected = cities.value.find(x => x.Selected)
      if (citySelected) {
        restrictions.value = restrictions.value.filter(x =>
          x.CityId == citySelected?.Id
          && Date.parse(currentDate) >= Date.parse(x.StartDate)
          && Date.parse(currentDate) <= Date.parse(x.EndDate)
          && x.DayApply == new Date().getDay()
        )
      }
      noData.value = (restrictions.value.length <= 0) || (citySelected === undefined) || false

      //set time-label
      restrictions.value = restrictions.value.map(item => {
        // const currentTime = new Date().getTime()
        const currentTime = changeTimeZone(new Date(), 'America/Bogota').getTime()
        const startTime = changeTimeZone(new Date(`${currentDate} ${item.StartTime}`), 'America/Bogota').getTime()
        const endTime = changeTimeZone(new Date(`${currentDate} ${item.EndTime}`), 'America/Bogota').getTime()

        const labelClass = (currentTime >= startTime && currentTime <= endTime) ? 'danger' : 'success'
        const labelText = (currentTime >= startTime && currentTime <= endTime) ? 'EN HORARIO' : 'FUERA DE HORARIO'

        return { ...item, TimeLabel: { class: `badge-${labelClass}`, text: labelText } }
      })
    }

    watch(() => state.cities.value, () => {
      cityFilter()
    })

    watch(() => state.types.value, () => {
      cityFilter()
      const typeSelected = types.value.find(x => x.Selected)
      if (typeSelected && typeSelected.Id > 0) {
        if (typeSelected) restrictions.value = restrictions.value.filter(x => x.TypeId == typeSelected?.Id)
      }
      noData.value = (restrictions.value.length <= 0) || (typeSelected === undefined) || false
    })

    return {
      restrictions,
      cities,
      noData
    }
  }
}
</script>
<style scoped>
.card {
  width: 100%;
}

.restriction-values {
  font-size: 2rem;
}

h6 .card-title {
  font-size: 12px;
}

.placa {
  width: 80px;
  border: solid 5px;
  border-radius: 9px;
  margin: 0 auto;
  margin-bottom: 1rem;
}

.placa p {
  font-weight: 900;
  font-size: 20px;
}
</style>