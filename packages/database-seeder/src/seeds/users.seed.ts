// Datos de usuarios para seed
export const seedUsers = async () => {
  const users = [
    {
      email: 'admin@movinin.com',
      fullname: 'Administrator',
      phone: '+51987654321',
      role: 'admin',
      verified: true,
      language: 'es'
    },
    {
      email: 'agency@movinin.com',
      fullname: 'Agencia Principal',
      phone: '+51987654322',
      role: 'agency',
      verified: true,
      language: 'es'
    },
    {
      email: 'user1@movinin.com',
      fullname: 'Juan Pérez',
      phone: '+51987654323',
      role: 'user',
      verified: true,
      language: 'es'
    },
    {
      email: 'user2@movinin.com',
      fullname: 'María García',
      phone: '+51987654324',
      role: 'user',
      verified: true,
      language: 'es'
    }
  ]

  console.log(`  ✓ ${users.length} usuarios definidos`)
  return users
}
