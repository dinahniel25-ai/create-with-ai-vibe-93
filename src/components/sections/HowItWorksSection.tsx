import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Describe Your Vision",
    description: "Tell the AI what you want to create using simple, everyday language. Be as creative and detailed as you want!",
    example: "\"Make a habit tracker that looks like a board game where I collect points for completing daily tasks\""
  },
  {
    number: "02", 
    icon: Sparkles,
    title: "Watch the Magic Happen",
    description: "The AI understands your description and starts building your app in real-time. No code, no complexity!",
    example: "The AI creates interactive elements, designs the interface, and adds the functionality you requested"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Refine & Launch",
    description: "Test your creation, make adjustments by simply asking for changes, and share your amazing app with the world!",
    example: "\"Can you make the points bigger and add a celebration animation when I complete a task?\""
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating with AI is as easy as having a conversation. Here's how the magic unfolds:
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className={`border-0 overflow-hidden hover-lift ${
                  index % 2 === 0 ? 'bg-primary-muted/20' : 'bg-secondary-muted/20'
                }`}
              >
                <CardContent className="p-0">
                  <div className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="flex-1 p-8">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                          index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                        }`}>
                          <span className="text-2xl font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                        <div className={`p-3 rounded-xl ${
                          index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            index % 2 === 0 ? 'text-primary' : 'text-secondary'
                          }`} />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className={`p-4 rounded-lg border-l-4 ${
                        index % 2 === 0 
                          ? 'bg-primary/5 border-primary' 
                          : 'bg-secondary/5 border-secondary'
                      }`}>
                        <p className="text-sm text-muted-foreground italic">
                          Example: {step.example}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-8">
                      <div className={`w-full h-64 rounded-xl flex items-center justify-center ${
                        index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                      } opacity-20`}>
                        <IconComponent className="w-24 h-24 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              💡 Pro Tip
            </h3>
            <p className="text-lg text-muted-foreground">
              The more specific and creative your description, the more amazing your result will be! 
              Don't hold back - describe colors, interactions, animations, and even the feeling you want users to have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}