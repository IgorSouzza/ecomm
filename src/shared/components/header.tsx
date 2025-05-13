import { Bell, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <div className="w-full bg-neutral-900 text-white py-4 px-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Ecomm</h1>
        <div className="flex gap-4">
          <ShoppingCart className="size-5 cursor-pointer" />
          <Bell className="size-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
