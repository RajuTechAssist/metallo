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
    },
    [pathname, router],
  );

  return [params, setParams] as const;
}
