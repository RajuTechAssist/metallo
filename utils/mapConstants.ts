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
    name: "GERMANY",
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
    name: "TURKEY",
    typeLabel: "SALE OFFICE",
    address: "Menderes İzmir, Turkey",
    status: 'sale_office',
    isMainNode: true
  }
};