'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// --- Types ---
interface CountryDetail {
  name: string;
  projects: string;
  contact: string;
  services: string[];
  status: 'headquarters' | 'operation' | 'footprint';
}

// --- Constants ---
const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Mapping ISO-3 Numeric Codes to Data (Key Operations)
const COUNTRY_DATA: Record<string, CountryDetail> = {
  "840": { // United States
    name: "United States",
    status: 'operation',
    projects: "Texas Gigafactory Structure (50k MT), Nevada Solar Grid",
    contact: "+1 202-555-0123 | usa@metallo.com",
    services: ["Structural Steel Supply", "Heavy Machinery Tools", "Site Logistics"]
  },
  "076": { // Brazil
    name: "Brazil",
    status: 'operation',
    projects: "Amazon Hydroelectric Dam Upgrade",
    contact: "+55 11 99999-9999 | latam@metallo.com",
    services: ["High-Voltage Cabling", "Die Casting Components", "Welding Alloys"]
  },
  "348": { // Hungary
    name: "Hungary (Europe Operations)",
    status: 'operation',
    projects: "Pan-European Rail Electrification",
    contact: "+36 1 123 4567 | eu@metallo.com",
    services: ["Railway Signalling Cables", "Precision Tools", "Automotive Casting"]
  },
  "710": { // South Africa
    name: "South Africa",
    status: 'operation',
    projects: "Gold Mine Infrastructure Renewal",
    contact: "+27 11 123 4567 | africa@metallo.com",
    services: ["Mining Tools", "Conveyor Steel Structures", "Safety Gear"]
  },
  "356": { // India
    name: "India (Global HQ)",
    status: 'headquarters',
    projects: "Mumbai Trans Harbour Link, Delhi Metro Phase IV",
    contact: "+91 22 1234 5678 | hq@metallo.com",
    services: ["Global R&D Center", "Full Product Spectrum", "Turnkey Project Management"]
  },
  "036": { // Australia
    name: "Australia",
    status: 'operation',
    projects: "NSW Solar Farm Grid Integration",
    contact: "+61 2 1234 5678 | apac@metallo.com",
    services: ["Solar Cabling", "Mounting Structures", "Remote Site Tools"]
  }
};

// Additional Countries with Project Footprint (ISO-3 Codes)
const PRESENCE_COUNTRIES = [
  "124", "484", // NA: Canada, Mexico
  "032", "152", "604", "170", "862", "218", "600", // SA: Argentina, Chile, Peru, Colombia, Venezuela, Ecuador, Paraguay
  "826", "276", "250", "380", "724", "616", "528", "056", "752", "578", "246", "208", "756", "040", "203", "642", "372", "620", "300", "070", "191", // Europe
  "792", "784", "682", "634", "414", "512", "376", "400", "422", // ME/Turkey
  "156", "392", "410", "360", "458", "702", "764", "704", "608", "050", "144", "116", "524", "104", // Asia
  "818", "566", "404", "288", "504", "012", "024", "834", "788", "800", // Africa
  "554", "242" // Oceania: NZ, Fiji
];

