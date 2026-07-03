"use client";
import React, { useState } from "react";

/* ── Country presence list (displayed as bar below title) ── */
const PRESENCE_COUNTRIES = [
  "India",
  "Germany",
  "Hungary",
  "France",
  "Spain",
  "Turkey",
  "Dubai",
  "Saudi Arabia",
  "Oman",
  "China",
  "United Kingdom",
  "Morocco",
  "Algeria",
];

/* ── Coverage cards matching the screenshot layout ── */
const coverageCards = [
  {
    kind: "HEAD OFFICE",
    country: "Europe & UK",
    lines: ["Reichenbachstraße 1,", "85737 Ismaning, Germany"],
  },
  {
    kind: "SALES OFFICE",
    country: "Hungary",
    lines: ["1037, Budapest, Csillaghegyi Út 13."],
  },
  {
    kind: "SALES OFFICE & MFG",
    country: "India",
    lines: [
      "710, 7th Floor, Tower A,",
      "Emmar Digital Greens, Gurugram",
      "",
      "Manufacturing Units:",
      "Gujarat & Maharashtra",
    ],
  },
  {
    kind: "SALES OFFICE",
    country: "Middle East",
    lines: [
      "1908, 19th Floor,",
      "Indigo Icon, Cluster - F,",
      "Jumeirah Lake Towers (JLT),",
      "Dubai, UAE | P O Box - 634397",
    ],
  },
  {
    kind: "SALES OFFICE",
    country: "Africa",
    lines: ["Casablanca, Morocco Office"],
  },
];
/* ── Marker type → color + legend copy ── */
type MarkerType = "head" | "sales" | "mfg";
const MARKER_COLORS: Record<MarkerType, string> = {
  head: "#FF8C00", // gold
  sales: "#406093", // navy
  mfg: "#41A67E", // green
};
const LEGEND_ITEMS: { type: MarkerType; label: string }[] = [
  { type: "head", label: "Head Office" },
  { type: "sales", label: "Sales Office" },
  { type: "mfg", label: "Manufacturing Unit" },
];

/*
 * Office marker positions (x, y) mapped to the SVG viewBox (1362 x 724).
 * `type` drives the pin color, `label` is the persistent caption under the pin.
 * `detail` (optional) powers the rich hover card, matching the India example
 * in the reference design. Markers without a `detail` fall back to a simple
 * kind + label tooltip.
 */
interface OfficeMarker {
  id: string;
  x: number;
  y: number;
  label: string;
  type: MarkerType;
  /** Optional overrides for crowded clusters — default label sits centered below the pin. */
  labelX?: number;
  labelY?: number;
  labelAnchor?: "start" | "middle" | "end";
  detail?: {
    kind: string;
    country: string;
    lines: string[];
  };
}

/*
 * Office marker positions (x, y) mapped to the SVG viewBox (1362 x 724).
 */
const OFFICE_MARKERS: OfficeMarker[] = [
  {
    id: "india",
    x: 928,
    y: 335,
    label: "Gurugram, India",
    type: "sales",
    labelAnchor: "start",
    labelX: 940,
    labelY: 345,
    detail: {
      kind: "SALES OFFICE",
      country: "India",
      lines: ["710, 7th Floor, Tower A,", "Emmar Digital Greens, Gurugram"],
    },
  },
  {
    id: "gujarat",
    x: 905,
    y: 360,
    label: "Gujarat, India",
    type: "mfg",
    labelAnchor: "start",
    labelX: 915,
    labelY: 370,
  },
  {
    id: "maharashtra",
    x: 925,
    y: 390,
    label: "Maharashtra, India",
    type: "mfg",
  },
  {
    id: "germany",
    x: 680,
    y: 230,
    label: "Germany",
    type: "head",
    labelAnchor: "start",
    labelX: 692,
    labelY: 240,
    detail: {
      kind: "HEAD OFFICE",
      country: "Europe & UK",
      lines: ["Reichenbachstraße 1,", "85737 Ismaning, Germany"],
    },
  },
  { id: "hungary", x: 710, y: 255, label: "Hungary", type: "sales" },
  { id: "france", x: 645, y: 255, label: "France", type: "sales" },
  { id: "spain", x: 625, y: 290, label: "Spain", type: "sales" },
  { id: "turkey", x: 762, y: 300, label: "Turkey", type: "sales" },
  {
    id: "dubai",
    x: 845,
    y: 350,
    label: "Dubai",
    type: "sales",
    labelAnchor: "end",
    labelX: 832,
    labelY: 355,
  },
  {
    id: "saudi",
    x: 810,
    y: 370,
    label: "Saudi Arabia",
    type: "sales",
    labelAnchor: "end",
    labelX: 800,
    labelY: 382,
  },
  {
    id: "oman",
    x: 840,
    y: 380,
    label: "Oman",
    type: "sales",
  },
  { id: "china", x: 970, y: 295, label: "China", type: "sales" },
  {
    id: "uk",
    x: 635,
    y: 225,
    label: "United Kingdom",
    type: "sales",
    labelAnchor: "end",
    labelX: 622,
    labelY: 235,
  },
  { id: "morocco", x: 620, y: 330, label: "Morocco", type: "sales" },
  { id: "algeria", x: 655, y: 320, label: "Algeria", type: "sales" },
];

