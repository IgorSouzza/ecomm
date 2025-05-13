import { ProductDetails } from "./components/product-details";
import { ProductImageViewer } from "./components/product-image-viewer";
import { getProduct } from "@/actions/get-product";
import { StoreInitializer } from "./components/store-initializer";
import { cookies } from "next/headers";

export async function ProductDetailsPage() {
  const product = await getProduct();
  const cookieStore = cookies();
  const reqCookies = await cookieStore;
  const actions = reqCookies.get("actions")?.value;
  const parsedActions = JSON.parse(actions || "{}");

  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col lg:flex-row gap-8 lg:gap-32 bg-white container mx-auto p-4 mt-4 rounded">
      <StoreInitializer state={parsedActions} />
      <ProductImageViewer product={product} />
      <ProductDetails product={product} />
    </div>
  );
}
