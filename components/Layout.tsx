import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  slideIndex: number;
  totalSlides: number;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, slideIndex, totalSlides, title }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-50 text-accent-gray flex flex-col font-sans selection:bg-nnpc-green selection:text-white">
      {/* Top Bar / Watermark */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start z-20 pointer-events-none">
        <div className="opacity-0">
            {/* Placeholder for balance */}
        </div>
        <div className="flex flex-col items-end">
           <h3 className="text-nnpc-green font-heading font-bold tracking-widest text-xs md:text-sm uppercase opacity-50">TITA TEC LTD</h3>
           {title && <span className="text-[10px] md:text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{title}</span>}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 flex flex-col md:justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full h-full overflow-y-auto md:overflow-visible [&::-webkit-scrollbar]:hidden pt-20 pb-24 md:py-0">
         {children}
      </main>

      {/* Footer / Progress */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex justify-between items-end z-20 pointer-events-none">
        <div className="text-[10px] md:text-xs text-gray-400 font-medium">
          CONFIDENTIAL & PROPRIETARY
        </div>
        <div className="flex items-center gap-4">
           <div className="text-xs md:text-sm font-heading font-bold text-nnpc-green">
             {slideIndex + 1} <span className="text-gray-300 mx-1">/</span> {totalSlides}
           </div>
        </div>
      </div>
      
      {/* Background Decor - Subtle Geometric */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-nnpc-green/5 rounded-full blur-3xl pointer-events-none z-0" />
    </div>
  );
};