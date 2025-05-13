import {
  ProductColorVariantKey,
  ProductSizeVariantKey,
} from "@/shared/entities/product";
import { getUserActions } from "@/shared/utils/user-actions";
import { create } from "zustand";

interface ProductVariantState {
  colorVariant: ProductColorVariantKey;
  sizeVariant: ProductSizeVariantKey;
  setColorVariant: (variant: ProductColorVariantKey) => void;
  setSizeVariant: (variant: ProductSizeVariantKey) => void;
}

const useProductVariantStore = create<ProductVariantState>()((set) => ({
  colorVariant: getUserActions()?.colorVariant || "black",
  sizeVariant: getUserActions()?.sizeVariant || "p",
  setColorVariant: (variant) => {
    set({ colorVariant: variant });
  },
  setSizeVariant: (variant) => {
    set({ sizeVariant: variant });
  },
}));

export { useProductVariantStore };
