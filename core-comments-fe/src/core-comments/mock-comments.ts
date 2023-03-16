import { faker } from '@faker-js/faker'

export const mockComments = ({ count = 15 }) =>
  Array.from({ length: count }, () => ({

    id: faker.datatype.uuid(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
  })
)