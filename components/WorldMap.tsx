"use client";

import React, { useEffect, useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { feature, merge } from 'topojson-client';
import {
  GLOBAL_OFFICES,
  normalizeGeoId,
  OFFICE_KIND_LABELS,
} from '@/lib/mapConstants';

const WORLD_DATA_URL = '/data/world-countries-110m.json';

const coverageCards = [
  {
    value: 'India',
    label: 'Global HQ',
    sub: 'Manufacturing leadership and project execution base.',
  },
  {
    value: 'Europe',
    label: 'Germany office',
    sub: 'Buyer coordination and commercial support across Europe.',
  },
  {
    value: 'Middle East',
    label: 'Dubai office',
    sub: 'Regional sales support across Gulf and nearby markets.',
  },
  {
    value: 'Africa',
    label: 'Dubai office',
    sub: 'Commercial support for African project and supply requirements.',
  },
];

const COLOR_MAP = {
  landFill: '#E5E7EB',
  landStroke: '#FFFFFF',
  primary: '#1a4554',
  europe: '#1a4554',
  middleEast: '#1a4554',
  africa: '#1a4554',
  markerOuter: '#0F172A',
  markerInner: '#FFFFFF',
  hover: '#344a52',
  tooltipBg: '#0F172A',
};

const REGION_HIGHLIGHTS = [
  {
    id: 'europe',
    label: 'Europe coverage',
    tooltip: 'Europe coverage managed through our Germany office.',
    fill: COLOR_MAP.europe,
    countryNames: [
      'United Kingdom',
      'Ireland',
      'Portugal',
      'Spain',
      'France',
      'Belgium',
      'Netherlands',
      'Luxembourg',
      'Germany',
      'Switzerland',
      'Italy',
      'Austria',
      'Czechia',
      'Poland',
      'Denmark',
      'Norway',
      'Sweden',
      'Finland',
      'Romania',
      'Hungary',
      'Slovakia',
      'Slovenia',
      'Croatia',
      'Bosnia and Herz.',
      'Serbia',
      'Montenegro',
      'Albania',
      'Macedonia',
      'Greece',
      'Moldova',
      'Ukraine',
      'Belarus',
      'Lithuania',
      'Latvia',
      'Estonia',
    ],
  },
  {
    id: 'middle-east',
    label: 'Middle East coverage',
    tooltip: 'Middle East coverage coordinated from our Dubai office.',
    fill: COLOR_MAP.middleEast,
    countryNames: [
      'United Arab Emirates',
      'Saudi Arabia',
      'Qatar',
      'Kuwait',
      'Oman',
      'Yemen',
      'Iraq',
      'Jordan',
      'Syria',
      'Lebanon',
      'Israel',
      'Palestine',
      'Iran',
      'Cyprus',
    ],
  },
  {
    id: 'africa',
    label: 'Africa coverage',
    tooltip: 'Africa coverage supported through our Dubai office.',
    fill: COLOR_MAP.africa,
    countryNames: [
      'Morocco',
      'W. Sahara',
      'Algeria',
      'Tunisia',
      'Libya',
      'Egypt',
      'Mauritania',
      'Mali',
      'Niger',
      'Chad',
      'Sudan',
      'S. Sudan',
      'Eritrea',
      'Djibouti',
      'Ethiopia',
      'Somalia',
      'Somaliland',
      'Senegal',
      'Gambia',
      'Guinea',
      'Guinea-Bissau',
      'Sierra Leone',
      'Liberia',
      'Ghana',
      'Togo',
      'Benin',
      'Burkina Faso',
      'Nigeria',
      'Cameroon',
      'Central African Rep.',
      'Congo',
      'Dem. Rep. Congo',
      'Gabon',
      'Eq. Guinea',
      'Uganda',
      'Rwanda',
      'Burundi',
      'Kenya',
      'Tanzania',
      'Angola',
      'Zambia',
      'Zimbabwe',
      'Botswana',
      'Namibia',
      'South Africa',
      'Lesotho',
      'eSwatini',
      'Mozambique',
      'Malawi',
      'Madagascar',
    ],
  },
];

type WorldTopology = {
  objects: {
    countries: object;
    land: object;
  };
};

type FeatureCollectionLike = {
  type: 'FeatureCollection';
  features: any[];
};

const toFeatureCollection = (value: any): FeatureCollectionLike => {
  if (value?.type === 'FeatureCollection') {
    return value;
  }

  return {
    type: 'FeatureCollection',
    features: value ? [value] : [],
  };
};

const WorldMap: React.FC = () => {
  const [worldTopology, setWorldTopology] = useState<WorldTopology | null>(null);
  const [activeHighlightId, setActiveHighlightId] = useState<string | null>(null);
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

  const headquartersOffice =
    GLOBAL_OFFICES.find((office) => office.kind === 'headquarters') ??
    GLOBAL_OFFICES[0];

  const countryGeographies = useMemo(() => {
    if (!worldTopology) return null;

    const countries = toFeatureCollection(
      feature(worldTopology as any, (worldTopology as any).objects.countries),
    );

    return {
      type: 'FeatureCollection' as const,
      features: countries.features.filter(
        (geo) => normalizeGeoId(geo.id) !== '010',
      ),
    };
  }, [worldTopology]);

  const headquartersCountryGeographies = useMemo(() => {
    if (!worldTopology) return null;

    const countries = toFeatureCollection(
      feature(worldTopology as any, (worldTopology as any).objects.countries),
    );

    return {
      type: 'FeatureCollection' as const,
      features: countries.features.filter((geo) =>
        normalizeGeoId(geo.id) === headquartersOffice.geoId,
      ),
    };
  }, [headquartersOffice.geoId, worldTopology]);

  const regionHighlightGeographies = useMemo(() => {
    if (!worldTopology) return [];

    const countryObjects =
      (worldTopology as any).objects?.countries?.geometries ?? [];

    return REGION_HIGHLIGHTS.map((region) => {
      const geometries = countryObjects.filter((geo: any) =>
        region.countryNames.includes(geo.properties?.name),
      );

      if (!geometries.length) {
        return null;
      }

      return {
        ...region,
        geography: toFeatureCollection(merge(worldTopology as any, geometries)),
      };
    }).filter(Boolean) as Array<
      (typeof REGION_HIGHLIGHTS)[number] & { geography: FeatureCollectionLike }
    >;
  }, [worldTopology]);

  const defaultMapView = isSmallDevice
    ? { zoom: 1.2, center: [0, 0] as [number, number] }
    : { zoom: 2, center: [6, 20] as [number, number] };

  const filterZoomEvent = (event: { type: string; ctrlKey?: boolean }) => {
    if (event.type === 'wheel') {
      return Boolean(event.ctrlKey);
    }

    return true;
  };

  const LegendItem = ({
    color,
    text,
    pulse,
  }: {
    color: string;
    text: string;
    pulse?: boolean;
  }) => (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${pulse ? 'animate-pulse' : ''}`}
        style={{ backgroundColor: color }}
      ></span>
      <span className="text-[10px] font-bold uppercase text-metallo-navy sm:text-xs">
        {text}
      </span>
    </div>
  );

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto">
        <h4 className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-metallo-navy/60 font-heading">
          Global Footprint
        </h4>
        <h2 className="mb-4 text-4xl font-bold text-metallo-navy font-heading md:text-5xl">
          Strategic Presence. Limitless Reach.
        </h2>
        <h3 className="mb-6 text-lg font-bold uppercase text-metallo-navy/70 font-heading">
          Manufacturing in India, Delivering to the World.
        </h3>
        <p className="max-w-4xl leading-relaxed text-gray-500">
          Metallo combines India-based manufacturing strength with responsive
          commercial support across Europe, the Middle East, and Africa. This
          map highlights our operating regions clearly, so buyers can
          understand how each office supports the markets it serves.
        </p>

        <div className="relative mt-5 h-full min-h-[280px] w-full overflow-hidden lg:mt-10 lg:h-[70vh]">
          <div className="absolute bottom-0 z-10 flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-lg border border-gray-100 bg-white/90 p-3 shadow-md backdrop-blur sm:justify-start sm:w-auto lg:bottom-10">
            <LegendItem color={COLOR_MAP.primary} text="India HQ" pulse />
            <LegendItem color={COLOR_MAP.europe} text="Europe" />
            <LegendItem color={COLOR_MAP.middleEast} text="Middle East" />
            <LegendItem color={COLOR_MAP.africa} text="Africa" />
          </div>

          {countryGeographies && headquartersCountryGeographies ? (
            <ComposableMap
              projection="geoEqualEarth"
              style={{ width: '100%', height: '100%' }}
            >
              <ZoomableGroup
                zoom={defaultMapView.zoom}
                minZoom={1}
                maxZoom={5}
                center={defaultMapView.center}
                filterZoomEvent={filterZoomEvent}
              >
                <Geographies geography={countryGeographies as any}>
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

                {regionHighlightGeographies.map((region) => (
                  <Geographies key={region.id} geography={region.geography as any}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={`${region.id}-${geo.rsmKey}`}
                          geography={geo}
                          fill={
                            activeHighlightId === region.id
                              ? COLOR_MAP.hover
                              : region.fill
                          }
                          stroke="rgba(255,255,255,0.9)"
                          strokeWidth={0.75}
                          onMouseEnter={(event) => {
                            setTooltipContent(region.tooltip);
                            setActiveHighlightId(region.id);
                            setTooltipPos({
                              x: event.clientX,
                              y: event.clientY,
                            });
                          }}
                          onMouseLeave={() => {
                            setTooltipContent('');
                            setActiveHighlightId(null);
                          }}
                          style={{
                            default: {
                              outline: 'none',
                              cursor: 'pointer',
                            },
                            hover: {
                              fill: COLOR_MAP.hover,
                              outline: 'none',
                              cursor: 'pointer',
                            },
                            pressed: {
                              outline: 'none',
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                ))}

                <Geographies geography={headquartersCountryGeographies as any}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const fillColor =
                        activeHighlightId === headquartersOffice.id
                          ? COLOR_MAP.hover
                          : COLOR_MAP.primary;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fillColor}
                          stroke="#FFFFFF"
                          strokeWidth={0.9}
                          onMouseEnter={(event) => {
                            setTooltipContent(
                              `${headquartersOffice.city}, ${headquartersOffice.country} - ${OFFICE_KIND_LABELS[headquartersOffice.kind]}`,
                            );
                            setActiveHighlightId(headquartersOffice.id);
                            setTooltipPos({
                              x: event.clientX,
                              y: event.clientY,
                            });
                          }}
                          onMouseLeave={() => {
                            setTooltipContent('');
                            setActiveHighlightId(null);
                          }}
                          style={{
                            default: {
                              outline: 'none',
                            },
                            hover: {
                              fill: COLOR_MAP.hover,
                              outline: 'none',
                              cursor: 'pointer',
                            },
                            pressed: {
                              outline: 'none',
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {GLOBAL_OFFICES.map((office) => (
                  <Marker key={office.id} coordinates={office.marker}>
                    <g
                      onMouseEnter={(event) => {
                        setTooltipContent(
                          `${office.city}, ${office.country} - ${OFFICE_KIND_LABELS[office.kind]}`,
                        );
                        setActiveHighlightId(office.id);
                        setTooltipPos({
                          x: event.clientX,
                          y: event.clientY,
                        });
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                        setActiveHighlightId(null);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle
                        r={office.kind === 'headquarters' ? 6.5 : 5.5}
                        fill={
                          activeHighlightId === office.id
                            ? COLOR_MAP.hover
                            : COLOR_MAP.markerOuter
                        }
                        opacity={office.kind === 'headquarters' ? 0.2 : 0.1}
                      />
                      <circle
                        r={office.kind === 'headquarters' ? 3.1 : 2.8}
                        fill={
                          activeHighlightId === office.id
                            ? COLOR_MAP.hover
                            : COLOR_MAP.markerOuter
                        }
                        stroke={COLOR_MAP.markerInner}
                        strokeWidth={1}
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

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {coverageCards.map((card) => (
            <div
              key={`${card.value}-${card.label}`}
              className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-center transition-all hover:border-metallo-gold/30 hover:shadow-lg"
            >
              <div className="mb-1 text-3xl font-bold text-metallo-navy font-heading md:text-4xl">
                {card.value}
              </div>
              <div className="mb-1 text-sm font-bold uppercase tracking-wider text-metallo-navy/70">
                {card.label}
              </div>
              <div className="text-xs font-medium text-gray-500">{card.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
