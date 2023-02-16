const { fetch: originalFetch } = window

window.fetch = async (resource: any, config: any) => {
  if(!config.headers) config.headers = {}
  config.headers['Content-Type'] = 'application/json'
  config.headers['Access-Control-Allow-Origin'] = '*'

  const response: Response = await originalFetch(resource, config)
  if (!response.ok) {
    console.error('Error api: ', response.body)
    return Promise.reject(response)
  }

  return response
}
