export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isSignature?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const damasMenu: MenuCategory[] = [
  {
    id: "petit-dejeuner",
    name: "Petit-Déjeuner",
    items: [
      {
        name: "Formule Énergie",
        price: "4 000 F",
        description:
          "Croissant pur beurre, jus d'orange pressé, café ou thé au choix.",
        isSignature: true,
      },
      {
        name: "Formule Vitalité",
        price: "5 500 F",
        description:
          "Pain au chocolat, yaourt grec, fruits de saison, boisson chaude.",
      },
      {
        name: "Tartine Avocat & Œuf",
        price: "3 500 F",
        description:
          "Pain de campagne toasté, avocat écrasé, œuf poché, piment d'Espelette.",
      },
      {
        name: "Pancakes Maison",
        price: "3 000 F",
        description:
          "Trois pancakes moelleux, sirop d'érable, fruits rouges, crème chantilly.",
      },
    ],
  },
  {
    id: "burgers-signature",
    name: "Burgers Signature",
    items: [
      {
        name: "Burger Damas Classic",
        price: "3 000 F",
        description:
          "Double steak haché, cheddar fondu, salade, tomate, sauce maison.",
        isSignature: true,
        image: "/images/burger-ghost.png",
      },
      {
        name: "Burger Thiébou Dieun",
        price: "3 500 F",
        description:
          "Steak de poisson mariné au nokoss, oignons caramélisés, sauce tamarin.",
      },
      {
        name: "Burger Poulet Yassa",
        price: "3 000 F",
        description:
          "Filet de poulet grillé, oignons confits au citron, moutarde douce.",
      },
      {
        name: "Burger Veggie",
        price: "2 500 F",
        description:
          "Galette de lentilles et patate douce, roquette, sauce tahini.",
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches & Wraps",
    items: [
      {
        name: "Club Sandwich Poulet",
        price: "3 500 F",
        description:
          "Triple étage : poulet rôti, bacon croustillant, œuf, crudités.",
      },
      {
        name: "Wrap César",
        price: "3 000 F",
        description:
          "Poulet grillé, parmesan, croûtons, romaine, sauce César maison.",
      },
      {
        name: "Croque-Monsieur",
        price: "2 500 F",
        description:
          "Jambon, emmental fondu, béchamel gratinée, salade verte.",
      },
    ],
  },
  {
    id: "viennoiseries",
    name: "Viennoiseries & Pâtisseries",
    items: [
      {
        name: "Croissant Pur Beurre",
        price: "800 F",
        description: "Feuilletage croustillant, beurre AOP, doré à l'œuf.",
      },
      {
        name: "Pain au Chocolat",
        price: "900 F",
        description: "Deux barres de chocolat noir 64%, pâte feuilletée.",
      },
      {
        name: "Chausson aux Pommes",
        price: "1 000 F",
        description: "Compote de pommes maison, cannelle, pâte feuilletée.",
      },
      {
        name: "Éclair Café",
        price: "1 500 F",
        description: "Pâte à choux, crème pâtissière café, glaçage miroir.",
      },
    ],
  },
  {
    id: "boissons",
    name: "Boissons",
    items: [
      {
        name: "Café Touba",
        price: "1 000 F",
        description: "Notre café signature aux épices sénégalaises.",
        isSignature: true,
      },
      {
        name: "Jus de Bissap",
        price: "1 200 F",
        description: "Hibiscus infusé, menthe fraîche, sucre de canne.",
      },
      {
        name: "Jus de Bouye",
        price: "1 200 F",
        description: "Pain de singe onctueux, vanille, glace pilée.",
      },
      {
        name: "Smoothie Mangue-Passion",
        price: "2 000 F",
        description: "Mangue Kent, fruit de la passion, lait de coco.",
      },
    ],
  },
];

export const boulevardMenu: MenuCategory[] = [
  {
    id: "brunchs",
    name: "Brunchs",
    items: [
      {
        name: "Brunch Boulevard",
        price: "12 000 F",
        description:
          "Eggs Benedict, saumon fumé, viennoiseries, fruits, jus pressé, boisson chaude.",
        isSignature: true,
      },
      {
        name: "Brunch Terroir",
        price: "10 000 F",
        description:
          "Thiakry revisité, accara, fruits de saison, thé attaya, pain artisanal.",
      },
      {
        name: "Brunch Léger",
        price: "8 000 F",
        description:
          "Granola maison, yaourt grec, fruits, tartine avocat, jus pressé.",
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrées Raffinées",
    items: [
      {
        name: "Carpaccio de Bœuf",
        price: "5 500 F",
        description:
          "Bœuf cru tranché, roquette, copeaux de parmesan, vinaigrette truffée.",
      },
      {
        name: "Velouté de Butternut",
        price: "3 500 F",
        description:
          "Courge butternut rôtie, crème fraîche, noisettes torréfiées, huile de truffe.",
      },
      {
        name: "Salade Niçoise Revisitée",
        price: "4 500 F",
        description:
          "Thon mi-cuit, œuf mollet, olives taggiasche, haricots verts, anchois.",
      },
    ],
  },
  {
    id: "plats-signature",
    name: "Plats Signature",
    items: [
      {
        name: "Burger Boulevard",
        price: "5 500 F",
        description:
          "Double smash patty, cheddar affiné, oignons caramélisés, bacon fumé, brioche dorée.",
        isSignature: true,
        image: "/images/burger-ghost.png",
      },
      {
        name: "Croissant Nordique",
        price: "7 000 F",
        description:
          "Croissant feuilleté garni de saumon fumé, crème acidulée, câpres, aneth frais.",
        isSignature: true,
      },
      {
        name: "Risotto Crevettes & Bisque",
        price: "8 500 F",
        description:
          "Riz Arborio crémeux, crevettes géantes, bisque réduite, parmesan 24 mois.",
      },
      {
        name: "Pavé de Saumon Laqué",
        price: "9 000 F",
        description:
          "Saumon laqué au miso, purée de patate douce, légumes croquants, sauce ponzu.",
      },
    ],
  },
  {
    id: "patisseries-fines",
    name: "Pâtisseries Fines",
    items: [
      {
        name: "Tarte au Citron Meringuée",
        price: "3 000 F",
        description:
          "Pâte sablée, crème citron yuzu, meringue italienne flambée.",
      },
      {
        name: "Fondant au Chocolat",
        price: "3 500 F",
        description:
          "Chocolat Valrhona 70%, cœur coulant, crème anglaise vanille.",
        isSignature: true,
      },
      {
        name: "Paris-Dakar",
        price: "4 000 F",
        description:
          "Paris-Brest revisité au praliné de cacahuètes torréfiées, crème mousseline.",
        isSignature: true,
      },
    ],
  },
  {
    id: "boissons-boulevard",
    name: "Boissons & Thés",
    items: [
      {
        name: "Thé Attaya Prestige",
        price: "2 000 F",
        description:
          "Cérémonie du thé sénégalais, trois services, menthe fraîche.",
        isSignature: true,
      },
      {
        name: "Café de Spécialité",
        price: "2 500 F",
        description:
          "Single origin éthiopien, torréfaction artisanale, préparation V60.",
      },
      {
        name: "Cocktail Bissap Royal",
        price: "3 500 F",
        description:
          "Hibiscus infusé, gingembre, eau de rose, tonic premium, glaçons floraux.",
      },
      {
        name: "Matcha Latte",
        price: "3 000 F",
        description:
          "Matcha cérémoniel, lait d'avoine moussé, touche de miel d'acacia.",
      },
    ],
  },
];
