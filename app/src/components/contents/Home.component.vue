<template>
  <div class="row">
    <div class="col-md-12 mb-4 text-center">
      <div class="header">
        <h1>Pico y placa</h1>
        {{ `${dayName}, ${dayNumber} de ${monthName} de ${year}` }}
      </div>
    </div>
    <div class="col-md-12 mt-2">&nbsp;</div>
    <FilterRestrictionsComponent />
    <RestrictionsComponent />
    <MessageComponentVue />
    <div class="col-md-12 mb-4">&nbsp;</div>
    <div v-if="loading" class="loading">Loading&#8230;</div>
  </div>
</template>

<script lang="ts">
import CitiesService from '@/services/Cities.service'
import TypesService from '@/services/Types.service'
import RestrictionService from '@/services/Restrictions.service'
import { onMounted, provide, ref } from 'vue'
import FilterRestrictionsComponent from './FilterRestrictions.component.vue'
import RestrictionsComponent from './Restrictions.component.vue'
import MessageComponentVue from './Message.component.vue'
import TypeModel from '@/models/Type.model'
import CityModel from '@/models/City.model'

export default ({
  name: 'HomeComponent',
  setup() {
    const citiesService = new CitiesService()
    const typesService = new TypesService()
    const restrictionService = new RestrictionService()

    const days: Array<string> = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    const months: Array<string> = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const dayName = ref(days[new Date().getDay()])
    const monthName = ref(months[new Date().getMonth()])
    const dayNumber = ref(new Date().getDate())
    const year = ref(new Date().getFullYear())
    const loading = ref(true)
    const currentDate = new Date().toISOString().slice(0, 10)

    const state = {
      cities: ref([]),
      types: ref([]),
      number: ref(-1),
      date: ref(currentDate),
      restrictions: ref([])
    }

    onMounted(() => {
      const promiseCities = citiesService.getAll()
        .then(res => res.json())
        .then(({ data }) => {
          state.cities.value = data
        })

        const promiseTypes = typesService.getAll()
        .then(res => res.json())
        .then(({ data }) => {
          const typesArray: Array<TypeModel> = []
          typesArray.push({
            Id: -1,
            TypeName: "Todos",
            TypeDescription: "Todos",
            Status: true
          })
          state.types.value = typesArray.concat(data) as []
        })

      Promise.all([promiseCities, promiseTypes])
        .then(() => {
          restrictionService.getAll()
            .then((res) => res.json())
            .then(({ data }) => {
              state.restrictions.value = data
              state.restrictions.value = data.map(item => {
                const cities = state.cities.value as CityModel[]
                const types = state.types.value as TypeModel[]
                return { ...item, City: cities.find(x => x.Id == item.CityId), Type: types.find(x => x.Id == item.TypeId) }
              })

              loading.value = false
            })
        })
        .catch(err => {
          console.error(err)
        })
    })

    provide('state', state)

    return {
      dayName,
      monthName,
      dayNumber,
      year,
      loading
    }
  },
  components: {
    FilterRestrictionsComponent,
    RestrictionsComponent,
    MessageComponentVue
  }
})
</script>

<style scoped>
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