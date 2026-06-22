import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { seedUsers } from './seeds/users.seed.js'
import { seedProperties } from './seeds/properties.seed.js'
import { seedCategories } from './seeds/categories.seed.js'
import { seedPaymentMethods } from './seeds/paymentMethods.seed.js'
import { seedRoles } from './seeds/roles.seed.js'

dotenv.config()

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movinin'
    await mongoose.connect(mongoURI)
    console.log('✅ MongoDB conectado correctamente')
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error)
    process.exit(1)
  }
}

const runSeeds = async () => {
  try {
    console.log('🌱 Iniciando carga de datos...\n')

    console.log('📋 Cargando roles...')
    await seedRoles()

    console.log('👥 Cargando usuarios...')
    await seedUsers()

    console.log('🏠 Cargando propiedades...')
    await seedProperties()

    console.log('📂 Cargando categorías...')
    await seedCategories()

    console.log('💳 Cargando métodos de pago...')
    await seedPaymentMethods()

    console.log('\n✅ ¡Todos los datos cargados exitosamente!')
  } catch (error) {
    console.error('❌ Error durante la carga de datos:', error)
    process.exit(1)
  } finally {
    await mongoose.disconnect()
    console.log('🔌 Conexión a MongoDB cerrada')
  }
}

const main = async () => {
  await connectDB()
  await runSeeds()
}

main()
