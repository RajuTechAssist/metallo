"use client";
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { feature } from 'topojson-client';
import {
  GLOBAL_OFFICES,
  normalizeGeoId,
  OFFICE_KIND_LABELS,
} from '@/lib/mapConstants';

const WORLD_DATA_URL = '/data/world-countries-110m.json';

/* ── Country presence list (displayed as bar below title) ── */
const PRESENCE_COUNTRIES = [
  'India',
  'Germany',
  'Hungary',
  'France',
  'Spain',
  'Turkey',
  'Dubai',
  'Saudi Arabia',
  'Oman',
  'China',
  'United Kingdom',
  'Morocco',
  'Algeria',
];

/* ── Coverage cards matching the screenshot layout ── */
const coverageCards = [
  {
    kind: 'HEAD OFFICE',
    country: 'Europe & UK',
    lines: ['Reichenbachstraße 1,', '85737 Ismaning, Germany'],
  },
  {
    kind: 'SALES OFFICE',
    country: 'Hungary',
    lines: ['1037, Budapest, Csillaghegyi Út 13.'],
  },
  {
    kind: 'SALES OFFICE & MFG',
    country: 'India',
    lines: [
      'HQ: 710, 7th Floor, Tower A,',
      'Emmar Digital Greens, Gurugram',
      '',
      'Manufacturing Units:',
      'Gujarat & Maharashtra',
    ],
  },
  {
    kind: 'SALES OFFICE',
    country: 'Middle East',
    lines: [
      '1908, 19th Floor,',
      'Indigo Icon, Cluster - F,',
      'Jumeirah Lake Towers (JLT),',
      'Dubai, UAE | P O Box - 634397',
    ],
  },
  {
    kind: 'SALES OFFICE',
    country: 'Africa',
    lines: ['Morocco Office'],
  },
];

/* ── All office marker positions for golden blinking dots ── */
const OFFICE_MARKERS: { id: string; coords: [number, number]; label: string }[] = [
  { id: 'india', coords: [77.0266, 28.4595], label: 'India (Gurugram)' },
  { id: 'gujarat', coords: [71.1924, 22.2587], label: 'Gujarat Manufacturing' },
  { id: 'maharashtra', coords: [75.7139, 19.7515], label: 'Maharashtra Manufacturing' },
  { id: 'germany', coords: [11.6986, 48.2254], label: 'Germany' },
  { id: 'hungary', coords: [19.0402, 47.4979], label: 'Hungary' },
  { id: 'france', coords: [2.3522, 48.8566], label: 'France' },
  { id: 'spain', coords: [-3.7038, 40.4168], label: 'Spain' },
  { id: 'turkey', coords: [32.8597, 39.9334], label: 'Turkey' },
  { id: 'dubai', coords: [55.2708, 25.2048], label: 'Dubai' },
  { id: 'saudi', coords: [46.6753, 24.7136], label: 'Saudi Arabia' },
  { id: 'oman', coords: [57.5836, 23.6105], label: 'Oman' },
  { id: 'china', coords: [116.4074, 39.9042], label: 'China' },
  { id: 'uk', coords: [-0.1276, 51.5074], label: 'United Kingdom' },
  { id: 'morocco', coords: [-7.0926, 31.7917], label: 'Morocco' },
  { id: 'algeria', coords: [3.0588, 36.7538], label: 'Algeria' },
];

const COLOR_MAP = {
  landFill: '#E5E7EB',
  landStroke: '#FFFFFF',
  gold: '#DAA520',
  goldGlow: '#FFD700',
  tooltipBg: '#0F172A',
};

type GeoProperties = {
  name?: string;
};

type GeoFeature = {
  id?: string | number;
  rsmKey?: string;
  properties?: GeoProperties;
};

type FeatureCollectionLike = {
  type: 'FeatureCollection';
  features: GeoFeature[];
};

type TopologyInput = Parameters<typeof feature>[0];
type ObjectInput = Parameters<typeof feature>[1];

type CountryObjects = {
  geometries?: { properties?: GeoProperties }[];
};

type WorldTopology = {
  objects: {
    countries: CountryObjects;
  };
};

const toFeatureCollection = (value: unknown): FeatureCollectionLike => {
  if (
    value &&
    typeof value === 'object' &&
    (value as FeatureCollectionLike).type === 'FeatureCollection'
  ) {
    return value as FeatureCollectionLike;
  }

  return {
    type: 'FeatureCollection',
    features: value ? [value as GeoFeature] : [],
  };
};

