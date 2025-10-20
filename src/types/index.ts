export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator';
  created_at: string;
}

export interface Service {
  id: string;
  category: string;
  name: string;
  price: number;
  unit?: string;
  minPrice?: number;
  description?: string;
}

export interface ServiceOrder {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: {
    serviceId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  assignedTeam?: string;
  scheduledDate: string;
  completedDate?: string;
  rating?: number;
  notes?: string;
  paymentStatus: 'pending' | 'paid' | 'partial';
  created_at: string;
}

export interface Team {
  id: string;
  name: string;
  members: string[];
  currentLocation?: {
    lat: number;
    lng: number;
  };
  status: 'available' | 'busy' | 'offline';
  efficiency: {
    responseTime: number; // en minutos
    rating: number; // 1-5
    completedOrders: number;
    totalOrders: number;
  };
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'cash' | 'card' | 'transfer' | 'whatsapp';
  status: 'pending' | 'completed' | 'failed';
  date: string;
  reference?: string;
}

export interface WhatsAppWebhook {
  orderId: string;
  clientPhone: string;
  message: string;
  timestamp: string;
}