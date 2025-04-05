"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store/cart";
import { useLanguage } from "@/lib/hooks/useLanguage";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
  ArrowRight,
  CreditCard,
  Package,
} from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const { t } = useLanguage();
  const [isUpdating, setIsUpdating] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  // Helper function to handle quantity updates
  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setIsUpdating(true);
    setTimeout(() => {
      updateQuantity(productId, newQuantity);
      setIsUpdating(false);
    }, 300);
  };

  return (
    <Shell>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">{t("cart")}</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-muted rounded-full p-6 mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t("cartEmpty")}</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("cartEmptyDescription")}
            </p>
            <Link href="/products">
              <Button className="button-hover-effect">
                {t("browseProducts")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row border rounded-lg p-4 gap-4"
                  >
                    <div className="rounded-md overflow-hidden bg-muted/20 shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        width={120}
                        height={120}
                        className="w-full sm:w-[120px] h-auto sm:h-[120px] object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-medium hover:underline"
                        >
                          {item.product.name}
                        </Link>
                        <div className="font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground my-2">
                        ${item.product.price.toFixed(2)} {t("each")}
                      </p>

                      <div className="mt-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            disabled={item.quantity <= 1 || isUpdating}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.product.id,
                                Math.min(item.product.stock, item.quantity + 1)
                              )
                            }
                            disabled={
                              item.quantity >= item.product.stock || isUpdating
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="h-8 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          {t("remove")}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => clearCart()}
                  className="text-muted-foreground"
                >
                  {t("clearCart")}
                </Button>
                <Link href="/products">
                  <Button variant="outline">{t("continueShopping")}</Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="border rounded-lg p-6 sticky top-24">
                <h2 className="font-medium text-lg mb-4">
                  {t("orderSummary")}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("subtotal")}
                    </span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("shipping")}
                    </span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium text-lg">
                    <span>{t("total")}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full mt-6 button-hover-effect h-12 text-base">
                    <CreditCard className="mr-2 h-5 w-5" />
                    {t("checkout")}
                  </Button>
                </Link>

                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-4 w-4" />
                    <span>{t("securePayment")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    <span>{t("freeShippingMessage")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}
