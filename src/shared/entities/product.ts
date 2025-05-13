export type ProductColorVariantKey = "black" | "orange" | "red";
export type ProductSizeVariantKey = "p" | "m" | "g" | "gg" | "xgg";

export type ProductThumbnails = {
  id: string;
  src: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  colorVariants: {
    [key in ProductColorVariantKey]?: {
      label: string;
      thumbnails: ProductThumbnails[];
    };
  };
  sizeVariants: {
    [key in ProductSizeVariantKey]?: {
      label: string;
    };
  };
};
