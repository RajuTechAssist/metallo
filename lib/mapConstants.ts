export type OfficeKind =
  | "headquarters"
  | "regional-office"
  | "registered-office";

export interface GlobalOffice {
  id: string;
  geoId: string;
  city: string;
  country: string;
  title: string;
  entity: string;
  region: string;
  addressLines: string[];
  kind: OfficeKind;
  marker: [number, number];
  mapQuery: string;
}

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    id: "india",
    geoId: "356",
    city: "Gurugram",
    country: "India",
    title: "Sales Office",
    entity: "Metallo Group",
    region: "Manufacturing base and global project coordination",
    addressLines: [
      "710, 7th Floor, Tower A, Emmar Digital Greens",
      "Sector 61, Gurugram, Haryana 122098",
    ],
    kind: "headquarters",
    marker: [77.0266, 28.4595],
    mapQuery:
      "710, 7th Floor, Tower A, Emmar Digital Greens, Sector 61, Gurugram, Haryana 122098",
  },
  {
    id: "dubai-office",
    geoId: "784",
    city: "Dubai",
    country: "United Arab Emirates",
    title: "Middle East Branch",
    entity: "Sales and support office",
    region: "Middle East and Africa commercial support",
    addressLines: [
      "1908, 19th Floor, Indigo Icon, Cluster F",
      "Jumeirah Lake Towers, Dubai, UAE",
    ],
    kind: "regional-office",
    marker: [55.2708, 25.2048],
    mapQuery:
      "1908, 19th Floor, Indigo Icon, Cluster F, Jumeirah Lake Towers, Dubai, UAE",
  },
  {
    id: "germany-office",
    geoId: "276",
    city: "Ismaning",
    country: "Germany",
    title: "Corporate Headquarters",
    entity: "Metallo Manufacturing Technologies GmbH",
    region: "Europe commercial presence and buyer coordination",
    addressLines: ["Maximilianstraße 27", "80539 München, Germany"],
    kind: "registered-office",
    marker: [11.6986, 48.2254],
    mapQuery: "Maximilianstraße 27, 80539 München, Germany",
  },
];

export const OFFICE_KIND_LABELS: Record<OfficeKind, string> = {
  headquarters: "Global HQ",
  "regional-office": "Regional Office",
  "registered-office": "Registered Office",
};

export function normalizeGeoId(id: string | number): string {
  return String(id).padStart(3, "0");
}

export function getOfficeMapsUrl(office: GlobalOffice): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.mapQuery,
  )}`;
}
