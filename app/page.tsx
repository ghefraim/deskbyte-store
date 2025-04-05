import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
                Elevate Your Workspace
              </h1>
              <p
                className="text-white/90 text-xl leading-relaxed fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Premium desk accessories for productivity and comfort
              </p>
              <div
                className="flex flex-wrap gap-4 fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Link href="/products">
                  <Button size="lg" className="button-hover-effect">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 button-hover-effect"
                  >
                    Browse Collection
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
            Featured Products
          </h2>
          <p className="max-w-[700px] text-muted-foreground lg:text-xl">
            Discover our most popular desk accessories
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
              View All Products
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
              Why Choose DeskMode
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              We create products that transform your workspace experience
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
              <h3 className="text-xl font-semibold">Ergonomic Design</h3>
              <p className="text-muted-foreground">
                Products designed for comfort and productivity that adapt to
                your needs
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
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Crafted with high-quality, durable materials for long-lasting
                performance
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
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Smart Integration</h3>
              <p className="text-muted-foreground">
                Connect seamlessly with your devices for an enhanced workspace
                experience
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
              Ready to transform your workspace?
            </h2>
            <p className="max-w-[600px] text-muted-foreground mb-8">
              Explore our collection and find the perfect accessories to enhance
              your productivity and comfort.
            </p>
            <Link href="/products">
              <Button size="lg" className="button-hover-effect">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
