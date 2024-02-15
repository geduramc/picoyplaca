const getAll = (): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/types`, { method: 'GET' })
}

const getById = (id: number): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/types/${id}`, { method: 'GET' })
}

export const typesService = { getAll, getById }
