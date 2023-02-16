import { Ref, ref } from 'vue'
import CityModel from '@/models/City.model'

export default class CitiesService {
  private api_url: string = import.meta.env.VITE_API_URL
  private city: Ref<CityModel>
  private cities: Ref<Array<CityModel>>

  constructor() {
    this.city = ref<CityModel>({} as CityModel)
    this.cities = ref<Array<CityModel>>([])
  }

  getCity(): Ref<CityModel> {
    return this.city
  }

  getCities(): Ref<Array<CityModel>> {
    return this.cities
  }

  getAll(): Promise<Response> {
    return fetch(`${this.api_url}/api/cities`, { method: 'GET' })
  }

  getById(id: number): Promise<Response> {
    return fetch(`${this.api_url}/api/cities/${id}`, { method: 'GET' })
  }
}
