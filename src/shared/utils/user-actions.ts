import Cookies from "js-cookie";

import { useProductVariantStore } from "@/features/product-details/stores/product-variant-store";
import {
  ProductColorVariantKey,
  ProductSizeVariantKey,
} from "../entities/product";

type ActionsData = {
  colorVariant?: ProductColorVariantKey;
  sizeVariant?: ProductSizeVariantKey;
  zipCode?: string;
};

const COOKIE_EXPIRE_MINUTES = 15;

export function saveUserActions(actions?: Record<string, unknown>) {
  const initialActions = Cookies.get("actions");
  const parsedInitialActions = JSON.parse(initialActions || "{}");

  // stores
  const colorVariant = useProductVariantStore.getState().colorVariant;
  const sizeVariant = useProductVariantStore.getState().sizeVariant;

  const final = {
    ...parsedInitialActions,
    colorVariant,
    sizeVariant,
    ...actions,
  };
  console.log("saving", final);

  Cookies.set("actions", JSON.stringify(final), {
    expires: COOKIE_EXPIRE_MINUTES / 1440,
  });
}

export function getUserActions(): ActionsData {
  const initialActions = Cookies.get("actions");
  return initialActions ? JSON.parse(initialActions) : {};
}
