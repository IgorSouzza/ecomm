import {
  ProductColorVariantKey,
  ProductSizeVariantKey,
} from "@/shared/entities/product";
import { create } from "zustand";

interface ProductVariantState {
  colorVariant: ProductColorVariantKey;
  sizeVariant: ProductSizeVariantKey;
  setColorVariant: (variant: ProductColorVariantKey) => void;
  setSizeVariant: (variant: ProductSizeVariantKey) => void;
}

const useProductVariantStore = create<ProductVariantState>()((set) => ({
  colorVariant: "black",
  sizeVariant: "p",
  setColorVariant: (variant) => {
    set({ colorVariant: variant });
  },
  setSizeVariant: (variant) => {
    set({ sizeVariant: variant });
  },
}));

export { useProductVariantStore };
