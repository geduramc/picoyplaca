<template>
  <div class="col-md-4 offset-md-2">
    <div class="form-group">
      <label for="cityList">Ciudad</label>
      <div class="dropdown" id="cityList">
        <button class="btn btn-secondary dropdown-toggle form-control" type="button" data-toggle="dropdown"
          aria-expanded="false" :disabled="cities.length <= 0">
          {{ selectedCity.CityName || "Ciudad" }}
        </button>
        <div class="dropdown-menu">
          <a v-for='city in cities' class="dropdown-item" :key="city.Id" :item="city.Id" @click="selectCity">
            {{ city.CityName }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-group">
      <label for="typeList">Tipo</label>
      <div class="dropdown" id="typeList">
        <button class="btn btn-secondary dropdown-toggle form-control" type="button" data-toggle="dropdown"
          aria-expanded="false" :disabled="isDisabled || types.length <= 0">
          {{ selectedType.TypeName || "Tipo" }}
        </button>
        <div class="dropdown-menu">
          <a v-for='item in types' class="dropdown-item" :key="item.Id" :item="item.Id" @click="selectType">
            {{ item.TypeName }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref } from 'vue'
import CityModel from '@/models/City.model'
import TypeModel from '@/models/Type.model'

export default {
  name: "FilterRestrictionsComponent",
  setup() {
    const state: any = inject('state')
    const cities = ref(state.cities as CityModel[])
    const selectedCity = ref({} as CityModel)
    const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const selectedNum = ref(-1)
    const types = ref(state.types as TypeModel[])
    const selectedType = ref({} as TypeModel)
    const isDisabled = ref(true)

    const selectCity = (event) => {
      selectedCity.value = cities.value.find(x => x.Id == event.target.getAttribute('item')) as CityModel
      cities.value = cities.value.map(item => {
        if (item.Id == event.target.getAttribute('item')) return { ...item, Selected: true }
        else return { ...item, Selected: false }
      })

      if (selectedCity.value.Id > 0) isDisabled.value = false
      selectedType.value = {} as TypeModel
    }

    const selectType = (event) => {
      selectedType.value = types.value.find(x => x.Id == event.target.getAttribute('item')) as TypeModel
      types.value = types.value.map(item => {
        if (item.Id == event.target.getAttribute('item')) return { ...item, Selected: true }
        else return { ...item, Selected: false }
      })
    }

    const selectNum = (event) => {
      selectedNum.value = event.target.getAttribute('item')
    }

    return {
      cities,
      selectedCity,
      types,
      selectedType,
      numbers,
      selectedNum,
      isDisabled,
      selectCity,
      selectType,
      selectNum
    }
  }
}
</script>
<style scoped></style>
