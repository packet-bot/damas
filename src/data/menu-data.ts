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

export const damasMenu: MenuCategory[] = [
  {
    id: "formules-petit-dejeuner",
    name: "Formules Petit-Déjeuner",
    items: [
      { name: "Formule Express", price: "3 000 F", description: "Café, thé ou chocolat chaud, Pain beurre confiture OU 1 viennoiserie, 1 fruit", badge: "Lundi" },
      { name: "Formule Énergie", price: "5 000 F", description: "Café, thé ou chocolat chaud, Jus naturel, Sandwich omelette fromage, 1 fruit", badge: "Lundi", isSignature: true },
      { name: "Formule Simple", price: "3 000 F", description: "Café, thé ou chocolat chaud, Pain + omelette nature", badge: "Mardi" },
      { name: "Formule Classique", price: "5 000 F", description: "Café, thé ou chocolat chaud, Jus d'orange, Œufs brouillés ou omelette, Pain beurre confiture", badge: "Mardi" },
      { name: "Formule Sucrée", price: "3 500 F", description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Mercredi" },
      { name: "Formule Gourmande", price: "5 000 F", description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Mercredi" },
      { name: "Formule Locale Light", price: "3 000 F", description: "Café ou thé, Pain + omelette galsen (frites, oignons)", badge: "Jeudi" },
      { name: "Formule Sénégal", price: "5 000 F", description: "Café ou thé, Jus de gingembre ou bouye, Pain omelette hot dog oignon, Mini thiakry", badge: "Jeudi", isSignature: true },
      { name: "Formule Rapide", price: "3 000 F", description: "Café, thé ou chocolat chaud, Viennoiserie", badge: "Vendredi" },
      { name: "Formule Boost", price: "5 000 F", description: "Café ou thé, Jus naturel, Viennoiserie, 1 salé au choix", badge: "Vendredi" },
      { name: "Formule Mini Brunch", price: "5 000 F", description: "Café ou thé, Œuf (omelette/plat), Saucisse/viande, Pain beurre, Jus naturel", badge: "Samedi" },
      { name: "Formule Brunch", price: "12 000 F", description: "Boisson chaude, Œufs, Saucisse/viande, Viennoiserie, Charcuteries, Fromages, Pain beurre", badge: "Samedi", isSignature: true },
      { name: "Tradition Light", price: "2 500 F", description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Dimanche" },
      { name: "Formule Gourmande", price: "4 000 F", description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Dimanche", isSignature: true },
    ],
  },
];

export const boulevardMenu: MenuCategory[] = [
  {
    id: "formules-petit-dejeuner",
    name: "Formules Petit-Déjeuner",
    items: [
      { name: "Formule Express", price: "2 500 F", description: "Café, thé ou chocolat chaud, Pain beurre confiture OU 1 viennoiserie, 1 fruit", badge: "Lundi" },
      { name: "Formule Énergie", price: "4 000 F", description: "Café, thé ou chocolat chaud, Jus naturel, Sandwich omelette fromage, 1 fruit", badge: "Lundi", isSignature: true },
      { name: "Formule Simple", price: "2 500 F", description: "Café, thé ou chocolat chaud, Pain + omelette nature", badge: "Mardi" },
      { name: "Formule Classique", price: "4 000 F", description: "Café, thé ou chocolat chaud, Jus d'orange, Œufs brouillés ou omelette, Pain beurre confiture", badge: "Mardi" },
      { name: "Formule Sucrée", price: "3 000 F", description: "Café, thé ou chocolat chaud, 2 crêpes ou pancakes sucrés au miel", badge: "Mercredi" },
      { name: "Formule Gourmande", price: "4 000 F", description: "Boisson chaude, Pancakes ou crêpes, Miel ou Nutella, Jus naturel", badge: "Mercredi" },
      { name: "Formule Locale Light", price: "2 500 F", description: "Café ou thé, Pain + omelette galsen (frites, oignons)", badge: "Jeudi" },
      { name: "Formule Sénégal", price: "4 000 F", description: "Café ou thé, Jus de gingembre ou bouye, Pain omelette hot dog oignon, Mini thiakry", badge: "Jeudi", isSignature: true },
      { name: "Formule Rapide", price: "2 500 F", description: "Café ou thé, Viennoiserie (croissant ou pain chocolat)", badge: "Vendredi" },
      { name: "Formule Boost", price: "4 000 F", description: "Café ou thé, Jus naturel, Viennoiserie, 1 salé au choix", badge: "Vendredi" },
      { name: "Formule Mini Brunch", price: "5 000 F", description: "Café ou thé, Œuf (omelette/plat), Saucisse/viande, Pain beurre, Jus naturel", badge: "Samedi" },
      { name: "Formule Brunch", price: "12 000 F", description: "Boisson chaude, Œufs, Saucisse/poulet crispy, Viennoiserie, Charcuteries, Fromages, Pain beurre jus", badge: "Samedi", isSignature: true },
      { name: "Tradition Light", price: "2 500 F", description: "Café ou thé, Bouillie (mil au lait caillé)", badge: "Dimanche" },
      { name: "Tradition Complète", price: "4 000 F", description: "Café ou thé, Lakh ou bouillie, Pain + accompagnement sucré, Jus naturel", badge: "Dimanche", isSignature: true },
    ],
  },
  {
    id: "burgers-signature",
    name: "Burgers Signature",
    items: [
      { name: "Burger classique", price: "1 500 F", description: "Steak 90g, cheddar, oignons caramélisés, œuf, sauce maison, frites, salade" },
      { name: "Cheese burger", price: "1 500 F", description: "Steak 90g, cheddar, oignons caramélisés, sauce maison, salade, tomate" },
      { name: "Chicken burger", price: "2 000 F", description: "Poulet haché, cheddar, oignons caramélisés, sauce maison, frites, salade" },
      { name: "Double burger", price: "2 000 F", description: "Deux steaks, cheddar, oignons caramélisés, sauce maison, frites, salade" },
      { name: "Burger royal", price: "2 000 F", description: "Steak chawarma, emmental, oignons crus, sauce maison, frites, salade" },
      { name: "Dibi burger", price: "2 500 F", description: "Dibi, oignons caramélisés, sauce maison, frites, salade, tomate" },
      { name: "Burger poulet frit", price: "2 500 F", description: "Poulet pané, cheddar, coleslaw, salade, sauce algérienne" },
      { name: "Double smash burger", price: "3 000 F", description: "Deux steaks smash, cheddar, oignons caramélisés, sauce maison, frites" },
      { name: "Burger Boulevard", price: "3 500 F", description: "Deux steaks smash 90g, bacon de bœuf, cheddar, oignons caramélisés, sauce maison, frites", isSignature: true },
    ],
  },
  {
    id: "brunchs-premium",
    name: "Brunchs Premium",
    items: [
      { name: "Salmon Addict", price: "11 000 F", description: "Tartare de saumon, crème d'avocat, pousse de soja, agrumes" },
      { name: "Big Breakfast", price: "13 000 F", description: "Poulet frit, œuf, pain de campagne, jambon de dinde, halloumi, tomate, fromage frais au piment" },
      { name: "Brunch Carnivore", price: "13 000 F", description: "Viennoiserie, jambon, emmental, pain hot-dog, filet de bœuf, chimichurri, frites cheddar, œufs" },
      { name: "Fried Chicken Waffle", price: "10 000 F", description: "Salade de chou rouge, oignons, blanc de poulet pané, gaufres, sirop d'érable" },
      { name: "Chicken Big Brunch", price: "15 000 F", description: "Crispy poulet, œufs brouillés, frites cheddar, crudités, tomates cerises au chili, crème moutarde" },
      { name: "Brunch Nordique", price: "16 000 F", description: "Viennoiserie, jambon, emmental, pain hot-dog, gambas, bagel cream cheese et saumon fumé, crevettes", isSignature: true },
    ],
  },
  {
    id: "croissants-bagels",
    name: "Croissants & Bagels",
    items: [
      { name: "Croissant Crispy Poulet", price: "6 000 F", description: "Poulet pané croustillant, sauce fromage, œufs brouillés, laitue" },
      { name: "Croissant Jambon", price: "5 500 F", description: "Jambon, sauce fromage, œufs brouillés, laitue" },
      { name: "Croissant Nordique", price: "7 000 F", description: "Fromage blanc, saumon fumé, œufs pochés", isSignature: true },
      { name: "Club Jambon Bagel", price: "5 500 F", description: "Bagel toasté, cream cheese, concombre, tomate, jambon, œufs brouillés, sauce cheddar, laitue" },
      { name: "Bagel Nordique", price: "7 000 F", description: "Bagel toasté, saumon fumé, cream cheese ou guacamole, concombre, tomate, crème moutarde" },
      { name: "Bagel Burger", price: "6 000 F", description: "Bagel toasté, sauce burger, concombres, tomates, steak, sauce cheddar, fromage, laitue" },
    ],
  },
];
