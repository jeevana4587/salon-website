/**
 * 6th Face Salon - Master Data Store
 * All business information, opening hours, service descriptions, gallery items,
 * and verified Google Business rating highlights for 6th Face Salon.
 */

export const salonData = {
  name: "6th Face Salon",
  shortName: "6th Face",
  subtitle: "Salon & Barber Shop",
  tagline: "Quality Hair & Beauty Services in Chittoor.",
  description: "6th Face Salon offers professional haircutting, hair treatments, facial care, and grooming services on Ganganapalli Road, Kannaiah Naidu Colony near Thenabanda Dargah in Chittoor.",
  
  // Rating Information (Verified Google Business listing data)
  rating: "5.0",
  maxRating: "5.0",
  reviewCount: "609 reviews",
  ratingNote: "Based on 609 verified customer reviews on Google Business Profile.",

  // Contact Information (No invented phone or WhatsApp number per instructions)
  phone: null,
  phoneRaw: null,
  whatsappNumber: null,
  whatsappDefaultMessage: null,

  // Location Details
  locationShort: "Ganganapalli Road, Kannaiah Naidu Colony",
  addressLine1: "Ganganapalli Road, Kannaiah Naidu Colony",
  addressLine2: "Near Thenabanda Dargah",
  cityStatePincode: "Chittoor, Andhra Pradesh – 517001",
  landmark: "Thenabanda Dargah",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=6th+Face+Salon+Ganganapalli+Road+Kannaiah+Naidu+Colony+Chittoor+Andhra+Pradesh",
  mapEmbedIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.845610287134!2d79.0967!3d13.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2673238997a33%3A0x2f6055d7b6863c0a!2sChittoor%2C%20Andhra%20Pradesh%20517001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Opening Hours Data (Google Business Hours: Open daily, closes at 9:00 PM)
  openingHours: [
    { day: "Monday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Tuesday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Wednesday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Thursday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Friday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Saturday", hours: "9:00 AM – 9:00 PM", isOpen: true },
    { day: "Sunday", hours: "9:00 AM – 9:00 PM", isOpen: true },
  ],

  // Service Categories & Verified Neutral Offerings
  serviceCategories: [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair & Grooming" },
    { id: "skin", name: "Skin & Facials" },
  ],

  services: [
    {
      id: "hair-care-styling",
      category: "hair",
      categoryName: "Hair & Grooming",
      name: "Hair Cuts & Styling",
      shortDescription: "Precision haircutting and personal styling for adults and kids in a clean, comfortable environment.",
      price: null,
      priceLabel: "Available at Salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "hair-treatment",
      category: "hair",
      categoryName: "Hair & Grooming",
      name: "Hair Treatment",
      shortDescription: "Nourishing hair care treatments and scalp conditioning services highlighted for quality results.",
      price: null,
      priceLabel: "Available at Salon",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "beard-grooming",
      category: "hair",
      categoryName: "Hair & Grooming",
      name: "Beard Grooming & Shaving",
      shortDescription: "Neat beard trimming, shaping, and traditional barber grooming with clean equipment.",
      price: null,
      priceLabel: "Available at Salon",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "facials-skincare",
      category: "skin",
      categoryName: "Skin & Facials",
      name: "Facials & Skin Care",
      shortDescription: "Refreshing facial treatments designed for skin care and relaxation in a hygienic atmosphere.",
      price: null,
      priceLabel: "Available at Salon",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ],

  // Why Choose 6th Face Salon (Adapted to customer review themes)
  whyChooseUs: [
    {
      title: "Good Service & Skill",
      description: "Dedicated attention to haircutting, hair treatments, and personal grooming by experienced salon barbers.",
      icon: "UserCheck",
    },
    {
      title: "Clean Equipment & Hygiene",
      description: "Maintains a clean equipment setup and a hygienic environment for a safe and comforting experience.",
      icon: "Sparkles",
    },
    {
      title: "Attractive Interiors & Furniture",
      description: "Features modern styling stations, quality furniture and fittings, and a relaxing ambient atmosphere.",
      icon: "Heart",
    },
    {
      title: "Convenient Location & Fair Pricing",
      description: "Located on Ganganapalli Road near Thenabanda Dargah with reasonable pricing for everyday care.",
      icon: "MapPin",
    },
  ],

  // Gallery Categories & Images
  galleryCategories: [
    { id: "all", name: "All Gallery" },
    { id: "interior", name: "Salon Interiors" },
    { id: "grooming", name: "Hair & Grooming" },
  ],

  galleryImages: [
    {
      id: "g1",
      category: "interior",
      title: "Quality Salon Fittings",
      subtitle: "Comfortable styling chairs and quality furniture setup.",
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g2",
      category: "grooming",
      title: "Hair Treatment Lounge",
      subtitle: "Clean equipment and relaxing ambience.",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g3",
      category: "interior",
      title: "Attractive Salon Interiors",
      subtitle: "Well-lit interior layout on Ganganapalli Road.",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-square",
    },
    {
      id: "g4",
      category: "grooming",
      title: "Barber & Grooming Station",
      subtitle: "Hygienic setup for haircutting and beard grooming.",
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      aspect: "aspect-[4/5]",
    },
  ],

  // Customer Reviews (Paraphrased verified review themes per guidelines)
  reviews: [
    {
      id: "r1",
      author: "Verified Customer Highlight",
      location: "Chittoor",
      rating: 5,
      date: "Google Review Theme",
      comment: "Customers consistently highlight the quality of service, skilled hair treatments, and attentive care provided by the salon staff.",
      verified: true,
      serviceUsed: "Good Service & Hair Treatment",
    },
    {
      id: "r2",
      author: "Verified Customer Highlight",
      location: "Kannaiah Naidu Colony",
      rating: 5,
      date: "Google Review Theme",
      comment: "Visitors appreciate the clean equipment, hygienic environment, attractive interiors, and quality furniture fittings.",
      verified: true,
      serviceUsed: "Clean Equipment & Hygiene",
    },
    {
      id: "r3",
      author: "Verified Customer Highlight",
      location: "Near Thenabanda Dargah",
      rating: 5,
      date: "Google Review Theme",
      comment: "Customers mention the salon's relaxing ambience along with reasonable pricing for hair and facial grooming services.",
      verified: true,
      serviceUsed: "Relaxing Ambience & Fair Pricing",
    },
  ],

  // Google Maps Search / Business link for 6th Face Salon
  googleReviewsLink: "https://www.google.com/maps/search/?api=1&query=6th+Face+Salon+Ganganapalli+Road+Kannaiah+Naidu+Colony+Chittoor+Andhra+Pradesh",
};
