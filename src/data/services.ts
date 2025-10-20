import { Service } from '../types';

export const services: Service[] = [
  // Lavado de Salas
  {
    id: 'sala-4-6',
    category: '🛋️ Lavado de Salas',
    name: 'Sala 4 a 6 plazas',
    price: 999
  },
  {
    id: 'sala-3',
    category: '🛋️ Lavado de Salas',
    name: 'Sala 3 plazas',
    price: 899
  },
  {
    id: 'sofa-cama',
    category: '🛋️ Lavado de Salas',
    name: 'Sofá cama',
    price: 899
  },
  {
    id: 'taburete',
    category: '🛋️ Lavado de Salas',
    name: 'Taburete',
    price: 299
  },
  {
    id: 'cojines',
    category: '🛋️ Lavado de Salas',
    name: 'Cojines',
    price: 35,
    unit: 'c/u'
  },

  // Lavado de Colchones
  {
    id: 'colchon',
    category: '🛏️ Lavado de Colchones',
    name: 'Cualquier tamaño',
    price: 699
  },
  {
    id: 'base-box',
    category: '🛏️ Lavado de Colchones',
    name: 'Base box',
    price: 499
  },
  {
    id: 'cabecera',
    category: '🛏️ Lavado de Colchones',
    name: 'Cabecera',
    price: 499
  },
  {
    id: 'pie-cama',
    category: '🛏️ Lavado de Colchones',
    name: 'Pie de cama',
    price: 499
  },

  // Interiores de Auto
  {
    id: 'auto-express',
    category: '🚗 Interiores de Auto',
    name: 'Paquete Express (solo asientos)',
    price: 899
  },
  {
    id: 'auto-plus',
    category: '🚗 Interiores de Auto',
    name: 'Paquete Plus (asientos + alfombra + tapetes + puertas)',
    price: 1199
  },
  {
    id: 'auto-premium',
    category: '🚗 Interiores de Auto',
    name: 'Paquete Premium (todo lo anterior + cajuela + techo)',
    price: 1499
  },

  // Interiores de Camioneta
  {
    id: 'camioneta-express',
    category: '🚙 Interiores de Camioneta',
    name: 'Paquete Express (solo asientos)',
    price: 1199
  },
  {
    id: 'camioneta-plus',
    category: '🚙 Interiores de Camioneta',
    name: 'Paquete Plus (asientos + alfombra + tapetes + puertas)',
    price: 1499
  },
  {
    id: 'camioneta-premium',
    category: '🚙 Interiores de Camioneta',
    name: 'Paquete Premium (todo lo anterior + cajuela + techo)',
    price: 1999
  },

  // Lavado de Sillas
  {
    id: 'silla-1',
    category: '🪑 Lavado de Sillas',
    name: '1 silla',
    price: 120
  },
  {
    id: 'sillas-6',
    category: '🪑 Lavado de Sillas',
    name: '6 sillas',
    price: 699
  },
  {
    id: 'banca-comedor',
    category: '🪑 Lavado de Sillas',
    name: 'Banca comedor',
    price: 199
  },
  {
    id: 'banco-barra',
    category: '🪑 Lavado de Sillas',
    name: 'Banco barra',
    price: 149
  },
  {
    id: 'silla-escritorio',
    category: '🪑 Lavado de Sillas',
    name: 'Silla de escritorio',
    price: 149
  },
  {
    id: 'silla-gamer',
    category: '🪑 Lavado de Sillas',
    name: 'Silla gamer o ejecutiva',
    price: 399
  },

  // Lavado de Alfombras
  {
    id: 'alfombra-1-10',
    category: '🧶 Lavado de Alfombras',
    name: '1 a 10 m²',
    price: 150,
    unit: '/m²',
    minPrice: 1500
  },
  {
    id: 'alfombra-11-50',
    category: '🧶 Lavado de Alfombras',
    name: '11 a 50 m²',
    price: 100,
    unit: '/m²'
  },
  {
    id: 'alfombra-51-200',
    category: '🧶 Lavado de Alfombras',
    name: '51 a 200 m²',
    price: 80,
    unit: '/m²'
  },
  {
    id: 'alfombra-201-500',
    category: '🧶 Lavado de Alfombras',
    name: '201 a 500 m²',
    price: 60,
    unit: '/m²'
  },
  {
    id: 'alfombra-501-1000',
    category: '🧶 Lavado de Alfombras',
    name: '501 a 1,000 m²',
    price: 40,
    unit: '/m²'
  },
  {
    id: 'alfombra-1001-5000',
    category: '🧶 Lavado de Alfombras',
    name: '1,001 a 5,000 m²',
    price: 30,
    unit: '/m²'
  },
  {
    id: 'alfombra-5000-plus',
    category: '🧶 Lavado de Alfombras',
    name: 'Más de 5,000 m²',
    price: 25,
    unit: '/m²',
    description: 'Negociable según contrato'
  },

  // Lavado de Tapetes
  {
    id: 'tapetes',
    category: '🪵 Lavado de Tapetes',
    name: 'Por metro cuadrado (m²)',
    price: 299,
    unit: '/m²'
  },

  // Extras
  {
    id: 'protector-antimanchas',
    category: '✨ Extras',
    name: 'Protector anti manchas',
    price: 499
  },
  {
    id: 'tratamiento-olores',
    category: '✨ Extras',
    name: 'Tratamiento contra malos olores',
    price: 299
  }
];