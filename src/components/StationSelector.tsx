import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { metroData } from '../data/metroData';

interface StationSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: React.ReactNode;
}

const StationSelector: React.FC<StationSelectorProps> = ({
  label,
  value,
  onChange,
  placeholder,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const stations = Object.keys(metroData.metroMap);
  const filteredStations = stations.filter(station =>
    station.toLowerCase().replace(/_/g, ' ').includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStationSelect = (station: string) => {
    onChange(station);
    setIsOpen(false);
    setSearchTerm('');
  };

  const formatStationName = (station: string) => {
    return station.replace(/_/g, ' ');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="metro-input flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center">
          {icon}
          <span className={`ml-3 ${value ? 'text-gray-900' : 'text-gray-500'}`}>
            {value ? formatStationName(value) : placeholder}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 glass-card rounded-xl shadow-2xl max-h-80 overflow-hidden animate-slide-up">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search stations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Station List */}
          <div className="max-h-60 overflow-y-auto">
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => (
                <button
                  key={station}
                  onClick={() => handleStationSelect(station)}
                  className="station-option w-full text-left border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                    {formatStationName(station)}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No stations found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StationSelector;