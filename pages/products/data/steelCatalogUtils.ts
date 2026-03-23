import type {
  SteelProductTypeGallery,
  SteelProductTypeGalleryItem,
} from "./steelTypes";

export const normalizeSteelList = (
  items: readonly (string | undefined | null)[] = [],
) =>
  Array.from(
    new Set(
      items
        .map((item) => item?.trim())
        .filter((item): item is string => Boolean(item)),
    ),
  );

export const formatSteelList = (
  items: readonly (string | undefined | null)[] = [],
  maxItems = items.length,
) => {
  const normalized = normalizeSteelList(items);
  if (normalized.length === 0) return "";
  if (normalized.length <= maxItems) return normalized.join(", ");
  return `${normalized.slice(0, maxItems).join(", ")}, +${
    normalized.length - maxItems
  } more`;
};

export const createSteelTypeItem = (
  name: string,
  image: string,
): SteelProductTypeGalleryItem => ({
  name,
  image,
});

export const createSteelTypeGallery = (
  title: string,
  intro: string,
  items: SteelProductTypeGallery["items"],
): SteelProductTypeGallery => ({
  title,
  intro,
  items,
});
