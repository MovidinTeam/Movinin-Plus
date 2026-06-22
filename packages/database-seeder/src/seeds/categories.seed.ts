// Datos de categorías para seed
export const seedCategories = async () => {
  const categories = [
    {
      name: 'Departamento',
      description: 'Apartamentos y departamentos',
      icon: 'apartment'
    },
    {
      name: 'Casa',
      description: 'Casas y viviendas unifamiliares',
      icon: 'home'
    },
    {
      name: 'Studio',
      description: 'Studios y espacios pequeños',
      icon: 'studio'
    },
    {
      name: 'Oficina',
      description: 'Espacios de oficina',
      icon: 'office'
    },
    {
      name: 'Local Comercial',
      description: 'Locales comerciales',
      icon: 'shop'
    }
  ]

  console.log(`  ✓ ${categories.length} categorías definidas`)
  return categories
}
