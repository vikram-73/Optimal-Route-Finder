import React, { useState } from 'react';
import { Search, MapPin, Train } from 'lucide-react';
import { metroData } from '../data/metroData';

const StationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const stations = Object.keys(metroData.metroMap);
  const filteredStations = stations.filter(station =>
    station.toLowerCase().replace(/_/g, ' ').includes(searchTerm.toLowerCase())
  );

  const formatStationName = (station: string) => {
    return station.replace(/_/g, ' ');
  };

  const getLineInfo = (station: string) => {
    // Simple line detection based on station names and connections
    const lines = [];
    const redLineStations = ['Miyapur', 'JNTU_College', 'KPHP_Colony', 'Kukatpally', 'Balanagar', 'Moosapet', 'Bharat_Nagar', 'Erragadda', 'ESI_Hospital', 'SR_Nagar', 'Ameerpet', 'Panjagutta', 'Irrum_Manzil', 'Khairatabad', 'Lakdi-Ka-Pul', 'Assembly', 'Nampally', 'Gandhi_Bhavan', 'Osmania_Medical_College', 'MG_Bus_Station', 'Malakpet', 'New_Market', 'Musarambagh', 'Dilsukhnagar', 'Chaitanyapuri', 'Victoria_Memorial', 'LB_Nagar'];
    const blueLineStations = ['Raidurg', 'HITEC_City', 'Durgam_Cheruvu', 'Madhapur', 'Peddamma_Gudi', 'Jubilee_Hills_Check_Post', 'Road_No_5_Jubilee_Hills', 'Yusufguda', 'Madhura_Nagar', 'Ameerpet', 'Begumpet', 'Prakash_Nagar', 'Rasoolpura', 'Paradise', 'Parade_Ground', 'Secundherabad_East', 'Mettuguda', 'Tarnaka', 'Habsiguda', 'NGRI', 'Stadium', 'Uppal', 'Nagole'];
    const greenLineStations = ['Secundherabad_West', 'Gandhi_Hospital', 'Musheerabad', 'RTC_X_Roads', 'Chikkadpally', 'Narayanaguda', 'Sulthan_Bazaar', 'MG_Bus_Station'];
    
    if (redLineStations.includes(station)) lines.push({ name: 'Red Line', color: 'bg-metro-red' });
    if (blueLineStations.includes(station)) lines.push({ name: 'Blue Line', color: 'bg-metro-blue' });
    if (greenLineStations.includes(station)) lines.push({ name: 'Green Line', color: 'bg-metro-green' });
    
    return lines.length > 0 ? lines : [{ name: 'Metro Line', color: 'bg-gray-400' }];
  };

  const getConnections = (station: string) => {
    return metroData.metroMap[station]?.length || 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-2xl p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Metro Stations</h2>
            <p className="text-gray-600 mt-1">Explore all {stations.length} stations in the Hyderabad Metro network</p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-metro-red rounded-full mr-2" />
              Red Line
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-metro-blue rounded-full mr-2" />
              Blue Line
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-metro-green rounded-full mr-2" />
              Green Line
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="metro-input pl-12"
          />
        </div>
      </div>

      {/* Stations Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStations.map((station) => {
          const lines = getLineInfo(station);
          const connections = getConnections(station);
          
          return (
            <div
              key={station}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-fade-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    {formatStationName(station)}
                  </h3>
                </div>
              </div>

              {/* Metro Lines */}
              <div className="flex flex-wrap gap-2 mb-3">
                {lines.map((line, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${line.color}`}
                  >
                    {line.name}
                  </span>
                ))}
              </div>

              {/* Station Info */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Train className="w-4 h-4 mr-1" />
                  {connections} connections
                </div>
                {lines.length > 1 && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                    Interchange
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredStations.length === 0 && (
        <div className="glass-card rounded-2xl p-12 text-center animate-fade-in">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No stations found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default StationList;