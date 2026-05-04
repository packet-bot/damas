"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  damasMenu,
  boulevardMenu,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu-data";

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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

  useEffect(() => {
    if (menu.length > 0) setActiveCategory(menu[0].id);
  }, [brand, menu]);

  useEffect(() => {
    if (!activeCategory || !categoryScrollRef.current) return;
    const btn = categoryScrollRef.current.querySelector(
      `[data-cat="${activeCategory}"]`
    ) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeCategory]);

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = categoryRefs.current[catId];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 148;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  /* Theme tokens */
  const accentColor  = isDamas ? "text-damas-orange" : "text-blvd-gold";
  const accentBg     = isDamas ? "bg-damas-orange"   : "bg-blvd-gold";
  const headerColor  = isDamas ? "text-gray-900"     : "text-blvd-navy";
  const mutedColor   = isDamas ? "text-gray-400"     : "text-blvd-navy/50";
  const badgeClass   = isDamas ? "badge-signature-damas" : "badge-signature";
  const borderColor  = isDamas ? "border-gray-100"   : "border-blvd-gold/15";
  const leaderColor  = isDamas ? "border-gray-200"   : "border-blvd-navy/15";
  const footerBg     = isDamas ? "bg-white/80"       : "bg-blvd-cream/80";
  const navbarBg     = isDamas ? "bg-white/90 backdrop-blur-md" : "bg-blvd-navy/95 backdrop-blur-md";
  const navbarBorder = isDamas ? "border-gray-100"   : "border-blvd-navy-light";
  const backBtnColor = isDamas ? "text-gray-500 hover:text-gray-800" : "text-white/70 hover:text-white";
  const catBg        = isDamas ? "border-gray-100 bg-white/80 backdrop-blur-sm" : "border-blvd-navy-light bg-blvd-navy/95 backdrop-blur-md";
  const glassCard    = isDamas ? "bg-white/65 backdrop-blur-md ring-1 ring-white/50 shadow-sm" : "bg-blvd-cream/70 backdrop-blur-md ring-1 ring-blvd-cream-dark/40 shadow-sm";

  const catActive   = isDamas
    ? "border-damas-orange text-gray-900"
    : "border-blvd-gold text-white";
  const catInactive = isDamas
    ? "border-transparent text-gray-400 hover:text-gray-600"
    : "border-transparent text-white/40 hover:text-white/70";

  const waMessage = isDamas
    ? "Bonjour%20Damas%20%21%20Je%20souhaite%20passer%20commande."
    : "Bonjour%20Le%20Boulevard%20%21%20Je%20souhaite%20passer%20commande.";

  return (
    <>
      {/* ─── Fixed base background ─── */}
      <div
        className={`fixed inset-0 z-0 transition-colors duration-1000 ${
          isDamas ? "bg-[#FAFAFA]" : "bg-blvd-cream"
        }`}
      />

      {/* ─── Animated orb layer ─── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isDamas ? "opacity-100" : "opacity-0"}`}>
          <div className="orb orb-damas-1" />
          <div className="orb orb-damas-2" />
          <div className="orb orb-damas-3" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${!isDamas ? "opacity-100" : "opacity-0"}`}>
          <div className="orb orb-blvd-1" />
          <div className="orb orb-blvd-2" />
          <div className="orb orb-blvd-3" />
        </div>
      </div>

      {/* ─── Main content ─── */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[10] flex flex-col min-h-dvh"
      >
        {/* ─── Branded Navbar ─── */}
        <header className={`sticky top-0 z-[50] ${navbarBg} border-b ${navbarBorder} shadow-sm transition-all duration-500`}>
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className={`flex items-center gap-1 text-sm ${backBtnColor} transition-colors`}>
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Retour</span>
              </Link>

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

              <div className={`flex rounded-full p-0.5 ${isDamas ? "bg-gray-100" : "bg-white/10"} transition-colors duration-500`}>
                <button
                  onClick={() => setBrand("damas")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isDamas ? "bg-damas-orange text-white shadow-sm" : "text-white/60 hover:text-white"
                  }`}
                >
                  Damas
                </button>
                <button
                  onClick={() => setBrand("boulevard")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    !isDamas ? "bg-blvd-gold text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Boulevard
                </button>
              </div>
            </div>
          </div>

          {/* Category nav — text-based */}
          <div className={`border-t ${catBg} transition-all duration-500`}>
            <div
              ref={categoryScrollRef}
              className="max-w-2xl mx-auto px-4 flex gap-6 overflow-x-auto category-scroll"
            >
              {menu.map((cat) => (
                <button
                  key={cat.id}
                  data-cat={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`shrink-0 py-3 text-[0.65rem] font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap ${
                    activeCategory === cat.id ? catActive : catInactive
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ─── Menu content — key forces re-animation on brand switch ─── */}
        <div key={brand} className="flex-1 max-w-2xl mx-auto w-full px-4 pt-6 pb-36">
          <div className="mb-8 animate-fade-in">
            <p className={`text-sm font-medium tracking-wide uppercase ${mutedColor} font-[family-name:var(--font-montserrat)] transition-colors duration-500`}>
              {isDamas ? "Boulangerie & Fast Casual" : "Salon de Thé & Brunch"}
            </p>
            <div className={`mt-3 w-16 h-0.5 ${accentBg} rounded-full`} />
          </div>

          {menu.map((category, catIdx) => (
            <section
              key={category.id}
              ref={(el) => { categoryRefs.current[category.id] = el; }}
              className={`mb-6 rounded-2xl overflow-hidden ${glassCard} animate-fade-in-up`}
              style={{ animationDelay: `${catIdx * 80}ms` }}
            >
              {/* Category header inside glass card */}
              <div className="px-5 pt-5 pb-3">
                <h2 className={`font-[family-name:var(--font-playfair)] text-xl font-bold ${headerColor} transition-colors duration-500`}>
                  {category.name}
                </h2>
                <div className={`mt-2 w-8 h-0.5 ${accentBg} rounded-full`} />
              </div>

              {/* Items */}
              <div className="px-5 pb-2">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={`${category.id}-${itemIdx}`}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${catIdx * 80 + itemIdx * 55}ms` }}
                  >
                    <MenuItemRow
                      item={item}
                      accentColor={accentColor}
                      headerColor={headerColor}
                      mutedColor={mutedColor}
                      badgeClass={badgeClass}
                      borderColor={borderColor}
                      leaderColor={leaderColor}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ─── Sticky Footer — frosted glass + brand CTA ─── */}
        <footer className={`sticky bottom-0 z-[50] glass-overlay ${footerBg} border-t ${borderColor} py-4 px-4 transition-colors duration-500`}>
          <div className="max-w-lg mx-auto space-y-2.5">
            <p className={`text-xs text-center ${mutedColor} font-[family-name:var(--font-montserrat)]`}>
              +221 77 364 09 09
            </p>
            <a
              href={`https://wa.me/221773640909?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={isDamas ? "cta-btn-damas" : "cta-btn-boulevard"}
            >
              {WA_ICON}
              Commander sur WhatsApp
            </a>
          </div>
        </footer>
      </motion.main>
    </>
  );
}

/* ─── Menu Item Row — editorial, dotted leader line ─── */
function MenuItemRow({
  item,
  accentColor,
  headerColor,
  mutedColor,
  badgeClass,
  borderColor,
  leaderColor,
}: {
  item: MenuItem;
  accentColor: string;
  headerColor: string;
  mutedColor: string;
  badgeClass: string;
  borderColor: string;
  leaderColor: string;
}) {
  return (
    <div className={`py-5 border-b ${borderColor} last:border-b-0`}>
      <div className="flex items-baseline gap-2">
        <div className="shrink-0 flex items-baseline gap-2">
          <h3 className={`font-[family-name:var(--font-playfair)] text-base font-semibold ${headerColor} transition-colors duration-300`}>
            {item.name}
          </h3>
          {item.isSignature && <span className={badgeClass}>Signature</span>}
        </div>
        <div className={`flex-1 border-b border-dashed ${leaderColor} translate-y-[-4px]`} />
        <span className={`shrink-0 text-sm font-bold ${accentColor} tabular-nums font-[family-name:var(--font-montserrat)]`}>
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className={`mt-1.5 text-sm italic ${mutedColor} leading-relaxed font-[family-name:var(--font-montserrat)] transition-colors duration-300`}>
          {item.description}
        </p>
      )}
    </div>
  );
}

/* ─── Suspense wrapper (required for useSearchParams) ─── */
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