const getCountriesObject = (topology: WorldTopology): ObjectInput => {
  const topo = topology as unknown as TopologyInput;
  const objects = topo.objects as Record<string, ObjectInput>;

  return objects.countries;
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

const WorldMap: React.FC = () => {
  const [worldTopology, setWorldTopology] = useState<WorldTopology | null>(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(WORLD_DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setWorldTopology(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setWorldTopology(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const syncDeviceState = () => setIsSmallDevice(mediaQuery.matches);

    syncDeviceState();
    mediaQuery.addEventListener('change', syncDeviceState);

    return () => mediaQuery.removeEventListener('change', syncDeviceState);
  }, []);

  const countryGeographies = useMemo(() => {
    if (!worldTopology) return null;

    const countries = toFeatureCollection(
      feature(
        worldTopology as unknown as TopologyInput,
        getCountriesObject(worldTopology),
      ),
    );

    return {
      type: 'FeatureCollection' as const,
      features: countries.features.filter(
        (geo) => normalizeGeoId(geo.id as string) !== '010',
      ),
    };
  }, [worldTopology]);

  const defaultMapView = isSmallDevice
    ? { zoom: 1.2, center: [0, 0] as [number, number] }
    : { zoom: 2, center: [6, 20] as [number, number] };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filterZoomEvent = (event: any) => {
    if (event.type === 'wheel') {
      return Boolean(event.ctrlKey);
    }

    return true;
  };

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
          {/* <Image
            src="/logo-icon.svg"
            alt="The Metallo Symbol"
            width={80}
            height={80}
            className="object-contain animate-spin-slow transition-transform duration-700"
          /> */}
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

        {/* ── Horizontal rule ──
        <hr className="mb-10 border-gray-400" /> */}

        <div className="text-gray-600 mb-10 text-justify text-sm md:text-base leading-relaxed max-w-none">
          <p>
            In a connected world where boundaries are fading, success is
            defined by agility, access, and execution. <strong>Metallo</strong> is built for this new industrial
            landscape—integrating manufacturing, global sourcing, and
            distribution into a seamless ecosystem. Our platform enables consistent quality, efficient execution,
            and reliable delivery across both local and international
            markets. With a &ldquo;<strong>glocal</strong>&rdquo; approach, we combine
            global reach with local responsiveness—delivering uncompromised
            quality with optimised efficiency. Driven by precision and powered by global connectivity,{' '}
            <strong>Metallo</strong> is redefining industrial metal solutions.
          </p>
        </div>


        {/* ── Map ── */}
        <div className="relative h-full min-h-[280px] w-full overflow-hidden lg:h-[70vh]">
          {/* SVG animation for golden pulse */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <style>{`
                @keyframes goldenPulse {
                  0%, 100% { opacity: 1; r: 3; }
                  50% { opacity: 0.3; r: 5; }
                }
                @keyframes goldenGlow {
                  0%, 100% { opacity: 0.6; r: 7; }
                  50% { opacity: 0; r: 12; }
                }
                .golden-dot {
                  animation: goldenPulse 1.5s ease-in-out infinite;
                }
                .golden-glow {
                  animation: goldenGlow 1.5s ease-in-out infinite;
                }
              `}</style>
            </defs>
          </svg>

          {countryGeographies ? (
            <ComposableMap
              projection="geoEqualEarth"
              style={{ width: '100%', height: '100%' }}
            >
              <ZoomableGroup
                zoom={defaultMapView.zoom}
                minZoom={1}
                maxZoom={5}
                center={defaultMapView.center}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                filterZoomEvent={filterZoomEvent as any}
              >
                {/* All countries — no color, just light gray */}
                <Geographies geography={countryGeographies}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={COLOR_MAP.landFill}
                        stroke={COLOR_MAP.landStroke}
                        strokeWidth={0.6}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Golden blinking dots for all office markers */}
                {OFFICE_MARKERS.map((office, idx) => (
                  <Marker key={office.id} coordinates={office.coords}>
                    <g
                      onMouseEnter={(event) => {
                        setTooltipContent(office.label);
                        setTooltipPos({
                          x: event.clientX,
                          y: event.clientY,
                        });
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Outer glow ring */}
                      <circle
                        r={7}
                        fill={COLOR_MAP.goldGlow}
                        className="golden-glow"
                        style={{ animationDelay: `${idx * 0.12}s` }}
                      />
                      {/* Inner dot */}
                      <circle
                        r={3}
                        fill={COLOR_MAP.gold}
                        stroke="#fff"
                        strokeWidth={0.8}
                        className="golden-dot"
                        style={{ animationDelay: `${idx * 0.12}s` }}
                      />
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          ) : (
            <div className="h-full min-h-[280px] w-full animate-pulse rounded-[24px] bg-gray-100 lg:min-h-[70vh]"></div>
          )}

          {tooltipContent && (
            <div
              style={{
                position: 'fixed',
                top: tooltipPos.y + 10,
                left: tooltipPos.x + 10,
                backgroundColor: COLOR_MAP.tooltipBg,
              }}
              className="pointer-events-none z-50 whitespace-nowrap rounded border border-white/10 px-3 py-1 text-sm font-bold text-white shadow-lg"
            >
              {tooltipContent}
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
              className="rounded-lg border border-gray-300 bg-[#e0e0e0] p-5 transition-all hover:border-metallo-gold/40 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-3">
                {card.kind === 'HEAD OFFICE' ? (
                  <HeadquarterIcon />
                ) : (
                  <SalesIcon />
                )}
              </div>

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
    </section >
  );
};

export default WorldMap;