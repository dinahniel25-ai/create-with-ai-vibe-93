import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, Zap, Users, Palette, Code } from 'lucide-react';

const tools = [
  {
    name: "Lovable AI",
    tagline: "Code with conversation",
    description: "Perfect for complex web apps, real-time collaboration, and detailed customization. Great for students learning web development.",
    features: ["React & TypeScript", "Real-time preview", "Professional code", "Database integration"],
    bestFor: "Web applications, portfolios, business tools",
    difficulty: "Beginner to Advanced",
    color: "primary",
    icon: Code,
    url: "https://lovable.dev"
  },
  {
    name: "Tempo Labs",
    tagline: "AI-powered development",
    description: "Advanced AI platform for creating sophisticated applications with cutting-edge features and professional workflows.",
    features: ["Advanced AI tools", "Professional workflows", "Custom integrations", "Enterprise features"],
    bestFor: "Professional apps, enterprise solutions, advanced projects",
    difficulty: "Intermediate to Advanced",
    color: "secondary",
    icon: Palette,
    url: "https://www.tempo.new/"
  },
  {
    name: "Replit",
    tagline: "Code together, anywhere",
    description: "Collaborative coding platform with AI assistance. Perfect for learning, prototyping, and building full applications.",
    features: ["Multi-language support", "Real-time collaboration", "AI coding assistant", "Instant deployment"],
    bestFor: "Learning projects, prototypes, collaborative coding",
    difficulty: "Beginner to Intermediate",
    color: "accent",
    icon: Users,
    url: "https://replit.com/"
  },
  {
    name: "Bubble",
    tagline: "Visual programming",
    description: "Build full-stack applications with visual programming. Perfect for complex business logic and user workflows.",
    features: ["Visual workflow", "Database design", "API integration", "User authentication"],
    bestFor: "Complex apps, marketplaces, SaaS platforms",
    difficulty: "Intermediate to Advanced",
    color: "primary",
    icon: Zap,
    url: "https://bubble.io"
  }
];

export default function ChooseToolSection() {
  return (
    <section id="choose-tool" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Choose Your Tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build? Each AI platform has its superpowers. 
            Pick the one that matches your project vision and skill level! 🛠️
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card 
                key={index}
                className="border-0 bg-card/80 backdrop-blur-sm hover-lift group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl ${
                        tool.color === 'primary' ? 'bg-gradient-primary' :
                        tool.color === 'secondary' ? 'bg-gradient-secondary' : 'bg-gradient-accent'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{tool.tagline}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="font-semibold text-foreground">Best for: </span>
                        <span className="text-muted-foreground">{tool.bestFor}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Difficulty: </span>
                        <Badge 
                          variant="secondary"
                          className={`${
                            tool.difficulty.includes('Beginner') ? 'bg-green-100 text-green-800' :
                            tool.difficulty.includes('Intermediate') ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {tool.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary text-white hover:scale-105 transition-transform"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    Try {tool.name}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                🤔 Not Sure Which to Choose?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Start with the tool that matches what you're looking for. 
                You can always try multiple platforms with the same idea to see which workflow you prefer!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <strong className="text-green-600 dark:text-green-400">Want the simplest experience?</strong>
                  <br />→ Lovable AI
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <strong className="text-blue-600 dark:text-blue-400">Want more customization options?</strong>
                  <br />→ Replit
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <strong className="text-purple-600 dark:text-purple-400">Want the most advanced features?</strong>
                  <br />→ Tempo Labs or Bubble
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}