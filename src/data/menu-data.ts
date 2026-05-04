export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isSignature?: boolean;
  image?: string;
  badge?: string; // French day name — e.g. "Lundi"
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

/* ─── Damas VDN ─── */
export const damasMenu: MenuCategory[] = [
  {
    id: "formules-semaine",
    name: "Formules Semaine",
    items: [
      { name: "Formule Express",    price: "3 000 F", description: "Café, thé ou chocolat chaud, Pain beurre confiture OU 1 viennoiserie, 1 fruit", badge: "Lundi" },
      { name: "Formule Énergie",    price: "5 000 F", description: "Café, thé ou chocolat chaud, Jus naturel, Sandwich omelette fromage, 1 fruit", badge: "Lundi", isSignature: true },
      { name: "Formule Simple",     price: "3 000 F", description: "Café, thé ou chocolat chaud, Pain + omelette nature", badge: "Mardi" },
      { name: "Formule Classique",  price: "5 000 F", description: "Café, thé ou chocolat chaud, Jus d'orange, Œufs brouillés ou omelette, Pain beurre confiture", badge: "Mardi" },
      { name: "Formule Sucrée",     price: "3 500 F", description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Mercredi" },
      { name: "Formule Gourmande",  price: "5 000 F", description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Mercredi" },
    ],
  },
  {
    id: "formules-week-end",
    name: "Formules Week-end",
    items: [
      { name: "Formule Locale Light", price: "3 000 F",  description: "Café ou thé, Pain + omelette galsen (frites, oignons)", badge: "Jeudi" },
      { name: "Formule Sénégal",      price: "5 000 F",  description: "Café ou thé, Jus de gingembre ou bouye, Pain omelette hot dog oignon, Mini thiakry", badge: "Jeudi", isSignature: true },
      { name: "Formule Rapide",       price: "3 000 F",  description: "Café, thé ou chocolat chaud, Viennoiserie", badge: "Vendredi" },
      { name: "Formule Boost",        price: "5 000 F",  description: "Café ou thé, Jus naturel, Viennoiserie, 1 salé au choix", badge: "Vendredi" },
      { name: "Formule Mini Brunch",  price: "5 000 F",  description: "Café ou thé, Œuf (omelette/plat), Saucisse/viande, Pain beurre, Jus naturel", badge: "Samedi" },
      { name: "Formule Brunch",       price: "12 000 F", description: "Boisson chaude, Œufs, Saucisse/viande, Viennoiserie, Charcuteries, Fromages, Pain beurre", badge: "Samedi", isSignature: true },
      { name: "Tradition Light",      price: "2 500 F",  description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Dimanche" },
      { name: "Formule Gourmande",    price: "4 000 F",  description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Dimanche", isSignature: true },
    ],
  },
  {
    id: "burgers-fast-food",
    name: "Burgers & Fast Food",
    items: [
      { name: "Burger Damas Classic", price: "3 000 F", description: "Double steak haché, cheddar fondu, salade, tomate, sauce maison", isSignature: true },
      { name: "Burger Poulet Yassa",  price: "3 000 F", description: "Filet de poulet grillé, oignons confits au citron, moutarde douce" },
      { name: "Club Sandwich Poulet", price: "3 500 F", description: "Triple étage : poulet rôti, bacon croustillant, œuf, crudités" },
      { name: "Wrap César",           price: "3 000 F", description: "Poulet grillé, parmesan, croûtons, romaine, sauce César maison" },
    ],
  },
  {
    id: "viennoiseries",
    name: "Viennoiseries",
    items: [
      { name: "Croissant Pur Beurre",  price: "800 F",   description: "Feuilletage croustillant, beurre AOP, doré à l'œuf" },
      { name: "Pain au Chocolat",      price: "900 F",   description: "Deux barres de chocolat noir 64%, pâte feuilletée" },
      { name: "Chausson aux Pommes",   price: "1 000 F", description: "Compote de pommes maison, cannelle, pâte feuilletée" },
    ],
  },
];

/* ─── Le Boulevard by Damas ─── */
export const boulevardMenu: MenuCategory[] = [
  {
    id: "formules-semaine",
    name: "Formules Semaine",
    items: [
      { name: "Formule Express",   price: "2 500 F", description: "Café, thé ou chocolat chaud, Pain beurre confiture OU 1 viennoiserie, 1 fruit", badge: "Lundi" },
      { name: "Formule Énergie",   price: "4 000 F", description: "Café, thé ou chocolat chaud, Jus naturel, Sandwich omelette fromage, 1 fruit", badge: "Lundi", isSignature: true },
      { name: "Formule Simple",    price: "2 500 F", description: "Café, thé ou chocolat chaud, Pain + omelette nature", badge: "Mardi" },
      { name: "Formule Classique", price: "4 000 F", description: "Café, thé ou chocolat chaud, Jus d'orange, Œufs brouillés ou omelette, Pain beurre confiture", badge: "Mardi" },
      { name: "Formule Sucrée",    price: "3 000 F", description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Mercredi" },
      { name: "Formule Gourmande", price: "4 000 F", description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Mercredi" },
    ],
  },
  {
    id: "formules-week-end",
    name: "Formules Week-end",
    items: [
      { name: "Formule Locale Light", price: "2 500 F",  description: "Café ou thé, Pain + omelette galsen (frites, oignons)", badge: "Jeudi" },
      { name: "Formule Sénégal",      price: "4 000 F",  description: "Café ou thé, Jus de gingembre ou bouye, Pain omelette hot dog oignon, Mini thiakry", badge: "Jeudi", isSignature: true },
      { name: "Formule Rapide",       price: "2 500 F",  description: "Café ou thé, Viennoiserie (croissant ou pain chocolat)", badge: "Vendredi" },
      { name: "Formule Boost",        price: "4 000 F",  description: "Café ou thé, Jus naturel, Viennoiserie, 1 salé au choix", badge: "Vendredi" },
      { name: "Formule Mini Brunch",  price: "5 000 F",  description: "Café ou thé, Œuf (omelette/plat), Saucisse/viande, Pain beurre, Jus naturel", badge: "Samedi" },
      { name: "Formule Brunch",       price: "12 000 F", description: "Boisson chaude, Œufs, Saucisse/poulet crispy, Viennoiserie, Charcuteries, Fromages, Pain beurre jus", badge: "Samedi", isSignature: true },
      { name: "Tradition Light",      price: "2 500 F",  description: "Café ou thé, Bouillie (mil au lait caillé)", badge: "Dimanche" },
      { name: "Tradition Complète",   price: "4 000 F",  description: "Café ou thé, Lakh ou bouillie, Pain + accompagnement sucré, Jus naturel", badge: "Dimanche", isSignature: true },
    ],
  },
  {
    id: "brunchs-omelettes",
    name: "Brunchs & Omelettes",
    items: [
      { name: "Damas Burger",          price: "5 000 F",  description: "Bun moelleux, ketchup Heinz, bacon fumé, bœuf grillé, moutarde, cheddar" },
      { name: "Egos Plate",            price: "6 000 F",  description: "Œuf au choix, salade, pomme sautée, toast à l'ail" },
      { name: "Pink Benedict",         price: "8 000 F",  description: "Brioche toastée, cream cheese, œufs pochés, saumon fumé, sauce bénédictine rose" },
      { name: "Fried Chicken Waffle",  price: "10 000 F", description: "Salade de chou rouge, oignons, blanc de poulet pané, gaufres, sirop d'érable" },
      { name: "Brunch Carnivore",      price: "13 000 F", description: "Viennoiserie, jambon, emmental, pain hot-dog, filet de bœuf, chimichurri, frites, œufs" },
      { name: "Brunch Nordique",       price: "16 000 F", description: "Viennoiserie, jambon, pain hot-dog, gambas, bagel cream cheese et saumon fumé", isSignature: true },
      { name: "Omelette Nordique",     price: "5 000 F",  description: "Saumon fumé, fromage blanc" },
      { name: "Pain perdu gourmand",   price: "6 000 F",  description: "Dulce de leche, chocolat blanc et fruits rouges" },
    ],
  },
  {
    id: "fast-food",
    name: "Fast Food",
    items: [
      { name: "Double smash burger", price: "3 000 F", description: "Deux steaks smash, cheddar, oignons caramélisés, sauce maison, frites" },
      { name: "Burger Boulevard",    price: "3 500 F", description: "Deux steaks smash 90g, bacon de bœuf, cheddar, oignons caramélisés, frites", isSignature: true },
      { name: "Panini viande",       price: "2 000 F", description: "Steak, emmental, mayonnaise" },
      { name: "Chawarma poulet",     price: "2 000 F", description: "Poulet, frites, sauce blanche, crudités" },
      { name: "Tacos Boulevard",     price: "4 000 F", description: "Poulet pané, jambon, cheddar, crudités, frites, sauce algérienne", isSignature: true },
    ],
  },
  {
    id: "plats-gourmands-poissons",
    name: "Plats Gourmands & Poissons",
    items: [
      { name: "3Bs: Big Black Burger", price: "8 000 F",  description: "Pain nature/noir, double steak, sauce cheddar, frites épicées" },
      { name: "Escalope de Poulet",    price: "7 000 F",  description: "Sauce tomate méli mélo caramélisée et citronnée aux herbes" },
      { name: "Filet de Boeuf",        price: "9 000 F",  description: "Sauce chimichurri" },
      { name: "Côtelettes",            price: "12 000 F", description: "Sauce onctueuse de beurre d'ail aux herbes" },
      { name: "Souris d'agneau",       price: "15 000 F", description: "Fondant grillé à la plancha sauce chimichurri aux champignons" },
      { name: "Lotte en brochettes",   price: "8 000 F",  description: "Sauce chimichurri" },
      { name: "Gambas",                price: "10 000 F", description: "Sauce onctueuse de beurre d'ail aux herbes" },
      { name: "Thiof braisé",          price: "10 000 F", description: "Sauce onctueuse de beurre d'ail aux herbes" },
    ],
  },
  {
    id: "pates-salades",
    name: "Pâtes & Salades",
    items: [
      { name: "La bolognaise",      price: "6 000 F",  description: "Assortiment fruits de mer" },
      { name: "Tagiatelles Alfredo",price: "8 000 F",  description: "Alfredo classique" },
      { name: "Linguini seafood",   price: "10 000 F", description: "Assortiment de fruits de mer" },
      { name: "Lobsterini",         price: "15 000 F", description: "Linguini, langoustes & burrata sauce crustacés", isSignature: true },
      { name: "Salade César",       price: "6 500 F",  description: "Poulet, croûtons, tomates cerise, tuiles de parmesan, laitue" },
      { name: "Bô Bun Gambas",      price: "7 000 F",  description: "Gambas, nems, viande émincée et fruits secs concassés" },
    ],
  },
  {
    id: "pizzas-artisanales",
    name: "Pizzas Artisanales",
    items: [
      { name: "Margarita",           price: "M: 4 000 F / G: 5 000 F", description: "Sauce tomate, fromage, olives noires, origan" },
      { name: "Reine",               price: "M: 4 500 F / G: 5 500 F", description: "Fromage, champignons, jambon de bœuf, origan" },
      { name: "Océane",              price: "M: 5 000 F / G: 6 000 F", description: "Fromage, crevettes, moules, calamar, thon" },
      { name: "Pizza Boulevard",     price: "5 500 F",                 description: "Boulettes ou poulet, oignons, gouda, cornichons, sauce burger", isSignature: true },
      { name: "Pizza fruits de mer", price: "6 000 F",                 description: "Disponible en grand format uniquement", isSignature: true },
    ],
  },
  {
    id: "boulangerie-patisserie",
    name: "Boulangerie & Pâtisserie",
    items: [
      { name: "Croissant / Pain chocolat", price: "600 F",             description: "Pur beurre (Format Mini : 300 F)" },
      { name: "Croissant amandes",         price: "700 F",             description: "Fourré à la crème d'amandes" },
      { name: "Madeleine / Cookie",        price: "200 F",             description: "Douceurs & Petits fours" },
      { name: "Beignet crème / Nutella",   price: "PM 300 F / GM 600 F", description: "Gourmandises" },
      { name: "Les gâteaux & tartes",      price: "2 000 F – 3 000 F", description: "Marbré, Fraisier, Mille feuilles, Paris-Brest, Forêt noire (la part)" },
    ],
  },
];
