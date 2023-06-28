const getAll = (): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/cities`, { method: 'GET' })
}

const getById = (id: number): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/cities/${id}`, { method: 'GET' })
}

export const citiesService = { getAll, getById }
