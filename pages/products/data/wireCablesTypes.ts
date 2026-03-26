import type { ProductSpecItem } from "../../../components/product";

export interface WireCableProduct {
  id: string;
  Category: string;
  "Sub-Category": string;
  "Product Name": string;
  Description: string;
  descriptionParagraphs: string[];
  thumbnail: string;
  panelImage?: string;
  crossSectionImage?: string;
  applicationImage?: string;
  technicalSpecifications: ProductSpecItem[];
  constructionSpecifications: ProductSpecItem[];
  applicableStandards?: string[];
  insulatedMaterials?: string[];
  industries?: string[];
  certifications?: string[];
  rangeNotes?: string[];
}
