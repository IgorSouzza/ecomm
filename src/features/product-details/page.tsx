import { ProductDetails } from "./components/product-details";
import { ProductImageViewer } from "./components/product-image-viewer";
import { getProduct } from "@/actions/get-product";

export async function ProductDetailsPage() {
  const product = await getProduct()

  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex gap-32 bg-white container mx-auto p-4 mt-4 rounded">
      <ProductImageViewer product={product} />
      <ProductDetails product={product} />
    </div>
  );
}
