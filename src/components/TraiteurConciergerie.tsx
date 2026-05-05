"use client";

import React from 'react';
import { ChefHat, Truck, Award } from 'lucide-react';

/**
 * TraiteurConciergerie Component
 * High-end B2B lead capture for luxury catering service in Dakar.
 * Aesthetic: Quiet Luxury / LVMH-inspired.
 */
export default function TraiteurConciergerie() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B5945C]/10 via-[#0a0a0a] to-[#0a0a0a] flex items-center justify-center p-6 lg:p-12 selection:bg-[#B5945C]/30">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: The Pitch */}
        <div className="space-y-10">
          <div className="space-y-6">
            <span className="text-xs tracking-[0.3em] text-[#B5945C] uppercase font-sans font-medium">
              SERVICE TRAITEUR VIP
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
              L'Excellence à Grande Échelle.
            </h1>
            <p className="text-gray-400 text-lg max-w-md font-sans leading-relaxed">
              Des loges présidentielles aux galas de 500 invités. Confiez-nous l'ingénierie de vos réceptions.
            </p>
          </div>

          <ul className="space-y-6 pt-4">
            <li className="text-gray-300 flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-[#B5945C]/5 border border-[#B5945C]/20 group-hover:border-[#B5945C]/40 transition-colors">
                <ChefHat className="w-5 h-5 text-[#B5945C]" />
              </div>
              <span className="text-base tracking-wide font-light">35+ Experts Culinaires</span>
            </li>
            
            <li className="text-gray-300 flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-[#B5945C]/5 border border-[#B5945C]/20 group-hover:border-[#B5945C]/40 transition-colors">
                <Truck className="w-5 h-5 text-[#B5945C]" />
              </div>
              <span className="text-base tracking-wide font-light">Logistique Frigorifique Intégrée</span>
            </li>

            <li className="text-gray-300 flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-[#B5945C]/5 border border-[#B5945C]/20 group-hover:border-[#B5945C]/40 transition-colors">
                <Award className="w-5 h-5 text-[#B5945C]" />
              </div>
              <span className="text-base tracking-wide font-light">Capacité 500+ Couverts</span>
            </li>
          </ul>
        </div>

        {/* Right Column: The Form */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 lg:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#B5945C]/10 blur-[80px] rounded-full" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#B5945C]/80 ml-0.5 font-sans font-semibold">
                Type d'Événement
              </label>
              <select className="bg-transparent border-b border-white/20 text-white focus:border-[#B5945C] focus:ring-0 transition-colors py-3 w-full appearance-none outline-none font-sans cursor-pointer">
                <option value="" disabled selected className="bg-[#0a0a0a]">Sélectionnez l'envergure</option>
                <option value="corporate" className="bg-[#0a0a0a]">Corporate</option>
                <option value="mariage" className="bg-[#0a0a0a]">Mariage</option>
                <option value="galas" className="bg-[#0a0a0a]">Galas Institutionnels</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#B5945C]/80 ml-0.5 font-sans font-semibold">
                Nombre d'Invités Estimé
              </label>
              <input 
                type="number" 
                placeholder="Ex: 250"
                className="bg-transparent border-b border-white/20 text-white focus:border-[#B5945C] focus:ring-0 transition-colors py-3 w-full outline-none font-sans placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#B5945C]/80 ml-0.5 font-sans font-semibold">
                Date de l'Événement
              </label>
              <input 
                type="date" 
                className="bg-transparent border-b border-white/20 text-white focus:border-[#B5945C] focus:ring-0 transition-colors py-3 w-full outline-none font-sans [color-scheme:dark] cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#B5945C]/80 ml-0.5 font-sans font-semibold">
                Adresse Email Professionnelle
              </label>
              <input 
                type="email" 
                placeholder="direction@votre-entreprise.sn"
                className="bg-transparent border-b border-white/20 text-white focus:border-[#B5945C] focus:ring-0 transition-colors py-3 w-full outline-none font-sans placeholder:text-white/10"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-transparent border border-[#B5945C] text-[#B5945C] hover:bg-[#B5945C] hover:text-white transition-all duration-500 py-5 rounded-sm tracking-[0.2em] uppercase text-xs mt-6 font-semibold shadow-lg shadow-[#B5945C]/5"
            >
              Demander une Consultation Privée
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
