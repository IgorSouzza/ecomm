"use client";

import { ChangeEvent } from "react";

import {
  Product,
  ProductColorVariantKey,
  ProductSizeVariantKey,
} from "@/shared/entities/product";
import { useProductVariantStore } from "../stores/product-variant-store";
import { formatToCurrency } from "@/shared/utils/number-format";
import { ZipCodeSearch } from "./zip-code-search";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const colorVariant = useProductVariantStore((store) => store.colorVariant);
  const setColorVariant = useProductVariantStore(
    (store) => store.setColorVariant
  );
  const sizeVariant = useProductVariantStore((store) => store.sizeVariant);
  const setSizeVariant = useProductVariantStore(
    (store) => store.setSizeVariant
  );

  function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedColor = e.target.value as ProductColorVariantKey;
    setColorVariant(selectedColor);
  }

  function handleSizeChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedSize = e.target.value as ProductSizeVariantKey;
    setSizeVariant(selectedSize);
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold">{product.title}</h1>
      <h2 className="text-3xl font-semibold my-4">
        {formatToCurrency(product.price)}
      </h2>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>Cor</label>
          <select
            name="color"
            className="w-32 border rounded border-neutral-900/40"
            onChange={handleColorChange}
            defaultValue={colorVariant}
          >
            {Object.keys(product.colorVariants).map((variant) => (
              <option key={variant} value={variant}>
                {product.colorVariants[variant as ProductColorVariantKey]
                  ?.label || "N/A"}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Tamanho</label>
          <select
            name="color"
            className="w-32 border rounded border-neutral-900/40"
            onChange={handleSizeChange}
            defaultValue={sizeVariant}
          >
            {Object.keys(product.sizeVariants).map((variant) => (
              <option key={variant} value={variant}>
                {product.sizeVariants[variant as ProductSizeVariantKey]
                  ?.label || "N/A"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <ZipCodeSearch />
      </div>
    </div>
  );
}
