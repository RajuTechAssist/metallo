"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useLocation() {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const search = searchParams && searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  return { pathname, search } as const;
}
