import { Ref, ref } from 'vue'
import TypeModel from '@/models/Type.model'

export default class TypesService {
  private api_url: string = import.meta.env.VITE_API_URL
  private type: Ref<TypeModel>
  private types: Ref<Array<TypeModel>>

  constructor() {
    this.type = ref<TypeModel>({} as TypeModel)
    this.types = ref<Array<TypeModel>>([])
  }

  getType(): Ref<TypeModel> {
    return this.type
  }

  getTypes(): Ref<Array<TypeModel>> {
    return this.types
  }

  getAll(): Promise<Response> {
    return fetch(`${this.api_url}/api/types`, { method: 'GET' })
  }

  getById(id: number): Promise<Response> {
    return fetch(`${this.api_url}/api/types/${id}`, { method: 'GET' })
  }
}
