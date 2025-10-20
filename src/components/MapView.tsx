import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Users, 
  Clock, 
  Phone,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { mockOrders, mockTeams } from '../data/mockData';

export default function MapView() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const activeOrders = mockOrders.filter(o => 
    o.status === 'assigned' || o.status === 'in_progress'
  );

  const handleWhatsAppClick = (phone: string, orderId: string) => {
    // Aquí se enviaría el webhook cuando se haga click en WhatsApp
    console.log('Webhook enviado para orden:', orderId, 'teléfono:', phone);
    alert(`Webhook enviado para la orden ${orderId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Mapa Operativo</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Disponible</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Ocupado</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span>Fuera de línea</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Mapa en Tiempo Real</h2>
              <div className="text-sm text-gray-500">
                Google Maps API - Integración pendiente
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 font-medium">Vista del Mapa</p>
                <p className="text-sm text-gray-500">Google Maps se integrará aquí</p>
              </div>
              
              {/* Mock markers */}
              <div className="absolute top-20 left-20">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute top-32 right-24">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute bottom-20 left-32">
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Teams Status */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Estado de Plantillas</h3>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-3">
                {mockTeams.slice(0, 8).map((team) => (
                  <div
                    key={team.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedTeam === team.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${
                          team.status === 'available' 
                            ? 'bg-green-500'
                            : team.status === 'busy'
                            ? 'bg-blue-500'
                            : 'bg-gray-400'
                        }`}></div>
                        <span className="font-medium text-gray-900">{team.name}</span>
                      </div>
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>⭐ {team.efficiency.rating}</span>
                        <span>⏱️ {team.efficiency.responseTime}min</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Órdenes Activas</h3>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-3">
                {activeOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedOrder === order.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{order.clientName}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {order.address.substring(0, 40)}...
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(order.scheduledDate).toLocaleTimeString('es-MX', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                          <span>${order.totalAmount.toLocaleString('es-MX')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppClick(order.clientPhone, order.id);
                          }}
                          className="p-1 text-green-600 hover:bg-green-50 rounded"
                          title="Enviar WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`tel:${order.clientPhone}`);
                          }}
                          className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                          title="Llamar"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'in_progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'in_progress' ? 'En Progreso' : 'Asignado'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-yellow-800">Integraciones Pendientes</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Google Maps API para visualización del mapa</li>
                <li>Webhook de WhatsApp para notificaciones automáticas</li>
                <li>Geolocalización en tiempo real de plantillas</li>
                <li>API de OpenAI para validación de comprobantes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}