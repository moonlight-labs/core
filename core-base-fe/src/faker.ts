export let faker: any = (globalThis as { faker?: any })?.faker
if (faker === undefined) {
  import('@faker-js/faker')
    .then(({ default: _faker }) => {
      faker = _faker
    })
    .catch(() => {
      console.warn('faker requested but could not load')
    })
}

