import { Ref, ref } from 'vue'
import RestrictionModel from '@/models/Restriction.model'

export default class RestrictionService {
  private api_url: string = import.meta.env.VITE_API_URL
  private restriction: Ref<RestrictionModel>
  private restrictions: Ref<Array<RestrictionModel>>

  constructor() {
    this.restriction = ref<RestrictionModel>({} as RestrictionModel)
    this.restrictions = ref<Array<RestrictionModel>>([])
  }

  getRestriction(): Ref<RestrictionModel> {
    return this.restriction
  }

  getRestrictions(): Ref<Array<RestrictionModel>> {
    return this.restrictions
  }

  getAll(): Promise<Response> {
    return fetch(`${this.api_url}/api/restrictions`, { method: 'GET' })
  }

  getById(id: number): Promise<Response> {
    return fetch(`${this.api_url}/api/restrictions/${id}`, { method: 'GET' })
  }
}
