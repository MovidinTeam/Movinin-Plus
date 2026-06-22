// Datos de métodos de pago para seed
export const seedPaymentMethods = async () => {
  const paymentMethods = [
    {
      name: 'Stripe',
      type: 'card',
      country: 'International',
      isActive: true,
      fees: 2.9,
      currencies: ['USD', 'EUR']
    },
    {
      name: 'PayPal',
      type: 'wallet',
      country: 'International',
      isActive: true,
      fees: 3.49,
      currencies: ['USD', 'EUR', 'PEN']
    },
    {
      name: 'Yape',
      type: 'mobile_wallet',
      country: 'Perú',
      isActive: true,
      fees: 1.0,
      currencies: ['PEN']
    },
    {
      name: 'Plin',
      type: 'mobile_wallet',
      country: 'Perú',
      isActive: true,
      fees: 0.5,
      currencies: ['PEN']
    },
    {
      name: 'Transferencia Bancaria',
      type: 'bank_transfer',
      country: 'Perú',
      isActive: true,
      fees: 0,
      currencies: ['PEN']
    }
  ]

  console.log(`  ✓ ${paymentMethods.length} métodos de pago definidos`)
  return paymentMethods
}
