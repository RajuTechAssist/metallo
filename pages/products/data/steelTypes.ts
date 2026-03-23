export interface SteelProductTypeGalleryItem {
  name: string;
  image: string;
}

export interface SteelProductTypeGallery {
  title: string;
  intro: string;
  items: SteelProductTypeGalleryItem[];
}

export interface SteelProduct {
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  Grades: string;
  Standards: string;
  Application: string;
  thumbnail: string;
  materialGroup?: string;
  Thickness?: string;
  "Pressure Class"?: string;
  Type?: string;
  Material?: string;
  OD?: string;
  WallThickness?: string;
  Length?: string;
  EndFinish?: string;
  SurfaceFinish?: string;
  TensileStrength?: string;
  YieldStrength?: string;
  Elongation?: string;
  Hardness?: string;
  Certification?: string[];
  Testing?: string;
  Applications?: string[];
  applicationImage?: string;
  descriptionParagraphs?: string[];
  typeGallery?: SteelProductTypeGallery;
  sourceLabel?: string;
  sourceUrl?: string;
}
