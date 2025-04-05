export type Language = "en" | "ro";

export const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",

    // Home Page
    heroTitle: "Elevate Your Workspace",
    heroSubtitle: "Premium desk accessories for productivity and comfort",
    featuredProducts: "Featured Products",
    shopNow: "Shop Now",
    viewAll: "View All Products",

    // Products Page
    allProducts: "All Products",
    filterBy: "Filter by",
    categories: {
      all: "All Categories",
      lamp: "Lamps",
      stand: "Stands",
      hub: "Hubs",
      charger: "Chargers",
      organizer: "Organizers",
    },

    // Product Detail Page
    addToCart: "Add to Cart",
    inStock: "In Stock",
    outOfStock: "Out of Stock",

    // Cart Page
    yourCart: "Your Cart",
    emptyCart: "Your cart is empty",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    proceedToCheckout: "Proceed to Checkout",

    // Checkout Page
    checkout: "Checkout",
    billingInformation: "Billing Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    address: "Address",
    city: "City",
    zipCode: "Zip Code",
    country: "Country",
    paymentMethod: "Payment Method",
    placeOrder: "Place Order",

    // Success Page
    orderSuccess: "Order Placed Successfully!",
    orderThankYou: "Thank you for your purchase",
    orderDetails: "We've sent the order details to your email",
    backToShopping: "Back to Shopping",

    // Cart translations
    cart: "Coș",
    cartEmpty: "Coșul tău este gol",
    cartEmptyDescription: "Nu ai adăugat încă niciun produs în coș",
    browseProducts: "Vezi produse",
    each: "bucata",
    remove: "Elimină",
    clearCart: "Golește coșul",
    orderSummary: "Sumar comandă",
    securePayment: "Plată securizată",
    freeShippingMessage: "Transport gratuit pentru comenzi peste $50",

    // Checkout translations
    backToCart: "Back to Cart",
    firstNamePlaceholder: "Ion",
    lastNamePlaceholder: "Popescu",
    emailPlaceholder: "ghiurau.efraim@example.com",
    addressPlaceholder: "Strada Principală 123",
    cityPlaceholder: "București",
    zipCodePlaceholder: "012345",
    countryPlaceholder: "România",
    creditCard: "Credit Card",
    mockPayment: "Payment mock",
    processing: "Processing...",
    quantity: "Quantity",
    secureCheckout: "Secure Checkout",

    // Success translations
    orderConfirmation:
      "Thank you for your order. You will receive a confirmation email soon.",
    orderNumber: "Order number",
    confirmed: "Confirmed",
    orderDate: "Order date",
    estimatedDelivery: "Estimated delivery",
    trackingInfo: "You will receive tracking information by email",
    paymentConfirmed: "Payment confirmed",
    orderEmailConfirmation:
      "An email of confirmation has been sent to your address",
  },
  ro: {
    // Navigation
    home: "Acasă",
    products: "Produse",
    cart: "Coș",

    // Home Page
    heroTitle: "Îmbunătățește-ți Spațiul de Lucru",
    heroSubtitle:
      "Accesorii premium pentru birou pentru productivitate și confort",
    featuredProducts: "Produse Recomandate",
    shopNow: "Cumpără Acum",
    viewAll: "Vezi Toate Produsele",

    // Products Page
    allProducts: "Toate Produsele",
    filterBy: "Filtrează după",
    categories: {
      all: "Toate Categoriile",
      lamp: "Lămpi",
      stand: "Suporturi",
      hub: "Hub-uri",
      charger: "Încărcătoare",
      organizer: "Organizatoare",
    },

    // Product Detail Page
    addToCart: "Adaugă în Coș",
    inStock: "În Stoc",
    outOfStock: "Stoc Epuizat",

    // Cart Page
    yourCart: "Coșul Tău",
    emptyCart: "Coșul tău este gol",
    subtotal: "Subtotal",
    shipping: "Transport",
    total: "Total",
    proceedToCheckout: "Continuă către Plată",

    // Checkout Page
    checkout: "Finalizare Comandă",
    billingInformation: "Informații de Facturare",
    firstName: "Prenume",
    lastName: "Nume",
    email: "Email",
    address: "Adresă",
    city: "Oraș",
    zipCode: "Cod Poștal",
    country: "Țară",
    paymentMethod: "Metodă de Plată",
    placeOrder: "Plasează Comanda",

    // Success Page
    orderSuccess: "Comandă Plasată cu Succes!",
    orderThankYou: "Îți mulțumim pentru achiziție",
    orderDetails: "Am trimis detaliile comenzii pe email",
    backToShopping: "Înapoi la Cumpărături",

    // Cart translations
    cart: "Coș",
    cartEmpty: "Coșul tău este gol",
    cartEmptyDescription: "Nu ai adăugat încă niciun produs în coș",
    browseProducts: "Vezi produse",
    each: "bucata",
    remove: "Elimină",
    clearCart: "Golește coșul",
    orderSummary: "Sumar comandă",
    securePayment: "Plată securizată",
    freeShippingMessage: "Transport gratuit pentru comenzi peste $50",

    // Checkout translations
    backToCart: "Înapoi la coș",
    firstNamePlaceholder: "Ion",
    lastNamePlaceholder: "Popescu",
    emailPlaceholder: "ion.popescu@example.com",
    addressPlaceholder: "Strada Principală 123",
    cityPlaceholder: "București",
    zipCodePlaceholder: "012345",
    countryPlaceholder: "România",
    creditCard: "Card de credit",
    mockPayment: "Plată simulată pentru demo",
    processing: "Se procesează...",
    quantity: "Cantitate",
    secureCheckout: "Checkout securizat",

    // Success translations
    orderConfirmation:
      "Îți mulțumim pentru comandă. Vei primi un email de confirmare în curând.",
    orderNumber: "Număr comandă",
    confirmed: "Confirmată",
    orderDate: "Data comenzii",
    estimatedDelivery: "Livrare estimată",
    trackingInfo: "Vei primi informații de urmărire prin email",
    paymentConfirmed: "Plata a fost procesată cu succes",
    orderEmailConfirmation: "Un email de confirmare a fost trimis la adresa ta",
  },
};
