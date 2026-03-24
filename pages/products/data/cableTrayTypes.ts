import type { ProductSpecItem } from "../../../components/product";

export interface CableTrayRangeTable {
  title: string;
  columns: string[];
  rows: string[][];
  notes?: string[];
}

export interface CableTrayTypeGalleryItem {
  name: string;
  image: string;
  description?: string;
}

export interface CableTrayTypeGallery {
  title: string;
  intro: string;
  items: CableTrayTypeGalleryItem[];
}

export interface TrayProduct {
  id: string;
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  descriptionParagraphs: string[];
  thumbnail: string;
  applicationImage?: string;
  technicalSpecifications: ProductSpecItem[];
  features?: string[];
  applications?: string[];
  rangeTables?: CableTrayRangeTable[];
  typeGallery?: CableTrayTypeGallery;
  sourceLabel?: string;
  sourceUrl?: string;
}
