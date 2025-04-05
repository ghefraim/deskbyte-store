"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <Shell>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-[600px] w-full">
          <Image
            src="https://wallpaperswide.com/download/modern_accounting_office_desk-wallpaper-3554x1999.jpg"
            alt="Modern Workspace"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl fade-in">
                {t("heroTitle")}
              </h1>
              <p
                className="text-white/90 text-xl leading-relaxed fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {t("heroSubtitle")}
              </p>
              <div
                className="flex flex-wrap gap-4 fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Link href="/products">
                  <Button size="lg" className="button-hover-effect">
                    {t("shopNow")}
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 button-hover-effect"
                  >
                    {t("browseCollection")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">
            {t("featuredProducts")}
          </h2>
          <p className="max-w-[700px] text-muted-foreground lg:text-xl">
            {t("featuredProductsSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="button-hover-effect group"
            >
              {t("viewAllProducts")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl mb-4">
              {t("whyChooseTitle")}
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              {t("whyChooseSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="feature-card flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M12 2v20" />
                  <path d="M2 5h20" />
                  <path d="M14 11V9a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{t("ergonomicDesign")}</h3>
              <p className="text-muted-foreground">
                {t("ergonomicDesignDesc")}
              </p>
            </div>
            <div className="feature-card flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{t("premiumQuality")}</h3>
              <p className="text-muted-foreground">{t("premiumQualityDesc")}</p>
            </div>
            <div className="feature-card flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">{t("smartIntegration")}</h3>
              <p className="text-muted-foreground">
                {t("smartIntegrationDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-primary/5 rounded-xl p-8 lg:p-12 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="max-w-[600px] text-muted-foreground mb-8">
              {t("ctaSubtitle")}
            </p>
            <Link href="/products">
              <Button size="lg" className="button-hover-effect">
                {t("shopAllProducts")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
