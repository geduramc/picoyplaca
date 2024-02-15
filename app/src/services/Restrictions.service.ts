const getAll = (): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/restrictions`, { method: 'GET' })
}

const getById = (id: number): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/restrictions/${id}`, { method: 'GET' })
}

export const restrictionsService = { getAll, getById }
