"use client";

import Link from "next/link";
import { CheckCircle, Package, CreditCard, ArrowRight } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Separator } from "@/components/ui/separator";

export default function SuccessPage() {
  const { t } = useLanguage();
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <Shell>
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-3">{t("orderSuccess")}</h1>
            <p className="text-muted-foreground text-lg">
              {t("orderConfirmation")}
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">
                {t("orderNumber")}: DM-{orderId}
              </h2>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {t("confirmed")}
              </span>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("orderDate")}</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {t("estimatedDelivery")}
                </span>
                <span>
                  {new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {t("paymentMethod")}
                </span>
                <span>{t("creditCard")}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>{t("trackingInfo")}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                <span>{t("paymentConfirmed")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link href="/products">
              <Button size="lg" className="button-hover-effect">
                {t("continueShopping")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("orderEmailConfirmation")}
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
