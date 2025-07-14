import React from 'react';
import { Clock, Map, MapPin, ArrowRight, Train } from 'lucide-react';

interface RouteResultProps {
  result: { value: number; path: string[] };
  routeType: 'distance' | 'time';
  sourceStation: string;
  destinationStation: string;
}

const RouteResult: React.FC<RouteResultProps> = ({
  result,
  routeType,
  sourceStation,
  destinationStation,
}) => {
  const formatStationName = (station: string) => {
    return station.replace(/_/g, ' ');
  };

  const getLineColor = (station: string) => {
    // Simple line detection based on station names
    const redLineStations = ['Miyapur', 'JNTU_College', 'Kukatpally', 'Ameerpet', 'Nampally', 'LB_Nagar'];
    const blueLineStations = ['Raidurg', 'HITEC_City', 'Madhapur', 'Ameerpet', 'Nagole'];
    const greenLineStations = ['Secundherabad_West', 'Gandhi_Hospital', 'Sulthan_Bazaar'];
    
    if (redLineStations.some(s => station.includes(s))) return 'bg-metro-red';
    if (blueLineStations.some(s => station.includes(s))) return 'bg-metro-blue';
    if (greenLineStations.some(s => station.includes(s))) return 'bg-metro-green';
    return 'bg-gray-400';
  };

  return (
    <div className="glass-card rounded-2xl p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Route Details</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-600">
            {routeType === 'distance' ? (
              <>
                <Map className="w-4 h-4 mr-1" />
                {result.value} meters
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 mr-1" />
                {result.value} minutes
              </>
            )}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Train className="w-4 h-4 mr-1" />
            {result.path.length - 1} stops
          </div>
        </div>
      </div>

      {/* Journey Summary */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-medium">{formatStationName(sourceStation)}</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-red-500 mr-2" />
            <span className="font-medium">{formatStationName(destinationStation)}</span>
          </div>
        </div>
      </div>

      {/* Route Path */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900 mb-4">Your Journey</h4>
        <div className="relative">
          {result.path.map((station, index) => (
            <div key={index} className="flex items-center relative">
              {/* Station Indicator */}
              <div className="flex items-center z-10">
                <div className={`w-4 h-4 rounded-full ${getLineColor(station)} border-2 border-white shadow-sm`} />
                <div className="ml-4 py-3">
                  <div className="font-medium text-gray-900">
                    {formatStationName(station)}
                  </div>
                  {index === 0 && (
                    <div className="text-xs text-green-600 font-medium">Starting point</div>
                  )}
                  {index === result.path.length - 1 && (
                    <div className="text-xs text-red-600 font-medium">Destination</div>
                  )}
                  {index > 0 && index < result.path.length - 1 && (
                    <div className="text-xs text-gray-500">Stop {index}</div>
                  )}
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < result.path.length - 1 && (
                <div className="absolute left-2 top-8 w-0.5 h-8 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600">{result.path.length}</div>
            <div className="text-xs text-gray-600">Total Stations</div>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600">{result.path.length - 1}</div>
            <div className="text-xs text-gray-600">Stops</div>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600">
              {routeType === 'distance' ? `${result.value}m` : `${result.value}min`}
            </div>
            <div className="text-xs text-gray-600">
              {routeType === 'distance' ? 'Distance' : 'Time'}
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600">₹{Math.max(10, Math.ceil(result.value / 1000) * 5)}</div>
            <div className="text-xs text-gray-600">Est. Fare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteResult;