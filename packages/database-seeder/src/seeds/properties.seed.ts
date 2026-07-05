// Datos de propiedades para seed
export const seedProperties = async () => {
  const properties = [
    {
      name: 'Departamento Centro Arequipa',
      description: 'Hermoso departamento en el centro de Arequipa',
      location: 'Arequipa, Perú',
      price: 1500,
      currency: 'PEN',
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      amenities: ['wifi', 'parking', 'kitchen'],
      status: 'active'
    },
    {
      name: 'Casa Familiar Cerro Colorado',
      description: 'Casa spaciosa con jardín',
      location: 'Cerro Colorado, Arequipa',
      price: 2500,
      currency: 'PEN',
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      amenities: ['wifi', 'parking', 'garden', 'pool'],
      status: 'active'
    },
    {
      name: 'Studio Independencia',
      description: 'Studio moderno y cómodo',
      location: 'Independencia, Arequipa',
      price: 800,
      currency: 'PEN',
      bedrooms: 1,
      bathrooms: 1,
      area: 40,
      amenities: ['wifi', 'kitchen'],
      status: 'active'
    }
  ]

  console.log(`  ✓ ${properties.length} propiedades definidas`)
  return properties
}
