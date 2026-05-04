"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { menuData, type BrandKey, type MenuItem } from "@/data/menu-data";

const DAY_ORDER = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"] as const;

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* Group items by their badge, preserving Lundi → Dimanche order */
function groupByDay(items: MenuItem[]): { day: string; items: MenuItem[] }[] {
  const groups: Record<string, MenuItem[]> = {};
  for (const item of items) {
    if (!item.badge) continue;
    if (!groups[item.badge]) groups[item.badge] = [];
    groups[item.badge].push(item);
  }
  return DAY_ORDER.filter((d) => groups[d]).map((d) => ({ day: d, items: groups[d] }));
}

function hasBadges(items: MenuItem[]): boolean {
  return items.some((i) => i.badge);
}

function MenuContent() {
  const searchParams = useSearchParams();
  const initialBrand = (searchParams.get("brand") as BrandKey) || "damas";

  const [brand, setBrand] = useState<BrandKey>(initialBrand);
  const [activeCategory, setActiveCategory] = useState<string>(
    menuData[initialBrand].categories[0].name
  );
  const [currentDay, setCurrentDay] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  /* Real day on client only — avoids SSR hydration mismatch */
  useEffect(() => {
    const raw = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
    setCurrentDay(raw.charAt(0).toUpperCase() + raw.slice(1));
  }, []);

  /* Brand toggle — synchronously reset activeCategory to prevent stale-ID crash */
  const switchBrand = (next: BrandKey) => {
    setBrand(next);
    setActiveCategory(menuData[next].categories[0].name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Scroll active tab into view in the horizontal nav */
  useEffect(() => {
    if (!categoryScrollRef.current) return;
    const btn = categoryScrollRef.current.querySelector(
      `[data-cat="${activeCategory}"]`
    ) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeCategory]);

  const isDamas = brand === "damas";

  /* ─── Theme tokens ─── */
  const pageBg          = isDamas ? "bg-[#FAFAFA]" : "bg-[#F2EDE2]";
  const stickyBg        = isDamas ? "bg-white/85" : "bg-[#F2EDE2]/85";
  const stickyBorder    = isDamas ? "border-gray-100" : "border-[#1F2A40]/10";
  const titleColor      = isDamas ? "text-gray-900" : "text-[#1F2A40]";
  const mutedColor      = isDamas ? "text-gray-400" : "text-[#1F2A40]/55";
  const accentColor     = isDamas ? "text-[#E85A2B]" : "text-[#B5945C]";
  const accentBg        = isDamas ? "bg-[#E85A2B]" : "bg-[#B5945C]";
  const backBtnColor    = isDamas ? "text-gray-500 hover:text-gray-900" : "text-[#1F2A40]/60 hover:text-[#1F2A40]";
  const togglePillTrack = isDamas ? "bg-gray-100" : "bg-[#1F2A40]/8";
  const leaderColor     = isDamas ? "border-gray-200" : "border-[#1F2A40]/15";
  const cardBorder      = isDamas ? "border-white/30" : "border-white/20";
  const glassBg         = isDamas ? "bg-white/40" : "bg-[#F2EDE2]/50";

  /* Pill category tab styling */
  const tabActive = isDamas
    ? "bg-[#E85A2B] text-white"
    : "bg-[#1F2A40] text-[#B5945C]";
  const tabInactive = "bg-transparent text-gray-400 hover:text-gray-800";

  /* Signature tag — hollow border, brand color */
  const sigTag = isDamas
    ? "border border-[#E85A2B] text-[#E85A2B]"
    : "border border-[#B5945C] text-[#B5945C]";

  /* Day sub-headers */
  const dayHeaderActive = isDamas ? "text-[#E85A2B] border-[#E85A2B]" : "text-[#B5945C] border-[#B5945C]";
  const dayHeaderMuted  = "text-gray-400 border-gray-200";

  const waMessage = isDamas
    ? "Bonjour%20Damas%20%21%20Je%20souhaite%20passer%20commande."
    : "Bonjour%20Le%20Boulevard%20%21%20Je%20souhaite%20passer%20commande.";

  /* CTA button styling */
  const ctaBtn = isDamas
    ? "bg-[#1a1a1a] hover:bg-[#E85A2B] text-white"
    : "bg-[#1F2A40] hover:bg-[#2D3A52] text-[#B5945C]";

  const activeCat = menuData[brand].categories.find((c) => c.name === activeCategory);

  return (
    <>
      {/* ─── Fixed base background ─── */}
      <div className={`fixed inset-0 -z-20 transition-colors duration-1000 ${pageBg}`} />

      {/* ─── Living Aurora Orbs (Damas) ─── */}
      {isDamas && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
          <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#E85A2B] blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#FFB347] blur-[120px] opacity-30" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[#E85A2B] blur-[100px] opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
      )}

      {/* ─── Living Aurora Orbs (Boulevard) ─── */}
      {!isDamas && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#B5945C] blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#1F2A40] blur-[120px] opacity-10" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B5945C] blur-[100px] opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
        </div>
      )}

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[10] flex flex-col min-h-dvh"
      >
        {/* ─── ONE sticky frosted container: navbar + tabs ─── */}
        <header className={`sticky top-0 z-[50] backdrop-blur-xl ${stickyBg} border-b ${stickyBorder} transition-colors duration-500`}>
          {/* Row 1 — Retour | Logo | Brand toggle */}
          <div className="max-w-2xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className={`flex items-center gap-1 text-sm ${backBtnColor} transition-colors`}>
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium">Retour</span>
              </Link>

              <div className="absolute left-1/2 -translate-x-1/2">
                <Image
                  src={isDamas ? "/logos/damas.svg" : "/logos/boulevard.svg"}
                  alt={menuData[brand].title}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain transition-all duration-500"
                  priority
                />
              </div>

              <div className={`flex rounded-full p-0.5 ${togglePillTrack} transition-colors duration-500`}>
                <button
                  onClick={() => switchBrand("damas")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isDamas ? "bg-[#E85A2B] text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Damas
                </button>
                <button
                  onClick={() => switchBrand("boulevard")}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    !isDamas ? "bg-[#1F2A40] text-[#B5945C] shadow-sm" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Boulevard
                </button>
              </div>
            </div>
          </div>

          {/* Row 2 — pill category tabs */}
          <div className="relative">
            <div
              ref={categoryScrollRef}
              className="max-w-2xl mx-auto flex gap-2 px-4 pb-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth touch-pan-x hide-scrollbar"
            >
              {menuData[brand].categories.map((cat) => (
                <button
                  key={cat.name}
                  data-cat={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.name ? tabActive : tabInactive
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            {/* Right edge fade — signals horizontal scroll */}
            <div className={`absolute right-0 top-0 bottom-0 w-10 pointer-events-none ${
              isDamas ? "bg-gradient-to-l from-white/85 to-transparent" : "bg-gradient-to-l from-[#F2EDE2]/85 to-transparent"
            }`} aria-hidden />
          </div>
        </header>

        {/* ─── Menu content Glass Card ─── */}
        <div key={`${brand}-${activeCategory}`} className="flex-1 max-w-5xl mx-auto w-full px-4 pt-6 pb-36">
          {activeCat && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`backdrop-blur-2xl ${glassBg} border ${cardBorder} shadow-2xl rounded-3xl overflow-hidden p-6 md:p-10`}
            >
              {/* Category header */}
              <div className="px-5 pt-5 pb-3">
                <h2 className={`font-[family-name:var(--font-playfair)] text-xl font-bold ${titleColor}`}>
                  {activeCat.name}
                </h2>
                <div className={`mt-2 w-8 h-0.5 ${accentBg} rounded-full`} />
              </div>

              {/* Items */}
              <div className="px-5 pb-4">
                {hasBadges(activeCat.items) ? (
                  groupByDay(activeCat.items).map(({ day, items }, gIdx) => {
                    const isToday = currentDay === day;
                    return (
                      <div key={day} className="mt-6 first:mt-3">
                        {/* Day sub-header — rendered ONCE per day group */}
                        <div className={`mb-4 pb-2 border-b ${isToday ? `${dayHeaderActive} animate-pulse` : dayHeaderMuted}`}>
                          <p className={`text-[0.7rem] font-bold tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)]`}>
                            {isToday ? `📍 AUJOURD'HUI : ${day}` : day}
                          </p>
                        </div>

                        {items.map((item, iIdx) => (
                          <div
                            key={`${day}-${item.name}-${iIdx}`}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${gIdx * 60 + iIdx * 40}ms` }}
                          >
                            <ItemRow
                              item={item}
                              titleColor={titleColor}
                              mutedColor={mutedColor}
                              accentColor={accentColor}
                              cardBorder={cardBorder}
                              leaderColor={leaderColor}
                              sigTag={sigTag}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })
                ) : (
                  activeCat.items.map((item, iIdx) => (
                    <div
                      key={`${item.name}-${iIdx}`}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${iIdx * 45}ms` }}
                    >
                      <ItemRow
                        item={item}
                        titleColor={titleColor}
                        mutedColor={mutedColor}
                        accentColor={accentColor}
                        cardBorder={cardBorder}
                        leaderColor={leaderColor}
                        sigTag={sigTag}
                      />
                    </div>
                  ))
                )}
              </div>
            </motion.section>
          )}
        </div>

        {/* ─── Sticky footer — frosted glass + brand CTA ─── */}
        <footer className={`sticky bottom-0 z-[50] glass-overlay ${stickyBg} border-t ${stickyBorder} py-4 px-4`}>
          <div className="max-w-lg mx-auto space-y-2.5">
            <p className={`text-xs text-center ${mutedColor} font-[family-name:var(--font-montserrat)]`}>
              +221 77 364 09 09
            </p>
            <a
              href={`https://wa.me/221773640909?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${ctaBtn}`}
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

/* ─── Editorial item row — name | dotted leader | price ─── */
function ItemRow({
  item,
  titleColor,
  mutedColor,
  accentColor,
  cardBorder,
  leaderColor,
  sigTag,
}: {
  item: MenuItem;
  titleColor: string;
  mutedColor: string;
  accentColor: string;
  cardBorder: string;
  leaderColor: string;
  sigTag: string;
}) {
  return (
    <div className={`py-4 border-b ${cardBorder} last:border-b-0`}>
      <div className="flex items-baseline gap-2">
        <div className="shrink-0 flex items-baseline gap-2">
          <h3 className={`font-[family-name:var(--font-playfair)] text-base font-semibold ${titleColor}`}>
            {item.name}
          </h3>
          {item.isSignature && (
            <span className={`${sigTag} text-[0.55rem] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm whitespace-nowrap`}>
              Signature
            </span>
          )}
        </div>
        <div className={`flex-1 border-b border-dashed ${leaderColor} translate-y-[-4px]`} />
        <span className={`shrink-0 text-sm font-bold ${accentColor} tabular-nums font-[family-name:var(--font-montserrat)]`}>
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className={`mt-1.5 text-sm italic ${mutedColor} leading-relaxed font-[family-name:var(--font-montserrat)]`}>
          {item.description}
        </p>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-dvh">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-[#E85A2B] rounded-full animate-spin" />
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
