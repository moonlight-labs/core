declare global {
  interface Array<T> {
    sample(): T
  }
}

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)]
}

export async function mockLines({count = 15}): Promise<any> {
  try {
    const { faker } = await import('@faker-js/faker')
    return Array.from({length: count}, () => ({
      // standard attributes
      id: faker.datatype.uuid(),
      account: faker.datatype.uuid(),
      scope: faker.datatype.uuid(),
      code: ['payment', 'transfer', 'spend'].sample(),
      amount: {
        amount: faker.commerce.price(1, 1000, 0),
        formatted_amount: faker.commerce.price(1, 1000, 0, '$'),
        currency: {
          code: 'EQD',
          symbol: '$',
        },
      },
      balance: {
        amount: faker.commerce.price(1, 1000, 0),
        formatted_amount: faker.commerce.price(1, 1000, 0, '$'),
        currency: {
          code: 'EQD',
          symbol: '$',
        },
      },
      partnerAccount: faker.datatype.uuid(),
      partnerScope: faker.datatype.uuid(),
      partnerId: faker.datatype.uuid(),
      detailId: faker.datatype.uuid(),
      detailType: ['PaymentItem::1', 'PaymentItem::2'].sample(),
      // TODO improve metadata fake data
      metadata: { key1: ['value 1', 'value 2'], key2: 'value 3' },
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}