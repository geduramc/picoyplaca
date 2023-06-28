<template>
  <FilterRestrictionsComponent :cities="cities" :types="types" @select-city="selectedCity" @select-type="selectedType" @select-date="selectedDate" />
  <span class="separator"></span>
  <RestrictionsComponent :restrictions="filteredRestrictions" />
  <div v-if="loading" class="loading">Loading&#8230;</div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import FilterRestrictionsComponent from './FilterRestrictions.component.vue'
import RestrictionsComponent from './Restrictions.component.vue'
import RestrictionModel from '@/models/Restriction.model'
import CityModel from '@/models/City.model'
import TypeModel from '@/models/Type.model'
import { restrictionsService } from '@/services/Restrictions.service'
import { citiesService } from '@/services/Cities.service'
import { typesService } from '@/services/Types.service'

export default {
  name: 'HomeComponent',
  setup() {
    const loading = ref(true)
    const restrictions = ref([] as RestrictionModel[])
    const filteredRestrictions = ref([] as RestrictionModel[])
    const cities = ref([] as CityModel[])
    const types = ref([] as TypeModel[])
    const filters = ref({
      date: new Date().toISOString().slice(0, 10),
      city: 0,
      type: 0
    })

    const restrictionsPromise = restrictionsService.getAll()
      .then(res => res.json())
      .then(({ data }) => {
        restrictions.value = data.filter(x => x.Status == 1)
      })

      const citiesPromise = citiesService.getAll()
      .then(res => res.json())
      .then(({ data }) => {
        cities.value = data
      })

      const typesPromise = typesService.getAll()
      .then(res => res.json())
      .then(({ data }) => {
        data.unshift({
          Id: 0,
          TypeName: 'Todos',
          TypeDescription: 'Todos'
        })
        types.value = data
      })

    Promise.all([restrictionsPromise, citiesPromise, typesPromise])
      .then(() => {
        loading.value = false
      })

    const selectedCity = (data) => {
      filters.value.city = (data) ? data.Id : 0
    }

    const selectedType = (data) => {
      filters.value.type = data.Id
    }

    const selectedDate = (data) => {
      filters.value.date = data
    }

    const pad = (number) => {
      return ('0' + number).slice(-2) 
    } 

    watch(filters.value, () => {
      if(filters.value.city <= 0){
        filteredRestrictions.value = []
        return
      }

      let data = [...restrictions.value]
      data = data.filter(x => x.CityId == filters.value.city)
      if(filters.value.type > 0) data = data.filter(x => x.TypeId == filters.value.type)
      data = data.filter(x => filters.value.date >= x.StartDate && filters.value.date <= x.EndDate)
      data = data.filter(x => x.DayApply == new Date(filters.value.date.replace('-', '/')).getDay())

      filteredRestrictions.value = data.map(restriction => {
        const city = cities.value.find(x => x.Id == restriction.CityId)
        const type = types.value.find(x => x.Id == restriction.TypeId)

        const starTime = Number(restriction.StartTime.replace(/^0+/, '').replaceAll(':',''))
        const endTime = Number(restriction.EndTime.replace(/^0+/, '').replaceAll(':',''))
        const currentTime = Number(`${pad(new Date().getHours())}${pad(new Date().getMinutes())}${pad(new Date().getSeconds())}`.replace(/^0+/, ''))

        const labelClass = (filters.value.date == new Date().toISOString().slice(0, 10)) ? (currentTime >= starTime && currentTime <= endTime) ? 'danger' : 'success' : ''
        const labelText = (filters.value.date == new Date().toISOString().slice(0, 10)) ? (currentTime >= starTime && currentTime <= endTime) ? 'EN HORARIO' : 'FUERA DE HORARIO' : ''

        return {...restriction, City: city, Type: type, TimeLabel: { class: labelClass, text: labelText }}
      })
    })

    return {
      loading,
      cities,
      types,
      filteredRestrictions,
      selectedDate,
      selectedCity,
      selectedType
    }
  },
  components: {
    FilterRestrictionsComponent,
    RestrictionsComponent
  }
}
</script>

<style scoped>
</style>
