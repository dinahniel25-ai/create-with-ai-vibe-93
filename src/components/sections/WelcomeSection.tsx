import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

export default function WelcomeSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('what-is');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="flex items-center justify-center mb-8 animate-bounce-in">
          <Sparkles className="w-8 h-8 text-primary mr-4" />
          <Zap className="w-6 h-6 text-secondary" />
          <Sparkles className="w-8 h-8 text-accent ml-4" />
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in-up">
          Vibe Coding
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
          Build games, tools, and websites by{' '}
          <span className="text-primary font-semibold">simply describing them</span>
        </p>
        
        <div className="mb-12 animate-fade-in-up delay-300">
          <Button 
            onClick={scrollToNext}
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform px-8 py-4 text-lg font-semibold glow"
          >
            Start Your Journey
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg animate-fade-in-up delay-500">
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
            <span>No coding required</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
            <span>AI-powered creation</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
            <span>Real-time results</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}