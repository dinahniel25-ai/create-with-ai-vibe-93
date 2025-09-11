import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import SectionNavigation from '@/components/ui/section-navigation';
import WelcomeSection from '@/components/sections/WelcomeSection';
import WhatIsSection from '@/components/sections/WhatIsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import GetInspiredSection from '@/components/sections/GetInspiredSection';
import WorkshopSection from '@/components/sections/WorkshopSection';
import PerfectPromptSection from '@/components/sections/PerfectPromptSection';
import ProTipsSection from '@/components/sections/ProTipsSection';
import ChooseToolSection from '@/components/sections/ChooseToolSection';
import ReadySection from '@/components/sections/ReadySection';

const sections = [
  WelcomeSection,
  WhatIsSection,
  HowItWorksSection,
  GetInspiredSection,
  WorkshopSection,
  PerfectPromptSection,
  ProTipsSection,
  ChooseToolSection,
  ReadySection,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      touchEndX = event.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrevious();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(prev + 1, sections.length - 1));
  };

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleSlideSelect = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={sections.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSlideSelect={handleSlideSelect}
      />
      
      <main className="pt-20">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sections.map((SectionComponent, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="max-w-7xl mx-auto">
                <SectionComponent />
                <SectionNavigation
                  currentSlide={currentSlide}
                  totalSlides={sections.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
