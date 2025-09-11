import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Palette, Zap, RefreshCw, TestTube } from 'lucide-react';

const tips = [
  {
    icon: Target,
    category: "Be Specific",
    title: "🎯 Be Specific",
    description: "The more details you include, the better your results. Mention your audience, features, colors, and style preferences."
  },
  {
    icon: Users,
    category: "Think Mobile-First",
    title: "📱 Think Mobile-First",
    description: "Most people use phones, so always mention mobile-friendly design and touch-friendly buttons."
  },
  {
    icon: Palette,
    category: "Describe Your Style",
    title: "🎨 Describe Your Style",
    description: "'Professional and clean' creates something very different from 'fun and colorful' - be specific about the vibe you want."
  },
  {
    icon: Zap,
    category: "Start Simple",
    title: "⚡ Start Simple",
    description: "Build a basic version first, then add features. It's easier to improve something that works than to fix something complicated."
  },
  {
    icon: RefreshCw,
    category: "Iterate and Improve",
    title: "🔄 Iterate and Improve",
    description: "Use the feedback option to refine your project. Small tweaks can make a huge difference."
  },
  {
    icon: TestTube,
    category: "Plan the User Journey",
    title: "📊 Plan the User Journey",
    description: "Think about how someone will use your creation from start to finish before you build it."
  }
];

export default function ProTipsSection() {
  return (
    <section id="pro-tips" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Pro Tips for Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Level up your AI collaboration skills with these expert strategies. 
            These tips will transform your prompts from good to absolutely amazing! 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <Card 
                key={index}
                className="border-0 bg-card/80 backdrop-blur-sm hover-lift group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      index % 3 === 0 ? 'bg-gradient-primary' :
                      index % 3 === 1 ? 'bg-gradient-secondary' : 'bg-gradient-accent'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Badge 
                          variant="secondary" 
                          className={`mr-3 ${
                            index % 3 === 0 ? 'bg-primary/10 text-primary' :
                            index % 3 === 1 ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {tip.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {tip.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16">
          <Card className="border-0 bg-gradient-hero/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                🎯 Golden Rule of Vibe Coding
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                "Describe your app like you're explaining it to a friend who's going to build it for you. 
                Be enthusiastic, be specific, and don't hold back on the creative details. 
                The AI loves when you get excited about your ideas!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}