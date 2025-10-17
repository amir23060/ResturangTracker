import { Router } from "express";

const router = Router();

const restaurants = [
  {
    id: "beer-n-fries",
    name: "BeerNFries",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "Södra Larmgatan 4, 411 16 Göteborg",
        hours: "Ons–tis 11:30–19, fre 11:30–21, lör 12–18, sön 12–16. Måndag stängt.",
        rating: { score: 4.7, count: 392 }
      }
    ]
  },
  {
    id: "dine-burgers",
    name: "DINÉ Burgers",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "Drottninggatan 31, 411 14 Göteborg",
        hours: "Mån–tors 11–22, fre–lör 11–22, sön 11–20.",
        rating: { score: 4.4, count: 1738 }
      }
    ]
  },
  {
    id: "lilla-kiosken-i-grabo",
    name: "Lilla Kiosken I Gråbo",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "Monvägen 123, 443 43 Gråbo",
        hours: "Mån–fre 11:30–20, lör–sön 13–20.",
        rating: { score: 4.5, count: 312 }
      }
    ]
  },
  {
    id: "burger-mansion-goteborg",
    name: "Burger Mansion Göteborg",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "J Sigfrid Edströms gata 10, 416 48 Göteborg",
        hours: "Mån–tis 11–21, ons–tors 11–21, fre–sön 11–23 (kan variera, se hemsida).",
        rating: { score: 4.2, count: 968 }
      }
    ]
  },
  {
    id: "burger-mansion-backaplan",
    name: "Burger Mansion Backaplan",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "Backavägen 2, 417 30 Göteborg",
        hours: "Ons–sön 11–21 (kan variera, se hemsida).",
        rating: { score: 4.8, count: 115 }
      }
    ]
  },
  {
    id: "os-street-food",
    name: "O’s Street Food",
    categories: ["Smashburgare"],
    locations: [
      {
        address: "Hagbergsgatan 14, 415 71 Göteborg",
        hours: "Mån, tis, sön 15–21, ons 15–21, tors–fre 11:30–20, lör 15–21.",
        rating: { score: 4.7, count: 475 }
      },
      {
        address: "Kapellplatsen 3, 411 31 Göteborg",
        hours: "Mån, tis, sön 15–21, ons 15–21, tors–fre 11:30–20, lör 15–21.",
        rating: { score: 4.4, count: 107 }
      }
    ]
  },
  {
    id: "the-barn",
    name: "The Barn",
    categories: ["Gourmetburgare"],
    locations: [
      {
        address: "Kyrkogatan 11, 411 15 Göteborg",
        hours: "Tis 17–23, ons 17–23, tors 11:30–14 & 17–23, fre 11:30–14 & 16–00, lör 12–00, sön 13–21. Måndag stängt.",
        rating: { score: 4.5, count: 3521 }
      }
    ]
  },
  {
    id: "restaurant-2112",
    name: "Restaurant 2112",
    categories: ["Gourmetburgare"],
    locations: [
      {
        address: "Magasinsgatan 5, 411 18 Göteborg",
        hours: "Mån–sön 16–01 (fre, lör till 02).",
        rating: { score: 4.6, count: 3014 }
      }
    ]
  },
  {
    id: "holy-cow",
    name: "Holy Cow",
    categories: ["Klassiska burgare", "Pubkänsla"],
    locations: [
      {
        address: "Södra Vägen 77, 412 54 Göteborg",
        hours: "Mån–tis 17–22, ons 17–22, tors 17–22, fre 17–23, lör 12–23, sön 12–22.",
        rating: { score: 4.4, count: 1592 }
      }
    ]
  },
  {
    id: "tugg-burgers-goteborg",
    name: "Tugg Burgers Göteborg",
    categories: ["Klassiska burgare", "Pubkänsla"],
    locations: [
      {
        address: "Drottninggatan 21, 411 14 Göteborg",
        hours: "Mån–fre 11–21, lör 12–22, sön 12–20.",
        rating: { score: 4.3, count: 3141 }
      }
    ]
  },
  {
    id: "beerista",
    name: "Beerista",
    categories: ["Klassiska burgare", "Pubkänsla"],
    locations: [
      {
        address: "Nära Avenyn",
        hours: "Kontrollera deras hemsida, varierar beroende på dag.",
        rating: { score: 4.6, count: 838 }
      }
    ]
  },
  {
    id: "goteburgare-vegan",
    name: "Göteburgare Vegan",
    categories: ["Veganska burgare"],
    locations: [
      {
        address: "Andra Långgatan 11, 413 03 Göteborg",
        hours: "Mån–tis 16–00:30, ons–tors 16–00:30, fre 16–01:30, lör 16–01:30, sön 16–00.",
        rating: { score: 4.2, count: 411 }
      }
    ]
  },
  {
    id: "stockyard-burger-joint",
    name: "Stockyard Burger Joint",
    categories: ["Specialburgare"],
    locations: [
      {
        address: "Storgatan 51, 411 38 Göteborg",
        hours: "Mån–tis 11:30–22, ons–tors 11:30–22, fre 11:30–23, lör 12–23, sön 12–22.",
        rating: { score: 4.2, count: 1308 }
      }
    ]
  },
  {
    id: "the-burger-beer-stuff",
    name: "The Burger Beer & Stuff",
    categories: ["Specialburgare"],
    locations: [
      {
        address: "Andra Långgatan 14, 413 28 Göteborg",
        hours: "Tis–tors 11–22, fre 11–00, lör 12–00. Söndag–måndag stängt.",
        rating: { score: 4.3, count: 1135 }
      }
    ]
  }
];

router.get("/restaurants", (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }
  res.json(restaurants);
});

export default router;