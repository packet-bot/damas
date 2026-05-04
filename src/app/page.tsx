"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";

/* ─── Hero image sequence ─── */
const HERO_IMAGES = [
  "/images/hero-traiteur.jpg",
  "/images/hero-boulevard-tea.jpg",
  "/images/hero-teranga.jpg",
  "/images/hero-bakery.jpg",
];

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const EASE = [0.22, 1, 0.36, 1] as const;

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="block w-12 h-px bg-blvd-gold/40" />
      <span className="block w-2 h-2 rounded-full bg-blvd-gold" />
      <span className="block w-12 h-px bg-blvd-gold/40" />
    </div>
  );
}

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col">

      {/* ─── SECTION 1: Cinematic Hero (100dvh) ─── */}
      <section className="relative h-dvh flex flex-col items-center justify-center overflow-hidden text-white">

        {/* Crossfade image carousel — all stacked, only active is visible */}
        {HERO_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Damas — Gastronomie Sénégalaise"
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === heroIdx ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
            quality={90}
          />
        ))}

        {/* Static protective overlay */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

        {/* Text content — always above overlay */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase text-white/60 font-[family-name:var(--font-montserrat)] mb-6"
          >
            Dakar, Sénégal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
            className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Dalal Ak Jaam
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="my-6"
          >
            <Divider />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="text-xs tracking-widest uppercase text-white/65 font-[family-name:var(--font-montserrat)] max-w-xs sm:max-w-sm"
          >
            L&apos;Art de la Gastronomie Sénégalaise &amp; Internationale
          </motion.p>
        </div>

        {/* Scroll chevron — hairline stroke */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden
        >
          <ChevronDown className="w-6 h-6 text-white/40" strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ─── SECTION 2: Nos Univers ─── */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gray-400 font-[family-name:var(--font-montserrat)] mb-3">
              Nos Univers
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-gray-900">
              Découvrez Nos Cartes
            </h2>
            <div className="mt-5">
              <Divider />
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Damas VDN */}
            <FadeUp delay={0.1}>
              <Link
                href="/menu?brand=damas"
                className="group relative block min-h-[340px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src="/images/hero-damas.jpg"
                  alt="Damas VDN"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                <div className="absolute inset-0 flex flex-col p-6 text-white">
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      src="/logos/damas.svg"
                      alt="Damas Logo"
                      width={180}
                      height={90}
                      className="w-40 h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)]">
                      Boulangerie &amp; Fast Casual
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </FadeUp>

            {/* Le Boulevard */}
            <FadeUp delay={0.2}>
              <Link
                href="/menu?brand=boulevard"
                className="group relative block min-h-[340px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src="/images/hero-boulevard.jpg"
                  alt="Le Boulevard by Damas"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                <div className="absolute inset-0 flex flex-col p-6 text-white">
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      src="/logos/boulevard.svg"
                      alt="Le Boulevard by Damas Logo"
                      width={180}
                      height={90}
                      className="w-40 h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)]">
                      Salon de Thé &amp; Brunch
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Damas Traiteur ─── */}
      <section className="relative py-24 px-4 overflow-hidden bg-blvd-navy">
        <Image
          src="/images/production.jpg"
          alt="Damas Traiteur — Service de réception"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-blvd-navy/60" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-blvd-gold/60 font-[family-name:var(--font-montserrat)] mb-4">
              Service Traiteur
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-blvd-gold">
              Damas Traiteur
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="my-6">
              <Divider />
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-sm sm:text-base text-blvd-cream/80 leading-relaxed font-[family-name:var(--font-montserrat)] max-w-lg mx-auto">
              Que ce soit pour un événement privé ou public, confiez-nous vos réceptions.
              Nous les transformons en souvenirs inoubliables.
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <a
              href="https://wa.me/221776033939?text=Bonjour%20%21%20Je%20souhaite%20obtenir%20des%20informations%20sur%20le%20service%20traiteur%20Damas."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-blvd-gold text-blvd-gold text-xs tracking-widest uppercase font-semibold font-[family-name:var(--font-montserrat)] rounded-sm hover:bg-blvd-gold hover:text-blvd-navy transition-all duration-300"
            >
              {WA_ICON}
              Contacter le Service Traiteur
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-12">

            {/* Brand — logo as wax seal */}
            <div>
              <Image
                src="/logos/damas.svg"
                alt="Damas"
                width={160}
                height={80}
                className="w-36 h-auto max-w-full object-contain mb-6 opacity-95"
              />
              <p className="text-xs text-white/35 leading-relaxed font-[family-name:var(--font-montserrat)]">
                Boulangerie artisanale, fast casual &amp; salon de thé raffiné.
                Dakar, Sénégal.
              </p>
            </div>

            {/* Addresses */}
            <div>
              <h4 className="text-[0.6rem] tracking-widest uppercase text-white/25 font-[family-name:var(--font-montserrat)] mb-5">
                Nos Adresses
              </h4>
              <p className="text-sm text-white/60 font-[family-name:var(--font-montserrat)] mb-4 leading-relaxed">
                Damas VDN
                <span className="block text-xs text-white/30 mt-0.5">En face Majorel, VDN, Dakar</span>
              </p>
              <p className="text-sm text-white/60 font-[family-name:var(--font-montserrat)] leading-relaxed">
                Le Boulevard
                <span className="block text-xs text-white/30 mt-0.5">25 Bd de la République, Dakar</span>
              </p>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-[0.6rem] tracking-widest uppercase text-white/25 font-[family-name:var(--font-montserrat)] mb-5">
                Contact &amp; Réseaux
              </h4>
              <a
                href="tel:+221773640909"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors font-[family-name:var(--font-montserrat)] mb-3"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                +221 77 364 09 09
              </a>
              <a
                href="https://instagram.com/Damas.sn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-blvd-gold transition-colors font-[family-name:var(--font-montserrat)]"
              >
                <InstagramIcon />
                @Damas.sn
              </a>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/[0.05] text-center space-y-1.5">
            <p className="text-[0.6rem] tracking-widest uppercase text-white/20 font-[family-name:var(--font-montserrat)]">
              © 2025 Groupe Damas &nbsp;·&nbsp; Dakar, Sénégal
            </p>
            <p className="text-[0.6rem] text-white/20 font-[family-name:var(--font-montserrat)]">
              Built by{" "}
              <a
                href="https://www.neurogrid.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/50 transition-colors underline underline-offset-2"
              >
                Neurogrid
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
