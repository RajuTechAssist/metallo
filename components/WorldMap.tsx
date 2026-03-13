import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { HUBS, HubDetail, resolveCountryData } from '../utils/mapConstants';

// --- Constants ---
const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const stats = [
  { value: "3", label: "Manufacturing Units", sub: "Noida, Gurgaon & Punjab" },
  { value: "6+", label: "Global Hubs", sub: "Strategic Contact Points" },
  { value: "100%", label: "Global Coverage", sub: "Regional Routing Logic" },
  { value: "100%", label: "On-Time Delivery", sub: "Track Record" },
];

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<HubDetail | null>(null);

  const LegendItem = ({ color, text, pulse }: { color: string, text: string, pulse?: boolean }) => (
      <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${pulse ? 'animate-pulse shadow-[0_0_10px_#00AEEF]' : ''}`} style={{ backgroundColor: color }}></span>
          <span className="text-[10px] sm:text-xs font-bold text-metallo-navy uppercase">{text}</span>
      </div>
  );

  return (
    <section className="py-24 bg-white overflow-hidden" id="world-map">
      <div className="mx-auto container px-4 mb-10">
        <h4 className="text-metallo-navy/60 font-bold uppercase tracking-[0.2em] mb-3 text-sm font-heading block">Global Footprint</h4>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-metallo-navy mb-4">
          Strategic Presence. Limitless Reach.
        </h2>
        <h3 className="text-lg text-metallo-gold-hover font-bold font-heading uppercase mb-6">
          Manufacturing in India, Delivering to the World.
        </h3>
        <p className="text-gray-500 leading-relaxed max-w-4xl">
          Metallo operates at the intersection of local manufacturing excellence and global supply chain efficiency. With our state-of-the-art manufacturing hubs in India and global contact points in Europe, Middle East, and beyond, we ensure time-critical delivery of heavy industrial materials globally.
        </p>
      </div>

      <div className="relative w-full bg-[#F3F4F6] border-y border-gray-100 overflow-hidden rounded-lg shadow-inner group">
         
         {/* Floating Legend - Top on Mobile, Bottom-Left on Desktop */}
         <div className="absolute top-4 left-4 right-4 sm:top-auto sm:bottom-4 sm:left-4 sm:right-auto z-10 bg-white/90 backdrop-blur rounded-lg shadow-md p-3 sm:p-4 border border-gray-100 flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start sm:w-auto">
            <LegendItem color="#00AEEF" text="Global HQ" pulse />
            <LegendItem color="#071331" text="Sales / Trade Office" />
            <LegendItem color="#64748B" text="Fabrication Unit" />
            <LegendItem color="#9CA3AF" text="Regional Coverage" />
            <LegendItem color="#D1D5DB" text="Global Reach" />
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

                        const interactableData = resolveCountryData(geo.id, geo.properties.name);
                        const isInteractable = !!interactableData;

                        let fillColor = "#E5E7EB"; // Default / Unmapped
                        
                        if (interactableData?.status === 'headquarters') fillColor = "#00AEEF";
                        else if (interactableData?.status === 'sale_office' || interactableData?.status === 'trade_office') fillColor = "#071331";
                        else if (interactableData?.status === 'fabrication_unit') fillColor = "#64748B";
                        else if (interactableData?.status === 'region_contact') fillColor = "#9CA3AF"; // Highlighting ME/Africa/Europe
                        else if (interactableData?.status === 'global_coverage') fillColor = "#D1D5DB"; // Rest of world

                        return (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                setTooltipContent(interactableData ? interactableData.name.replace('\n', ' - ') : geo.properties.name);
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
                    
                    {/* India HQ Marker Example (If desired, could map over HUBS that are main nodes and supply coords. Keeping static for visual flair) */}
                    <Marker coordinates={[78.9629, 20.5937]}>
                        <circle r={4} fill="#FFFFFF" />
                        <circle r={2} fill="#00AEEF" />
                    </Marker>
                </ComposableMap>
            </div>
        </div>

        {/* Tooltip */}
        {tooltipContent && (
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-metallo-navy text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl pointer-events-none uppercase tracking-wide z-20 transition-opacity whitespace-nowrap whitespace-pre-line text-center">
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
                                selectedCountry.status === 'region_contact' ? 'bg-gray-200 text-gray-600' :
                                'bg-metallo-gold text-metallo-navy'
                            }`}>
                                {selectedCountry.typeLabel}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-white whitespace-pre-line">{selectedCountry.name}</h3>
                    </div>
                    <button onClick={() => setSelectedCountry(null)} className="text-white/50 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Location & Address</h4>
                        <p className="text-metallo-navy font-medium leading-relaxed">{selectedCountry.address}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Local Contact</h4>
                        <div className="flex items-center gap-2 text-metallo-navy font-bold font-heading">
                            <span className="material-symbols-outlined text-metallo-gold-hover">mail</span>
                            Contact your regional Metallo representative for inquiries.
                        </div>
                    </div>
                    
                    <button className="w-full py-3 bg-metallo-navy text-white font-bold font-heading uppercase hover:bg-metallo-gold hover:text-metallo-navy transition-colors" onClick={() => setSelectedCountry(null)}>
                        Close Details
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default WorldMap;