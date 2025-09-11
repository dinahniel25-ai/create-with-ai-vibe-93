import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function SectionNavigation({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext 
}: SectionNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 px-4">
      <Button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </Button>
      
      <div className="text-sm text-muted-foreground">
        Page {currentSlide + 1} of {totalSlides}
      </div>
      
      <Button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}