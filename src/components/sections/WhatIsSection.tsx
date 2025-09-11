import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wand2, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Magic ✨",
    description: "Just describe what you want to build - games, apps, websites - and watch AI bring your ideas to life instantly!"
  },
  {
    icon: Wand2,
    title: "No Coding Required 🚀",
    description: "Skip the complex programming! Use natural language to create interactive experiences that actually work."
  },
  {
    icon: Rocket,
    title: "Real-Time Creation ⚡",
    description: "See your ideas transform into working applications in seconds, not weeks. Edit and refine on the fly!"
  },
  {
    icon: Users,
    title: "Built for Everyone 🌟",
    description: "Whether you're a student, teacher, or creative mind - if you can dream it, you can build it!"
  }
];

export default function WhatIsSection() {
  return (
    <section id="what-is" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            What is Vibe Coding?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagine having a coding superpower that lets you create amazing digital experiences 
            just by describing them. That's the magic of Vibe Coding! 🎯
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="hover-lift border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🎨 Turn Your Wildest Ideas Into Reality
            </h3>
            <p className="text-lg opacity-90">
              From habit trackers that feel like games, to learning tools that adapt to your style, 
              to apps that solve real problems - the only limit is your imagination!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}