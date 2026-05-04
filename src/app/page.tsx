import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-dvh">
      {/* ─── Hero Section ─── */}
      <section className="flex flex-col items-center justify-center px-6 pt-14 pb-8 text-center">
        <h1
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-blvd-navy tracking-tight animate-fade-in-up"
        >
          Dalal Ak Jaam
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-500 font-[family-name:var(--font-montserrat)] max-w-md animate-fade-in-up delay-200">
          Bienvenue chez Damas. Choisissez votre expérience.
        </p>

        {/* ─── Decorative divider ─── */}
        <div className="mt-6 flex items-center gap-3 animate-fade-in delay-300">
          <span className="block w-12 h-px bg-blvd-gold/40" />
          <span className="block w-2 h-2 rounded-full bg-blvd-gold" />
          <span className="block w-12 h-px bg-blvd-gold/40" />
        </div>
      </section>

      {/* ─── Brand Cards ─── */}
      <section className="flex-1 flex flex-col md:flex-row gap-4 px-4 pb-6">
        {/* Damas VDN Card */}
        <Link
          href="/menu?brand=damas"
          id="card-damas"
          className="group relative flex-1 min-h-[280px] md:min-h-[400px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02] animate-fade-in-up delay-300"
        >
          <Image
            src="/images/hero-damas.jpg"
            alt="Damas VDN — Boulangerie et Fast Casual"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Protective dark-to-orange gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/80" />

          {/* Card content — logo centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
            <Image
              src="/logos/damas.svg"
              alt="Damas Logo"
              width={192}
              height={96}
              className="w-48 h-auto object-contain mb-4 drop-shadow-lg"
              priority
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90 font-[family-name:var(--font-montserrat)]">
              Boulangerie &amp; Fast Casual
            </span>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span>Découvrir le menu</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* Le Boulevard Card */}
        <Link
          href="/menu?brand=boulevard"
          id="card-boulevard"
          className="group relative flex-1 min-h-[280px] md:min-h-[400px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02] animate-fade-in-up delay-500"
        >
          <Image
            src="/images/hero-boulevard.jpg"
            alt="Le Boulevard by Damas — Salon de Thé et Brunch"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Protective dark-to-navy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/25 transition-opacity duration-500 group-hover:from-black/80" />

          {/* Card content — logo centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
            <Image
              src="/logos/boulevard.svg"
              alt="Le Boulevard by Damas Logo"
              width={192}
              height={96}
              className="w-48 h-auto object-contain mb-4 drop-shadow-lg"
              priority
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90 font-[family-name:var(--font-montserrat)]">
              Salon de Thé &amp; Brunch
            </span>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span>Découvrir le menu</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </Link>
      </section>

      {/* ─── Footer Bar ─── */}
      <footer className="sticky bottom-0 z-50 glass-overlay bg-white/80 border-t border-gray-100 py-3 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          <a
            href="tel:+221773640909"
            id="footer-phone"
            className="text-xs text-gray-500 hover:text-blvd-navy transition-colors font-[family-name:var(--font-montserrat)]"
          >
            +221 77 364 09 09
          </a>
          <a
            href="https://wa.me/221773640909?text=Bonjour%20Damas%20%21%20Je%20souhaite%20passer%20commande."
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp"
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
