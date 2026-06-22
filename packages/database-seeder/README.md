# Database Seeder

Herramienta de inicialización y carga automática de datos para Movinin-Plus.

## 🚀 Características

- ✅ Carga automática de datos iniciales
- ✅ Configuración basada en variables de entorno
- ✅ Soporte para múltiples entidades (usuarios, propiedades, métodos de pago, etc.)
- ✅ Validación de conexión a MongoDB
- ✅ Logs informativos del proceso

## 📋 Datos que carga

- **Roles**: Admin, Agency, User
- **Usuarios**: Administrador, agencias y usuarios de prueba
- **Propiedades**: Departamentos, casas, studios
- **Categorías**: Tipos de propiedades
- **Métodos de Pago**: Stripe, PayPal, Yape, Plin, Transferencia Bancaria

## 🔧 Instalación

```bash
npm install
```

## ⚙️ Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Configura tu `MONGODB_URI`:
```env
MONGODB_URI=mongodb://localhost:27017/movinin
```

## 🏃 Uso

Compilar TypeScript:
```bash
npm run build
```

Ejecutar seeds:
```bash
npm run seed
```

Modo desarrollo (watch):
```bash
npm run dev
```

Limpiar archivos compilados:
```bash
npm run clean
```

## 📁 Estructura

```
packages/database-seeder/
├── src/
│   ├── index.ts                 # Punto de entrada principal
│   └── seeds/
│       ├── roles.seed.ts        # Datos de roles
│       ├── users.seed.ts        # Datos de usuarios
│       ├── properties.seed.ts   # Datos de propiedades
│       ├── categories.seed.ts   # Datos de categorías
│       └── paymentMethods.seed.ts # Métodos de pago
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 📊 Ejemplo de salida

```
🌱 Iniciando carga de datos...

📋 Cargando roles...
  ✓ 3 roles definidos
👥 Cargando usuarios...
  ✓ 4 usuarios definidos
🏠 Cargando propiedades...
  ✓ 3 propiedades definidas
📂 Cargando categorías...
  ✓ 5 categorías definidas
💳 Cargando métodos de pago...
  ✓ 5 métodos de pago definidos

✅ ¡Todos los datos cargados exitosamente!
🔌 Conexión a MongoDB cerrada
```

## 📝 Próximos pasos

- [ ] Integrar con modelos Mongoose reales
- [ ] Agregar más datos de prueba
- [ ] Implementar validaciones
- [ ] Agregar opción de limpiar datos antes de seed
- [ ] Agregar tests

## 📄 Licencia

MIT
