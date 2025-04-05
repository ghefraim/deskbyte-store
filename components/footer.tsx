"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center text-lg font-bold">
              <span className="mr-2 text-primary">🖥️</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
                DeskMode
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium desk and home office accessories for productivity and
              comfort.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("products")}
              </Link>
              <Link
                href="/cart"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("cart")}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Categories
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("categories.lamp")}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("categories.stand")}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("categories.hub")}
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("categories.charger")}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: info@deskmode.com
            </p>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DeskMode. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