const COLOR_MAP = {
  gold: "#DAA520",
  goldGlow: "#FFD700",
  tooltipBg: "#0F172A",
};

/* ── SVG icon components for the cards ── */
const HeadquarterIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-metallo-navy"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M9 13h.01" />
    <path d="M15 13h.01" />
  </svg>
);

const SalesIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-metallo-navy"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

/* ── Reusable map-pin path (lucide "MapPin" style), colored per marker type ── */
const MapPinIcon: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Main Pin Shape (Solid Fill) */}
    <path
      d="M0,-16 C-6.6,-16 -12,-10.6 -12,-4 C-12,5.5 0,17 0,17 C0,17 12,5.5 12,-4 C12,-10.6 6.6,-16 0,-16 Z"
      fill={color}
    />

    {/* Large Internal White Hole */}
    <circle
      cx="0"
      cy="-4"
      r="8" // Larger radius to create a prominent white area
      fill="white"
    />

    {/* Small Central Dot (Solid Fill) */}
    <circle
      cx="0"
      cy="-4"
      r="3.5" // Smaller radius than the previous central circle to fit inside the hole
      fill={color}
    />
  </>
);

const WorldMap: React.FC = () => {
  // const [tooltipContent, setTooltipContent] = useState("");
  // const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const [activeMarker, setActiveMarker] = useState<OfficeMarker | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  return (
    <section className="bg py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Title row with logo ── */}
        <div className="mb-6">
          <h4 className="text-metallo-navy/70 font-bold uppercase tracking-widest text-sm block mb-2 font-heading">
            Global Footprint
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-metallo-navy mb-3">
            Strategic Presence. Limitless Reach.
          </h2>
        </div>

        {/* ── Country presence bar ── */}
        <div className="mb-8 flex flex-wrap justify-start gap-x-1 text-sm font-bold md:text-base">
          {PRESENCE_COUNTRIES.map((c, i) => (
            <span key={c} className="whitespace-nowrap">
              <span className="text-metallo-gold-hover">{c}</span>
              {i < PRESENCE_COUNTRIES.length - 1 && (
                <span className="text-metallo-gold-hover mx-0.5">|</span>
              )}
            </span>
          ))}
        </div>

        <div className="text-gray-600 mb-10 text-justify text-sm md:text-base leading-relaxed max-w-none">
          <p>
            In a connected world where boundaries are fading, success is defined
            by agility, access, and execution. <strong>Metallo</strong> is built
            for this new industrial landscape—integrating manufacturing, global
            sourcing, and distribution into a seamless ecosystem. Our platform
            enables consistent quality, efficient execution, and reliable
            delivery across both local and international markets. With a &ldquo;
            <strong>glocal</strong>&rdquo; approach, we combine global reach
            with local responsiveness—delivering uncompromised quality with
            optimised efficiency. Driven by precision and powered by global
            connectivity, <strong>Metallo</strong> is redefining industrial
            metal solutions.
          </p>
        </div>

        {/* ── Map (flat SVG) ── */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full">
            {/* The flat SVG world map */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/data/world-map.svg"
              alt="World Map — Metallo Global Presence"
              className="w-full h-auto"
              draggable={false}
            />

            {/* Marker overlay */}
            <svg
              viewBox="0 0 1362 724"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {OFFICE_MARKERS.map((office) => {
                const isActive = activeMarker?.id === office.id;
                return (
                  <g
                    key={office.id}
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                    onMouseEnter={() => {
                      setActiveMarker(office);
                      setHoverPos({ x: office.x, y: office.y });
                    }}
                    onMouseLeave={() => {
                      setActiveMarker(null);
                      setHoverPos(null);
                    }}
                  >
                    <g
                      transform={`translate(${office.x}, ${office.y}) scale(${isActive ? 1 : 0.8})`}
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: `bottom center`,
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <MapPinIcon color={MARKER_COLORS[office.type]} />
                    </g>

                    {/* Persistent country label under the pin (or a custom
                        position for crowded clusters, set per-marker above) */}
                    <text
                      x={office.labelX ?? office.x}
                      y={office.labelY ?? office.y + 27}
                      textAnchor={office.labelAnchor ?? "middle"}
                      fontSize="11"
                      fontWeight="700"
                      fill="#101C5E"
                      stroke="#ffffff"
                      strokeWidth="1"
                      strokeLinejoin="round"
                      paintOrder="stroke"
                      style={{ pointerEvents: "none", fontFamily: "inherit" }}
                    >
                      {office.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 rounded-md border border-gray-200 bg-white/95 px-4 py-3 shadow-md">
              <ul className="space-y-2">
                {LEGEND_ITEMS.map((item) => (
                  <li
                    key={item.type}
                    className="flex items-center gap-2 text-xs font-semibold text-gray-700"
                  >
                    <span
                      className="inline-block h-3 w-3 rounded-full border border-white shadow"
                      style={{ backgroundColor: MARKER_COLORS[item.type] }}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rich hover detail card, positioned relative to the active marker */}
          {activeMarker?.detail && hoverPos && (
            <div
              className="pointer-events-none absolute z-50 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-xl"
              style={{
                left: `${(hoverPos.x / 1362) * 100}%`,
                top: `${(hoverPos.y / 724) * 100}%`,
                transform: "translate(20px, -110%)",
              }}
            >
              <div className="mb-1 text-xs font-black uppercase tracking-wider text-metallo-gold-hover">
                {activeMarker.detail.kind}
              </div>
              <div className="mb-2 text-lg font-black text-metallo-navy font-heading">
                {activeMarker.detail.country}
              </div>
              <div className="text-xs leading-relaxed text-gray-600">
                {activeMarker.detail.lines.map((line, i) =>
                  line === "" ? (
                    <div
                      key={i}
                      className="my-2 h-px w-8 bg-metallo-gold-hover/50"
                    />
                  ) : (
                    <span key={i}>
                      {line}
                      {i < activeMarker.detail!.lines.length - 1 &&
                        activeMarker.detail!.lines[i + 1] !== "" && <br />}
                    </span>
                  ),
                )}
              </div>
              {/* Speech-bubble tail */}
              <div
                className="absolute h-3 w-3 rotate-45 bg-white"
                style={{
                  left: 16,
                  bottom: -6,
                  borderRight: "1px solid #e5e7eb",
                  borderBottom: "1px solid #e5e7eb",
                }}
              />
            </div>
          )}

          {/* Fallback simple tooltip for markers without a rich detail card */}
          {activeMarker && !activeMarker.detail && hoverPos && (
            <div
              className="pointer-events-none absolute z-50 whitespace-nowrap rounded border border-white/10 px-3 py-1 text-sm font-bold text-white shadow-lg"
              style={{
                left: `${(hoverPos.x / 1362) * 100}%`,
                top: `${(hoverPos.y / 724) * 100}%`,
                transform: "translate(14px, -140%)",
                backgroundColor: COLOR_MAP.tooltipBg,
              }}
            >
              {activeMarker.label}
            </div>
          )}
        </div>
      </div>

      {/* ── Coverage cards ── */}
      <div className="mx-auto mt-12 max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coverageCards.map((card) => (
            <div
              key={`${card.kind}-${card.country}`}
              className="rounded-lg bg-gray-200 p-5 transition-all hover:border-metallo-gold/40 hover:shadow-lg"
            >
              {/* Icon */}
              {/* <div className="mb-3"> */}
                {/* {card.kind === "HEAD OFFICE" ? (
                  <HeadquarterIcon />
                ) : (
                  <SalesIcon />
                )} */}
                {/* {card.icon && <card.icon />} */}
              {/* </div> */}

              {/* Kind label */}
              <div className="mb-1 text-sm font-black uppercase tracking-wider text-metallo-navy font-heading">
                {card.kind}
              </div>

              {/* Country */}
              <div className="mb-2 text-lg font-black text-metallo-gold-hover font-heading">
                {card.country}
              </div>

              {/* Address lines */}
              <div className="text-xs leading-relaxed text-gray-600">
                {card.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.lines.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;

/* ═══════════════════════════════════════════════════════════════════════════
 * COMMENTED OUT — Previous react-simple-maps implementation
 * Kept for reference in case we want to revert.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * import Image from 'next/image';
 * import {
 *   ComposableMap,
 *   Geographies,
 *   Geography,
 *   Marker,
 *   ZoomableGroup,
 * } from 'react-simple-maps';
 * import { feature } from 'topojson-client';
 * import {
 *   GLOBAL_OFFICES,
 *   normalizeGeoId,
 *   OFFICE_KIND_LABELS,
 * } from '@/lib/mapConstants';
 *
 * const WORLD_DATA_URL = '/data/world-countries-110m.json';
 *
 * // OFFICE_MARKERS used [longitude, latitude] coords for react-simple-maps:
 * // const OFFICE_MARKERS: { id: string; coords: [number, number]; label: string }[] = [
 * //   { id: 'india',       coords: [77.0266, 28.4595], label: 'India (Gurugram)' },
 * //   { id: 'gujarat',     coords: [71.1924, 22.2587], label: 'Gujarat Manufacturing' },
 * //   { id: 'maharashtra', coords: [75.7139, 19.7515], label: 'Maharashtra Manufacturing' },
 * //   { id: 'germany',     coords: [11.6986, 48.2254], label: 'Germany' },
 * //   { id: 'hungary',     coords: [19.0402, 47.4979], label: 'Hungary' },
 * //   { id: 'france',      coords: [2.3522, 48.8566],  label: 'France' },
 * //   { id: 'spain',       coords: [-3.7038, 40.4168], label: 'Spain' },
 * //   { id: 'turkey',      coords: [32.8597, 39.9334], label: 'Turkey' },
 * //   { id: 'dubai',       coords: [55.2708, 25.2048], label: 'Dubai' },
 * //   { id: 'saudi',       coords: [46.6753, 24.7136], label: 'Saudi Arabia' },
 * //   { id: 'oman',        coords: [57.5836, 23.6105], label: 'Oman' },
 * //   { id: 'china',       coords: [116.4074, 39.9042], label: 'China' },
 * //   { id: 'uk',          coords: [-0.1276, 51.5074], label: 'United Kingdom' },
 * //   { id: 'morocco',     coords: [-7.0926, 31.7917], label: 'Morocco' },
 * //   { id: 'algeria',     coords: [3.0588, 36.7538],  label: 'Algeria' },
 * // ];
 *
 * // const COLOR_MAP = {
 * //   landFill: '#E5E7EB',
 * //   landStroke: '#FFFFFF',
 * //   gold: '#DAA520',
 * //   goldGlow: '#FFD700',
 * //   tooltipBg: '#0F172A',
 * // };
 *
 * // type definitions, toFeatureCollection, getCountriesObject, etc.
 * // ... (full old code omitted for brevity)
 *
 * // The old component used:
 * //   <ComposableMap projection="geoMercator" ...>
 * //     <ZoomableGroup ...>
 * //       <Geographies geography={countryGeographies}>
 * //         {({ geographies }) => geographies.map(geo => <Geography ... />)}
 * //       </Geographies>
 * //       {OFFICE_MARKERS.map(office => <Marker coordinates={office.coords}>...</Marker>)}
 * //     </ZoomableGroup>
 * //   </ComposableMap>
 *
 * ═══════════════════════════════════════════════════════════════════════════ */
