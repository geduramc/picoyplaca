export default (): any => {
  return [
    {
      object: 'Cities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/cities',
          description: 'returns active cities (Status = 1)'
        },
        {
          method: 'GET',
          path: '/api/cities/all',
          description: 'returns all cities'
        },
        {
          method: 'GET',
          path: '/api/cities/:id',
          description: 'returns city by id'
        }
      ]
    },
    {
      object: 'Types',
      endpoints: [
        {
          method: 'GET',
          path: '/api/types',
          description: 'returns active types (Status = 1)'
        },
        {
          method: 'GET',
          path: '/api/types/all',
          description: 'returns all types'
        },
        {
          method: 'GET',
          path: '/api/types/:id',
          description: 'returns type by id'
        }
      ]
    },
    {
      object: 'Restrictions',
      endpoints: [
        {
          method: 'GET',
          path: '/api/restrictions',
          description: 'returns active restrictions (Status = 1)'
        },
        {
          method: 'GET',
          path: '/api/restrictions/all',
          description: 'returns all restrictions'
        },
        {
          method: 'GET',
          path: '/api/restrictions/getByCityType',
          description: 'returns restrictions by idCity and idType'
        }
      ]
    }
  ]
}
