import { ServiceOrder, Team, Payment } from '../types';

export const mockTeams: Team[] = Array.from({ length: 20 }, (_, i) => ({
  id: `team-${i + 1}`,
  name: `Plantilla ${i + 1}`,
  members: [`Operador ${i + 1}A`, `Operador ${i + 1}B`],
  status: Math.random() > 0.3 ? 'available' : Math.random() > 0.5 ? 'busy' : 'offline',
  currentLocation: {
    lat: 19.4326 + (Math.random() - 0.5) * 0.1,
    lng: -99.1332 + (Math.random() - 0.5) * 0.1
  },
  efficiency: {
    responseTime: Math.floor(Math.random() * 60) + 15, // 15-75 minutos
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0-5.0
    completedOrders: Math.floor(Math.random() * 50) + 10,
    totalOrders: Math.floor(Math.random() * 60) + 15
  }
}));

export const mockOrders: ServiceOrder[] = [
  {
    id: 'order-1',
    clientName: 'María González',
    clientPhone: '+52 55 1234 5678',
    clientEmail: 'maria@email.com',
    address: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    services: [
      { serviceId: 'sala-4-6', quantity: 1, price: 999 },
      { serviceId: 'protector-antimanchas', quantity: 1, price: 499 }
    ],
    totalAmount: 1498,
    status: 'completed',
    assignedTeam: 'team-1',
    scheduledDate: '2024-01-15T10:00:00Z',
    completedDate: '2024-01-15T12:30:00Z',
    rating: 5,
    paymentStatus: 'paid',
    created_at: '2024-01-14T15:30:00Z'
  },
  {
    id: 'order-2',
    clientName: 'Carlos Rodríguez',
    clientPhone: '+52 55 9876 5432',
    clientEmail: 'carlos@email.com',
    address: 'Calle Reforma 567, Col. Juárez, CDMX',
    coordinates: { lat: 19.4285, lng: -99.1277 },
    services: [
      { serviceId: 'auto-premium', quantity: 1, price: 1499 }
    ],
    totalAmount: 1499,
    status: 'in_progress',
    assignedTeam: 'team-3',
    scheduledDate: '2024-01-16T14:00:00Z',
    paymentStatus: 'pending',
    created_at: '2024-01-15T09:15:00Z'
  },
  {
    id: 'order-3',
    clientName: 'Ana Martínez',
    clientPhone: '+52 55 5555 1111',
    clientEmail: 'ana@email.com',
    address: 'Av. Universidad 890, Col. Narvarte, CDMX',
    coordinates: { lat: 19.4067, lng: -99.1385 },
    services: [
      { serviceId: 'colchon', quantity: 2, price: 699 },
      { serviceId: 'tratamiento-olores', quantity: 1, price: 299 }
    ],
    totalAmount: 1697,
    status: 'assigned',
    assignedTeam: 'team-5',
    scheduledDate: '2024-01-17T11:00:00Z',
    paymentStatus: 'pending',
    created_at: '2024-01-15T16:45:00Z'
  }
];

export const mockPayments: Payment[] = [
  {
    id: 'pay-1',
    orderId: 'order-1',
    amount: 1498,
    method: 'card',
    status: 'completed',
    date: '2024-01-15T12:45:00Z',
    reference: 'TXN123456'
  },
  {
    id: 'pay-2',
    orderId: 'order-2',
    amount: 1499,
    method: 'whatsapp',
    status: 'pending',
    date: '2024-01-16T14:00:00Z'
  }
];