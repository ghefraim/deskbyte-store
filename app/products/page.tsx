"use client";

import { useState } from "react";
import { Shell } from "@/components/shell";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data/products";
import { useLanguage } from "@/lib/hooks/useLanguage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, ShoppingBag } from "lucide-react";

export default function ProductsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Shell>
      <div className="container py-10 lg:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {t("allProducts")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of desk and home office accessories
            designed to enhance your workspace experience.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10 bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground font-medium">
              {t("filterBy")}:
            </span>
          </div>

          <div className="w-full lg:w-[220px]">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="border-muted-foreground/20">
                <SelectValue placeholder={t("categories.all")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("categories.all")}</SelectItem>
                <SelectItem value="lamp">{t("categories.lamp")}</SelectItem>
                <SelectItem value="stand">{t("categories.stand")}</SelectItem>
                <SelectItem value="hub">{t("categories.hub")}</SelectItem>
                <SelectItem value="charger">
                  {t("categories.charger")}
                </SelectItem>
                <SelectItem value="organizer">
                  {t("categories.organizer")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-xl font-medium mb-2">No products found</p>
              <p className="text-muted-foreground">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}
