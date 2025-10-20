import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Award,
  Target,
  BarChart3,
  Filter
} from 'lucide-react';
import { mockTeams } from '../data/mockData';

export default function TeamsEfficiency() {
  const [sortBy, setSortBy] = useState('rating');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTeams = mockTeams.filter(team => 
    filterStatus === 'all' || team.status === filterStatus
  );

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.efficiency.rating - a.efficiency.rating;
      case 'responseTime':
        return a.efficiency.responseTime - b.efficiency.responseTime;
      case 'completedOrders':
        return b.efficiency.completedOrders - a.efficiency.completedOrders;
      case 'efficiency':
        return (b.efficiency.completedOrders / b.efficiency.totalOrders) - 
               (a.efficiency.completedOrders / a.efficiency.totalOrders);
      default:
        return 0;
    }
  });

  const averageRating = mockTeams.reduce((sum, team) => sum + team.efficiency.rating, 0) / mockTeams.length;
  const averageResponseTime = mockTeams.reduce((sum, team) => sum + team.efficiency.responseTime, 0) / mockTeams.length;
  const totalCompletedOrders = mockTeams.reduce((sum, team) => sum + team.efficiency.completedOrders, 0);
  const totalOrders = mockTeams.reduce((sum, team) => sum + team.efficiency.totalOrders, 0);
  const overallEfficiency = (totalCompletedOrders / totalOrders) * 100;

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return 'text-green-600 bg-green-100';
    if (efficiency >= 80) return 'text-blue-600 bg-blue-100';
    if (efficiency >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getResponseTimeColor = (time: number) => {
    if (time <= 20) return 'text-green-600';
    if (time <= 35) return 'text-blue-600';
    if (time <= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Efectividad de Plantillas</h1>
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todas las plantillas</option>
            <option value="available">Disponibles</option>
            <option value="busy">Ocupadas</option>
            <option value="offline">Fuera de línea</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="rating">Calificación</option>
            <option value="responseTime">Tiempo de Respuesta</option>
            <option value="completedOrders">Órdenes Completadas</option>
            <option value="efficiency">Eficiencia</option>
          </select>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Calificación Promedio</p>
              <p className="text-2xl font-bold text-gray-900">
                {averageRating.toFixed(1)}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-yellow-600">Excelente desempeño</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tiempo Respuesta Promedio</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(averageResponseTime)} min
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">-5 min vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Eficiencia General</p>
              <p className="text-2xl font-bold text-gray-900">
                {overallEfficiency.toFixed(1)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+3.2% vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Órdenes Completadas</p>
              <p className="text-2xl font-bold text-gray-900">
                {totalCompletedOrders}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-purple-600">de {totalOrders} totales</span>
          </div>
        </div>
      </div>

      {/* Teams Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Desempeño por Plantilla</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BarChart3 className="w-4 h-4" />
            <span>20 plantillas activas</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plantilla
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Calificación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tiempo Respuesta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Órdenes Completadas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Eficiencia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Miembros
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedTeams.map((team, index) => {
                const efficiency = (team.efficiency.completedOrders / team.efficiency.totalOrders) * 100;
                
                return (
                  <tr key={team.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {index + 1}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {team.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {team.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        team.status === 'available'
                          ? 'bg-green-100 text-green-800'
                          : team.status === 'busy'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {team.status === 'available' && 'Disponible'}
                        {team.status === 'busy' && 'Ocupado'}
                        {team.status === 'offline' && 'Fuera de línea'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className={`w-4 h-4 mr-1 ${getRatingColor(team.efficiency.rating)}`} />
                        <span className={`text-sm font-medium ${getRatingColor(team.efficiency.rating)}`}>
                          {team.efficiency.rating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Clock className={`w-4 h-4 mr-1 ${getResponseTimeColor(team.efficiency.responseTime)}`} />
                        <span className={`text-sm font-medium ${getResponseTimeColor(team.efficiency.responseTime)}`}>
                          {team.efficiency.responseTime} min
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <span className="font-medium">{team.efficiency.completedOrders}</span>
                        <span className="text-gray-500 ml-1">/ {team.efficiency.totalOrders}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className={`h-2 rounded-full ${
                              efficiency >= 90 ? 'bg-green-500' :
                              efficiency >= 80 ? 'bg-blue-500' :
                              efficiency >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${efficiency}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${getEfficiencyColor(efficiency)}`}>
                          {efficiency.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{team.members.length}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {team.members.slice(0, 2).join(', ')}
                        {team.members.length > 2 && '...'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
          <div className="space-y-4">
            {sortedTeams.slice(0, 3).map((team, index) => (
              <div key={team.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{team.name}</p>
                    <p className="text-sm text-gray-500">
                      {team.efficiency.rating.toFixed(1)} ⭐ • {team.efficiency.responseTime} min
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {((team.efficiency.completedOrders / team.efficiency.totalOrders) * 100).toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500">eficiencia</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Áreas de Mejora</h3>
          <div className="space-y-4">
            {sortedTeams
              .filter(team => (team.efficiency.completedOrders / team.efficiency.totalOrders) < 0.8)
              .slice(0, 3)
              .map((team) => (
                <div key={team.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{team.name}</p>
                      <p className="text-sm text-gray-500">
                        {team.efficiency.rating.toFixed(1)} ⭐ • {team.efficiency.responseTime} min
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">
                      {((team.efficiency.completedOrders / team.efficiency.totalOrders) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500">eficiencia</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}