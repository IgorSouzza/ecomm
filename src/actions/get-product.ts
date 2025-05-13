"use server";

import { Product } from "@/shared/entities/product";

export async function getProduct(): Promise<Product> {
  // Fetch this product from API
  const product: Product = {
    id: "1",
    title: "T-shirt Prime",
    price: 61.84,
    colorVariants: {
      black: {
        label: "Preto",
        thumbnails: [
          {
            id: "1",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 1",
          },
          {
            id: "2",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 2",
          },
          {
            id: "3",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 3",
          },
          {
            id: "4",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 4",
          },
          {
            id: "5",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 5",
          },
          {
            id: "6",
            src: "https://placehold.co/600x400/black/FFFFFF/png?text=Product 6",
          },
        ],
      },
      orange: {
        label: "Laranja",
        thumbnails: [
          {
            id: "1",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 1",
          },
          {
            id: "2",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 2",
          },
          {
            id: "3",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 3",
          },
          {
            id: "4",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 4",
          },
          {
            id: "5",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 5",
          },
          {
            id: "6",
            src: "https://placehold.co/600x400/orange/FFFFFF/png?text=Product 6",
          },
        ],
      },
      red: {
        label: "Vermelho",
        thumbnails: [
          {
            id: "1",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 1",
          },
          {
            id: "2",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 2",
          },
          {
            id: "3",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 3",
          },
          {
            id: "4",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 4",
          },
          {
            id: "5",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 5",
          },
          {
            id: "6",
            src: "https://placehold.co/600x400/red/FFFFFF/png?text=Product 6",
          },
        ],
      },
    },
    sizeVariants: {
      p: {
        label: "P",
      },
      m: {
        label: "M",
      },
      g: {
        label: "G",
      },
      gg: {
        label: "GG",
      },
      xgg: {
        label: "XGG",
      },
    },
  };

  return product;
}
