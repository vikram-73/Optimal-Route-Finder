import React, { useState } from 'react';
import { Train, MapPin, Clock, Route, Zap } from 'lucide-react';
import StationSelector from './components/StationSelector';
import RouteResult from './components/RouteResult';
import StationList from './components/StationList';
import { metroData } from './data/metroData';
import { findShortestPath } from './utils/pathfinding';

type ViewMode = 'route' | 'stations';
type RouteType = 'distance' | 'time';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('route');
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [routeType, setRouteType] = useState<RouteType>('distance');
  const [result, setResult] = useState<{ value: number; path: string[] } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleFindRoute = async () => {
    if (!sourceStation || !destinationStation) return;
    
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const pathResult = findShortestPath(sourceStation, destinationStation, routeType, metroData);
    setResult(pathResult);
    setIsCalculating(false);
  };

  const handleSwapStations = () => {
    const temp = sourceStation;
    setSourceStation(destinationStation);
    setDestinationStation(temp);
  };

  return (
    <div className="min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-card rounded-none border-0 border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                  <Train className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Metro Route Finder</h1>
                  <p className="text-gray-600">Hyderabad Metro Rail</p>
                </div>
              </div>
              
              <nav className="flex space-x-2">
                <button
                  onClick={() => setViewMode('route')}
                  className={`metro-button ${
                    viewMode === 'route'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  <Route className="w-4 h-4 mr-2" />
                  Find Route
                </button>
                <button
                  onClick={() => setViewMode('stations')}
                  className={`metro-button ${
                    viewMode === 'stations'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  All Stations
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          {viewMode === 'route' ? (
            <div className="space-y-8">
              {/* Route Planning Card */}
              <div className="glass-card rounded-2xl p-8 animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Plan Your Journey</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <StationSelector
                    label="From"
                    value={sourceStation}
                    onChange={setSourceStation}
                    placeholder="Select source station"
                    icon={<MapPin className="w-5 h-5 text-green-500" />}
                  />
                  
                  <StationSelector
                    label="To"
                    value={destinationStation}
                    onChange={setDestinationStation}
                    placeholder="Select destination station"
                    icon={<MapPin className="w-5 h-5 text-red-500" />}
                  />
                </div>

                {/* Route Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Optimize for
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setRouteType('distance')}
                      className={`metro-button flex-1 ${
                        routeType === 'distance'
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Route className="w-4 h-4 mr-2" />
                      Shortest Distance
                    </button>
                    <button
                      onClick={() => setRouteType('time')}
                      className={`metro-button flex-1 ${
                        routeType === 'time'
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Fastest Time
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={handleFindRoute}
                    disabled={!sourceStation || !destinationStation || isCalculating}
                    className="metro-button flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Find Best Route
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleSwapStations}
                    disabled={!sourceStation || !destinationStation}
                    className="metro-button bg-white/60 text-gray-700 hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed px-4"
                    title="Swap stations"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Results */}
              {result && (
                <RouteResult
                  result={result}
                  routeType={routeType}
                  sourceStation={sourceStation}
                  destinationStation={destinationStation}
                />
              )}
            </div>
          ) : (
            <StationList />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;