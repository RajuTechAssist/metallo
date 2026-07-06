"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ParamInput = Record<string, string> | URLSearchParams;

export function useSearchParamsState() {
  const params = useSearchParams() ?? new URLSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setParams = useCallback(
    (next: ParamInput) => {
      const updated =
        next instanceof URLSearchParams
          ? next
          : new URLSearchParams(next as Record<string, string>);
      const qs = updated.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });

      // Smart scroll alignment to the sticky category navigation
      setTimeout(() => {
        const el = document.getElementById("product-category-nav");
        if (el) {
          const topOffset = parseInt(window.getComputedStyle(el).top) || 0;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - topOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    },
    [pathname, router],
  );

  return [params, setParams] as const;
}
