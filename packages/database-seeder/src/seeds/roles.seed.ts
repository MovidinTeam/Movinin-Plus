// Definir roles base del sistema
export const seedRoles = async () => {
  const roles = [
    {
      name: 'admin',
      description: 'Administrador del sistema',
      permissions: ['all']
    },
    {
      name: 'agency',
      description: 'Agencia propietaria',
      permissions: ['manage_properties', 'view_bookings', 'view_analytics']
    },
    {
      name: 'user',
      description: 'Usuario estándar',
      permissions: ['view_properties', 'create_booking', 'view_profile']
    }
  ]

  console.log(`  ✓ ${roles.length} roles definidos`)
  return roles
}
