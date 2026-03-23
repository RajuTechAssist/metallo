import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { HUBS, HubDetail } from '../utils/mapConstants';

// --- Constants ---
const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const stats = [
  { value: "50+", label: "Global Clients", sub: "Across Industries" },
  { value: "24/7", label: "Operational Support", sub: "Always Available" },
  { value: "100%", label: "Global Coverage", sub: "Serving Clients Worldwide" },
  { value: "100%", label: "On-Time Delivery", sub: "Consistent Track Record" },
];

const COLOR_MAP = {
  headquarters: "#00AEEF",
  office: "#72d9fe",
  fabrication: "#8e9195",
  default: "#D1D5DB",
  hover: "#EAB308",

  markerOuter: "#EAB308",
  markerInner: "#FFFFFF",
};

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState<HubDetail | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleDeviceSize = () => setIsSmallDevice(mediaQuery.matches);

    handleDeviceSize();
    mediaQuery.addEventListener("change", handleDeviceSize);

    return () => mediaQuery.removeEventListener("change", handleDeviceSize);
  }, []);

  const defaultMapView = isSmallDevice
    ? { zoom: 1.2, center: [0, 0] as [number, number] }
    : { zoom: 2.1, center: [0, 20] as [number, number] };

  const filterZoomEvent = (event: { type: string; ctrlKey?: boolean }) => {
    if (event.type === "wheel") {
      return Boolean(event.ctrlKey);
    }

    return true;
  };

  const LegendItem = ({ color, text, pulse }: { color: string, text: string, pulse?: boolean }) => (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${pulse ? 'animate-pulse shadow-[0_0_10px_#00AEEF]' : ''}`} style={{ backgroundColor: color }}></span>
      <span className="text-[10px] sm:text-xs font-bold text-metallo-navy uppercase">{text}</span>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto container">
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
        <div
          className="relative w-full h-full min-h-[280px] sm:min-h-[320px] lg:h-[70vh] overflow-hidden mt-5 lg:mt-10 cursor-grab"
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
          onPointerCancel={() => setIsDragging(false)}
        >

          {/* Floating Legend - Top on Mobile, Bottom-Left on Desktop */}
          <div className="absolute bottom-0 lg:bottom-10 z-10 bg-white/90 backdrop-blur rounded-lg shadow-md p-3 sm:p-4 border border-gray-100 flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-start sm:w-auto">
            <LegendItem color={COLOR_MAP.headquarters} text="Global HQ" pulse />
            <LegendItem color={COLOR_MAP.office} text="Sales / Trade Office" />
            <LegendItem color={COLOR_MAP.fabrication} text="Fabrication Unit" />
            {/* <LegendItem color={COLOR_MAP.default} text="Regional Coverage" /> */}
            <LegendItem color={COLOR_MAP.default} text="Global Reach" />
          </div>

          {/* Map Container */}
          <ComposableMap
            projection="geoEqualEarth"
            // projectionConfig={{ scale: 205, center: [0, 0] }}
            style={{ width: "100%", height: "100%", cursor: isDragging ? "grabbing" : "grab" }}
          >
            <ZoomableGroup
              zoom={defaultMapView.zoom}
              minZoom={1}
              maxZoom={5}
              center={defaultMapView.center}
              filterZoomEvent={filterZoomEvent}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const EXCLUDED_REGIONS = ["010"]; // Antarctica
                    if (EXCLUDED_REGIONS.includes(geo.id)) return null;
                    const hub = HUBS[geo.id];


                    let fillColor = COLOR_MAP.default;

                    if (hub?.status === "headquarters") fillColor = COLOR_MAP.headquarters;
                    else if (hub?.status === "sale_office" || hub?.status === "trade_office")
                      fillColor = COLOR_MAP.office;
                    else if (hub?.status === "fabrication_unit")
                      fillColor = COLOR_MAP.fabrication;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        stroke="#FFFFFF"
                        strokeWidth={0.5}
                        onMouseEnter={(e) => {
                          if (hub) {
                            setTooltipContent(hub.name.replace("\n", " - "));
                            setTooltipPos({ x: e.clientX, y: e.clientY });

                          }
                        }}
                        onMouseLeave={() => setTooltipContent("")}
                        style={{
                          hover: {
                            fill: hub ? COLOR_MAP.hover : COLOR_MAP.default,
                            outline: "none",
                            cursor: hub ? "pointer" : "default",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Markers (Main Nodes Only) */}
              {Object.entries(HUBS).map(([key, hub]) => {
                if (!hub.isMainNode) return null;

                // Approximate coordinates mapping (you can refine later)
                const coordMap: Record<string, [number, number]> = {
                  // India (center)
                  "356": [78.9629, 20.5937],
                  // United Kingdom (center)
                  // "826": [-3.4360, 55.3781],
                  // // UAE (center)
                  // "784": [53.8478, 23.4241],
                  // // Germany (center)
                  // "276": [10.4515, 51.1657],
                  // // China (center)
                  // "156": [104.1954, 35.8617],
                  // // Turkey (center)
                  // "792": [35.2433, 38.9637],
                };

                const coordinates = coordMap[key];
                if (!coordinates) return null;

                return (
                  <Marker key={key} coordinates={coordinates}>
                    <circle r={3} fill="#EAB308" strokeWidth={1} />
                    <circle r={1.5} fill="#FFFFFF" strokeWidth={1} />
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {tooltipContent && (
            <div
              style={{
                position: "fixed",
                top: tooltipPos.y + 10,
                left: tooltipPos.x + 10,
              }}
              className="bg-blue-900 text-white text-sm font-bold px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-50"
            >
              {tooltipContent}
            </div>
          )}
        </div>
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
      {/* {selectedCountry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-metallo-navy/80 backdrop-blur-sm transition-opacity duration-300" onClick={() => setSelectedCountry(null)}>
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100" onClick={e => e.stopPropagation()}>
            <div className="bg-metallo-navy p-6 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {selectedCountry.status === 'headquarters' && <span className="material-symbols-outlined text-[#00AEEF]">verified</span>}
                  <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${selectedCountry.status === 'headquarters' ? 'bg-[#00AEEF] text-white' :
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
      )} */}
    </section>
  );
};

export default WorldMap;