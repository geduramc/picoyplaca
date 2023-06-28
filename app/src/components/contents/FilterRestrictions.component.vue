<template>
  <div class="filters">
    <p>
      <label>Fecha</label>
      <input type="date" class="form-control datepicker" v-bind:min="currentDate" v-model="selectedDate" v-on:change="selectDate">
    </p>
    <div class="selects">
      <p>
        <label>Ciudad</label>
        <select :disabled="!cities || cities.length <= 0" v-on:change="selectCity">
          <option value="-1">--Seleccionar--</option>
          <option v-for='city in (cities as CityModel[])' :key="city.Id" :value="city.Id">{{ city.CityName }}</option>
        </select>
      </p>
      <p>
        <label>Tipo</label>
        <select :disabled="!types || types.length <= 0" v-on:change="selectType">
          <option v-for='item in (types as TypeModel[])' :key="item.Id" :value="item.Id">{{ item.TypeName }}</option>
        </select>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import CityModel from '@/models/City.model'
import TypeModel from '@/models/Type.model'

export default {
  name: "FilterRestrictionsComponent",
  props: {
    cities: Array,
    types: Array
  },
  emits: ['selectCity', 'selectType', 'selectDate'],
  setup(props, { emit }) {
    const isDisabled = ref(true)
    const currentDate = new Date().toISOString().slice(0, 10)
    const selectedDate = ref(currentDate)

    const selectCity = (event) => {
      const data = props.cities as CityModel[]
      emit('selectCity', data.find(x => x.Id == event.target.value))
    }

    const selectType = (event) => {
      const data = props.types as TypeModel[]
      emit('selectType', data.find(x => x.Id == event.target.value))
    }

    const selectDate = (event) => {
      emit('selectDate', event.target.value)
    }

    return {
      isDisabled,
      currentDate,
      selectedDate,
      selectCity,
      selectType,
      selectDate
    }
  }
}
</script>
<style scoped>
.filters {
  padding: 0rem 6rem 0rem;
}
.selects {
  display: flex;
  justify-content: space-between;
}

input[type=date] {
  min-width: 100%;
}

select {
  min-width: 240px;
}

@media only screen and (max-device-width: 480px) {
  .filters {
    padding: 0rem;
  }

  select {
    min-width: 160px;
  }
}
</style>
