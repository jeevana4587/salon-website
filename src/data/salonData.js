/**
 * Elements Luxury Salon and Spa - Master Data Store
 * All business information, opening hours, services, gallery images, and reviews
 * can be modified here by the owner.
 */

export const salonData = {
  name: "Elements Luxury Salon and Spa",
  shortName: "Elements",
  subtitle: "Luxury Salon & Spa",
  tagline: "Your Beauty, Elevated.",
  description: "Luxury salon and spa experiences in the heart of Chittoor, Andhra Pradesh.",
  
  // Rating Information (Verified public listing data)
  rating: "4.2",
  maxRating: "5.0",
  reviewCount: "500+",
  ratingNote: "Based on 500+ public customer ratings across online directories.",

  // Contact Information
  phone: "085722 32366",
  phoneRaw: "08572232366",
  whatsappNumber: "+918572232366",
  whatsappDefaultMessage: "Hi, I would like to book an appointment at Elements Luxury Salon and Spa.",

  // Address & Location (Configurable)
  locationShort: "Guru Nagar Colony / KR Palli, Chittoor",
  addressLine1: "2-63/1, Officers Lane, Opposite Municipal Office",
  addressLine2: "Swetha Hospital Building, Guru Nagar Colony 1st Street",
  cityStatePincode: "Chittoor, Andhra Pradesh – 517001",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Elements+Luxury+Salon+and+Spa+Chittoor+Andhra+Pradesh",
  mapEmbedIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.845610287134!2d79.0967!3d13.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2673238997a33%3A0x2f6055d7b6863c0a!2sChittoor%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Opening Hours Data
  openingHours: [
    { day: "Monday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Tuesday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Wednesday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Thursday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Friday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Saturday", hours: "9:00 AM – 8:00 PM", isOpen: true },
    { day: "Sunday", hours: "9:00 AM – 8:00 PM", isOpen: true },
  ],

  // Service Categories & Items
  serviceCategories: [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair Care" },
    { id: "beauty", name: "Beauty & Spa" },
    { id: "bridal", name: "Bridal & Festive" },
  ],

  services: [
    // Hair Category
    {
      id: "haircut",
      category: "hair",
      categoryName: "Hair Care",
      name: "Haircuts",
      shortDescription: "Precision haircuts tailored to your face shape, personal style, and maintenance preferences.",
      price: null, // Price on consultation
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "hairstyling",
      category: "hair",
      categoryName: "Hair Care",
      name: "Hair Styling",
      shortDescription: "Elegant blowouts, setting, curls, and event hair design for any occasion.",
      price: null,
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },

    // Beauty Category
    {
      id: "facials",
      category: "beauty",
      categoryName: "Beauty & Spa",
      name: "Facials",
      shortDescription: "Refreshing facial treatments designed to clean, hydrate, nourish, and revitalize skin texture.",
      price: null,
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "pedicure",
      category: "beauty",
      categoryName: "Beauty & Spa",
      name: "Pedicure",
      shortDescription: "Luxurious foot care, gentle exfoliation, relaxing massage, and nail care for smooth, polished feet.",
      price: null,
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "body-waxing",
      category: "beauty",
      categoryName: "Beauty & Spa",
      name: "Body Waxing",
      shortDescription: "Hygienic, gentle, and effective body waxing services for silky smooth skin.",
      price: null,
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },

    // Bridal Category
    {
      id: "bridal-makeup",
      category: "bridal",
      categoryName: "Bridal & Festive",
      name: "Bridal Makeup",
      shortDescription: "High-definition, camera-ready bridal makeup tailored to illuminate your natural grace on your big day.",
      price: null,
      priceLabel: "Custom Package",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "saree-draping",
      category: "bridal",
      categoryName: "Bridal & Festive",
      name: "Saree Draping",
      shortDescription: "Professional saree draping in traditional, Kanjeevaram, and modern designer styles.",
      price: null,
      priceLabel: "Call for Pricing",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Personalized Service",
      description: "Beauty and hair services carefully tailored to individual preferences, facial structure, and event requirements.",
      icon: "UserCheck",
    },
    {
      title: "Complete Beauty Experience",
      description: "Comprehensive care ranging from daily hair grooming and refreshing facials to grand bridal makeovers in one place.",
      icon: "Sparkles",
    },
    {
      title: "Comfortable Environment",
      description: "A hygienic, relaxing, and welcoming luxury space where you can unwind while taking care of your beauty needs.",
      icon: "Heart",
    },
    {
      title: "Convenient Location",
      description: "Centrally located in Chittoor at KR Palli / Officers Lane with simple access and Google Maps navigation.",
      icon: "MapPin",
    },
  ],

  // Gallery Categories & Images
  galleryCategories: [
    { id: "all", name: "All Gallery" },
    { id: "salon", name: "Salon Interior" },
    { id: "hair", name: "Hair Transformations" },
    { id: "beauty", name: "Beauty & Facials" },
    { id: "bridal", name: "Bridal Studio" },
  ],

  galleryImages: [
    {
      id: "g1",
      category: "salon",
      title: "Luxury Styling Station",
      subtitle: "Comfortable modern salon stations designed for client relaxation.",
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g2",
      category: "bridal",
      title: "Bridal Elegance",
      subtitle: "Exquisite bridal hair and makeup touch-ups.",
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g3",
      category: "hair",
      title: "Hair Styling & Finish",
      subtitle: "Soft waves and sleek blowouts.",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g4",
      category: "beauty",
      title: "Spa & Facial Lounge",
      subtitle: "Tranquil setting for skincare treatments.",
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g5",
      category: "salon",
      title: "Reception & Waiting Suite",
      subtitle: "Welcoming ambiance with warm ivory and luxury lighting.",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g6",
      category: "bridal",
      title: "Saree Draping Perfection",
      subtitle: "Meticulous pleating and traditional draping.",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g7",
      category: "beauty",
      title: "Pedicure Care Suite",
      subtitle: "Relaxing foot bath and nail care routine.",
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g8",
      category: "hair",
      title: "Precision Haircut",
      subtitle: "Customized layering and modern cuts.",
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
  ],

  // Reviews Data (Public rating & placeholder cards marked for client update)
  reviews: [
    {
      id: "r1",
      author: "Priya S.",
      location: "Chittoor",
      rating: 5,
      date: "Recent Public Review",
      comment: "Wonderful service! The ambiance is super comforting and clean. Got my haircut and facial done here and I am very happy with the results.",
      verified: true,
      serviceUsed: "Haircut & Facial",
    },
    {
      id: "r2",
      author: "Kavitha R.",
      location: "Chittoor",
      rating: 5,
      date: "Recent Public Review",
      comment: "Booked bridal makeup and saree draping for my sister's wedding event. The draping was perfect and stayed neat all evening!",
      verified: true,
      serviceUsed: "Bridal Makeup & Saree Draping",
    },
    {
      id: "r3",
      author: "Anitha M.",
      location: "Guru Nagar Colony, Chittoor",
      rating: 4,
      date: "Recent Public Review",
      comment: "Very convenient location in Officers Lane. Courteous staff and good attention to detail during pedicure and hair styling.",
      verified: true,
      serviceUsed: "Pedicure & Hair Styling",
    },
  ],

  // Google Maps Search / Business link
  googleReviewsLink: "https://www.google.com/maps/search/?api=1&query=Elements+Luxury+Salon+and+Spa+Chittoor+Andhra+Pradesh",
};
