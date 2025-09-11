import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'what-is', label: 'What is Vibe Coding?' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'get-inspired', label: 'Get Inspired' },
  { id: 'workshop', label: 'Creative Workshop' },
  { id: 'perfect-prompt', label: 'Perfect Prompt' },
  { id: 'pro-tips', label: 'Pro Tips' },
  { id: 'choose-tool', label: 'Choose Your Tool' },
  { id: 'ready', label: 'Ready to Create?' },
];

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (index: number) => void;
}

export default function Navigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onSlideSelect 
}: NavigationProps) {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Vibe Coding
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onPrevious}
              disabled={currentSlide === 0}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => onSlideSelect(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-gradient-primary scale-125"
                      : "bg-muted hover:bg-muted-foreground/20"
                  )}
                  title={section.label}
                  aria-label={`Go to ${section.label}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>
    </nav>
  );
}