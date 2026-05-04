"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import {
  damasMenu,
  boulevardMenu,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu-data";

type Brand = "damas" | "boulevard";

function MenuContent() {
  const searchParams = useSearchParams();
  const initialBrand = (searchParams.get("brand") as Brand) || "damas";
  const [brand, setBrand] = useState<Brand>(initialBrand);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const isDamas = brand === "damas";
  const menu: MenuCategory[] = isDamas ? damasMenu : boulevardMenu;

  /* Set default active category */
  useEffect(() => {
    if (menu.length > 0) {
      setActiveCategory(menu[0].id);
    }
  }, [brand, menu]);

  /* Scroll category pill into view */
  useEffect(() => {
    if (!activeCategory || !categoryScrollRef.current) return;
    const pill = categoryScrollRef.current.querySelector(
      `[data-cat="${activeCategory}"]`
    ) as HTMLElement | null;
    if (pill) {
      pill.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  /* Scroll to category section */
  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = categoryRefs.current[catId];
    if (el) {
      const offset = 140; // sticky header height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  /* Theme classes */
  const bgClass = isDamas ? "bg-white" : "bg-blvd-cream";
  const accentColor = isDamas ? "text-damas-orange" : "text-blvd-gold";
  const accentBg = isDamas ? "bg-damas-orange" : "bg-blvd-gold";
  const headerColor = isDamas ? "text-gray-900" : "text-blvd-navy";
  const mutedColor = isDamas ? "text-gray-500" : "text-blvd-navy/60";
  const pillActive = isDamas
    ? "bg-damas-orange text-white"
    : "bg-blvd-navy text-white";
  const pillInactive = isDamas
    ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
    : "bg-blvd-cream-dark text-blvd-navy/70 hover:bg-blvd-navy/10";
  const badgeClass = isDamas ? "badge-signature-damas" : "badge-signature";
  const borderColor = isDamas ? "border-gray-100" : "border-blvd-gold/15";
  const footerBg = isDamas ? "bg-white/90" : "bg-blvd-cream/90";
  const navbarBg = isDamas ? "bg-white" : "bg-blvd-navy";
  const navbarBorder = isDamas ? "border-gray-100" : "border-blvd-navy-light";
  const backBtnColor = isDamas ? "text-gray-500 hover:text-gray-800" : "text-white/70 hover:text-white";

  return (
    <main
      className={`flex flex-col min-h-dvh ${bgClass} transition-colors duration-500`}
    >
      {/* ─── Branded Navbar ─── */}
      <header
        className={`sticky top-0 z-50 ${navbarBg} border-b ${navbarBorder} shadow-sm transition-colors duration-500`}
      >
        {/* Top row: Back / Logo / Toggle */}
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Back button */}
            <Link
              href="/"
              id="menu-back"
              className={`flex items-center gap-1 text-sm ${backBtnColor} transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </Link>

            {/* Center logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Image
                src={isDamas ? "/logos/damas.svg" : "/logos/boulevard.svg"}
                alt={isDamas ? "Damas Logo" : "Le Boulevard Logo"}
                width={120}
                height={60}
                className="h-10 w-auto object-contain transition-all duration-500"
                priority
              />
            </div>

            {/* Brand Toggle */}
            <div
              className={`flex rounded-full p-0.5 ${
                isDamas ? "bg-gray-100" : "bg-white/10"
              } transition-colors duration-500`}
            >
              <button
                id="toggle-damas"
                onClick={() => setBrand("damas")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isDamas
                    ? "bg-damas-orange text-white shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Damas
              </button>
              <button
                id="toggle-boulevard"
                onClick={() => setBrand("boulevard")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  !isDamas
                    ? "bg-blvd-gold text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Boulevard
              </button>
            </div>
          </div>
        </div>

        {/* Category Scroll — separate row */}
        <div className={`border-t ${
          isDamas ? "border-gray-50 bg-white" : "border-blvd-navy-light bg-blvd-navy"
        } transition-colors duration-500`}>
          <div
            ref={categoryScrollRef}
            className="max-w-2xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto category-scroll"
          >
            {menu.map((cat) => (
              <button
                key={cat.id}
                data-cat={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.id ? pillActive : pillInactive
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ─── Menu Content ─── */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pt-6 pb-28">
        {/* Brand subtitle + accent divider */}
        <div className="mb-8 animate-fade-in">
          <p
            className={`text-sm font-medium tracking-wide uppercase ${mutedColor} font-[family-name:var(--font-montserrat)] transition-colors duration-500`}
          >
            {isDamas
              ? "Boulangerie & Fast Casual"
              : "Salon de Thé & Brunch"}
          </p>
          <div className={`mt-3 w-16 h-0.5 ${accentBg} rounded-full`} />
        </div>

        {/* Categories & Items */}
        {menu.map((category, catIdx) => (
          <section
            key={category.id}
            ref={(el) => {
              categoryRefs.current[category.id] = el;
            }}
            className={`mb-10 animate-fade-in-up`}
            style={{ animationDelay: `${catIdx * 100}ms` }}
          >
            <h2
              className={`font-[family-name:var(--font-playfair)] text-xl font-bold ${headerColor} mb-4 transition-colors duration-500`}
            >
              {category.name}
            </h2>

            <div className="space-y-1">
              {category.items.map((item, itemIdx) => (
                <MenuItemRow
                  key={`${category.id}-${itemIdx}`}
                  item={item}
                  isDamas={isDamas}
                  accentColor={accentColor}
                  headerColor={headerColor}
                  mutedColor={mutedColor}
                  badgeClass={badgeClass}
                  borderColor={borderColor}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ─── Sticky Footer ─── */}
      <footer
        className={`sticky bottom-0 z-50 glass-overlay ${footerBg} border-t ${borderColor} py-3 px-4 transition-colors duration-500`}
      >
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          <a
            href="tel:+221773640909"
            id="menu-footer-phone"
            className={`text-xs ${mutedColor} hover:${headerColor} transition-colors font-[family-name:var(--font-montserrat)]`}
          >
            +221 77 364 09 09
          </a>
          <a
            href="https://wa.me/221773640909?text=Bonjour%20Damas%20%21%20Je%20souhaite%20passer%20commande."
            target="_blank"
            rel="noopener noreferrer"
            id="menu-footer-whatsapp"
            className="whatsapp-btn px-5 py-2.5 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Commander
          </a>
        </div>
      </footer>
    </main>
  );
}

/* ─── Menu Item Row Component ─── */
function MenuItemRow({
  item,
  isDamas,
  accentColor,
  headerColor,
  mutedColor,
  badgeClass,
  borderColor,
}: {
  item: MenuItem;
  isDamas: boolean;
  accentColor: string;
  headerColor: string;
  mutedColor: string;
  badgeClass: string;
  borderColor: string;
}) {
  return (
    <div
      className={`group flex gap-4 py-4 border-b ${borderColor} last:border-b-0 transition-colors duration-300 hover:bg-black/[0.02]`}
    >
      {/* Hero image in hexagon — if item has image */}
      {item.image && (
        <div className="shrink-0 w-20 h-20 clip-hexagon overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3
              className={`font-[family-name:var(--font-playfair)] text-base font-semibold ${headerColor} transition-colors duration-300`}
            >
              {item.name}
            </h3>
            {item.isSignature && (
              <span className={badgeClass}>Signature</span>
            )}
          </div>
          <span
            className={`shrink-0 text-sm font-bold ${accentColor} tabular-nums font-[family-name:var(--font-montserrat)]`}
          >
            {item.price}
          </span>
        </div>
        {item.description && (
          <p
            className={`mt-1 text-sm italic ${mutedColor} leading-relaxed font-[family-name:var(--font-montserrat)] transition-colors duration-300`}
          >
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Suspense Wrapper (required for useSearchParams) ─── */
import { Suspense } from "react";

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-dvh">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-damas-orange rounded-full animate-spin" />
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
