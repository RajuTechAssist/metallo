export interface HubDetail {
  name: string;
  typeLabel: string; // e.g., 'SALE OFFICE', 'FABRICATION UNIT', 'GLOBAL HEADQUARTERS'
  address: string;
  status: 'headquarters' | 'sale_office' | 'trade_office' | 'fabrication_unit' | 'region_contact' | 'global_coverage';
  isMainNode?: boolean; // Determines if this is rendered as an explicit Dot or just inherited area.
}

// -------------------------------------------------------------
// 1. HUB DATA DEFINITIONS
// -------------------------------------------------------------
export const HUBS: Record<string, HubDetail> = {
  // India
  "356": {
    name: "INDIA",
    typeLabel: "GLOBAL HEADQUARTERS",
    address: "Global Expansion & Manufacturing Base",
    status: 'headquarters',
    isMainNode: true
  },
  // United Kingdom
  "826": {
    name: "UNITED KINGDOM\nLONDON",
    typeLabel: "SALE OFFICE",
    address: "35, Marsh Road, Pinner, HA5 5NL",
    status: 'sale_office',
    isMainNode: true
  },
  // United Arab Emirates
  "784": {
    name: "UNITED ARAB EMIRATES",
    typeLabel: "SALE OFFICE",
    address: "2709, Jumeirah Business Centre-II, (JBC-II)",
    status: 'sale_office',
    isMainNode: true
  },
  // Germany
  "276": {
    name: "GERMANY\nMETALLO GMBH",
    typeLabel: "FABRICATION UNIT",
    address: "Reichenbachstr. 1, 85737 München (Kreis) - Ismaning",
    status: 'fabrication_unit',
    isMainNode: true
  },
  // China
  "156": {
    name: "CHINA\nWENZHOU",
    typeLabel: "TRADE OFFICE",
    address: "No.2, Building15 East Yongle Rd, Longwan District, Wenzhou",
    status: 'trade_office',
    isMainNode: true
  },
  // Turkey
  "792": {
    name: "TURKEY\nMETA INOX",
    typeLabel: "SALE OFFICE",
    address: "Menderes İzmir, Turkey",
    status: 'sale_office',
    isMainNode: true
  }
};

// -------------------------------------------------------------
// 2. REGIONAL MAPPINGS
// -------------------------------------------------------------

// Europe (Use Germany as Contact)
const EUROPE_CODES = [
  "248", "008", "020", "112", "056", "070", "100", "191", "196", "203", "208", // Andorra, Albania, ... Croatia, Cyprus, CZ, DK
  "233", "246", "250", "234", "300", "348", "352", "372", "380",                 // Estonia, Finland, France, Faroe, Greece, Hungary, Iceland, Ireland, Italy
  "428", "440", "438", "442", "470", "492", "498", "807", "528", "578", "616", "620", // Latvia, Lit, Liech, Lux, Malta, Monaco, Moldova, Mac, Neth, Norway, Poland, Portugal
  "642", "674", "688", "703", "705", "724", "752", "756", "804", "826", "276"    // Romania, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, UK, Germany
];

// Middle East & Africa (Use Dubai as Contact)
const ME_AFRICA_CODES = [
  // Middle East
  "048", "192", "364", "376", "400", "414", "422", "512", "634", "682", "760", "784", "887", // Bahrain, Cyprus?, Iran, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, SA, Syria, UAE, Yemen
  // Africa
  "012", "024", "204", "854", "108", "132", "120", "140", "148", "174", "178", "180", "384", "262", // Alg, Ang, Ben, BF, BDI, CV, CMR, CAF, TCD, COM, COG, COD, CIV... etc.
  "818", "226", "232", "231", "266", "270", "288", "324", "624", "404", "426", "430", "434", "450", // Egy, GN, ER, ET, GA, GM, GH, IN, GW, KE, LS, LR, LY, MG
  "454", "466", "478", "480", "504", "508", "516", "562", "566", "646", "654", "686", "690", "694", // MW, ML, MR, MU, MA, MZ, NA, NE, NG, RW, SH, SN, SC, SL
  "706", "710", "446", "728", "729", "748", "768", "788", "800", "894"                              // SO, ZA, SS, SS, SD, SZ, TG, TN, UG, ZM, ZW
];

// -------------------------------------------------------------
// 3. RESOLUTION LOGIC
// -------------------------------------------------------------

/**
 * Returns the hub details for a given geographic ID.
 * Implements routing logic for regions.
 */
export const resolveCountryData = (geoId: string, geoName: string): HubDetail | null => {
  // If explicitly defined as a Hub, return its direct data.
  if (HUBS[geoId]) return HUBS[geoId];

  // Routing Logic: Europe -> Germany Hub Info
  if (EUROPE_CODES.includes(geoId)) {
    return {
      ...HUBS["276"], // Germany Data
      name: `Contact Point: Germany\n(Serving ${geoName})`,
      status: 'region_contact',
      isMainNode: false
    };
  }

  // Routing Logic: Middle East & Africa -> Dubai Hub Info
  if (ME_AFRICA_CODES.includes(geoId)) {
    return {
      ...HUBS["784"], // UAE Data
      name: `Contact Point: UAE\n(Serving ${geoName})`,
      status: 'region_contact',
      isMainNode: false
    };
  }

  // Routing Logic: Rest of the World -> India Global HQ Info
  return {
    ...HUBS["356"], // India Data
    name: `Global HQ: India\n(Serving ${geoName})`,
    status: 'global_coverage',
    isMainNode: false
  };
};
