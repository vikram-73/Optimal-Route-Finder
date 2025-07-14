import { metroData, MetroConnection } from '../data/metroData';

interface PriorityQueueItem {
  distance: number;
  station: number;
}

class PriorityQueue {
  private items: PriorityQueueItem[] = [];

  enqueue(item: PriorityQueueItem) {
    this.items.push(item);
    this.items.sort((a, b) => a.distance - b.distance);
  }

  dequeue(): PriorityQueueItem | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export function findShortestPath(
  source: string,
  destination: string,
  routeType: 'distance' | 'time',
  data = metroData
): { value: number; path: string[] } {
  const { metroMap, stationToNumber, numberToStation } = data;
  
  if (!metroMap[source] || !metroMap[destination]) {
    return { value: 0, path: [] };
  }

  const sourceNum = stationToNumber[source];
  const destNum = stationToNumber[destination];
  const numStations = Object.keys(metroMap).length;
  
  // Initialize distances and previous stations
  const distances = new Array(numStations).fill(Infinity);
  const previous = new Array(numStations).fill(-1);
  const pq = new PriorityQueue();
  
  distances[sourceNum] = 0;
  pq.enqueue({ distance: 0, station: sourceNum });
  
  while (!pq.isEmpty()) {
    const current = pq.dequeue()!;
    const currentStation = numberToStation[current.station];
    
    if (current.distance > distances[current.station]) {
      continue;
    }
    
    // Check all neighbors
    const neighbors = metroMap[currentStation] || [];
    for (const neighbor of neighbors) {
      const neighborNum = stationToNumber[neighbor.station];
      const weight = routeType === 'distance' ? neighbor.distance : neighbor.time;
      const newDistance = distances[current.station] + weight;
      
      if (newDistance < distances[neighborNum]) {
        distances[neighborNum] = newDistance;
        previous[neighborNum] = current.station;
        pq.enqueue({ distance: newDistance, station: neighborNum });
      }
    }
  }
  
  // Reconstruct path
  const path: string[] = [];
  let currentStation = destNum;
  
  while (currentStation !== -1) {
    path.unshift(numberToStation[currentStation]);
    currentStation = previous[currentStation];
  }
  
  // If no path found, return empty result
  if (path.length === 0 || path[0] !== source) {
    return { value: 0, path: [] };
  }
  
  return {
    value: distances[destNum] === Infinity ? 0 : distances[destNum],
    path
  };
}