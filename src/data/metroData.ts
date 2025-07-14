export interface MetroConnection {
  station: string;
  time: number;
  distance: number;
}

export interface MetroData {
  metroMap: Record<string, MetroConnection[]>;
  stationToNumber: Record<string, number>;
  numberToStation: Record<number, string>;
}

export const metroData: MetroData = {
  metroMap: {
    // Red Line
    "Miyapur": [
      { station: "JNTU_College", time: 3, distance: 1800 }
    ],
    "JNTU_College": [
      { station: "Miyapur", time: 3, distance: 1800 },
      { station: "KPHP_Colony", time: 3, distance: 1400 }
    ],
    "KPHP_Colony": [
      { station: "JNTU_College", time: 3, distance: 1400 },
      { station: "Kukatpally", time: 3, distance: 1500 }
    ],
    "Kukatpally": [
      { station: "KPHP_Colony", time: 3, distance: 1500 },
      { station: "Balanagar", time: 2, distance: 1500 }
    ],
    "Balanagar": [
      { station: "Kukatpally", time: 2, distance: 1500 },
      { station: "Moosapet", time: 2, distance: 600 }
    ],
    "Moosapet": [
      { station: "Balanagar", time: 2, distance: 600 },
      { station: "Bharat_Nagar", time: 2, distance: 1000 }
    ],
    "Bharat_Nagar": [
      { station: "Moosapet", time: 2, distance: 1000 },
      { station: "Erragadda", time: 2, distance: 900 }
    ],
    "Erragadda": [
      { station: "Bharat_Nagar", time: 2, distance: 900 },
      { station: "ESI_Hospital", time: 2, distance: 200 }
    ],
    "ESI_Hospital": [
      { station: "Erragadda", time: 2, distance: 200 },
      { station: "SR_Nagar", time: 2, distance: 1700 }
    ],
    "SR_Nagar": [
      { station: "ESI_Hospital", time: 2, distance: 1700 },
      { station: "Ameerpet", time: 2, distance: 700 }
    ],
    "Ameerpet": [
      { station: "SR_Nagar", time: 2, distance: 700 },
      { station: "Begumpet", time: 2, distance: 1600 },
      { station: "Madhura_Nagar", time: 2, distance: 700 },
      { station: "Panjagutta", time: 3, distance: 1300 }
    ],
    "Panjagutta": [
      { station: "Ameerpet", time: 3, distance: 1300 },
      { station: "Irrum_Manzil", time: 2, distance: 1000 }
    ],
    "Irrum_Manzil": [
      { station: "Panjagutta", time: 2, distance: 1000 },
      { station: "Khairatabad", time: 3, distance: 1200 }
    ],
    "Khairatabad": [
      { station: "Irrum_Manzil", time: 3, distance: 1200 },
      { station: "Lakdi-Ka-Pul", time: 2, distance: 1200 }
    ],
    "Lakdi-Ka-Pul": [
      { station: "Khairatabad", time: 2, distance: 1200 },
      { station: "Assembly", time: 2, distance: 1100 }
    ],
    "Assembly": [
      { station: "Lakdi-Ka-Pul", time: 2, distance: 1100 },
      { station: "Nampally", time: 2, distance: 700 }
    ],
    "Nampally": [
      { station: "Assembly", time: 2, distance: 700 },
      { station: "Gandhi_Bhavan", time: 2, distance: 800 }
    ],
    "Gandhi_Bhavan": [
      { station: "Nampally", time: 2, distance: 800 },
      { station: "Osmania_Medical_College", time: 2, distance: 800 }
    ],
    "Osmania_Medical_College": [
      { station: "Gandhi_Bhavan", time: 2, distance: 800 },
      { station: "MG_Bus_Station", time: 2, distance: 900 }
    ],
    "MG_Bus_Station": [
      { station: "Osmania_Medical_College", time: 2, distance: 900 },
      { station: "Sulthan_Bazaar", time: 3, distance: 2100 },
      { station: "Malakpet", time: 2, distance: 800 }
    ],
    "Malakpet": [
      { station: "MG_Bus_Station", time: 2, distance: 800 },
      { station: "New_Market", time: 2, distance: 1200 }
    ],
    "New_Market": [
      { station: "Malakpet", time: 2, distance: 1200 },
      { station: "Musarambagh", time: 2, distance: 1000 }
    ],
    "Musarambagh": [
      { station: "New_Market", time: 2, distance: 1000 },
      { station: "Dilsukhnagar", time: 3, distance: 1500 }
    ],
    "Dilsukhnagar": [
      { station: "Musarambagh", time: 3, distance: 1500 },
      { station: "Chaitanyapuri", time: 2, distance: 1100 }
    ],
    "Chaitanyapuri": [
      { station: "Dilsukhnagar", time: 2, distance: 1100 },
      { station: "Victoria_Memorial", time: 2, distance: 1200 }
    ],
    "Victoria_Memorial": [
      { station: "Chaitanyapuri", time: 2, distance: 1200 },
      { station: "LB_Nagar", time: 2, distance: 1400 }
    ],
    "LB_Nagar": [
      { station: "Victoria_Memorial", time: 2, distance: 1400 }
    ],

    // Blue Line
    "Raidurg": [
      { station: "HITEC_City", time: 2, distance: 1500 }
    ],
    "HITEC_City": [
      { station: "Raidurg", time: 2, distance: 1500 },
      { station: "Durgam_Cheruvu", time: 2, distance: 900 }
    ],
    "Durgam_Cheruvu": [
      { station: "HITEC_City", time: 2, distance: 900 },
      { station: "Madhapur", time: 3, distance: 1600 }
    ],
    "Madhapur": [
      { station: "Durgam_Cheruvu", time: 3, distance: 1600 },
      { station: "Peddamma_Gudi", time: 2, distance: 1200 }
    ],
    "Peddamma_Gudi": [
      { station: "Madhapur", time: 2, distance: 1200 },
      { station: "Jubilee_Hills_Check_Post", time: 2, distance: 700 }
    ],
    "Jubilee_Hills_Check_Post": [
      { station: "Peddamma_Gudi", time: 2, distance: 700 },
      { station: "Road_No_5_Jubilee_Hills", time: 3, distance: 1400 }
    ],
    "Road_No_5_Jubilee_Hills": [
      { station: "Jubilee_Hills_Check_Post", time: 3, distance: 1400 },
      { station: "Yusufguda", time: 2, distance: 900 }
    ],
    "Yusufguda": [
      { station: "Road_No_5_Jubilee_Hills", time: 2, distance: 900 },
      { station: "Madhura_Nagar", time: 3, distance: 1500 }
    ],
    "Madhura_Nagar": [
      { station: "Yusufguda", time: 3, distance: 1500 },
      { station: "Ameerpet", time: 2, distance: 700 }
    ],
    "Begumpet": [
      { station: "Ameerpet", time: 2, distance: 1600 },
      { station: "Prakash_Nagar", time: 2, distance: 1400 }
    ],
    "Prakash_Nagar": [
      { station: "Begumpet", time: 2, distance: 1400 },
      { station: "Rasoolpura", time: 2, distance: 1100 }
    ],
    "Rasoolpura": [
      { station: "Prakash_Nagar", time: 2, distance: 1100 },
      { station: "Paradise", time: 2, distance: 1100 }
    ],
    "Paradise": [
      { station: "Rasoolpura", time: 2, distance: 1100 },
      { station: "Parade_Ground", time: 2, distance: 1200 }
    ],
    "Parade_Ground": [
      { station: "Paradise", time: 2, distance: 1200 },
      { station: "Secundherabad_West", time: 2, distance: 1000 },
      { station: "Secundherabad_East", time: 3, distance: 1500 }
    ],
    "Secundherabad_East": [
      { station: "Parade_Ground", time: 3, distance: 1500 },
      { station: "Mettuguda", time: 3, distance: 1900 }
    ],
    "Mettuguda": [
      { station: "Secundherabad_East", time: 3, distance: 1900 },
      { station: "Tarnaka", time: 2, distance: 1300 }
    ],
    "Tarnaka": [
      { station: "Mettuguda", time: 2, distance: 1300 },
      { station: "Habsiguda", time: 3, distance: 1600 }
    ],
    "Habsiguda": [
      { station: "Tarnaka", time: 3, distance: 1600 },
      { station: "NGRI", time: 2, distance: 800 }
    ],
    "NGRI": [
      { station: "Habsiguda", time: 2, distance: 800 },
      { station: "Stadium", time: 2, distance: 1200 }
    ],
    "Stadium": [
      { station: "NGRI", time: 2, distance: 1200 },
      { station: "Uppal", time: 2, distance: 1100 }
    ],
    "Uppal": [
      { station: "Stadium", time: 2, distance: 1100 },
      { station: "Nagole", time: 2, distance: 1000 }
    ],
    "Nagole": [
      { station: "Uppal", time: 2, distance: 1000 }
    ],

    // Green Line
    "Secundherabad_West": [
      { station: "Parade_Ground", time: 2, distance: 1000 },
      { station: "Gandhi_Hospital", time: 2, distance: 1000 }
    ],
    "Gandhi_Hospital": [
      { station: "Secundherabad_West", time: 2, distance: 1000 },
      { station: "Musheerabad", time: 2, distance: 1500 }
    ],
    "Musheerabad": [
      { station: "Gandhi_Hospital", time: 2, distance: 1500 },
      { station: "RTC_X_Roads", time: 2, distance: 1300 }
    ],
    "RTC_X_Roads": [
      { station: "Musheerabad", time: 2, distance: 1300 },
      { station: "Chikkadpally", time: 3, distance: 1900 }
    ],
    "Chikkadpally": [
      { station: "RTC_X_Roads", time: 3, distance: 1900 },
      { station: "Narayanaguda", time: 1, distance: 900 }
    ],
    "Narayanaguda": [
      { station: "Chikkadpally", time: 1, distance: 900 },
      { station: "Sulthan_Bazaar", time: 2, distance: 1400 }
    ],
    "Sulthan_Bazaar": [
      { station: "Narayanaguda", time: 2, distance: 1400 },
      { station: "MG_Bus_Station", time: 3, distance: 2100 }
    ]
  },
  stationToNumber: {},
  numberToStation: {}
};

// Initialize station mappings
const stations = Object.keys(metroData.metroMap);
stations.forEach((station, index) => {
  metroData.stationToNumber[station] = index;
  metroData.numberToStation[index] = station;
});