import React from 'react';
import { Phone } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
      {/* Call Button Option */}
      <a
        href={`tel:${ACADEMY_DATA.brand.phoneRaw}`}
        aria-label="Call Awad Educational Academy"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy-900 hover:bg-brand-600 text-white shadow-2xl border-2 border-white hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-6 h-6 text-white" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-navy-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800 hidden sm:block">
          Call {ACADEMY_DATA.brand.phoneDisplay}
        </span>
      </a>

      {/* Floating WhatsApp Option */}
      <a
        href={ACADEMY_DATA.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Awad Educational Academy on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl border-2 border-white hover:scale-110 transition-all duration-300"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />

        <WhatsAppIcon className="w-7 h-7 fill-current" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-navy-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800 hidden sm:block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

