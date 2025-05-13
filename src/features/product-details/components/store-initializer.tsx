"use client";

import { useRef } from "react";
import { ProductVariantState, useProductVariantStore } from "../stores/product-variant-store";

export function StoreInitializer({ state }: { state: ProductVariantState }) {
  const initializer = useRef(false);

  if (!initializer.current) {
    useProductVariantStore.setState(state);
    initializer.current = true;
  }

  return null;
}
