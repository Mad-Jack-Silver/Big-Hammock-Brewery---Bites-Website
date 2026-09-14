/**
 * Big Hammock Brewery & Bites - Menu & Draft Database
 * Authentic data from BHB brewpub menu & taproom
 */

const MENU_DATA = {
  categories: [
    { id: "all", name: "Full Menu", icon: "bi-grid-fill" },
    { id: "appetizers", name: "Bites & Apps", icon: "bi-egg-fried" },
    { id: "ramen", name: "Ramen Bowls", icon: "bi-cup-hot" },
    { id: "bao", name: "Bao Buns", icon: "bi-cloud-sun" },
    { id: "bowls-sandwiches", name: "Bowls & Sandwiches", icon: "bi-layers" },
    { id: "draft-beers", name: "Craft Beers On Tap", icon: "bi-cup-straw" },
    { id: "sides-extras", name: "Sides & Add-Ons", icon: "bi-plus-circle" }
  ],
  items: [
    // APPETIZERS
    {
      id: "hot-pretzel",
      category: "appetizers",
      name: "Giant Bavarian Hot Pretzel",
      price: "$8.50",
      description: "Warm artisan pretzel baked soft and golden, dusted with coarse sea salt. Served with our house craft beer cheese dip and classic yellow mustard.",
      tags: ["House Favorite", "Vegetarian"],
      image: "assets/images/food/hot-pretzel.jpg",
      calories: "480 cal"
    },
    {
      id: "gyoza-potstickers",
      category: "appetizers",
      name: "Pan-Seared Gyoza (Potstickers)",
      price: "$9.00",
      description: "Crispy pan-fried dumplings filled with choice of seasoned pork or garden vegetables. Served with scallions and our signature soy-wasabi dipping sauce.",
      tags: ["Pork or Veggie", "Chef Pick"],
      image: "assets/images/food/potstickers-gyoza.jpg",
      calories: "340 cal"
    },
    {
      id: "scallion-pancakes",
      category: "appetizers",
      name: "Crispy Scallion Pancakes",
      price: "$8.50",
      description: "Traditional flaky layered Asian flatbread pan-seared until extra crisp, infused with fresh scallions and served with sweet ginger-soy glaze.",
      tags: ["Vegetarian", "Crispy"],
      image: "assets/images/food/appetizers-spread.jpg",
      calories: "390 cal"
    },
    {
      id: "edamame-steamed",
      category: "appetizers",
      name: "Togarashi Garlic Edamame",
      price: "$7.00",
      description: "Young soybean pods steamed hot and tossed with flaky Maldon sea salt, garlic butter, and spicy Japanese togarashi chili.",
      tags: ["Gluten-Free", "Vegetarian"],
      image: "assets/images/food/rice-bowl.jpg",
      calories: "220 cal"
    },

    // RAMEN
    {
      id: "signature-mazemen",
      category: "ramen",
      name: "Signature Miso Butter Mazemen",
      price: "$15.50",
      description: "Our beloved broth-less ramen. Springy noodles tossed in rich umami butter miso tare sauce, topped with bok choy, shiitake mushrooms, scallions, and your choice of braised pork belly or roast chicken.",
      tags: ["BHB Signature", "Broth-less"],
      image: "assets/images/food/mazemen-noodles.jpg",
      calories: "720 cal"
    },
    {
      id: "traditional-tonkotsu",
      category: "ramen",
      name: "Traditional Tonkotsu Ramen",
      price: "$16.50",
      description: "Rich, velvety 16-hour simmered pork bone broth, tender thick-cut chashu pork belly, ajitsuke molten egg, menma bamboo shoots, scallions, and roasted nori seaweed.",
      tags: ["Top Rated", "House Broth"],
      image: "assets/images/food/signature-ramen.jpg",
      calories: "850 cal"
    },
    {
      id: "spicy-miso-ramen",
      category: "ramen",
      name: "Downtown Spicy Garlic Miso Ramen",
      price: "$16.50",
      description: "Hearty fermented miso broth with house chili crunch paste, garlic oil, minced pork, sweet charred corn, bamboo shoots, scallions, and ajitsuke egg.",
      tags: ["Spicy", "Comfort Food"],
      image: "assets/images/food/signature-ramen.jpg",
      calories: "810 cal"
    },
    {
      id: "vegan-umami-ramen",
      category: "ramen",
      name: "Harvest Veggie Dashi Ramen",
      price: "$14.50",
      description: "Golden shiitake and kombu vegetable dashi broth, pan-seared organic tofu, sweet corn, baby bok choy, wood ear mushrooms, scallions, and toasted sesame oil.",
      tags: ["Vegan", "Vegetarian"],
      image: "assets/images/food/signature-ramen.jpg",
      calories: "590 cal"
    },

    // BAO BUNS
    {
      id: "chashu-pork-bao",
      category: "bao",
      name: "Slow-Braised Pork Belly Bao (3 pcs)",
      price: "$12.50",
      description: "Pillowy steamed lotus bao buns filled with melt-in-your-mouth braised pork belly, crisp pickled cucumbers, scallions, crushed roasted peanuts, and sweet hoisin glaze.",
      tags: ["Best Seller", "Steamed Buns"],
      image: "assets/images/food/bao-buns.jpg",
      calories: "580 cal"
    },
    {
      id: "crispy-chicken-bao",
      category: "bao",
      name: "Crispy Karaage Chicken Bao (3 pcs)",
      price: "$12.00",
      description: "Golden fried Japanese-style chicken breast tossed in spicy gochujang chili sauce, topped with Asian slaw, spicy kewpie mayo, and fresh cilantro.",
      tags: ["Crispy & Spicy"],
      image: "assets/images/food/bao-buns.jpg",
      calories: "610 cal"
    },
    {
      id: "pot-roast-bao",
      category: "bao",
      name: "Savory Pot Roast Beef Bao (3 pcs)",
      price: "$13.00",
      description: "Fork-tender slow-cooked beef pot roast, sweet teriyaki glaze, pickled red onions, microgreens, and toasted sesame seeds in steamed bao.",
      tags: ["Hearty", "Savory"],
      image: "assets/images/food/bao-buns.jpg",
      calories: "590 cal"
    },

    // BOWLS & SANDWICHES
    {
      id: "bhb-rice-bowl",
      category: "bowls-sandwiches",
      name: "Big Hammock Signature Rice Bowl",
      price: "$15.00",
      description: "Steamed jasmine rice, sauteed seasonal vegetables, house seasonings, pickled ginger, and your choice of braised pork belly, grilled chicken, pot roast, or seasoned tofu.",
      tags: ["Customizable", "Gluten-Free Option"],
      image: "assets/images/food/rice-bowl.jpg",
      calories: "680 cal"
    },
    {
      id: "asian-philly-steak",
      category: "bowls-sandwiches",
      name: "Asian Philly Cheesesteak Baguette",
      price: "$14.50",
      description: "Tender shaved steak sautéed with onions, mushrooms, and sweet peppers in house teriyaki sauce, blanketed with melted mozzarella and provolone on a toasted pressed baguette. Served with chips.",
      tags: ["Crowd Favorite", "Hot Pressed"],
      image: "assets/images/food/appetizers-spread.jpg",
      calories: "780 cal"
    },
    {
      id: "pork-belly-banh-mi",
      category: "bowls-sandwiches",
      name: "Downtown Pork Belly Banh Mi",
      price: "$14.00",
      description: "Crispy warm French baguette filled with braised pork belly, pickled daikon radish & carrots, sliced English cucumber, fresh jalapeno rings, cilantro, and spicy aioli.",
      tags: ["Authentic Flavor"],
      image: "assets/images/food/bao-buns.jpg",
      calories: "710 cal"
    },

    // CRAFT BEERS
    {
      id: "big-hammock-ipa",
      category: "draft-beers",
      name: "Big Hammock Flagship IPA",
      price: "$7.00 / Pint • $22 Crowler",
      description: "Our signature American IPA loaded with Citra and Mosaic hops. Bursting with bright grapefruit, citrus zest, and tropical mango notes with a clean, piney finish.",
      abv: "6.8% ABV",
      ibu: "65 IBU",
      tags: ["House Flagship", "Hoppy"],
      image: "assets/images/beers/craft-pints.jpg"
    },
    {
      id: "ocala-golden-ale",
      category: "draft-beers",
      name: "Ocala Sunshine Golden Ale",
      price: "$6.50 / Pint • $20 Crowler",
      description: "Super crisp, light, and immensely drinkable blonde ale crafted with German pilsner malt and a delicate touch of local Florida orange blossom honey.",
      abv: "4.8% ABV",
      ibu: "20 IBU",
      tags: ["Easy Drinking", "Crisp"],
      image: "assets/images/beers/beer-flight.jpg"
    },
    {
      id: "florida-hammock-sour",
      category: "draft-beers",
      name: "Hammock Tropical Passionfruit Sour",
      price: "$7.50 / Pint • $24 Crowler",
      description: "Refreshing kettle sour fermented with passionfruit puree and pink guava. Refreshingly tart with a mouthwatering tropical punch that cuts through rich savory bites.",
      abv: "5.2% ABV",
      ibu: "12 IBU",
      tags: ["Fruited Sour", "Tart & Juicy"],
      image: "assets/images/beers/craft-pints.jpg"
    },
    {
      id: "downtown-nitro-porter",
      category: "draft-beers",
      name: "Downtown Dark Nitro Porter",
      price: "$7.50 / Pint",
      description: "Silky nitrogen pour with notes of dark baker's cocoa, roasted espresso, and caramelized toffee. Ultra-smooth creaminess that pairs marvelously with our pork belly.",
      abv: "6.2% ABV",
      ibu: "35 IBU",
      tags: ["Dark & Roasty", "Nitro Pour"],
      image: "assets/images/beers/taproom-bar.jpg"
    },
    {
      id: "beer-flight-sampler",
      category: "draft-beers",
      name: "Custom Brewpub Flight (4 Pours)",
      price: "$13.00",
      description: "Pick any 4 draft beers from our rotating tap handles to experience the full spectrum of our brewing craft. Includes tasting notes card.",
      abv: "Any 4 Styles",
      ibu: "Sampler",
      tags: ["Flight", "Popular"],
      image: "assets/images/beers/beer-flight.jpg"
    },

    // SIDES & ADD-ONS
    {
      id: "soy-marinated-egg",
      category: "sides-extras",
      name: "Soy-Marinated Ajitsuke Egg",
      price: "$2.00",
      description: "Jammy soft-boiled egg cured for 24 hours in sweetened soy, mirin, and dashi.",
      tags: ["Topping"],
      image: "assets/images/food/signature-ramen.jpg"
    },
    {
      id: "extra-chashu",
      category: "sides-extras",
      name: "Extra Roasted Pork Belly (Chashu)",
      price: "$4.50",
      description: "Two thick slices of slow-roasted tender pork belly seared to order.",
      tags: ["Protein"],
      image: "assets/images/food/bao-buns.jpg"
    },
    {
      id: "side-beer-cheese",
      category: "sides-extras",
      name: "Warm Craft Beer Cheese Dip",
      price: "$3.00",
      description: "Melted cheddar and pepper jack cheese infused with our house Ocala Golden Ale.",
      tags: ["Dip"],
      image: "assets/images/food/hot-pretzel.jpg"
    }
  ]
};
