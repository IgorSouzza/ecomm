"use client";

import { Product } from "@/shared/entities/product";
import { cn } from "@/shared/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useProductVariantStore } from "../stores/product-variant-store";

type ProductImageViewerProps = {
  product: Product;
};

export function ProductImageViewer({ product }: ProductImageViewerProps) {
  const colorVariant = useProductVariantStore((store) => store.colorVariant);
  const [selectedThumb, setSelectedThumb] = useState(
    product.colorVariants[colorVariant]?.thumbnails[0] ?? { src: "", id: "" }
  );

  useEffect(() => {
    setSelectedThumb(
      product.colorVariants[colorVariant]?.thumbnails[0] ?? { src: "", id: "" }
    );
  }, [colorVariant, product.colorVariants]);

  return (
    <div className="w-full lg:w-[35vw]">
      <Image
        src={selectedThumb.src}
        width={600}
        height={400}
        alt=""
        className="rounded w-full"
      />
      <div className="grid grid-cols-6 gap-2 mt-2">
        {product.colorVariants[colorVariant]?.thumbnails?.map((thumb) => (
          <div
            key={thumb.id}
            role="button"
            onClick={() => setSelectedThumb(thumb)}
          >
            <Image
              src={thumb.src}
              width={400}
              height={600}
              alt=""
              className={cn(
                "aspect-square rounded bg-cover cursor-pointer border-2 hover:border-neutral-900",
                selectedThumb.id === thumb.id ? "border-neutral-900" : ""
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