const stats = [
  { value: "3", label: "Manufacturing Units", sub: "Noida, Gurgaon & Punjab" },
  { value: "20+", label: "Countries Covered", sub: "Global Export Network" },
  { value: "500+", label: "Active Distributors", sub: "Pan-India Reach" },
  { value: "100%", label: "On-Time Delivery", sub: "Track Record" },
];

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<CountryDetail | null>(null);

  const getCountryData = (geo: any): CountryDetail | null => {
    const code = geo.id;
    if (COUNTRY_DATA[code]) return COUNTRY_DATA[code];
    if (PRESENCE_COUNTRIES.includes(code)) {
        return {
            name: geo.properties.name || "Metallo Presence",
            status: 'footprint',
            projects: "Active infrastructure supply chain & strategic distribution sites.",
            contact: "Global HQ (India) | +91 22 1234 5678",
            services: ["Material Supply", "Logistics Coordination", "Project Support"]
        };
    }
    return null;
  };

  const LegendItem = ({ color, text, pulse }: { color: string, text: string, pulse?: boolean }) => (
      <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${pulse ? 'animate-pulse shadow-[0_0_10px_#00AEEF]' : ''}`} style={{ backgroundColor: color }}></span>
          <span className="text-[10px] sm:text-xs font-bold text-metallo-navy uppercase">{text}</span>
      </div>
  );

  return (
    <section className="py-24 bg-white overflow-hidden" id="world-map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h4 className="text-metallo-navy/60 font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading">Global Footprint</h4>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-4">
          Strategic Presence. Limitless Reach.
        </h2>
        <h3 className="text-lg text-metallo-gold-hover font-bold font-heading uppercase mb-6">
          Manufacturing in India, Delivering to the World.
        </h3>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Metallo operates at the intersection of local manufacturing excellence and global supply chain efficiency. With our state-of-the-art manufacturing hubs in Noida and Gurgaon, and a robust logistics network, we ensure time-critical delivery of heavy industrial materials to project sites across the geography. Whether it’s a smart city project in Gujarat, a port in Chennai, or an export order to the Middle East, Metallo’s supply chain is built for speed and scale.
        </p>
      </div>

      <div className="relative w-full bg-[#F3F4F6] border-y border-gray-100 overflow-hidden rounded-lg shadow-inner group">
         
         {/* Floating Legend - Top on Mobile, Bottom-Left on Desktop */}
         <div className="absolute top-4 left-4 right-4 sm:top-auto sm:bottom-4 sm:left-4 sm:right-auto z-10 bg-white/90 backdrop-blur rounded-lg shadow-md p-3 sm:p-4 border border-gray-100 flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start sm:w-auto">
            <LegendItem color="#00AEEF" text="Global HQ" pulse />
            <LegendItem color="#071331" text="Key Operations" />
            <LegendItem color="#64748B" text="Project Footprint" />
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] sm:h-[600px] overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab active:cursor-grabbing">
            <div className="min-w-[1000px] w-full h-full">
                <ComposableMap 
                    projectionConfig={{ rotate: [-10, 0, 0], scale: 220, center: [0, 20] }} 
                    className="w-full h-full"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                        if (geo.id === "010") return null;

                        const countryData = COUNTRY_DATA[geo.id];
                        const isPresence = PRESENCE_COUNTRIES.includes(geo.id);
                        const isHQ = countryData?.status === 'headquarters';
                        
                        const interactableData = getCountryData(geo);
                        const isInteractable = !!interactableData;

                        let fillColor = "#D1D5DB";
                        if (isHQ) fillColor = "#00AEEF";
                        else if (countryData) fillColor = "#071331";
                        else if (isPresence) fillColor = "#64748B";

                        return (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                setTooltipContent(interactableData ? interactableData.name : geo.properties.name);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                            onClick={() => {
                                if (interactableData) setSelectedCountry(interactableData);
                            }}
                            style={{
                                default: {
                                fill: fillColor,
                                outline: "none",
                                stroke: "#FFFFFF",
                                strokeWidth: 0.5,
                                transition: "all 250ms"
                                },
                                hover: {
                                fill: isInteractable ? "#EAB308" : "#9CA3AF",
                                outline: "none",
                                cursor: isInteractable ? "pointer" : "default",
                                stroke: isInteractable ? "#EAB308" : "#FFFFFF",
                                strokeWidth: isInteractable ? 1 : 0.5,
                                filter: isInteractable ? "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" : "none"
                                },
                                pressed: {
                                fill: "#E42",
                                outline: "none"
                                }
                            }}
                            />
                        );
                        })
                    }
                    </Geographies>
                    
                    <Marker coordinates={[78.9629, 20.5937]}>
                        <circle r={4} fill="#FFFFFF" />
                        <circle r={2} fill="#00AEEF" />
                    </Marker>
                </ComposableMap>
            </div>
        </div>

        {/* Tooltip */}
        {tooltipContent && (
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-metallo-navy text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl pointer-events-none uppercase tracking-wide z-20 transition-opacity whitespace-nowrap">
                {tooltipContent}
            </div>
        )}
      </div>

      {/* Key Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                    <div className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-metallo-gold-hover uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.sub}</div>
                </div>
            ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-metallo-navy/80 backdrop-blur-sm transition-opacity duration-300" onClick={() => setSelectedCountry(null)}>
            <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="bg-metallo-navy p-6 flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            {selectedCountry.status === 'headquarters' && <span className="material-symbols-outlined text-[#00AEEF]">verified</span>}
                            <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                                selectedCountry.status === 'headquarters' ? 'bg-[#00AEEF] text-white' : 
                                selectedCountry.status === 'operation' ? 'bg-metallo-gold text-metallo-navy' :
                                'bg-gray-200 text-gray-600'
                            }`}>
                                {selectedCountry.status === 'headquarters' ? 'Global Headquarters' : 
                                 selectedCountry.status === 'operation' ? 'Regional Operation' : 'Project Footprint'}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-white">{selectedCountry.name}</h3>
                    </div>
                    <button onClick={() => setSelectedCountry(null)} className="text-white/50 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Key Projects</h4>
                        <p className="text-metallo-navy font-medium leading-relaxed">{selectedCountry.projects}</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Services Offered</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedCountry.services.map((service, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Local Contact</h4>
                        <div className="flex items-center gap-2 text-metallo-navy font-bold font-heading">
                            <span className="material-symbols-outlined text-metallo-gold-hover">call</span>
                            {selectedCountry.contact}
                        </div>
                    </div>
                    
                    <button className="w-full py-3 bg-metallo-navy text-white font-bold font-heading uppercase hover:bg-metallo-gold hover:text-metallo-navy transition-colors">
                        Get Local Quote
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default WorldMap;