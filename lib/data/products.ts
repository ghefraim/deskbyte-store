export type ProductCategory =
  | "lamp"
  | "stand"
  | "hub"
  | "charger"
  | "organizer";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: ProductCategory;
  featured: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: "desk-lamp-01",
    name: "LED Desk Lamp",
    slug: "led-desk-lamp",
    description:
      "Adjustable LED desk lamp with multiple brightness levels and color temperatures.",
    price: 49.99,
    images: [
      "https://s13emagst.akamaized.net/products/80975/80974786/images/res_d5d0e139903d2922e12c2ac1bf25e6d7.jpg",
    ],
    category: "lamp",
    featured: false,
    stock: 15,
  },
  {
    id: "laptop-stand-01",
    name: "Ergonomic Laptop Stand",
    slug: "ergonomic-laptop-stand",
    description:
      "Adjustable height laptop stand for improved posture and comfort.",
    price: 39.99,
    images: ["https://www.padforce.ro/wp-content/uploads/2023/07/gri-1.jpg"],
    category: "stand",
    featured: true,
    stock: 20,
  },
  {
    id: "usb-c-hub-01",
    name: "USB-C Hub 8-in-1",
    slug: "usb-c-hub-8-in-1",
    description:
      "Expand your laptop's connectivity with HDMI, USB-A, SD card reader, and more.",
    price: 59.99,
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFTFQxS5Rv1nMVfU3HiJL2ebBTrr0EnqcJHcCSdSTJSH1TirfDONUkhGHnKEQPMojTwEKd9qkP_BjwBjUFnyEVCK5NGvS48FD1XrmGuP6pKmrj8XZu8SadGh4",
    ],
    category: "hub",
    featured: true,
    stock: 12,
  },
  {
    id: "wireless-charger-01",
    name: "Wireless Charging Pad",
    slug: "wireless-charging-pad",
    description: "Fast wireless charging for all Qi-compatible devices.",
    price: 29.99,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbL5hWH850dtKQIavL7uHzkQdb543MtSPUkeqYpa4uIsEtMEHIgY2V5Jravy9LiXsa6kX2QX9Lf8UJpRhQWEEtdfNdeJeorTsSxcSazO_QEBAcmewbkj35yaTtFkFh0c-55RJz&usqp=CAc",
    ],
    category: "charger",
    featured: false,
    stock: 25,
  },
  {
    id: "desk-organizer-01",
    name: "Desk Organizer",
    slug: "desk-organizer",
    description:
      "Keep your desk tidy with multiple compartments for stationery and gadgets.",
    price: 24.99,
    images: [
      "https://ubrands.com/cdn/shop/files/17dc59629e80da7cc1ac324e47f4a1480ec91f6f.jpg?v=1714503090&width=1946",
    ],
    category: "organizer",
    featured: false,
    stock: 18,
  },
  {
    id: "monitor-stand-01",
    name: "Dual Monitor Stand",
    slug: "dual-monitor-stand",
    description:
      "Support two monitors with adjustable height and angle for optimal viewing.",
    price: 79.99,
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScEmXStO47cWuJ_PyWOAVNlqOE0gZ9MoHvm71PtUEifXIdJ080c0SnWpjSzp3vA7mzauP-Di4fTBFIwsYYwK9Wu5OcfMnnirBpqSVfr2kexYNWGx1bSWXr",
    ],
    category: "stand",
    featured: true,
    stock: 10,
  },
  {
    id: "fast-charger-01",
    name: "65W GaN Charger",
    slug: "65w-gan-charger",
    description:
      "Compact and powerful 65W charger for laptops, tablets, and phones.",
    price: 49.99,
    images: [
      "https://eu.ugreen.com/cdn/shop/products/nexode-pro-65w-3-port-gan-ultra-slim-fast-charger-856016.png?v=1705414495&width=400",
    ],
    category: "charger",
    featured: false,
    stock: 22,
  },
  {
    id: "desk-lamp-02",
    name: "Smart Desk Lamp",
    slug: "smart-desk-lamp",
    description:
      "Voice-controlled desk lamp with app integration and scheduling.",
    price: 69.99,
    images: [
      "https://www.luminam.ro/lampa-led-dimabila-de-masa-cu-incarcare-fara-fir-qi-si-usb-kingfisher-led-8-5w-230v-negru-img-im0295-fd-2.webp",
    ],
    category: "lamp",
    featured: false,
    stock: 8,
  },
];
