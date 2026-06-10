import type { CategoryConfig, QAItem } from "./productLayout";

export interface ProductSpecItem {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductBadgeItem {
  label: string;
  tone?: "accent" | "neutral";
}

export interface ProductCatalogItem {
  id: string;
  category: string;
  subCategory?: string;
  name: string;
  description: string;
  image: string;
  applications?: string[];
  specifications?: ProductSpecItem[];
  badges?: ProductBadgeItem[];
  highlights?: string[];
  sourceLabel?: string;
  sourceUrl?: string;
  engineeringServicesTypes?: string[];
}

export interface ProductHeroConfig {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  breadcrumbLabel: string;
}

export interface ProductCTAConfig {
  title: string;
  description: string;
  ctaLabel: string;
  ctaIcon?: string;
  ctaLink?: string;
}

export interface ProductQABannerConfig {
  sectionLabel?: string;
  title: string;
  items: QAItem[];
}

export interface ConfigurableProductPageData {
  hero: ProductHeroConfig;
  categories: readonly CategoryConfig[];
  defaultCategoryKey: string;
  certBadge?: string;
  /** Key into VERTICAL_CERT_DATA — renders partners + certifications sections */
  verticalKey?: string;
  items: ProductCatalogItem[];
  catalogCtaLabel?: string;
  catalogCtaIcon?: string;
  qaBanner: ProductQABannerConfig;
  cta: ProductCTAConfig;
}
