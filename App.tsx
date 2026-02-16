import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { 
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, Slide11 
} from './components/Slides';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SLIDES = [
  { id: 1, component: Slide1, title: "Cover" },
  { id: 2, component: Slide2, title: "About TITA TEC" },
  { id: 3, component: Slide3, title: "Observations" },
  { id: 4, component: Slide4, title: "Challenges & Opportunities" },
  { id: 5, component: Slide5, title: "Solution Overview" },
  { id: 6, component: Slide6, title: "UX Enhancements" },
  { id: 7, component: Slide7, title: "Payment & Incentives" },
  { id: 8, component: Slide8, title: "Delivery & Governance" },
  { id: 9, component: Slide9, title: "Expected Outcomes" },
  { id: 10, component: Slide10, title: "Next Steps" },
  { id: 11, component: Slide11, title: "Contact Us" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const ActiveComponent = SLIDES[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      {/* Slide Container */}
      <Layout 
        slideIndex={currentSlide} 
        totalSlides={SLIDES.length} 
        title={SLIDES[currentSlide].title}
      >
        <ActiveComponent isActive={true} />
      </Layout>

      {/* Navigation Controls (Floating) */}
      <div className="absolute bottom-10 right-6 md:bottom-8 md:right-8 z-50 flex gap-2">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/80 hover:bg-white text-nnpc-dark shadow-lg backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === SLIDES.length - 1}
          className="p-3 rounded-full bg-nnpc-green hover:bg-nnpc-dark text-white shadow-lg backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}