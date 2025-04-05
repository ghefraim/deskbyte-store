"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { toast } from "sonner";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Package,
  Clock,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  const { addItem } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`${product.name} added to cart!`);
    }
  };

  if (!product) {
    return (
      <Shell>
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link href="/products">
            <Button variant="outline" className="mt-4">
              Back to Products
            </Button>
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="container py-10">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("products")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative bg-muted/20 rounded-xl overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {product.featured && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              {product.name}
            </h1>

            <div className="text-2xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </div>

            <div className="mb-6">
              <p className="text-base text-muted-foreground">
                {product.description}
              </p>
            </div>

            <Separator className="my-6" />

            {/* Stock Information */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  product.stock > 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <Package className="w-4 h-4" />
                {product.stock > 0 ? t("inStock") : t("outOfStock")}
              </div>

              {product.stock > 0 && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Ships in 1-2 business days</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-full"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={quantity >= product.stock}
                  className="h-10 w-10 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full button-hover-effect h-12 text-base"
              size="lg"
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {t("addToCart")}
            </Button>

            {/* Shipping Information */}
            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h3 className="font-medium mb-2">Shipping Information</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Free shipping on orders over $50
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  30-day money-back guarantee
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  1-year warranty on all products
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
