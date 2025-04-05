"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { useCartStore } from "@/lib/store/cart";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShoppingCart, Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const cartStore = useCartStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cartStore.getTotalItems());
  }, [cartStore.getTotalItems()]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ro" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center text-xl font-bold">
            <span className="mr-2 text-primary">🖥️</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              DeskMode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex ml-4">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("products")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full w-18 h-9"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4 mr-1" />
            {language === "en" ? (
              <span className="text-xs font-medium">EN</span>
            ) : (
              <span className="text-xs font-medium">RO</span>
            )}
          </Button>

          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full w-9 h-9"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full w-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="container md:hidden py-4 border-t bg-background">
          <nav className="flex flex-col space-y-3">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t("home")}
              </Button>
            </Link>
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t("products")}
              </Button>
            </Link>
            <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t("cart")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
