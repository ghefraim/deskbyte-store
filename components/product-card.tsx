"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col product-card border border-border/40 shadow-sm hover:shadow-md transition-all duration-200">
      <Link
        href={`/products/${product.slug}`}
        className="product-image-container"
      >
        <div className="h-64 w-full relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="product-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="flex-1 flex flex-col justify-between p-5">
        <div>
          <Link href={`/products/${product.slug}`} className="hover:underline">
            <h3 className="font-medium text-lg">{product.name}</h3>
          </Link>
          <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.stock > 0 ? t("inStock") : t("outOfStock")}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full button-hover-effect group"
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          {t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
}
